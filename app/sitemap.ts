import type { MetadataRoute } from "next";

import { routes } from "@/lib/constants/routes";
import { getSiteUrl } from "@/lib/seo/site";

const routePriorities: Partial<Record<(typeof routes)[keyof typeof routes], number>> = {
  [routes.home]: 1,
  [routes.services]: 0.9,
  [routes.seoServices]: 0.9,
  [routes.websiteDevelopment]: 0.9,
  [routes.softwareDevelopment]: 0.85,
  [routes.mobileAppDevelopment]: 0.85,
  [routes.pricing]: 0.85,
  [routes.websitePricing]: 0.85,
  [routes.seoPricing]: 0.85,
  [routes.appDevelopmentPricing]: 0.85,
  [routes.portfolio]: 0.8,
  [routes.about]: 0.8,
  [routes.contact]: 0.8,
  [routes.aboutOurStory]: 0.7,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const lastModified = new Date();

  return Object.values(routes).map((pathname) => ({
    url: `${siteUrl}${pathname === "/" ? "" : pathname}`,
    lastModified,
    changeFrequency: pathname === routes.home ? "weekly" : "monthly",
    priority: routePriorities[pathname] ?? 0.7,
  }));
}
