import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";

import { SiteShell } from "@/components/layout/site-shell";
import { StructuredData } from "@/components/seo/structured-data";
import { getOrganizationJsonLd, getWebSiteJsonLd } from "@/lib/seo/json-ld";
import { buildRootMetadata } from "@/lib/seo/metadata";

import "./globals.css";

const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const displayFont = Sora({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = buildRootMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${displayFont.variable} h-full scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full overflow-x-hidden bg-background text-foreground"
        suppressHydrationWarning
      >
        <StructuredData data={[getOrganizationJsonLd(), getWebSiteJsonLd()]} />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
