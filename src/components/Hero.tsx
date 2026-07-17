"use client";

import { motion } from "motion/react";
import { MagneticButton } from "@/components/MagneticButton";
import { TransitionLink as Link } from "@/components/TransitionLink";
import type { Dictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/locales";
import { localizedSlugs } from "@/i18n/routes";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const, delay },
});

// Same slide, no fade: Chrome ignores opacity:0 paints when picking the LCP
// candidate, so a headline that fades in from invisible gets its LCP timing
// pushed back by the animation's own delay + duration. The H1 is this page's
// LCP element, so it slides into place already fully opaque instead --
// everything else keeps the regular fadeUp since only the LCP element's
// paint timing is actually measured. See
// https://www.debugbear.com/blog/opacity-animation-poor-lcp
const slideUp = (delay: number) => ({
  initial: { y: 20 },
  animate: { y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const, delay },
});

export function Hero({ dictionary, locale }: { dictionary: Dictionary; locale: Locale }) {
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center overflow-hidden px-6 pb-8 pt-24 text-center">
      {/* The blur lives on a static inner layer and the animation (scale +
          opacity) on a promoted outer wrapper -- animating scale directly on
          a blurred element forces the browser to re-rasterize the blur every
          frame. Promoting the wrapper instead lets the GPU cache the blurred
          texture once and cheaply transform that cache each frame, same
          visual result. See https://developer.chrome.com/blog/animated-blur */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2"
        style={{ willChange: "transform, opacity" }}
        animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <div className="h-full w-full rounded-full bg-bronze/20 blur-[140px]" />
      </motion.div>

      {/* Centered content and the scroll hint are separate flex children
          (flex-1 + a normal-flow sibling below) instead of the hint being
          absolutely positioned over the content -- on shorter viewports the
          old absolute placement could land mid-text (e.g. across the trust
          line) since the two never coordinated space with each other. */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center">
        <div className="flex max-w-5xl flex-col items-center">
          <motion.p {...fadeUp(0)} className="text-eyebrow mb-6">
            {dictionary.home.eyebrow}
          </motion.p>

          <motion.h1 {...slideUp(0.1)} className="text-display-xl text-balance text-paper">
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
            <Link
              href={`/${locale}/${localizedSlugs.realisations[locale]}`}
              className="btn-secondary"
            >
              {dictionary.home.ctaSecondary}
            </Link>
          </motion.div>

          <motion.p {...fadeUp(0.46)} className="mt-6 text-sm text-stone">
            {dictionary.home.trustLine}
          </motion.p>
        </div>
      </div>

      <ScrollHint label={dictionary.home.scrollHint} />
    </section>
  );
}

// A clickable "mouse wheel" hint: the dot loops down the track to read as
// scroll motion at a glance, and clicking it actually scrolls -- an
// affordance, not just decoration. Sits in normal flow below the centered
// content block (see above) so it can never land on top of page text.
function ScrollHint({ label }: { label: string }) {
  function handleClick() {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  }

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      aria-label={label}
      {...fadeUp(0.6)}
      className="group relative z-10 mt-6 flex flex-col items-center gap-2 text-stone transition-colors hover:text-bronze focus-visible:text-bronze"
    >
      <motion.span
        className="flex h-9 w-6 items-start justify-center rounded-full border border-current p-1.5"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <motion.span
          className="h-1.5 w-1.5 rounded-full bg-current"
          animate={{ y: [0, 10, 0], opacity: [1, 0.2, 1] }}
          transition={{ duration: 1.6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </motion.span>
    </motion.button>
  );
}
