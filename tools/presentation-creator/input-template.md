# Presentation Input Format Specification

## Overview

This document defines a **hybrid markdown format** that works as both a **presentation creator input** and **Docusaurus-compatible documentation**. The format is a superset of both systems, allowing single-source content to be repurposed for presentations and documentation.

### Key Features

- ✅ **Presentation-Ready**: Converts to interactive HTML slideshows
- ✅ **Docusaurus-Compatible**: Works as documentation in Docusaurus sites
- ✅ **MDX Support**: Embed React components and JSX
- ✅ **Multi-Format Output**: Single markdown → presentations, docs, blogs
- ✅ **Cross-Referenceable**: Link between presentations and documentation

---

## YAML Front Matter (Required)

Every document must start with YAML front matter enclosed in `---` delimiters:

```markdown
---
title: "Your Presentation Title"
author: "Author Name"
affiliation: "Organization/University"
theme: "default"
date: "2025"
sidebar_label: "Quick Title"
sidebar_position: 1
tags: [ai, learning, education]
---
```

### Front Matter Fields

| Field | Type | Required | Purpose | Docusaurus Use |
|-------|------|----------|---------|-----------------|
| `title` | string | Yes | Main title | Page title & H1 |
| `author` | string | Yes | Author's name | Author metadata |
| `affiliation` | string | Yes | Organization/Institution | Organization tag |
| `theme` | string | No | Presentation theme (default: "default") | Not used in docs |
| `date` | string | No | Publication date | Docusaurus date |
| `sidebar_label` | string | No | Short sidebar label | Docusaurus sidebar |
| `sidebar_position` | number | No | Position in sidebar | Docusaurus ordering |
| `description` | string | No | Page description | SEO meta description |
| `tags` | array | No | Content tags | Docusaurus tag filtering |
| `keywords` | array | No | Search keywords | SEO optimization |
| `image` | string | No | Card/preview image URL | Social sharing |
| `hide_table_of_contents` | boolean | No | Hide TOC in docs | Docusaurus TOC control |
| `pagination_next` | string | No | Next doc link | Docusaurus navigation |
| `pagination_prev` | string | No | Previous doc link | Docusaurus navigation |
| `custom_edit_url` | string | No | GitHub edit link | Docusaurus edit button |

### Front Matter Examples

**For Presentation**:
```yaml
---
title: "Physical AI"
author: "Dr. Sourabh Bodas"
affiliation: "JPCEC"
theme: "default"
date: "2025"
---
```

**For Docusaurus Documentation**:
```yaml
---
title: "Introduction to Physical AI"
sidebar_label: "Physical AI Intro"
sidebar_position: 1
description: "Comprehensive guide to Physical AI systems"
tags: [robotics, ai, automation]
image: /img/physical-ai-cover.png
---
```

**For Hybrid Use**:
```yaml
---
title: "AI-Era Education"
author: "REVA Faculty"
affiliation: "REVA University"
theme: "default"
date: "2025"
sidebar_label: "AI in Education"
sidebar_position: 2
description: "How AI transforms modern education"
tags: [education, ai, pedagogy, reva]
image: /img/ai-education.png
hide_table_of_contents: false
---
```

---

## Slide Structure

### Slide Separator

Slides are separated by `---` on its own line with blank lines before and after:

```markdown
# Slide Title

Slide content here

---

## Next Slide

More content
```

**Important**: Always use blank lines around the `---` separator for proper parsing.

---

## Heading Levels

### H1 - Title Slide
Use single `#` for title slides (typically first slide only):

```markdown
# Main Presentation Title

Subtitle or tagline here
```

### H2 - Section Headers
Use double `##` for slide titles:

```markdown
## Slide Title

Slide content
```

### H3 - Subsections
Use triple `###` for subsection headers within slides:

```markdown
### Key Points

- Point 1
- Point 2
```

### H4 and Beyond
Use `####`, `#####`, `######` for deeper hierarchy within content.

---

## Text Formatting

### Basic Formatting

```markdown
**Bold text** - Use for emphasis
*Italic text* - Use for gentle emphasis
***Bold italic*** - Combine both
`code` - Inline code snippets
~~Strikethrough~~ - Deprecated content
```

### Links

```markdown
[Link Text](https://example.com)
[Email Link](mailto:name@example.com)
```

---

## Lists

### Unordered Lists

```markdown
- First item
- Second item
  - Nested item
  - Another nested item
- Third item
```

### Ordered Lists

```markdown
1. First point
2. Second point
   1. Nested numbered point
   2. Another nested point
3. Third point
```

### Mixed Lists

```markdown
1. Main point
   - Sub-bullet
   - Another sub-bullet
2. Second main point
   - Nested item
```

---

## Tables

Create tables using markdown pipe syntax:

```markdown
| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |
```

