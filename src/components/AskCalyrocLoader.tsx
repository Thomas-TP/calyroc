"use client";

import dynamic from "next/dynamic";
import type { Dictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/locales";

// Deferred as its own chunk: the chat widget (Framer Motion panel, message
// state, fetch handling) is never needed for the initial render of any page
// and most visitors never open it -- keeping it out of the critical
// hydration path measurably cuts main-thread work on first load.
const AskCalyroc = dynamic(() => import("@/components/AskCalyroc").then((mod) => mod.AskCalyroc), {
  ssr: false,
});

export function AskCalyrocLoader({
  locale,
  dictionary,
}: {
  locale: Locale;
  dictionary: Dictionary;
}) {
  return <AskCalyroc locale={locale} dictionary={dictionary} />;
}
