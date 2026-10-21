# PORTFOLIO 2027 — CREATIVE DIRECTION & PRODUCT BRIEF

**Status:** Hero creative direction approved by owner on 2026-10-21; Figma implementation/specification and responsive/motion validation pending.  
**Owner:** Ezequiel Gonzalez (always WITHOUT accents).  
**Last updated:** 2026-10-21.  
**Production:** https://ezegonzalez.dev/  
**Repository:** https://github.com/ezexgonzalez/portfolio-2025  
**Work branch:** `feature/portfolio-2027-foundation`

> This is the working source of truth for Portfolio 2027. Approved decisions are separated from hypotheses and implementation research. Do not treat a design exploration as approved UI.

## 1. Product purpose

Redesign Ezequiel Gonzalez's *personal developer portfolio* completely while keeping the useful verified content, existing repository, stack and public domain. Tell his professional and personal story, present meaningful projects, demonstrate technical execution and design sensitivity, and make contact intuitive.

This is NOT a commercial landing page for Eze Web Studio. Personal and studio identities may reference each other but must remain distinct.

Primary audience: recruiters, technical interviewers, developers, potential collaborators, and visitors assessing projects. Content must communicate who Ezequiel is, what he builds, how he approaches problems, and where to find the work.

## 2. Approved creative direction

**Working concept:** *Digital Editorial. Human Story.* This is an internal direction, not approved public-facing copy.

- Dark editorial / contemporary monochromatic art direction.
- Black or near-black dominant background, restrained white/gray typography; never expansive dazzling pure-white panels.
- Carefully chosen, expressive typography and deliberate text hierarchy.
- Air, negative space, controlled asymmetry, minimal interface chrome.
- Fine structural lines and an underlying grid; modules integrated into the architecture, not floating generic cards.
- **Living ASCII:** an abstract generative composition that evolves organically in the background. No literal portraits, initials, logos, or recognizable ASCII drawings by default. The aesthetic should feel subtle, elegant, technical and ambient, not hacker-terminal / Matrix rain.
- **Constructive motion:** dotted line / wireframe / geometry construction, then content reveal. Use it sparingly as a signature system, not on every element or every scroll.
- Minimal, clean, original, personal. Each element must justify its visual and communicative role.

**Explicit exclusions:** ubiquitous glass cards, glassmorphism, glowing dashboard panels, endless badges/chips, gratuitous gradients, excessively decorative iconography, startup-AI aesthetic, dense animated noise, perpetual high-contrast white flash, copied reference layouts.

**Not yet approved/finalized:** exact typography family names and values, color tokens, animation technology/timing, responsive adaptations, full-site wireframes. **The desktop Hero B composition is approved** (see section 3A); do not redesign it.

**Exploration-only palette direction:** near-black `#0B0B0B`, softened white `#F0F0EE`, functional grays. These are starting references, NOT finalized tokens.

## 3. Approved Hero content (V1, subject to final design/copy verification)

Eyebrow: **PORTFOLIO / 2027**

Name: **Ezequiel Gonzalez.**  
Role/context: **Full Stack Developer · Buenos Aires, Argentina**

Professional paragraph:
> Desarrollo aplicaciones web de principio a fin, cuidando tanto la lógica que las sostiene como la experiencia de quienes las utilizan.

Personal editorial statement (user selected option C):
> Observar, cuestionar, entender. Tres cosas que forman parte de mi manera de pensar y que también definen cómo construyo.

Navigation actions: **Explorar proyectos** and **Mi historia**.

Visual hierarchy: name is the principal anchor; professional paragraph communicates role and competency; personal statement conveys genuine observation, reflection and curiosity. Do not turn the statement into generic motivational ad copy. Avoid putting “looking for my first IT job” in the Hero; review relevant availability in About / Contact when writing final content.

No accents in the name: always **Ezequiel Gonzalez**.

## 3A. APPROVED DESKTOP HERO DESIGN — FIXED CREATIVE REFERENCE

**Owner selection:** Proposal **B — Editorial inmersiva**, 1440 x 960 desktop frame. Approved by Ezequiel Gonzalez as the chosen visual direction on 2026-10-21.

**Figma source of truth:** https://www.figma.com/design/qhsoutNaKIPSqO31AEttRT/Portfolio-2027-%E2%80%94-Hero-Exploration-01?node-id=2-41  
**Figma file key:** `qhsoutNaKIPSqO31AEttRT`  
**Selected frame node:** `2:41` (`B — Editorial inmersiva / 1440 × 960`)

