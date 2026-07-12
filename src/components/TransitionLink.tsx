"use client";

import { Link as ViewTransitionLink } from "next-view-transitions";
import { type ComponentProps, type MouseEvent, useCallback } from "react";

type LinkProps = ComponentProps<typeof ViewTransitionLink>;

function playBronzeSweep() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const bar = document.getElementById("bronze-curtain");
  if (!bar) return;
  // Remove + reflow + re-add so retriggering mid-animation restarts cleanly
  // (e.g. clicking a second link before the first sweep finished).
  bar.classList.remove("is-active");
  void bar.offsetWidth;
  bar.classList.add("is-active");
}

// Drop-in replacement for next-view-transitions' Link: same navigation
// behaviour (native document.startViewTransition crossfade, see
// globals.css), plus it kicks off the bronze accent sweep on every click
// (see BronzeSweep.tsx).
export function TransitionLink({ onClick, ...props }: LinkProps) {
  const handleClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>) => {
      onClick?.(event);
      if (event.defaultPrevented) return;
      playBronzeSweep();
    },
    [onClick],
  );

  return <ViewTransitionLink onClick={handleClick} {...props} />;
}
