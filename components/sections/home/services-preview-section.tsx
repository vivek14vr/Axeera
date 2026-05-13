"use client";

import { ServiceIcon } from "@/components/icons/service-icon";
import { ScrollSection } from "@/components/motion/scroll-section";
import { ScrollStaggerGroup, ScrollStaggerItem } from "@/components/motion/scroll-stagger";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { GlassPanel } from "@/components/ui/glass-panel";
import { MediaFrame } from "@/components/ui/media-frame";
import { SectionHeading } from "@/components/ui/section-heading";
import { homeFeaturedServiceIds } from "@/lib/constants/home";
import { serviceScenes, type ServiceSceneId } from "@/lib/constants/media";
import { routes } from "@/lib/constants/routes";
import { services } from "@/lib/constants/services";

const featuredServices = services.filter((service) =>
  homeFeaturedServiceIds.includes(
    service.id as (typeof homeFeaturedServiceIds)[number],
  ),
);

function getServiceScene(serviceId: string) {
  return serviceScenes[serviceId as ServiceSceneId];
}

export function ServicesPreviewSection() {
  return (
    <ScrollSection className="py-20 sm:py-24">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <SectionHeading
            eyebrow="Services"
            title="Digital capabilities shaped for service businesses"
            description="From first launch to long-term growth, we combine strategy, design, engineering, and search into one cohesive studio."
            className="max-w-3xl"
          />
          <Button href={routes.services} variant="secondary" className="w-fit shrink-0 lg:mt-10">
            View all services
          </Button>
        </div>

        <ScrollStaggerGroup className="mt-12 grid gap-6 md:grid-cols-2">
          {featuredServices.map((service) => {
            const scene = getServiceScene(service.id);

            return (
              <ScrollStaggerItem key={service.id} className="h-full">
                <GlassPanel as="article" interactive className="group h-full overflow-hidden p-0">
                  <div className="grid h-full grid-cols-1 sm:grid-cols-[minmax(9rem,10.5rem)_minmax(0,1fr)]">
                    {scene ? (
                      <MediaFrame
                        src={scene.src}
                        alt={scene.alt}
                        aspect="square"
                        className="h-full min-h-[10.5rem] rounded-none border-0"
                        sizes="(min-width: 768px) 20vw, 168px"
                      />
                    ) : null}
                    <div className="flex flex-col justify-center p-5 sm:p-6">
                      <div className="flex items-start gap-3">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-accent transition duration-300 group-hover:scale-110 group-hover:border-accent/35 group-hover:bg-accent/15">
                          <ServiceIcon serviceId={service.id} />
                        </div>
                        <h3 className="min-w-0 pt-1 font-display text-xl font-semibold text-foreground">
                          {service.title}
                        </h3>
                      </div>
                      <p className="mt-3 text-sm leading-7 text-muted">{service.description}</p>
                    </div>
                  </div>
                </GlassPanel>
              </ScrollStaggerItem>
            );
          })}
        </ScrollStaggerGroup>
      </Container>
    </ScrollSection>
  );
}
