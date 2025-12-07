// src/components/LiquidBackground.jsx
const LiquidBackground = ({ className = "", children }) => {
  return (
    <section
      className={`
        relative overflow-hidden
        min-h-screen
        bg-bg
        ${className}
      `}
    >
      {/* LIGHT: igual que antes */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          bg-[radial-gradient(circle_at_top,_#e5e7eb,_#f5f5f7_65%)]
          dark:hidden
        "
      />

      {/* DARK: imagen + overlay MUCHO más suave */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          hidden dark:block
        "
      >
        <div
          className="absolute inset-0 bg-cover bg-no-repeat opacity-95"
          style={{
            backgroundImage: "url('/hero-liquid-dark.png')",
            // movemos la imagen un poco hacia arriba
            backgroundPosition: "center -100px",
          }}
        />

        {/* overlay suave, NO tan fuerte */}
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.18),transparent_75%)]
          "
        />
      </div>

      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
};

export default LiquidBackground;






