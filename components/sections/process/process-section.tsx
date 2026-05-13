"use client";

import { ScrollSection } from "@/components/motion/scroll-section";
import { ScrollStaggerGroup, ScrollStaggerItem } from "@/components/motion/scroll-stagger";
import { Container } from "@/components/ui/container";
import { GlassPanel } from "@/components/ui/glass-panel";
import { SectionHeading } from "@/components/ui/section-heading";
import { processSteps } from "@/lib/constants/process";

export function ProcessSection() {
  return (
    <ScrollSection className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Process"
          title="A calm, transparent path from idea to launch"
          description="Our workflow is designed for busy service teams: visible progress, thoughtful checkpoints, and no surprise scope shifts."
        />

        <ScrollStaggerGroup className="mt-12 grid gap-5 lg:grid-cols-4">
          {processSteps.map((step) => (
            <ScrollStaggerItem key={step.step} className="h-full">
              <GlassPanel interactive className="flex h-full flex-col p-6">
                <p className="text-sm font-medium text-accent/90">{step.step}</p>
                <h3 className="mt-4 font-display text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">
                  {step.description}
                </p>
              </GlassPanel>
            </ScrollStaggerItem>
          ))}
        </ScrollStaggerGroup>
      </Container>
    </ScrollSection>
  );
}
