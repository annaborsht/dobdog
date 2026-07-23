/* eslint-disable @next/next/no-img-element */
"use client";
import { useLang } from "@/components/LangContext";
import { useState } from "react";
import RevealOnScroll from "@/components/RevealOnScroll";

const PEDIGREE = [
  // Sire's side
  {
    gen: 1,
    side: "sire",
    row: "1 / span 4",
    reg: "LŠVKD2983/20",
    name: "Teraline El Seras",
  },
  {
    gen: 2,
    side: "sire",
    row: "1 / span 2",
    reg: "LOE2369015",
    name: "Legend Goez on Astor",
  },
  {
    gen: 2,
    side: "sire",
    row: "3 / span 2",
    reg: "RKF4767845",
    name: "Teraline Arwen",
  },
  {
    gen: 3,
    side: "sire",
    row: "1",
    reg: "RKF29697/21",
    name: "Sant Kreal Idol",
  },
  {
    gen: 3,
    side: "sire",
    row: "2",
    reg: "LOE2131507",
    name: "Uruk-Hai Urissa del Jardin de Elfos",
  },
  {
    gen: 3,
    side: "sire",
    row: "3",
    reg: "LOE2183516",
    name: "Kronos's del valle de Las Aguilas",
  },
  {
    gen: 3,
    side: "sire",
    row: "4",
    reg: "RKF3562252",
    name: "Teraline Insolence",
  },

  // Dam's side
  {
    gen: 1,
    side: "dam",
    row: "5 / span 4",
    reg: "LV-DB-1937/18",
    name: "Teraline Gwendolin Happy Fly",
  },
  {
    gen: 2,
    side: "dam",
    row: "5 / span 2",
    reg: "RKF4162750",
    name: "Teraline Rohan",
  },
  {
    gen: 2,
    side: "dam",
    row: "7 / span 2",
    reg: "RKF4233638",
    name: "Teraline Sapphira",
  },
  {
    gen: 3,
    side: "dam",
    row: "5",
    reg: "LOF84394/10768",
    name: "Destiny's Phoenix Highway to Hell",
  },
  {
    gen: 3,
    side: "dam",
    row: "6",
    reg: "RKF2943971",
    name: "Teraline Ferra",
  },
  {
    gen: 3,
    side: "dam",
    row: "7",
    reg: "UKU0034925",
    name: "Oksamit de Grande Vinko",
  },
  {
    gen: 3,
    side: "dam",
    row: "8",
    reg: "RKF2323110",
    name: "Teraline Montera",
  },
];

const FREYA_TITLES = [
  "Grand Prix Slovakia winner 2025",
  "EST JCH",
  "EST CH",
  "EST GR JCH",
  "TLN JWCup26",
  "TLN WCup26",
  "TLN W24",
  "TLN JW26",
  "LVA JCH",
  "LVA CH",
  "LTU GRCH",
  "LTU CH",
  "LTU JW26",
  "LTU JCH",
  "LTU W24",
  "HUN CH",
  "POL CH",
  "CZE CH",
  "BALT JCH",
  "BALT CH",
  "BALT W25",
  "C.I.E",
  "C.I.B.-J",
];

const DIPLOMAS = [
  {
    id: "hun-ch",
    title: "HUN CH",
    src: "/documents/freya/1.pdf",
    type: "pdf",
  },
  {
    id: "C.I.B.-J",
    title: "C.I.B.-J",
    src: "/documents/freya/2.jpg",
    type: "jpg",
  },
  {
    id: "EST GCH",
    title: "EST GCH",
    src: "/documents/freya/3.pdf",
    type: "pdf",
  },
  {
    id: "est-jch",
    title: "EST JCH",
    src: "/documents/freya/plaks.pt475_260723-120810-39.pdf",
    type: "pdf",
  },
  {
    id: "tallinn-jw-2023",
    title: "Tallinn Junior Winner 2023",
    src: "/documents/freya/plaks.pt475_260723-120743-38.pdf",
    type: "pdf",
  },
  {
    id: "est-grand-ch",
    title: "EST Grand CH",
    src: "/documents/freya/plaks.pt475_260723-120851-3b.pdf",
    type: "pdf",
  },
  {
    id: "balt-jch",
    title: "BALT JCH",
    src: "/documents/freya/plaks.pt475_260723-120934-3d.pdf",
    type: "pdf",
  },
  {
    id: "lt-youth-ch",
    title: "Lithuanian Youth CH",
    src: "/documents/freya/plaks.pt475_260723-120911-3c.pdf",
    type: "pdf",
  },
  {
    id: "lv-ch",
    title: "Latvian CH",
    src: "/documents/freya/plaks.pt475_260723-121014-3f.pdf",
    type: "pdf",
  },
  {
    id: "lt-ch",
    title: "Lithuanian CH",
    src: "/documents/freya/plaks.pt475_260723-120956-3e.pdf",
    type: "pdf",
  },
  {
    id: "baltic-ch",
    title: "Baltic CH",
    src: "/documents/freya/plaks.pt475_260723-121036-40.pdf",
    type: "pdf",
  },
  {
    id: "tallinn-w-2024",
    title: "Tallinn Winner 2024",
    src: "/documents/freya/plaks.pt475_260723-121053-41.pdf",
    type: "pdf",
  },
  {
    id: "est-ch",
    title: "EST CH",
    src: "/documents/freya/plaks.pt475_260723-121123-42.pdf",
    type: "pdf",
  },
  {
    id: "lt-grand-ch",
    title: "Lithuanian Grand CH",
    src: "/documents/freya/plaks.pt475_260723-121144-43.pdf",
    type: "pdf",
  },
  {
    id: "cz-ch",
    title: "CZ CH",
    src: "/documents/freya/plaks.pt475_260723-121240-45.pdf",
    type: "pdf",
  },
];

// Photo gallery images
const FREYA_PHOTOS = Array.from({ length: 21 }, (_, i) => ({
  id: `photo-${i + 1}`,
  src: `/images/freya/${i + 1}.jpg`,
  alt: "Freya",
}));

export default function FreyaPage() {
  const { t } = useLang();
  const f = t.freya;

  const [activeDoc, setActiveDoc] = useState(DIPLOMAS[0]);

  const [lightboxPhoto, setLightboxPhoto] = useState<
    (typeof FREYA_PHOTOS)[number] | null
  >(null);

  return (
    <>
      <div className="article-hero article-hero--freya">
        <h1>{f.title}</h1>
        <p className="article-byline">{f.byline}</p>
      </div>

      <div className="article-body">
        <p>{f.p1}</p>
        <p>{f.p2}</p>
        <p>{f.p3}</p>
        <p>{f.p4}</p>
        <p>{f.p5}</p>
        <p>{f.p6}</p>
        <p>{f.p7}</p>

        <RevealOnScroll>
          <div className="dog-titles-section">
            <h2>{f.titlesHeader || "Titles & Achievements"}</h2>
            <div className="dog-titles-grid">
              {FREYA_TITLES.map((title, index) => (
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
            <h2>{f.documentsHeader || "Diplomas & Certificates"}</h2>

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
            <h2>{f.pedigreeHeader || "Pedigree"}</h2>

            <div className="pedigree-labels">
              <span>{f.parents}</span>
              <span>{f.grandParents}</span>
              <span>{f.greatGrandParents}</span>
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
            <h2>{f.photosHeader || "Фотографии"}</h2>

            <div className="photos-grid">
              {FREYA_PHOTOS.map((photo, i) => (
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
