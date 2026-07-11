"use client";

import { useState } from "react";
import type { Dictionary } from "@/i18n/dictionary";
import { type Locale, locales } from "@/i18n/locales";

export function SiteHeader({ locale, dictionary }: { locale: Locale; dictionary: Dictionary }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-paper/8 bg-onyx/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10">
        <a
          href={`/${locale}/`}
          className="font-display text-lg font-bold tracking-tight text-paper"
        >
          Calyroc
        </a>

        <nav className="hidden items-center gap-8 font-display text-sm text-stone md:flex">
          <a href={`/${locale}/services`} className="transition-colors hover:text-paper">
            {dictionary.nav.services}
          </a>
          <a href={`/${locale}/realisations`} className="transition-colors hover:text-paper">
            {dictionary.nav.work}
          </a>
          <a href={`/${locale}/tarifs`} className="transition-colors hover:text-paper">
            {dictionary.nav.pricing}
          </a>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <LocaleSwitcher locale={locale} />
          <a href={`/${locale}/contact`} className="btn-primary !px-5 !py-2.5 text-xs">
            {dictionary.nav.contact}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((value) => !value)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`block h-px w-5 bg-paper transition-transform ${mobileOpen ? "translate-y-[3px] rotate-45" : ""}`}
          />
          <span
            className={`block h-px w-5 bg-paper transition-transform ${mobileOpen ? "-translate-y-[3px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-paper/8 px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-5 font-display text-base text-paper">
            <a href={`/${locale}/services`} onClick={() => setMobileOpen(false)}>
              {dictionary.nav.services}
            </a>
            <a href={`/${locale}/realisations`} onClick={() => setMobileOpen(false)}>
              {dictionary.nav.work}
            </a>
            <a href={`/${locale}/tarifs`} onClick={() => setMobileOpen(false)}>
              {dictionary.nav.pricing}
            </a>
            <a href={`/${locale}/contact`} className="btn-primary mt-2 !py-3 text-center">
              {dictionary.nav.contact}
            </a>
          </nav>
          <div className="mt-6 border-t border-paper/8 pt-6">
            <LocaleSwitcher locale={locale} />
          </div>
        </div>
      )}
    </header>
  );
}

function LocaleSwitcher({ locale }: { locale: Locale }) {
  return (
    <select
      defaultValue={locale}
      aria-label="Language"
      className="rounded border border-paper/12 bg-transparent px-2 py-1.5 font-display text-xs uppercase tracking-wide text-stone outline-none transition-colors hover:border-paper/30 hover:text-paper"
      onChange={(event) => {
        window.location.href = `/${event.target.value}/`;
      }}
    >
      {locales.map((code) => (
        <option key={code} value={code} className="bg-onyx text-paper">
          {code.toUpperCase()}
        </option>
      ))}
    </select>
  );
}
