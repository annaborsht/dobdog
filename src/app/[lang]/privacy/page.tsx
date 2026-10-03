import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import PrivacyContent from "./content";

export default async function PrivacyPage({
  params,
}: PageProps<"/[lang]/privacy">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return <PrivacyContent lang={lang} />;
}
