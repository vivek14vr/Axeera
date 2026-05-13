"use client";

import { PageHeroSection } from "@/components/sections/shared/page-hero-section";
import { ScrollSection } from "@/components/motion/scroll-section";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { GlassPanel } from "@/components/ui/glass-panel";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  seoPricingIntro,
  seoPricingPlans,
  seoPricingSections,
} from "@/lib/constants/seo-pricing";
import { routes } from "@/lib/constants/routes";
import type { SeoPricingFeature } from "@/types/seo-pricing";

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent"
    >
      <path
        d="M3.5 8.25 6.5 11.25 12.5 4.75"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.75"
      />
    </svg>
  );
}

function formatFeature(feature: SeoPricingFeature, planIndex: number) {
  if (feature.type === "included") {
    return feature.label;
  }

  const value = feature.values[planIndex];

  if (value === 0) {
    return `${feature.label} – 0`;
  }

  return `${feature.label} – ${value}`;
}

export function SeoPricingSection() {
  return (
    <>
      <PageHeroSection
        eyebrow={seoPricingIntro.heroEyebrow}
        title={seoPricingIntro.heroTitle}
        description={seoPricingIntro.heroDescription}
        align="center"
      />

      <ScrollSection className="pb-20 sm:pb-24">
        <Container>
          <SectionHeading
            eyebrow={seoPricingIntro.eyebrow}
            title={seoPricingIntro.title}
            description={seoPricingIntro.description}
            align="center"
          />

          <div className="mt-12 grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-6">
            {seoPricingPlans.map((plan, planIndex) => (
              <GlassPanel
                key={plan.id}
                interactive
                className={`flex h-full flex-col p-5 sm:p-6 ${
                  plan.featured ? "ring-1 ring-accent/30" : ""
                }`}
              >
                <div className="flex min-h-7 items-center">
                  {plan.badge ? (
                    <span className="inline-flex w-fit rounded-full bg-accent/12 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-accent">
                      {plan.badge}
                    </span>
                  ) : (
                    <span aria-hidden="true" className="invisible inline-flex px-2.5 py-1 text-[10px]">
                      Most Chosen
                    </span>
                  )}
                </div>

                <div className="min-h-[6rem]">
                  <p className="font-display text-2xl font-semibold text-foreground">
                    {plan.name}
                  </p>
                  <p className="mt-2 font-display text-3xl font-semibold text-accent">
                    ${plan.price}
                  </p>
                  <p className="mt-1 text-sm font-medium text-muted">per month</p>
                </div>

                <Button href={routes.contact} className="mt-5 w-full shrink-0">
                  Get quote
                </Button>

                <div className="mt-6 flex-1 space-y-5">
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground">
                      Highlights
                    </h3>
                    <ul className="mt-3 space-y-2.5">
                      {plan.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex gap-2 text-sm leading-6 text-foreground/90"
                        >
                          <CheckIcon />
                          <span className="min-w-0 break-words">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {seoPricingSections.map((section) => (
                    <div key={`${plan.id}-${section.title}`}>
                      <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground">
                        {section.title}
                      </h3>
                      <ul className="mt-3 space-y-2.5">
                        {section.features.map((feature) => (
                          <li
                            key={`${plan.id}-${section.title}-${feature.label}`}
                            className="flex gap-2 text-sm leading-6 text-foreground/90"
                          >
                            <CheckIcon />
                            <span className="min-w-0 break-words">
                              {formatFeature(feature, planIndex)}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </GlassPanel>
            ))}
          </div>
        </Container>
      </ScrollSection>
    </>
  );
}
