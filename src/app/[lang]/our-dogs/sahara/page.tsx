"use client";

import { useLang } from "@/components/LangContext";
import RevealOnScroll from "@/components/RevealOnScroll";
import Image from "next/image";
import PhotoGallery from "@/components/PhotoGallery";
import PedigreeTree, { type PedigreeEntry } from "@/components/PedigreeTree";
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

// Add near the top of the file, alongside SAHARA_TITLES
const PEDIGREE: PedigreeEntry[] = [
  // Sire's side
  {
    gen: 1,
    side: "sire",
    row: "1 / span 4",
    reg: "IKCA74638",
    name: "Ballyfrawley The Show Must Go On",
  },
  {
    gen: 2,
    side: "sire",
    row: "1 / span 2",
    reg: "AKCWS25518101",
    name: "Von Charm's Return Of The King",
  },
  {
    gen: 2,
    side: "sire",
    row: "3 / span 2",
    reg: "IKCA02135",
    name: "Ballyfrawely All This And Heaven Too",
  },
  {
    gen: 3,
    side: "sire",
    row: "1",
    reg: "AKCWS09942704",
    name: "Jerdans Prince Of Vigo",
  },
  {
    gen: 3,
    side: "sire",
    row: "2",
    reg: "AKCWS10146703",
    name: "Shady Creeks Sister Golden Hair",
  },
  {
    gen: 3,
    side: "sire",
    row: "3",
    reg: "KCRCAR0902560",
    name: "Diplomatic's Nicolas Cage Jr To Garsak",
  },
  {
    gen: 3,
    side: "sire",
    row: "4",
    reg: "IKCY88531",
    name: "Ballyfrawely You Could Be Mine",
  },

  // Dam's side
  {
    gen: 1,
    side: "dam",
    row: "5 / span 4",
    reg: "SHSB767139",
    name: "Creed Danes A Star From Sahara",
  },
  {
    gen: 2,
    side: "dam",
    row: "5 / span 2",
    reg: "SHSB707661",
    name: "Captain America Vom Wasaland",
  },
  {
    gen: 2,
    side: "dam",
    row: "7 / span 2",
    reg: "SHSB743343",
    name: "Phillys-F De' Cinegeti",
  },
  {
    gen: 3,
    side: "dam",
    row: "5",
    reg: "AKCWS10839304",
    name: "Maitau's No Bones About It Paesan",
  },
  {
    gen: 3,
    side: "dam",
    row: "6",
    reg: "SHSB666496",
    name: "Love-Dane's Cute Polarqueen",
  },
  {
    gen: 3,
    side: "dam",
    row: "7",
    reg: "ROI13/120980",
    name: "Highesteem Wizard Of Cinegeti",
  },
  {
    gen: 3,
    side: "dam",
    row: "8",
    reg: "LOI12/62813",
    name: "Griselda-F De' Cinegeti",
  },
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
  { id: "photo-1", src: "/images/sahara/1.jpeg", alt: "Sahara" },
  { id: "photo-2", src: "/images/sahara/2.jpeg", alt: "Sahara" },
  { id: "photo-3", src: "/images/sahara/3.jpeg", alt: "Sahara" },
  { id: "photo-4", src: "/images/sahara/4.jpeg", alt: "Sahara" },
  { id: "photo-5", src: "/images/sahara/5.jpeg", alt: "Sahara" },
  { id: "photo-6", src: "/images/sahara/6.jpeg", alt: "Sahara" },
  { id: "photo-7", src: "/images/sahara/7.jpeg", alt: "Sahara" },
  { id: "photo-8", src: "/images/sahara/8.jpeg", alt: "Sahara" },
  { id: "photo-9", src: "/images/sahara/9.jpeg", alt: "Sahara" },
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
          alt={s.title || "Sahara"}
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
            header={s.titlesHeader || "Titles & Achievements"}
            intro={s.p2}
            titles={SAHARA_TITLES}
          />
        </RevealOnScroll>

        <RevealOnScroll>
          <DiplomaViewer
            header={s.documentsHeader || "Diplomas & Certificates"}
            diplomas={DIPLOMAS}
          />
        </RevealOnScroll>

        <RevealOnScroll>
          <PedigreeTree
            header={s.pedigreeHeader || "Pedigree"}
            entries={PEDIGREE}
            labels={{
              parents: s.parents,
              grandParents: s.grandParents,
              greatGrandParents: s.greatGrandParents,
            }}
          />
        </RevealOnScroll>

        <RevealOnScroll>
          <PhotoGallery
            header={s.photosHeader || "Фотографии"}
            photos={SAHARA_PHOTOS}
          />
        </RevealOnScroll>
      </div>
    </>
  );
}
