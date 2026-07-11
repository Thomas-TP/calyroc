"use client";

import { motion } from "motion/react";
import { Reveal } from "@/components/Reveal";
import type { Dictionary } from "@/i18n/dictionary";

const lineDraw = {
  initial: { scaleX: 0, scaleY: 0 },
  whileInView: { scaleX: 1, scaleY: 1 },
  viewport: { once: true, margin: "-100px" } as const,
  transition: { duration: 1.1, ease: "easeOut" as const, delay: 0.1 },
};

export function HomeProcess({ dictionary }: { dictionary: Dictionary }) {
  const { processEyebrow, processTitle, processSteps } = dictionary.home;

  return (
    <section className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
      <Reveal>
        <p className="text-eyebrow">{processEyebrow}</p>
        <h2 className="text-display-md mt-4 max-w-2xl text-balance text-paper">{processTitle}</h2>
      </Reveal>

      <div className="relative mt-16">
        {/* Vertical rail — mobile only */}
        <div className="absolute bottom-4 left-4 top-4 w-px bg-paper/10 md:hidden">
          <motion.div
            {...lineDraw}
            style={{ transformOrigin: "top" }}
            className="h-full w-full bg-bronze"
          />
        </div>

        {/* Horizontal rail — desktop only, centered through the node circles */}
        <div className="absolute left-0 right-0 top-4 hidden h-px bg-paper/10 md:block">
          <motion.div
            {...lineDraw}
            style={{ transformOrigin: "left" }}
            className="h-full w-full bg-bronze"
          />
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6">
          {processSteps.map((step, index) => (
            <Reveal key={step.title} delay={0.3 + index * 0.12}>
              <div className="relative pl-12 md:pl-0">
                <span className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border border-bronze bg-onyx font-display text-xs font-bold text-bronze md:static md:mb-5">
                  {index + 1}
                </span>
                <h3 className="font-display text-base font-bold text-paper">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
