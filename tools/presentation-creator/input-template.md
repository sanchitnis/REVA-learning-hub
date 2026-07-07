# Interactive Presentation Input Format Specification (IPS)

This document defines the hybrid markdown format specification for the `presentation-creator` tool. It provides a comprehensive reference of all supported metadata properties, slide layouts, semantic blocks, custom MDX elements, and H5P interactions.

---

## 1. Global Document Frontmatter
Every presentation document must begin with a YAML frontmatter block enclosed in `---` delimiters:

```markdown
---
specVersion: 1.0
title: "Introduction to AI-Era Education"
subtitle: "Pioneering the Future of Learning"
author: "Dr. Sanjay Chitnis"
affiliation: "REVA University"
theme: "university-corporate"
date: "2025"
aspectRatio: "16:9"
audience:
  - faculty
  - board
objectives:
  - Understand AI strategy
  - Approve implementation roadmap
description: "How AI transforms learning pipelines and institutional pedagogy."
tags: [ai, pedagogy, education]
---
```

---

## 2. Slide Structure & Separators

Slides are separated by `---` on a line by itself, with blank lines around it. Each slide can have its own local YAML frontmatter block for metadata configuration:

```markdown
---
slideId: slide-001
layout: hero
purpose: introduce
duration: 90
importance: critical
learningObjective:
  - Grasp presentation layout vocabulary
interactionLevel: none
---

# Title Slide Main Heading

Subtitle or tagline text here.
```

---

## 3. Heading Levels
* **H1 (`# Heading`)**: Used for Slide 1 (title slides) and section divider/transition slides.
* **H2 (`## Heading`)**: Used for the slide titles of content and data slides.
* **H3 (`### Heading`)**: Used for subsection headers within the slide content.

---

## 4. Layout Vocabulary

Slide frontmatter `layout` supports the following styles:

* **Basic Layouts**: `hero`, `title`, `section` (bookmark divider), `agenda`, `content`, `summary`, `thankyou`.
* **Structural Layouts**: `single-column`, `two-column`, `three-column`, `content-image`, `image-content`, `comparison`, `process`, `timeline`, `roadmap`, `quote`, `story`.
* **Data & Strategy Layouts**: `table`, `metrics`, `kpi-dashboard`, `chart`, `chart-insights`, `heatmap`, `scorecard`, `swot`, `pestle`, `business-model-canvas`, `strategy-map`, `value-chain`, `risk-matrix`, `decision-tree`.
* **Academic Layouts**: `concept`, `definition`, `case-study`, `research-paper`, `methodology`, `results`, `discussion`, `references`.

---

## 5. Standard MDX Semantic Blocks

Semantic content blocks are defined using standard MDX tags and native markdown to ensure out-of-the-box compatibility with Docusaurus and MDX systems:

### Metric Component
```mdx
<Metric 
  label="Active Learners" 
  value="45,000" 
  trend="+15%" 
/>
```

### Insight Container
Standard markdown blockquotes represent slide insights:
```markdown
> 💡 Student retention rates increase when project portfolios are introduced.
```

### Admonition Callout
Uses standard Docusaurus admonition syntax:
```markdown
:::success
Assessment metrics successfully matched course outcomes.
:::
```
Supported types: `note`, `tip`, `info`, `caution`, `warning`, `danger`, `success`.

### Media Elements
Use standard markdown images and HTML5 video tags for layouts:
```markdown
![REVA University](media/campus.jpg)

<video src="media/intro.mp4" controls autoplay={false} />
```

### Custom Chart Blocks
```mdx
<Chart 
  type="line" 
  dataset="student-data" 
  x="year" 
  y="count" 
/>
```

---

## 6. H5P Markdown Directives

Authors write simple, plain Markdown directives (`:::component-name`) that compile into interactive components:

### 1. Accordion
```markdown
:::accordion
## Topic 1
Content here.
## Topic 2
More content here.
:::
```

### 2. Tabs
```markdown
:::tabs
=== Category A
Content for tab A.
=== Category B
Content for tab B.
:::
```

### 3. Flashcards
```markdown
:::flashcards
Q: What is OOP?
A: Object-Oriented Programming.
Q: What is CSS?
A: Cascading Style Sheets.
:::
```

### 4. Multiple Choice Question (MCQ)
```markdown
:::mcq
question: What is React?
[x] A UI library
[ ] An operating system
[ ] A database engine
explanation: React is a JavaScript library for building user interfaces.
:::
```

### 5. True / False
```markdown
:::truefalse
answer: true
The sky is blue.
explanation: Rayleight scattering causes the sky to appear blue.
:::
```

### 6. Fill in the Blanks
Standard Markdown paragraphs can contain blanks wrapped in double brackets `[[...]]`:
```markdown
React was created by [[Facebook]] and JavaScript was created in [[1995]].
React was developed by [[Facebook|Meta]] (supports alternative answers).
```

### 7. Matching Activity
```markdown
:::matching
HTML => Structure
CSS => Styling
JavaScript => Behavior
:::
```

### 8. Sortable Sequence
```markdown
:::sequence
1. Write Markdown
2. Compile via convert.py
3. Open in Browser
:::
```

### 9. Timeline
```markdown
:::timeline
height: 320px
orientation: vertical

1995 | JavaScript Released
Created for Netscape.
2013 | React
Frontend UI library released.
:::
```

### 10. Image Hotspots
```markdown
:::hotspots
image: media/campus.jpg
(30,40)
Front Building
Main administrative offices.
:::
```

### 11. Before / After Image Comparison
```markdown
:::compare
before: media/before.jpg
after: media/after.jpg
height: 280px
labelBefore: Old Campus
labelAfter: New Campus
sliderPosition: 50
:::
```
```

### 12. Quiz Group
Combine multiple MCQ and True/False questions:
```markdown
:::quiz
:::mcq
question: What is CSS?
[x] Stylesheet
[ ] Script
:::
:::truefalse
answer: false
HTML is a programming language.
:::
:::
```

### 13. Information Cards Grid
```markdown
:::cards
Card: Encapsulation
Protects internal state.
Card: Inheritance
Supports reuse.
:::
```

### 14. Interactive Book
Split chapters using the `---chapter---` divider:
```markdown
# Chapter 1: Introduction
Text...
---chapter---
# Chapter 2: Advanced Topics
Text...
```


---

## 7. Interactive MDX React Components

React widgets are resolved and rendered via the registry:

### Financial Savings Widget
```mdx
<ROIWidget />
```

### Student Growth Chart Widget
```mdx
<EnrollmentCalculator />
```

### AI Conversational Tutor Widget
```mdx
<AskAI />
```

---

## 8. AI Instructions & Speaker Notes

Every slide can contain AI assistance guidelines and speaker transcripts:

```markdown
---
ai:
  objective: explain
  keyPoint: OBE focuses on final student portfolios
  speakerTone: professional
  speakerLevel: intermediate
  generateNarration: true
---

## Slide Content Heading

Slide body content goes here.

:::notes
Highlight the difference between exam grading and project evidence validation.
:::
```
