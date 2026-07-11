import { notFound } from "next/navigation";
import { ComingSoon } from "@/components/ComingSoon";
import { isLocale } from "@/i18n/locales";

export default async function CatchAllPage({
  params,
}: {
  params: Promise<{ locale: string; rest: string[] }>;
}) {
  const { locale, rest } = await params;
  if (!isLocale(locale)) notFound();

  return <ComingSoon path={`/${locale}/${rest.join("/")}`} />;
}
