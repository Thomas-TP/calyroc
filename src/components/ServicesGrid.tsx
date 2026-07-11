import { Reveal } from "@/components/Reveal";
import type { Dictionary } from "@/i18n/dictionary";

export function ServicesGrid({ servicesPage }: { servicesPage: Dictionary["servicesPage"] }) {
  return (
    <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
      {servicesPage.items.map((item, index) => (
        <Reveal key={item.title} delay={(index % 2) * 0.08}>
          <article className="rounded-2xl border border-paper/10 bg-onyx-soft p-8 transition-colors hover:border-bronze/30">
            <h2 className="font-display text-xl font-bold text-paper">{item.title}</h2>
            <p className="mt-3 leading-relaxed text-stone">{item.description}</p>
            <ul className="mt-5 space-y-2">
              {item.includes.map((inc) => (
                <li key={inc} className="flex items-start gap-2 text-sm text-paper/80">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-bronze" />
                  {inc}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-1 border-t border-paper/8 pt-4 text-xs text-stone">
              <span>
                <span className="text-paper/60">{servicesPage.techLabel}:</span> {item.tech}
              </span>
              <span>
                <span className="text-paper/60">{servicesPage.timelineLabel}:</span> {item.timeline}
              </span>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
