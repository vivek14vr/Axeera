"use client";

import { ScrollSection } from "@/components/motion/scroll-section";
import { ScrollStaggerGroup, ScrollStaggerItem } from "@/components/motion/scroll-stagger";
import { Container } from "@/components/ui/container";
import { GlassPanel } from "@/components/ui/glass-panel";
import { MediaFrame } from "@/components/ui/media-frame";
import { SectionHeading } from "@/components/ui/section-heading";
import { studioImage } from "@/lib/constants/media";
import { whyUsPoints } from "@/lib/constants/home";

const sectionImageClassName =
  "w-full lg:aspect-[5/6] lg:max-h-[24rem] xl:max-h-[26rem]";

export function WhyUsSection() {
  return (
    <ScrollSection className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Why Axeera"
          title="A studio built for clarity, craft, and measurable outcomes"
          description="We work with service teams that need premium digital experiences without the chaos of fragmented vendors or opaque delivery."
          align="center"
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start">
          <MediaFrame
            src={studioImage.src}
            alt={studioImage.alt}
            aspect="video"
            sizes="(min-width: 1024px) 36vw, 100vw"
            className={sectionImageClassName}
          />
          <ScrollStaggerGroup className="grid gap-5">
            {whyUsPoints.map((point) => (
              <ScrollStaggerItem key={point.title} className="h-full">
                <GlassPanel interactive className="h-full p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {point.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{point.description}</p>
                </GlassPanel>
              </ScrollStaggerItem>
            ))}
          </ScrollStaggerGroup>
        </div>
      </Container>
    </ScrollSection>
  );
}
