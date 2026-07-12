import type { ReactNode } from "react";
import Script from "next/script";
import { GrainOverlay } from "@/components/GrainOverlay";
import { THEME_INIT_SCRIPT } from "@/lib/theme-script";
import "../globals.css";

export const metadata = {
  title: "Admin — Calyroc",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" className="dark" suppressHydrationWarning>
      <body className="bg-onyx font-body text-paper antialiased">
        <Script id="theme-init" strategy="beforeInteractive">
          {THEME_INIT_SCRIPT}
        </Script>
        <GrainOverlay />
        {children}
      </body>
    </html>
  );
}
