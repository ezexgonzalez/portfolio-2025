# Portfolio 2027 — isolated development experience

Blocks01–05A are approved for final QA. Block06 audit and targeted corrections
are delivered for Director review; publication remains unauthorized. The isolated
five-section experience keeps the 2025 default entry unchanged. See
`docs/qa/block06/README.md` for measurements, unresolved release checks and
`docs/qa/block06/MIGRATION.md` for the unexecuted activation plan.

## Open locally

```bash
npm ci
npm run dev -- --host 127.0.0.1
```

Open `http://127.0.0.1:5173/src/portfolio2027/preview.html` (use the port Vite prints).
The default `/` remains 2025. This development HTML is not an input of the normal
production build; no public route/router or hosting configuration was added.
All five anchor destinations reach real content. The readable no-JS fallback
includes both projects, the full story, three capability entries and Contact.

## Architecture

- `index.js` imports the approved foundation and exports the root class.
- `styles/tokens.css` remains the single token source; no duplicate JS theme.
- `styles/foundation.css` provides scoped reset, reading/container helpers,
  typography families, focus, selection and reduced-motion defaults.
- `components/Hero.jsx` contains the approved Spanish content and semantic h1.
- `components/Navigation.jsx` owns the nonmodal mobile disclosure and actual-width
  navigation measurement. Identity/links are measured again after fonts load.
- `hooks/useAnchorNavigation.js` owns active-section reading, clean-URL session history,
  focus, initial font readiness and scroll offset. It restores document history
  policy and disconnects listeners/observer/RAF on cleanup.
- `components/AmbientAscii.jsx` owns the independent Hero Canvas lifecycle.
- `components/SelectedWork.jsx` owns the two approved editorial project modules.
- `styles/selected-work.css` uses native grid/subgrid to align equivalent desktop
  rows, then natural stacked flow below 1024px; no fixed section height.
- `hooks/useUiConstruction.js` owns one-shot triggering, interruption and cleanup.
- `motion/uiConstruction.js` measures real DOM words/bounds once and renders the
  decorative point/trace/contour/sweep sequence on one transient Canvas.
- `components/AboutStory.jsx` and `styles/about-story.css` implement the three
  narrative chapters with paragraph-linked chronology, without fixed heights.
- `components/SkillsCapabilities.jsx` and `styles/skills-capabilities.css` implement
  the three-entry technical index; no actions or pointer cursor.
- `hooks/useSkillsMotion.js` owns one-shot CSS title/rule entry and fail-open cleanup.
- `components/ContactClosing.jsx` and `styles/contact-closing.css` implement the
  Editorial Sign-off, four native links and a minimal footer with current year.
- `navigation.js` declares the five approved anchor destinations.
- `styles/experience.css` implements the two approved pieces using native CSS.
- `preview/` owns the React root and development-only document reset.
- `preview.html` is an independent HTML document, with Spanish language,
  noindex metadata, optional-font stylesheet and readable HTML fallback.

The preview imports no legacy CSS, `LiquidBackground` or `initTheme()`. Its own
HTML scroll rules do not affect `/`. Native scroll anchoring is disabled only in
this preview document because destination restoration is handled explicitly after fonts.

## Tailwind boundary

The new components use **semantic CSS classes**, not Tailwind utilities. Therefore
`@source not "./portfolio2027"` remains intentional; all actual styles are imported
by the preview entry. `docs/qa` is also excluded from legacy utility discovery to
avoid generating accidental utilities from test text. No Tailwind registration or
new packages are needed. Revisit explicit source registration if future blocks
introduce Tailwind utility strings in this subsystem.

## Figma and responsive contract

Sources: Hero `10:97` through `10:277`, navigation `111:591`/`111:637`, integration
`111:725`, foundations `11:37`, specifications `111:550`, ASCII study `11:203`.
Hero copy omits the retired eyebrow. The navigation integration reference adds a
64/56px header before the Hero. Block 02A supersedes the original desktop height:
at widths ≥1100px the Hero uses the viewport remaining below the header, with
flexible vertical whitespace and intrinsic content growth under zoom. Smaller
screens retain natural scrolling. The outer frame is removed; only the full-width
separator above the editorial closing remains. About and Skills follow Selected Work in the same document.

Colors, families, frame/reading limits, hairlines, rhythm and header tokens reuse
Block 01. The display type scale and width/height adaptations now follow the
approved Hero references. This is not a set of absolutely positioned text layers.

## Typography

`preview.html` links the existing opt-in `styles/fonts.css`. The CSS2 request uses
DM Sans 400/500 at opsz 14, Instrument Serif regular/italic 400 and IBM Plex Mono
400 with `display=swap`. Normal system/Georgia/mono fallbacks remain readable;
large fallback names and enlarged text may reflow instead of clipping.

