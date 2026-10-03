"use client";
import NextLink from "next/link";
import type { ComponentProps } from "react";
import { useLang } from "./LangContext";
import { localizePath } from "@/lib/i18n";

/** next/link that prefixes internal hrefs with the current locale. */
export default function Link({
  href,
  ...props
}: ComponentProps<typeof NextLink>) {
  const { lang } = useLang();
  const localized =
    typeof href === "string" && href.startsWith("/")
      ? localizePath(href, lang)
      : href;
  return <NextLink href={localized} {...props} />;
}
