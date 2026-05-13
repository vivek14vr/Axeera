"use client";

import { ScrollSection } from "@/components/motion/scroll-section";
import { FeatureCardGrid } from "@/components/sections/shared/feature-card-grid";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { GlassPanel } from "@/components/ui/glass-panel";
import { SectionHeading } from "@/components/ui/section-heading";
import type { DetailPageContent } from "@/lib/constants/subpages";
import { routes } from "@/lib/constants/routes";

type DetailPageSectionProps = {
  content: DetailPageContent;
};

const detailIcons = ["strategy", "growth", "delivery-box"] as const;

export function DetailPageSection({ content }: DetailPageSectionProps) {
  const featureItems = content.highlights.map((highlight, index) => ({
    ...highlight,
    icon: highlight.icon ?? detailIcons[index % detailIcons.length],
  }));

  return (
    <ScrollSection className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />

        <FeatureCardGrid items={featureItems} columns={3} className="mt-12" />

        <GlassPanel interactive className="mt-12 p-6 sm:p-8">
          <p className="text-sm uppercase tracking-[0.18em] text-accent/80">
            Included in delivery
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {content.deliverables.map((deliverable) => (
              <li
                key={deliverable}
                className="glass-surface rounded-2xl px-4 py-3 text-sm leading-7 text-foreground"
              >
                {deliverable}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button href={routes.contact}>Get quote</Button>
          </div>
        </GlassPanel>
      </Container>
    </ScrollSection>
  );
}
