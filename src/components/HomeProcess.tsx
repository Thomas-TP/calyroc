import { Reveal } from "@/components/Reveal";
import type { Dictionary } from "@/i18n/dictionary";

export function HomeProcess({ dictionary }: { dictionary: Dictionary }) {
  const { processEyebrow, processTitle, processSteps } = dictionary.home;

  return (
    <section className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
      <Reveal>
        <p className="text-eyebrow">{processEyebrow}</p>
        <h2 className="text-display-md mt-4 max-w-2xl text-balance text-paper">{processTitle}</h2>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-6">
        {processSteps.map((step, index) => (
          <Reveal key={step.title} delay={index * 0.08}>
            <div className="relative pl-12 md:pl-0">
              <span className="absolute left-0 top-0 font-display text-2xl font-bold text-bronze/40 md:static md:block">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-0 font-display text-base font-bold text-paper md:mt-4">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone">{step.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
