import type { PricingPack } from "@/i18n/dictionary";

export function PricingCard({
  pack,
  timelineLabel,
}: {
  pack: PricingPack;
  timelineLabel: string;
}) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-1 ${
        pack.highlighted
          ? "border-bronze/50 bg-onyx-soft shadow-[0_0_60px_-15px_rgba(201,165,103,0.35)] hover:border-bronze/70 md:scale-105"
          : "border-paper/10 bg-onyx-soft/50 hover:border-bronze/30"
      }`}
    >
      {pack.highlighted && (
        <span
          aria-hidden
          className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-bronze to-transparent"
        />
      )}
      <h3 className="font-display text-xl font-bold text-paper">{pack.name}</h3>
      <p className="mt-4 font-display text-3xl font-bold text-paper">{pack.price}</p>
      <p className="text-xs text-stone">{pack.priceNote}</p>
      <p className="mt-4 leading-relaxed text-stone">{pack.description}</p>
      <ul className="mt-6 flex-1 space-y-2">
        {pack.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-paper/85">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-bronze" />
            {f}
          </li>
        ))}
      </ul>
      <p className="mt-6 border-t border-paper/8 pt-4 text-xs text-stone">
        <span className="text-paper/60">{timelineLabel}:</span> {pack.timeline}
      </p>
    </div>
  );
}
