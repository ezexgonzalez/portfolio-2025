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

Hero top-left eyebrow: **OMITTED BY OWNER DECISION** (2026-10-21). Remove the visible `PORTFOLIO / 2027` text from all final Hero responsive frames and derived full-site/navigation-continuity views; retain no placeholder or replacement label. This does not rename the Portfolio 2027 project or alter footer/copyright, names, or navigation branding.

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

### Selected Work — owner-approved content and visual constraints (2026-10-21)

**Final selection for the initial redesign: exactly TWO projects.**

1. **Eze Web Studio** — an independent, self-directed studio/site; demonstrates web design, frontend implementation, visual identity, product direction and practical service context. Do not imply client commissions or invented results. Verify final display naming and links before delivery.
2. **Task Manager** — Full Stack MERN project; demonstrates authentication, CRUD, backend logic and user experience. Verify final stack, features and working links before delivery.

**Portfolio 2025 is excluded completely from the Selected Work project gallery.** It is being replaced on the same public domain, so it is no longer an independently visitable showcase. It may only be mentioned in About as historical context if the owner approves, not as an active featured project.

**Absolute visual constraint: NO photographs, project screenshots, screenshots-as-previews, mockup thumbnails, collage imagery or colored project images in Selected Work.** This protects the portfolio's dark monochrome atmosphere. Do NOT replace screenshots with generic AI-generated images, stock imagery, or decorative fake previews.

**Visual approach:** Two substantial typographic editorial project modules integrated into the page's structural grid: fine hairline divisions, generous negative space, clear numbering (01/02), large title, concise category/role, short real descriptions, restrained stack in editorial text (not chip clusters), and working demo/source links. These are layout modules, NOT floating cards; no per-module rounded backgrounds, glass, shadows or dashboard treatment. Designer may explore asymmetry and proportional emphasis, but should not assume project images, add a third placeholder project or overwhelm the screen with giant text.

**Motion:** A restrained line/construction reveal can draw grid divisions as the section enters view, followed by simple text reveal. Avoid replay-on-every-scroll, slow blocking animations, constant glitch, and unnecessary animated ASCII inside each module. Hover/focus affordances must be legible, accessible and functional without motion.

**Responsive:** On large screens explore a balanced two-module horizontal grid, with deliberate typography and whitespace; on mobile compose as a vertical sequence with clear separators. Test real widths/heights and scaling instead of copying fixed Figma positions.

**Design phase only:** Figma specialist must explore Selected Work composition after a Director brief. No React/CSS changes, package installation, deployment or engineering implementation until the whole portfolio design is approved.

#### Selected Work — approved Figma direction / Pass 03

**Status:** Owner-selected composition A, **Structural Grid**, in Figma. Preserve as the desktop creative reference. Figma remains responsible for responsive development, visual fine-tuning and motion specification; this does NOT authorize React implementation.

- **Figma file:** https://www.figma.com/design/qhsoutNaKIPSqO31AEttRT/Portfolio-2027-%E2%80%94-Hero-Exploration-01?node-id=19-389
- **Selected node:** `19:389` — `A — Structural Grid / 1920 × 1080`
- **Size:** 1920 × 1080 master (not a fixed viewport requirement for implementation).

**Visual decisions to retain:**
1. Monochrome dark editorial section with the heading `Proyectos seleccionados`, combining DM Sans and Instrument Serif.
2. Delicate full-width structural rules, lateral framing and a central vertical hairline dividing the two project areas (without rounded-card surfaces).
3. Exactly two equally important projects: left `Eze Web Studio`, right `Task Manager`.
4. Each module displays restrained mono index/category, generously sized title, short project description, capabilities, editorial inline stack, and two visible actions (visit/project and code source).
5. No images, mockups, thumbnails, fake UI previews, glow, glass, gradients, badge clusters or extra decorative ASCII.
6. Significant negative space is a compositional feature; do not fill it with arbitrary widgets.
7. Constructive line-based reveal should emphasize structure once, then give way to stable readable content. This is motion *direction*, not yet a tested animation.

**Pass 04B motion correction (owner-requested, reviewed 2026-10-21):** The Figma specialist produced a new editable construction-animation study; this supersedes the conventional fade-in proposal. The design direction is **conceptually approved for continued design work**, but exported playback is NOT visually verified here and final production performance remains pending.

