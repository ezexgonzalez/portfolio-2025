const Logo = () => {
  return (
    <div 
      className="
        relative flex items-center justify-center
        w-8 h-8 rounded-full
        transition-colors duration-300
        group-hover:bg-white/5
      "
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="
          transition-all duration-300
          text-slate-400 dark:text-slate-300 
          group-hover:text-white group-hover:scale-105
          group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]
        "
      >
        {/* LA "E" LÍQUIDA Y SUTIL
           - stroke-width="2.5": Mismo grosor que los íconos de sistema.
           - stroke-linecap="round": Bordes suaves como agua.
           - fill="currentColor" + fill-opacity: Relleno muy suave.
        */}
        <path
          d="M18 5H8C6.34315 5 5 6.34315 5 8V16C5 17.6569 6.34315 19 8 19H18M5 12H14"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="fill-white/5" 
        />
      </svg>
    </div>
  );
};

export default Logo;