No font binaries are redistributed. Figma cites OFL 1.1 and official sources:
https://github.com/google/fonts/tree/main/ofl/dmsans,
https://github.com/google/fonts/tree/main/ofl/instrumentserif,
https://github.com/IBM/plex. Future self-hosting needs actual license files and
retained notices. No changes to legacy font requests or preconnects were made.

## ASCII contract

Native Canvas 2D; fixed glyph grid, angular harmonics and a stable central safe
zone. No images, Matrix rain, random particle placement or external runtime.
A nominal 36-second evolution is an engineering interpretation of the static
storyboard, not imported animation tracks (`get_motion_context` returned none).
The extra Hero entrance remains unimplemented because the master marks it Proposed.

Render cadence is capped at 12fps desktop / 8fps compact. Columns cap at 232;
rows cap at 128/96. DPR caps at 1.5/1.25 and backing dimensions at 2560×1600.
ResizeObserver, IntersectionObserver, visibility events and the media preference
control rendering. No timer/RAF loop runs offscreen, hidden or in reduced motion.
Reduced motion draws phase zero; context failure leaves all semantic content
available. StrictMode cleanup cancels scheduling and disconnects resources.

## Selected Work / UI Construction

Figma production `30:898` through `30:1689`, specs `35:818`, motion `45:5809`,
PLAY `45:7422`/`45:10156`, reduced motion `45:11220`. Only Eze Web Studio and
Task Manager are included, with verified public/repository destinations. Text-only
modules, 1600px maximum frame, 720px columns/160px gap at 1920; 624px/96px at
1536 and 563px/96px at 1366. Tablet/mobile stack; small links stack below 360px.
The existing gutter token yields 24.375px at 390 instead of Figma's rounded 24px.

Point field → geometric trace → typographic/UI skeleton → vertical sweep → actual
DOM. Block 03A keeps the same geometry/final UI with a prepaint opaque guard on
`armed`/`waiting`. JSX sets the armed marker in its first render; useLayoutEffect
sets up recovery before paint. The guard hands off atomically only after the
phase-zero Canvas is opaque. Semantic DOM stays mounted and accessible.

Start near 85% viewport height, once per visit. Timing is now **4200ms desktop /
3000ms below 1024px**, with smooth progression and a 2800–4100ms desktop sweep.
Points, geometry, text contours and frontier use clearer neutral contrast; no
change to final typography/colors/layout. Native Canvas geometry is measured from
loaded fonts and wrapped DOM words; no per-scroll reconstruction.

Normal pointer/touch on #projects allows the sequence while navigation keeps smooth
scroll and heading focus with a clean URL. A matching native pointer-down/focus
pair inside Selected Work is allowed: blank/text/project-link presses do not
finish construction. Its focus token is tied to the exact focusable pointer target,
consumed once, cleared by keyboard/pointer cancellation and after click's task;
a500ms post-pointerup bound covers gestures without a click. It never prevents
activation. Navigation outside the section, offscreen/fast scroll and hidden tabs
retain normal cleanup. Keyboard/programmatic/assistive focus and explicit initial
hash still resolve final. A short navigation-scroll exemption remains1800ms.
The Canvas engine, geometry, visual phases, contrast and4200/3000ms are unchanged.

Explicit font readiness, bounded500/160-point grid, DPR/backing caps. Missing
capabilities/setup errors, Canvas/render failure and stalled preparation fail open.
Font preparation has a6s watchdog; active motion has duration+1500ms recovery.
Reflow, late font load, document hiding and preference change resolve final.
Completion/unmount cancels recovery/focus/navigation/pointer timers, RAF, observers,
listeners and Canvas. Semantic content remains available throughout.

Normal development review replay: refresh the clean URL. It starts at Hero and
rearms one-shot effects. Explicit `#projects` in the address bar is a deep link
and intentionally resolves final; use an unhashed URL to review the entrance.
No replay control or production feature was added.

## Clean internal navigation

Native `href="#id"` stays intact for no-JS, modified clicks and explicit deep links.
Handled internal clicks write a clean `pathname + search` and merge a destination
under `history.state.portfolio2027.destination`, preserving other state. Repeating
the same destination does not add an entry. Popstate restores each stored target
with its heading focus and existing64/56px header plus16px offset. The header,
mobile menu and visual active states are unchanged.

On a new document or reload, a valid explicit URL hash wins; without a hash,
the current entry is reset to Hero rather than reviving the previous document's
destination. Manual browser scroll restoration is set in layout effect, with
another initial alignment after fonts. Navigation occurring before fonts finish
invalidates that initial alignment, avoiding a late jump back. Initial Hero does
not take heading focus or acquire an unsolicited focus outline. Explicit hashes
are preserved; only handled internal navigation writes a clean URL.

## About / Story and Skills / Capabilities

