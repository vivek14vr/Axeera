"use client";

import type { ReactNode } from "react";

import { ScrollSection } from "@/components/motion/scroll-section";
import { Container } from "@/components/ui/container";
import { MediaFrame } from "@/components/ui/media-frame";
import { SectionHeading } from "@/components/ui/section-heading";
import type { MediaImage } from "@/lib/constants/media";
import type { MarketingSectionIntro } from "@/types/marketing";

type PageHeroSectionProps = MarketingSectionIntro & {
  align?: "left" | "center";
  image?: MediaImage;
  imageAspect?: "video" | "square" | "portrait" | "wide";
  priority?: boolean;
  titleAs?: "h1" | "h2";
  children?: ReactNode;
};

export function PageHeroSection({
  eyebrow,
  title,
  description,
  align = "left",
  image,
  imageAspect = "video",
  priority = false,
  titleAs = "h1",
  children,
}: PageHeroSectionProps) {
  const heading = (
    <SectionHeading
      eyebrow={eyebrow}
      title={title}
      description={description}
      align={align}
      titleAs={titleAs}
      className={align === "center" ? "max-w-4xl" : "max-w-4xl"}
    />
  );

  if (!image) {
    return (
      <ScrollSection className="py-20 sm:py-24">
        <Container>
          {heading}
          {children}
        </Container>
      </ScrollSection>
    );
  }

  if (align === "center") {
    return (
      <ScrollSection className="py-20 sm:py-24">
        <Container>
          {heading}
          <MediaFrame
            src={image.src}
            alt={image.alt}
            aspect="wide"
            priority={priority}
            className="mt-10"
            sizes="100vw"
          />
          {children}
        </Container>
      </ScrollSection>
    );
  }

  return (
    <ScrollSection className="py-20 sm:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            {heading}
            {children}
          </div>
          <MediaFrame
            src={image.src}
            alt={image.alt}
            aspect={imageAspect}
            priority={priority}
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="w-full lg:aspect-[5/6] lg:max-h-[26rem] xl:max-h-[28rem]"
          />
        </div>
      </Container>
    </ScrollSection>
  );
}