- Figma correction container: https://www.figma.com/design/qhsoutNaKIPSqO31AEttRT/Portfolio-2027-%E2%80%94-Hero-Exploration-01?node-id=45-5809
- Desktop construction storyboard: `50:428` — five phases A (dot field), B (measured structural geometry), C (internal text/link skeletons), D (vertical resolution/replacement sweep), E (clean final).
- Mobile storyboard: `50:2061` — same idea in a single column, reduced density.
- Figma animated desktop frame: `45:7422`; manual motion tracks on ~350 nodes, 2.4s timeline.
- Figma animated mobile frame: `45:10156`; manual motion tracks on ~207 nodes; Figma motion API reports a 2.0s loop although storyboard documentation describes a 1.4s sequence. **Resolve this discrepancy during future handoff**, not by assuming the prototype already fulfills the final runtime behavior.
- Reduced-motion immediately visible final frame: `45:11220`.
- Important: Figma preview timeline reports `loopMode: loop`, although the intended *website* behavior is **play once upon section entry and remain at final state without replaying on scroll back**. Implement that exact website behavior later. Do not ship an infinitely looping construction.
- Animated proof has not been visually verified via exported video in this review due to inability to download the Figma export in the runtime. Detailed storyboard frames and animated node tracks were inspected.
- The technical layer must be outside semantics and pointer hit-testing. Reveal must complete/skips immediately for keyboard focus, anchor navigation, fast scrolling, or reduced-motion preference.
- Do NOT reconstruct the final state with static fade-in, or use fake console/status panels. Do NOT alter approved Selected Work layouts or add screenshots.

**Before final section sign-off:** request specialist responsive proposals at 1920×900–960, 1536×864, 1366×768, 768×1024, 390×844 and 320 wide. The two columns should reorganize organically at narrow widths without squeezing copy or links. Validate small metadata contrast, tab/focus affordances, destination URLs, semantic reading order, and the transition from the approved Hero. No premature coding.




## 4A. ABOUT / STORY — APPROVED EXPLORATION B (2026-10-21)

**Owner-selected direction:** **B — Story & Timeline**. This closes the two-concept exploration round for About. **Option A is rejected and must not be developed further.**

- Figma source: https://www.figma.com/design/qhsoutNaKIPSqO31AEttRT/Portfolio-2027-%E2%80%94-Hero-Exploration-01?node-id=62-558
- Approved complete desktop composition: node `62:558` — `B — Story & Timeline / complete story / 1920 wide`, 1920 × 1781 px. Height follows the narrative, not a forced 1080 px fixed section.
- The first 1920 × 1080 viewport presentation is node `63:707`. The original desktop exploration is the design reference; do not copy rigid viewport constraints to implementation.

**Protected art direction:**
- Heading `El camino hasta acá.` combining restrained DM Sans and italic Instrument Serif, with small `03 / ABOUT` section index and discreet name metadata.
- Personal first-person narrative in the left dominant reading column, with a right-hand aligned editorial chronology `2021 / Primeros pasos`, `2025 / Una nueva etapa`, `2026 / Nuevas perspectivas`.
- Thin horizontal rules divide the three narrative chapters, with generous negative space and readable paragraphs. No photographic assets, cards, glows, panels or decorative UI.
- Preserve the previously approved substantive story: early curiosity, Universidad Nacional de Lanús and practical web training, non-linear path and experience at Centro de Monitoreo, deliberate return to programming in 2025, Task Manager, Eze Web Studio, and development/design identity.

**Two minor observations for the later owner-authorized refinement pass:**
1. The serif line `Pero mi recorrido no fue una línea recta.` is presently somewhat quiet; test only a modest increase in editorial emphasis without altering the approved composition.
2. In future tablet/mobile work, position each date close to its corresponding narrative chapter so the reading order remains meaningful.

**Authorization gate:** This selection does **not** authorize responsive, motion, interaction exploration, engineering implementation, or further variation of option A. Next design production pass should target **B only** and include only those assets explicitly requested in the new brief.

### PASS 06 — APPROVED PRODUCTION DESIGN (director review, 2026-10-21)

**Status: About / Story is visually approved for continued portfolio design.** No production code has been implemented or browser-tested.

