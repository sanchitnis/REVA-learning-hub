#!/usr/bin/env python3
"""
Simple Markdown to HTML Presentation Converter
Converts markdown files with front matter into basic HTML presentations.
"""

import re
import sys
import os
try:
    import yaml
except ImportError:
    print("Please install PyYAML: pip install PyYAML")
    sys.exit(1)

from pathlib import Path

def parse_front_matter(content):
    """Extract YAML front matter from markdown."""
    pattern = r'^---\s*\n(.*?)\n---\s*\n'
    match = re.match(pattern, content, re.DOTALL)
    
    if match:
        front_matter = yaml.safe_load(match.group(1))
        remaining = content[match.end():]
        return front_matter, remaining
    
    return {}, content

def extract_slides(content):
    """Split content into slides based on --- separator."""
    slides = re.split(r'\n---+\n', content)
    return [slide.strip() for slide in slides if slide.strip()]

def markdown_to_html(text):
    """Basic markdown to HTML conversion."""
    # Headers
    text = re.sub(r'^# (.+)$', r'<h1>\1</h1>', text, flags=re.MULTILINE)
    text = re.sub(r'^## (.+)$', r'<h2>\1</h2>', text, flags=re.MULTILINE)
    text = re.sub(r'^### (.+)$', r'<h3>\1</h3>', text, flags=re.MULTILINE)
    
    # Bold and italic
    text = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', text)
    text = re.sub(r'\*(.+?)\*', r'<em>\1</em>', text)
    
    # Code blocks
    text = re.sub(r'`([^`]+)`', r'<code>\1</code>', text)
    
    # Links
    text = re.sub(r'\[([^\]]+)\]\(([^\)]+)\)', r'<a href="\2">\1</a>', text)
    
    # Lists
    lines = text.split('\n')
    in_list = False
    result = []
    
    for line in lines:
        if line.strip().startswith('- '):
            if not in_list:
                result.append('<ul>')
                in_list = True
            result.append(f'<li>{line.strip()[2:]}</li>')
        elif line.strip().startswith(('1.', '2.', '3.', '4.', '5.', '6.', '7.', '8.', '9.')):
            if not in_list:
                result.append('<ol>')
                in_list = 'ol'
            result.append(f'<li>{line.strip().split(".", 1)[1].strip()}</li>')
        else:
            if in_list:
                if in_list == 'ol':
                    result.append('</ol>')
                else:
                    result.append('</ul>')
                in_list = False
            if line.strip() and not line.strip().startswith('<'):
                result.append(f'<p>{line}</p>')
            elif line.strip().startswith('<'):
                result.append(line)
    
    if in_list:
        if in_list == 'ol':
            result.append('</ol>')
        else:
            result.append('</ul>')
    
    return '\n'.join(result)

def extract_quiz(content):
    """Extract quiz blocks from content."""
    quiz_pattern = r'\[quiz:type=(\w+)\](.*?)\[/quiz\]'
    quizzes = []
    
    for match in re.finditer(quiz_pattern, content, re.DOTALL):
        quiz_type = match.group(1)
        quiz_content = match.group(2).strip()
        
        lines = quiz_content.split('\n')
        question = ""
        options = []
        correct = ""
        
        for line in lines:
            line = line.strip()
            if line.startswith('Question:'):
                question = line.replace('Question:', '').strip()
            elif line.startswith(('A)', 'B)', 'C)', 'D)')):
                options.append(line)
            elif line.startswith('Correct:'):
                correct = line.replace('Correct:', '').strip()
        
        quizzes.append({
            'type': quiz_type,
            'question': question,
            'options': options,
            'correct': correct
        })
    
    # Remove quiz blocks from content
    content = re.sub(quiz_pattern, '', content, flags=re.DOTALL)
    
    return content, quizzes

