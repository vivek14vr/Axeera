import Link from "next/link";
import type { ReactNode } from "react";

import { Container } from "@/components/ui/container";
import { contactHours, contactLocations } from "@/lib/constants/contact";
import { footerQuickLinks, footerServiceLinks } from "@/lib/constants/footer";
import { siteConfig } from "@/lib/constants/site";

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="min-w-0">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent/80">{title}</p>
      <div className="mt-4">{children}</div>
    </div>
  );
}

function FooterLinkList({
  links,
}: {
  links: readonly { label: string; href: string }[];
}) {
  return (
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link.href}>
          <Link href={link.href} className="text-link text-sm text-muted">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function Footer() {
  const primaryLocation = contactLocations[0];
  const weekdayHours = contactHours[0];

  return (
    <footer className="glass-footer">
      <Container className="py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="min-w-0 sm:col-span-2 lg:col-span-1">
            <p className="font-display text-2xl font-semibold text-foreground">
              {siteConfig.name}
            </p>
            <p className="mt-3 max-w-sm text-sm leading-7 text-muted">
              {siteConfig.description}
            </p>
          </div>

          <FooterColumn title="Quick links">
            <FooterLinkList links={footerQuickLinks} />
          </FooterColumn>

          <FooterColumn title="Our services">
            <FooterLinkList links={footerServiceLinks} />
          </FooterColumn>

          <FooterColumn title="Get in touch">
            <ul className="space-y-3 text-sm leading-6 text-muted">
              <li>
                <span className="block text-xs uppercase tracking-[0.16em] text-muted/80">
                  {primaryLocation.label}
                </span>
                <span className="mt-1 block text-foreground">{primaryLocation.value}</span>
              </li>
              <li>
                <a href={`tel:${siteConfig.phone}`} className="text-link text-foreground">
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="text-link text-foreground">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <span className="block text-xs uppercase tracking-[0.16em] text-muted/80">
                  {weekdayHours.label}
                </span>
                <span className="mt-1 block text-foreground">{weekdayHours.value}</span>
              </li>
            </ul>
          </FooterColumn>
        </div>
      </Container>

      <Container className="border-t border-surface-border py-5 text-sm text-muted/80">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. Crafted with translucent precision.
        </p>
      </Container>
    </footer>
  );
}
