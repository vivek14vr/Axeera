import type { Metadata } from "next";

import { MarketingPageJsonLd } from "@/components/seo/marketing-page-json-ld";
import { SeoServicesSection } from "@/components/sections/services/seo-services-section";
import { CtaSection } from "@/components/sections/shared/cta-section";
import { seoServicesCta, seoServicesHero } from "@/lib/constants/seo-services";
import { createSubpageMetadata } from "@/lib/constants/pages";
import { routes } from "@/lib/constants/routes";

export const metadata: Metadata = createSubpageMetadata(
  seoServicesHero.title,
  seoServicesHero.description,
  routes.seoServices,
  ["SEO services", "search engine optimization", "technical SEO", "SEO agency"],
);

export default function SeoServicesPage() {
  return (
    <>
      <MarketingPageJsonLd
        title={seoServicesHero.title}
        description={seoServicesHero.description}
        pathname={routes.seoServices}
        breadcrumb={[
          { name: "Home", pathname: routes.home },
          { name: "Services", pathname: routes.services },
          { name: "SEO Services", pathname: routes.seoServices },
        ]}
      />
      <SeoServicesSection />
      <CtaSection
        title={seoServicesCta.title}
        description={seoServicesCta.description}
        eyebrow=""
        primaryLabel="Get quote"
        primaryHref={routes.contact}
        secondaryLabel="Book a call"
        secondaryHref={routes.contact}
      />
    </>
  );
}
