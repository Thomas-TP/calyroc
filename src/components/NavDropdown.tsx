"use client";

import { motion } from "motion/react";
import { useEffect, useId, useRef, useState } from "react";
import { TransitionLink as Link } from "@/components/TransitionLink";

export interface NavLinkItem {
  href: string;
  label: string;
}

// Same panel visuals, motion curve and click-outside/Escape handling as
// CustomSelect.tsx (the site's other dropdown surface -- locale switcher,
// pack pickers) rather than a one-off implementation, so every dropdown on
// the site opens/closes/feels the same. Kept as a sibling component instead
// of extending CustomSelect itself: CustomSelect is a value-select control
// (onChange, single selected value, hidden form input) and this is plain
// navigation -- links, no selection state -- so forcing both through one
// component's props would make CustomSelect's API worse for its existing
// callers just to fake link semantics here.
export function NavDropdown({
  label,
  items,
  pathname,
  isActive,
  showPill,
  onHoverStart,
  closeSignal,
}: {
  label: string;
  items: NavLinkItem[];
  pathname: string;
  isActive: boolean;
  /** Whether the shared sliding hover-pill (owned by the parent nav) should
   * render behind this trigger right now. */
  showPill: boolean;
  onHoverStart: () => void;
  /** Forces the panel closed whenever this flips to true -- the parent
   * passes its scroll-driven `hidden` state. The panel rides along with the
   * header's own slide-away transform (it's a normal descendant), so a left-
   * open panel doesn't visibly break while hidden, but it stays mounted as
   * "open" and interactive: it would reappear already expanded the moment
   * the header slides back in on scroll-up, and a keyboard user could still
   * tab into its off-screen links in the meantime. */
  closeSignal?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const pillId = useId();

  useEffect(() => {
    if (!open) return;
    function handlePointerDown(event: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  useEffect(() => {
    if (closeSignal) setOpen(false);
  }, [closeSignal]);

  useEffect(() => {
    if (!open) setHoveredHref(null);
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        onMouseEnter={onHoverStart}
        aria-haspopup="true"
        aria-expanded={open}
        className={`relative flex items-center gap-1 rounded-full px-4 py-2 transition-colors ${
          isActive ? "text-paper" : "text-stone hover:text-paper"
        }`}
      >
        {showPill && (
          <motion.span
            layoutId="nav-pill"
            className="absolute inset-0 rounded-full bg-paper/8"
            transition={{ type: "spring", stiffness: 350, damping: 32 }}
          />
        )}
        <span className="relative z-10">{label}</span>
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className={`relative z-10 h-3 w-3 transition-transform duration-200 ease-out ${
            open ? "rotate-180" : ""
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

      {/* Always mounted and closed via a plain CSS transition rather than
          Framer's animated-unmount (AnimatePresence). Testing showed that
          when a link click both closes this panel and kicks off a page
          navigation at the same time, the exit animation can get stuck
          mid-flight (frozen opacity, node never removed) -- the completion
          callback AnimatePresence needs to actually remove the node just
          doesn't fire. A CSS-only toggle sidesteps the whole class of
          problem: closing is a synchronous class change, not an animation
          waiting to finish. */}
      <ul
        aria-label={label}
        aria-hidden={!open}
        inert={!open || undefined}
        onMouseLeave={() => setHoveredHref(null)}
        className={`absolute left-0 top-full z-30 mt-2 min-w-[10rem] origin-top-left rounded-xl border border-paper/12 bg-onyx-soft/90 p-1.5 shadow-2xl backdrop-blur-xl transition-[opacity,transform] duration-150 ease-out ${
          open ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"
        }`}
      >
        {items.map((item) => {
          const isCurrent = item.href === pathname;
          const showItemPill = (hoveredHref ?? (isCurrent ? item.href : null)) === item.href;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                onMouseEnter={() => setHoveredHref(item.href)}
                onClick={() => setOpen(false)}
                className={`relative block rounded-lg px-3 py-2 text-sm transition-colors ${
                  isCurrent ? "text-bronze" : "text-paper/85 hover:text-paper"
                }`}
              >
                {showItemPill && (
                  <motion.span
                    layoutId={`nav-dropdown-pill-${pillId}`}
                    className="absolute inset-0 rounded-lg bg-bronze/15"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
