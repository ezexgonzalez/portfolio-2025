import { useLayoutEffect } from 'react';
import { createUiConstruction } from '../motion/uiConstruction.js';

export function useUiConstruction(sectionRef) {
  useLayoutEffect(() => {
    const section = sectionRef.current;
    // JSX already arms the visual cover. Fail open before doing optional work.
    if (!window.matchMedia || !window.IntersectionObserver || !window.ResizeObserver ||
      !window.AbortController || !window.requestAnimationFrame || !document.fonts?.load) {
      section.dataset.construction = 'final';
      section.dataset.constructionReason = 'unsupported';
      return;
    }
    const frame = section.querySelector('.p27-work-frame');
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    const controller = new AbortController();
    const { signal } = controller;
    let observer;
    let resizeObserver;
    let layer;
    let raf = 0;
    let recovery = 0;
    let navigationTimer = 0;
    let focusTimer = 0;
    let pointerFocusTimer = 0;
    let pointerFocusTarget = null;
    let disposed = false;
    let done = false;
    let started = false;
    let ready = false;
    let pointerEntry = false;
    let navigationInFlight = false;
    let allowNavigationFocus = false;
    let startTime = null;
    let lastY = scrollY;
    let lastTime = performance.now();
    let measuredWidth = 0;
    let measuredHeight = 0;

    function release() {
      cancelAnimationFrame(raf); raf = 0;
      clearTimeout(recovery); clearTimeout(navigationTimer); clearTimeout(focusTimer); clearTimeout(pointerFocusTimer);
      pointerFocusTarget = null;
      layer?.remove(); layer = null;
      observer?.disconnect(); resizeObserver?.disconnect(); controller.abort();
    }
    function finish(reason) {
      if (done || disposed) return;
      done = true;
      section.dataset.construction = 'final';
      section.dataset.constructionReason = reason;
      release();
    }
    function start() {
      if (started || done || disposed || !ready) return;
      const bounds = section.getBoundingClientRect();
      if (reduced.matches || document.hidden) { finish('access'); return; }
      if (!pointerEntry && (section.contains(document.activeElement) || bounds.top < innerHeight * 0.3)) { finish('quick-entry'); return; }
      started = true;
      lastY = scrollY; lastTime = performance.now();
      const compact = innerWidth < 1024;
      // The prepaint cover stays in place until an opaque phase-zero Canvas exists.
      try { layer = createUiConstruction(frame, compact); } catch { finish('preparation-error'); return; }
      if (!layer) { finish('canvas-unavailable'); return; }
      const size = frame.getBoundingClientRect();
      measuredWidth = size.width; measuredHeight = size.height;
      const duration = compact ? 3000 : 4200;
      section.dataset.constructionTrigger = pointerEntry ? 'pointer' : 'scroll';
      section.dataset.constructionDuration = String(duration);
      section.dataset.construction = 'points';
      recovery = window.setTimeout(() => finish('animation-timeout'), duration + 1500);
      function tick(now) {
        if (done || disposed) return;
        if (startTime === null) startTime = now;
        const time = (now - startTime) / duration;
        if (time >= 1) { finish('complete'); return; }
        section.dataset.construction = time < 0.143 ? 'points' : time < 0.333 ? 'geometry' : time < 0.667 ? 'skeleton' : 'materialization';
        try { layer.render(time); } catch { finish('render-error'); return; }
        raf = requestAnimationFrame(tick);
      }
      raf = requestAnimationFrame(tick);
    }
    function scroll() {
      if (!started || done) return;
      const now = performance.now();
      const delta = Math.abs(scrollY - lastY);
      const bounds = section.getBoundingClientRect();
      const header = section.closest('.portfolio-2027').querySelector('header')?.offsetHeight || 64;
      if (bounds.bottom <= header || bounds.top >= innerHeight) finish('offscreen');
      else if (!navigationInFlight && delta > Math.max(400, innerHeight * 0.9) && now - lastTime < 150) finish('fast-scroll');
      lastY = scrollY; lastTime = now;
    }
    function anchor(event) {
      // Native touch focus can arrive after pointerup. Keep only this gesture's
      // exact focus target until click/default activation has finished its task.
      if (pointerFocusTarget) {
        clearTimeout(pointerFocusTimer);
        pointerFocusTimer = window.setTimeout(clearPointerFocus, 0);
      }
      const link = event.target.closest('a[href^="#"]');
      if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      if (link.getAttribute('href') !== '#projects' || event.detail === 0) { finish('keyboard-or-other-anchor'); return; }
      pointerEntry = true;
      navigationInFlight = true;
      allowNavigationFocus = true;
      // Existing navigation focuses the heading synchronously in this same click.
      clearTimeout(focusTimer);
      focusTimer = window.setTimeout(() => { allowNavigationFocus = false; }, 0);
      clearTimeout(navigationTimer);
      navigationTimer = window.setTimeout(() => { navigationInFlight = false; }, 1800);
      // No preventDefault, history update, scroll delay or focus manipulation here.
    }
    function hash() { if (location.hash && !(navigationInFlight && location.hash === '#projects')) finish('hash'); }
    function focus(event) {
      if (allowNavigationFocus && event.target.id === 'projects-title') { allowNavigationFocus = false; return; }
      if (pointerFocusTarget === event.target) { clearPointerFocus(); return; }
      finish('focus');
    }
    function clearPointerFocus() { clearTimeout(pointerFocusTimer); pointerFocusTarget = null; }
    function pointerDown(event) {
      clearPointerFocus();
      if (!event.isPrimary || (event.pointerType === 'mouse' && event.button !== 0)) return;
      pointerFocusTarget = event.target.closest('a, button, [tabindex]');
    }
    function pointerUp() {
      if (!pointerFocusTarget) return;
      // Bounded fallback for gestures that never dispatch click (e.g. long press).
      pointerFocusTimer = window.setTimeout(clearPointerFocus, 500);
    }
    function keyboard() { clearPointerFocus(); navigationInFlight = false; if (started || section.contains(document.activeElement)) finish('keyboard'); }
    function manualInput() { navigationInFlight = false; }
    function resize() { if (started) finish('reflow'); }
    function visibility() { if (document.hidden) finish('hidden'); }
    function preference() { if (reduced.matches) finish('reduced-motion'); }
    try {
      section.dataset.construction = 'waiting';
      section.addEventListener('focusin', focus, { signal });
      section.addEventListener('pointerdown', pointerDown, { signal });
      document.addEventListener('pointerup', pointerUp, { signal });
      document.addEventListener('pointercancel', clearPointerFocus, { signal });
      document.addEventListener('click', anchor, { capture: true, signal });
      document.addEventListener('keydown', keyboard, { capture: true, signal });
      document.addEventListener('visibilitychange', visibility, { signal });
      window.addEventListener('hashchange', hash, { signal });
      window.addEventListener('popstate', hash, { signal });
      window.addEventListener('wheel', manualInput, { passive: true, signal });
      window.addEventListener('touchstart', manualInput, { passive: true, signal });
      window.addEventListener('scroll', scroll, { passive: true, signal });
      window.addEventListener('resize', resize, { signal });
      reduced.addEventListener('change', preference, { signal });
      document.fonts.addEventListener('loading', resize, { signal });
      if (reduced.matches || location.hash || section.contains(document.activeElement)) finish('initial-access');
      else {
        recovery = window.setTimeout(() => finish('preparation-timeout'), 6000);
        Promise.allSettled([
          document.fonts.load('400 19px "DM Sans"'), document.fonts.load('500 15px "DM Sans"'),
          document.fonts.load('400 12px "IBM Plex Mono"'), document.fonts.load('italic 400 64px "Instrument Serif"'),
        ]).then(() => document.fonts.ready).then(() => {
          if (done || disposed) return;
          clearTimeout(recovery);
          ready = true;
          resizeObserver = new ResizeObserver(([entry]) => {
            if (started && (Math.abs(entry.contentRect.width - measuredWidth) > 1 || Math.abs(frame.getBoundingClientRect().height - measuredHeight) > 1)) finish('reflow');
          });
          resizeObserver.observe(frame);
          observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) start();
          }, { rootMargin: '0px 0px -15% 0px', threshold: 0 });
          observer.observe(section);
        }).catch(() => finish('preparation-error'));
      }
    } catch { finish('setup-error'); }
    return () => { disposed = true; release(); };
  }, [sectionRef]);
}
