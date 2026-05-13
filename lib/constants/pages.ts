import type { Metadata } from "next";

import { routes } from "@/lib/constants/routes";
import { buildPageMetadata } from "@/lib/seo/metadata";

type PageKey =
  | "home"
  | "about"
  | "services"
  | "pricing"
  | "portfolio"
  | "contact";

const pageMetadata: Record<PageKey, Metadata> = {
  home: buildPageMetadata({
    title: "Axeera Tech. | Digital Studio for Service Brands",
    description:
      "Axeera Tech. designs and builds premium websites, mobile apps, and SEO growth programs for service-led companies.",
    pathname: routes.home,
    keywords: [
      "website development agency",
      "app development studio",
      "SEO agency",
      "service business websites",
    ],
  }),
  about: buildPageMetadata({
    title: "About us",
    description:
      "Learn how Axeera Tech. helps service businesses launch premium websites, apps, and growth programs with transparent delivery and measurable outcomes.",
    pathname: routes.about,
    keywords: ["about Axeera", "digital studio team", "service business agency"],
  }),
  services: buildPageMetadata({
    title: "Services",
    description:
      "Explore website development, app development, SEO, UI/UX design, brand identity, and cloud support tailored for service brands.",
    pathname: routes.services,
    keywords: [
      "website development services",
      "mobile app development services",
      "SEO services",
      "UI UX design services",
    ],
  }),
  pricing: buildPageMetadata({
    title: "Pricing",
    description:
      "Compare transparent starting points for website development, SEO retainers, and app development projects from Axeera Tech.",
    pathname: routes.pricing,
    keywords: ["website pricing", "SEO pricing", "app development pricing"],
  }),
  portfolio: buildPageMetadata({
    title: "Portfolio",
    description:
      "See selected website launches, app builds, and SEO growth programs delivered for service-led companies by Axeera Tech.",
    pathname: routes.portfolio,
    keywords: ["digital agency portfolio", "website case studies", "SEO case studies"],
  }),
  contact: buildPageMetadata({
    title: "Contact us",
    description:
      "Contact Axeera Tech. to discuss your website, app, or SEO goals and receive a clear plan, timeline, and next steps.",
    pathname: routes.contact,
    keywords: ["contact Axeera", "get a website quote", "SEO consultation"],
  }),
};

export function createPageMetadata(page: PageKey): Metadata {
  return pageMetadata[page];
}

export function createSubpageMetadata(
  title: string,
  description: string,
  pathname: string,
  keywords?: readonly string[],
): Metadata {
  return buildPageMetadata({
    title,
    description,
    pathname,
    keywords,
  });
}
