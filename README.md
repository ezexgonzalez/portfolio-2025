# Portfolio 2027 — Ezequiel Gonzalez

Redesign in progress of the personal development portfolio at **https://ezegonzalez.dev/**.

This repository originally powered Portfolio 2025. Portfolio 2027 reuses its React/Vite/Tailwind base and verified content while rebuilding the visual experience in a dark, monochromatic editorial direction.

## Project state

- **Production branch:** `main` (current published experience; keep stable).
- **Preparation branch:** `feature/portfolio-2027-foundation`.
- **Current phase:** **Block 01 approved; Block 02 DONE — PENDING DIRECTOR REVIEW**. Hero, native ASCII and global navigation run in an isolated local preview under `src/portfolio2027/`; the legacy default UI is preserved. Chromium evidence and remaining typography/CLS observations are in `docs/qa/block02/`. Blocks 03–06 are not authorized. Open the preview with the instructions in [src/portfolio2027/README.md](src/portfolio2027/README.md).
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
