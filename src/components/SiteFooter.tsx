import type { Dictionary } from "@/i18n/dictionary";

export function SiteFooter({ dictionary }: { dictionary: Dictionary }) {
  return (
    <footer className="border-t border-paper/8 px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 text-sm text-stone md:flex-row md:items-center">
        <p className="font-display text-paper">Calyroc</p>
        <p>{dictionary.footer.tagline}</p>
      </div>
    </footer>
  );
}
