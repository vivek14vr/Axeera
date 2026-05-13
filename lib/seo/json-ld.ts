import { contactLocations } from "@/lib/constants/contact";
import { routes } from "@/lib/constants/routes";
import { getSiteUrl, seoSite } from "@/lib/seo/site";

function absoluteUrl(pathname: string) {
  const siteUrl = getSiteUrl();
  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;

  if (normalizedPath === "/") {
    return siteUrl;
  }

  return `${siteUrl}${normalizedPath}`;
}

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: seoSite.legalName,
    alternateName: seoSite.name,
    url: absoluteUrl(routes.home),
    email: seoSite.email,
    telephone: seoSite.phone,
    description: seoSite.description,
    areaServed: contactLocations.map((location) => location.value),
    sameAs: [],
  };
}

export function getWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: seoSite.legalName,
    url: absoluteUrl(routes.home),
    description: seoSite.description,
    inLanguage: "en-US",
    publisher: {
      "@type": "Organization",
      name: seoSite.legalName,
      url: absoluteUrl(routes.home),
    },
  };
}

export function getProfessionalServiceJsonLd({
  name,
  description,
  pathname,
}: {
  name: string;
  description: string;
  pathname: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name,
    description,
    url: absoluteUrl(pathname),
    provider: {
      "@type": "Organization",
      name: seoSite.legalName,
      url: absoluteUrl(routes.home),
    },
    areaServed: contactLocations.map((location) => location.value),
    serviceType: name,
  };
}

export function getBreadcrumbJsonLd(items: readonly { name: string; pathname: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.pathname),
    })),
  };
}
