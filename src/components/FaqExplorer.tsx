"use client";

import { useMemo, useState } from "react";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Reveal } from "@/components/Reveal";
import { TransitionLink as Link } from "@/components/TransitionLink";
import type { FaqItem } from "@/i18n/dictionary";

export interface FaqCategory {
  id: string;
  label: string;
  /** Link to the category's own dedicated page (a service page) -- omitted
   * for the general category, which has no page of its own. */
  href?: string;
  items: FaqItem[];
}

export function FaqExplorer({
  categories,
  allLabel,
  searchPlaceholder,
  noResultsLabel,
  learnMoreLabel,
}: {
  categories: FaqCategory[];
  allLabel: string;
  searchPlaceholder: string;
  noResultsLabel: string;
  learnMoreLabel: string;
}) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const normalizedQuery = query.trim().toLowerCase();

  // Pill counts always reflect the full, unfiltered category -- only the
  // sections below react to the current search/category selection, so
  // switching categories while a search is active doesn't make the pills
  // themselves jump around.
  const totalCount = categories.reduce((sum, category) => sum + category.items.length, 0);

  const visibleCategories = useMemo(() => {
    return categories
      .filter((category) => activeCategory === "all" || category.id === activeCategory)
      .map((category) => ({
        ...category,
        items: normalizedQuery
          ? category.items.filter(
              (item) =>
                item.question.toLowerCase().includes(normalizedQuery) ||
                item.answer.toLowerCase().includes(normalizedQuery),
            )
          : category.items,
      }))
      .filter((category) => category.items.length > 0);
  }, [categories, activeCategory, normalizedQuery]);

  return (
    <div>
      <div className="relative">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-stone"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        >
          <circle cx="10.5" cy="10.5" r="6.5" />
          <path d="M20 20l-4.35-4.35" />
        </svg>
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={searchPlaceholder}
          className="w-full rounded-full border border-paper/15 bg-onyx-soft py-3 pl-11 pr-4 text-sm text-paper outline-none transition-colors placeholder:text-stone focus:border-bronze"
        />
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActiveCategory("all")}
          className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
            activeCategory === "all"
              ? "border-bronze/40 bg-bronze/20 text-bronze"
              : "border-paper/15 bg-paper/5 text-paper/70 hover:border-bronze/30"
          }`}
        >
          {allLabel} ({totalCount})
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            onClick={() => setActiveCategory(category.id)}
            className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
              activeCategory === category.id
                ? "border-bronze/40 bg-bronze/20 text-bronze"
                : "border-paper/15 bg-paper/5 text-paper/70 hover:border-bronze/30"
            }`}
          >
            {category.label} ({category.items.length})
          </button>
        ))}
      </div>

      <div className="mt-10 flex flex-col gap-10">
        {visibleCategories.length === 0 && (
          <p className="text-center text-sm text-stone">{noResultsLabel}</p>
        )}
        {visibleCategories.map((category) => (
          <Reveal key={category.id}>
            <div>
              <div className="flex items-center justify-between gap-4">
                <h2 className="font-display text-base font-bold text-paper">{category.label}</h2>
                {category.href && (
                  <Link
                    href={category.href}
                    className="inline-flex shrink-0 items-center gap-1.5 text-xs font-medium text-bronze transition-colors hover:text-bronze-soft"
                  >
                    {learnMoreLabel}
                    <span aria-hidden>→</span>
                  </Link>
                )}
              </div>
              <FaqAccordion items={category.items} />
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
