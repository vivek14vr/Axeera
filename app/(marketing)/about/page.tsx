import type { Metadata } from "next";

import { AboutSection } from "@/components/sections/about/about-section";
import { CtaSection } from "@/components/sections/shared/cta-section";
import { aboutCta } from "@/lib/constants/about";
import { createPageMetadata } from "@/lib/constants/pages";
import { routes } from "@/lib/constants/routes";

export const metadata: Metadata = createPageMetadata("about");

export default function AboutPage() {
  return (
    <>
      <AboutSection />
      <CtaSection
        title={aboutCta.title}
        description={aboutCta.description}
        eyebrow=""
        primaryLabel="Get quote"
        primaryHref={routes.contact}
        secondaryLabel="View our work"
        secondaryHref={routes.portfolio}
      />
    </>
  );
}
