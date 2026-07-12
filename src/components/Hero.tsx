"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { MagneticButton } from "@/components/MagneticButton";
import type { Dictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/locales";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const, delay },
});

export function Hero({ dictionary, locale }: { dictionary: Dictionary; locale: Locale }) {
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 pt-24 text-center">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-bronze/20 blur-[140px]"
        animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <div className="relative z-10 flex max-w-5xl flex-col items-center">
        <motion.p {...fadeUp(0)} className="text-eyebrow mb-6">
          {dictionary.home.eyebrow}
        </motion.p>

        <motion.h1 {...fadeUp(0.1)} className="text-display-xl text-balance text-paper">
          {dictionary.home.heroTitle}
        </motion.h1>

        <motion.p
          {...fadeUp(0.22)}
          className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-stone md:mt-8 md:text-xl"
        >
          {dictionary.home.heroSubtitle}
        </motion.p>

        <motion.div
          {...fadeUp(0.34)}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton>
            <Link href={`/${locale}/contact`} className="btn-primary">
              {dictionary.home.ctaPrimary}
            </Link>
          </MagneticButton>
          <Link href={`/${locale}/realisations`} className="btn-secondary">
            {dictionary.home.ctaSecondary}
          </Link>
        </motion.div>

        <motion.p {...fadeUp(0.46)} className="mt-6 text-sm text-stone">
          {dictionary.home.trustLine}
        </motion.p>
      </div>

      <motion.div
        aria-hidden
        className="absolute bottom-10 flex flex-col items-center gap-2 text-stone"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2.4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <span className="h-10 w-px bg-current" />
      </motion.div>
    </section>
  );
}
