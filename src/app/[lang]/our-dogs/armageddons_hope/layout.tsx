import type { Metadata } from "next";
import { isLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]/our-dogs/armageddons_hope">): Promise<Metadata> {
  const { lang } = await params;
  return isLocale(lang) ? pageMetadata("armageddonsHope", lang) : {};
}

export default function Layout({
  children,
}: LayoutProps<"/[lang]/our-dogs/armageddons_hope">) {
  return children;
}
