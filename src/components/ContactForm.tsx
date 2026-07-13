"use client";

import Script from "next/script";
import { useActionState, useEffect, useRef, useState } from "react";
import { type ContactState, submitContactForm } from "@/app/actions";
import { CustomSelect } from "@/components/CustomSelect";
import type { Dictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/locales";
import { TURNSTILE_SITE_KEY } from "@/lib/turnstile";

const initialState: ContactState = { status: "idle" };

// Turnstile only exposes light/dark/auto (no custom color API -- it's a
// security-isolated Cloudflare widget). A bronze overlay still works even
// on its cross-origin iframe (compositing operates on rendered pixels, not
// DOM content). Normal alpha blending, not mix-blend-mode: color -- "color"
// preserves the backdrop's own luminance, which on Turnstile's dark theme
// (near-black) stays dark no matter the opacity and reads as a muddy
// brown instead of the site's actual bright bronze. Plain alpha blending
// pulls the visible result toward the true #C9A567 regardless of what's
// underneath. Opacity is capped below ~0.7 so the checkmark and "Success"
// text stay legible instead of being washed out.
const TURNSTILE_TINT_OPACITY: Record<"light" | "dark", number> = {
  dark: 0.68,
  light: 0.35,
};

declare global {
  interface Window {
    turnstile?: {
      render: (container: HTMLElement, options: Record<string, unknown>) => string;
      remove: (widgetId: string) => void;
    };
    onTurnstileLoad?: () => void;
  }
}

// Returns null until mounted: the widget itself only renders once the real
// theme is known, so the initial render never has to guess.
function useSiteTheme(): "light" | "dark" | null {
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    const sync = () => setTheme(root.classList.contains("light") ? "light" : "dark");
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return theme;
}

// Turnstile's implicit rendering (scanning the DOM for `.cf-turnstile`
// elements) only runs once when its script loads -- it never notices a
// remounted element later, so a live theme toggle would leave a blank box.
// Explicit rendering via the JS API lets the widget be torn down and
// re-rendered on demand whenever the site's theme changes mid-session.
function TurnstileWidget({ theme }: { theme: "light" | "dark" }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const [scriptReady, setScriptReady] = useState(false);

  useEffect(() => {
    if (window.turnstile) {
      setScriptReady(true);
      return;
    }
    window.onTurnstileLoad = () => setScriptReady(true);
  }, []);

  useEffect(() => {
    if (!scriptReady || !containerRef.current || !window.turnstile) return;
    const turnstile = window.turnstile;
    const container = containerRef.current;

    const widgetId = turnstile.render(container, {
      sitekey: TURNSTILE_SITE_KEY,
      action: "turnstile-spin-v1",
      theme,
    });
    widgetIdRef.current = widgetId;

    return () => {
      if (widgetIdRef.current) {
        turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [scriptReady, theme]);

  return (
    <div className="w-fit overflow-hidden rounded-lg">
      <div className="relative">
        <div ref={containerRef} />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundColor: "#C9A567",
            opacity: TURNSTILE_TINT_OPACITY[theme],
          }}
        />
      </div>
    </div>
  );
}

export function ContactForm({
  contactPage,
  pricingPage,
  locale,
}: {
  contactPage: Dictionary["contactPage"];
  pricingPage: Dictionary["pricingPage"];
  locale: Locale;
}) {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);
  const turnstileTheme = useSiteTheme();

  const packOptions = [
    ...pricingPage.packs.map((pack) => ({ value: pack.id, label: `${pack.name} — ${pack.price}` })),
    { value: "unsure", label: contactPage.formPackUnsureLabel },
  ];

  return (
    <form action={formAction} className="mt-10 flex flex-col gap-5">
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoad&render=explicit"
        strategy="afterInteractive"
        async
        defer
      />
      <input type="hidden" name="locale" value={locale} />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <Field label={contactPage.formName} name="name" required />
        <Field label={contactPage.formEmail} name="email" type="email" required />
      </div>

      <div className="flex flex-col gap-2">
        <span className="font-display text-sm text-paper/80">{contactPage.formPackLabel}</span>
        <CustomSelect
          name="packId"
          ariaLabel={contactPage.formPackLabel}
          options={packOptions}
          triggerClassName="w-full px-4 py-3"
        />
      </div>

      <label className="flex flex-col gap-2">
        <span className="font-display text-sm text-paper/80">{contactPage.formMessage}</span>
        <textarea
          name="message"
          required
          minLength={10}
          rows={6}
          placeholder={contactPage.formMessagePlaceholder}
          className="resize-none rounded-lg border border-paper/15 bg-transparent px-4 py-3 text-paper outline-none transition-colors focus:border-bronze"
        />
      </label>

      {turnstileTheme && <TurnstileWidget key={turnstileTheme} theme={turnstileTheme} />}

      <button
        type="submit"
        disabled={isPending}
        className="btn-primary self-start disabled:opacity-60"
      >
        {isPending ? contactPage.formSubmitting : contactPage.formSubmit}
      </button>

      {state.status === "success" && (
        <p className="text-sm text-bronze">{contactPage.formSuccess}</p>
      )}
      {state.status === "error" && <p className="text-sm text-red-400">{contactPage.formError}</p>}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-display text-sm text-paper/80">{label}</span>
      <input
        type={type}
        name={name}
        required={required}
        className="rounded-lg border border-paper/15 bg-transparent px-4 py-3 text-paper outline-none transition-colors focus:border-bronze"
      />
    </label>
  );
}
