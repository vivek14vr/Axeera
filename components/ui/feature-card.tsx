import type { ReactNode } from "react";

import { FeatureIcon } from "@/components/icons/feature-icon";
import { GlassPanel } from "@/components/ui/glass-panel";
import { cn } from "@/lib/utils/cn";

type FeatureCardProps = {
  title: string;
  description: string;
  icon?: string;
  align?: "left" | "center";
  tone?: "default" | "spotlight";
  iconNode?: ReactNode;
  className?: string;
};

export function FeatureCard({
  title,
  description,
  icon,
  align = "left",
  tone = "default",
  iconNode,
  className,
}: FeatureCardProps) {
  return (
    <GlassPanel
      interactive
      className={cn(
        "h-full p-6 sm:p-7",
        tone === "spotlight" && "glass-surface-strong",
        align === "center" && "text-center",
        className,
      )}
    >
      <div
        className={cn(
          "inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-accent",
          align === "center" && "mx-auto",
        )}
      >
        {iconNode ?? <FeatureIcon name={icon ?? "spark"} className="h-5 w-5" />}
      </div>
      <h3
        className={cn(
          "font-display font-semibold text-foreground",
          tone === "spotlight" ? "mt-6 text-2xl" : "mt-5 text-xl",
        )}
      >
        {title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-muted">{description}</p>
    </GlassPanel>
  );
}
