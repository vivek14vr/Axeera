"use client";

import { ScrollSection } from "@/components/motion/scroll-section";
import { ScrollStaggerGroup, ScrollStaggerItem } from "@/components/motion/scroll-stagger";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { GlassPanel } from "@/components/ui/glass-panel";
import { MediaFrame } from "@/components/ui/media-frame";
import { SectionHeading } from "@/components/ui/section-heading";
import { editorialScenes } from "@/lib/constants/media";
import { processSteps } from "@/lib/constants/process";
import { routes } from "@/lib/constants/routes";

const sectionImageClassName =
  "w-full lg:aspect-[5/6] lg:max-h-[24rem] xl:max-h-[26rem]";

export function ProcessPreviewSection() {
  return (
    <ScrollSection className="py-20 sm:py-24">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <SectionHeading
            eyebrow="Process"
            title="A transparent path from idea to launch"
            description="Our workflow keeps service teams informed with visible checkpoints, thoughtful reviews, and no surprise scope shifts."
            className="max-w-3xl"
          />
          <Button href={routes.about} variant="secondary" className="w-fit shrink-0 lg:mt-10">
            About us
          </Button>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start">
          <MediaFrame
            src={editorialScenes.process.src}
            alt={editorialScenes.process.alt}
            aspect="video"
            sizes="(min-width: 1024px) 36vw, 100vw"
            className={sectionImageClassName}
          />
          <ScrollStaggerGroup className="grid gap-5 sm:grid-cols-2">
            {processSteps.map((step) => (
              <ScrollStaggerItem key={step.step} className="h-full">
                <GlassPanel interactive className="flex h-full flex-col p-6">
                  <p className="text-sm font-medium text-accent/90">{step.step}</p>
                  <h3 className="mt-4 font-display text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{step.description}</p>
                </GlassPanel>
              </ScrollStaggerItem>
            ))}
          </ScrollStaggerGroup>
        </div>
      </Container>
    </ScrollSection>
  );
}
