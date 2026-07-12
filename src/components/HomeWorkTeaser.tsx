import { Reveal } from "@/components/Reveal";
import type { Dictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/locales";

export function HomeWorkTeaser({ dictionary, locale }: { dictionary: Dictionary; locale: Locale }) {
  const studies = dictionary.workPage.caseStudies;

  return (
    <section className="border-t border-paper/8 bg-onyx-soft/40">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <Reveal>
          <p className="text-eyebrow">{dictionary.home.workEyebrow}</p>
          <h2 className="text-display-md mt-4 max-w-2xl text-balance text-paper">
            {dictionary.home.workTitle}
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {studies.map((study, index) => (
            <Reveal key={study.title} delay={index * 0.1} variant="scale">
              <a
                href={study.url}
                target="_blank"
                rel="noreferrer"
                className="group block h-full rounded-2xl border border-paper/10 bg-onyx p-8 transition-colors duration-300 hover:border-bronze/25"
              >
                <span className="rounded-full border border-paper/15 px-2.5 py-0.5 text-xs uppercase tracking-wide text-stone">
                  {study.category}
                </span>
                <p className="mt-3 font-display text-xs font-medium uppercase tracking-[0.15em] text-bronze">
                  {study.results[0]}
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold text-paper">{study.title}</h3>
                <p className="mt-2 text-stone">{study.tagline}</p>
                <span
                  aria-hidden
                  className="mt-6 inline-block text-bronze transition-transform duration-300 group-hover:translate-x-1"
                >
                  ↗
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <a href={`/${locale}/realisations`} className="btn-secondary mt-12">
            {dictionary.home.workCta}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
