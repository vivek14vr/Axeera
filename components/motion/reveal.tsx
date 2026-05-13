"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

import { framerDuration, framerEase } from "@/components/motion/presets";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: framerDuration, delay, ease: framerEase }}
    >
      {children}
    </motion.div>
  );
}
