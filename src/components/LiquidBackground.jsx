const LiquidBackground = ({ children }) => {
  return (
    <div className="relative w-full">
      {/* CAPA DE FONDO FIJA (No se mueve con el scroll) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        
        {/* MODO OSCURO */}
        <div className="hidden dark:block absolute inset-0 bg-[#010409]">
          <div 
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage: `radial-gradient(1px 1px at 25px 35px, #fff, rgba(0,0,0,0)), radial-gradient(1.2px 1.2px at 50px 80px, #fff, rgba(0,0,0,0))`,
              backgroundSize: '180px 180px',
            }}
          />
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_20%_0%,rgba(79,70,229,0.05),transparent_70%)]" />
        </div>

        {/* MODO CLARO */}
        <div className="dark:hidden absolute inset-0 bg-[#f5f5f7]">
          <div className="absolute -top-[10%] -right-[10%] w-[60%] h-[50%] rounded-full bg-indigo-100/40 blur-[100px]" />
          <div className="absolute bottom-[-10%] -left-[10%] w-[60%] h-[50%] rounded-full bg-blue-50/50 blur-[100px]" />
        </div>

        {/* RUIDO TEXTURIZADO */}
        <div 
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
          style={{ backgroundImage: `url("data:image/svg+xml,...")` }} // El SVG de ruido que ya tenías
        />
      </div>

      {/* CONTENIDO REAL */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
};

export default LiquidBackground;







