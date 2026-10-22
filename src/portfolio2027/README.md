# Portfolio 2027 — isolated foundation

Block 01 only. This subsystem is intentionally **not imported** by `App.jsx`,
`main.jsx`, `index.css` or `index.html`. The 2025 theme, scroll and mounted UI remain
unchanged. No sections, navigation, hooks, effects or empty component stubs exist.
`src/index.css` only excludes this directory from Tailwind automatic source
discovery; otherwise even unmounted files can add legacy utilities. Standard
build checksums match the baseline after this exclusion.

## Integration contract (future authorized blocks)

Import `src/portfolio2027/index.js` once at the future React integration boundary;
apply its exported `portfolio2027RootClassName` to the root wrapper. Reuse semantic
HTML with `p27-container`, `p27-reading`, `p27-serif` and `p27-mono` as appropriate.
Import `styles/fonts.css` separately only when switching to the new experience.
Do not mount inside `LiquidBackground` or reuse its glass/theme utilities. The
existing `html` scroll rules and `initTheme()` must be revisited explicitly at that
future cutover: a namespace alone cannot neutralize document-level scroll behavior.

Future layout, sections and navigation live here as actual work is authorized.
Keep content separate when needed, use JSX, and avoid duplicate token maps in JS or
global Tailwind `@theme` overrides. The CSS custom properties are the single token
source; existing Tailwind can reference `var(--p27-...)` within the root.
At cutover, revisit the legacy `@source not` exclusion and explicitly register
future JSX sources if using Tailwind utilities. Do not enable that scan now.

## Token provenance and status

Read directly from Figma `11:37` and `111:550` on 2026-10-21:

- Fixed foundations: five monochrome colors, primary-hover color, three families,
  DM Sans regular/medium with `opsz` 14, serif italic, mono regular; 1px hairlines;
  2px focus ring with 4px offset; header dimensions 64/56px (tokens only).
- Fixed reference maxima: editorial frame 1600px, central content 900px, reading
  640px, closing 770px. Reference spacing scale: 4/8/12/16/20/24/28/32/40/48/64px.
- Initial engineering interpolation: gutters near 20/24/48/72/96/160px at
  320/390/768/1366/1536/1920px. At 390 the fluid value is 24.375px; cap at 160px.
  Grid gaps 16px compact / 24px larger widths. These are reusable primitives,
  not a claim of final section fidelity. Narrower reading widths, display scales,
  height-specific spacing, and individual grids belong to section integration.
- Initial fluid body/editorial scales are **provisional**, capped with rem-based
  limits to support text enlargement. No Hero name sizing or navigation behavior
  is implemented. Header tokens do not authorize a navbar or a breakpoint.

The foundation still contains a historical `PORTFOLIO / 2027` font specimen in
Figma. It is not approved Hero copy; the owner removal instruction takes priority.
Pass 12B on production Hero variants was **not verified in this block**.

## Typography delivery

`fonts.css` prepares a Google Fonts CSS2 request for DM Sans 400/500 at opsz 14,
Instrument Serif regular/italic 400, and IBM Plex Mono 400 with `display=swap`.
Only import it at the authorized cutover; no font network cost is added now.
The provider controls WOFF2 subsetting and cache responses; network failure keeps
system sans / Georgia italic / system mono fallbacks readable. Those fallbacks
have different metrics: final CLS, font transfer size and line breaks must be
measured with real content before release, not declared solved by `swap`.

Figma lists all three families under SIL OFL 1.1 and links official sources:
https://github.com/google/fonts/tree/main/ofl/dmsans,
https://github.com/google/fonts/tree/main/ofl/instrumentserif,
https://github.com/IBM/plex.
No binaries are copied or redistributed in Block 01. Self-hosting remains a later
choice requiring actual license files, retained notices and measured subsets.
No speculative preload or preconnect is added to the legacy document.

## Validation boundaries

The standard build only exercises the legacy import graph. Validate this unused
entry separately with the installed Vite JS API in library mode (ES, CSS extraction)
and lint `src/portfolio2027/index.js`. Compare standard-build checksums before/after
to detect accidental legacy bundle changes. This does not substitute for visual
browser, typography, keyboard, zoom or reduced-motion QA when the subsystem mounts.
