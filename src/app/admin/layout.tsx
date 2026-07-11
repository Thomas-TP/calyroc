import type { ReactNode } from "react";
import { GrainOverlay } from "@/components/GrainOverlay";
import "../globals.css";

export const metadata = {
  title: "Admin — Calyroc",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" className="dark">
      <body className="bg-onyx font-body text-paper antialiased">
        <GrainOverlay />
        {children}
      </body>
    </html>
  );
}
