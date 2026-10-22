# AGENTS.md — Portfolio 2027

**MANDATORY before any work:** read [docs/CURRENT.md](docs/CURRENT.md) for the active block, actual implementation status and next gate; then read [docs/PORTFOLIO_2027_DIRECTION.md](docs/PORTFOLIO_2027_DIRECTION.md) for approved art direction and historical decisions. Update CURRENT.md at the end of every authorized block, with honest evidence and commit SHA.

## Role boundaries

- Director General owns overall direction, briefs, acceptance criteria, and approvals; does not directly implement UI.
- Figma specialist explores and delivers approved editable design; does not modify this repository.
- Frontend Integration Engineer owns source-code changes after approved brief.
- QA auditor reviews changes and regressions.

## Permanent Figma exploration gate — mandatory

**Two-stage workflow, no speculative expansion.** When the Director requests two (or N) visual directions for a section, the first pass is **exploration only**:

1. Produce **exactly** the requested number of clearly differentiated, editable desktop compositions at **1920 × 1080** (or the explicitly requested master dimensions). Use existing visual foundations and provided content.
2. Deliver only direct links/captures and a **brief** comparison of the differences, strengths and trade-offs.
3. **STOP and wait for the owner's selection.** Do not start responsive/tablet/mobile, alternative breakpoints, animations, prototyping, motion storyboards, interaction states, complete design specifications, new component libraries, elaborate documentation, full-section production or variations of the unchosen direction unless a **separate, explicit instruction** requests those exact deliverables.
4. Only **after selection**, the next authorized pass refines the winning option and, as explicitly scoped, produces responsive, motion, interactions and handoff. **Never develop the rejected concept further.**
5. Even when an exploratory brief ambiguously mentions motion, responsiveness or handoff as *considerations*, treat these as constraints for judgment, **not authorization to produce assets**. The gate overrides ambiguous wording; ask the Director if the deliverable is unclear. Minimize unnecessary Figma work, time and tool use.

## Hard requirements

1. Work in explicitly selected feature branches; do not change `main` or deploy without specific authorization.
2. Never improvise a redesign or replace agreed visual language with generic cards/glass/AI startup effects.
3. Preserve legitimate existing information, project URLs and CV; verify claims before editing.
4. Name is **Ezequiel Gonzalez**, no accents.
5. Do not introduce libraries for motion or ASCII without a scoped spike, performance assessment and approval.
6. Prefer smallest diffs. Do not refactor unrelated systems to deliver a design task.
7. Observe `prefers-reduced-motion`, keyboard navigation, legibility, mobile and resource cleanup.
8. Describe what changed and how it was verified. Run `npm run lint` and `npm run build` when implementing code changes.
9. Do not assert that Figma designs, benchmarks, animations or deployments are approved or verified unless actual evidence exists.

Current stage: **Blocks 01/02/02A APPROVED; Block 03 implementation delivered but UI Construction NOT APPROVED; Block 03A targeted motion visibility/entry correction AUTHORIZED**. Blocks 04–06 remain unauthorized. Read docs/CURRENT.md before any action. No production merge/deploy.
