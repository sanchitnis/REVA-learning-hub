# Quick Start - Presentation Creator (Sprint 1)

This quick start guide explains how to run, test, and verify the presentation conversion tool locally during Sprint 1.

## Prerequisites

Ensure you have Python installed, along with the required dependencies:

```bash
pip install -r requirements.txt
```
*(Dependencies: `pyyaml`, `markdown2`, `qrcode`, `pillow`)*

## Local Conversion Workflow

During Sprint 1, every presentation project has its own folder containing a markdown input file. The `convert.py` script parses the markdown and writes the corresponding HTML output into the same folder.

### 1. Run the Conversion

To convert a specific project's markdown presentation:
```bash
python convert.py project1/sample-presentation.md
```

### 2. View the Output

Open the generated HTML file in any web browser to inspect formatting, layout, and quiz functions:
```
project1/index.html
```

## Running a Test Server

If you want to view the presentation over `localhost` (highly recommended for verifying interactive components, links, and cross-origin policies):

1. Start Python's built-in HTTP server from the root or the tool directory:
   ```bash
   python -m http.server 8000
   ```
2. Open your browser and navigate to:
   ```
   http://localhost:8000/project1/index.html
   ```

## Supported Features in Input markdown
Refer to [input-template.md](file:///d:/Github/REVA-learning-hub/tools/presentation-creator/input-template.md) for full details on formatting specifications, including:
- YAML Front Matter fields (`title`, `author`, `affiliation`, etc.)
- Slide delimiter (`---` with surrounding blank lines)
- Interactive quiz tags (`[quiz:type=mcq]...[/quiz]`)
- QR Code components (`[qr:url=...:text="..."]`)
