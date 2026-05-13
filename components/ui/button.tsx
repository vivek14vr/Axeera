import type { ReactNode } from "react";

import { routes } from "@/lib/constants/routes";
import { cn } from "@/lib/utils/cn";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
};

const variantStyles = {
  primary:
    "interactive-button liquid-glass-accent font-semibold shadow-accent hover:border-accent/40 hover:shadow-[0_16px_48px_color-mix(in_srgb,var(--accent)_28%,transparent)]",
  secondary:
    "interactive-button glass-surface font-medium text-foreground hover:border-accent/30 hover:shadow-brand",
  ghost:
    "interactive-button glass-surface border-transparent font-medium text-foreground/80 hover:border-accent/20 hover:text-foreground",
};

export function Button({
  children,
  className,
  href = routes.contact,
  variant = "primary",
}: ButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        "relative z-[1] inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium",
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </a>
  );
}
