import { useRef } from 'react';
import { useSkillsMotion } from '../hooks/useSkillsMotion.js';
import '../styles/skills-capabilities.css';

const capabilities = [
  {
    number: '01', title: 'INTERFACES WEB',
    description: 'Construcción de interfaces y experiencias web, con atención a los componentes, el diseño responsive y la experiencia de usuario.',
    technologies: 'React · JavaScript · TypeScript · Tailwind\u00a0CSS · Vite',
  },
  {
    number: '02', title: 'BACKEND & DATA',
    description: 'Desarrollo de aplicaciones Full Stack, integración frontend/backend, APIs, autenticación y persistencia de datos.',
    technologies: 'Node.js · Express · MongoDB · REST\u00a0APIs · JWT',
  },
  {
    number: '03', title: 'TOOLS & WORKFLOW',
    description: 'Herramientas para desarrollar, organizar, probar e iterar proyectos.',
    technologies: 'Git · GitHub · Postman · Figma',
  },
];

export default function SkillsCapabilities() {
  const sectionRef = useRef(null);
  useSkillsMotion(sectionRef);
  return (
    <section ref={sectionRef} id="skills" className="p27-capabilities p27-target" aria-labelledby="skills-title">
      <div className="p27-container">
        <p className="p27-capabilities-index p27-mono">04 / CAPABILITIES</p>
        <div className="p27-capabilities-main">
          <h2 id="skills-title" tabIndex={-1} className="p27-capabilities-title">
            <span>Tecnologías</span>{' '}<span className="p27-serif">y capacidades.</span>
          </h2>
          <ol className="p27-capabilities-list" role="list">
            {capabilities.map(({ number, title, description, technologies }) => (
              <li key={number} className="p27-capability">
                <div className="p27-capability-heading">
                  <span className="p27-capability-number p27-mono">{number}</span>
                  <h3>{title}</h3>
                </div>
                <p className="p27-capability-description">{description}</p>
                <p className="p27-capability-technologies">{technologies}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
