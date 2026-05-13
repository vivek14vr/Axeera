"use client";

import Image from "next/image";

import { ScrollSection } from "@/components/motion/scroll-section";
import { ScrollStaggerGroup, ScrollStaggerItem } from "@/components/motion/scroll-stagger";
import { Container } from "@/components/ui/container";
import { GlassPanel } from "@/components/ui/glass-panel";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/lib/constants/home";

export function TestimonialsSection() {
  return (
    <ScrollSection className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Client stories"
          title="Trusted by teams that care how their brand feels online"
          description="Service businesses choose Axeera when they need a partner who can translate ambition into polished digital experiences."
          align="center"
        />

        <ScrollStaggerGroup className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <ScrollStaggerItem key={testimonial.name} className="h-full">
              <GlassPanel interactive className="flex h-full flex-col p-6">
                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-surface-border">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.imageAlt}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{testimonial.name}</p>
                    <p className="mt-1 text-sm text-muted">{testimonial.role}</p>
                  </div>
                </div>
                <p className="mt-6 flex-1 text-sm leading-7 text-foreground/90">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </GlassPanel>
            </ScrollStaggerItem>
          ))}
        </ScrollStaggerGroup>
      </Container>
    </ScrollSection>
  );
}
