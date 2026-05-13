import type { Metadata } from "next";

import { MarketingPageJsonLd } from "@/components/seo/marketing-page-json-ld";
import { SeoPricingSection } from "@/components/sections/pricing/seo-pricing-section";
import { CtaSection } from "@/components/sections/shared/cta-section";
import { seoPricingIntro } from "@/lib/constants/seo-pricing";
import { createSubpageMetadata } from "@/lib/constants/pages";
import { routes } from "@/lib/constants/routes";

export const metadata: Metadata = createSubpageMetadata(
  seoPricingIntro.heroTitle,
  seoPricingIntro.heroDescription,
  routes.seoPricing,
  ["SEO pricing", "monthly SEO plans", "SEO packages"],
);

export default function SeoPricingPage() {
  return (
    <>
      <MarketingPageJsonLd
        title={seoPricingIntro.heroTitle}
        description={seoPricingIntro.heroDescription}
        pathname={routes.seoPricing}
        breadcrumb={[
          { name: "Home", pathname: routes.home },
          { name: "Pricing", pathname: routes.pricing },
          { name: "SEO Pricing", pathname: routes.seoPricing },
        ]}
      />
      <SeoPricingSection />
      <CtaSection />
    </>
  );
}
