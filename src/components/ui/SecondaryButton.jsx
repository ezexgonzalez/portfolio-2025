const SecondaryButton = ({
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
        text-sm font-medium
        overflow-hidden
        transition-all duration-300 ease-out

        /* LIGHT MODE (nuevo): sutil + legible */
        text-slate-600
        bg-white/35
        backdrop-blur-sm
        border border-slate-200/70
        hover:bg-white/55
        hover:border-slate-300/70
        hover:text-slate-700
        hover:-translate-y-0.5

        /* DARK MODE (tu diseño original, intacto) */
        dark:text-slate-300
        dark:bg-white/[0.03]
        dark:border-white/10
        dark:hover:bg-white/[0.08]
        dark:hover:border-white/20
        dark:hover:text-white

        /* ACTIVE */
        active:translate-y-[1px]

        ${className}
      `}
      {...props}
    >
      {/* REFLEJO SUTIL EN HOVER */}
      <span className="absolute inset-0 bg-gradient-to-tr from-transparent via-black/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 dark:via-white/[0.03]" />

      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </Component>
  );
};

export default SecondaryButton;

