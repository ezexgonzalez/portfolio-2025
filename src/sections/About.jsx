import SectionHeader from "../components/SectionHeader";

const About = () => {
  return (
    <div>
      <SectionHeader
        label="About"
        title="Sobre mí"
        description="Un breve resumen de quién soy, de dónde vengo y hacia dónde quiero llevar mi carrera como desarrollador."
      />

      <div className="space-y-3 text-sm text-muted max-w-2xl">
        <p>
          Soy Ezequiel Gonzalez, desarrollador web enfocado en el stack
          JavaScript. Vengo de trabajar en monitoreo para la policía de la
          ciudad, donde desarrollé disciplina, trabajo en equipo y manejo de
          situaciones bajo presión.
        </p>
        <p>
          En los últimos meses me enfoqué en fortalecer mi base técnica y
          construir proyectos reales: un Task Manager completo, un e-commerce y
          este portfolio, cuidando tanto la arquitectura como los detalles de
          diseño.
        </p>
        <p>
          Mi objetivo es crecer en un equipo donde pueda aportar código de
          calidad, aprender de otros desarrolladores y seguir elevando el nivel
          de los productos en los que trabajo.
        </p>
      </div>
    </div>
  );
};

export default About;
