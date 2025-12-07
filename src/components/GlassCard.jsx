// src/components/GlassCard.jsx
const GlassCard = ({ className = "", children }) => {
  return (
    <div
      className={`
        relative overflow-hidden
        rounded-[32px]
        border border-white/10
        /* LIGHT: card blanca translúcida */
        bg-white/80
        /* DARK: card oscura pero más transparente */
        dark:bg-[rgba(7,16,28,0.42)]
        backdrop-blur-[32px]
        shadow-[0_40px_140px_rgba(0,0,0,0.9)]
        ${className}
      `}
    >
      {/* highlight suave arriba izquierda */}
      <div
        className="
          pointer-events-none
          absolute -top-24 -left-24
          h-64 w-64
          rounded-full
          bg-[radial-gradient(circle,_rgba(255,255,255,0.16),transparent_70%)]
          opacity-75
          dark:opacity-70
        "
      />

      {/* IMPORTANTE: sacamos el overlay que cubría toda la card */}
      {/* (ese linear-gradient con opacity alta hacía de "niebla" constante) */}

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GlassCard;