- **Figma collection:** `61:508` — `08 — About / Story Production`.
- **Protected owner-selected reference B:** `62:558`.
- **Desktop final:** `68:523` — 1920 × 1818 px, continuing the narrative/chronology dual-column hierarchy.
- **Tablet final:** `68:576` — 768 × 1910 px, single-column reading with year markers attached to their story chapters.
- **Mobile final:** `68:629` — 390 × 2231 px, natural two-line title, complete text, vertical chapter flow.
- **Specifications and motion notes:** `68:682`; one-time brief editorial motion, no elaborate construction animation; the entire text must remain readable. Reduced motion defaults to immediately visible final state.
- **Cleanup verified:** rejected A-only story frames and their exclusive continuity/viewport variants are no longer present in the About section. Shared/global design foundations were preserved.
- **Visual audit:** desktop/tablet/mobile screenshots inspected, no visible horizontal clipping or obvious legibility failures. Figma notes report checks at 1536, 1366 and 320 px, but browser rendering and actual scroll, typography, keyboard focus and zoom behavior remain pending engineering/QA.
- **Copy:** previously approved full first-person story retained; `Pero mi recorrido no fue una línea recta.` now has slightly more typographic emphasis. Year and paragraph placement verified at designed widths.
- **Next:** conduct a separate content audit for Skills / Capabilities; exploration pass should produce **exactly two desktop directions only** and STOP for owner selection under the permanent gate. No responsive or motion for both concept options.

## 4B. SKILLS / CAPABILITIES — APPROVED EXPLORATION A (2026-10-21)

**Owner selected option A — Technical Index** as the creative desktop direction. **Option B — Capabilities Matrix is rejected**, and must not be further developed.

- Figma selected frame: https://www.figma.com/design/qhsoutNaKIPSqO31AEttRT/Portfolio-2027-%E2%80%94-Hero-Exploration-01?node-id=77-557
- Frame ID: `77:557` — `A — Technical Index / 1920 × 1080`.
- Explored under `77:556` — `09 — Skills / Capabilities Exploration`.

**Preserve:** monochrome black editorial style, broad left title `Tecnologías y capacidades.` in DM Sans plus Instrument Serif italic, three numbered technical capability rows on right, subtle horizontal rules, descriptions and inline technologies as text (not pills), large negative space, no imagery or icon clusters. Three rows: `Interfaces Web`, `Backend & Data`, `Tools & Workflow`. This expresses what the developer builds rather than a proficiency scorecard.

**Owner-selection gate:** This approves the design *direction only*. Do not assume responsive, motion, interactions or handoff are completed or authorized by this selection. The next specialist assignment may refine **only selected option A** and build responsive/production details specifically scoped by the Director. Option B must not be worked further. Do not write implementation code until the entire portfolio is approved.

## 4C. CONTACT / CLOSING — APPROVED EXPLORATION A (2026-10-21)

**Owner-selected direction:** **A — Editorial Sign-off**, selected after Pass 09. **Option B — Contact Directory is rejected**; do not develop it further.

- Figma source: https://www.figma.com/design/qhsoutNaKIPSqO31AEttRT/Portfolio-2027-%E2%80%94-Hero-Exploration-01?node-id=84-557
- Selected frame: `84:557` — `A — Editorial Sign-off / 1920 × 1080`.
- Parent exploration: `84:556` — `10 — Contact / Closing Exploration`.

**Protected direction:** Monochrome editorial sign-off with oversized italic Instrument Serif `Hablemos.`, prominent email `ezexgonzalez@outlook.com` in the left content area, compact personal invitation on the right, restrained text links to LinkedIn/GitHub/CV and a thin-rule footer `© 2027 Ezequiel Gonzalez`. No generic CTA panels, glass cards, imagery, glows or extra links. Keep contact destinations grounded and verify the existing CV asset on implementation.

**Next combined design production pass:** Refine and adapt **Skills A (Technical Index, node `77:557`) and Contact A (Editorial Sign-off, node `84:557`) only**. Deliver responsive production variants and **one consolidated editable interaction/motion specification matrix** listing section, element, state/trigger, visual behavior, duration/easing, pointer/focus/touch, reduced-motion and implementation notes. Do not spend effort refining either rejected B. Responsive and motion specs are design work only, not browser implementation.

## 4D. PASS 11 — FINAL FIGMA AUDIT & CLEANUP (2026-10-21)

**Status:** The five approved sections have passed an initial holistic *visual design* review; **full design-to-code handoff is NOT yet authorized** because global navigation and some source/link verification remain outstanding. Figma review findings are in `104:1287`.

