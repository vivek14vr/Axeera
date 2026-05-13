import type { ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-[var(--content-max-width)] px-5 sm:px-8", className)}>
      {children}
    </div>
  );
}
