# Block 02 — browser QA and visual comparison

Date: 2026-10-21. Status: engineering delivery pending Director review.
Source: `src/portfolio2027/preview.html`. Chromium 153, headless, CSS viewports.
Screenshots show real browser rendering, not Figma exports. Reference captures
were inspected through Figma Design Context and compared visually with these.

## Evidence

`results.json` contains eight viewport measurements, loaded faces, layout shifts,
17 passing functional checks, ASCII timing samples, and empty normal-context
page/console-error and failed-request lists. `verify.mjs` is the reproducible
harness. `hash-entry-repeat.json` records repeated initial-hash entry checks.

| Viewport | Figma Hero reference | Browser screenshot |
|---|---|---|
| 1920×1080 | `10:97` | `hero-1920x1080.png` |
| 1920×960 | `10:123` | `hero-1920x960.png` |
| 1920×900 | `10:149` | `hero-1920x900.png` |
| 1536×864 | `10:175` | `hero-1536x864.png` |
| 1366×768 | `10:201` | `hero-1366x768.png` |
| 768×1024 | `10:227` | `hero-768x1024.png` |
| 390×844 | `10:253` | `hero-390x844.png` |
| 320×844 | `10:277` | `hero-320x844.png` |

Additional evidence: `navigation-mobile-open.png`, `text-200-percent-320.png`,
`fallback-320.png`. The first two capture the overlay and text enlargement;
fallback intentionally blocks font delivery and returns no Canvas context.

## Visual comparison

- Hero relative vertical positions, closing rules, readable widths and action
  dimensions follow the supplied layouts. The integration adds 64/56px before
  Hero, matching `111:725`; it does not compress the whole Hero into the remaining
  viewport. Short-screen captures can end before the closing block finishes;
  its text continues in normal scroll flow and is not clipped by fixed height.
- Horizontal gutters reuse foundation interpolation. At 390px the computed gutter
  is 24.375px versus Figma's 24px. Header dimensions are 64/56px at normal text size.
- Typeface families, weights, italic and DM Sans opsz 14 are retained. There is a
  real remaining metric difference: the web first-name span is about 308px wide
  at 88px versus the 278px Figma box; at 390px it is about 198px versus 179px.
  Instrument Serif is much closer (about 446px versus 449px at desktop).
  No horizontal deformation or unauthorized family substitution was used to hide
  this. Direction should review the first-name rendering before visual approval.
- ASCII was refined from a broad elliptical first pass into a thinner asymmetric
  peripheral ribbon, with lower intensity and stronger angular curvature. The
  text-safe center stays clear. It is a procedural interpretation of the static
  editable glyph field, not a pixel-identical replay of Figma glyphs.
- The obsolete Hero eyebrow is absent. No project screenshots or extra sections
  have been introduced. Future destinations remain marked technical placeholders.

## Functional results

Passed: desktop and compact disclosure; measured navigation fit; native links;
Escape restores toggle focus; Tab enters/leaves without trapping; visible focus;
selection closes and focuses target; outside pointer closes; 80/72px offsets;
initial hash, Back/Forward, passive active section without rewriting hash; sticky
header; reachable final menu item at 320×360; 200% root text reflow at 320px;
reduced-motion static field; offscreen pause and resume; font/Canvas failure;
readable HTML copy without JavaScript. No errors in the normal QA context.

The document-history restoration policy is manual while this experience mounts;
cleanup restores the prior value. Initial anchoring explicitly loads the four used
font faces, awaits final layout and prevents native scroll anchoring from fighting
it. A previous intermittent 32px offset drift was corrected during testing.

## ASCII performance and limits

Final full-suite run recorded:

| Sample | Frames | Mean CPU callback | p95 | Maximum |
|---|---:|---:|---:|---:|
| Desktop, 1366×768 | 26 | 3.33ms | 3.70ms | 4.80ms |
| Mobile, 390×844 | 14 | 1.78ms | 2.10ms | 2.10ms |

These short samples measure JS rendering callbacks in this environment only,
not GPU energy, physical-device battery use or long-session memory. Scheduling
is bounded at 12/8fps. No Canvas clears occurred during the sampled offscreen,
reduced-motion or simulated-hidden intervals. Visibilitychange was simulated
through the document visibility property/event, not verified in an actual mobile
background tab. DPR 3 was also simulated: a 484.83px Canvas used 606 backing pixels
(near the 1.25 cap). StrictMode did not produce duplicate render cadence; cleanup
was inspected in source. Physical device/background/unmount profiling remains QA.

## Font delivery and layout-shift observations

The environment could not use the standard Playwright CDN download, so Chromium
was supplied as external temporary QA tooling. The browser CA store could not
validate the outbound font proxy. For the normal visual tests, unchanged official
CSS/TTF responses were fetched using curl's normal TLS validation and fulfilled in
the test context. CORS headers were preserved. Certificate checks and web security
were not disabled. No fonts were copied into the repository or shipped.

Actual fonts loaded and fallback behavior were tested. Direct Google Fonts delivery
in a normal browser and production WOFF2 transfer cost remain unverified here.
The harness used provider TTF responses, not a production subset transfer model.
Initial layout-shift sums in the saved run ranged roughly 0.013–0.126 (mobile
highest). These include preview bootstrap/font swaps; they are **not** a claim
of production CLS compliance. Reducing initial shifts is a documented follow-up
before release. Do not treat `display=swap` as a complete CLS solution.

No screen reader, Safari, Firefox, physical touchscreen or real browser-zoom
session was tested. 200% here means root text enlargement, not browser zoom.

## Reproduce

With externally available Playwright and Chromium:

```bash
P27_PLAYWRIGHT_MODULE=/absolute/path/to/playwright/index.mjs \
P27_CHROMIUM_EXECUTABLE=/absolute/path/to/chromium \
node docs/qa/block02/verify.mjs
```

Both environment paths are optional when standard Playwright tooling is already
available. The harness starts/closes Vite itself. `P27_CHROMIUM_ARGS` optionally
accepts a JSON argument list. `P27_FONT_CSS` optionally identifies trusted official
provider CSS for the proxy workaround described above; it is not needed normally.
No QA package is added to the application's package.json or lockfile.

Standard checks are `npm run lint`, `npm run build`; the four legacy ESLint errors
remain separate from `npx --no-install eslint src/portfolio2027` (PASS). The normal
2025 build is checked by SHA-256 against its pre-Block-02 artifacts. The independent
preview is built with Vite's existing API and an explicit HTML input, into `/tmp`.

Block 03 remains unauthorized. These results do not authorize release or merge.