### Table Alignment

```markdown
| Left Aligned | Center Aligned | Right Aligned |
|:---|:---:|---:|
| Cell | Cell | Cell |
```

**Alignment Markers**:
- `:---` = Left aligned
- `:---:` = Center aligned
- `---:` = Right aligned

---

## Block Quotes

Use `>` for block quotes:

```markdown
> This is a block quote
> It can span multiple lines
>
> And include multiple paragraphs
```

---

## Admonitions (Docusaurus Callouts)

Docusaurus-compatible admonitions that also render in presentations. Use triple colons syntax:

### Admonition Types

#### Note/Remark
```markdown
:::note
This is a note. It's less critical than a warning but more important than tip.

Some content with **markdown** syntax.
:::
```

#### Tip
```markdown
:::tip
This is a helpful tip or best practice.

- Point 1
- Point 2
:::
```

#### Info
```markdown
:::info
This is general information about the topic.

Use this for contextual information.
:::
```

#### Caution/Warning
```markdown
:::caution
This warns about potential issues or mistakes.

Pay attention to this!
:::
```

#### Danger
```markdown
:::danger
This is a critical warning about safety or data loss.

Proceed with extreme care.
:::
```

#### Success
```markdown
:::success
This highlights a positive outcome or completion.

You've successfully completed the task!
:::
```

### Custom Admonition Titles

```markdown
:::note Custom Title
This admonition has a custom title instead of "Note".

Great for specific warnings or callouts.
:::

:::tip Did You Know?
Admonitions can have any custom title you want!
:::
```

### Nested Content in Admonitions

```markdown
:::warning Complex Admonition

This admonition contains multiple elements:

#### Subheading
- Bullet point 1
- Bullet point 2

| Feature | Status |
|---------|--------|
| A | ✅ Active |
| B | ⚠️ Deprecated |

:::
```

### Presentation Rendering

When rendered as presentations, admonitions are converted to visually distinct callout boxes with appropriate colors and icons:
- :::note → Blue info box
- :::tip → Green tip box  
- :::info → Cyan info box
- :::caution → Orange warning box
- :::danger → Red danger box
- :::success → Emerald success box

---

## Tabs (Multi-Format Content)

Docusaurus tabs allow switching between different content versions. Perfect for showing multiple approaches, languages, or platform-specific instructions:

### Basic Tabs

```markdown
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="python" label="Python" default>
    ```python
    def hello():
        print("Hello, World!")
    ```
  </TabItem>
  <TabItem value="javascript" label="JavaScript">
    ```javascript
    function hello() {
        console.log("Hello, World!");
    }
    ```
  </TabItem>
  <TabItem value="java" label="Java">
    ```java
    public class Hello {
        public static void main(String[] args) {
            System.out.println("Hello, World!");
        }
    }
    ```
  </TabItem>
</Tabs>
```

### Tabs with Different Content Types

```markdown
<Tabs>
  <TabItem value="concept" label="Concept" default>
    
#### Understanding AI

AI is... [conceptual explanation]

  </TabItem>
  <TabItem value="implementation" label="Implementation">
    
#### Building AI Systems

Here's how to implement... [practical guide]

  </TabItem>
  <TabItem value="example" label="Example">
    
#### Real-World Example

Here's a concrete example... [case study]

  </TabItem>
</Tabs>
```

### Platform-Specific Tabs

```markdown
<Tabs groupId="os">
  <TabItem value="windows" label="Windows">
    ```powershell
    npm install
    ```
  </TabItem>
  <TabItem value="macos" label="macOS">
    ```bash
    npm install
    ```
  </TabItem>
  <TabItem value="linux" label="Linux">
    ```bash
    npm install
    ```
  </TabItem>
</Tabs>
```

### Presentation Rendering

When rendered as presentations:
- Tabs appear as clickable buttons/sections within the slide
- Only the default tab is shown in printed presentations
- Interactive version shows all tabs with click navigation

---

## Code Blocks

### Inline Code
Use backticks for inline code:

```markdown
The `function()` method does X
```

### Code Blocks
Use triple backticks with optional language specifier:

````markdown
```python
def hello_world():
    print("Hello, World!")
```
````

### Supported Languages
Common options: `javascript`, `python`, `java`, `html`, `css`, `sql`, `bash`, `yaml`, `json`, `typescript`, `react`, `jsx`, `tsx`, etc.

### Advanced Code Block Features

#### Line Highlighting (Docusaurus)
```markdown
```python title="example.py" {2-3}
def calculate(x, y):
    result = x + y
    return result
```
```

#### Showing Line Numbers
```markdown
```javascript {5} showLineNumbers
const greeting = "Hello";
const name = "World";

function greet() {
    console.log(`${greeting}, ${name}!`);
}
```
```

