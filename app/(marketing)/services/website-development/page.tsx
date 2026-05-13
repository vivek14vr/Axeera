import type { Metadata } from "next";

import { MarketingPageJsonLd } from "@/components/seo/marketing-page-json-ld";
import { WebsiteServicesSection } from "@/components/sections/services/website-services-section";
import { CtaSection } from "@/components/sections/shared/cta-section";
import { websiteServicesCta, websiteServicesHero } from "@/lib/constants/website-services";
import { createSubpageMetadata } from "@/lib/constants/pages";
import { routes } from "@/lib/constants/routes";

export const metadata: Metadata = createSubpageMetadata(
  websiteServicesHero.title,
  websiteServicesHero.description,
  routes.websiteDevelopment,
  ["website development", "web design services", "business website design"],
);

export default function WebsiteDevelopmentPage() {
  return (
    <>
      <MarketingPageJsonLd
        title={websiteServicesHero.title}
        description={websiteServicesHero.description}
        pathname={routes.websiteDevelopment}
        breadcrumb={[
          { name: "Home", pathname: routes.home },
          { name: "Services", pathname: routes.services },
          { name: "Website Development", pathname: routes.websiteDevelopment },
        ]}
      />
      <WebsiteServicesSection />
      <CtaSection
        title={websiteServicesCta.title}
        description={websiteServicesCta.description}
        eyebrow=""
        primaryLabel="Get quote"
        primaryHref={routes.contact}
        secondaryLabel="View our work"
        secondaryHref={routes.portfolio}
      />
    </>
  );
}
