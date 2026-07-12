"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "calyroc-theme";

export function ThemeToggle({
  labelToLight,
  labelToDark,
  className = "",
}: {
  labelToLight: string;
  labelToDark: string;
  className?: string;
}) {
  // Starts null (unknown) so the server-rendered markup never claims a
  // theme the client hasn't confirmed yet -- the beforeInteractive script
  // already set the right class on <html> before this ever mounts.
  const [theme, setTheme] = useState<"dark" | "light" | null>(null);

  useEffect(() => {
    setTheme(document.documentElement.classList.contains("light") ? "light" : "dark");
  }, []);

  function toggle() {
    const next = theme === "light" ? "dark" : "light";
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(next);
    window.localStorage.setItem(STORAGE_KEY, next);
    setTheme(next);
  }

  const isLight = theme === "light";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isLight ? labelToDark : labelToLight}
      className={`relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full border border-paper/15 text-paper transition-colors hover:border-bronze/50 ${className}`}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className={`absolute h-4.5 w-4.5 transition-all duration-300 ${
          isLight ? "-rotate-90 scale-50 opacity-0" : "rotate-0 scale-100 opacity-100"
        }`}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      >
        <circle cx="12" cy="12" r="4.2" />
        <path d="M12 2.5v2.4M12 19.1v2.4M4.9 4.9l1.7 1.7M17.4 17.4l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.9 19.1l1.7-1.7M17.4 6.6l1.7-1.7" />
      </svg>
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className={`absolute h-4.5 w-4.5 transition-all duration-300 ${
          isLight ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-50 opacity-0"
        }`}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 14.2A8.5 8.5 0 1 1 9.8 4a6.8 6.8 0 0 0 10.2 10.2Z" />
      </svg>
    </button>
  );
}
