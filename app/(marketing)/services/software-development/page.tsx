import type { Metadata } from "next";

import { MarketingPageJsonLd } from "@/components/seo/marketing-page-json-ld";
import { SoftwareServicesSection } from "@/components/sections/services/software-services-section";
import { CtaSection } from "@/components/sections/shared/cta-section";
import { softwareServicesCta, softwareServicesHero } from "@/lib/constants/software-services";
import { createSubpageMetadata } from "@/lib/constants/pages";
import { routes } from "@/lib/constants/routes";

export const metadata: Metadata = createSubpageMetadata(
  softwareServicesHero.title,
  softwareServicesHero.description,
  routes.softwareDevelopment,
  ["software development", "custom software development", "business software solutions"],
);

export default function SoftwareDevelopmentPage() {
  return (
    <>
      <MarketingPageJsonLd
        title={softwareServicesHero.title}
        description={softwareServicesHero.description}
        pathname={routes.softwareDevelopment}
        breadcrumb={[
          { name: "Home", pathname: routes.home },
          { name: "Services", pathname: routes.services },
          { name: "Software Development", pathname: routes.softwareDevelopment },
        ]}
      />
      <SoftwareServicesSection />
      <CtaSection
        title={softwareServicesCta.title}
        description={softwareServicesCta.description}
        eyebrow=""
        primaryLabel="Get quote"
        primaryHref={routes.contact}
        secondaryLabel="View our work"
        secondaryHref={routes.portfolio}
      />
    </>
  );
}
