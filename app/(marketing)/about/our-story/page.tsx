import type { Metadata } from "next";

import { MarketingPageJsonLd } from "@/components/seo/marketing-page-json-ld";
import { StoryTimelineSection } from "@/components/sections/shared/story-timeline-section";
import { AchievementGridSection } from "@/components/sections/shared/achievement-grid-section";
import { CtaSection } from "@/components/sections/shared/cta-section";
import { GradientStatSection } from "@/components/sections/shared/gradient-stat-section";
import { IconFeatureGridSection } from "@/components/sections/shared/icon-feature-grid-section";
import {
  aboutAchievements,
  aboutCta,
  aboutStory,
  aboutValues,
} from "@/lib/constants/about";
import { createSubpageMetadata } from "@/lib/constants/pages";
import { routes } from "@/lib/constants/routes";
import { ourStoryContent } from "@/lib/constants/subpages";

export const metadata: Metadata = createSubpageMetadata(
  ourStoryContent.title,
  ourStoryContent.description,
  routes.aboutOurStory,
  ["Axeera story", "digital agency history", "about Axeera team"],
);

export default function OurStoryPage() {
  return (
    <>
      <MarketingPageJsonLd
        title={ourStoryContent.title}
        description={ourStoryContent.description}
        pathname={routes.aboutOurStory}
        breadcrumb={[
          { name: "Home", pathname: routes.home },
          { name: "About us", pathname: routes.about },
          { name: "Our story", pathname: routes.aboutOurStory },
        ]}
      />
      <StoryTimelineSection
        eyebrow={aboutStory.eyebrow}
        title={aboutStory.title}
        paragraphs={aboutStory.quotes}
        teamLabel={aboutStory.teamLabel}
        teamSubtitle={aboutStory.teamSubtitle}
        milestones={aboutStory.milestones}
      />
      <IconFeatureGridSection
        eyebrow={aboutValues.eyebrow}
        title={aboutValues.title}
        description={aboutValues.description}
        items={aboutValues.items}
      />
      <AchievementGridSection
        eyebrow={aboutAchievements.eyebrow}
        title={aboutAchievements.title}
        description={aboutAchievements.description}
        items={aboutAchievements.items}
      />
      <GradientStatSection stats={aboutAchievements.stats} />
      <CtaSection
        title={aboutCta.title}
        description={aboutCta.description}
        eyebrow=""
        primaryLabel="Get quote"
        primaryHref={routes.contact}
        secondaryLabel="View our work"
        secondaryHref={routes.portfolio}
      />
    </>
  );
}
