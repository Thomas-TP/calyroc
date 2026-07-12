import type { FaqItem } from "@/i18n/dictionary";

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="mt-4 flex flex-col divide-y divide-paper/8">
      {items.map((item) => (
        <details key={item.question} className="group py-4">
          <summary className="flex list-none items-center justify-between gap-4 font-display text-sm font-medium text-paper transition-colors hover:text-bronze marker:content-none [&::-webkit-details-marker]:hidden">
            {item.question}
            <span
              aria-hidden
              className="shrink-0 text-lg text-bronze transition-transform duration-300 group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-stone">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
