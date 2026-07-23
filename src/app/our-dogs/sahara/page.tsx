/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { useLang } from "@/components/LangContext";
import RevealOnScroll from "@/components/RevealOnScroll";
import Image from "next/image";

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
const PEDIGREE = [
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
const DIPLOMAS = [
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

  // State to track the currently selected document for viewing
  const [activeDoc, setActiveDoc] = useState(DIPLOMAS[0]);

  // State to track which photo is open in the lightbox (null = closed)
  const [lightboxPhoto, setLightboxPhoto] = useState<
    (typeof SAHARA_PHOTOS)[number] | null
  >(null);

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

        {/* --- Sahara's Titles Section --- */}
        <RevealOnScroll>
          <div className="dog-titles-section">
            <h2>{s.titlesHeader || "Titles & Achievements"}</h2>

            <p>{s.p2}</p>
            <div className="dog-titles-grid">
              {SAHARA_TITLES.map((title, index) => (
                <span
                  key={index}
                  className="dog-title-badge"
                  style={{ transitionDelay: `${index * 30}ms` }}
                >
                  {title}
                </span>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* --- Diplomas & Documents Interactive Section --- */}
        <RevealOnScroll>
          <div className="dog-documents-section">
            <h2>{s.documentsHeader || "Diplomas & Certificates"}</h2>

            <div className="dog-docs-layout">
              {/* Sidebar / Tabs for Selection */}
              <div className="dog-docs-tabs">
                {DIPLOMAS.map((doc) => (
                  <button
                    key={doc.id}
                    onClick={() => setActiveDoc(doc)}
                    className={`dog-doc-tab${activeDoc.id === doc.id ? " dog-doc-tab--active" : ""}`}
                  >
                    {doc.title}
                  </button>
                ))}
              </div>

              {/* Document Preview Display Box */}
              <div className="dog-docs-preview">
                <h3>{activeDoc.title}</h3>

                {activeDoc.type === "pdf" ? (
                  <iframe
                    src={`${activeDoc.src}#view=FitH`}
                    title={activeDoc.title}
                    width="100%"
                  />
                ) : (
                  <img src={activeDoc.src} alt={activeDoc.title} />
                )}
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* --- Pedigree Section --- */}
        <RevealOnScroll>
          <div className="dog-pedigree-section">
            <h2>{s.pedigreeHeader || "Pedigree"}</h2>

            <div className="pedigree-labels">
              <span>{s.parents}</span>
              <span>{s.grandParents}</span>
              <span>{s.greatGrandParents}</span>
            </div>

            <div className="pedigree-tree">
              {PEDIGREE.map((dog, i) => (
                <div
                  key={i}
                  className={`pedigree-cell pedigree-gen${dog.gen} pedigree-${dog.side}`}
                  style={{ gridRow: dog.row, gridColumn: dog.gen }}
                >
                  <span className="pedigree-name">{dog.name}</span>
                  <span className="pedigree-reg">{dog.reg}</span>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* --- Photo Gallery Section --- */}
        <RevealOnScroll>
          <div className="sahara-photos">
            <h2>{s.photosHeader || "Фотографии"}</h2>

            <div className="photos-grid">
              {SAHARA_PHOTOS.map((photo, i) => (
                <button
                  key={photo.id}
                  className="photo-thumb"
                  style={{ transitionDelay: `${(i % 6) * 60}ms` }}
                  onClick={() => setLightboxPhoto(photo)}
                >
                  <img src={photo.src} alt={photo.alt} />
                </button>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* Lightbox overlay for viewing a photo full-size */}
        {lightboxPhoto && (
          <div
            className="photo-lightbox"
            onClick={() => setLightboxPhoto(null)}
          >
            <img src={lightboxPhoto.src} alt={lightboxPhoto.alt} />
          </div>
        )}
      </div>
    </>
  );
}
