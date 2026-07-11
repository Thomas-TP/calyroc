import type { Dictionary } from "@/i18n/dictionary";

export function FounderCard({ aboutPage }: { aboutPage: Dictionary["aboutPage"] }) {
  return (
    <div className="flex flex-col items-center gap-6 rounded-2xl border border-bronze/20 bg-onyx-soft p-8 text-center sm:flex-row sm:items-start sm:text-left">
      {/* eslint-disable-next-line @next/next/no-img-element -- static pre-optimized asset, next/image untested with OpenNext on this project */}
      <img
        src="/images/thomas.webp"
        alt="Thomas Prud'homme"
        width={80}
        height={80}
        className="h-20 w-20 shrink-0 rounded-full border border-bronze/30 object-cover"
      />

      <div className="flex-1">
        <h2 className="font-display text-lg font-bold text-paper">Thomas Prud'homme</h2>
        <p className="mt-1 text-sm text-stone">{aboutPage.founderRole}</p>

        <div className="mt-4 flex flex-wrap justify-center gap-2 sm:justify-start">
          {aboutPage.whyPoints.map((point) => (
            <span
              key={point.title}
              className="rounded-full border border-paper/12 px-3 py-1 text-xs text-paper/80"
            >
              {point.title}
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
