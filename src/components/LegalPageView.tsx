import type { LegalPage } from "@/i18n/legal";

export function LegalPageView({ content, notice }: { content: LegalPage; notice?: string }) {
  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="font-display text-3xl font-bold text-paper md:text-4xl">{content.title}</h1>
      <p className="mt-2 text-sm text-stone">{content.updated}</p>

      {notice && (
        <p className="mt-6 rounded-lg border border-bronze/25 bg-bronze/5 px-4 py-3 text-sm text-paper/80">
          {notice}
        </p>
      )}

      <div className="mt-10 flex flex-col gap-8">
        {content.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="font-display text-lg font-bold text-paper">{section.heading}</h2>
            <div className="mt-3 flex flex-col gap-3">
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
  );
}
