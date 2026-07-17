import type { LegalPage } from "@/i18n/legal";

// Local rather than shared: legal-page headings are static, authored copy
// (never user input), so a simple accent-stripping slugify is enough --
// no need for the extra surface area of a general-purpose util used
// elsewhere for dynamic content.
function slugify(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function LegalPageView({ content, notice }: { content: LegalPage; notice?: string }) {
  const sections = content.sections.map((section) => ({
    ...section,
    id: slugify(section.heading),
  }));

  return (
    <div className="mx-auto max-w-6xl">
      <div className="max-w-3xl">
        <h1 className="font-display text-3xl font-bold text-paper md:text-4xl">{content.title}</h1>
        <p className="mt-2 text-sm text-stone">{content.updated}</p>

        {notice && (
          <div className="mt-6 flex items-start gap-3 rounded-lg border border-bronze/25 bg-bronze/5 px-4 py-3">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="mt-0.5 h-4 w-4 shrink-0 text-bronze"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M12 16v-5" />
              <path d="M12 8h.01" />
            </svg>
            <p className="text-sm leading-relaxed text-paper/80">{notice}</p>
          </div>
        )}
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-[220px_1fr] lg:items-start">
        <nav aria-label={content.title} className="lg:sticky lg:top-28">
          <ol className="flex flex-col gap-1 border-l border-paper/10 text-sm">
            {sections.map((section, index) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="-ml-px flex items-center gap-2 border-l-2 border-transparent py-1.5 pl-4 text-stone transition-colors hover:border-bronze/50 hover:text-paper"
                >
                  <span className="font-display text-xs text-bronze">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {section.heading}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="flex max-w-3xl flex-col gap-10">
          {sections.map((section, index) => (
            <section key={section.id} id={section.id} className="scroll-mt-28">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-bronze/15 font-display text-xs font-bold text-bronze">
                  {index + 1}
                </span>
                <h2 className="font-display text-lg font-bold text-paper">{section.heading}</h2>
              </div>
              <div className="mt-3 flex flex-col gap-3 pl-10">
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="leading-relaxed text-paper/80">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