### Design decisions to preserve

- Centered, immersive editorial layout, not the earlier asymmetrical exploration.
- Two-level, visually expressive name lockup: **Ezequiel** in a bold, clean large sans treatment, followed by the larger italic editorial serif **Gonzalez**. Name spelled *without accents*.
- Role and location in restrained small monospaced text above the name.
- Abstract ASCII **elliptical surrounding field**, large but quiet, leaving the central typographic content legible through intentional negative space.
- A single professional description centered in a controlled readable column.
- Primary contrasting light rectangular `Explorar proyectos` action and understated secondary `Mi historia` link.
- Fine vertical/horizontal framing rules. No floating glass cards, glows or arbitrary color accents.
- The personal statement (italic `Observar, cuestionar, entender.` with smaller second line) lives in its own editorial area below a thin dividing rule.
- Restrained monochrome tone, clear hierarchy, and generous whitespace.

### What is NOT approved as complete

- Figma contains static **editable ASCII glyph layers** (`2:43`, `2:44`, `2:45`), not proof of a running/procedural animation. Production must maintain a similar silhouette, restrained contrast, and central legibility while evaluating a real animated engine.
- Motion and interaction behaviors, reduced-motion alternative, mobile/tablet compositions, browser performance, and exact typeface/spacing values still require proper designer handoff and engineering prototype evidence.
- Do NOT export the entire Hero as one bitmap or substitute a giant opaque image for accessible text and functional links.
- Avoid claiming the design already exists in production. Do not add libraries prematurely.

### Next specialist assignments

- **Figma specialist:** adapt selected B into a new **1920 × 1080 desktop master**, then prepare exact type family/weight, spacing, colors, breakpoints, mobile proposal, ASCII coverage/opacity behavior, major interactive states, and proposed animation choreography. Keep layout identity; no new competing Hero.
- **Integration Engineer:** perform separate motion feasibility spikes, measure cost and degradation behavior, then implement the approved design on an implementation branch when specifically assigned.
- **Director General:** review fidelity against selected Figma frame and approve technical choices and mobile composition.

## 3B. RESPONSIVE DESIGN REFERENCE — UPDATED DIRECTOR INSTRUCTION (2026-10-21)

**The main desktop design artboard is FULL HD: 1920 × 1080 px, not 1440 × 960.** This supersedes the earlier Figma Pass 02 brief which used the old reference frame size.

The original Figma Hero B frame at 1440 × 960 (node `2:41`) remains **untouched as the approved artistic/typographic composition reference**. The Figma specialist must create a separate, editable **1920 × 1080 Hero frame** and deliberately recompose its typographic scale, spacing, ASCII coverage, editorial lines, button proportions, and vertical rhythm. **Do not simply scale the entire old frame by 1.333×.** Preserve its design language and relative hierarchy but target readable, realistic desktop proportions.

**Responsive validation required:**
- Design master: **1920 × 1080** (Full HD desktop).
- Realistic browser content region: verify approximately **1920 × 900–960** available CSS-pixel height with the browser UI visible, rather than assuming the full monitor height is always available.
- Intermediate desktops: **1536 × 864** (also useful as an effective CSS viewport when 1920-pixel hardware uses 125% scaling) and **1366 × 768**.
- Tablet: **768 × 1024**.
- Mobile: **390 × 844**.
- Additional compression check: **320 px** width.

Important implementation handoff principles (documentation only; no code now):
- Document fluid/hierarchical text sizing and sensible maximum widths instead of translating Figma dimensions into unbounded fixed pixels.
- Avoid full-viewport text that clips or requires scrolling just to read the first sentence on shorter screens.
- Design ASCII safe zones so animation does not obscure the identity or professional text.
- Define which layout characteristics *scale*, which *reflow*, and which *stay capped* across widths.
- Account for actual browser CSS viewport, zoom/system DPI scaling, not only nominal monitor resolution.
- No code or repository implementation until the **entire portfolio design** is prepared, reviewed and approved by the user.

## 4. Tentative information architecture

1. Hero / personal introduction.
2. Selected Work / notable real projects.
3. About / Story / professional journey.
4. Skills / Capabilities, presented editorially rather than as piles of chips.
5. Contact / meaningful closing.

Sections and ordering are exploratory until the Director approves. Preserve verified existing bios, project links, CV and contact data; revise inaccurate, outdated or duplicated claims before launch. Never invent testimonials, clients, years of experience, product metrics or deployed project counts.

