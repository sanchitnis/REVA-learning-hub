# Presentation Creator

A self-contained tool to convert hybrid markdown presentations to interactive, single-page HTML slides.

## Sprint 1 Focus

The goal of Sprint 1 is to take a hybrid markdown file (written according to [input-template.md](file:///d:/Github/REVA-learning-hub/tools/presentation-creator/input-template.md)) and compile it into a single-page HTML file (like [template-default.html](file:///d:/Github/REVA-learning-hub/tools/presentation-creator/template-default.html)) containing all necessary CSS, JavaScript, and resources so it can be run and tested on `localhost`.

### Sprint 1 Requirements
1. **Input Format**: Use the format defined in [input-template.md](file:///d:/Github/REVA-learning-hub/tools/presentation-creator/input-template.md). This includes YAML front matter, headers, lists, code blocks, customized interactive quizzes, and QR codes.
2. **Project Folders**:
   - Each project is housed under `project<n>` folders (e.g., [project1](file:///d:/Github/REVA-learning-hub/tools/presentation-creator/project1), [project2](file:///d:/Github/REVA-learning-hub/tools/presentation-creator/project2), [project3](file:///d:/Github/REVA-learning-hub/tools/presentation-creator/project3)).
   - Inside each folder, there is a markdown file containing the presentation source.
   - The compiled output must be written as a single-page HTML file (or self-contained archive) inside the **same** `project<n>` folder (e.g., `project1/index.html`).
3. **Conversion Script**:
   - The conversion is performed by [convert.py](file:///d:/Github/REVA-learning-hub/tools/presentation-creator/convert.py).
   - This Python script must be updated in later tasks to fully parse the new hybrid markdown format and output the rich HTML slide deck.

---

## File Structure

```
tools/presentation-creator/
├── README.md               # Tool overview & Sprint 1 requirements
├── QUICKSTART.md           # Instructions to test and run the tool
├── AGENTS.md               # Guidelines & prompt rules for AI agents
├── MANIFEST.md             # List of files, templates, and specs
├── MANIFEST                # Plain-text listing of the workspace files
├── convert.py              # Main Python conversion script
├── template-default.html   # Sample single-page HTML presentation template
├── input-template.md       # Format specification for the hybrid markdown
├── project1/               # Project 1 inputs and outputs
│   ├── sample-presentation.md
│   └── index.html
├── project2/               # Project 2 inputs and outputs
│   └── physical-ai.md
├── project3/               # Project 3 inputs and outputs
│   └── AI-Ready Faculty Certification.md
└── requirements.txt        # Python library dependencies
```

## Running / Testing Locally

To convert a markdown presentation into HTML:
```bash
python convert.py project1/sample-presentation.md
```
This generates `project1/index.html` (the output location should match the input markdown file's directory).

For detailed steps, refer to [QUICKSTART.md](file:///d:/Github/REVA-learning-hub/tools/presentation-creator/QUICKSTART.md).
