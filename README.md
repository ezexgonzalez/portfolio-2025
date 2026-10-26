# Portfolio 2027 — Ezequiel Gonzalez

Redesign in progress of the personal development portfolio at **https://ezegonzalez.dev/**.

This repository originally powered Portfolio 2025. Portfolio 2027 reuses its React/Vite/Tailwind base and verified content while rebuilding the visual experience in a dark, monochromatic editorial direction.

## Project state

- **Production branch:** `main` (current published experience; keep stable).
- **Preparation branch:** `feature/portfolio-2027-foundation`.
- **Current phase:** Portfolio 2027 isolated preview contains approved Hero, Navigation, Selected Work/UI Construction, About and Skills (Blocks 01–04). **Block 05 Contact + Closing Integration authorized but NOT STARTED.** Block 06 final QA not authorized. `main` and production remain 2025; consult [docs/CURRENT.md](docs/CURRENT.md).
- **Operational source of truth / active work:** [docs/CURRENT.md](docs/CURRENT.md). Read first, and update at the end of every block.
- **Creative direction / approved designs:** [docs/PORTFOLIO_2027_DIRECTION.md](docs/PORTFOLIO_2027_DIRECTION.md).
- **Agent rules:** [AGENTS.md](AGENTS.md).

## Existing stack

React 19, Vite 7, Tailwind CSS 4, JavaScript (JSX), lucide-react.

## Local setup

```bash
npm ci
npm run dev
```

Local checks:

```bash
npm run lint
npm run build
npm run preview
```

## Architecture today

- `src/sections/` — Hero, Projects, About, Skills, Contact.
- `src/components/` — current UI and layout pieces.
- `src/config/projects.js` — project information.
- `src/config/skills.js` — skill information.
- `public/` — CV, images and favicons.

The current UI in `main` retains the 2025 design. It should not be presented as an already-completed 2027 redesign.

## Contribution workflow

Work on dedicated branches and preserve `main`. Do not install a motion stack, rewrite approved content, or merge visual changes until the Direction/Figma approval gates in the creative brief have been met. Verify facts in bio/projects and prioritize accessible, performant motion.
