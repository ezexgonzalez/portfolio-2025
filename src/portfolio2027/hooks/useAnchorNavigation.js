import { useLayoutEffect, useRef, useState } from 'react';
import { destinations } from '../navigation.js';

export function useAnchorNavigation() {
  const headerRef = useRef(null);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const navigationEpoch = useRef(0);

  function remember(id, replace = false, url = window.location.href) {
    const state = window.history.state;
    const next = { ...state, portfolio2027: { ...state?.portfolio2027, destination: id } };
    window.history[replace ? 'replaceState' : 'pushState'](next, '', url);
  }

  function goTo(id, smooth = false) {
    const target = document.getElementById(id);
    if (!target) return;
    const heading = target.matches('h1, h2') ? target : target.querySelector('h1, h2');
    const offset = (headerRef.current?.offsetHeight ?? 64) + 16;
    heading?.focus({ preventScroll: true });
    window.scrollTo({
      top: id === 'hero' ? 0 : Math.max(0, target.getBoundingClientRect().top + window.scrollY - offset),
      behavior: smooth ? 'smooth' : 'instant',
    });
  }

  function onAnchorClick(event) {
    const link = event.target.closest('a[href^="#"]');
    if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey ||
      event.ctrlKey || event.shiftKey || event.altKey) return;
    const id = link.getAttribute('href').slice(1);
    if (!destinations.some((item) => item.id === id)) return;
    event.preventDefault();
    navigationEpoch.current += 1;
    const cleanUrl = window.location.pathname + window.location.search;
    if (window.history.state?.portfolio2027?.destination !== id) remember(id, false, cleanUrl);
    else if (window.location.hash) remember(id, true, cleanUrl);
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    goTo(id, event.detail > 0 && !reduced);
  }

  useLayoutEffect(() => {
    let frame = 0;
    let initialFrame = 0;
    let disposed = false;
    const previousRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';
    const initialEpoch = navigationEpoch.current;
    const hashDestination = () => {
      const id = window.location.hash.slice(1);
      return destinations.some((item) => item.id === id) ? id : null;
    };
    // A new document/refresh is a fresh visit. Only an explicit URL hash opts
    // into deep-link access; the previous document's state is not a reload target.
    const initialDestination = hashDestination() || 'hero';
    remember(initialDestination, true);
    if (initialDestination === 'hero') window.scrollTo({ top: 0, behavior: 'instant' });
    function readScroll() {
      frame = 0;
      const height = headerRef.current?.offsetHeight ?? 64;
      headerRef.current?.closest('.portfolio-2027')?.style.setProperty('--p27-header-height', `${height}px`);
      const line = height + 16;
      let current = 'hero';
      for (const { id } of destinations) {
        if (document.getElementById(id)?.getBoundingClientRect().top <= line + 1) current = id;
      }
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) current = 'contact';
      setActiveSection(current);
      setScrolled(window.scrollY > 1);
    }
    function schedule() {
      if (!frame) frame = window.requestAnimationFrame(readScroll);
    }
    function restoreLocation() {
      navigationEpoch.current += 1;
      const id = hashDestination() || window.history.state?.portfolio2027?.destination || 'hero';
      if (destinations.some((item) => item.id === id)) goTo(id);
      schedule();
    }
    const headerObserver = new ResizeObserver(schedule);
    if (headerRef.current) headerObserver.observe(headerRef.current);
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    window.addEventListener('popstate', restoreLocation);
    window.addEventListener('hashchange', restoreLocation);
    // Reading the mounted layout first triggers the fonts actually used by React.
    // Reading fonts.ready before this layout can resolve before font requests start.
    readScroll();
    Promise.allSettled([
      document.fonts.load('400 19px "DM Sans"'),
      document.fonts.load('500 15px "DM Sans"'),
      document.fonts.load('400 12px "IBM Plex Mono"'),
      document.fonts.load('italic 400 144px "Instrument Serif"'),
    ]).then(() => document.fonts.ready).then(() => {
      if (!disposed && navigationEpoch.current === initialEpoch) {
        initialFrame = requestAnimationFrame(() => {
          if (navigationEpoch.current === initialEpoch) {
            if (initialDestination === 'hero') window.scrollTo({ top: 0, behavior: 'instant' });
            else goTo(initialDestination);
            schedule();
          }
        });
      }
    });
    return () => {
      disposed = true;
      window.history.scrollRestoration = previousRestoration;
      cancelAnimationFrame(frame);
      cancelAnimationFrame(initialFrame);
      headerObserver.disconnect();
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      window.removeEventListener('popstate', restoreLocation);
      window.removeEventListener('hashchange', restoreLocation);
    };
  }, []);

  return { headerRef, activeSection, scrolled, onAnchorClick };
}
