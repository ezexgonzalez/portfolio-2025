import { portfolio2027RootClassName } from '../index.js';
import Hero from '../components/Hero.jsx';
import SelectedWork from '../components/SelectedWork.jsx';
import AboutStory from '../components/AboutStory.jsx';
import SkillsCapabilities from '../components/SkillsCapabilities.jsx';
import ContactClosing from '../components/ContactClosing.jsx';
import Navigation from '../components/Navigation.jsx';
import { useAnchorNavigation } from '../hooks/useAnchorNavigation.js';
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
        <SelectedWork />
        <AboutStory />
        <SkillsCapabilities />
        <ContactClosing />
      </main>
    </div>
  );
}
