# Presentation Creator - Quick Start

A self-contained tool to convert markdown presentations to Next.js web applications.

## Quick Test (5 Minutes)

### 1. Install Dependencies

```bash
# Node.js dependencies
npm install

# Python dependencies
pip install pyyaml markdown2 qrcode pillow
```

### 2. Create a Test Presentation

Create `test-presentation.md`:

```markdown
---
title: "Test Presentation"
author: "Your Name"
affiliation: "REVA University"
theme: "default"
---

# Slide 1: Welcome

This is a test presentation.

---

## Slide 2: Features

- Server-side rendering
- Interactive quizzes
- QR codes

[quiz:type=mcq]
Question: What is 2+2?
A) 3
B) 4
C) 5
Correct: B
[/quiz]

---

## Slide 3: Contact

[qr:url=https://reva.edu.in:text="Visit REVA"]

Thank you!
```

### 3. Convert to Next.js

```bash
python convert.py test-presentation.md
```

### 4. Preview

```bash
cd output/test-presentation
npm install
npm run dev
```

Open http://localhost:3000

### 5. Deploy to Vercel

```bash
vercel deploy
```

## File Structure

```
tools/presentation-creator/
├── README.md                    # This file
├── convert.py                   # Main conversion script
├── requirements.txt             # Python dependencies
├── package.json                 # Node.js template
├── templates/                   # React component templates
│   ├── Slide.tsx
│   ├── Quiz.tsx
│   └── QRCode.tsx
└── themes/                      # CSS themes
    └── default.css
```

## Documentation

- **Full Guide**: `../../docs/05-Tools/presentation-creator/index.md`
- **Architecture**: `../../docs/05-Tools/presentation-creator/ARCHITECTURE.md`
- **Specification**: `../../.kiro/specs/presentation-creator/requirements.md`
