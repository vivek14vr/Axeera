"use client";

import { AboutIntroSection } from "@/components/sections/shared/about-intro-section";
import { AchievementGridSection } from "@/components/sections/shared/achievement-grid-section";
import { GradientStatSection } from "@/components/sections/shared/gradient-stat-section";
import { IconFeatureGridSection } from "@/components/sections/shared/icon-feature-grid-section";
import { StoryTimelineSection } from "@/components/sections/shared/story-timeline-section";
import {
  aboutAchievements,
  aboutIntro,
  aboutStats,
  aboutStory,
  aboutValues,
} from "@/lib/constants/about";

export function AboutSection() {
  return (
    <>
      <AboutIntroSection
        eyebrow={aboutIntro.eyebrow}
        title={aboutIntro.title}
        description={aboutIntro.description}
        stats={aboutStats}
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
    </>
  );
}
