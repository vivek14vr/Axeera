"use client";

import { ScrollSection } from "@/components/motion/scroll-section";
import { Container } from "@/components/ui/container";
import { GlassPanel } from "@/components/ui/glass-panel";
import { MediaFrame } from "@/components/ui/media-frame";
import { SectionHeading } from "@/components/ui/section-heading";
import { editorialScenes } from "@/lib/constants/media";
import type { MarketingStoryContent } from "@/types/marketing";

type StoryTimelineSectionProps = MarketingStoryContent;

export function StoryTimelineSection({
  eyebrow,
  title,
  paragraphs,
  teamLabel,
  teamSubtitle,
  milestones,
}: StoryTimelineSectionProps) {
  return (
    <ScrollSection className="py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <SectionHeading eyebrow={eyebrow} title={title} titleAs="h1" />
            <div className="mt-8 space-y-5">
              {paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-base leading-8 text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
            <MediaFrame
              src={editorialScenes.story.src}
              alt={editorialScenes.story.alt}
              aspect="video"
              className="mt-8"
              sizes="(min-width: 1024px) 46vw, 100vw"
            />
            <div className="mt-8 border-t border-accent/35 pt-6">
              <p className="font-display text-xl font-semibold text-foreground">{teamLabel}</p>
              <p className="mt-1 text-sm text-muted">{teamSubtitle}</p>
            </div>
          </div>

          <GlassPanel className="bg-story-panel p-6 sm:p-8">
            <div className="relative space-y-5">
              <span
                aria-hidden="true"
                className="absolute bottom-3 left-[1.125rem] top-3 w-px bg-accent/35"
              />
              {milestones.map((milestone) => (
                <div key={milestone.year} className="relative pl-12">
                  <span
                    aria-hidden="true"
                    className="absolute left-3 top-6 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-accent bg-background"
                  />
                  <GlassPanel interactive className="px-5 py-4">
                    <p className="font-display text-2xl font-semibold text-accent">
                      {milestone.year}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-foreground">{milestone.label}</p>
                  </GlassPanel>
                </div>
              ))}
            </div>
          </GlassPanel>
        </div>
      </Container>
    </ScrollSection>
  );
}
