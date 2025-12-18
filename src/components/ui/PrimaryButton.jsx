const PrimaryButton = ({
  as: Component = "button",
  className = "",
  children,
  ...props
}) => {
  return (
    <Component
      className={`
        group relative inline-flex items-center justify-center
        rounded-full px-8 py-3
        text-sm font-semibold tracking-wide
        overflow-hidden
        transition-all duration-300

        /* LIGHT MODE (nuevo): vidrio claro + texto suave */
        text-slate-700
        bg-white/60
        backdrop-blur-md
        border border-slate-200/70
        shadow-[0_12px_35px_-22px_rgba(15,23,42,0.35),inset_0_1px_1px_rgba(255,255,255,0.7)]
        hover:bg-white/80
        hover:border-slate-300/70
        hover:shadow-[0_18px_55px_-26px_rgba(15,23,42,0.45),inset_0_1px_1px_rgba(255,255,255,0.85)]
        hover:-translate-y-0.5

        /* DARK MODE (tu diseño original, intacto) */
        dark:text-white
        dark:bg-white/[0.08]
        dark:border-white/10
        dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]
        dark:hover:bg-white/[0.15]
        dark:hover:border-white/30
        dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.15),inset_0_1px_1px_rgba(255,255,255,0.3)]

        ${className}
      `}
      {...props}
    >
      {/* DESTELLO LÍQUIDO (sweep) */}
      <div
        className="
          absolute inset-0
          translate-x-[-100%] group-hover:translate-x-[100%]
          bg-gradient-to-r from-transparent via-black/10 to-transparent
          dark:via-white/20
          transition-transform duration-700 ease-in-out
          pointer-events-none
        "
      />

      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </Component>
  );
};

export default PrimaryButton;
