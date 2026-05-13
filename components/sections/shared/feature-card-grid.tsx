"use client";

import { ScrollStaggerGroup, ScrollStaggerItem } from "@/components/motion/scroll-stagger";
import { FeatureCard } from "@/components/ui/feature-card";
import type { MarketingFeature } from "@/types/marketing";
import { cn } from "@/lib/utils/cn";

type FeatureCardGridProps = {
  items: readonly MarketingFeature[];
  columns?: 2 | 3 | 4;
  align?: "left" | "center";
  tone?: "default" | "spotlight";
  className?: string;
};

export function FeatureCardGrid({
  items,
  columns = 3,
  align = "left",
  tone = "default",
  className,
}: FeatureCardGridProps) {
  const gridClass =
    columns === 2
      ? "sm:grid-cols-2"
      : columns === 3
        ? "sm:grid-cols-2 lg:grid-cols-3"
        : "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";

  return (
    <ScrollStaggerGroup className={cn("grid gap-5", gridClass, className)}>
      {items.map((item) => (
        <ScrollStaggerItem key={item.title}>
          <FeatureCard
            title={item.title}
            description={item.description}
            icon={item.icon}
            align={align}
            tone={tone}
          />
        </ScrollStaggerItem>
      ))}
    </ScrollStaggerGroup>
  );
}
