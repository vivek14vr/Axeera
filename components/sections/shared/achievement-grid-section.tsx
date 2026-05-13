"use client";

import { ScrollSection } from "@/components/motion/scroll-section";
import { FeatureCardGrid } from "@/components/sections/shared/feature-card-grid";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { MarketingFeature, MarketingSectionIntro } from "@/types/marketing";

type AchievementGridSectionProps = MarketingSectionIntro & {
  items: readonly MarketingFeature[];
};

export function AchievementGridSection({
  eyebrow,
  title,
  description,
  items,
}: AchievementGridSectionProps) {
  return (
    <ScrollSection className="py-20 sm:py-24">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />

        <FeatureCardGrid
          items={items}
          columns={2}
          tone="spotlight"
          className="mt-12"
        />
      </Container>
    </ScrollSection>
  );
}
