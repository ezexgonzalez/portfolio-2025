import { useRef } from 'react';
import { useUiConstruction } from '../hooks/useUiConstruction.js';
import '../styles/selected-work.css';

const projects = [
  {
    category: 'DISEÑO Y DESARROLLO WEB', name: 'Eze Web Studio',
    description: 'Estudio web independiente de landing pages para negocios. Integra identidad de marca, diseño UI/UX y desarrollo frontend.',
    classification: 'PROYECTO PROPIO', capabilities: 'Identidad visual · UI/UX · Frontend',
    technologies: 'React · Vite · Tailwind CSS',
    visit: 'https://ezewebstudio.com.ar/', source: 'https://github.com/ezexgonzalez/eze-web-studio-V2',
  },
  {
    category: 'FULL STACK DEVELOPMENT', name: 'Task Manager',
    description: 'Aplicación MERN para organizar tareas, con autenticación JWT, operaciones CRUD y persistencia de datos.',
    classification: 'APLICACIÓN MERN', capabilities: 'APIs · Autenticación · Persistencia',
    technologies: 'React · Node.js · Express · MongoDB · Tailwind CSS',
    visit: 'https://mern-task-manager-iota-teal.vercel.app/', source: 'https://github.com/ezexgonzalez/mern-task-manager',
  },
];

export default function SelectedWork() {
  const sectionRef = useRef(null);
  useUiConstruction(sectionRef);

  return (
    <section ref={sectionRef} data-construction="armed" id="projects" className="p27-work p27-target" aria-labelledby="projects-title">
      <div className="p27-work-frame p27-container">
        <div className="p27-work-boundary" data-build-rule="horizontal" />
        <header className="p27-work-heading">
          <div className="p27-work-index p27-mono">
            <p>02 / SELECTED WORK</p><p>02 PROYECTOS</p>
          </div>
          <h2 id="projects-title" className="p27-work-title" tabIndex={-1}>
            <span>Proyectos</span>{' '}<span className="p27-serif">seleccionados</span>
          </h2>
        </header>
        <div className="p27-work-grid">
          <div className="p27-work-grid-top" data-build-rule="horizontal" />
          <div className="p27-work-divider" data-build-rule="vertical" />
          {projects.map((project, index) => (
            <article key={project.name} className="p27-project" aria-labelledby={`project-${index + 1}-title`} data-build-box>
              <div className="p27-project-category p27-mono">
                <span>{String(index + 1).padStart(2, '0')}</span><p>{project.category}</p>
              </div>
              <h3 id={`project-${index + 1}-title`}>{project.name}</h3>
              <p className="p27-project-description">{project.description}</p>
              <p className="p27-project-classification p27-mono">{project.classification}</p>
              <p className="p27-project-capabilities">{project.capabilities}</p>
              <p className="p27-project-technologies p27-mono">{project.technologies}</p>
              <div className="p27-project-actions">
                <a href={project.visit} aria-label={`Visitar proyecto: ${project.name}`} data-build-box>Visitar proyecto <span aria-hidden="true">↗</span></a>
                <a href={project.source} aria-label={`Código fuente: ${project.name}`} data-build-box>Código fuente <span aria-hidden="true">↗</span></a>
              </div>
            </article>
          ))}
          <div className="p27-work-grid-bottom" data-build-rule="horizontal" />
        </div>
        <div className="p27-work-rail p27-work-rail-start" data-build-rule="vertical" />
        <div className="p27-work-rail p27-work-rail-end" data-build-rule="vertical" />
      </div>
    </section>
  );
}
