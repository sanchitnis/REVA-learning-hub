# AI-Powered Presentation Creator

The AI-powered presentation creator is part of the **REVA Learning Hub** — a Human-AI collaborative platform for AI-era curriculum development, portfolio-first learning, and enterprising student formation.

## Overview

This tool converts markdown-based course content into modern, interactive Next.js web applications deployed on Vercel. It supports the REVA pedagogical philosophy by enabling:

- **AI-Native Learning Experience**: Server-side rendering, API routes, and extensibility for AI-driven feedback and conversational tutoring
- **Outcome-Based Education (OBE)**: Foundation for tracking learning outcomes and student progress
- **Portfolio-First Design**: Every presentation becomes a deployable artifact demonstrating technical and pedagogical competency
- **Human-in-the-Loop Quality**: AI generates drafts; humans ensure institutional rigor and pedagogical quality

## Architecture

### Technical Stack

**Frontend**: Next.js (React framework) with server-side rendering, API routes, and modern web standards

**Deployment**: Vercel with zero-config deployment, automatic scaling, edge network distribution, and preview environments

**AI Integration**: Direct integration with AI agents for feedback, tutoring, and real-time project evaluation (roadmap)

**Future Backend (Phase 2)**: Supabase (PostgreSQL) for learner analytics, OBE tracking, and event logs

**Content Storage**: Markdown files in Git repositories (version controlled)

### Content Flow

```
Markdown Files (Git)
    ↓
PresentationCreator (Python + AI Skills)
    ↓
Next.js Application (React Components)
    ↓
Vercel Deployment (Edge Network)
    ↓
Learners (Interactive Web App)
```

## Phase 1 vs Phase 2

### Phase 1 (Current)

- Markdown → Next.js web app conversion
- Vercel deployment with automatic preview environments
- Client-side interactivity (quizzes, QR codes, embedded media)
- No database dependency — all content in markdown/Git
- AI-agent integration readiness through API route structure
- Basic responsive design and mobile compatibility

### Phase 2 (Future)

- Supabase integration for learner analytics and OBE tracking
- AI-driven conversational tutoring and real-time feedback
- Learning outcome tracking and CO attainment analysis
- Student progress dashboards and at-risk detection
- Integration with REVA Learning Hub analytics infrastructure

## Integration with REVA Learning Hub

This system operates as part of the broader REVA Academic Platform ecosystem:

### Primary Agent Integration

- **`content-developer`**: Generates first-draft presentations that this system converts to Next.js apps
- **`session-planner`**: Suggests active learning strategies embedded as quizzes and interactive elements
- **`pedagogy-advisor`**: Reviews presentation quality for Bloom's alignment and engagement
- **`syllabus-publisher`**: May incorporate generated presentations into course pages

### AI-Augmented Professional Development Loop

1. **Requirement Capture**: Faculty feedback and changes → requirements.md
2. **AI-Agent Synchronization**: AI agent parses requirements, proposes updates
3. **Human-in-the-Loop Validation**: AI drafts presentations; faculty approves, edits, and contextualizes
4. **Continuous Improvement**: Feedback loop ensures alignment with REVA pedagogical principles

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git and GitHub account
- Vercel account (free tier available)
- Python 3.9+ for content generation scripts

### Installation

```bash
# Clone the REVA Learning Hub repository
git clone https://github.com/your-org/REVA-learning-hub.git
cd REVA-learning-hub

# Navigate to presentation creator tools
cd tools/presentation-creator

# Install dependencies
npm install

# Install Python dependencies
pip install -r requirements.txt
```

### Creating Your First Presentation

1. **Create a markdown file** with your presentation content:

```markdown
---
title: "Introduction to AI"
author: "Dr. Faculty Name"
affiliation: "REVA University"
theme: "reva-default"
logo: "/static/img/reva-logo.png"
---

# Slide 1: Welcome to AI

Introduction to Artificial Intelligence concepts.

---

## Slide 2: What is AI?

- Machine Learning
- Deep Learning
- Natural Language Processing

[quiz:type=mcq]
Question: What is the foundation of modern AI?
A) Rule-based systems
B) Machine Learning
C) Expert systems
D) Logic programming
Correct: B
[/quiz]

---

## Slide 3: Applications

![AI Applications](./images/ai-apps.png)

[qr:url=https://forms.gle/example:text="Scan for feedback"]
```

