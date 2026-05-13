"use client";

import type { ReactNode } from "react";

import { FeatureIcon } from "@/components/icons/feature-icon";
import { GlassPanel } from "@/components/ui/glass-panel";
import {
  contactEmails,
  contactHours,
  contactLocations,
  contactWhatsApp,
} from "@/lib/constants/contact";
import { cn } from "@/lib/utils/cn";

type ContactSidebarProps = {
  className?: string;
};

function ContactInfoCard({
  icon,
  title,
  children,
}: {
  icon: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <GlassPanel interactive className="p-6">
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-accent">
        <FeatureIcon name={icon} className="h-5 w-5" />
      </div>
      <h3 className="mt-5 font-display text-xl font-semibold text-foreground">{title}</h3>
      <div className="mt-3 space-y-3 text-sm leading-7 text-muted">{children}</div>
    </GlassPanel>
  );
}

export function ContactSidebar({ className }: ContactSidebarProps) {
  return (
    <aside className={cn("flex flex-col gap-5", className)}>
      <ContactInfoCard icon="support" title="Email us">
        {contactEmails.map((email) => (
          <p key={email.value}>
            <span className="block text-xs uppercase tracking-[0.16em] text-muted/80">
              {email.label}
            </span>
            <a href={`mailto:${email.value}`} className="text-link mt-1 block text-foreground">
              {email.value}
            </a>
          </p>
        ))}
      </ContactInfoCard>

      <ContactInfoCard icon="globe" title="Visit us">
        {contactLocations.map((location) => (
          <p key={location.value}>
            <span className="block text-xs uppercase tracking-[0.16em] text-muted/80">
              {location.label}
            </span>
            <span className="mt-1 block text-foreground">{location.value}</span>
          </p>
        ))}
      </ContactInfoCard>

      <ContactInfoCard icon="delivery" title="Working hours">
        {contactHours.map((hour) => (
          <p key={hour.label}>
            <span className="block text-xs uppercase tracking-[0.16em] text-muted/80">
              {hour.label}
            </span>
            <span className="mt-1 block text-foreground">{hour.value}</span>
          </p>
        ))}
      </ContactInfoCard>

      <GlassPanel interactive className="border-accent/25 bg-accent/8 p-6">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/25 bg-background/70 text-accent">
          <FeatureIcon name="clients" className="h-5 w-5" />
        </div>
        <h3 className="mt-5 font-display text-xl font-semibold text-foreground">
          {contactWhatsApp.title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-muted">{contactWhatsApp.description}</p>
        <a
          href={contactWhatsApp.href}
          target="_blank"
          rel="noreferrer"
          className="interactive-button mt-5 inline-flex rounded-full border border-accent/25 bg-background/80 px-5 py-3 text-sm font-medium text-foreground"
        >
          {contactWhatsApp.actionLabel}
        </a>
      </GlassPanel>
    </aside>
  );
}
