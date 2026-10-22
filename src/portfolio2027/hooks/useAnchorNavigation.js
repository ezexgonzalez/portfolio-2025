import { useEffect, useRef, useState } from 'react';
import { destinations } from '../navigation.js';

export function useAnchorNavigation() {
  const headerRef = useRef(null);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

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
    if (window.location.hash !== `#${id}`) window.history.pushState(null, '', `#${id}`);
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    goTo(id, event.detail > 0 && !reduced);
  }

  useEffect(() => {
    let frame = 0;
    let initialFrame = 0;
    let disposed = false;
    const previousRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';
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
    function restoreHash() {
      const id = window.location.hash.slice(1);
      if (destinations.some((item) => item.id === id)) goTo(id);
      else if (!id) window.scrollTo({ top: 0, behavior: 'instant' });
      schedule();
    }
    const headerObserver = new ResizeObserver(schedule);
    if (headerRef.current) headerObserver.observe(headerRef.current);
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    window.addEventListener('popstate', restoreHash);
    window.addEventListener('hashchange', restoreHash);
    // Reading the mounted layout first triggers the fonts actually used by React.
    // Reading fonts.ready before this layout can resolve before font requests start.
    readScroll();
    Promise.allSettled([
      document.fonts.load('400 19px "DM Sans"'),
      document.fonts.load('500 15px "DM Sans"'),
      document.fonts.load('400 12px "IBM Plex Mono"'),
      document.fonts.load('italic 400 144px "Instrument Serif"'),
    ]).then(() => document.fonts.ready).then(() => {
      if (!disposed) initialFrame = requestAnimationFrame(restoreHash);
    });
    return () => {
      disposed = true;
      window.history.scrollRestoration = previousRestoration;
      cancelAnimationFrame(frame);
      cancelAnimationFrame(initialFrame);
      headerObserver.disconnect();
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      window.removeEventListener('popstate', restoreHash);
      window.removeEventListener('hashchange', restoreHash);
    };
  }, []);

  return { headerRef, activeSection, scrolled, onAnchorClick };
}
