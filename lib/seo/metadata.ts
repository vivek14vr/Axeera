import type { Metadata } from "next";

import { heroImage } from "@/lib/constants/media";
import { getSiteUrl, seoSite } from "@/lib/seo/site";

type PageMetadataInput = {
  title: string;
  description: string;
  pathname: string;
  keywords?: readonly string[];
  noIndex?: boolean;
};

function buildCanonical(pathname: string) {
  const siteUrl = getSiteUrl();
  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;

  if (normalizedPath === "/") {
    return siteUrl;
  }

  return `${siteUrl}${normalizedPath}`;
}

function buildOpenGraph({
  title,
  description,
  pathname,
}: Pick<PageMetadataInput, "title" | "description" | "pathname">): Metadata["openGraph"] {
  return {
    type: "website",
    locale: seoSite.locale,
    siteName: seoSite.legalName,
    title,
    description,
    url: buildCanonical(pathname),
    images: [
      {
        url: heroImage.src,
        alt: heroImage.alt,
      },
    ],
  };
}

function buildTwitter({
  title,
  description,
}: Pick<PageMetadataInput, "title" | "description">): Metadata["twitter"] {
  return {
    card: "summary_large_image",
    title,
    description,
  };
}

export function buildRootMetadata(): Metadata {
  const siteUrl = getSiteUrl();

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: seoSite.defaultTitle,
      template: seoSite.titleTemplate,
    },
    description: seoSite.description,
    applicationName: seoSite.name,
    keywords: [...seoSite.defaultKeywords],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    alternates: {
      canonical: siteUrl,
    },
    openGraph: {
      type: "website",
      locale: seoSite.locale,
      siteName: seoSite.legalName,
      title: seoSite.defaultTitle,
      description: seoSite.description,
      url: siteUrl,
      images: [
        {
          url: heroImage.src,
          alt: heroImage.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seoSite.defaultTitle,
      description: seoSite.description,
    },
    category: "technology",
  };
}

export function buildPageMetadata({
  title,
  description,
  pathname,
  keywords,
  noIndex = false,
}: PageMetadataInput): Metadata {
  const canonical = buildCanonical(pathname);

  return {
    title: pathname === "/" ? { absolute: title } : title,
    description,
    keywords: keywords ? [...keywords, ...seoSite.defaultKeywords] : [...seoSite.defaultKeywords],
    alternates: {
      canonical,
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
        },
    openGraph: buildOpenGraph({ title, description, pathname }),
    twitter: buildTwitter({ title, description }),
  };
}