**Figma references:**
- **Full site desktop (audit snapshot):** `102:559` — 1920 × 6085 px.
- **Full site mobile (audit snapshot):** `102:775` — 390 × 6311 px.
- **Findings / handoff status:** `104:1287`.
- **Master interaction and motion sheet:** `92:556`; distinguish `Approved`, `Proposed` and `Pending` rows.
- **Organization:** selected historical references `102:556`, responsive production by section `102:557`, `30:836`, `61:508`, `89:556`, `89:557`; consolidated motion `89:558` plus specific UI Construction `45:5809`; design foundations `11:37`.

**Verified cleanup:** discarded Hero A `2:16`, Selected Work B `19:433`, its B continuity `19:548`, obsolete comparison `19:619`, and old motion studies `19:639` / `35:216` were removed. About A and rejected Skills/Contact B were already removed. Preserve the five approved original frames, shared component sets, actual production frames, and construction-study master.

**What passed:** unified visual hierarchy and monochrome editorial system across all five sections; no obvious clipping in assembled 1920px or 390px frames; scrollable real-height About; sequential mobile ordering; visual design and basic contrast checks; corrected Selected Work section index `02`.

**P1 decision before implementation brief:** The **global navigation is not designed or owner-approved**. Must decide whether page uses only scroll/CTAs or a minimal global navigation system. Design desktop and mobile states and anchoring/focus/scroll offsets before engineer invents behavior. Preserve the Hero layout and avoid generic floating pill/glass nav.

**Other P1 validation before launch:** Confirm Eze Web Studio's true public website URL and whether live; check the existing `/cv-ezequiel-gonzalez.pdf` file and current CV content; verify Task Manager demo/repo destinations; review UI Construction preview in Figma and production performance once implemented. The Figma prototype's looping behavior must not be used in production.

**P2 details:** On 390px Hero metadata is about 11px: browser/zoom legibility check warranted; review semantic direction of internal Hero CTA arrow without redesigning it.

**Implementation discipline:** Motion sheet's other interactions are mostly **proposed**, not owner-approved. No claim that live ARIA/keyboard/reduced-motion/browser behavior has been tested. Pending engineering proof of concept should occur only after owner authorizes the actual implementation phase.

**Recommended next design pass:** **Global Navigation / minimal targeted design**, after Director/owner confirms approach; no wholesale redesign or extra exploration rounds. Then a final implementation-ready design manifest and scoped handoff. Production `main` remains untouched.

## 4E. NAVIGATION DESIGN GATE / DOMAIN & CV CLARIFICATIONS (2026-10-21)

**Owner confirmed:** The redesigned *personal portfolio* retains `https://ezegonzalez.dev/` when it replaces the current site. This is **not** an assertion that the separate Eze Web Studio site is hosted at the portfolio domain; that project's own public URL still requires independent confirmation before shipping project links.

**CV PDF verified in GitHub `main`:** `public/cv-ezequiel-gonzalez.pdf` exists as a PDF-backed tracked file (SHA `1e6bd92f2a812528cafc5c0d3fdda1d5d3ccc096`). Expected public download path remains `/cv-ezequiel-gonzalez.pdf`. Its file presence is verified; its *content currency* and final site download behavior remain to be reviewed by owner/QA.

**Authorized next design work: Pass 12, Global Navigation Design, Figma-only.**
- Produce **one cohesive navigation direction with desktop and mobile variants**, not two explorations. This is explicitly a responsive navigation design assignment, not a dual-concept exploration.
- Design a restrained editorial navigation matching already-approved typography, monochrome tokens, structural rules, and layout. Do **not** redesign the Hero or any approved section.
- Define minimal links to the five sections (home, projects, about, capabilities, contact); link labels, anchor targets and scroll offsets. Avoid fake links, unsupported new pages, floaty glass bars and animated gimmicks.
- Design actual desktop header/default, scrolled or sticky behavior, active, hover, keyboard focus, and mobile closed/open/menu interactions (including touch targets, escape/backdrop, scroll behavior, reduced motion and small-device fit).
- Specify how the navbar integrates with the Hero so it does not mask ASCII/name/CTAs, and how it remains accessible in the full desktop/mobile continuous scroll.
- Keep any unresolved interaction choices proposed until Director/owner review. Do not implement code, adjust production, or claim functionality based on static Figma.

