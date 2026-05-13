import type { Metadata } from "next";

import { MarketingPageJsonLd } from "@/components/seo/marketing-page-json-ld";
import { WebsitePricingSection } from "@/components/sections/pricing/website-pricing-section";
import { CtaSection } from "@/components/sections/shared/cta-section";
import { webPricingIntro } from "@/lib/constants/web-pricing";
import { createSubpageMetadata } from "@/lib/constants/pages";
import { routes } from "@/lib/constants/routes";

export const metadata: Metadata = createSubpageMetadata(
  webPricingIntro.heroTitle,
  webPricingIntro.heroDescription,
  routes.websitePricing,
  ["website development pricing", "web design pricing", "website packages"],
);

export default function WebsitePricingPage() {
  return (
    <>
      <MarketingPageJsonLd
        title={webPricingIntro.heroTitle}
        description={webPricingIntro.heroDescription}
        pathname={routes.websitePricing}
        breadcrumb={[
          { name: "Home", pathname: routes.home },
          { name: "Pricing", pathname: routes.pricing },
          { name: "Website Pricing", pathname: routes.websitePricing },
        ]}
      />
      <WebsitePricingSection />
      <CtaSection />
    </>
  );
}
