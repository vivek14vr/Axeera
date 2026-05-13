"use client";

import type { ReactNode } from "react";

type ScrollSectionProps = {
  children: ReactNode;
  className?: string;
};

export function ScrollSection({ children, className }: ScrollSectionProps) {
  return <section className={className}>{children}</section>;
}
