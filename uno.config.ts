import { defineConfig, presetWind4 } from "unocss";

export default defineConfig({
  presets: [presetWind4()],
  theme: {
    colors: {
      onyx: {
        DEFAULT: "#0B0B0C",
        soft: "#131316",
        line: "#B99A63", // hairline/border tint, mixed via opacity utilities
      },
      paper: "#F5F3EF",
      stone: "#8C887F",
      bronze: {
        DEFAULT: "#C9A567",
        soft: "#E4CB9C",
      },
    },
    font: {
      display: "'Space Grotesk', 'General Sans', sans-serif",
      body: "'Inter', sans-serif",
    },
  },
  shortcuts: {
    "btn-primary":
      "inline-flex items-center justify-center rounded-full bg-bronze px-7 py-3.5 font-display text-sm font-medium text-onyx transition-colors duration-200 hover:bg-bronze-soft",
    "btn-secondary":
      "inline-flex items-center justify-center rounded-full border border-paper/15 px-7 py-3.5 font-display text-sm font-medium text-paper transition-colors duration-200 hover:border-paper/35 hover:bg-paper/5",
  },
});
