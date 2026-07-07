# REVA University — Agentic Academic Platform

> A Human-AI Collaborative System for AI-Era Curriculum Development, Portfolio-First Learning, Enterprising Student Formation, Srujana Pathway, Personalised Tutoring, Stakeholder Governance, and Institutional Excellence.

Welcome to the **REVA Learning Hub**. This platform is a collaborative intelligence environment where human judgment, institutional wisdom, faculty expertise, industry insight, and student agency are the primary authors — and AI acts as the accelerator, quality mirror, and tireless first-draft partner.

## For AGENTS:
Currently focusing only on tools\presentation-creator. Refer to files in that folder only. Others are for future. This project is under construction.

## 🎓 REVA Vision and Mission

**Vision:** To become a technologically advanced, sustainable global university dedicated to the wellbeing of all.

**Mission:**
- Provide learner-centric education leveraged with cutting-edge technologies.
- Foster stewardship by nurturing talent, leadership qualities, and entrepreneurial thinking in a safe and secure environment.
- Promote liberal studies and foster the pursuit of performing arts, literature, sports, and other creative and intellectual disciplines.
- Promote a culture of collaboration and cooperation.
- Serve humanity and promote sustainability through higher education based on universal values.

## ✨ The Platform Promise
Every course, every semester, every student emerges with a richer portfolio, a sharper enterprising mindset, a verified skill credential, and a clear personal trajectory — while REVA advances to Top 100 NIRF, deepens global partnerships, and lives its vision of wellbeing for all.

## 🧠 Foundational Design Philosophy

1. **Human-AI Collaboration:** The platform is a scaffold for better human decisions, not a replacement for them. No curriculum decision, course approval, or assessment goes forward on AI output alone.
2. **The Enterprising Student:** The central output is a graduate who sees problems as opportunities, initiates action, collaborates, reasons ethically, adapts to change, and creates value.
3. **PEO Ambition in the AI Era:** Program Educational Objectives reflect raised ambition. Students are assessed on judgment, synthesis, creative application, and ethical reasoning, not on tasks that AI can do faster.

## 📁 Repository Structure

The core agentic infrastructure is housed in `.academic-agent/`, which includes:
- **`agents/`**: Specialist AI collaboration partners.
- **`skills/`**: Domain-specific knowledge modules loaded on demand (ADDIE, OBE-NBA, Pedagogy, etc.).
- **`workflows/`**: Human-AI collaborative procedures.
- **`validators/`**: Quality-gate scripts for compliance and integrity.

Additional platform components:
- **`.kiro/specs/`**: Feature specifications using requirements → design → tasks methodology
- **`docs/`**: Docusaurus-based documentation, guides, and course content
- **`examples/`**: Sample presentations, projects, and learning objects
- **`specification/`**: Platform architecture and design documents

*(For detailed agent definitions, see [AGENTS.md](./AGENTS.md). For complete architecture details, see `specification/architecture.md`)*

## 🎯 Core Platform Tools

### AI-Powered Presentation Creator

The **Presentation Creator** is a key tool in the REVA Learning Hub ecosystem that converts markdown content into modern, interactive Next.js web applications deployed on Vercel.

**Key Features:**
- **Markdown-to-Next.js Conversion**: Transform educational content into performant web applications
- **AI-Native Learning Experience**: Server-side rendering, API routes, and AI integration readiness
- **OBE Support**: Foundation for tracking learning outcomes (Phase 2)
- **Portfolio-First**: Every presentation is a deployable portfolio artifact
- **Human-AI Collaboration**: AI generates drafts; faculty ensures quality

**Architecture:**
- Frontend: Next.js with React components and SSR
- Deployment: Vercel with edge network and auto-scaling
- Future Backend: Supabase for learner analytics (Phase 2)
- Content: Markdown files in Git (version controlled)

**Quick Start:**
```bash
# Navigate to presentation creator
cd docs/05-Tools/presentation-creator

# Create a presentation from markdown
python scripts/markdown-to-nextjs.py your-content.md

# Deploy to Vercel
vercel deploy
```

**Documentation:** See [Presentation Creator Docs](./docs/05-Tools/presentation-creator/index.md)

**Specification:** See [Requirements](./.kiro/specs/presentation-creator/requirements.md)

---

## 🛠️ Developer Setup (Docusaurus)

This learning hub frontend is built using [Docusaurus](https://docusaurus.io/).

**Prerequisites:** Node.js ≥ 20 and npm.

### Installation
```bash
npm install
```

### Local Development
```bash
npm start
```
Starts a local development server and opens a browser window. Changes are reflected live.

### Build
```bash
npm run build
```
Generates static content into the `build` directory.

### Serve (preview production build locally)
```bash
npm run serve
```

---

## 🚀 Deployment (GitHub Pages)

The site is deployed to **https://sanchitnis.github.io/REVA-learning-hub/** via GitHub Actions on every push to `main`.

### Automatic Deployment (CI/CD)

The workflow in `.github/workflows/deploy.yml`:
1. Triggers on push to `main` (ignoring changes to `legacy-portfolio/`, `.academic-agent/`, and `README.md`)
2. Builds the Docusaurus site with `npm run build`
3. Pushes the `build/` directory to the `gh-pages` branch using [JamesIves/github-pages-deploy-action](https://github.com/JamesIves/github-pages-deploy-action)

**GitHub Pages must be configured to serve from the `gh-pages` branch:**
1. Go to **Settings → Pages** in the repository
2. Under **Source**, select **Deploy from a branch**
3. Select **`gh-pages`** branch and **`/ (root)`** folder
4. Save — the site will be live at `https://sanchitnis.github.io/REVA-learning-hub/`

### Manual Deployment

To deploy manually from your local machine:
```bash
# Set your GitHub credentials (used by Docusaurus deploy)
export GIT_USER=<your-github-username>

# Build and push to gh-pages branch
npm run deploy
```

### Troubleshooting

| Symptom | Likely Cause | Fix |
|---|---|---|
| 404 on the site URL | `gh-pages` branch not yet created or Pages not configured | Run the CI workflow or `npm run deploy` once, then configure Pages in Settings |
| Build fails with "Minimum Node.js version not met" | Node.js version < 20 | Upgrade to Node.js ≥ 20 |
| Broken links error during build | A doc references a missing file or page | Fix or remove the broken link (see `onBrokenLinks: 'throw'` in `docusaurus.config.js`) |
