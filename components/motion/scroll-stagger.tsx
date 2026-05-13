"use client";

import type { ReactNode } from "react";

type ScrollStaggerGroupProps = {
  children: ReactNode;
  className?: string;
};

type ScrollStaggerItemProps = {
  children: ReactNode;
  className?: string;
};

export function ScrollStaggerGroup({ children, className }: ScrollStaggerGroupProps) {
  return <div className={className}>{children}</div>;
}

export function ScrollStaggerItem({ children, className }: ScrollStaggerItemProps) {
  return <div className={className}>{children}</div>;
}
