import '../styles/about-story.css';

function Milestone({ year, label, children }) {
  return (
    <div className="p27-story-milestone">
      <p className="p27-story-date p27-mono">
        <time dateTime={year}>{year}</time><span> / {label}</span>
      </p>
      <p className="p27-story-note">{children}</p>
    </div>
  );
}

export default function AboutStory() {
  return (
    <section id="about" className="p27-story p27-target" aria-labelledby="about-title">
      <div className="p27-container">
        <header className="p27-story-heading">
          <div className="p27-story-index p27-mono">
            <p>03 / ABOUT</p><p>Ezequiel Gonzalez</p>
          </div>
          <h2 id="about-title" tabIndex={-1} className="p27-story-title">
            <span>El camino</span>{' '}<span className="p27-serif">hasta acá.</span>
          </h2>
        </header>
        <div className="p27-story-chapter p27-story-origins">
          <p className="p27-story-emphasis">Mi relación con la tecnología empezó con la curiosidad. Antes de pensar en una profesión o en un lenguaje de programación, me gustaba aprender por mi cuenta, explorar herramientas y entender qué había detrás de las cosas que utilizaba.</p>
          <p>Ese interés me llevó a estudiar la Licenciatura en Sistemas en la Universidad Nacional de Lanús y a formarme de manera intensiva en desarrollo web en 2021.</p>
          <Milestone year="2021" label="Primeros pasos">Formación en desarrollo web, fundamentos de programación y primeros proyectos.</Milestone>
        </div>
        <div className="p27-story-chapter p27-story-return">
          <p className="p27-story-reflection p27-serif">Pero mi recorrido no fue una línea recta.</p>
          <p>Durante un tiempo, la programación quedó en segundo plano. Mi experiencia trabajando en el Centro de Monitoreo de la Policía de la Ciudad también me enseñó mucho: a desenvolverme en situaciones exigentes, prestar atención a los detalles, comunicarme con claridad y trabajar en equipo.</p>
          <Milestone year="2025" label="Una nueva etapa">Retomo el desarrollo con mayor claridad, profundizo en Full Stack y comienzo a construir proyectos completos.</Milestone>
          <p>En 2025 decidí retomar el desarrollo web, esta vez con una perspectiva diferente. Ya no quería solamente aprender tecnologías. Quería construir proyectos completos, tomar mis propias decisiones y entender todo el proceso.</p>
        </div>
        <div className="p27-story-chapter p27-story-perspectives">
          <p>Así fui profundizando en el desarrollo Full Stack con proyectos como Task Manager. Más adelante, Eze Web Studio me llevó a involucrarme también con el diseño, la identidad visual y la experiencia de usuario.</p>
          <Milestone year="2026" label="Nuevas perspectivas">Eze Web Studio. El diseño, la experiencia de usuario y las decisiones de producto empiezan a ocupar un lugar central en mi trabajo.</Milestone>
          <p className="p27-story-emphasis">Hoy disfruto trabajar en ese punto donde se encuentran la lógica y el diseño. Me interesa tanto resolver lo que sucede detrás de una aplicación como cuidar la experiencia de quien está del otro lado.</p>
          <p>Sigo aprendiendo, experimentando y desarrollando mi propio criterio. No veo el desarrollo como algo que se termina de aprender, sino como un proceso en el que siempre hay algo nuevo por descubrir.</p>
        </div>
      </div>
    </section>
  );
}
