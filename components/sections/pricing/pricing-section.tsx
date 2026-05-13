"use client";

import { ScrollSection } from "@/components/motion/scroll-section";
import { ScrollStaggerGroup, ScrollStaggerItem } from "@/components/motion/scroll-stagger";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { GlassPanel } from "@/components/ui/glass-panel";
import { SectionHeading } from "@/components/ui/section-heading";
import { pricingPlans } from "@/lib/constants/pricing";
import { routes } from "@/lib/constants/routes";

export function PricingSection() {
  return (
    <ScrollSection className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title="Starting points for launches, growth, and scale"
          description="Every engagement is scoped to your roadmap. These tiers outline typical starting points before we tailor a quote to your goals."
          align="center"
          titleAs="h1"
        />

        <ScrollStaggerGroup className="mt-12 grid gap-5 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <ScrollStaggerItem key={plan.name}>
              <GlassPanel
                interactive
                className={`flex h-full flex-col p-6 sm:p-8 ${
                  plan.featured ? "ring-1 ring-accent/25" : ""
                }`}
              >
                <p className="text-sm uppercase tracking-[0.18em] text-muted/80">
                  {plan.name}
                </p>
                <p className="mt-4 font-display text-3xl font-semibold text-foreground">
                  {plan.price}
                </p>
                <p className="mt-4 text-sm leading-7 text-muted">{plan.description}</p>
                <ul className="mt-6 flex flex-1 flex-col gap-3 text-sm leading-7 text-foreground">
                  {plan.features.map((feature) => (
                    <li key={feature} className="glass-surface rounded-2xl px-4 py-3">
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  href={routes.contact}
                  variant={plan.featured ? "primary" : "secondary"}
                  className="mt-8 w-full"
                >
                  Get quote
                </Button>
              </GlassPanel>
            </ScrollStaggerItem>
          ))}
        </ScrollStaggerGroup>
      </Container>
    </ScrollSection>
  );
}
