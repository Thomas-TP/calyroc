import type { Dictionary } from "@/i18n/dictionary";

export function FounderCard({ aboutPage }: { aboutPage: Dictionary["aboutPage"] }) {
  return (
    <div className="flex flex-col items-center gap-6 rounded-2xl border border-bronze/20 bg-onyx-soft p-8 text-center sm:flex-row sm:items-start sm:text-left">
      <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-bronze font-display text-2xl font-bold text-onyx">
        TP
      </span>

      <div className="flex-1">
        <h2 className="font-display text-lg font-bold text-paper">Thomas Prud'homme</h2>
        <p className="mt-1 text-sm text-stone">{aboutPage.founderRole}</p>

        <div className="mt-4 flex flex-wrap justify-center gap-2 sm:justify-start">
          {aboutPage.founderSkills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-paper/12 px-3 py-1 text-xs text-paper/80"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap justify-center gap-3 sm:justify-start">
          <a
            href="https://thomastp.ch"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary !px-5 !py-2.5 text-sm"
          >
            {aboutPage.portfolioLabel} ↗
          </a>
          <a
            href="https://www.linkedin.com/in/thomas-tp"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary !px-5 !py-2.5 text-sm"
          >
            {aboutPage.linkedinLabel} ↗
          </a>
        </div>
      </div>
    </div>
  );
}
