import { useEffect, useRef } from 'react';

// Continuous angular harmonics form an organic peripheral ribbon. Glyphs live
// on a fixed grid: only curvature/density changes, never falling/random letters.
function drawField(context, width, height, time, compact) {
  context.clearRect(0, 0, width, height);
  const columns = compact ? 82 : Math.min(232, Math.round(width / 6.9));
  const stepX = width / columns;
  const stepY = Math.max(compact ? 6.5 : 6.6, height / (compact ? 96 : 128));
  const glyphs = '.,:;+=*#';
  const phase = time * Math.PI * 2 / 36;
  context.font = `${compact ? 9 : 10}px "IBM Plex Mono", monospace`;
  context.textBaseline = 'middle';
  context.fillStyle = '#a4a4a4';
  for (let y = stepY; y < height; y += stepY) {
    const ny = (y / height - 0.46) / 0.45;
    for (let col = 0; col < columns; col += 1) {
      const x = col * stepX;
      const nx = (x / width - 0.5) / 0.48;
      const angle = Math.atan2(ny, nx);
      const radius = Math.hypot(nx, ny);
      const contour = 0.83 + 0.12 * Math.sin(3 * angle + phase) +
        0.065 * Math.cos(5 * angle - phase);
      const distance = Math.abs(radius - contour);
      if (distance > 0.095) continue;
      // Stable central safe zone; no glyph can cross into the identity/copy.
      const safe = Math.pow(Math.abs(nx) / 0.64, 4) + Math.pow(Math.abs(ny) / 0.62, 4);
      if (safe < 1) continue;
      const density = Math.max(0, 1 - distance / 0.095);
      const weave = 0.5 + 0.5 * Math.sin(angle * 11 + radius * 38 + phase);
      const intensity = density * (0.42 + 0.58 * weave);
      if (intensity < 0.12) continue;
      context.globalAlpha = (compact ? 0.28 : 0.30) * intensity;
      context.fillText(glyphs[Math.min(7, Math.floor(intensity * 8))], x, y);
    }
  }
  context.globalAlpha = 1;
}

export default function AmbientAscii() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    let context;
    try { context = canvas.getContext('2d', { alpha: true }); } catch { canvas.dataset.state = 'unavailable'; return; }
    if (!context) { canvas.dataset.state = 'unavailable'; return; }
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    let width = 0;
    let height = 0;
    let visible = false;
    let disposed = false;
    let timer = 0;
    let frame = 0;
    let elapsed = 0;
    let lastTick = 0;

    function render(time) {
      if (width && height) drawField(context, width, height, time, width < 700);
    }
    function stop() {
      clearTimeout(timer);
      cancelAnimationFrame(frame);
      timer = 0;
      frame = 0;
      lastTick = 0;
    }
    function tick(now) {
      if (disposed || !visible || document.hidden || reduced.matches) return;
      if (lastTick) elapsed += Math.min(0.25, (now - lastTick) / 1000);
      lastTick = now;
      render(elapsed);
      timer = window.setTimeout(() => {
        frame = requestAnimationFrame(tick);
      }, 1000 / (width < 700 ? 8 : 12));
    }
    function sync() {
      stop();
      if (reduced.matches) {
        canvas.dataset.state = 'static';
        render(0);
      } else if (!document.hidden && visible) {
        canvas.dataset.state = 'running';
        frame = requestAnimationFrame(tick);
      } else canvas.dataset.state = 'paused';
    }
    function resize() {
      const bounds = canvas.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      const dpr = Math.min(window.devicePixelRatio || 1, width < 700 ? 1.25 : 1.5,
        2560 / Math.max(width, 1), 1600 / Math.max(height, 1));
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      render(reduced.matches ? 0 : elapsed);
      sync();
    }
    const resizeObserver = new ResizeObserver(resize);
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    });
    resizeObserver.observe(canvas);
    intersectionObserver.observe(canvas);
    document.addEventListener('visibilitychange', sync);
    reduced.addEventListener('change', sync);
    document.fonts.ready.then(() => { if (!disposed) { render(reduced.matches ? 0 : elapsed); } });
    resize();
    return () => {
      disposed = true;
      stop();
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      reduced.removeEventListener('change', sync);
      document.removeEventListener('visibilitychange', sync);
    };
  }, []);

  return (
    <div className="p27-ascii-viewport" aria-hidden="true">
      <canvas ref={canvasRef} className="p27-ascii" data-state="initializing" />
    </div>
  );
}
