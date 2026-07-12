"use client";

import { usePathname, useRouter } from "next/navigation";
import { Link as ViewTransitionLink } from "next-view-transitions";
import { type ComponentProps, type MouseEvent, useCallback } from "react";
import { transitionStyleFor } from "@/lib/pageTransition";

type LinkProps = ComponentProps<typeof ViewTransitionLink>;

function hrefToPath(href: LinkProps["href"]): string {
  return typeof href === "string" ? href : (href.pathname ?? "");
}

function runCurtainTransition(href: string, router: ReturnType<typeof useRouter>) {
  const curtain = document.getElementById("bronze-curtain");
  if (!curtain || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    router.push(href);
    return;
  }
  const coverMs = 280;
  const revealMs = 320;
  // Sweeps left -> center (covers the viewport, page swaps underneath) ->
  // right (reveals the new page), then snaps back off-screen left with no
  // transition so it's ready for the next trigger.
  curtain.style.transition = `transform ${coverMs}ms cubic-bezier(0.6, 0, 0.2, 1)`;
  curtain.style.transform = "translateX(0%)";
  window.setTimeout(() => {
    router.push(href);
    window.setTimeout(() => {
      curtain.style.transition = `transform ${revealMs}ms cubic-bezier(0.6, 0, 0.2, 1)`;
      curtain.style.transform = "translateX(100%)";
      window.setTimeout(() => {
        curtain.style.transition = "none";
        curtain.style.transform = "translateX(-100%)";
      }, revealMs + 20);
    }, 90);
  }, coverMs);
}

// Drop-in replacement for next-view-transitions' Link that also picks which
// of the site's transition styles applies to this specific navigation (see
// pageTransition.ts) -- "slide" just sets a data attribute the CSS keys off
// of, "curtain" bypasses the native View Transition entirely and runs a
// manual cover/navigate/reveal sequence instead (see BronzeCurtain.tsx for
// why).
export function TransitionLink({ href, onClick, ...props }: LinkProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>) => {
      onClick?.(event);
      if (event.defaultPrevented) return;

      const to = hrefToPath(href);
      const style = transitionStyleFor(pathname, to);

      if (style === "curtain") {
        event.preventDefault();
        runCurtainTransition(to, router);
        return;
      }

      document.documentElement.setAttribute("data-transition-style", style);
    },
    [href, onClick, pathname, router],
  );

  return <ViewTransitionLink href={href} onClick={handleClick} {...props} />;
}
