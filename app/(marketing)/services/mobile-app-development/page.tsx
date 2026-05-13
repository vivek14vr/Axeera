import type { Metadata } from "next";

import { MarketingPageJsonLd } from "@/components/seo/marketing-page-json-ld";
import { MobileAppServicesSection } from "@/components/sections/services/mobile-app-services-section";
import { CtaSection } from "@/components/sections/shared/cta-section";
import { mobileAppServicesCta, mobileAppServicesHero } from "@/lib/constants/mobile-app-services";
import { createSubpageMetadata } from "@/lib/constants/pages";
import { routes } from "@/lib/constants/routes";

export const metadata: Metadata = createSubpageMetadata(
  mobileAppServicesHero.title,
  mobileAppServicesHero.description,
  routes.mobileAppDevelopment,
  ["mobile app development", "iOS app development", "Android app development"],
);

export default function MobileAppDevelopmentPage() {
  return (
    <>
      <MarketingPageJsonLd
        title={mobileAppServicesHero.title}
        description={mobileAppServicesHero.description}
        pathname={routes.mobileAppDevelopment}
        breadcrumb={[
          { name: "Home", pathname: routes.home },
          { name: "Services", pathname: routes.services },
          { name: "Mobile App Development", pathname: routes.mobileAppDevelopment },
        ]}
      />
      <MobileAppServicesSection />
      <CtaSection
        title={mobileAppServicesCta.title}
        description={mobileAppServicesCta.description}
        eyebrow=""
        primaryLabel="Get quote"
        primaryHref={routes.contact}
        secondaryLabel="View our work"
        secondaryHref={routes.portfolio}
      />
    </>
  );
}
