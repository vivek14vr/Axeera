import Image from "next/image";

import { cn } from "@/lib/utils/cn";

type MediaFrameProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  aspect?: "video" | "square" | "portrait" | "wide";
  sizes?: string;
};

const aspectClasses = {
  video: "aspect-[16/10]",
  square: "aspect-square",
  portrait: "aspect-[4/5]",
  wide: "aspect-[21/9]",
};

export function MediaFrame({
  src,
  alt,
  className,
  imageClassName,
  priority = false,
  aspect = "video",
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: MediaFrameProps) {
  return (
    <div
      className={cn(
        "glass-surface relative overflow-hidden rounded-3xl",
        aspectClasses[aspect],
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={cn("object-cover", imageClassName)}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-background/35 via-transparent to-white/10"
      />
    </div>
  );
}
