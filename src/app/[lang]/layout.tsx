import type { Metadata } from "next";
import { Playfair_Display, Source_Serif_4 } from "next/font/google";
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
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
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
    <html lang={lang}>
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
                logo: `${SITE_URL}/images/Logo_original.jpg`,
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
