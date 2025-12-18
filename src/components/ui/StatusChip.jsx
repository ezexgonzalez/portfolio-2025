// Chip de estado con puntito + glass
const StatusChip = ({ children, className = "", ...props }) => {
  return (
    <div
      className={`
        inline-flex items-center gap-2
        rounded-full px-4 py-1.5
        text-[11px] font-medium
        border border-white/10
        bg-white/5 dark:bg-white/5
        text-muted
        backdrop-blur-sm
        ${className}
      `}
      {...props}
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 blur-[2px]" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
      </span>
      <span>{children}</span>
    </div>
  );
};

export default StatusChip;
