"use client";

import { useState } from "react";
import type { Dictionary, QuizQuestion } from "@/i18n/dictionary";

type Step = "type" | "pages" | "languages" | "result";

export function PackFinder({ pricingPage }: { pricingPage: Dictionary["pricingPage"] }) {
  const [step, setStep] = useState<Step>("type");
  const [type, setType] = useState<string | null>(null);
  const [pages, setPages] = useState<string | null>(null);
  const [languages, setLanguages] = useState<string | null>(null);

  const skipsToResult = type === "ecommerce" || type === "webapp";

  function selectType(value: string) {
    setType(value);
    setStep(value === "ecommerce" || value === "webapp" ? "result" : "pages");
  }

  function selectPages(value: string) {
    setPages(value);
    setStep("languages");
  }

  function selectLanguages(value: string) {
    setLanguages(value);
    setStep("result");
  }

  function goBack() {
    if (step === "pages") setStep("type");
    else if (step === "languages") setStep("pages");
    else if (step === "result") setStep(skipsToResult ? "type" : "languages");
  }

  function reset() {
    setType(null);
    setPages(null);
    setLanguages(null);
    setStep("type");
  }

  function packIndex(): number {
    if (type === "ecommerce" || type === "webapp") return 2;
    if (pages === "many") return 1;
    if (pages === "1" && languages === "1-2") return 0;
    return 1;
  }

  const resultPack = step === "result" ? pricingPage.packs[packIndex()] : undefined;
  const totalSteps = skipsToResult ? 2 : 4;
  const currentStepNumber = { type: 1, pages: 2, languages: 3, result: totalSteps }[step];

  return (
    <div className="mx-auto max-w-2xl rounded-2xl border border-bronze/20 bg-onyx-soft p-8">
      <p className="text-eyebrow">{pricingPage.finderEyebrow}</p>
      <h2 className="text-display-sm mt-3 text-paper">{pricingPage.finderTitle}</h2>
      <p className="mt-2 text-sm text-stone">{pricingPage.finderSubtitle}</p>

      {step !== "result" && (
        <div className="mt-6 flex gap-1.5">
          {Array.from({ length: totalSteps - 1 }, (_, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: fixed-length progress dots, never reordered
            <span
              key={i}
              className={`h-1 flex-1 rounded-full transition-colors ${
                i < currentStepNumber ? "bg-bronze" : "bg-paper/10"
              }`}
            />
          ))}
        </div>
      )}

      <div className="mt-6">
        {step !== "type" && (
          <button
            type="button"
            onClick={goBack}
            className="mb-4 text-xs text-stone transition-colors hover:text-paper"
          >
            ← {pricingPage.finderBackLabel}
          </button>
        )}

        {step === "type" && <QuestionBlock q={pricingPage.finderTypeQuestion} onSelect={selectType} />}
        {step === "pages" && (
          <QuestionBlock q={pricingPage.finderPagesQuestion} onSelect={selectPages} />
        )}
        {step === "languages" && (
          <QuestionBlock q={pricingPage.finderLanguagesQuestion} onSelect={selectLanguages} />
        )}
        {step === "result" && resultPack && (
          <div className="text-center">
            <p className="text-sm text-stone">{pricingPage.finderResultTitle}</p>
            <p className="mt-3 font-display text-2xl font-bold text-bronze">{resultPack.name}</p>
            <p className="mt-1 font-display text-3xl font-bold text-paper">{resultPack.price}</p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a href="#pricing-cards" className="btn-primary !px-5 !py-2.5 text-sm">
                {pricingPage.finderResultCta}
              </a>
              <button
                type="button"
                onClick={reset}
                className="btn-secondary !px-5 !py-2.5 text-sm"
              >
                {pricingPage.finderRestartLabel}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function QuestionBlock({
  q,
  onSelect,
}: {
  q: QuizQuestion;
  onSelect: (value: string) => void;
}) {
  return (
    <div>
      <h3 className="font-display text-base font-bold text-paper">{q.question}</h3>
      <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
        {q.options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => onSelect(opt.value)}
            className="rounded-xl border border-paper/12 px-4 py-3 text-left text-sm text-paper/85 transition-colors hover:border-bronze/50 hover:bg-bronze/5"
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
