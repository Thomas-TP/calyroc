"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { type ReactNode, useEffect, useRef } from "react";

// Subtle attraction toward the cursor on primary CTAs only -- capped
// displacement and spring physics keep it from feeling loose, and it's a
// no-op under prefers-reduced-motion or on touch devices.
//
// Tracks pointer position via a single window-level listener rather than
// the element's own onMouseEnter/onMouseLeave: React's synthetic
// mouseleave reconciliation proved unreliable on this transform-animated,
// fixed-position element (native mouseleave fires, but the synthetic
// handler didn't consistently run) -- computing inside/outside bounds
// from a global pointermove sidesteps that entirely.
const STRENGTH = 0.3;
const MAX_OFFSET = 10;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function MagneticButton({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 300, damping: 20, mass: 0.5 });

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    function handlePointerMove(event: PointerEvent) {
      if (!ref.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }
      const rect = ref.current.getBoundingClientRect();
      const inside =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;
      if (inside) {
        x.set(
          clamp((event.clientX - (rect.left + rect.width / 2)) * STRENGTH, -MAX_OFFSET, MAX_OFFSET),
        );
        y.set(
          clamp((event.clientY - (rect.top + rect.height / 2)) * STRENGTH, -MAX_OFFSET, MAX_OFFSET),
        );
      } else {
        x.set(0);
        y.set(0);
      }
    }

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [x, y]);

  return (
    <motion.span
      ref={ref}
      style={{ x: springX, y: springY }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.span>
  );
}
