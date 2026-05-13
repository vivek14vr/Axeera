"use client";

import { ScrollSection } from "@/components/motion/scroll-section";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { GlassPanel } from "@/components/ui/glass-panel";
import { routes } from "@/lib/constants/routes";
import { cn } from "@/lib/utils/cn";

type CtaSectionProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

const defaultContent = {
  eyebrow: "Ready when you are",
  title: "Let's shape a digital experience your clients will remember.",
  description:
    "Tell us about your website, app, or growth goals and we'll reply with a clear plan, timeline, and next steps.",
  primaryLabel: "Get quote",
  primaryHref: routes.contact,
  secondaryLabel: "Review services",
  secondaryHref: routes.services,
} as const;

export function CtaSection({
  eyebrow = defaultContent.eyebrow,
  title = defaultContent.title,
  description = defaultContent.description,
  primaryLabel = defaultContent.primaryLabel,
  primaryHref = defaultContent.primaryHref,
  secondaryLabel = defaultContent.secondaryLabel,
  secondaryHref = defaultContent.secondaryHref,
}: CtaSectionProps) {
  return (
    <ScrollSection className="pb-20 pt-4 sm:pb-24">
      <Container>
        <GlassPanel interactive className="relative overflow-hidden px-6 py-10 sm:px-10 sm:py-12">
          <div className="absolute inset-0 bg-cta-glow" />
          <div className="relative max-w-2xl">
            {eyebrow ? (
              <p className="text-sm uppercase tracking-[0.22em] text-accent/80">{eyebrow}</p>
            ) : null}
            <h2
              className={cn(
                "font-display text-3xl font-semibold text-foreground sm:text-4xl",
                eyebrow ? "mt-4" : "",
              )}
            >
              {title}
            </h2>
            <p className="mt-4 text-base leading-7 text-muted">{description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={primaryHref}>{primaryLabel}</Button>
              <Button href={secondaryHref} variant="secondary">
                {secondaryLabel}
              </Button>
            </div>
          </div>
        </GlassPanel>
      </Container>
    </ScrollSection>
  );
}
