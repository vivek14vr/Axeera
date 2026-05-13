"use client";

import { FeatureIcon } from "@/components/icons/feature-icon";
import { ScrollSection } from "@/components/motion/scroll-section";
import { ScrollStaggerGroup, ScrollStaggerItem } from "@/components/motion/scroll-stagger";
import { Container } from "@/components/ui/container";
import { GlassPanel } from "@/components/ui/glass-panel";
import type { MarketingStat } from "@/types/marketing";

type GradientStatSectionProps = {
  stats: readonly MarketingStat[];
};

export function GradientStatSection({ stats }: GradientStatSectionProps) {
  return (
    <ScrollSection className="py-16 sm:py-20">
      <Container>
        <GlassPanel interactive className="p-5 sm:p-8">
          <ScrollStaggerGroup className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <ScrollStaggerItem key={stat.label}>
                <div className="glass-surface rounded-2xl px-5 py-6 text-center">
                  <div className="mx-auto inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-accent">
                    <FeatureIcon name={stat.icon ?? "spark"} className="h-5 w-5" />
                  </div>
                  <p className="mt-4 font-display text-3xl font-semibold text-foreground sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted">{stat.label}</p>
                </div>
              </ScrollStaggerItem>
            ))}
          </ScrollStaggerGroup>
        </GlassPanel>
      </Container>
    </ScrollSection>
  );
}
