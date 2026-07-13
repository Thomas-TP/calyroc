"use client";

import { usePathname } from "next/navigation";
import { TransitionLink as Link } from "@/components/TransitionLink";
import { getDictionary } from "@/i18n/dictionary";
import { isLocale } from "@/i18n/locales";

export default function NotFound() {
  const pathname = usePathname();
  const segment = pathname?.split("/")[1];
  const locale = segment && isLocale(segment) ? segment : "fr";
  const { notFoundPage } = getDictionary(locale);

  return (
    <section className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-6 pt-24 text-center">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-bronze/10 blur-3xl"
      />
      <img
        src="/logo.png"
        alt="Calyroc"
        width={160}
        height={44}
        className="relative h-10 w-auto opacity-90"
      />
      <p className="relative mt-6 font-display text-xs font-medium uppercase tracking-[0.25em] text-bronze">
        {notFoundPage.eyebrow}
      </p>
      <h1 className="relative mt-4 font-display text-4xl font-bold tracking-tight text-paper md:text-5xl">
        {notFoundPage.title}
      </h1>
      <p className="relative mt-4 max-w-md text-stone">{notFoundPage.subtitle}</p>
      <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link href={`/${locale}/`} className="btn-primary">
          {notFoundPage.ctaHome}
        </Link>
        <Link href={`/${locale}/contact`} className="btn-secondary">
          {notFoundPage.ctaContact}
        </Link>
      </div>
    </section>
  );
}
