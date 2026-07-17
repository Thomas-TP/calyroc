import { TransitionLink as Link } from "@/components/TransitionLink";
import type { Dictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/locales";
import { localizedSlugs } from "@/i18n/routes";

export function SiteFooter({ locale, dictionary }: { locale: Locale; dictionary: Dictionary }) {
  return (
    <footer className="border-t border-paper/8 px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 text-sm text-stone md:flex-row md:items-center md:justify-between">
        <div>
          <img src="/logo.webp" alt="Calyroc" width={110} height={30} className="h-6 w-auto" />
          <p className="mt-2">{dictionary.footer.tagline}</p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          <Link href={`/${locale}/faq`} className="transition-colors hover:text-paper">
            {dictionary.faqPage.eyebrow}
          </Link>
          <Link
            href={`/${locale}/${localizedSlugs.mentionsLegales[locale]}`}
            className="transition-colors hover:text-paper"
          >
            {dictionary.footer.legalLinks.mentionsLegales}
          </Link>
          <Link
            href={`/${locale}/${localizedSlugs.confidentialite[locale]}`}
            className="transition-colors hover:text-paper"
          >
            {dictionary.footer.legalLinks.confidentialite}
          </Link>
          <Link
            href={`/${locale}/${localizedSlugs.cgv[locale]}`}
            className="transition-colors hover:text-paper"
          >
            {dictionary.footer.legalLinks.cgv}
          </Link>
        </nav>
      </div>
    </footer>
  );
}
