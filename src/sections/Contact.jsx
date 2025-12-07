import SectionHeader from "../components/SectionHeader";

const Contact = () => {
  return (
    <div className="max-w-2xl">
      <SectionHeader
        label="Contact"
        title="Hablemos"
        description="Si te interesa mi perfil o querés ver cómo podríamos trabajar juntos, podés contactarme por cualquiera de estos canales."
      />

      <div className="flex flex-wrap gap-3 mt-4">
        <a
          href="https://www.linkedin.com/in/tu-usuario"
          target="_blank"
          rel="noreferrer"
          className="
            inline-flex items-center justify-center
            rounded-full px-5 py-2.5
            text-sm font-medium
            bg-accent text-white
            shadow-[0_18px_40px_var(--color-accent-soft)]
            hover:translate-y-[1px]
            hover:shadow-[0_12px_30px_var(--color-accent-soft)]
            transition-shadow
          "
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/tu-usuario"
          target="_blank"
          rel="noreferrer"
          className="
            inline-flex items-center justify-center
            rounded-full px-5 py-2.5
            text-sm font-medium
            border border-white/15
            bg-white/5
            text-muted
            hover:bg-white/10 hover:text-white
            transition-colors
          "
        >
          GitHub
        </a>

        <a
          href="mailto:tu-email@ejemplo.com"
          className="
            inline-flex items-center justify-center
            rounded-full px-5 py-2.5
            text-sm font-medium
            border border-white/10
            bg-white/3
            text-muted
            hover:bg-white/8 hover:text-white
            transition-colors
          "
        >
          Enviarme un email
        </a>
      </div>

      <p className="mt-4 text-[11px] text-muted">
        Respondo especialmente a propuestas relacionadas con desarrollo web
        (React, Node.js, MERN) y oportunidades para seguir creciendo en IT.
      </p>
    </div>
  );
};

export default Contact;
