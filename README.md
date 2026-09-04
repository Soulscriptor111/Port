# Alain Gentil — Personal Portfolio

A single-page, evidence-based developer portfolio. Every claim on this site
links back to something real — a GitHub repo, a live deploy, an actual
project — instead of just describing skills in prose.

## Features

- **Single-page, section-based navigation** — no routing, just smooth-scroll
  to Home, Process, About, Skills, Projects, and Contact
- **Dark / light theme toggle**, persisted across visits
- **Evidence-linked skills** — each skill shows what it's actually proven in,
  with a link to the real source
- **Working contact form** via Formspree, no backend required
- **Fully responsive**, built mobile-first

## Tech Stack

- [Vue 3](https://vuejs.org) (Composition API, `<script setup>`)
- [Vite](https://vitejs.dev)
- [Tailwind CSS 3](https://tailwindcss.com)
- [Formspree](https://formspree.io) for contact form submissions

## Getting Started

```bash
git clone <repo-url>
cd portfolio
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:
```bash
npm run build
```

## Project Structure

```
src/
├── assets/            # images, logo
├── components/
│   ├── layout/         # Navbar, MobileMenu, Footer, AppBackground
│   ├── sections/        # Hero, Process, About, Skills, Projects, Contact
│   └── ui/             # Card, SkillBar, ThemeToggle, EvidenceModal
├── composables/         # theme, mobile menu, evidence modal state
├── data/                # skills.js, projects.js, media.js
├── App.vue
├── main.js
└── style.css            # theme tokens (light/dark), Tailwind entry
```

## Configuration

Before deploying, update these with real values:

- `src/data/projects.js` — `demoUrl` and `repoUrl` for each project
- `src/components/sections/Contact.vue` — `FORMSPREE_ENDPOINT`
- `src/components/sections/Hello.vue` — email address in the `mailto:` link

## Author

**Alain Gentil**
Frontend Developer — Kigali, Rwanda
[GitHub](https://github.com/Soulscriptor111) · [LinkedIn](https://linkedin.com/in/alain-gentil-ganza-a17a8642a) · alaingentilg2011@gmail.com