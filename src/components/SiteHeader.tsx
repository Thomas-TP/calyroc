"use client";

import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CustomSelect } from "@/components/CustomSelect";
import { ThemeToggle } from "@/components/ThemeToggle";
import { TransitionLink as Link } from "@/components/TransitionLink";
import type { Dictionary } from "@/i18n/dictionary";
import { type Locale, locales } from "@/i18n/locales";

const MotionLink = motion.create(Link);

export function SiteHeader({ locale, dictionary }: { locale: Locale; dictionary: Dictionary }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

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
    { href: `/${locale}/a-propos`, label: dictionary.nav.about },
    { href: `/${locale}/contact`, label: dictionary.nav.contact },
  ];

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-paper/8 bg-onyx/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10">
          <Link
            href={`/${locale}/`}
            className="flex items-center gap-2.5 font-display text-lg font-bold tracking-tight text-paper"
          >
            <img src="/logo-icon.png" alt="" width={28} height={28} className="h-7 w-7" />
            Calyroc
          </Link>

          <nav className="hidden items-center gap-8 font-display text-sm md:flex">
            {navLinks.slice(0, 4).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors hover:text-paper ${
                  pathname === item.href ? "text-paper" : "text-stone"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <ThemeToggle
              labelToLight={dictionary.nav.themeToLight}
              labelToDark={dictionary.nav.themeToDark}
            />
            <LocaleSwitcher locale={locale} />
            <Link href={`/${locale}/contact`} className="btn-primary !px-5 !py-2.5 text-xs">
              {dictionary.nav.contact}
            </Link>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle
              labelToLight={dictionary.nav.themeToLight}
              labelToDark={dictionary.nav.themeToDark}
            />
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="font-display text-xs font-medium uppercase tracking-[0.2em] text-paper"
            >
              Menu
            </button>
          </div>
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
              <Link
                href={`/${locale}/`}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2.5 font-display text-lg font-bold text-paper"
              >
                <img src="/logo-icon.png" alt="" width={28} height={28} className="h-7 w-7" />
                Calyroc
              </Link>
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
                <MotionLink
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.08 + index * 0.06, ease: "easeOut" }}
                  className="border-b border-paper/8 py-4 font-display text-4xl font-bold tracking-tight text-paper transition-colors active:text-bronze"
                >
                  {item.label}
                </MotionLink>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="flex items-center justify-between px-6 py-6"
            >
              <div className="flex items-center gap-3">
                <LocaleSwitcher locale={locale} variant="menu" />
                <ThemeToggle
                  labelToLight={dictionary.nav.themeToLight}
                  labelToDark={dictionary.nav.themeToDark}
                />
              </div>
              <span className="text-xs text-stone">calyroc.com</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const localeOptions = locales.map((code) => ({ value: code, label: code.toUpperCase() }));

function LocaleSwitcher({
  locale,
  variant = "header",
}: {
  locale: Locale;
  variant?: "header" | "menu";
}) {
  return (
    <CustomSelect
      options={localeOptions}
      value={locale}
      onChange={(next) => {
        window.location.href = `/${next}/`;
      }}
      ariaLabel="Language"
      panelAlign={variant === "header" ? "right" : "left"}
      triggerClassName={
        variant === "header"
          ? "px-2.5 py-1.5 font-display text-xs uppercase tracking-wide"
          : "px-3.5 py-2.5 font-display text-sm uppercase tracking-wide"
      }
    />
  );
}
