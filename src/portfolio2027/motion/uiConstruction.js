// Original native implementation of the approved A–E study. No vendor runtime.
const clamp = (value) => Math.max(0, Math.min(1, value));
const progress = (time, start, end) => clamp((time - start) / (end - start));

function measure(frame, context, compact) {
  const base = frame.getBoundingClientRect();
  const offset = 24;
  const rect = (box) => ({ x: box.left - base.left + offset, y: box.top - base.top, w: box.width, h: box.height });
  const lines = [];
  // Measure the actual wrapped words once. No layout reads inside animation frames.
  const walker = document.createTreeWalker(frame, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (!node.textContent.trim() || node.parentElement.closest('[aria-hidden="true"]')) continue;
    const style = getComputedStyle(node.parentElement);
    const range = document.createRange();
    let line;
    for (const match of node.textContent.matchAll(/\S+/g)) {
      range.setStart(node, match.index);
      range.setEnd(node, match.index + match[0].length);
      const box = rect(range.getBoundingClientRect());
      if (!box.w || !box.h) continue;
      if (!line || Math.abs(line.y - box.y) > 2) {
        line = { ...box, text: match[0], font: `${style.fontStyle} ${style.fontWeight} ${style.fontSize} ${style.fontFamily}`, spacing: style.letterSpacing, size: parseFloat(style.fontSize) };
        lines.push(line);
      } else {
        line.text += ` ${match[0]}`;
        line.w = box.x + box.w - line.x;
      }
    }
  }
  for (const line of lines) {
    context.font = line.font;
    const metrics = context.measureText(line.text);
    line.baseline = line.y + (metrics.fontBoundingBoxAscent || line.size * 0.85);
  }
  const rules = [...frame.querySelectorAll('[data-build-rule]')]
    .filter(element => element.getClientRects().length)
    .map(element => rect(element.getBoundingClientRect()));
  const boxes = [...frame.querySelectorAll('[data-build-box]')].map(element => rect(element.getBoundingClientRect()));
  // The mobile between-project divider is a pseudo-element, located from real modules.
  if (compact && boxes.length) {
    const modules = [...frame.querySelectorAll('.p27-project')].map(element => rect(element.getBoundingClientRect()));
    if (modules[1]) rules.push({ x: modules[1].x, y: modules[1].y - 41, w: modules[1].w, h: 1 });
  }
  const width = base.width + 2 * offset;
  const height = base.height;
  const dots = [];
  const columns = compact ? 10 : 25;
  const rows = compact ? 16 : 20;
  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < columns; col += 1) {
      dots.push({ x: offset + col * base.width / (columns - 1), y: row * height / (rows - 1), delay: Math.hypot(col / columns - 0.5, row / rows - 0.5) * 0.12 });
    }
  }
  return { width, height, rules, boxes, lines, dots };
}

function strokePath(context, box, amount, horizontal) {
  const x2 = horizontal ? box.x + box.w * amount : box.x;
  const y2 = horizontal ? box.y : box.y + box.h * amount;
  context.beginPath(); context.moveTo(box.x, box.y); context.lineTo(x2, y2); context.stroke();
  if (amount > 0 && amount < 1) {
    context.setLineDash([]); context.fillRect(x2 - 1.5, y2 - 1.5, 3, 3); context.setLineDash([1, 5]);
  }
}

function draw(context, model, time) {
  const { width, height, dots, rules, boxes, lines } = model;
  // Below the frontier is construction; above it is the unmodified real DOM.
  const sweep = 1 - Math.pow(1 - progress(time, 0.68, 0.97), 2);
  const y = sweep * (height + 2);
  context.clearRect(0, 0, width, height);
  context.save();
  context.beginPath(); context.rect(0, y, width, height - y); context.clip();
  context.fillStyle = '#080808'; context.fillRect(0, 0, width, height);
  context.fillStyle = '#7d7d7d';
  for (const dot of dots) {
    context.globalAlpha = progress(time, dot.delay, dot.delay + 0.1) * 0.28;
    context.fillRect(dot.x, dot.y, 1, 1);
  }
  context.globalAlpha = 0.72; context.strokeStyle = '#7d7d7d'; context.lineWidth = 0.8;
  context.setLineDash([1, 5]);
  rules.forEach((rule, index) => {
    const q = progress(time, 0.16 + index * 0.016, 0.39 + index * 0.016);
    strokePath(context, rule, q, rule.w > rule.h);
  });
  boxes.forEach((box, index) => {
    const q = progress(time, 0.30 + index * 0.018, 0.51 + index * 0.012);
    const distance = (box.w * 2 + box.h * 2) * q;
    let remaining = distance;
    for (const side of [
      { x: box.x, y: box.y, w: box.w, h: 0 },
      { x: box.x + box.w, y: box.y, w: 0, h: box.h },
      { x: box.x + box.w, y: box.y + box.h, w: -box.w, h: 0 },
      { x: box.x, y: box.y + box.h, w: 0, h: -box.h },
    ]) {
      const length = Math.abs(side.w || side.h);
      if (remaining > 0) strokePath(context, side, Math.min(1, remaining / length), !!side.w);
      remaining -= length;
    }
  });
  // Typographic contours and baselines anticipate the real text, including wraps.
  lines.forEach((line, index) => {
    const q = progress(time, 0.34 + index / lines.length * 0.12, 0.57 + index / lines.length * 0.06);
    if (!q) return;
    context.save(); context.beginPath(); context.rect(line.x - 1, line.y - 2, (line.w + 3) * q, line.h + 4); context.clip();
    context.font = line.font; context.letterSpacing = line.spacing === 'normal' ? '0px' : line.spacing;
    context.textBaseline = 'alphabetic'; context.globalAlpha = 0.58; context.lineWidth = 0.5;
    context.setLineDash([1, 2]); context.strokeText(line.text, line.x, line.baseline);
    context.globalAlpha = 0.22; context.beginPath(); context.moveTo(line.x, line.y + line.h + 2); context.lineTo(line.x + line.w, line.y + line.h + 2); context.stroke();
    context.restore();
  });
  context.restore();
  if (time >= 0.68 && time < 0.97) {
    context.globalAlpha = 1; context.fillStyle = '#7d7d7d'; context.fillRect(0, y, width, 1);
  }
}

export function createUiConstruction(frame, compact) {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  if (!context) return null;
  const model = measure(frame, context, compact);
  const scale = Math.min(devicePixelRatio || 1, compact ? 1.25 : 1.5, 2560 / model.width, 2048 / model.height);
  canvas.width = Math.ceil(model.width * scale);
  canvas.height = Math.ceil(model.height * scale);
  canvas.style.width = `${model.width}px`; canvas.style.height = `${model.height}px`;
  canvas.className = 'p27-construction'; canvas.setAttribute('aria-hidden', 'true');
  context.setTransform(scale, 0, 0, scale, 0, 0);
  draw(context, model, 0);
  frame.appendChild(canvas);
  return {
    render(time) { draw(context, model, time); },
    remove() { canvas.remove(); canvas.width = 0; canvas.height = 0; },
  };
}
