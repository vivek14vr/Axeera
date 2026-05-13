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
  softwareServicesBenefits,
  softwareServicesExpertise,
  softwareServicesFaq,
  softwareServicesHero,
  softwareServicesIntro,
  softwareServicesProcess,
  softwareServicesStats,
  softwareServicesTechnologies,
} from "@/lib/constants/software-services";
import { routes } from "@/lib/constants/routes";

export function SoftwareServicesSection() {
  return (
    <>
      <PageHeroSection
        eyebrow={softwareServicesHero.eyebrow}
        title={softwareServicesHero.title}
        description={softwareServicesHero.description}
        image={servicePageScenes.software}
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href={routes.contact}>Get quote</Button>
          <Button href={routes.portfolio} variant="secondary">
            View our work
          </Button>
        </div>
        <div className="mt-10 grid gap-4 grid-cols-1 min-[420px]:grid-cols-2 lg:grid-cols-4">
          {softwareServicesStats.map((stat) => (
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
            eyebrow={softwareServicesIntro.eyebrow}
            title={softwareServicesIntro.title}
            description={softwareServicesIntro.description}
          />
          <p className="mt-6 max-w-3xl text-base leading-8 text-muted">
            {softwareServicesIntro.secondaryDescription}
          </p>
          <GlassPanel interactive className="mt-10 p-6 sm:p-8">
            <ul className="grid gap-3 sm:grid-cols-2">
              {softwareServicesIntro.bullets.map((bullet) => (
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
            eyebrow={softwareServicesExpertise.eyebrow}
            title={softwareServicesExpertise.title}
            description={softwareServicesExpertise.description}
          />
          <FeatureCardGrid items={softwareServicesExpertise.items} columns={3} className="mt-12" />
        </Container>
      </ScrollSection>

      <ScrollSection className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow={softwareServicesTechnologies.eyebrow}
            title={softwareServicesTechnologies.title}
            description={softwareServicesTechnologies.description}
          />
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {softwareServicesTechnologies.items.map((tool) => (
              <div key={tool.name} className="glass-surface rounded-2xl px-4 py-4">
                <p className="font-medium text-foreground">{tool.name}</p>
                <p className="mt-1 text-sm leading-6 text-muted">{tool.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </ScrollSection>

      <ScrollSection className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow={softwareServicesBenefits.eyebrow}
            title={softwareServicesBenefits.title}
            description={softwareServicesBenefits.description}
          />
          <FeatureCardGrid items={softwareServicesBenefits.items} columns={2} className="mt-12" />
        </Container>
      </ScrollSection>

      <ScrollSection className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow={softwareServicesProcess.eyebrow}
            title={softwareServicesProcess.title}
            description={softwareServicesProcess.description}
          />
          <ScrollStaggerGroup className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {softwareServicesProcess.steps.map((step) => (
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
          <SectionHeading
            eyebrow={softwareServicesFaq.eyebrow}
            title={softwareServicesFaq.title}
            description={softwareServicesFaq.description}
          />
          <div className="mt-12 space-y-4">
            {softwareServicesFaq.items.map((item) => (
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
