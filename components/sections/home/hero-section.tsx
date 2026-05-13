"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { GlassPanel } from "@/components/ui/glass-panel";
import { MediaFrame } from "@/components/ui/media-frame";
import { heroMetrics } from "@/lib/constants/home";
import { heroImage } from "@/lib/constants/media";
import { routes } from "@/lib/constants/routes";
import { siteConfig } from "@/lib/constants/site";

const deliveryPoints = [
  "Crystal-clear milestones with no black-box handoffs",
  "Glass-layered interfaces that stay fast on every device",
  "SEO and analytics wired in from day one",
];

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden pb-20 pt-[calc(var(--nav-height)+2rem)] sm:pb-28 sm:pt-[calc(var(--nav-height)+2.5rem)]">
      <Container className="relative z-10 grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch lg:gap-12">
        <div className="flex flex-col lg:h-full">
          <Badge className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold normal-case tracking-[0.12em] sm:text-lg">
            Axeera Tech.
          </Badge>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Build luminous digital products that feel premium and perform under
            pressure.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            {siteConfig.name} partners with service businesses to design,
            develop, and grow websites, apps, and search experiences with a
            translucent, detail-obsessed craft.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={routes.contact}>Get quote</Button>
            <Button href={routes.services} variant="secondary">
              Explore services
            </Button>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3 lg:mt-auto">
            {heroMetrics.map((metric) => (
              <GlassPanel key={metric.label} interactive className="px-4 py-4">
                <p className="font-display text-2xl font-semibold text-foreground">
                  {metric.value}
                </p>
                <p className="mt-1 text-sm text-muted/80">{metric.label}</p>
              </GlassPanel>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5 lg:h-full">
          <MediaFrame
            src={heroImage.src}
            alt={heroImage.alt}
            priority
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="lg:aspect-auto lg:h-72"
          />
          <GlassPanel className="relative flex flex-1 flex-col overflow-hidden p-6 sm:p-7">
            <p className="text-sm uppercase tracking-[0.22em] text-accent/80">
              Signature delivery
            </p>
            <p className="mt-4 font-display text-2xl font-semibold text-foreground">
              Strategy, design, engineering, and growth in one cohesive team.
            </p>
            <div className="mt-6 space-y-3">
              {deliveryPoints.map((item) => (
                <div
                  key={item}
                  className="glass-surface flex items-start gap-3 rounded-2xl px-4 py-3 transition duration-300 hover:border-accent/25 hover:translate-x-1"
                >
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  <p className="text-sm leading-6 text-foreground/90">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 border-t border-surface-border pt-5 lg:mt-auto">
              <p className="text-xs uppercase tracking-[0.18em] text-accent/80">
                Response time
              </p>
              <p className="mt-1 text-lg font-medium text-foreground">
                Under 24 hours
              </p>
            </div>
          </GlassPanel>
        </div>
      </Container>
    </section>
  );
}