### Projects display language

Use an orderly grid / reticle of invisible modules defined by structural hairlines or coordinates. Previews, project title, role, context and outbound links should be easy to scan. A module may function like a card semantically while avoiding the *visual appearance* of a floating bordered card. Investigate constructive line-based reveal on entrance, but protect reading and interaction. Full mockups pending Figma.

## 5. Motion system rules

**Level A: Signature / structural reveal.** A single significant entrance or section build; linework resolves into content. Use only where it creates meaning and keep it optional/skippable in practice.

**Level B: Lightweight content reveal.** Lines or restrained clipping, opacity/position, not a full repeated 2.6-second construction.

**Level C: Microinteractions.** Fine underline, opacity, link affordance, hover/focus states; do not animate purely to demonstrate the library.

**Ambient ASCII:** slow evolving density and flow, partial opacity, protected text-safe regions. Provide static image/Canvas fallback; honor `prefers-reduced-motion`, tab visibility, smaller screens and lower-powered devices. No flashing. Motion must never obscure readability, delay navigation or disrupt focus.

Target final motion parameters only after prototyping, not from arbitrary defaults. Maintain visual continuity between ASCII field and constructive transitions without pretending they are the same implementation.

## 6. Tooling research — research only; NOT installed or approved

**Primary constructive transition candidate:** `Jakubantalik/transitions.dev`, specifically `skills/transitions-ui-generation/`:
- https://github.com/Jakubantalik/transitions.dev
- https://github.com/Jakubantalik/transitions.dev/tree/main/skills/transitions-ui-generation
- Its dependency-free `ui-generation.js` and `ui-generation.css` build a dotted outline, actual child geometry, handles/guides, and reveal the actual UI. The `skeleton` mode is preferable to `skeleton-texts` for this portfolio; the latter adds artificial logs/panels that undermine our clean editorial language.
- React integration supported, but measure after font/image layout. The reference duration is ~2.6s total; too slow to repeat casually on a portfolio.
- License explicitly permits individual/commercial website integration and modification, but forbids redistributing the library itself as a competing motion kit. Check the exact bundled LICENSE when adopting.
- **Decision:** FIRST prototype choice, not an approved install. Test the project grid / one signature section, then see whether a simplified custom line reveal would actually be better.

**Second transition candidate:** `motion` for React, documented SVG path drawing and masking:
- https://motion.dev/docs/react-svg-animation
- Better for precise, selective controlled line drawings, reduced motion and simple small-scale reveals. If full UI-generation animation proves heavy, start with native SVG/CSS or Motion instead.

**Third transition candidate:** GSAP + DrawSVGPlugin (+ ScrollTrigger where warranted):
- https://gsap.com/docs/v3/Plugins/DrawSVGPlugin/
- https://github.com/greensock/GSAP
- Precise timelines and SVG line reveal; more orchestration and integration effort. GSAP currently offers previously paid plugins for free according to official README. Verify actual license on adoption.

**First 2D ASCII candidate:** `ascii-overlay`:
- https://github.com/Lucas20000903/ascii-overlay
- MIT license, lightweight core, React adapter, Canvas/SVG support. Accepts ImageData, can render animated frame sources; supports glyph ramps, masks and coverage. Test whether it can represent organic abstract movement from a procedural source Canvas with acceptable mobile performance.
- Version observed while researching: 0.1.0. Maturity and production behavior require a spike; repo benchmark numbers are author-reported, not independently verified.
- **Decision:** FIRST 2D prototype choice, not an approved install.

**Alternative 3D/shader ASCII:** `isladjan/ascii`:
- https://github.com/isladjan/ascii
- MIT, Three.js / postprocessing GLSL ASCII shader; potentially effective for a large particle/flow scene but introduces WebGL stack and context recovery concerns.
- Treat as fallback if 2D approach cannot achieve the target motion or if designers specifically want a 3D physical field.

**Reference / study resource:** `darkroomengineering/aniso`:
- https://github.com/darkroomengineering/aniso
- MIT toolkit for ASCII treatment of imagery. Useful for typography/granularity/glyph style study, not a ready-made animated React background.

**Other optional library:** `React Bits` https://www.reactbits.dev/ supplies individual React motion snippets, but does not need to be added as a global dependency. Review each component and its licensing before copying.

