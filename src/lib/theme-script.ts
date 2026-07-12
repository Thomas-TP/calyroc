// Runs before hydration (see <Script strategy="beforeInteractive"> in the
// layouts) so the correct .dark/.light class is on <html> before first
// paint -- otherwise the page would flash the server-rendered "dark"
// default before React ever mounts, on every visit where the visitor had
// picked light mode. Kept as a shared string (not a component) because it
// must run standalone, outside React's render.
export const THEME_INIT_SCRIPT = `
(function () {
  try {
    var stored = localStorage.getItem("calyroc-theme");
    var theme =
      stored === "light" || stored === "dark"
        ? stored
        : window.matchMedia("(prefers-color-scheme: light)").matches
          ? "light"
          : "dark";
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(theme);
  } catch (_e) {}
})();
`;
