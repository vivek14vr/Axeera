"use client";

import { ScrollSection } from "@/components/motion/scroll-section";
import { FeatureCardGrid } from "@/components/sections/shared/feature-card-grid";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { MarketingFeature, MarketingSectionIntro } from "@/types/marketing";

type IconFeatureGridSectionProps = MarketingSectionIntro & {
  items: readonly MarketingFeature[];
  columns?: 2 | 3 | 4;
};

export function IconFeatureGridSection({
  eyebrow,
  title,
  description,
  items,
  columns = 4,
}: IconFeatureGridSectionProps) {
  return (
    <ScrollSection className="py-20 sm:py-24">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />

        <FeatureCardGrid items={items} columns={columns} className="mt-12" />
      </Container>
    </ScrollSection>
  );
}
