"use client";

import { useLang } from "@/components/LangContext";
import RevealOnScroll from "@/components/RevealOnScroll";
import Image from "next/image";
import PhotoGallery from "@/components/PhotoGallery";
import PedigreeTree from "@/components/PedigreeTree";
import { SAHARA_PEDIGREE } from "@/lib/pedigrees";
import TitleBadges from "@/components/TitleBadges";
import DiplomaViewer, { type Diploma } from "@/components/DiplomaViewer";

// List of Sahara's titles
const SAHARA_TITLES = [
  "EST JCH",
  "TLN WCup26",
  "TLN JWCup26",
  "LTU JW26",
  "LTU JCH",
  "TLNJW26",
  "EST GR JCH",
  "LVA JCH",
  "BALT JCH",
  "C.I.B.-J",
];

// Document data mapped directly from your files
const DIPLOMAS: Diploma[] = [
  {
    id: "est-gr-jch",
    title: "EST GR JCH",
    src: "/documents/sahara/estonian_grand_youth_champion.pdf",
    type: "pdf",
  },
  {
    id: "est-jch",
    title: "EST JCH",
    src: "/documents/sahara/estonian_youth_champion.pdf",
    type: "pdf",
  },
  {
    id: "lva-jch",
    title: "LVA JCH",
    src: "/documents/sahara/latvian_youth_champion.pdf",
    type: "pdf",
  },
  {
    id: "ltu-jch",
    title: "LTU JCH",
    src: "/documents/sahara/lithuanian_youth_champion.pdf",
    type: "pdf",
  },
  {
    id: "balt-jch",
    title: "BALT JCH",
    src: "/documents/sahara/baltic_junior_champion.pdf",
    type: "pdf",
  },
];

// Photo gallery images
const SAHARA_PHOTOS = [
  {
    id: "photo-1",
    src: "/images/sahara/1.jpeg",
    alt: "Sahara – champion Great Dane, photo 1",
  },
  {
    id: "photo-2",
    src: "/images/sahara/2.jpeg",
    alt: "Sahara – champion Great Dane, photo 2",
  },
  {
    id: "photo-3",
    src: "/images/sahara/3.jpeg",
    alt: "Sahara – champion Great Dane, photo 3",
  },
  {
    id: "photo-4",
    src: "/images/sahara/4.jpeg",
    alt: "Sahara – champion Great Dane, photo 4",
  },
  {
    id: "photo-5",
    src: "/images/sahara/5.jpeg",
    alt: "Sahara – champion Great Dane, photo 5",
  },
  {
    id: "photo-6",
    src: "/images/sahara/6.jpeg",
    alt: "Sahara – champion Great Dane, photo 6",
  },
  {
    id: "photo-7",
    src: "/images/sahara/7.jpeg",
    alt: "Sahara – champion Great Dane, photo 7",
  },
  {
    id: "photo-8",
    src: "/images/sahara/8.jpeg",
    alt: "Sahara – champion Great Dane, photo 8",
  },
  {
    id: "photo-9",
    src: "/images/sahara/9.jpeg",
    alt: "Sahara – champion Great Dane, photo 9",
  },
];

export default function SaharaPage() {
  const { t } = useLang();
  const s = t.sahara;

  return (
    <>
      {/* Hero Section */}
      <div className="article-hero article-hero--sahara">
        <Image
          src="/images/sahara/banner.jpeg"
          alt={s.title}
          fill
          priority
          sizes="100vw"
          className="article-hero-image"
        />
        <div className="article-hero-content">
          <h1>{s.title}</h1>
          <p className="article-byline">{s.byline}</p>
        </div>
      </div>

      <div className="article-body">
        {/* Paragraphs */}
        <p>{s.p0}</p>
        <p>{s.p1}</p>
        <p>{s.p3}</p>

        <RevealOnScroll>
          <TitleBadges
            header={s.titlesHeader}
            intro={s.p2}
            titles={SAHARA_TITLES}
          />
        </RevealOnScroll>

        <RevealOnScroll>
          <DiplomaViewer
            header={s.documentsHeader}
            diplomas={DIPLOMAS}
            openLabel={s.openDocument}
          />
        </RevealOnScroll>

        <RevealOnScroll>
          <PedigreeTree
            header={s.pedigreeHeader}
            entries={SAHARA_PEDIGREE}
            labels={{
              parents: s.parents,
              grandParents: s.grandParents,
              greatGrandParents: s.greatGrandParents,
            }}
          />
        </RevealOnScroll>

        <RevealOnScroll>
          <PhotoGallery header={s.photosHeader} photos={SAHARA_PHOTOS} />
        </RevealOnScroll>
      </div>
    </>
  );
}
