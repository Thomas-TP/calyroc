import { Reveal } from "@/components/Reveal";
import type { Dictionary } from "@/i18n/dictionary";

export function PriceCompareWidget({ dictionary }: { dictionary: Dictionary }) {
  const { home, pricingPage } = dictionary;
  const proPack = pricingPage.packs.find((pack) => pack.highlighted) ?? pricingPage.packs[0]!;

  return (
    <section className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
      <Reveal>
        <p className="text-eyebrow">{home.priceCompareEyebrow}</p>
        <h2 className="text-display-md mt-4 max-w-2xl text-balance text-paper">
          {home.priceCompareTitle}
        </h2>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        <Reveal delay={0.1}>
          <div className="flex h-full flex-col rounded-2xl border border-paper/10 bg-onyx-soft/40 p-8">
            <p className="font-display text-xs font-medium uppercase tracking-[0.2em] text-stone">
              {home.priceCompareAgencyLabel}
            </p>
            <ul className="mt-6 flex-1 space-y-3">
              {home.priceCompareItems.map((item) => (
                <li key={item.label} className="flex items-baseline justify-between gap-4 text-sm">
                  <span className="text-paper/70">{item.label}</span>
                  <span className="whitespace-nowrap text-stone">{item.range}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t border-paper/8 pt-5">
              <p className="text-impact text-3xl leading-none text-stone/50 line-through decoration-2 md:text-4xl">
                {home.priceCompareAgencyTotal}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-bronze/40 bg-onyx-soft p-8 text-center shadow-[0_0_60px_-15px_rgba(201,165,103,0.35)]">
            <p className="font-display text-xs font-medium uppercase tracking-[0.2em] text-bronze">
              {home.priceCompareCalyrocLabel}
            </p>
            <p className="text-impact mt-6 text-5xl leading-none text-bronze md:text-6xl">
              {proPack.price}
            </p>
            <p className="mt-3 text-sm text-stone">
              {proPack.name} — {proPack.priceNote}
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.3}>
        <p className="mt-6 max-w-2xl text-xs leading-relaxed text-stone">{home.priceCompareNote}</p>
      </Reveal>
    </section>
  );
}
