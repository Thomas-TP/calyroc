"use client";

import Script from "next/script";
import { useActionState } from "react";
import { type ContactState, submitContactForm } from "@/app/actions";
import { CustomSelect } from "@/components/CustomSelect";
import type { Dictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/locales";
import { TURNSTILE_SITE_KEY } from "@/lib/turnstile";

const initialState: ContactState = { status: "idle" };

export function ContactForm({
  contactPage,
  locale,
}: {
  contactPage: Dictionary["contactPage"];
  locale: Locale;
}) {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

  return (
    <form action={formAction} className="mt-10 flex flex-col gap-5">
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
        async
        defer
      />
      <input type="hidden" name="locale" value={locale} />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <Field label={contactPage.formName} name="name" required />
        <Field label={contactPage.formEmail} name="email" type="email" required />
      </div>

      <div className="flex flex-col gap-2">
        <span className="font-display text-sm text-paper/80">{contactPage.formBudget}</span>
        <CustomSelect
          name="budget"
          ariaLabel={contactPage.formBudget}
          options={contactPage.formBudgetOptions.map((opt) => ({ value: opt, label: opt }))}
          triggerClassName="w-full px-4 py-3"
        />
      </div>

      <label className="flex flex-col gap-2">
        <span className="font-display text-sm text-paper/80">{contactPage.formMessage}</span>
        <textarea
          name="message"
          required
          minLength={10}
          rows={6}
          placeholder={contactPage.formMessagePlaceholder}
          className="resize-none rounded-lg border border-paper/15 bg-transparent px-4 py-3 text-paper outline-none transition-colors focus:border-bronze"
        />
      </label>

      <div
        className="cf-turnstile"
        data-sitekey={TURNSTILE_SITE_KEY}
        data-action="turnstile-spin-v1"
        data-theme="dark"
      />

      <button
        type="submit"
        disabled={isPending}
        className="btn-primary self-start disabled:opacity-60"
      >
        {isPending ? contactPage.formSubmitting : contactPage.formSubmit}
      </button>

      {state.status === "success" && (
        <p className="text-sm text-bronze">{contactPage.formSuccess}</p>
      )}
      {state.status === "error" && <p className="text-sm text-red-400">{contactPage.formError}</p>}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-display text-sm text-paper/80">{label}</span>
      <input
        type={type}
        name={name}
        required={required}
        className="rounded-lg border border-paper/15 bg-transparent px-4 py-3 text-paper outline-none transition-colors focus:border-bronze"
      />
    </label>
  );
}
