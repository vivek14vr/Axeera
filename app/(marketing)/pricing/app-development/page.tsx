import type { Metadata } from "next";

import { MarketingPageJsonLd } from "@/components/seo/marketing-page-json-ld";
import { AppPricingSection } from "@/components/sections/pricing/app-pricing-section";
import { CtaSection } from "@/components/sections/shared/cta-section";
import { appPricingIntro } from "@/lib/constants/app-pricing";
import { createSubpageMetadata } from "@/lib/constants/pages";
import { routes } from "@/lib/constants/routes";

export const metadata: Metadata = createSubpageMetadata(
  appPricingIntro.heroTitle,
  appPricingIntro.heroDescription,
  routes.appDevelopmentPricing,
  ["app development pricing", "mobile app development cost", "app project pricing"],
);

export default function AppDevelopmentPricingPage() {
  return (
    <>
      <MarketingPageJsonLd
        title={appPricingIntro.heroTitle}
        description={appPricingIntro.heroDescription}
        pathname={routes.appDevelopmentPricing}
        breadcrumb={[
          { name: "Home", pathname: routes.home },
          { name: "Pricing", pathname: routes.pricing },
          { name: "App Development Pricing", pathname: routes.appDevelopmentPricing },
        ]}
      />
      <AppPricingSection />
      <CtaSection />
    </>
  );
}