#### Code Block Title
```markdown
```html title="index.html"
<!DOCTYPE html>
<html>
  <body>Hello world</body>
</html>
```
```

#### Highlight and Disable Lines
```markdown
```python {2} {3}
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)
```
```

#### Language-Specific Line References
```markdown
```jsx {3,7-9}
import React from 'react';

function MyComponent() {
  const [count, setCount] = React.useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
```
```

---

## Images

Embed images using standard markdown syntax:

```markdown
![Alt Text](image-url-or-path)

![Alt Text](image-url "Image Title")
```

**Supported Formats**: PNG, JPG, JPEG, GIF, SVG, WebP

**URL Options**:
- Absolute URL: `https://example.com/image.png`
- Relative path: `./images/diagram.png`
- Data URL: `data:image/png;base64,...`

---

## MDX Components (Docusaurus-Specific)

When used in Docusaurus, you can embed React components directly in markdown:

### Using React Components

```markdown
import DocCardList from '@theme/DocCardList';
import {useDocsSidebar} from '@docusaurus/theme-common/internal';

<DocCardList />
```

### Custom React Components

```markdown
import Alert from '@site/src/components/Alert';

<Alert type="info" title="Custom Component">
  This is a custom React component rendered in markdown!
</Alert>
```

### Embedding Interactive Elements

```markdown
import InteractiveDemo from '@site/src/components/InteractiveDemo';

<InteractiveDemo 
  code="console.log('Hello')"
  language="javascript"
/>
```

---

## Docusaurus Link Syntax

### Internal Links (Docusaurus)

```markdown
[Link to another doc](/docs/other-doc)
[Relative link](../sibling-doc)
[Link with ID](#heading-id)
```

### Automatic Link Generation

Docusaurus automatically generates links to other docs:

```markdown
[Physical AI Guide](/docs/tools/presentation-creator)
[Return to Home](/)
```

### Reference-Style Links

```markdown
This is a [link][example].

[example]: https://example.com
```

---

## Docusaurus Front Matter Features (Extended)

### Document Metadata

```yaml
---
slug: custom-url-path
id: unique-document-id
last_update:
  date: 2025-01-15
  author: Dr. Jane Doe
---
```

### Docusaurus Versioning

```yaml
---
version: 1.0
deprecated: false
deprecation_message: "Use version 2.0 instead"
---
```

### Custom Properties

```yaml
---
title: "My Doc"
custom_data:
  difficulty: "intermediate"
  time_to_read: "15 mins"
  prerequisites: [basics, fundamentals]
---
```

---

## Comments and Notes (Docusaurus & Presentation)

### HTML Comments (Ignored in Output)

```markdown
<!-- This comment won't appear in output -->

Regular content here.

<!-- TODO: Update this section before publishing -->
```

---

## Table of Contents (Docusaurus)

Docusaurus automatically generates TOC from headings. Control it:

```yaml
---
hide_table_of_contents: false
toc_min_heading_level: 2
toc_max_heading_level: 3
---
```

---

## Docusaurus Special Syntax

### Definition Lists

```markdown
Term
: Definition of the term

Another Term
: Definition of another concept
```

### Footnotes

```markdown
This is a statement[^1] with a footnote.

[^1]: The footnote text appears at the end.
```

### Subscript & Superscript

```markdown
H~2~O (water)
E=mc^2^ (Einstein's formula)
```

---

## Hybrid Presentation-Documentation Examples

### Example 1: Slide as Documentation Section

```markdown
---
title: "AI Applications"
sidebar_label: "Applications"
sidebar_position: 3
---

## Healthcare Applications

### Diagnostic AI

Artificial intelligence in healthcare provides several advantages:

:::tip Key Benefit
AI systems can analyze medical images faster than human radiologists.
:::

| Application | Accuracy | Time Saved |
|---|---|---|
| X-Ray Analysis | 94% | 50% faster |
| MRI Analysis | 91% | 45% faster |

#### Real-World Implementation

```python
import ai_medical

# Load pretrained model
model = ai_medical.DiagnosticModel()

# Analyze image
result = model.predict('xray.jpg')
print(f"Diagnosis: {result.diagnosis}")
```

[Learn more about medical AI](../advanced/medical-ai)

---

## Surgical Robotics

### da Vinci System

The da Vinci Surgical System is a...
```

### Example 2: Multi-Format Presentation Section

```markdown
---
title: "Setting Up Your Environment"
sidebar_label: "Setup"
sidebar_position: 1
tags: [setup, installation, getting-started]
---

## Installation & Setup

Choose your operating system:

<Tabs groupId="os">
  <TabItem value="windows" label="Windows" default>
    
### Windows Installation

1. Download the installer
2. Run the setup wizard
3. Follow the prompts

```powershell
winget install tool-name
```

  </TabItem>
  <TabItem value="mac" label="macOS">
    
### macOS Installation

1. Install via Homebrew
2. Verify installation

```bash
brew install tool-name
```

  </TabItem>
  <TabItem value="linux" label="Linux">
    
### Linux Installation

```bash
sudo apt-get install tool-name
# or for Fedora
sudo dnf install tool-name
```

  </TabItem>
</Tabs>

:::caution System Requirements
Ensure you have at least 8GB RAM and 2GB free disk space.
:::
```

### Example 3: Academic Content

```markdown
---
title: "Foundation Models for Robotics"
author: "Dr. Research"
affiliation: "AI Lab"
sidebar_label: "Foundation Models"
sidebar_position: 5
description: "Understanding foundation models in robotic systems"
tags: [robotics, ai, foundation-models, research]
---

## Foundation Models in Robotics

### What are Foundation Models?

:::note Definition
Foundation models are large neural networks trained on diverse data that can be adapted to many specific tasks through fine-tuning.
:::

### Key Models

<Tabs>
  <TabItem value="rt-1" label="RT-1" default>
    
#### Robotics Transformer 1

- Developed by Google DeepMind
- Trained on diverse robotic tasks
- Zero-shot transfer capabilities

```python
from rt1 import RoboticsTransformer

model = RoboticsTransformer.load('rt1-base')
action = model.predict(image=camera_feed)
```

  </TabItem>
  <TabItem value="rt-2" label="RT-2">
    
#### Robotics Transformer 2

- Vision-Language-Action models
- Natural language instruction following
- Improved generalization

  </TabItem>
</Tabs>
```

---

## Interactive Components

### Quiz Component

#### Multiple Choice Quiz

```markdown
[quiz:type=mcq]
Question: What is the correct answer?
A) Option 1
B) Option 2
C) Option 3
D) Option 4
Correct: C
[/quiz]
```

**Quiz Syntax**:
- `[quiz:type=mcq]` - Opens quiz block
- `Question:` - The question text (required)
- `A)`, `B)`, `C)`, `D)` - Answer options (up to 4)
- `Correct:` - Correct answer letter (A, B, C, or D)
- `[/quiz]` - Closes quiz block

#### True/False Quiz

```markdown
[quiz:type=tf]
Question: True or False - This statement is accurate?
A) True
B) False
Correct: A
[/quiz]
```

#### Short Answer Quiz (Optional)

```markdown
[quiz:type=short]
Question: What is the capital of France?
Correct: Paris
[/quiz]
```

---

### QR Code Component

Generate a QR code that links to a URL:

```markdown
[qr:url=https://example.com:text="Scan me!"]
```

**QR Code Syntax**:
- `[qr:url=<URL>:text="<Label>"]`
- URL must be a valid HTTPS link
- Text is optional (displays below QR code)
- Max text length: 50 characters

### QR Code Examples

```markdown
[qr:url=https://www.reva.edu.in:text="Visit REVA"]

[qr:url=https://github.com/user/repo:text="GitHub Repository"]

[qr:url=mailto:contact@example.com:text="Email Us"]
```

---

## Special Formatting

### Emphasis Callouts (Presentation-Style)

For presentations, use emoji-based callouts:

```markdown
> ✅ **Key Takeaway**
> This is an important point to remember

> ⚠️ **Warning**
> Be careful about this aspect

> 💡 **Tip**
> Here's a helpful suggestion

> ❓ **Question**
> Something to think about
```

### Docusaurus Admonitions (Recommended)

For Docusaurus compatibility, prefer the admonition syntax:

```markdown
:::success Key Takeaway
This is an important point to remember
:::

:::caution Warning
Be careful about this aspect
:::

:::tip Helpful Suggestion
Here's a helpful suggestion
:::

:::info Question to Consider
Something to think about
:::
```

**Available Icons**:
- ✅ Check - Positive/confirmation → :::success
- ⚠️ Warning - Caution/alert → :::caution
- 💡 Tip - Helpful information → :::tip
- ❓ Question - Inquiry → :::info
- 🎯 Target - Goal/objective → :::note (Custom title)
- 📌 Pin - Important note → :::note
- 🚀 Rocket - Exciting/innovative → :::success
- 📊 Chart - Data/metrics → :::info
- 🔍 Magnifying Glass - Deep dive → :::note
- 💻 Computer - Technology → :::info

---

## Lists with Descriptions

### Definition Lists (using variations)

```markdown
**Term**
: Definition of the term

**Another Term**
: Definition explaining this term
```

---

## Horizontal Rules

Create visual separators (not the same as slide separators):

```markdown
Content above

---

Content below (same slide)
```

**Note**: In a slide context, use this sparingly. For separating slides, ensure blank lines surround the `---`.

---

## Special Characters and Symbols

```markdown
© ® ™ € £ ¥
→ ← ↑ ↓ ↔ ⇒
• ◦ ▪ ■ ▸ ▾
... — – − 
± × ÷ ≈ ≠ ≤ ≥
½ ⅓ ¼ ¾
```

---

## Layout Components

### Two-Column Layout (using tables)

```markdown
| Left Column | Right Column |
|---|---|
| **Left Content** | **Right Content** |
| • Point 1 | • Point A |
| • Point 2 | • Point B |
| • Point 3 | • Point C |
```

### Numbered Steps

```markdown
1. **First Step**: Description of the first action
2. **Second Step**: Description of the second action
3. **Third Step**: Description of the third action
```

---

## Advanced Examples

### Section Title Slide

```markdown
## Physical AI Applications

### Healthcare

More specific content here

---

## Slide with Mixed Content

Content introduction

| Category | Value |
|----------|-------|
| A | 100 |
| B | 200 |

Key points:
- First point
- Second point

[quiz:type=mcq]
Question: What is Physical AI?
A) Software only
B) Perceive, reason, and act in physical world
C) Theoretical concept
D) Outdated technology
Correct: B
[/quiz]

Contact info:
[qr:url=https://example.com:text="Learn More"]
```

---

## Complete Example Presentation

```markdown
---
title: "Introduction to AI"
author: "Dr. Jane Doe"
affiliation: "University of Learning"
theme: "default"
date: "2025"
sidebar_label: "AI Intro"
sidebar_position: 1
tags: [ai, education, introduction]
---

# Welcome to AI

**An Introductory Journey**

---

## What is AI?

### Definition

**Artificial Intelligence** is the simulation of human intelligence processes by machines.

:::note Key Concepts
- Learning from data
- Problem-solving
- Pattern recognition
- Autonomous decision-making
:::

---

## AI Timeline

| Period | Milestone |
|--------|-----------|
| 1950s | Turing Test proposed |
| 1970s | Expert systems |
| 2010s | Deep learning revolution |
| 2020s | Large language models |

---

## Applications in Different Sectors

<Tabs>
  <TabItem value="healthcare" label="Healthcare" default>
    
### Healthcare AI

- Diagnosis assistance
- Drug discovery
- Patient monitoring

:::tip Innovation
AI can analyze medical images faster than radiologists!
:::

  </TabItem>
  <TabItem value="finance" label="Finance">
    
### Finance Applications

- Fraud detection
- Algorithmic trading
- Risk assessment

  </TabItem>
  <TabItem value="education" label="Education">
    
### Education Technology

- Personalized learning paths
- Automated grading
- Student performance prediction

  </TabItem>
</Tabs>

---

## Knowledge Check

[quiz:type=mcq]
Question: When was the Turing Test proposed?
A) 1920s
B) 1950s
C) 1980s
D) 2000s
Correct: B
[/quiz]

:::success Great Job!
If you selected B (1950s), you're correct!
:::

---

## Implementation Example

```python title="ai_example.py" {3,5-7}
import machine_learning as ml

# Load data
data = ml.load_dataset('training_data.csv')

# Train model
model = ml.train(data, algorithm='neural_network')
predictions = model.predict(test_data)
```

---

## Resources & References

Learn more about AI:

[qr:url=https://ai.google:text="Google AI"]

:::info Additional Learning
- [Deep Learning Course](https://example.com/deep-learning)
- [AI Ethics Guide](https://example.com/ethics)
- [Research Papers](https://example.com/papers)
:::

---

## Thank You

Questions?

[qr:url=mailto:contact@university.edu:text="Contact Us"]
```

---

## Conversion Process

### Step 1: Create Markdown File
Create a file with `.md` extension using the format specified above.

### Step 2: Run Conversion
```bash
python convert.py your-presentation.md
```

### Step 3: Output
The tool generates:
- An HTML file with interactive slides
- CSS styling with the specified theme
- JavaScript for navigation and interactions

---

## Best Practices

### Content

✅ **Do**:
- Keep slides focused on one main idea
- Use bullet points for multiple items
- Include interactive quizzes for engagement
- Add QR codes for external resources
- Use strong headers for hierarchy

❌ **Don't**:
- Overload slides with text
- Use more than 3 levels of nesting
- Mix too many formatting styles
- Create slides that are "walls of text"
- Forget to include speaker notes (via comments)

### Formatting

✅ **Do**:
- Use consistent heading levels
- Separate slides clearly with blank lines around `---`
- Keep tables to 3-4 columns max
- Use meaningful alt text for images
- Verify all links work

❌ **Don't**:
- Mix multiple heading styles inconsistently
- Forget the YAML front matter
- Create tables with more than 5 rows per slide
- Use images without context
- Include broken links

### Interactivity

✅ **Do**:
- Include 1-2 quizzes per presentation
- Use QR codes for external resources
- Vary quiz types (MCQ, True/False)
- Make quiz questions relevant
- Test QR codes before publishing

❌ **Don't**:
- Make quizzes too difficult
- Use unclear quiz questions
- Create invalid QR codes
- Include too many interactive elements
- Forget to specify correct answers

---

## Troubleshooting

### Issue: Slides not rendering

**Solution**: Check that:
- Front matter is present and valid
- `---` separators have blank lines around them
- All required fields are populated

### Issue: Formatting looks wrong

**Solution**: Verify:
- Proper use of markdown syntax
- Consistent indentation
- Correct heading levels

### Issue: Quiz not working

**Solution**: Ensure:
- Quiz syntax is correct: `[quiz:type=mcq]...[/quiz]`
- All required fields present (Question, Options, Correct)
- Correct answer is a valid option letter

### Issue: QR code not scanning

**Solution**: Check:
- URL is valid and uses HTTPS
- URL is not too long
- Text label is concise (under 50 chars)

---

## Theme Options

### Available Themes

- `default` - Professional dark blue/cyan theme
- `light` - Clean light theme with dark text
- `minimalist` - Bare essential styling
- `academic` - Scholarly serif-focused design
- `corporate` - Professional business theme

Specify theme in front matter:
```yaml
theme: "academic"
```

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | Jan 2025 | Initial format specification |
| 1.1 | Jan 2025 | Added advanced components and examples |

---

## Support & Resources

- **Full Documentation**: ../../docs/05-Tools/presentation-creator/index.md
- **Architecture**: ../../docs/05-Tools/presentation-creator/ARCHITECTURE.md
- **Specification**: ../../.kiro/specs/presentation-creator/requirements.md
- **GitHub Issues**: https://github.com/your-org/REVA-learning-hub/issues

---

**Last Updated**: January 2025  
**Format Version**: 1.1  
**Status**: Active & Maintained

- 📊 Chart - Data/metrics → :::info
- 🔍 Magnifying Glass - Deep dive → :::note
- 💻 Computer - Technology → :::info

---

## Lists with Descriptions

### Definition Lists (using variations)

```markdown
**Term**
: Definition of the term

**Another Term**
: Definition explaining this term
```

---

## Horizontal Rules

Create visual separators (not the same as slide separators):

```markdown
Content above

---

Content below (same slide)
```

**Note**: In a slide context, use this sparingly. For separating slides, ensure blank lines surround the `---`.

---

## Special Characters and Symbols

```markdown
© ® ™ € £ ¥
→ ← ↑ ↓ ↔ ⇒
• ◦ ▪ ■ ▸ ▾
... — – − 
± × ÷ ≈ ≠ ≤ ≥
½ ⅓ ¼ ¾
```

---

## Layout Components

### Two-Column Layout (using tables)

```markdown
| Left Column | Right Column |
|---|---|
| **Left Content** | **Right Content** |
| • Point 1 | • Point A |
| • Point 2 | • Point B |
| • Point 3 | • Point C |
```

### Numbered Steps

```markdown
1. **First Step**: Description of the first action
2. **Second Step**: Description of the second action
3. **Third Step**: Description of the third action
```

---

## Complete Example Presentation

```markdown
---
title: "Introduction to AI"
author: "Dr. Jane Doe"
affiliation: "University of Learning"
theme: "default"
date: "2025"
sidebar_label: "AI Intro"
sidebar_position: 1
tags: [ai, education, introduction]
---

# Welcome to AI

**An Introductory Journey**

---

## What is AI?

### Definition

**Artificial Intelligence** is the simulation of human intelligence processes by machines.

:::note Key Concepts
- Learning from data
- Problem-solving
- Pattern recognition
- Autonomous decision-making
:::

---

## AI Timeline

| Period | Milestone |
|--------|-----------|
| 1950s | Turing Test proposed |
| 1970s | Expert systems |
| 2010s | Deep learning revolution |
| 2020s | Large language models |

---

## Applications in Different Sectors

<Tabs>
  <TabItem value="healthcare" label="Healthcare" default>
    
### Healthcare AI

- Diagnosis assistance
- Drug discovery
- Patient monitoring

:::tip Innovation
AI can analyze medical images faster than radiologists!
:::

  </TabItem>
  <TabItem value="finance" label="Finance">
    
### Finance Applications

- Fraud detection
- Algorithmic trading
- Risk assessment

  </TabItem>
  <TabItem value="education" label="Education">
    
### Education Technology

- Personalized learning paths
- Automated grading
- Student performance prediction

  </TabItem>
</Tabs>

---

## Knowledge Check

[quiz:type=mcq]
Question: When was the Turing Test proposed?
A) 1920s
B) 1950s
C) 1980s
D) 2000s
Correct: B
[/quiz]

:::success Great Job!
If you selected B (1950s), you're correct!
:::

---

## Implementation Example

```python title="ai_example.py" {3,5-7}
import machine_learning as ml

# Load data
data = ml.load_dataset('training_data.csv')

# Train model
model = ml.train(data, algorithm='neural_network')
predictions = model.predict(test_data)
```

---

## Resources & References

Learn more about AI:

[qr:url=https://ai.google:text="Google AI"]

:::info Additional Learning
- [Deep Learning Course](https://example.com/deep-learning)
- [AI Ethics Guide](https://example.com/ethics)
- [Research Papers](https://example.com/papers)
:::

---

## Thank You

Questions?

[qr:url=mailto:contact@university.edu:text="Contact Us"]
```

---

## Format Compatibility Matrix

This table shows how different markdown features render across formats:

| Feature | Presentation | Docusaurus | Notes |
|---------|-------------|-----------|-------|
| YAML Front Matter | ✅ | ✅ | Full compatibility |
| Headings (H1-H6) | ✅ | ✅ | Determines slide breaks vs. TOC |
| Lists | ✅ | ✅ | Nested lists supported |
| Tables | ✅ | ✅ | Full markdown table support |
| Code Blocks | ✅ | ✅ | Line highlighting only in Docusaurus |
| Images | ✅ | ✅ | Responsive in both |
| Links | ✅ | ✅ | Internal link syntax varies |
| Bold/Italic | ✅ | ✅ | Full support |
| Quizzes | ✅ (custom) | ⚠️ (render as content) | Presentation feature primarily |
| QR Codes | ✅ (custom) | ⚠️ (render as links) | Presentation feature primarily |
| Admonitions (:::) | ✅ | ✅ | Full Docusaurus admonition support |
| Tabs (<Tabs>) | ⚠️ (simplified) | ✅ | Full Docusaurus Tab component support |
| MDX Components | ✅ (if supported) | ✅ | Requires .mdx extension |
| Comments | ✅ | ✅ | HTML comments hidden in both |

### Legend
- ✅ Full Support - Feature works as intended
- ⚠️ Partial Support - Feature renders but may appear different
- ❌ Not Supported - Feature ignored or errors

---

## Format Selection Guide

### Use This Format When:

**Creating Presentations**:
- Single-slide focus content
- Interactive quizzes needed
- Audience interaction important
- Visual presentation priority

**Creating Documentation**:
- Multi-page, interconnected content
- Docusaurus site integration
- SEO metadata needed
- Searchability important

**Creating Hybrid Content**:
- Content reusable in multiple contexts
- Academic papers becoming presentations
- Documentation becoming training materials
- Single-source content strategy

---

## Conversion Workflows

### Workflow 1: Presentation Only

```
markdown → Presentation Creator → HTML Presentation
```

**Use**: Quick presentations, one-time use content

### Workflow 2: Documentation Only

```
markdown → Docusaurus → Published Docs Site
```

**Use**: Documentation, guides, reference material

### Workflow 3: Hybrid (Recommended)

```
markdown (hybrid format)
    ↓
    ├→ Presentation Creator → HTML Presentation
    ├→ Docusaurus Processor → Docs Site
    └→ Custom Exporters → PDF, ePub, etc.
```

**Use**: Maximum content reuse, enterprise deployments

### Workflow 4: Content Pipeline

```
Source markdown
    ↓
Validation & Linting
    ↓
Version Control (Git)
    ↓
CI/CD Pipeline
    ├→ Build Presentations
    ├→ Build Documentation
    ├→ Generate Exports
    └→ Deploy
```

**Use**: Production environments, automation

---

## Best Practices by Use Case

### For Presentations

✅ **Do**:
- Use slide separators (`---`) for clear slide breaks
- Leverage interactive quizzes for engagement
- Include QR codes for resource access
- Keep text minimal, visuals prominent
- Use consistent heading levels (H2 for slides)

❌ **Don't**:
- Create complex nested content
- Use Tabs (simplified rendering)
- Embed heavy MDX components
- Create walls of text

### For Documentation

✅ **Do**:
- Use hierarchical headings (H1 → H2 → H3)
- Leverage Docusaurus admonitions
- Use Tabs for multi-language/platform variants
- Include comprehensive front matter
- Link between related documents

❌ **Don't**:
- Use slide separators unnecessarily
- Include interactive quizzes (won't work)
- Use presentation-specific features
- Forget sidebar positioning

### For Hybrid Content

✅ **Do**:
- Design with both uses in mind from the start
- Use Docusaurus admonitions over emoji callouts
- Keep sections focused (easily extractable)
- Use descriptive front matter
- Maintain clear structure

❌ **Don't**:
- Over-optimize for one format
- Mix incompatible features
- Create content too specialized for one use
- Forget to test in both formats

---

## Migration Guide

### From Presentation to Documentation

If converting an existing presentation to documentation:

1. **Add Docusaurus Front Matter**:
   ```yaml
   sidebar_label: "Shortened Title"
   sidebar_position: 1
   tags: [relevant, tags]
   ```

2. **Replace Quizzes**: Convert to :::note or interactive sections

3. **Enhance with Tabs**: Add language/platform variants

4. **Add Internal Links**: Link to related docs

5. **Create Table of Contents**: Ensure proper heading hierarchy

### From Documentation to Presentation

If converting documentation to presentations:

1. **Add Presentation Front Matter**:
   ```yaml
   theme: "default"
   date: "2025"
   affiliation: "Organization"
   ```

2. **Add Slide Separators**: Break long sections into slides

3. **Add Quizzes**: Include engagement checkpoints

4. **Add QR Codes**: Link to resources

5. **Simplify Tabs**: Convert to simple content or multiple slides

---

## Docusaurus Integration Example

### Step 1: Place File in Docs Directory

```
docs/
  ├── 05-Tools/
  │   ├── presentation-creator/
  │   │   └── hybrid-guide.md  ← Our hybrid file
  │   └── other-tools/
```

### Step 2: Ensure Front Matter Has Docusaurus Fields

```yaml
---
title: "Presentation Creator Guide"
sidebar_label: "Presentation Guide"
sidebar_position: 1
description: "Create interactive presentations and documentation"
tags: [presentations, tools, content]
---
```

### Step 3: Use in Presentation Creator

Same file can be processed with:
```bash
python convert.py docs/05-Tools/presentation-creator/hybrid-guide.md
```

### Step 4: Build Both Outputs

```bash
# Generate presentation
python convert.py docs/05-Tools/presentation-creator/hybrid-guide.md

# Build Docusaurus documentation
npm run build
```

Both outputs share the same source!

---

## Advanced Features

### File Imports (Docusaurus)

```markdown
import CodeBlock from '@theme/CodeBlock';
import ExternalResource from '@site/src/components/ExternalResource';

<ExternalResource 
  title="Related Topic"
  link="/docs/other-page"
/>
```

### Conditional Content (Docusaurus)

```markdown
import BrowserOnly from '@docusaurus/BrowserOnly';

<BrowserOnly>
  {() => (
    <div>This only renders in the browser, not in SSR</div>
  )}
</BrowserOnly>
```

### Custom Classes (Docusaurus)

```markdown
<div className="highlight-box">
  Important content goes here
</div>

<style jsx>{`
  .highlight-box {
    background: #f0f0f0;
    padding: 1rem;
    border-left: 4px solid #0066cc;
  }
`}</style>
```

---

## File Format Extensions

- Use `.md` for standard markdown (works everywhere)
- Use `.mdx` for files with React components (Docusaurus only)
- Presentation Creator auto-detects and processes both

---

## Troubleshooting

### Issue: Slides not rendering

**Solution**: Check that:
- Front matter is present and valid
- `---` separators have blank lines around them
- All required fields are populated

### Issue: Formatting looks wrong

**Solution**: Verify:
- Proper use of markdown syntax
- Consistent indentation
- Correct heading levels

### Issue: Quiz not working

**Solution**: Ensure:
- Quiz syntax is correct: `[quiz:type=mcq]...[/quiz]`
- All required fields present (Question, Options, Correct)
- Correct answer is a valid option letter

### Issue: QR code not scanning

**Solution**: Check:
- URL is valid and uses HTTPS
- URL is not too long
- Text label is concise (under 50 chars)

### Issue: Docusaurus sidebar not showing

**Solution**: Verify:
- `sidebar_label` and `sidebar_position` are set
- File is in correct docs directory
- sidebars.js includes the directory

### Issue: Tabs not rendering in presentation

**Solution**:
- Use simplified tab approach for presentations
- For Docusaurus docs, tabs render fully
- Consider breaking into separate slides

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | Jan 2025 | Initial format specification |
| 1.1 | Jan 2025 | Added advanced components |
| 2.0 | Jan 2025 | **Hybrid format with Docusaurus support** |

---

## Support & Resources

- **Full Documentation**: ../../docs/05-Tools/presentation-creator/index.md
- **Architecture**: ../../docs/05-Tools/presentation-creator/ARCHITECTURE.md
- **Specification**: ../../.kiro/specs/presentation-creator/requirements.md
- **Docusaurus Docs**: https://docusaurus.io/docs
- **GitHub Issues**: https://github.com/your-org/REVA-learning-hub/issues

---

**Last Updated**: January 2025  
**Format Version**: 2.0 (Hybrid)  
**Status**: Active & Maintained  
**Compatibility**: Docusaurus v2.x+, Presentation Creator v1.0+
