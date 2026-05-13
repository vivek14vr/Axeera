import type { NavItem } from "@/types/navigation";

import { routes } from "@/lib/constants/routes";

export const primaryNavigation: NavItem[] = [
  { label: "Home", href: routes.home },
  {
    label: "About us",
    href: routes.about,
    items: [{ label: "Our story", href: routes.aboutOurStory }],
  },
  {
    label: "Service",
    href: routes.services,
    items: [
      { label: "SEO services", href: routes.seoServices },
      { label: "Website development", href: routes.websiteDevelopment },
      { label: "Software development", href: routes.softwareDevelopment },
      { label: "Mobile app development", href: routes.mobileAppDevelopment },
    ],
  },
  {
    label: "Pricing",
    href: routes.pricing,
    items: [
      { label: "SEO pricing", href: routes.seoPricing },
      { label: "Website pricing", href: routes.websitePricing },
      { label: "App development pricing", href: routes.appDevelopmentPricing },
    ],
  },
  { label: "Portfolio", href: routes.portfolio },
  { label: "Contact us", href: routes.contact },
];
