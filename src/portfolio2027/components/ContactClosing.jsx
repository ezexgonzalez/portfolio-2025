import '../styles/contact-closing.css';

export default function ContactClosing() {
  const year = new Date().getFullYear();

  return (
    <section id="contact" className="p27-contact p27-target" aria-labelledby="contact-title">
      <div className="p27-container">
        <p className="p27-contact-index p27-mono">05 / CONTACT</p>
        <h2 id="contact-title" className="p27-contact-title p27-serif" tabIndex={-1}>Hablemos.</h2>
        <div className="p27-contact-content">
          <div className="p27-contact-primary">
            <p className="p27-contact-label p27-mono">EMAIL</p>
            <a className="p27-contact-email" href="mailto:ezexgonzalez@outlook.com">ezexgonzalez@outlook.com</a>
          </div>
          <p className="p27-contact-message">Si tenés una propuesta, una oportunidad o una idea para compartir, me gustaría conocerla.</p>
        </div>
        <div className="p27-contact-links">
          <a href="https://www.linkedin.com/in/ezexgonzalez/" target="_blank" rel="noopener noreferrer">
            <span className="p27-contact-link-label">LinkedIn</span><span aria-hidden="true">↗</span>
          </a>
          <a href="https://github.com/ezexgonzalez" target="_blank" rel="noopener noreferrer">
            <span className="p27-contact-link-label">GitHub</span><span aria-hidden="true">↗</span>
          </a>
          <a href="/cv-ezequiel-gonzalez.pdf" download="cv-ezequiel-gonzalez.pdf">
            <span className="p27-contact-link-label">Descargar CV</span><span aria-hidden="true">↓</span>
          </a>
        </div>
        <footer className="p27-contact-footer p27-mono">
          <p>© {year} Ezequiel Gonzalez</p>
        </footer>
      </div>
    </section>
  );
}
