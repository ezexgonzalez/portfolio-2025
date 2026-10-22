import AmbientAscii from './AmbientAscii.jsx';

export default function Hero() {
  return (
    <section id="hero" className="p27-hero p27-target" aria-labelledby="hero-title">
      <div className="p27-hero-frame p27-container">
        <AmbientAscii />
        <div className="p27-hero-main">
          <div className="p27-hero-content">
            <p className="p27-hero-role p27-mono">Full Stack Developer · Buenos Aires, Argentina</p>
            <h1 className="p27-identity" id="hero-title" tabIndex={-1}>
              <span className="p27-first-name">Ezequiel</span>{' '}
              <span className="p27-last-name p27-serif">Gonzalez</span>
            </h1>
            <p className="p27-hero-description">Desarrollo aplicaciones web de principio a fin, cuidando tanto la lógica que las sostiene como la experiencia de quienes las utilizan.</p>
            <div className="p27-hero-actions">
              <a className="p27-primary-action" href="#projects">Explorar proyectos <span aria-hidden="true">↗</span></a>
              <a className="p27-secondary-action" href="#about">Mi historia <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </div>
        <div className="p27-hero-closing">
          <p className="p27-hero-quote p27-serif">Observar, cuestionar, entender.</p>
          <p className="p27-hero-support">Tres cosas que forman parte de mi manera de pensar y que también definen cómo construyo.</p>
        </div>
      </div>
    </section>
  );
}
