import type { Metadata } from "next";

import { PortfolioSection } from "@/components/sections/portfolio/portfolio-section";
import { CtaSection } from "@/components/sections/shared/cta-section";
import { createPageMetadata } from "@/lib/constants/pages";

export const metadata: Metadata = createPageMetadata("portfolio");

export default function PortfolioPage() {
  return (
    <>
      <PortfolioSection />
      <CtaSection />
    </>
  );
}