## 4F. PASS 12 — NAVIGATION APPROVED; HERO EYEBROW REMOVAL (2026-10-21)

**Owner decision:** Global navigation as designed in Pass 12 is approved for design handoff, with **one targeted Hero copy correction pending in Figma**. Do not reopen the navigation or other approved sections.

- **Figma navigation parent:** `111:547` — `14 — Global Navigation / Production Design`.
- **Desktop:** `111:548` (initial `111:591`, scrolled `111:604`, states `111:618`).
- **Mobile:** `111:549` (closed/open `111:637`, control `111:678`, links `111:701`).
- **Specs:** `111:550` (64px desktop sticky, 56px compact; responsive switch near 832px based on available width; accessible five-item mobile disclosure; keyboard/focus/anchors/hash/scroll and reduced-motion expectations).
- **Integration checks:** `111:723` (Hero contexts `111:725`).
- Navigation links to `#hero`, `#projects`, `#about`, `#skills`, `#contact`; preserve Hero CTA destinations `#projects`, `#about`. No alternate navigation direction.

**Only requested design correction:** remove the upper-left visible Hero `PORTFOLIO / 2027` micro-eyebrow. No replacement, no collapse-induced repositioning of content. Apply consistently to the *final* Hero variants `10:97`, `10:123`, `10:149`, `10:175`, `10:201`, `10:227`, `10:253`, `10:277`, as well as final full-page audit copies `102:559` / `102:775`, and Hero-context copies used by navigation and Selected Work continuity studies. If shared references are historical archives, preserve their archival nature but clearly prevent obsolete text from entering handoff; prefer updating any selected approved original if it serves as implementation reference. The  `04 — Visual Foundations` sample that still displays the old eyebrow must be reclassified or updated to avoid contradictory handoff.

**Do not remove:** actual name `Ezequiel Gonzalez`, role/location, ASCII field, quote `Observar, cuestionar, entender.`, section index labels (e.g. `02 / SELECTED WORK`), navigation elements, content, spacings, accessibility states or other approved visual language.

**Status:** This decision authorizes a **precise Figma correction only**, not code or production changes. Reinspect final desktop and mobile after correction. Once applied and verified, freeze approved full portfolio design for a scoped Integration Engineer handoff; browser behavior will still require engineering QA.

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

## 9A. PERMANENT DESIGN-PHASE APPROVAL GATE — TWO CONCEPTS, THEN STOP (2026-10-21)

**Owner instruction:** When the Director asks the Figma specialist to explore two visual ideas, **produce only the two requested initial desktop design proposals** (1920 × 1080 unless explicitly superseded), plus concise side-by-side explanation and direct frame links. **Do not automatically design the responsive versions or create animation prototypes, motion studies, hover/focus systems, specifications, components, additional layouts or extensive documentation for BOTH options.** This unnecessary work delays decisions and wastes tool calls.

**The mandatory sequence:**
- Pass A: exactly two distinct desktop visual explorations → STOP.
- Owner/Director selects ONE.
- Pass B: only the approved ONE receives refinement, responsive, motion, interaction, and specifications, each within the specifically authorized scope.
- Never extend the rejected direction.
- If prior briefs imply these deliverables prematurely, this new permanent gate takes precedence unless an explicit new user instruction overrides it.

**Immediate applicability:** About/Story Pass 05 is currently an **exploration-only** pass. Two desktop proposals (Editorial Narrative and Story & Timeline), no full responsive or new motion; present and await selection.

## 10. Immediate next actions

1. Create a purposeful **1920 × 1080 Full HD Hero B master** and responsive designs (including 1536 × 864 and 1366 × 768), then obtain design handoff and mobile proposal.
2. Define acceptable static/ambient ASCII fidelity and motion before implementation.
3. Assign two isolated motion spikes to the Integration Engineer: (a) ASCII 2D Canvas rendering, (b) `transitions-ui-generation` skeleton on one grid block. Record timings/behavior and provide videos.
4. Select the smallest appropriate motion stack based on evidence, not novelty.
5. Explore the project gallery, about, skills and contact around the approved Hero's typographic language.
6. Implement approved sections with scoped engineering briefs and perform safe housekeeping.
7. Review copy, links, SEO, visual states, reduced-motion fallback and mobile before release.

**No code implementation or dependencies were approved at the time this document was written.**
