export type TransitionStyle = "slide" | "curtain";

function stripLocale(path: string): string {
  return path.replace(/^\/[a-z]{2}(?=\/|$)/, "") || "/";
}

function isHome(path: string): boolean {
  return path === "/" || path === "";
}

function isContact(path: string): boolean {
  return path.startsWith("/contact");
}

// The two "significant" endpoints -- entering the site (home) and heading to
// convert (contact) -- share one signature moment: the bronze diagonal
// curtain. Everything else between the main content pages gets the plain
// directional slide.
export function transitionStyleFor(fromPath: string, toPath: string): TransitionStyle {
  const from = stripLocale(fromPath);
  const to = stripLocale(toPath);
  if (isHome(from) || isHome(to) || isContact(from) || isContact(to)) return "curtain";
  return "slide";
}
