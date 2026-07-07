# Agent Instructions - Presentation Creator (Sprint 1)

This document provides context, instructions, and constraints for AI agents implementing or refining the Presentation Creator during Sprint 1.

## Agent Role & Goal

You are tasked with maintaining and improving the conversion pipeline in `convert.py`. Your primary focus is translating hybrid markdown files (structured according to `input-template.md`) into standalone HTML slide decks (designed similarly to `template-default.html`).

## Technical Constraints & Requirements

1. **Self-Contained Output**: 
   - The compiled HTML must be a single-page HTML file (or self-contained archive).
   - All styling (CSS) and interactivity (JavaScript) must be embedded or referenced correctly so that the page can run locally when loaded via `file://` or a local HTTP server (`localhost`).
   - Do not rely on external project subdirectories (e.g. `output/test-presentation/...` with Node.js/Next.js). Next.js deployment is for a later sprint.

2. **Directory and Output Convention**:
   - The inputs reside in `project<n>` folders (e.g., `project1`, `project2`, `project3`).
   - The compiled output HTML file must be saved in the **same directory** as the input markdown file (e.g., `project1/sample-presentation.md` -> `project1/index.html`).

3. **Parser Implementation Guidelines**:
   - Parse YAML front matter at the top of the file to extract metadata (`title`, `author`, `affiliation`, etc.).
   - Support `---` as a slide separator, ensuring it is parsed only when it appears on its own line (surrounded by empty lines).
   - Render markdown features: standard headings, bold/italic text, bulleted/numbered lists, inline code blocks, and links.
   - Implement custom parser rules to handle and render interactive quizzes (`[quiz:...]`) and QR codes (`[qr:...]`) into functional HTML elements using vanilla CSS and JavaScript.
