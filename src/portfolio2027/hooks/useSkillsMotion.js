import { useLayoutEffect } from 'react';

export function useSkillsMotion(sectionRef) {
  useLayoutEffect(() => {
    const section = sectionRef.current;
    const title = section.querySelector('.p27-capabilities-title');
    const entries = section.querySelector('.p27-capabilities-list');
    let observer;
    let titleRecovery = 0;
    let linesRecovery = 0;
    let controller;
    let finished = false;

    function release() {
      clearTimeout(titleRecovery); clearTimeout(linesRecovery);
      observer?.disconnect(); controller?.abort();
    }
    function finish(reason) {
      if (finished) return;
      finished = true;
      section.dataset.skillsTitle = 'final';
      section.dataset.skillsLines = 'final';
      section.dataset.skillsReason = reason;
      release();
    }
    function complete(part) {
      section.dataset[part] = 'final';
      if (part === 'skillsTitle') clearTimeout(titleRecovery);
      else clearTimeout(linesRecovery);
      if (section.dataset.skillsTitle === 'final' && section.dataset.skillsLines === 'final') finish('complete');
    }
    try {
      if (!window.matchMedia || !window.IntersectionObserver || !window.AbortController) {
        finish('unsupported'); return;
      }
      const reduced = matchMedia('(prefers-reduced-motion: reduce)');
      if (reduced.matches || location.hash === '#skills' || section.contains(document.activeElement)) {
        finish('initial-access'); return;
      }
      controller = new AbortController();
      const { signal } = controller;
      section.dataset.skillsTitle = 'waiting';
      section.dataset.skillsLines = 'waiting';
      observer = new IntersectionObserver((changes) => {
        if (finished) return;
        for (const entry of changes) {
          if (!entry.isIntersecting || entry.intersectionRatio < 0.15) continue;
          observer.unobserve(entry.target);
          if (entry.target === title) {
            section.dataset.skillsTitle = 'playing';
            titleRecovery = window.setTimeout(() => finish('animation-timeout'), 2000);
          } else {
            section.dataset.skillsLines = 'playing';
            linesRecovery = window.setTimeout(() => finish('animation-timeout'), 2000);
          }
        }
      }, { threshold: 0.15 });
      observer.observe(title); observer.observe(entries.firstElementChild);
      section.addEventListener('animationend', (event) => {
        if (event.animationName === 'p27-skills-title-in') complete('skillsTitle');
        else if (event.animationName === 'p27-skills-rule-in' && event.target === entries.lastElementChild) complete('skillsLines');
      }, { signal });
      section.addEventListener('focusin', () => finish('focus'), { signal });
      document.addEventListener('click', (event) => {
        if (!event.defaultPrevented && event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey &&
          event.target.closest('a[href="#skills"]')) finish('anchor');
      }, { capture: true, signal });
      window.addEventListener('hashchange', () => { if (location.hash === '#skills') finish('hash'); }, { signal });
      window.addEventListener('resize', () => {
        if (section.dataset.skillsTitle === 'playing' || section.dataset.skillsLines === 'playing') finish('reflow');
      }, { signal });
      document.addEventListener('visibilitychange', () => { if (document.hidden) finish('hidden'); }, { signal });
      reduced.addEventListener('change', () => { if (reduced.matches) finish('reduced-motion'); }, { signal });
    } catch { finish('setup-error'); }
    return () => { finished = true; release(); };
  }, [sectionRef]);
}
