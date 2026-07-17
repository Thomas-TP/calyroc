"use client";

import NextLink from "next/link";
import { type ComponentProps, type MouseEvent, useCallback } from "react";

type LinkProps = ComponentProps<typeof NextLink>;

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

// Wraps next/link: route navigations are transitions automatically once
// experimental.viewTransition is on (see next.config.ts) -- no provider or
// special Link component needed anymore, unlike the third-party
// next-view-transitions package this used to wrap. Same crossfade CSS
// (globals.css, ::view-transition-old/new(root)) still applies since it
// targets the plain browser API either way. This wrapper's only remaining
// job is kicking off the bronze accent sweep on every click (see
// BronzeSweep.tsx).
export function TransitionLink({ onClick, ...props }: LinkProps) {
  const handleClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>) => {
      onClick?.(event);
      if (event.defaultPrevented) return;
      playBronzeSweep();
    },
    [onClick],
  );

  return <NextLink onClick={handleClick} {...props} />;
}
