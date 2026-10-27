# UI Construction — brief evaluation before implementation

2026-10-22. Baseline `e6bf62ea669b6212f5bf905c7eb4a5811f8d7490`.
Read Figma production 30:898/1237/1350/1463/1576/1689, spec 35:818,
PLAY 45:7422/10156, reduced 45:11220 and B/C/D 45:6096/6470/6906.
The static SVG dots in the study describe measured geometry; production must
regenerate them from responsive DOM, as explicitly required by the brief.

Reference evaluated (read only, downloaded to /tmp; not vendored):
https://github.com/Jakubantalik/transitions.dev/tree/main/skills/transitions-ui-generation
`ui-generation.js` 34,947 bytes, CSS 4,231 bytes at inspection. Reference measures
getBoundingClientRect and Range.getClientRects, creates SVG guides/text geometry,
progressively draws paths, and clips real content below a scan line. cancel()
cancels RAF/timeouts and removes overlay. It needs no framework runtime; React
requires effect cleanup and post-font measurement. The reference's auto observer
is not a complete match for this brief's anchor/focus/resize/quick-scroll policy.

License inspected: repository LICENSE, copyright 2026 Jakub Antalik. Transitions
and skills allow personal/commercial website integration/modification but prohibit
redistributing the collection as a competing library. Tooling has separate MIT
terms. Do not label the whole reference MIT. No source or license text copied into
application code; original implementation below follows the required visual idea.

Decision: native Canvas 2D overlay + semantic, permanently mounted React content.
One decorative node avoids hundreds of SVG dots/paths; measured text lines can be
strokeText contours, with actual fonts and word positions from DOM Range. Bounds,
rails and separators come from explicit semantic measurement markers. Calculate
once after used fonts load, not in scroll/RAF; bounded point grid and backing
store. Draw per animation frame only while onscreen; no permanent engine.

The opaque decoration covers unrevealed pixels, then a vertical clipping frontier
clears it to reveal the actual DOM. No opacity/visibility/inert/aria-hidden is
applied to content. Overlay is aria-hidden and pointer-events:none; pointer/focus,
internal anchors, fast scrolling, hidden document, reduced motion and reflow can
resolve immediately. Remove overlay and all transient resources on completion.
Static/no-Canvas/failed initialization retain content. Resize before start measures
latest layout; resize or late font loading during motion resolves final to avoid
stale geometry. No third-party install is needed. Geometry cost is O(text words +
marked elements), bounded for two projects; frame cost O(points + traces + lines).
Measure actual timing in Chromium, explicitly not a mobile-device benchmark.

Timing: desktop 2400ms/mobile 1400ms, single run. Figma desktop PLAY uses 2.4s;
mobile tracks retrieved actually span 2s including final hold, despite proposed
1.4s in brief. Normalize the same five phases to the requested 1.4s active sequence.
No loop/repeat from Figma's demonstration is carried into production.