**Implementation rule:** No new packages, vendored animation runtimes, or source-code changes without a measured proof of concept and Direction approval. Compare rendering cost, bundle weight, font loading, reduced motion, responsiveness, accessibility, browser support and cleanup/teardown.

## 7. References and their role

- User-shared ASCII motion: https://x.com/ayushsoni_io/status/2109879028983501259
- User-shared construction transition: https://x.com/Jakubantalik/status/2109671433521815772
- User also supplied four reference screenshots in the design conversation. They serve as inspiration for editorial atmosphere / typography / grid / composition; NOT templates to reproduce. These screenshots are not part of the repository.
- The Figma specialist explored two Hero directions (A asymmetric; B immersive). **B is now owner-approved** and replaces the earlier open exploration. Selected frame: https://www.figma.com/design/qhsoutNaKIPSqO31AEttRT/Portfolio-2027-%E2%80%94-Hero-Exploration-01?node-id=2-41 . The unchosen A must not be treated as a parallel implementation.
- Responsive system, ASCII motion and detailed handoff remain pending.

## 8. Existing repository audit (main at 014843d, 2025-12-29)

Known stack: React 19, Vite 7, Tailwind CSS 4, lucide-react. Five main sections in `src/sections/`: Hero, Projects, About, Skills and Contact. Source project data `src/config/projects.js`, skills in `src/config/skills.js`. CV and preview images reside in `public/`.

Items for the Frontend Integration Engineer to verify in a separate implementation task:

- `README.md` was still the Vite template (addressed by documentation update in this branch).
- `index.html` declares `lang="en"` although the website is primarily Spanish. Investigate updating to `es` when implementation begins, together with meaningful `description`, OG/Twitter metadata and favicon decisions.
- `src/App.css` contains starter styles and is not imported from `src/main.jsx` or `src/App.jsx`; inspect references before removing. Same principle for `src/assets/react.svg`, placeholder `Navbar.jsx` / `Footer.jsx`.
- `src/App.jsx` hardcodes 5 section IDs and uses `LiquidBackground`; a new layout architecture is expected but not yet designed.
- `GlassCard`, LiquidGlass gradients, theme tokens, repeating chips and status panels represent the old identity. Replace *only during approved implementation*, do not indiscriminately delete them now.
- Existing Hero and Contact text talks about first IT opportunity, certain stack choices and `+3` deployed projects; verify truth/current relevance with owner.
- `src/config/projects.js` contains Task Manager and this portfolio (both 2025). Discuss new work and current links, especially meaningful later projects, before publishing updates.
- Confirm accessible keyboard navigation, heading structure, reduced-motion behavior, color contrast, mobile performance and deployment configuration once actual layouts are approved.

No refactors or new dependencies have been made for this preparation step. Production remains protected on `main`.

## 9. Operating model, roles and approval gates

- **Director General (this chat):** strategy, critique, decisions, briefs, repository audit, milestone approval. Normally does NOT implement UI code.
- **Lead Product Designer & Figma Specialist:** original editable explorations, UX/UI, responsive plans, tokens, intentional interaction proposal; no GitHub code edits.
- **Frontend Integration Engineer:** writes implementation ONLY from approved Figma/Director brief, on feature branches; small diffs, checks, no uncontrolled redesign.
- **QA & Experience Auditor:** accessibility, responsiveness, performance, interaction reliability, SEO and regression review.

**Workflow:** direction -> Figma exploration -> Director review -> design approval -> implementation brief -> feature changes -> QA -> merge/deploy after approval.

Never merge to main, trigger deploy or change DNS/domain without explicit authorization. Development stages must not regress the current production website.

## 10. Immediate next actions

1. Create a purposeful **1920 × 1080 Full HD Hero B master** and responsive designs (including 1536 × 864 and 1366 × 768), then obtain design handoff and mobile proposal.
2. Define acceptable static/ambient ASCII fidelity and motion before implementation.
3. Assign two isolated motion spikes to the Integration Engineer: (a) ASCII 2D Canvas rendering, (b) `transitions-ui-generation` skeleton on one grid block. Record timings/behavior and provide videos.
4. Select the smallest appropriate motion stack based on evidence, not novelty.
5. Explore the project gallery, about, skills and contact around the approved Hero's typographic language.
6. Implement approved sections with scoped engineering briefs and perform safe housekeeping.
7. Review copy, links, SEO, visual states, reduced-motion fallback and mobile before release.

**No code implementation or dependencies were approved at the time this document was written.**
