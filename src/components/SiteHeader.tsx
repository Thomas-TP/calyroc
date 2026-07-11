"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import type { Dictionary } from "@/i18n/dictionary";
import { type Locale, locales } from "@/i18n/locales";

export function SiteHeader({ locale, dictionary }: { locale: Locale; dictionary: Dictionary }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const navLinks = [
    { href: `/${locale}/services`, label: dictionary.nav.services },
    { href: `/${locale}/realisations`, label: dictionary.nav.work },
    { href: `/${locale}/tarifs`, label: dictionary.nav.pricing },
    { href: `/${locale}/contact`, label: dictionary.nav.contact },
  ];

  return (
    <>
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
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className="font-display text-xs font-medium uppercase tracking-[0.2em] text-paper md:hidden"
          >
            Menu
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex flex-col bg-onyx md:hidden"
          >
            <div className="flex items-center justify-between border-b border-paper/8 px-6 py-5">
              <a
                href={`/${locale}/`}
                onClick={() => setMobileOpen(false)}
                className="font-display text-lg font-bold text-paper"
              >
                Calyroc
              </a>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="font-display text-2xl text-paper"
              >
                ✕
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center gap-1 px-6">
              {navLinks.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.08 + index * 0.06, ease: "easeOut" }}
                  className="border-b border-paper/8 py-4 font-display text-4xl font-bold tracking-tight text-paper transition-colors active:text-bronze"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="flex items-center justify-between px-6 py-6"
            >
              <LocaleSwitcher locale={locale} />
              <span className="text-xs text-stone">calyroc.com</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
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
