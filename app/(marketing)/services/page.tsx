import type { Metadata } from "next";

import { ServicesSection } from "@/components/sections/services/services-section";
import { CtaSection } from "@/components/sections/shared/cta-section";
import { createPageMetadata } from "@/lib/constants/pages";

export const metadata: Metadata = createPageMetadata("services");

export default function ServicesPage() {
  return (
    <>
      <ServicesSection />
      <CtaSection />
    </>
  );
}
