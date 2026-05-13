"use client";

import { ScrollSection } from "@/components/motion/scroll-section";
import { Container } from "@/components/ui/container";
import { GlassPanel } from "@/components/ui/glass-panel";
import { MediaFrame } from "@/components/ui/media-frame";
import { SectionHeading } from "@/components/ui/section-heading";
import { editorialScenes } from "@/lib/constants/media";
import type { MarketingSectionIntro, MarketingStat } from "@/types/marketing";

type AboutIntroSectionProps = MarketingSectionIntro & {
  stats: readonly MarketingStat[];
};

export function AboutIntroSection({
  eyebrow,
  title,
  description,
  stats,
}: AboutIntroSectionProps) {
  return (
    <ScrollSection className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          align="center"
          titleAs="h1"
          className="max-w-4xl"
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-stretch">
          <MediaFrame
            src={editorialScenes.about.src}
            alt={editorialScenes.about.alt}
            aspect="portrait"
            sizes="(min-width: 1024px) 34vw, 100vw"
            className="lg:min-h-full"
          />
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {stats.map((stat) => (
              <GlassPanel key={stat.label} interactive className="px-5 py-5 text-center">
                <p className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted">{stat.label}</p>
              </GlassPanel>
            ))}
          </div>
        </div>
      </Container>
    </ScrollSection>
  );
}