2. **Convert to Next.js application**:

```bash
python scripts/markdown-to-nextjs.py presentations/intro-to-ai.md
```

3. **Preview locally**:

```bash
cd output/intro-to-ai
npm install
npm run dev
```

4. **Deploy to Vercel**:

```bash
vercel deploy
```

## Markdown Syntax

### Front Matter

```yaml
---
title: "Presentation Title"
author: "Author Name"
affiliation: "REVA University"
date: "2025"
theme: "reva-default"
logo: "/static/img/logo.png"
bloomsLevel: "Apply"
pedagogicalPrinciple: "5-questions"
---
```

### Slide Separator

Use `---` (three or more hyphens) on a line by itself to separate slides.

### Quiz Blocks

```markdown
[quiz:type=mcq]
Question: Your question here?
A) Option 1
B) Option 2
C) Option 3
D) Option 4
Correct: B
[/quiz]
```

### QR Codes

```markdown
[qr:url=https://example.com:text="Scan for more info"]
```

### Pedagogical Markers

```markdown
<!-- diagram: Process flow for algorithm -->
<!-- meme: Reinforce concept with humor -->
<!-- acronym: SMART goals -->
<!-- summary-video: 5-minute recap -->
```

### Embedded Media

```markdown
# Images
![Alt text](path/to/image.png)

# Videos
![Video title](path/to/video.mp4)

# YouTube embeds
[video:youtube=VIDEO_ID]
```

## Examples

See the `examples/presentations/` directory for:

- **Physical AI**: Sample presentation on physical AI concepts
- **AI-Ready Faculty Certification**: Professional development content
- **Web Development Fundamentals**: Technical course content

## Benefits of Next.js + Vercel

### Speed & Performance
- Server-side rendering
- Optimal loading times
- Responsive UX
- SEO benefits

### AI-Native Architecture
- Supports AI integration at every layer
- Conversational tutoring
- Real-time feedback
- Adaptive content

### Scalability
- Vercel handles auto-scaling
- Edge network distribution
- Zero-config deployment
- Automatic HTTPS

### Developer Experience
- Modern tooling
- Hot reload
- Preview deployments for every PR
- Built-in Vercel analytics

### Extensibility
- Easy to add features via API routes
- Middleware support
- Edge functions
- React component ecosystem

### Institutional Rigor
- PostgreSQL (Phase 2) provides ACID compliance
- OBE data integrity
- Learner record security
- Audit trails

## Roadmap

### Q1 2025
- ✅ Markdown to Next.js conversion
- ✅ Vercel deployment integration
- ✅ Basic quiz components
- ✅ QR code generation
- 🔄 REVA branding themes

### Q2 2025
- 📋 Supabase integration for analytics
- 📋 AI tutoring API routes
- 📋 Real-time feedback system
- 📋 OBE tracking dashboard

### Q3 2025
- 📋 Advanced quiz types
- 📋 Adaptive learning paths
- 📋 Integration with REVA LMS
- 📋 Mobile app support

### Q4 2025
- 📋 Full AI-augmented learning loop
- 📋 Multi-language support
- 📋 Accessibility enhancements
- 📋 Analytics dashboards

## Contributing

This project follows the REVA AI-Augmented Development Loop:

1. **Requirement Capture**: Submit feedback via GitHub Issues or requirements.md
2. **AI-Agent Synchronization**: AI agent proposes updates to requirements
3. **Human-in-the-Loop Validation**: Faculty/developers review and approve
4. **Implementation**: Changes are implemented and tested
5. **Deployment**: Updates deployed to production

See the repository's CONTRIBUTING.md for details.

## License

MIT License.

## Support

- **Documentation**: [REVA Learning Hub Docs](https://reva-learning-hub.vercel.app)
- **Issues**: [GitHub Issues](https://github.com/your-org/REVA-learning-hub/issues)
- **Email**: learning-hub@reva.edu.in
- **Slack**: #presentation-creator channel

---

**Part of the REVA Learning Hub Ecosystem**
