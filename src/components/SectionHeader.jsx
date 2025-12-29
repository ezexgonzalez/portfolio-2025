const SectionHeader = ({ label, title, description }) => (
  <header className="mb-8 space-y-3">
    {label && (
      <p
        className="
          text-[11px] font-medium uppercase tracking-[0.28em]
          text-slate-500 dark:text-muted
        "
      >
        {label}
      </p>
    )}

    <h2 className="text-2xl sm:text-3xl font-semibold text-slate-800 dark:text-white">
      {title}
    </h2>

    {description && (
      <p className="text-sm text-slate-600 dark:text-muted max-w-xl">
        {description}
      </p>
    )}
  </header>
);

export default SectionHeader;
