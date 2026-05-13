"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

import {
  framerDuration,
  framerEase,
  scrollEnterY,
  scrollViewport,
} from "@/components/motion/presets";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function ScrollReveal({
  children,
  className,
  delay = 0,
}: ScrollRevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: scrollEnterY }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={scrollViewport}
      transition={{ duration: framerDuration, delay, ease: framerEase }}
    >
      {children}
    </motion.div>
  );
}
