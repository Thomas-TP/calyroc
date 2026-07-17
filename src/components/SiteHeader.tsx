"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { CustomSelect } from "@/components/CustomSelect";
import { NavDropdown } from "@/components/NavDropdown";
import { ThemeToggle } from "@/components/ThemeToggle";
import { TransitionLink as Link } from "@/components/TransitionLink";
import type { Dictionary } from "@/i18n/dictionary";
import { type Locale, locales } from "@/i18n/locales";
import { localizedSlugs } from "@/i18n/routes";

const MotionLink = motion.create(Link);

// Three transform/opacity-only bars (no layout properties) morphing between
// hamburger and X, spring-driven. Matches ThemeToggle's circular icon-button
// treatment (h-9 w-9, rounded-full border, hover:border-bronze/50) instead
// of the old plain text label, so the two adjacent mobile-header controls
// read as one coherent pair. Reused for both the header's trigger and the
// open overlay's close button -- one component, one motion identity, rather
// than a static "✕" character that didn't match anything else on the page.
function MobileMenuToggle({
  open,
  onClick,
  labelOpen,
  labelClose,
}: {
  open: boolean;
  onClick: () => void;
  labelOpen: string;
  labelClose: string;
}) {
  // Captured once at mount and never recomputed, unlike `open` itself.
  // This button is reused in two shapes: the header's copy stays mounted
  // for the page's whole lifetime (mounts closed, later re-renders open),
  // while the overlay's copy mounts fresh every time the menu opens
  // (mounts already open). `initial` needs to reflect whichever of those
  // this instance was actually born into so Framer has a real "from" state
  // to spring away from -- recomputing it from the live `open` value on
  // every render made Framer treat each render as if it were a fresh,
  // already-at-rest mount, which silently skipped the header copy's
  // open/close transition entirely.
  const [mountedOpen] = useState(open);

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={open ? labelClose : labelOpen}
      aria-expanded={open}
      className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-paper/15 text-paper transition-colors hover:border-bronze/50"
    >
      <span className="relative flex h-3.5 w-4 flex-col justify-between">
        <motion.span
          className="h-px w-full origin-center rounded-full bg-current"
          initial={mountedOpen ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
          animate={open ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
          transition={{ type: "spring", stiffness: 380, damping: 26 }}
        />
        <motion.span
          className="h-px w-full rounded-full bg-current"
          initial={{ opacity: mountedOpen ? 0 : 1, x: mountedOpen ? 6 : 0 }}
          animate={{ opacity: open ? 0 : 1, x: open ? 6 : 0 }}
          transition={{ duration: 0.15 }}
        />
        <motion.span
          className="h-px w-full origin-center rounded-full bg-current"
          initial={mountedOpen ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
          animate={open ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
          transition={{ type: "spring", stiffness: 380, damping: 26 }}
        />
      </span>
    </button>
  );
}

// Matches the header's real rendered height in each state (measured: 77px
// at rest, and 12px less once scrolled since py-5 -> py-3.5 drops 12px of
// vertical padding). Used to park the progress bar right below the header.
const HEADER_HEIGHT = { resting: 77, scrolled: 65 } as const;

// Three scroll-driven behaviours, all read from Framer Motion's scrollY
// motion value rather than a raw scroll listener + useState -- scrollYProgress
// is bound straight to the progress bar's `style` below, which Framer applies
// outside React's render cycle (no re-render per scroll frame). `scrolled`
// and `hidden` are real component state because they gate discrete class/
// transform changes, but they only flip (and re-render) at their thresholds,
// not on every pixel of scroll.
function useHeaderScroll() {
  const { scrollY, scrollYProgress } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  // The progress-bar's y-offset as a motion value (not an `animate` prop):
  // mixing `animate={{ y }}` with a `style={{ scaleX: scrollYProgress }}`
  // motion-value binding on the same element doesn't compose -- Framer only
  // applied the scaleX and silently dropped the y translation. Both going
  // through `style` as motion values composes correctly into one
  // `transform`, and `useSpring` lets `.set()` still animate to the new
  // target with spring physics.
  const barY = useSpring(HEADER_HEIGHT.resting, { stiffness: 400, damping: 40 });

  useMotionValueEvent(scrollY, "change", (latest) => {
    const nextScrolled = latest > 40;
    setScrolled(nextScrolled);
    const delta = latest - lastY.current;
    let nextHidden = hidden;
    if (latest < 120) {
      nextHidden = false;
    } else if (delta > 4) {
      nextHidden = true;
    } else if (delta < -4) {
      nextHidden = false;
    }
    setHidden(nextHidden);
    barY.set(nextHidden ? 0 : nextScrolled ? HEADER_HEIGHT.scrolled : HEADER_HEIGHT.resting);
    lastY.current = latest;
  });

  return { scrolled, hidden, scrollYProgress, barY };
}

export function SiteHeader({ locale, dictionary }: { locale: Locale; dictionary: Dictionary }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);
  const pathname = usePathname();
  const { scrolled, hidden, scrollYProgress, barY } = useHeaderScroll();

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Belt-and-suspenders close, keyed off the router's own pathname rather
  // than the click that triggered it: the mobile links' own
  // onClick={() => setMobileOpen(false)} (fired in the same event as the
  // TransitionLink navigation) was observed, in testing, to sometimes not
  // stick -- the menu stayed open, blocking the destination page. Whatever
  // the exact interaction with next-view-transitions' own state updates on
  // that same click, this effect doesn't depend on it: it just closes the
  // menu whenever the URL actually changes, which is the outcome that
  // matters and is driven by the router's own authoritative state.
  const previousPathname = useRef(pathname);
  useEffect(() => {
    if (previousPathname.current !== pathname) {
      setMobileOpen(false);
      previousPathname.current = pathname;
    }
  }, [pathname]);

  // À propos/Blog/FAQ group under one "Studio" dropdown on desktop (see
  // NavDropdown below); the mobile overlay mirrors the same grouping as an
  // expandable row instead of flattening everything into one list.
  const primaryNavLinks = [
    { href: `/${locale}/services`, label: dictionary.nav.services },
    { href: `/${locale}/${localizedSlugs.realisations[locale]}`, label: dictionary.nav.work },
    { href: `/${locale}/${localizedSlugs.tarifs[locale]}`, label: dictionary.nav.pricing },
  ];
  const studioLinks = [
    { href: `/${locale}/${localizedSlugs.aPropos[locale]}`, label: dictionary.nav.about },
    { href: `/${locale}/blog`, label: dictionary.nav.blog },
    { href: `/${locale}/faq`, label: dictionary.faqPage.eyebrow },
  ];
  const isStudioActive = studioLinks.some((item) => item.href === pathname);
  const [mobileStudioOpen, setMobileStudioOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) setMobileStudioOpen(false);
  }, [mobileOpen]);

  return (
    <>
      {/* Thin reading-progress rail, docked to the header's bottom edge and
          riding up with it when hidden -- landing at the viewport's top
          edge instead of continuing off-screen with it. `barY` targets
          explicit pixel values (HEADER_HEIGHT, matched to the header's
          resting/scrolled heights -- update both together if the padding
          classes below ever change) rather than a live measurement: a
          fixed descendant nested inside the header only reproduces this
          "attached, but stops early" effect if its own thickness exactly
          cancels out in the offset math, which didn't hold in practice and
          left the bar rendering a pixel above the viewport (invisible)
          whenever the header hid. Both `y` and `scaleX` go through `style`
          as motion values (not a mix of `animate` + `style`) so Framer
          composes them into one `transform` -- mixing the two dropped the
          `y` translation silently, leaving only the scaleX applied. Reuses
          the site's existing "thin bronze line" motif (see BronzeSweep)
          instead of inventing a new accent treatment. Both motion values
          update outside React's render cycle: pure compositor work, no JS
          per frame. */}
      <motion.div
        aria-hidden
        className="fixed inset-x-0 top-0 z-40 h-px origin-left bg-bronze"
        style={{ y: barY, scaleX: scrollYProgress }}
      />

      <motion.header
        animate={{ y: hidden ? "-100%" : "0%" }}
        transition={{ type: "spring", stiffness: 400, damping: 40 }}
        className={`fixed inset-x-0 top-0 z-40 border-b transition-colors duration-300 ${
          scrolled
            ? "border-paper/12 bg-onyx/90 backdrop-blur-lg"
            : "border-paper/8 bg-onyx/70 backdrop-blur-md"
        }`}
      >
        <div
          className={`mx-auto flex max-w-6xl items-center justify-between px-6 transition-[padding] duration-300 md:px-10 ${
            scrolled ? "py-3.5" : "py-5"
          }`}
        >
          <Link href={`/${locale}`} className="flex items-center">
            <img src="/logo.webp" alt="Calyroc" width={130} height={36} className="h-8 w-auto" />
          </Link>

          <nav
            className="hidden items-center gap-1 font-display text-sm md:flex"
            onMouseLeave={() => setHoveredHref(null)}
          >
            {primaryNavLinks.map((item) => {
              const showPill = (hoveredHref ?? pathname) === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onMouseEnter={() => setHoveredHref(item.href)}
                  className={`relative rounded-full px-4 py-2 transition-colors ${
                    pathname === item.href ? "text-paper" : "text-stone hover:text-paper"
                  }`}
                >
                  {showPill && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-paper/8"
                      transition={{ type: "spring", stiffness: 350, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}

            {/* Studio dropdown: same panel/motion language as CustomSelect
                (see NavDropdown.tsx), sharing this nav's hoveredHref/
                layoutId group so the pill slides seamlessly between it and
                the plain links above. */}
            <NavDropdown
              label={dictionary.nav.studio}
              items={studioLinks}
              pathname={pathname}
              isActive={isStudioActive}
              showPill={(hoveredHref ?? (isStudioActive ? "studio" : null)) === "studio"}
              onHoverStart={() => setHoveredHref("studio")}
              closeSignal={hidden}
            />
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            {/* Theme + language grouped into one capsule instead of two
                independently-shaped controls (a 36px circle next to a
                shorter, square-cornered dropdown) -- unifies their height
                and rounding so they read as a single utility unit, leaving
                the bronze CTA as the one thing that's meant to stand apart. */}
            <div className="flex h-9 items-center rounded-full border border-paper/15 px-1">
              <ThemeToggle
                bare
                labelToLight={dictionary.nav.themeToLight}
                labelToDark={dictionary.nav.themeToDark}
              />
              <span aria-hidden className="h-4 w-px shrink-0 bg-paper/15" />
              <LocaleSwitcher locale={locale} closeSignal={hidden} />
            </div>
            <Link href={`/${locale}/contact`} className="btn-primary !px-5 !py-2.5 text-xs">
              {dictionary.nav.contact}
            </Link>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle
              labelToLight={dictionary.nav.themeToLight}
              labelToDark={dictionary.nav.themeToDark}
            />
            <MobileMenuToggle
              open={mobileOpen}
              onClick={() => setMobileOpen((value) => !value)}
              labelOpen={dictionary.nav.openMenu}
              labelClose={dictionary.nav.closeMenu}
            />
          </div>
        </div>
      </motion.header>

      {/* Always mounted, shown/hidden via a plain CSS opacity transition
          rather than AnimatePresence's animated unmount -- every link in
          here closes the menu by flipping mobileOpen right before a
          TransitionLink navigation fires (see onClick handlers below), and
          an exit animation whose completion callback never gets to run
          (interrupted by the page's own view-transition, a backgrounded
          tab, or any other stalled animation frame) would otherwise leave
          this overlay permanently stuck half-visible over the new page.
          The entrance stagger below replays via `animate` targets keyed off
          `mobileOpen` rather than a mount/unmount trick: an earlier version
          keyed an ancestor of these links to force a remount on open, which
          meant clicking a link unmounted its own event-handling subtree
          mid-click (React tore down the "menu-open" fiber the instant
          setMobileOpen(false) committed) -- the navigation this same click
          just kicked off would then land on a menu whose close never
          actually took effect. Keeping every node mounted and animating
          properties instead avoids that class of bug entirely. */}
      <div
        aria-hidden={!mobileOpen}
        inert={!mobileOpen || undefined}
        className={`fixed inset-0 z-50 flex flex-col bg-onyx transition-opacity duration-300 ease-out md:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex items-center justify-between border-b border-paper/8 px-6 py-5">
          <Link
            href={`/${locale}`}
            onClick={() => setMobileOpen(false)}
            className="flex items-center"
          >
            <img src="/logo.webp" alt="Calyroc" width={130} height={36} className="h-8 w-auto" />
          </Link>
          <MobileMenuToggle
            open={mobileOpen}
            onClick={() => setMobileOpen(false)}
            labelOpen={dictionary.nav.openMenu}
            labelClose={dictionary.nav.closeMenu}
          />
        </div>

        <nav className="flex flex-1 flex-col justify-center gap-1 overflow-y-auto px-6">
          {primaryNavLinks.map((item, index) => (
            <MotionLink
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              initial={false}
              animate={mobileOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.4,
                delay: mobileOpen ? 0.08 + index * 0.06 : 0,
                ease: "easeOut",
              }}
              className="border-b border-paper/8 py-4 font-display text-4xl font-bold tracking-tight text-paper transition-colors active:text-bronze"
            >
              {item.label}
            </MotionLink>
          ))}

          {/* Studio group: an expandable row instead of flattening
                  À propos/Blog/FAQ into the list -- keeps the same big
                  touch-target rhythm as the links above while still
                  reading as one grouped unit, echoing the desktop
                  dropdown instead of diverging from it. */}
          <motion.div
            initial={false}
            animate={mobileOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: 0.4,
              delay: mobileOpen ? 0.08 + primaryNavLinks.length * 0.06 : 0,
              ease: "easeOut",
            }}
            className="border-b border-paper/8"
          >
            <button
              type="button"
              onClick={() => setMobileStudioOpen((v) => !v)}
              aria-expanded={mobileStudioOpen}
              className={`flex w-full items-center justify-between py-4 font-display text-4xl font-bold tracking-tight transition-colors ${
                isStudioActive ? "text-bronze" : "text-paper"
              }`}
            >
              {dictionary.nav.studio}
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className={`h-5 w-5 shrink-0 text-bronze transition-transform duration-300 ease-out ${
                  mobileStudioOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            <AnimatePresence initial={false}>
              {mobileStudioOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-col gap-1 pb-4 pl-1">
                    {studioLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-center gap-3 py-2 font-display text-xl transition-colors active:text-bronze ${
                          pathname === item.href ? "text-bronze" : "text-paper/75"
                        }`}
                      >
                        <span aria-hidden className="h-1 w-1 shrink-0 rounded-full bg-bronze/60" />
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <MotionLink
            href={`/${locale}/contact`}
            onClick={() => setMobileOpen(false)}
            initial={false}
            animate={mobileOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: 0.4,
              delay: mobileOpen ? 0.08 + (primaryNavLinks.length + 1) * 0.06 : 0,
              ease: "easeOut",
            }}
            className="border-b border-paper/8 py-4 font-display text-4xl font-bold tracking-tight text-paper transition-colors active:text-bronze"
          >
            {dictionary.nav.contact}
          </MotionLink>
        </nav>

        <motion.div
          initial={false}
          animate={{ opacity: mobileOpen ? 1 : 0 }}
          transition={{ duration: 0.4, delay: mobileOpen ? 0.35 : 0 }}
          className="flex items-center justify-between px-6 py-6"
        >
          <div className="flex h-9 items-center rounded-full border border-paper/15 px-1">
            <ThemeToggle
              bare
              labelToLight={dictionary.nav.themeToLight}
              labelToDark={dictionary.nav.themeToDark}
            />
            <span aria-hidden className="h-4 w-px shrink-0 bg-paper/15" />
            <LocaleSwitcher locale={locale} variant="menu" />
          </div>
          <span className="text-xs text-stone">calyroc.com</span>
        </motion.div>
      </div>
    </>
  );
}

const localeOptions = locales.map((code) => ({ value: code, label: code.toUpperCase() }));

function LocaleSwitcher({
  locale,
  variant = "header",
  closeSignal,
}: {
  locale: Locale;
  variant?: "header" | "menu";
  /** Only meaningful for the "header" variant -- see CustomSelect. */
  closeSignal?: boolean;
}) {
  return (
    <CustomSelect
      options={localeOptions}
      value={locale}
      onChange={(next) => {
        window.location.href = `/${next}`;
      }}
      ariaLabel="Language"
      // Bare in both cases: it always lives inside a shared theme+language
      // capsule now (see SiteHeader), which already supplies the border/shape.
      variant="bare"
      panelAlign={variant === "header" ? "right" : "left"}
      // The mobile menu's switcher sits in the last row of a full-screen
      // overlay -- a panel opening downward would be clipped by the
      // viewport edge, making the options unreachable.
      panelPosition={variant === "menu" ? "top" : "bottom"}
      closeSignal={closeSignal}
      triggerClassName="h-9 px-3 font-display text-xs uppercase tracking-wide"
    />
  );
}
