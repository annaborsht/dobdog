import type { Metadata } from "next";
import { isLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]/our-dogs">): Promise<Metadata> {
  const { lang } = await params;
  return isLocale(lang) ? pageMetadata("ourDogs", lang) : {};
}

export default function Layout({ children }: LayoutProps<"/[lang]/our-dogs">) {
  return children;
}
