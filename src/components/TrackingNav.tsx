import { TransitionLink as Link } from "@/components/TransitionLink";

export function TrackingNav({
  locale,
  token,
  active,
  overviewLabel,
  paymentsLabel,
}: {
  locale: string;
  token: string;
  active: "overview" | "payments";
  overviewLabel: string;
  paymentsLabel: string;
}) {
  const tabClass = (isActive: boolean) =>
    `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
      isActive ? "bg-bronze/15 text-bronze" : "text-stone hover:text-paper"
    }`;

  return (
    <div className="mt-10 flex w-fit gap-1 rounded-full border border-paper/10 bg-onyx-soft p-1">
      <Link href={`/${locale}/suivi/${token}`} className={tabClass(active === "overview")}>
        {overviewLabel}
      </Link>
      <Link href={`/${locale}/suivi/${token}/paiement`} className={tabClass(active === "payments")}>
        {paymentsLabel}
      </Link>
    </div>
  );
}
