import { routes } from "@/lib/constants/routes";

export const footerQuickLinks = [
  { label: "Home", href: routes.home },
  { label: "About us", href: routes.about },
  { label: "Our story", href: routes.aboutOurStory },
  { label: "Portfolio", href: routes.portfolio },
  { label: "Contact us", href: routes.contact },
] as const;

export const footerServiceLinks = [
  { label: "SEO services", href: routes.seoServices },
  { label: "Website development", href: routes.websiteDevelopment },
  { label: "Software development", href: routes.softwareDevelopment },
  { label: "Mobile app development", href: routes.mobileAppDevelopment },
  { label: "Pricing", href: routes.pricing },
] as const;
