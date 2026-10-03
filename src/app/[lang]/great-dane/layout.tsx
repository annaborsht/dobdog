import type { Metadata } from "next";
import { isLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]/great-dane">): Promise<Metadata> {
  const { lang } = await params;
  return isLocale(lang) ? pageMetadata("greatDane", lang) : {};
}

export default function Layout({
  children,
}: LayoutProps<"/[lang]/great-dane">) {
  return children;
}
