/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { useLang } from "@/components/LangContext";

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
  const s = t.sahara; // Assuming 'sahara' translations exist in your context

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
        <h1>{s.title}</h1>
        <p className="article-byline">{s.byline}</p>
      </div>

      <div className="article-body">
        {/* Paragraphs */}
        <p>{s.p0}</p>
        <p>{s.p1}</p>
        <p>{s.p3}</p>
        {/* --- Sahara's Titles Section --- */}
        <div className="sahara-titles-container" style={{ margin: "2rem 0" }}>
          <h2>{s.titlesHeader || "Titles & Achievements"}</h2>

          <p>{s.p2}</p>
          <div
            className="titles-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))",
              gap: "10px",
              margin: "1rem 0",
            }}
          >
            {SAHARA_TITLES.map((title, index) => (
              <span
                key={index}
                className="title-badge"
                style={{
                  padding: "8px 12px",
                  background: "#f0f0f0",
                  borderRadius: "6px",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "0.9rem",
                }}
              >
                {title}
              </span>
            ))}
          </div>
        </div>
        {/* --- Diplomas & Documents Interactive Section --- */}
        <div className="sahara-documents" style={{ margin: "3rem 0" }}>
          <h2>{s.documentsHeader || "Diplomas & Certificates"}</h2>

          <div
            className="docs-layout"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              marginTop: "1rem",
            }}
          >
            {/* Sidebar / Tabs for Selection */}
            <div
              className="docs-tabs"
              style={{
                display: "flex",
                gap: "10px",
                flexWrap: "wrap",
              }}
            >
              {DIPLOMAS.map((doc) => (
                <button
                  key={doc.id}
                  onClick={() => setActiveDoc(doc)}
                  style={{
                    padding: "10px 16px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                    backgroundColor: activeDoc.id === doc.id ? "#000" : "#fff",
                    color: activeDoc.id === doc.id ? "#fff" : "#000",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  {doc.title}
                </button>
              ))}
            </div>

            {/* Document Preview Display Box */}
            <div
              className="docs-preview-window"
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "15px",
                backgroundColor: "#fafafa",
                minHeight: "400px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h3 style={{ marginBottom: "15px" }}>{activeDoc.title}</h3>

              {activeDoc.type === "pdf" ? (
                <iframe
                  src={`${activeDoc.src}#view=FitH`}
                  title={activeDoc.title}
                  width="100%"
                  height="500px"
                  style={{ border: "none", borderRadius: "4px" }}
                />
              ) : (
                <img
                  src={activeDoc.src}
                  alt={activeDoc.title}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "500px",
                    objectFit: "contain",
                    borderRadius: "4px",
                  }}
                />
              )}
            </div>
            {/* --- Pedigree Section --- */}
            <div className="sahara-pedigree" style={{ margin: "3rem 0" }}>
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
          </div>
        </div>

        {/* --- Photo Gallery Section --- */}
        <div className="sahara-photos">
          <h2>{s.photosHeader || "Фотографии"}</h2>

          <div className="photos-grid">
            {SAHARA_PHOTOS.map((photo) => (
              <button
                key={photo.id}
                className="photo-thumb"
                onClick={() => setLightboxPhoto(photo)}
              >
                <img src={photo.src} alt={photo.alt} />
              </button>
            ))}
          </div>
        </div>

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
