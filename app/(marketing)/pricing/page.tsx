import type { Metadata } from "next";

import { PricingSection } from "@/components/sections/pricing/pricing-section";
import { CtaSection } from "@/components/sections/shared/cta-section";
import { createPageMetadata } from "@/lib/constants/pages";

export const metadata: Metadata = createPageMetadata("pricing");

export default function PricingPage() {
  return (
    <>
      <PricingSection />
      <CtaSection />
    </>
  );
}
