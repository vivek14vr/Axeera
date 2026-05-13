import { StructuredData } from "@/components/seo/structured-data";
import { getBreadcrumbJsonLd, getProfessionalServiceJsonLd } from "@/lib/seo/json-ld";

type MarketingPageJsonLdProps = {
  title: string;
  description: string;
  pathname: string;
  breadcrumb: readonly { name: string; pathname: string }[];
};

export function MarketingPageJsonLd({
  title,
  description,
  pathname,
  breadcrumb,
}: MarketingPageJsonLdProps) {
  return (
    <StructuredData
      data={[
        getProfessionalServiceJsonLd({ name: title, description, pathname }),
        getBreadcrumbJsonLd(breadcrumb),
      ]}
    />
  );
}
