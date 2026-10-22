# Block 03A — zero-flash, visibility and pacing

2026-10-22 · **DONE — PENDING DIRECTOR REVIEW**. No motion approval or release.
Baseline `f6eae623b5ed923428e3528b7fc452c260c1bc7a`.

## Changes and exact cause

The previous React markup exposed the real section while useEffect waited for fonts.
The IntersectionObserver then appended an opaque Canvas only at the 85% trigger.
That necessarily allowed final UI → blank → construction. Separately, any internal
anchor and the navigation's automatic heading focus called finish(), suppressing
normal CTA/navbar entry. The initial 2400/1400ms pacing and low-contrast contours
were rejected by the owner.

The initial JSX now carries `data-construction="armed"`; CSS covers only the visual
presentation with a #080808 pseudo-element, including rails. useLayoutEffect arms
recovery before paint. `armed`/`waiting` remain covered during font preparation.
Only after a complete opaque phase-zero Canvas exists is the guard removed in the
same task. Semantic DOM/layout/links stay present; no aria-hidden/inert/display:none
on content, no focus trap or scroll lock. Reduced-motion CSS removes the guard even
before effect setup. Direct hash/initial focus resolve before React's first paint.
The existing readable HTML fallback is unchanged when JavaScript is disabled.

Missing capabilities or setup failure, null Canvas/preparation/render error resolve
final. Font preparation has a 6000ms recovery timer, cleared when fonts are ready;
an active sequence has duration+1500ms recovery. Normal completion/interruption/
unmount removes Canvas and cancels all RAF, observers, listeners and three timer
kinds. Unsupported observer handling is tested in an isolated SelectedWork React
mount; this is not a compatibility audit of unrelated Hero/navigation APIs.

## Entry policy

- Normal pointer/touch on #projects grants one automatic heading focus during that
  same native/React click dispatch; the permission expires on the next task. A
  microtask was too early across the native capture and React bubble callbacks.
- Existing navigation alone controls history, hash, smooth scroll and focus. This
  hook does not preventDefault or delay any navigation.
- A smooth-navigation exemption lasts at most 1800ms and ends on wheel/touch/key
  input. It exempts only fast-jump detection, not real section exit or accessibility.
- Pointer entry is retained through font readiness; keyboard click detail=0,
  programmatic/assistive focus, initial hash and reduced motion resolve final.
- Ordinary scrolling no longer cancels merely because the top is 25% above the
  viewport. Only actual exit or a large fast jump (>max(400px,90vh) within150ms)
  resolves. Geometry is not rebuilt during scroll. Return scrolling does not replay.

Review reset: reload the isolated preview **without a hash**. If needed, run
`history.replaceState(null, '', location.pathname)` then reload. No shipped replay
button or feature has been added.

## Timing and visibility

| Phase | Desktop | Tablet/mobile (normalized) |
|---|---|---|
| Point establishment | starts 0, progressive through ~800ms | same phase identity |
| Geometric tracing | starts ~600ms, develops to ~1800ms | proportional timing |
| UI/typographic skeleton | starts ~1400ms, completes by ~2800ms | proportional timing |
| Structural materialization | ~2800–4100ms | ~2000–2928ms |
| Final + resource removal | 4200ms | 3000ms |

Local smoothstep curves create gradual starts/ends with overlap; the sweep traverses
the real measured structure continuously. No artificial idle phase, bounce, opacity-
only reveal or geometry/layout change. Color stays monochrome: points now use
secondary gray with .72 alpha/1.4px marks; guides .9/1px; text contours .9/.85px;
baselines .48 and frontier1.25px. Final UI colors/type are untouched.

## Evidence

- [Desktop real-browser recording](scroll-1920.mp4), 1920×1080, ~5.47s.
- [Mobile real-browser recording](scroll-390.mp4), 390×844, ~3.63s.
- `armed-{width}.png` and `phase-{width}-{1..5}-{state}.png` at **1920×1080,
  1366×768,390×844,320×844** show pre-entry and all five actual runtime phases.
- `fonts-waiting-390.png` shows the opaque preparation surface with delayed fonts.
- `static-{width}.png` are the unchanged final sections; `hero-1920.png` is unchanged.

Videos are CDP screencast frames from live browser rendering with real timestamps,
then encoded to MP4/30fps preserving capture intervals (±one output frame), not a
slideshow of staged states or a synthetic animation. Source frame counts90/190.
Actual state logs in `results.json`: waiting→points→geometry→skeleton→materialization
→final. Native elapsed first-points-to-final ~4224.5/3024.1ms, including RAF cadence.
Representative phase captures alone use a separate virtual-clock context.

All four sequences sampled React RAFs from before entrance: 309/307/232/232 samples.
No final state precedes the first build, and no visible pre-final sample lacks the
visual cover/Canvas. The materialization frontier intentionally reveals real DOM.
Screenshots/video were visually inspected; no final→blank→build sequence observed
in these scenarios. This is scoped Chromium evidence, not a guarantee about every
browser/physical display or pre-React HTML loading condition.

## Checks

`results.json`: Chromium153.0.8010.0, **26 passed groups**, zero monitored page errors.
Includes pointer Hero/navbar/mobile-menu entry and complete timing, emulated mobile
taps on Hero/menu, ordinary wheel increments, keyboard CTA, direct hash, focus,
reduced motion/change, reflow, rapid scroll/exit, late fonts, null Canvas, render
failure, never-resolving preparation watchdog, no-JS HTML, missing observer,
active React unmount, no replay and no further construction draws in200ms after
completion/unmount. Touch and missing-API cases are simulated, not physical-device
or screen-reader sessions. The initial delayed-font assertion was corrected to
account for existing navigation's top restoration after fonts finish; no navigation
code was changed. An early sampler tried to read React geometry from the initial
plain HTML heading; it now samples only the actual `.p27-work` section.

PIL ImageChops: all four static captures and Hero Full HD are **pixel-identical** to
Block03 captures. Heights remain1072/868/1178/1348px. No horizontal overflow at the
four sizes, including waiting/active construction; source diff confirms Hero/navigation/ASCII, copy/URLs, fonts/tokens and
other sections untouched. A 4px overhang from the 24px decorative bleed at 320px was found during
waiting/active-state review and clipped horizontally at the section boundary.
Static geometry and focus space remain unchanged. No application package/lock changes.

Lint/build output is recorded in CURRENT.md. Global lint retains four legacy
no-unused-vars errors; scoped ESLint passes. Normal build matches all nine baseline
artifacts by SHA-256; isolated preview build passes. Existing release caveats for
font delivery/CLS, Safari/Firefox, physical devices, assistive tech and GPU/battery
remain outside this targeted pass.

## Reproduce

Use the same development preview and external QA tooling as Block03, plus system
ffmpeg for real-browser recording. From repository root:

```bash
P27_PLAYWRIGHT_MODULE=/absolute/path/playwright/index.mjs \
P27_CHROMIUM_EXECUTABLE=/absolute/path/chromium \
P27_CHROMIUM_ARGS='["--no-sandbox"]' \
P27_FONT_CSS=/absolute/path/provider.css \
P27_FONT_CACHE=/absolute/path/font-cache \
node docs/qa/block03a/verify.mjs
```

The proxy/browser CA limitation is unchanged: official CSS/TTF responses fetched
with TLS-validated curl are supplied to QA requests only, CORS preserved, no
certificate/web-security bypass and no font binaries committed. No production
merge/deploy. **Block04 remains unauthorized.**
