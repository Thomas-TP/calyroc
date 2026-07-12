import { defineConfig, presetWind4 } from "unocss";

export default defineConfig({
  presets: [presetWind4()],
  theme: {
    colors: {
      // Values come from CSS custom properties (globals.css, .dark/.light
      // blocks) so every utility built on these tokens re-themes for free --
      // no component here ever needs a dark:/light: variant of its own.
      onyx: {
        DEFAULT: "var(--color-onyx)",
        soft: "var(--color-onyx-soft)",
        line: "var(--color-onyx-line)", // hairline/border tint, mixed via opacity utilities
      },
      paper: "var(--color-paper)",
      stone: "var(--color-stone)",
      bronze: {
        DEFAULT: "var(--color-bronze)",
        soft: "var(--color-bronze-soft)",
      },
      // Fixed near-black, NOT theme-reactive: for text sitting on the bronze
      // accent (e.g. primary button label), which must stay dark regardless
      // of theme since bronze itself stays light-ish in both modes.
      ink: "#0B0B0C",
    },
    font: {
      display: "'Space Grotesk Variable', 'Space Grotesk', 'General Sans', sans-serif",
      body: "'Inter Variable', 'Inter', sans-serif",
    },
  },
  shortcuts: {
    "btn-primary":
      "inline-flex items-center justify-center rounded-full bg-bronze px-7 py-3.5 font-display text-sm font-medium text-ink transition-colors duration-200 hover:bg-bronze-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze",
    "btn-secondary":
      "inline-flex items-center justify-center rounded-full border border-paper/15 px-7 py-3.5 font-display text-sm font-medium text-paper transition-colors duration-200 hover:border-paper/35 hover:bg-paper/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze",

    // Type scale (docs/DESIGN_SYSTEM.md) -- named by role, not by pixel size,
    // so a change to "what a page title looks like" happens in one place.
    "text-eyebrow":
      "font-display text-xs font-medium uppercase tracking-[0.25em] text-bronze md:text-sm",
    "text-display-xl":
      "font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl",
    "text-display-lg":
      "font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl",
    "text-display-md": "font-display text-3xl font-bold tracking-tight md:text-4xl",
    "text-display-sm": "font-display text-xl font-bold",
    // Short, punchy phrases only (2-5 words) -- tight tracking + caps reads as
    // a graphic mark rather than a sentence; never use on full sentences.
    "text-impact": "font-display font-bold uppercase leading-[0.9] tracking-tighter",
  },
});
