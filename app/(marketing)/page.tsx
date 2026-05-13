import type { Metadata } from "next";

import { HeroSection } from "@/components/sections/home/hero-section";
import { ProcessPreviewSection } from "@/components/sections/home/process-preview-section";
import { ServicesPreviewSection } from "@/components/sections/home/services-preview-section";
import { TestimonialsSection } from "@/components/sections/home/testimonials-section";
import { WhyUsSection } from "@/components/sections/home/why-us-section";
import { WorkPreviewSection } from "@/components/sections/home/work-preview-section";
import { CtaSection } from "@/components/sections/shared/cta-section";
import { createPageMetadata } from "@/lib/constants/pages";

export const metadata: Metadata = createPageMetadata("home");

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesPreviewSection />
      <WhyUsSection />
      <ProcessPreviewSection />
      <WorkPreviewSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
