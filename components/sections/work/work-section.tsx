"use client";

import { ScrollSection } from "@/components/motion/scroll-section";
import { ScrollStaggerGroup, ScrollStaggerItem } from "@/components/motion/scroll-stagger";
import { Container } from "@/components/ui/container";
import { GlassPanel } from "@/components/ui/glass-panel";
import { MediaFrame } from "@/components/ui/media-frame";
import { SectionHeading } from "@/components/ui/section-heading";
import { showcaseProjects } from "@/lib/constants/work";

export function WorkSection() {
  return (
    <ScrollSection className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Selected work"
          title="Outcomes that feel as refined as the interface"
          description="A sample of the launches, redesigns, and growth programs we build for service-led companies."
        />

        <ScrollStaggerGroup className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {showcaseProjects.map((project) => (
            <ScrollStaggerItem key={project.name}>
              <GlassPanel interactive className="overflow-hidden p-0">
                <MediaFrame
                  src={project.image}
                  alt={project.imageAlt}
                  className="rounded-none border-0"
                  sizes="(min-width: 1024px) 33vw, 100vw"
                />
                <div className="p-6">
                  <p className="text-sm uppercase tracking-[0.18em] text-muted/80">
                    {project.category}
                  </p>
                  <h3 className="mt-4 font-display text-2xl font-semibold text-foreground">
                    {project.name}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-accent/90">
                    {project.result}
                  </p>
                </div>
              </GlassPanel>
            </ScrollStaggerItem>
          ))}
        </ScrollStaggerGroup>
      </Container>
    </ScrollSection>
  );
}
