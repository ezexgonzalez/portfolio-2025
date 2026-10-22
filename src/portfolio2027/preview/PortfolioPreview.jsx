import { portfolio2027RootClassName } from '../index.js';
import Hero from '../components/Hero.jsx';
import Navigation from '../components/Navigation.jsx';
import { useAnchorNavigation } from '../hooks/useAnchorNavigation.js';
import { destinations } from '../navigation.js';
import '../styles/experience.css';
import './preview.css';

export default function PortfolioPreview() {
  const { headerRef, activeSection, scrolled, onAnchorClick } = useAnchorNavigation();

  return (
    <div className={portfolio2027RootClassName} onClick={onAnchorClick}>
      <a className="p27-skip" href="#hero">Saltar al contenido</a>
      <Navigation headerRef={headerRef} activeSection={activeSection} scrolled={scrolled} />
      <main>
        <Hero />
        {/* Development-only anchor targets. Not the future section designs. */}
        {destinations.slice(1).map(({ id, label }) => (
          <section key={id} className="p27-preview-target p27-container" aria-labelledby={id}>
            <h2 className="p27-target" id={id} tabIndex={-1}>{label}</h2>
            <p>Placeholder técnico temporal · sección todavía no implementada.</p>
          </section>
        ))}
      </main>
    </div>
  );
}
