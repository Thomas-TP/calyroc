import { notFound } from "next/navigation";
import { Hero } from "@/components/Hero";
import { getDictionary } from "@/i18n/dictionary";
import { isLocale, type Locale } from "@/i18n/locales";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dictionary = getDictionary(locale as Locale);

  return <Hero dictionary={dictionary} locale={locale as Locale} />;
}
