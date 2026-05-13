export const routes = {
  home: "/",
  about: "/about",
  aboutOurStory: "/about/our-story",
  services: "/services",
  seoServices: "/services/seo",
  websiteDevelopment: "/services/website-development",
  softwareDevelopment: "/services/software-development",
  mobileAppDevelopment: "/services/mobile-app-development",
  pricing: "/pricing",
  seoPricing: "/pricing/seo",
  websitePricing: "/pricing/website",
  appDevelopmentPricing: "/pricing/app-development",
  portfolio: "/portfolio",
  contact: "/contact",
} as const;

export type AppRoute = (typeof routes)[keyof typeof routes];
