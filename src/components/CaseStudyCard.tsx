import type { CaseStudy, Dictionary } from "@/i18n/dictionary";

export function CaseStudyCard({
  study,
  labels,
}: {
  study: CaseStudy;
  labels: Dictionary["workPage"];
}) {
  return (
    <article className="overflow-hidden rounded-2xl border border-paper/10 bg-onyx-soft transition-colors duration-300 hover:border-bronze/25">
      <div className="border-b border-paper/8 bg-gradient-to-br from-bronze/10 via-transparent to-transparent p-8 md:p-10">
        <span className="rounded-full border border-paper/15 px-3 py-1 text-xs uppercase tracking-wide text-stone">
          {study.category}
        </span>
        <p className="mt-4 font-display text-sm font-medium uppercase tracking-[0.15em] text-bronze">
          {study.results[0]}
        </p>
        <h2 className="mt-2 font-display text-2xl font-bold text-paper md:text-3xl">
          {study.title}
        </h2>
        <p className="mt-2 text-stone">{study.tagline}</p>
      </div>

      <div className="grid grid-cols-1 gap-8 p-8 md:grid-cols-2 md:p-10">
        <div>
          <h3 className="font-display text-sm font-medium uppercase tracking-wide text-paper/60">
            {labels.problemLabel}
          </h3>
          <p className="mt-2 leading-relaxed text-paper/85">{study.problem}</p>

          <h3 className="mt-6 font-display text-sm font-medium uppercase tracking-wide text-paper/60">
            {labels.stackLabel}
          </h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {study.stack.map((t) => (
              <span
                key={t}
                className="rounded-full border border-paper/12 px-3 py-1 text-xs text-paper/80"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-medium uppercase tracking-wide text-paper/60">
            {labels.featuresLabel}
          </h3>
          <ul className="mt-2 space-y-2">
            {study.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-paper/85">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-bronze" />
                {f}
              </li>
            ))}
          </ul>

          <h3 className="mt-6 font-display text-sm font-medium uppercase tracking-wide text-paper/60">
            {labels.resultsLabel}
          </h3>
          <ul className="mt-2 space-y-2">
            {study.results.map((r) => (
              <li key={r} className="flex items-start gap-2 text-sm text-paper/85">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-bronze" />
                {r}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-paper/8 p-6">
        <a
          href={study.url}
          target="_blank"
          rel="noreferrer"
          className="btn-secondary !px-5 !py-2.5 text-sm"
        >
          {labels.linkLabel} ↗
        </a>
      </div>
    </article>
  );
}
