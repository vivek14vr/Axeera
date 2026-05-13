"use client";

import { ScrollSection } from "@/components/motion/scroll-section";
import { ContactForm } from "@/components/sections/contact/contact-form";
import { ContactSidebar } from "@/components/sections/contact/contact-sidebar";
import { Container } from "@/components/ui/container";
import { GlassPanel } from "@/components/ui/glass-panel";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  contactFormContent,
  contactSidebarContent,
} from "@/lib/constants/contact";

function ColumnIntro({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="min-h-[5.75rem]">
      <h2 className="font-display text-2xl font-semibold text-foreground">{title}</h2>
      <p className="mt-2 text-sm leading-7 text-muted">{description}</p>
    </div>
  );
}

export function ContactSection() {
  return (
    <ScrollSection className="pb-20 pt-10 sm:pb-24 sm:pt-12">
      <Container>
        <SectionHeading
          eyebrow="Contact us"
          title="Let's plan your next digital launch"
          description="Share your goals, timeline, and service needs. We'll respond with a clear next step within one business day."
          align="center"
          titleAs="h1"
          className="mx-auto max-w-3xl"
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="flex flex-col gap-6">
            <ColumnIntro
              title={contactFormContent.title}
              description={contactFormContent.description}
            />
            <GlassPanel interactive className="p-6 sm:p-8">
              <ContactForm />
            </GlassPanel>
          </div>

          <div className="flex flex-col gap-6">
            <ColumnIntro
              title={contactSidebarContent.title}
              description={contactSidebarContent.description}
            />
            <ContactSidebar />
          </div>
        </div>
      </Container>
    </ScrollSection>
  );
}
