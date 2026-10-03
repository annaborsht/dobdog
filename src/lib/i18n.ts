export const LOCALES = ["en", "et", "ru"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";
export const LANG_COOKIE = "dobdog-lang";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://dobdog.com"
).replace(/\/$/, "");

export const OG_LOCALE: Record<Locale, string> = {
  en: "en_GB",
  et: "et_EE",
  ru: "ru_RU",
};

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (LOCALES as readonly string[]).includes(value);
}

/** "/puppies" + "et" -> "/et/puppies"; "/" + "et" -> "/et" */
export function localizePath(path: string, locale: Locale): string {
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

/** Replace the locale segment of a pathname: "/en/puppies" -> "/et/puppies" */
export function swapLocale(pathname: string, locale: Locale): string {
  const [, first, ...rest] = pathname.split("/");
  const tail = isLocale(first) ? rest : [first, ...rest].filter(Boolean);
  return `/${[locale, ...tail].join("/")}`;
}
