import { Reveal } from "@/components/Reveal";
import { TransitionLink as Link } from "@/components/TransitionLink";
import { services } from "@/content/services";
import type { Dictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/locales";
import { serviceSlugs } from "@/i18n/routes";

export function ServicesGrid({
  servicesPage,
  locale,
}: {
  servicesPage: Dictionary["servicesPage"];
  locale: Locale;
}) {
  return (
    <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
      {servicesPage.items.map((item, index) => {
        // servicesPage.items is authored in the same fixed order as the
        // services barrel (see src/content/services/index.ts), so the
        // array index maps directly to a ServiceId -- dictionary items
        // stay locale-only display copy, while the stable id/slug lives in
        // the content layer.
        const service = services[index];
        const href = service
          ? `/${locale}/services/${serviceSlugs[service.id][locale]}`
          : undefined;
        const card = (
          <article className="rounded-2xl border border-paper/10 bg-onyx-soft p-8 transition-all duration-300 hover:-translate-y-1 hover:border-bronze/30">
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
        );
        return (
          <Reveal key={item.title} delay={(index % 2) * 0.08} variant="scale">
            {href ? (
              <Link href={href} className="block">
                {card}
              </Link>
            ) : (
              card
            )}
          </Reveal>
        );
      })}
    </div>
  );
}
