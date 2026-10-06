import type { Metadata } from "next";
import {
  Playfair_Display,
  Qwitcher_Grypen,
  Source_Serif_4,
} from "next/font/google";
import localFont from "next/font/local";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LangProvider } from "@/components/LangContext";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { LOCALES, SITE_URL, isLocale } from "@/lib/i18n";
import { SITE_NAME, pageMetadata } from "@/lib/seo";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["400", "600", "700", "800"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-body",
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["300", "400", "600"],
});

// Script font for banner titles. It has no Cyrillic, so Russian letters fall
// through to Bad Script, scaled down to match Qwitcher's letter height.
// No metric-matched fallback here, or it would catch Cyrillic first.
const qwitcher = Qwitcher_Grypen({
  variable: "--font-qwitcher",
  subsets: ["latin", "latin-ext"],
  weight: "400",
  adjustFontFallback: false,
});

const badScriptCyrillic = localFont({
  variable: "--font-script-cyrillic",
  src: "../../fonts/BadScript-cyrillic.woff2",
  weight: "400",
  adjustFontFallback: false,
  declarations: [
    { prop: "size-adjust", value: "52%" },
    {
      prop: "unicode-range",
      value: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
    },
  ],
});

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  return {
    metadataBase: new URL(SITE_URL),
    ...(isLocale(lang) ? pageMetadata("home", lang) : {}),
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const { description } = pageMetadata("home", lang);

  return (
    <html
      lang={lang}
      className={`${qwitcher.variable} ${badScriptCyrillic.variable}`}
    >
      <body className={`${playfair.variable} ${sourceSerif.variable}`}>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": `${SITE_URL}/#organization`,
                name: SITE_NAME,
                url: SITE_URL,
                logo: `${SITE_URL}/images/logo-icon.png`,
                email: "contact@dobdog.com",
                description,
                foundingDate: "2024",
                address: { "@type": "PostalAddress", addressCountry: "EE" },
              },
              {
                "@type": "WebSite",
                "@id": `${SITE_URL}/#website`,
                url: SITE_URL,
                name: SITE_NAME,
                inLanguage: lang,
                publisher: { "@id": `${SITE_URL}/#organization` },
              },
            ],
          }}
        />
        <LangProvider lang={lang}>
          <Navbar />
          <main className="page-content">{children}</main>
          <Footer />
        </LangProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
