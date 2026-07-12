import { Link } from "next-view-transitions";
import type { Dictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/locales";

export function SiteFooter({ locale, dictionary }: { locale: Locale; dictionary: Dictionary }) {
  return (
    <footer className="border-t border-paper/8 px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 text-sm text-stone md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-paper">Calyroc</p>
          <p className="mt-1">{dictionary.footer.tagline}</p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          <Link href={`/${locale}/mentions-legales`} className="transition-colors hover:text-paper">
            {dictionary.footer.legalLinks.mentionsLegales}
          </Link>
          <Link href={`/${locale}/confidentialite`} className="transition-colors hover:text-paper">
            {dictionary.footer.legalLinks.confidentialite}
          </Link>
          <Link href={`/${locale}/cgv`} className="transition-colors hover:text-paper">
            {dictionary.footer.legalLinks.cgv}
          </Link>
        </nav>
      </div>
    </footer>
  );
}
