"use client";

import { ScrollSection } from "@/components/motion/scroll-section";
import { ScrollStaggerGroup, ScrollStaggerItem } from "@/components/motion/scroll-stagger";
import { FeatureCardGrid } from "@/components/sections/shared/feature-card-grid";
import { PageHeroSection } from "@/components/sections/shared/page-hero-section";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { GlassPanel } from "@/components/ui/glass-panel";
import { SectionHeading } from "@/components/ui/section-heading";
import { servicePageScenes } from "@/lib/constants/media";
import {
  seoServicesBenefits,
  seoServicesCoverage,
  seoServicesFaq,
  seoServicesHero,
  seoServicesIntro,
  seoServicesProcess,
  seoServicesStats,
  seoServicesTools,
} from "@/lib/constants/seo-services";
import { routes } from "@/lib/constants/routes";

export function SeoServicesSection() {
  return (
    <>
      <PageHeroSection
        eyebrow={seoServicesHero.eyebrow}
        title={seoServicesHero.title}
        description={seoServicesHero.description}
        image={servicePageScenes.seo}
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href={routes.contact}>Get quote</Button>
          <Button href={routes.contact} variant="secondary">
            Talk to an expert
          </Button>
        </div>
        <div className="mt-10 grid gap-4 grid-cols-1 min-[420px]:grid-cols-2 lg:grid-cols-3">
          {seoServicesStats.map((stat) => (
            <GlassPanel key={stat.label} interactive className="px-5 py-5">
              <p className="font-display text-3xl font-semibold text-foreground">
                {stat.value}
              </p>
              <p className="mt-2 text-sm leading-6 text-muted">{stat.label}</p>
            </GlassPanel>
          ))}
        </div>
      </PageHeroSection>

      <ScrollSection className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow={seoServicesIntro.eyebrow}
            title={seoServicesIntro.title}
            description={seoServicesIntro.description}
          />
          <GlassPanel interactive className="mt-10 p-6 sm:p-8">
            <ul className="grid gap-3 sm:grid-cols-2">
              {seoServicesIntro.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="glass-surface flex items-start gap-3 rounded-2xl px-4 py-3 text-sm leading-6 text-foreground/90"
                >
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </GlassPanel>
        </Container>
      </ScrollSection>

      <ScrollSection className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow={seoServicesCoverage.eyebrow}
            title={seoServicesCoverage.title}
          />
          <FeatureCardGrid items={seoServicesCoverage.items} columns={3} className="mt-12" />
        </Container>
      </ScrollSection>

      <ScrollSection className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow={seoServicesBenefits.eyebrow}
            title={seoServicesBenefits.title}
          />
          <FeatureCardGrid items={seoServicesBenefits.items} columns={2} className="mt-12" />
        </Container>
      </ScrollSection>

      <ScrollSection className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow={seoServicesProcess.eyebrow}
            title={seoServicesProcess.title}
          />
          <ScrollStaggerGroup className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {seoServicesProcess.steps.map((step) => (
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
        </Container>
      </ScrollSection>

      <ScrollSection className="py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow={seoServicesTools.eyebrow} title={seoServicesTools.title} />
          <FeatureCardGrid items={seoServicesTools.items} columns={4} className="mt-12" />
        </Container>
      </ScrollSection>

      <ScrollSection className="py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow={seoServicesFaq.eyebrow} title={seoServicesFaq.title} />
          <div className="mt-12 space-y-4">
            {seoServicesFaq.items.map((item) => (
              <GlassPanel key={item.question} interactive className="p-6 sm:p-7">
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {item.question}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">{item.answer}</p>
              </GlassPanel>
            ))}
          </div>
        </Container>
      </ScrollSection>
    </>
  );
}
