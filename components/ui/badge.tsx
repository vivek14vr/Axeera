import { cn } from "@/lib/utils/cn";

type BadgeProps = {
  children: string;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "glass-surface inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent transition duration-300 hover:border-accent/35 hover:shadow-brand",
        className,
      )}
    >
      {children}
    </span>
  );
}
