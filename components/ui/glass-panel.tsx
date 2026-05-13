import type { ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

type GlassPanelProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "section";
  interactive?: boolean;
};

export function GlassPanel({
  children,
  className,
  as: Component = "div",
  interactive = false,
}: GlassPanelProps) {
  return (
    <Component
      className={cn(
        "glass-surface rounded-3xl shadow-glass",
        interactive && "interactive-surface",
        className,
      )}
    >
      {children}
    </Component>
  );
}
