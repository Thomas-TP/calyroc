export type TransitionStyle = "slide" | "diagonal" | "curtain";

function stripLocale(path: string): string {
  return path.replace(/^\/[a-z]{2}(?=\/|$)/, "") || "/";
}

function isHome(path: string): boolean {
  return path === "/" || path === "";
}

function isContact(path: string): boolean {
  return path.startsWith("/contact");
}

// Home gets the signature bronze curtain (the site's "front door" deserves the
// biggest moment); Contact -- the conversion destination -- gets the diagonal
// wipe to stand out from routine browsing; everything else between the main
// content pages gets the plain directional slide.
export function transitionStyleFor(fromPath: string, toPath: string): TransitionStyle {
  const from = stripLocale(fromPath);
  const to = stripLocale(toPath);
  if (isHome(from) || isHome(to)) return "curtain";
  if (isContact(from) || isContact(to)) return "diagonal";
  return "slide";
}
