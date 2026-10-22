import { useEffect } from 'react';
import { createUiConstruction } from '../motion/uiConstruction.js';

export function useUiConstruction(sectionRef) {
  useEffect(() => {
    const section = sectionRef.current;
    const frame = section.querySelector('.p27-work-frame');
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    const controller = new AbortController();
    const { signal } = controller;
    let observer;
    let resizeObserver;
    let layer;
    let raf = 0;
    let disposed = false;
    let done = false;
    let started = false;
    let startTime = 0;
    let lastY = scrollY;
    let lastTime = performance.now();
    let measuredWidth = 0;
    let measuredHeight = 0;

    function finish(reason) {
      if (done || disposed) return;
      done = true;
      section.dataset.construction = 'final';
      section.dataset.constructionReason = reason;
      cancelAnimationFrame(raf); raf = 0;
      layer?.remove(); layer = null;
      observer?.disconnect(); resizeObserver?.disconnect(); controller.abort();
    }
    function start() {
      if (started || done || disposed) return;
      const bounds = section.getBoundingClientRect();
      if (reduced.matches || document.hidden || location.hash === '#projects' || section.contains(document.activeElement)) { finish('access'); return; }
      if (bounds.top < innerHeight * 0.3) { finish('quick-entry'); return; }
      started = true;
      lastY = scrollY; lastTime = performance.now();
      const compact = innerWidth < 1024;
      try { layer = createUiConstruction(frame, compact); } catch { finish('fallback'); return; }
      if (!layer) { finish('canvas-unavailable'); return; }
      const size = frame.getBoundingClientRect();
      measuredWidth = size.width; measuredHeight = size.height;
      const duration = compact ? 1400 : 2400;
      section.dataset.construction = 'points';
      function tick(now) {
        if (done || disposed) return;
        if (!startTime) startTime = now;
        const time = (now - startTime) / duration;
        if (time >= 1) { finish('complete'); return; }
        section.dataset.construction = time < 0.16 ? 'points' : time < 0.34 ? 'geometry' : time < 0.68 ? 'skeleton' : 'materialization';
        try { layer.render(time); } catch { finish('render-fallback'); return; }
        raf = requestAnimationFrame(tick);
      }
      raf = requestAnimationFrame(tick);
    }
    function scroll() {
      if (!started || done) return;
      const now = performance.now();
      const delta = Math.abs(scrollY - lastY);
      const bounds = section.getBoundingClientRect();
      if ((delta > Math.max(160, innerHeight * 0.35) && now - lastTime < 150) ||
        bounds.top < -innerHeight * 0.25 || bounds.bottom <= 0 || bounds.top >= innerHeight) finish('scroll');
      lastY = scrollY; lastTime = now;
    }
    function anchor(event) {
      const link = event.target.closest('a[href^="#"]');
      if (link && !event.defaultPrevented && event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) finish('anchor');
    }
    function hash() { if (location.hash) finish('hash'); }
    function focus() { finish('focus'); }
    function resize() { if (started) finish('resize'); }
    function fontLoading() { if (started) finish('font-loading'); }
    function visibility() { if (document.hidden) finish('hidden'); }
    function preference() { if (reduced.matches) finish('reduced-motion'); }
    section.dataset.construction = 'waiting';
    section.addEventListener('focusin', focus, { signal });
    section.addEventListener('pointerdown', focus, { signal });
    document.addEventListener('click', anchor, { capture: true, signal });
    document.addEventListener('visibilitychange', visibility, { signal });
    window.addEventListener('hashchange', hash, { signal });
    window.addEventListener('popstate', hash, { signal });
    window.addEventListener('scroll', scroll, { passive: true, signal });
    window.addEventListener('resize', resize, { signal });
    reduced.addEventListener('change', preference, { signal });
    document.fonts.addEventListener('loading', fontLoading, { signal });
    if (reduced.matches || location.hash) finish('initial-access');
    else {
      // Load the used faces explicitly; fonts.ready alone may precede React layout.
      Promise.allSettled([
        document.fonts.load('400 19px "DM Sans"'), document.fonts.load('500 15px "DM Sans"'),
        document.fonts.load('400 12px "IBM Plex Mono"'), document.fonts.load('italic 400 64px "Instrument Serif"'),
      ]).then(() => document.fonts.ready).then(() => {
        if (done || disposed) return;
        resizeObserver = new ResizeObserver(([entry]) => {
          if (started && (Math.abs(entry.contentRect.width - measuredWidth) > 1 || Math.abs(frame.getBoundingClientRect().height - measuredHeight) > 1)) finish('reflow');
        });
        resizeObserver.observe(frame);
        observer = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) start();
          else if (started) finish('offscreen');
        }, { rootMargin: '0px 0px -15% 0px', threshold: 0 });
        observer.observe(section);
      });
    }
    return () => {
      disposed = true; controller.abort(); observer?.disconnect(); resizeObserver?.disconnect();
      cancelAnimationFrame(raf); layer?.remove();
      delete section.dataset.construction; delete section.dataset.constructionReason;
    };
  }, [sectionRef]);
}
