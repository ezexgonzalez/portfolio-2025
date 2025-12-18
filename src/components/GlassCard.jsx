const GlassCard = ({ className = "", children }) => {
  return (
    <div
      className={`
        relative
        rounded-[var(--radius-card)]
        
        /* LIGHT MODE: Bordes y Fondos definidos para que se vea */
        border border-black/[0.08] 
        bg-white/60 
        shadow-[0_8px_30px_rgba(0,0,0,0.04)]
        
        /* DARK MODE: Tu configuración original */
        dark:border-white/10
        dark:bg-slate-900/40
        dark:shadow-[0_30px_100px_-15px_rgba(0,0,0,0.8)]
        
        backdrop-blur-2xl
        overflow-hidden
        transition-all duration-300
        ${className}
      `}
    >
      <style>{`
        /* Animación del recorrido */
        @keyframes cometSweepFull {
          0% { transform: translateX(-150%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(450%); opacity: 0; }
        }
        .animate-comet-full {
          animation: cometSweepFull 7s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;
        }

        /* --- CONFIGURACIÓN DE SOMBRAS DEL COMETA --- */

        /* 1. LIGHT MODE: Glow Azul/Índigo (Para que resalte sobre blanco) */
        .comet-shadow {
          background-color: #6366f1; /* Indigo core */
          box-shadow: 
            0 0 10px 3px rgba(99, 102, 241, 0.8),   /* Indigo fuerte */
            0 0 20px 8px rgba(56, 189, 248, 0.6),   /* Sky blue */
            0 0 40px 15px rgba(56, 189, 248, 0.3);  /* Halo suave */
        }

        /* 2. DARK MODE: Tu Glow Blanco Original (INTACTO) */
        .dark .comet-shadow {
          background-color: white;
          box-shadow: 
            0 0 10px 3px white,
            0 0 20px 8px rgba(255,255,255,0.7),
            0 0 40px 15px rgba(180,220,255,0.4),
            0 0 70px 25px rgba(100,200,255,0.2);
        }
      `}</style>

      {/* 2. Glow principal interno (Ajustado blend para Light Mode) */}
      <div
        className="
          pointer-events-none absolute inset-0
          opacity-30 dark:opacity-45
          /* En Light usamos 'normal' para que se vea el color, en Dark 'screen' */
          mix-blend-normal dark:mix-blend-screen
          bg-[radial-gradient(circle_at_0%_0%,rgba(99,102,241,0.15),transparent_60%),radial-gradient(circle_at_100%_0%,rgba(56,189,248,0.15),transparent_65%)]
          dark:bg-[radial-gradient(circle_at_0%_0%,rgba(148,163,255,0.4),transparent_60%),radial-gradient(circle_at_100%_0%,rgba(56,189,248,0.3),transparent_65%)]
        "
      />

      {/* 3. EFECTO COMETA SUPER BRILLANTE */}
      <div className="absolute bottom-0 left-0 right-0 h-[4px] overflow-hidden pointer-events-none flex items-end">
        <div className="animate-comet-full absolute bottom-0 w-[250px] h-[2px] flex items-center justify-end">
          
          {/* LA ESTELA (Trail) */}
          <div 
            className="w-full h-full opacity-90 mix-blend-normal dark:mix-blend-screen"
            style={{
              background: `linear-gradient(90deg, 
                transparent 0%, 
                rgba(255, 0, 255, 0) 20%, 
                rgba(99, 102, 241, 0.4) 40%, /* Indigo en light */
                rgba(56, 189, 248, 0.8) 60%, /* Sky Blue fuerte */
                rgba(255, 255, 255, 1) 100%
              )`,
              filter: 'blur(1px)'
            }}
          />

          {/* LA BOLITA DE LUZ (Usa la clase CSS definida arriba) */}
          <div 
            className="
              absolute right-[-2px] w-[6px] h-[6px] rounded-full 
              mix-blend-normal dark:mix-blend-plus-lighter
              comet-shadow
            "
            style={{
              transform: 'translateY(1px)'
            }}
          />
        </div>
      </div>

      {/* 4. Reflejo estático inferior */}
      <div
        className="
          pointer-events-none absolute left-0 right-0 bottom-0
          h-[1px]
          bg-gradient-to-r from-transparent via-indigo-500/20 dark:via-white/10 to-transparent
        "
      />

      {/* 5. Contenido */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GlassCard;


