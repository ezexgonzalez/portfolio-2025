import { useEffect, useRef, useState } from 'react';
import { destinations } from '../navigation.js';

export default function Navigation({ headerRef, activeSection, scrolled }) {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(() => window.innerWidth < 832);
  const buttonRef = useRef(null);
  const measureRef = useRef(null);
  const rowRef = useRef(null);

  useEffect(() => {
    let disposed = false;
    function measure() {
      const row = rowRef.current;
      const specimen = measureRef.current;
      if (!row || !specimen) return;
      // Includes 96px breathing room + 60px safety, not compressed link text.
      const required = specimen.scrollWidth;
      const next = window.innerWidth < 832 || row.clientWidth < required;
      setCompact(next);
      if (!next) setOpen(false);
    }
    const observer = new ResizeObserver(measure);
    observer.observe(rowRef.current);
    measure();
    document.fonts.ready.then(() => { if (!disposed) measure(); });
    return () => { disposed = true; observer.disconnect(); };
  }, []);

  useEffect(() => {
    if (!open) return;
    function onPointerDown(event) {
      if (!headerRef.current?.contains(event.target)) setOpen(false);
    }
    function onKeyDown(event) {
      if (event.key === 'Escape') {
        event.preventDefault();
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open, headerRef]);

  function item({ id, label }, index, mobile = false) {
    return (
      <a key={id} href={`#${id}`} aria-current={activeSection === id ? 'location' : undefined}
        onClick={() => setOpen(false)}>
        {mobile && <span className="p27-nav-index p27-mono" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>}
        <span>{label}</span>
      </a>
    );
  }

  return (
    <header ref={headerRef} className="p27-header" data-compact={compact}
      data-scrolled={scrolled || open}
      onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false); }}>
      <div className="p27-nav-row p27-container" ref={rowRef}>
        <a className="p27-nav-identity p27-mono" href="#hero"
          aria-current={activeSection === 'hero' ? 'location' : undefined}
          onClick={() => setOpen(false)}>Ezequiel Gonzalez</a>
        <nav className="p27-nav-desktop" aria-label="Principal" hidden={compact}>
          {destinations.slice(1).map((entry, index) => item(entry, index + 1))}
        </nav>
        <button ref={buttonRef} type="button" className="p27-nav-toggle" hidden={!compact}
          aria-expanded={open} aria-controls="p27-mobile-navigation"
          onClick={() => setOpen((value) => !value)}>
          {open ? 'Cerrar' : 'Menú'} <span aria-hidden="true">{open ? '−' : '+'}</span>
        </button>
        <div ref={measureRef} className="p27-nav-measure" aria-hidden="true" inert>
          <span className="p27-nav-identity p27-mono">Ezequiel Gonzalez</span>
          <div className="p27-nav-desktop">{destinations.slice(1).map(({ id, label }) => <span key={id}>{label}</span>)}</div>
        </div>
      </div>
      <div className="p27-mobile-disclosure" data-open={compact && open}
        aria-hidden={!compact || !open} inert={!compact || !open}>
        <div className="p27-mobile-clip">
          <nav id="p27-mobile-navigation" className="p27-nav-mobile" aria-label="Principal compacta">
            {destinations.map((entry, index) => item(entry, index, true))}
          </nav>
        </div>
      </div>
    </header>
  );
}
