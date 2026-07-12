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
  curtain.style.transformOrigin = "bottom";
  curtain.style.transition = "transform 300ms cubic-bezier(0.6, 0, 0.2, 1)";
  curtain.style.transform = "scaleY(1)";
  window.setTimeout(() => {
    router.push(href);
    window.setTimeout(() => {
      curtain.style.transformOrigin = "top";
      curtain.style.transition = "transform 320ms cubic-bezier(0.6, 0, 0.2, 1)";
      curtain.style.transform = "scaleY(0)";
    }, 90);
  }, 300);
}

// Drop-in replacement for next-view-transitions' Link that also picks which
// of the site's transition styles applies to this specific navigation (see
// pageTransition.ts) -- "slide" and "diagonal" just set a data attribute the
// CSS keys off of, "curtain" bypasses the native View Transition entirely
// and runs a manual cover/navigate/reveal sequence instead (see
// BronzeCurtain.tsx for why).
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
