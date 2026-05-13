import { ScrollSection } from "@/components/motion/scroll-section";
import { Container } from "@/components/ui/container";
import { GlassPanel } from "@/components/ui/glass-panel";
import { SectionHeading } from "@/components/ui/section-heading";
import { contactMap } from "@/lib/constants/contact";

export function ContactMapSection() {
  return (
    <ScrollSection className="pb-20 pt-4 sm:pb-24 sm:pt-6">
      <Container>
        <SectionHeading
          eyebrow="Locations"
          title={contactMap.title}
          description={contactMap.description}
          align="center"
          className="mx-auto max-w-3xl"
        />

        <GlassPanel className="mt-10 overflow-hidden p-0">
          <div className="relative aspect-[16/9] min-h-[18rem] w-full sm:min-h-[22rem] lg:min-h-[26rem]">
            <iframe
              title={`Axeera office location: ${contactMap.address}`}
              src={contactMap.embedUrl}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <div className="flex flex-col gap-2 border-t border-surface-border px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <p className="text-sm leading-7 text-muted">{contactMap.address}</p>
            <a
              href={contactMap.openInMapsHref}
              target="_blank"
              rel="noreferrer"
              className="text-link shrink-0 text-sm font-medium text-foreground"
            >
              Open in Google Maps
            </a>
          </div>
        </GlassPanel>
      </Container>
    </ScrollSection>
  );
}
