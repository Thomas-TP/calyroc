"use client";

import { usePathname } from "next/navigation";
import { TransitionLink as Link } from "@/components/TransitionLink";
import { isLocale } from "@/i18n/locales";

export default function NotFound() {
  const pathname = usePathname();
  const segment = pathname?.split("/")[1];
  const locale = segment && isLocale(segment) ? segment : "fr";

  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-24 text-center">
      <p className="font-display text-xs font-medium uppercase tracking-[0.25em] text-bronze">
        404
      </p>
      <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-paper md:text-5xl">
        Page introuvable
      </h1>
      <p className="mt-4 max-w-md text-stone">
        Cette page n'existe pas. / This page doesn't exist.
      </p>
      <Link href={`/${locale}/`} className="btn-primary mt-8">
        Retour à l'accueil / Back home
      </Link>
    </section>
  );
}
