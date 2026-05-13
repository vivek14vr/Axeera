import type { Metadata } from "next";

import { ContactMapSection } from "@/components/sections/contact/contact-map-section";
import { ContactSection } from "@/components/sections/contact/contact-section";
import { createPageMetadata } from "@/lib/constants/pages";

export const metadata: Metadata = createPageMetadata("contact");

export default function ContactPage() {
  return (
    <>
      <ContactSection />
      <ContactMapSection />
    </>
  );
}
