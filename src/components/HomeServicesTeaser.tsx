import { Reveal } from "@/components/Reveal";
import { TransitionLink as Link } from "@/components/TransitionLink";
import type { Dictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/locales";

export function HomeServicesTeaser({
  dictionary,
  locale,
}: {
  dictionary: Dictionary;
  locale: Locale;
}) {
  const items = dictionary.servicesPage.items.slice(0, 3);

  return (
    <section className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
      <Reveal>
        <p className="text-eyebrow">{dictionary.home.servicesEyebrow}</p>
        <h2 className="text-display-md mt-4 max-w-2xl text-balance text-paper">
          {dictionary.home.servicesTitle}
        </h2>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {items.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.08} variant="scale">
            <Link
              href={`/${locale}/services`}
              className="group block h-full rounded-2xl border border-paper/10 bg-onyx-soft p-8 transition-all duration-300 hover:-translate-y-1 hover:border-bronze/30"
            >
              <span className="font-display text-xs text-stone">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-xl font-bold text-paper">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-stone">{item.description}</p>
              <span
                aria-hidden
                className="mt-6 inline-block text-bronze transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2}>
        <Link href={`/${locale}/services`} className="btn-secondary mt-12">
          {dictionary.home.servicesCta}
        </Link>
      </Reveal>
    </section>
  );
}
