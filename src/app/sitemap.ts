import type { MetadataRoute } from "next";
import { LOCALES, SITE_URL, localizePath } from "@/lib/i18n";
import { PAGE_PATHS, languageAlternates } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.values(PAGE_PATHS).flatMap((path) =>
    LOCALES.map((locale) => ({
      url: `${SITE_URL}${localizePath(path, locale)}`,
      changeFrequency: path === "/puppies" ? "weekly" : "monthly",
      priority: path === "/" || path === "/puppies" ? 1 : 0.7,
      alternates: { languages: languageAlternates(path) },
    })),
  );
}
