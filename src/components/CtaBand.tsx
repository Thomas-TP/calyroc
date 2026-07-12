import Link from "next/link";
import { MagneticButton } from "@/components/MagneticButton";
import { Reveal } from "@/components/Reveal";
import type { Dictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/locales";

export function CtaBand({ dictionary, locale }: { dictionary: Dictionary; locale: Locale }) {
  return (
    <section className="border-t border-paper/8 px-6 py-24 md:px-10 md:py-32">
      <Reveal>
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <h2 className="text-balance font-display text-3xl font-bold tracking-tight text-paper md:text-5xl">
            {dictionary.home.ctaBandTitle}
          </h2>
          <p className="mt-4 max-w-xl text-balance text-lg text-stone">
            {dictionary.home.ctaBandSubtitle}
          </p>
          <MagneticButton className="mt-8">
            <Link href={`/${locale}/contact`} className="btn-primary">
              {dictionary.home.ctaBandLabel}
            </Link>
          </MagneticButton>
        </div>
      </Reveal>
    </section>
  );
}
