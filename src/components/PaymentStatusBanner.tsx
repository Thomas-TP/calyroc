import type { Dictionary } from "@/i18n/dictionary";

export function PaymentStatusBanner({
  status,
  contactPage,
}: {
  status: "success" | "cancelled";
  contactPage: Dictionary["contactPage"];
}) {
  const isSuccess = status === "success";

  return (
    <div
      className={`mx-auto mb-8 flex max-w-xl flex-col items-center gap-1 rounded-2xl border px-6 py-5 text-center ${
        isSuccess
          ? "border-bronze/30 bg-bronze/10 text-bronze"
          : "border-red-400/30 bg-red-400/10 text-red-400"
      }`}
    >
      <p className="font-display text-base font-bold">
        {isSuccess ? contactPage.paymentSuccessTitle : contactPage.paymentCancelledTitle}
      </p>
      <p className="text-sm text-paper/75">
        {isSuccess ? contactPage.paymentSuccessBody : contactPage.paymentCancelledBody}
      </p>
    </div>
  );
}