About sources: production `61:508`, desktop `68:523`, tablet `68:576`, mobile
`68:629`, notes `68:682`. All paragraphs and emphasis are preserved. Desktop
reads in a controlled left column (680/640/600px), with 360/320/280px chronology.
Native grid rows tie 2025 to the actual return paragraph, so font changes and
longer text cannot detach the date. The other years accompany their chapters.
Below 1024px a single DOM sequence places 2021 after the origins, 2025 between
work experience and the return, and 2026 after Full Stack/Eze Web Studio.
About remains intentionally tall and scrollable; its rhythm is independent of
Selected Work’s compact desktop spacing.

Skills sources: production `89:556`, desktop `90:556`, tablet `90:634`, mobile
`90:712`. Left title/right list on desktop, stacked from tablet; numbers,
categories, descriptions and technology lines retain their hierarchy. NBSPs in
Tailwind CSS and REST APIs match Figma. Text can reflow under enlargement.

The master `92:556` rows `104:781/807/833/859/885/911/937` were read in full.
About's proposed effects remain static. Block05A explicitly authorizes Skills:
- Title6→0px/300ms desktop;4→0px/220ms compact, cubic-bezier(.22,1,.36,1).
- Three top separators draw from left in550ms with0/110/220ms desktop delays;
  compact450ms simultaneous, cubic-bezier(.2,.8,.2,1). Bottom/index rules stay static.
- Precise-hover number color #ABABAB↔#EFEFEF over180ms ease-out; no pointer cursor,
  actions, links, cards or motion of descriptions/technologies.

One IntersectionObserver watches title and first entry at15% visibility, unobserves
on entry, and CSS animates transforms without changing layout. Text is always
fully visible. Native animationend restores original borders and removes motion
markers' active styles;2s recovery timers fail open if animation events are lost.
Observers/listeners/timers are released on completion/unmount. Direct hash, Skills
anchor/focus, reduced motion, hidden page, active reflow and setup failure resolve
final. Without JavaScript/observer the original static border presentation remains.
No native keyframe tracks were returned by Figma's motion API for90:556; values
come from the matrix plus the owner's explicit05A timing refinements.

## Contact / Closing and complete integration

Figma Contact A: production `89:557`, desktop `90:790`, tablet `90:829`, mobile
`90:868`, state study `92:983`; master `92:556` Contact rows were read in full.
The 240/136/88px Instrument Serif headline and 44/32/24px email follow the
1920/768/390 references. Intermediate desktop type/spacing adapt fluidly; 320px
uses a 76px headline and 22px complete email. Text can wrap under enlargement;
no clipping, ellipsis or forced viewport height. Secondary links are single
native anchors including their decorative direction indicators, at least44px
high, stacked in full-width rows below640px. The email is always underlined;
precise-pointer hover, pressed feedback and the existing2px/4px focus ring are
immediate, without decorative movement, arrow transforms or entry animations.

Email invokes the native `mailto:` handler without a new empty tab. LinkedIn
and GitHub use separate tabs with noopener/noreferrer. CV uses native `download`
with the existing same-origin `/cv-ezequiel-gonzalez.pdf`; the PDF is unchanged.
Browser download tests match its original bytes. LinkedIn returned999 to the
HTTP probe; its public profile still needs manual verification before release.

`new Date().getFullYear()` provides the footer year at render time (2026 during
this work; a2031 clock test verifies the dynamic value). With JavaScript disabled,
the readable static HTML keeps the signature without a year rather than hardcoding
an obsolete year. No-JS does not claim dynamic calendar behavior.

Hero → Selected Work → About → Skills → Contact all remain in one main element.
No temporary destination or extra navigation remains. The existing anchor offset
is unchanged; short final sections may stop at the document bottom before reaching
that offset (e.g.839px Contact in a1024px tablet viewport). No blank spacer is
added to force an anchor alignment. Default `/`, noindex/nofollow preview, sources,
production metadata, domain and hosting stay separate from release authorization.

## Verification

See `docs/CURRENT.md`, `docs/qa/block02/README.md`, saved browser screenshots and
`docs/qa/block02/results.json`. The reproducible QA harness uses separately supplied
Playwright/Chromium tooling; it is not a project dependency. Standard production
build and isolated preview build are validated separately. Browser results do not
constitute approval or release authorization. Block 03 evidence and the scoped
external-tool harness are in `docs/qa/block03/`; correction evidence, real browser
recordings and capture timestamps are in `docs/qa/block03a/`. Block 04 copy/geometry, responsive captures and regression
evidence live in `docs/qa/block04/`. Block05 Contact, complete-page captures,
PDF/link checks and regressions are recorded in `docs/qa/block05/`. Block06 evidence is in `docs/qa/block06/`; no publication is implied.
05A evidence is in `docs/qa/block05a/`.
