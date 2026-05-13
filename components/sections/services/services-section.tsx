"use client";

import { ServiceIcon } from "@/components/icons/service-icon";
import { ScrollSection } from "@/components/motion/scroll-section";
import { ScrollStaggerGroup, ScrollStaggerItem } from "@/components/motion/scroll-stagger";
import { Container } from "@/components/ui/container";
import { GlassPanel } from "@/components/ui/glass-panel";
import { MediaFrame } from "@/components/ui/media-frame";
import { SectionHeading } from "@/components/ui/section-heading";
import { editorialScenes } from "@/lib/constants/media";
import { services } from "@/lib/constants/services";

export function ServicesSection() {
  return (
    <ScrollSection className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="Everything your service brand needs to win online"
          description="From first impression to long-term growth, we shape digital experiences with translucent surfaces, sharp messaging, and technical depth."
          titleAs="h1"
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-stretch">
          <MediaFrame
            src={editorialScenes.services.src}
            alt={editorialScenes.services.alt}
            aspect="portrait"
            sizes="(min-width: 1024px) 34vw, 100vw"
            className="lg:min-h-full"
          />
          <GlassPanel className="flex flex-col justify-center p-6 sm:p-8">
            <p className="text-sm uppercase tracking-[0.18em] text-accent/80">Studio approach</p>
            <p className="mt-4 font-display text-2xl font-semibold text-foreground">
              Strategy, design, engineering, and growth in one cohesive delivery model.
            </p>
            <p className="mt-4 text-sm leading-7 text-muted">
              Each engagement is shaped around your service business, with clear milestones,
              visible progress, and room to evolve as priorities change.
            </p>
          </GlassPanel>
        </div>

        <ScrollStaggerGroup className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ScrollStaggerItem key={service.id}>
              <GlassPanel as="article" interactive className="group p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-accent transition duration-300 group-hover:scale-110 group-hover:border-accent/35 group-hover:bg-accent/15">
                  <ServiceIcon serviceId={service.id} />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">{service.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {service.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="glass-surface rounded-full px-3 py-1 text-xs font-medium text-foreground transition duration-300 hover:border-accent/25"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              </GlassPanel>
            </ScrollStaggerItem>
          ))}
        </ScrollStaggerGroup>
      </Container>
    </ScrollSection>
  );
}
