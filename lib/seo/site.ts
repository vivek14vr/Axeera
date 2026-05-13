import { siteConfig } from "@/lib/constants/site";

const DEFAULT_SITE_URL = "https://www.axeera.studio";

export function getSiteUrl() {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.SITE_URL ??
    process.env.VERCEL_URL ??
    DEFAULT_SITE_URL;

  const withProtocol = raw.startsWith("http") ? raw : `https://${raw}`;

  return withProtocol.replace(/\/$/, "");
}

export const seoSite = {
  name: siteConfig.name,
  legalName: "Axeera Studio",
  titleTemplate: "%s | Axeera Tech.",
  defaultTitle: "Axeera Tech. | Digital Studio for Service Brands",
  description: siteConfig.description,
  locale: "en_US",
  email: siteConfig.email,
  phone: siteConfig.phone,
  defaultKeywords: [
    "Axeera",
    "digital studio",
    "website development",
    "app development",
    "SEO services",
    "UI UX design",
    "service business marketing",
  ],
} as const;
