/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { useLang } from "@/components/LangContext";
import RevealOnScroll from "@/components/RevealOnScroll";
import Image from "next/image";

const SIRIUS_PHOTOS = [
  { id: "photo-1", src: "/images/sirius/1.jpg", alt: "Sirius" },
];

const SIRIUS_VIDEOS = [
  { id: "video-1", src: "/videos/sirius/1.mp4" },
  { id: "video-2", src: "/videos/sirius/2.mp4" },
  { id: "video-3", src: "/videos/sirius/3.mp4" },
];

const PEDIGREE = [
  // Sire's side
  {
    gen: 1,
    side: "sire",
    row: "1 / span 8",
    reg: "FI19437/13",
    name: "DENWEST UNIQUE DREAM",
  },
  {
    gen: 2,
    side: "sire",
    row: "1 / span 4",
    reg: "FI15731/10",
    name: "DINICO UNICO DEL CONTE DRAGO",
  },
  {
    gen: 2,
    side: "sire",
    row: "5 / span 4",
    reg: "FIN10892/07",
    name: "DENWEST X-MAS DREAM",
  },
  {
    gen: 3,
    side: "sire",
    row: "1 / span 2",
    reg: "DZB116308",
    name: "YGOR VOM KLINGBACH",
  },
  {
    gen: 3,
    side: "sire",
    row: "3 / span 2",
    reg: "FIN19968/04",
    name: "DINICO BRINNA BRIELLE",
  },
  {
    gen: 3,
    side: "sire",
    row: "5 / span 2",
    reg: "FIN19374/04",
    name: "A'DREAMS MAGNUM",
  },
  {
    gen: 3,
    side: "sire",
    row: "7 / span 2",
    reg: "FIN37649/03",
    name: "TAHI-REME YOGOBELLA",
  },
  {
    gen: 4,
    side: "sire",
    row: "5",
    reg: "FIN15301/02",
    name: "A'DREAMS PILOT",
  },
  {
    gen: 4,
    side: "sire",
    row: "6",
    reg: "FIN20298/97",
    name: "A'DREAMS RHEA",
  },
  {
    gen: 4,
    side: "sire",
    row: "7",
    reg: "LOI98/38607",
    name: "ILANE DARAFAL",
  },
  {
    gen: 4,
    side: "sire",
    row: "8",
    reg: "METDOB1628/98",
    name: "TAHI-REME LOLLY",
  },

  // Dam's side
  {
    gen: 1,
    side: "dam",
    row: "9 / span 8",
    reg: "FI30350/16",
    name: "TAIKAVIITAN WALMIS-WASTAUS",
  },
  {
    gen: 2,
    side: "dam",
    row: "9 / span 4",
    reg: "FI41161/15",
    name: "QUIRINUS VON NEMESIS",
  },
  {
    gen: 2,
    side: "dam",
    row: "13 / span 4",
    reg: "FI51533/12",
    name: "TAIKAVIITAN UUSI-UNELMA",
  },
  {
    gen: 3,
    side: "dam",
    row: "9 / span 2",
    reg: "LOI07/54594",
    name: "ALE'ALAMOS DEL CITONE",
  },
  {
    gen: 3,
    side: "dam",
    row: "11 / span 2",
    reg: "VDH/DV125126",
    name: "NOVALIS VON NEMESIS",
  },
  {
    gen: 3,
    side: "dam",
    row: "13 / span 2",
    reg: "FI21069/10",
    name: "SANT KREAL CHE GUEVARA",
  },
  {
    gen: 3,
    side: "dam",
    row: "15 / span 2",
    reg: "FI26093/09",
    name: "TAIKAVIITAN TÄÄLTÄ-TULLAAN",
  },
  {
    gen: 4,
    side: "dam",
    row: "9",
    reg: "LOI05/47687",
    name: "PATHOS DELLE QUERCE NERE",
  },
  {
    gen: 4,
    side: "dam",
    row: "10",
    reg: "LOI01/116325",
    name: "RAMONARASHI DEL CITONE",
  },
  {
    gen: 4,
    side: "dam",
    row: "11",
    reg: "VDH/DZB121484",
    name: "HILO VON NEMESIS",
  },
  {
    gen: 4,
    side: "dam",
    row: "13",
    reg: "RKF2295907",
    name: "GRAND MOLLIS ARMANI",
  },
  {
    gen: 4,
    side: "dam",
    row: "14",
    reg: "RKF1890254",
    name: "SANT KREAL DOMINO",
  },
];
const maxGen = Math.max(...PEDIGREE.map((d) => d.gen));

export default function SiriusPage() {
  const { t } = useLang();
  const s = t.sirius;
  const [lightboxPhoto, setLightboxPhoto] = useState<
    (typeof SIRIUS_PHOTOS)[number] | null
  >(null);

  return (
    <>
      <div className="article-hero article-hero--sirius">
        <h1>{s.title}</h1>
        <p className="article-byline">{s.byline}</p>
      </div>
      <div className="article-body">
        <h2 className="section-title">{s.p0}</h2>
        <p>{s.p1}</p>
        <p>{s.p2}</p>
        <p>{s.p3}</p>
        <p>{s.p4}</p>

        <RevealOnScroll>
          <div className="dog-documents-section">
            <div className="dog-docs-layout">
              {/* --- Pedigree Section --- */}
              <div className="dog-pedigree-section">
                <h2>{s.pedigreeHeader || "Pedigree"}</h2>

                <div
                  className="pedigree-labels"
                  style={{ "--pedigree-gens": maxGen } as React.CSSProperties}
                >
                  <span>{s.parents}</span>
                  <span>{s.grandParents}</span>
                  <span>{s.greatGrandParents}</span>
                  {maxGen >= 4 && <span>{s.greatgreatGrandParents}</span>}
                </div>

                <div
                  className="pedigree-tree"
                  style={
                    {
                      "--pedigree-gens": maxGen,
                      "--pedigree-rows": Math.pow(2, maxGen),
                    } as React.CSSProperties
                  }
                >
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
        </RevealOnScroll>
        {/* --- Video Section --- */}
        <RevealOnScroll>
          <div className="sirius-videos">
            <h2>{s.videosHeader || "Видео"}</h2>

            <div className="portrait-video-grid">
              {SIRIUS_VIDEOS.map((video) => (
                <div key={video.id} className="portrait-video-wrap">
                  <video
                    className="portrait-video"
                    src={video.src}
                    controls
                    playsInline
                    muted
                    loop
                    preload="metadata"
                  />
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
              {SIRIUS_PHOTOS.map((photo) => (
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
        </RevealOnScroll>

        {/* Lightbox overlay for viewing a photo full-size */}
        {lightboxPhoto && (
          <div
            className="photo-lightbox"
            onClick={() => setLightboxPhoto(null)}
          >
            <div
              style={{ position: "relative", width: "90vw", height: "90vh" }}
            >
              <Image
                src={lightboxPhoto.src}
                alt={lightboxPhoto.alt}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
