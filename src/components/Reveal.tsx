"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

type RevealVariant = "up" | "scale" | "left" | "right";

// A few distinct entrance shapes so a 9-page site doesn't read as the same
// fade-up block repeated everywhere -- "up" for sequential text (headings,
// single CTAs), "scale" for grid/card layouts, "left"/"right" for stacked
// list items that benefit from alternating.
const variants: Record<
  RevealVariant,
  { initial: Record<string, number>; animate: Record<string, number> }
> = {
  up: { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } },
  scale: { initial: { opacity: 0, scale: 0.94 }, animate: { opacity: 1, scale: 1 } },
  left: { initial: { opacity: 0, x: -28 }, animate: { opacity: 1, x: 0 } },
  right: { initial: { opacity: 0, x: 28 }, animate: { opacity: 1, x: 0 } },
};

export function Reveal({
  children,
  delay = 0,
  variant = "up",
}: {
  children: ReactNode;
  delay?: number;
  variant?: RevealVariant;
}) {
  const { initial, animate } = variants[variant];
  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