def extract_qr_codes(content):
    """Extract QR code markers from content."""
    qr_pattern = r'\[qr:url=([^:]+):text="([^"]+)"\]'
    qr_codes = []
    
    for match in re.finditer(qr_pattern, content):
        qr_codes.append({
            'url': match.group(1),
            'text': match.group(2)
        })
    
    # Remove QR markers from content
    content = re.sub(qr_pattern, '', content)
    
    return content, qr_codes

def generate_html_template(title, author, affiliation, total_slides):
    """Generate the HTML template with embedded CSS and JavaScript."""
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title}</title>
    <style>
        * {{ margin: 0; padding: 0; box-sizing: border-box; }}
        
        body {{
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
        }}
        
        .presentation {{
            background: white;
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            max-width: 1000px;
            width: 100%;
            min-height: 700px;
            overflow: hidden;
        }}
        
        .slide {{
            display: none;
            padding: 60px;
            min-height: 600px;
        }}
        
        .slide.active {{
            display: block;
            animation: fadeIn 0.5s;
        }}
        
        @keyframes fadeIn {{
            from {{ opacity: 0; transform: translateY(20px); }}
            to {{ opacity: 1; transform: translateY(0); }}
        }}
        
        h1 {{ color: #667eea; font-size: 2.5em; margin-bottom: 20px; }}
        h2 {{ color: #764ba2; font-size: 2em; margin-bottom: 20px; }}
        h3 {{ color: #667eea; font-size: 1.5em; margin-bottom: 15px; }}
        p {{ color: #333; line-height: 1.6; margin-bottom: 15px; font-size: 1.1em; }}
        ul, ol {{ margin-left: 30px; margin-bottom: 20px; }}
        li {{ color: #555; line-height: 1.8; margin-bottom: 10px; font-size: 1.1em; }}
        strong {{ color: #667eea; }}
        code {{ background: #f4f4f4; padding: 2px 6px; border-radius: 3px; font-family: 'Courier New', monospace; }}
        a {{ color: #667eea; text-decoration: none; }}
        a:hover {{ text-decoration: underline; }}
        
        .quiz {{
            background: #f8f9fa;
            border-left: 4px solid #667eea;
            padding: 20px;
            margin: 20px 0;
            border-radius: 5px;
        }}
        
        .quiz-question {{
            font-weight: bold;
            color: #333;
            margin-bottom: 15px;
            font-size: 1.2em;
        }}
        
        .quiz-option {{
            padding: 10px;
            margin: 8px 0;
            background: white;
            border: 2px solid #ddd;
            border-radius: 5px;
            cursor: pointer;
            transition: all 0.3s;
        }}
        
        .quiz-option:hover {{ border-color: #667eea; background: #f0f4ff; }}
        .quiz-option.correct {{ border-color: #28a745; background: #d4edda; }}
        .quiz-option.incorrect {{ border-color: #dc3545; background: #f8d7da; }}
        
        .qr-code {{ text-align: center; margin: 30px 0; }}
        .qr-code img {{ width: 200px; height: 200px; border: 2px solid #ddd; border-radius: 10px; }}
        .qr-text {{ margin-top: 10px; color: #666; font-size: 0.9em; }}
        
        .navigation {{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 60px;
            background: #f8f9fa;
            border-top: 1px solid #ddd;
        }}
        
        .nav-button {{
            background: #667eea;
            color: white;
            border: none;
            padding: 12px 30px;
            border-radius: 25px;
            cursor: pointer;
            font-size: 1em;
            transition: all 0.3s;
        }}
        
        .nav-button:hover {{
            background: #764ba2;
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }}
        
        .nav-button:disabled {{ background: #ccc; cursor: not-allowed; transform: none; }}
        .slide-counter {{ color: #666; font-weight: bold; }}
        
        .footer {{
            text-align: center;
            padding: 20px;
            background: #f8f9fa;
            color: #666;
            font-size: 0.9em;
        }}
    </style>
</head>
<body>
    <div class="presentation">
"""

def generate_html(front_matter, slides, output_path):
    """Generate HTML presentation."""
    title = front_matter.get('title', 'Presentation')
    author = front_matter.get('author', '')
    affiliation = front_matter.get('affiliation', '')
    
    html = generate_html_template(title, author, affiliation, len(slides))
    
    # Add slides
    for i, slide_content in enumerate(slides):
        slide_content, quizzes = extract_quiz(slide_content)
        slide_content, qr_codes = extract_qr_codes(slide_content)
        slide_html = markdown_to_html(slide_content)
        
        html += f'        <div class="slide {"active" if i == 0 else ""}">\n'
        html += f'            {slide_html}\n'
        
        # Add quizzes
        for quiz in quizzes:
            html += '            <div class="quiz">\n'
            html += f'                <div class="quiz-question">{quiz["question"]}</div>\n'
            for option in quiz['options']:
                html += f'                <div class="quiz-option" onclick="checkAnswer(this, \'{option[0]}\', \'{quiz["correct"]}\')">{option}</div>\n'
            html += '            </div>\n'
        
        # Add QR codes
        for qr in qr_codes:
            html += f'''            <div class="qr-code">
                <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data={qr['url']}" alt="QR Code">
                <div class="qr-text">{qr['text']}</div>
            </div>\n'''
        
        html += '        </div>\n'
    
    # Add navigation and footer
    html += f"""        <div class="navigation">
            <button class="nav-button" id="prevBtn" onclick="changeSlide(-1)">← Previous</button>
            <div class="slide-counter">
                <span id="currentSlide">1</span> / <span id="totalSlides">{len(slides)}</span>
            </div>
            <button class="nav-button" id="nextBtn" onclick="changeSlide(1)">Next →</button>
        </div>
        <div class="footer">
            <strong>{title}</strong><br>{author} • {affiliation}
        </div>
    </div>
    
    <script>
        let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');
        const totalSlides = slides.length;
        
        function showSlide(n) {{
            slides[currentSlide].classList.remove('active');
            currentSlide = (n + totalSlides) % totalSlides;
            slides[currentSlide].classList.add('active');
            document.getElementById('currentSlide').textContent = currentSlide + 1;
            document.getElementById('prevBtn').disabled = currentSlide === 0;
            document.getElementById('nextBtn').disabled = currentSlide === totalSlides - 1;
        }}
        
        function changeSlide(direction) {{ showSlide(currentSlide + direction); }}
        
        function checkAnswer(element, selected, correct) {{
            const options = element.parentElement.querySelectorAll('.quiz-option');
            options.forEach(opt => {{
                opt.style.pointerEvents = 'none';
                if (opt.textContent.startsWith(correct)) opt.classList.add('correct');
                else opt.classList.add('incorrect');
            }});
        }}
        
        document.addEventListener('keydown', (e) => {{
            if (e.key === 'ArrowLeft') changeSlide(-1);
            if (e.key === 'ArrowRight') changeSlide(1);
        }});
        
        document.getElementById('prevBtn').disabled = true;
        document.getElementById('totalSlides').textContent = totalSlides;
    </script>
</body>
</html>"""
    
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(html)
    
    print(f"✅ Presentation generated: {output_path}")
    print(f"   Slides: {len(slides)}")
    print(f"   Title: {title}")

def main():
    if len(sys.argv) < 2:
        print("Usage: python convert.py <markdown-file>")
        sys.exit(1)
    
    input_file = sys.argv[1]
    
    if not os.path.exists(input_file):
        print(f"❌ Error: File '{input_file}' not found")
        sys.exit(1)
    
    with open(input_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    front_matter, content = parse_front_matter(content)
    slides = extract_slides(content)
    
    if not slides:
        print("❌ Error: No slides found")
        sys.exit(1)
    
    output_dir = Path('output') / Path(input_file).stem
    output_dir.mkdir(parents=True, exist_ok=True)
    output_file = output_dir / 'index.html'
    
    generate_html(front_matter, slides, output_file)
    
    print(f"\n🚀 To view: Open {output_file} in your browser")

if __name__ == '__main__':
    main()
