"use client";
import { useLang } from "@/components/LangContext";
import RevealOnScroll from "@/components/RevealOnScroll";
import { VIDEOS_SIRIUS } from "@/lib/videos";
import PhotoGallery from "@/components/PhotoGallery";
import PedigreeTree, { type PedigreeEntry } from "@/components/PedigreeTree";
import Image from "next/image";

const SIRIUS_PHOTOS = [
  { id: "photo-1", src: "/images/sirius/1.jpg", alt: "Sirius – Dobermann male" },
];

const SIRIUS_VIDEOS = [
  { id: "video-1", src: VIDEOS_SIRIUS.portrait1 },
  { id: "video-2", src: VIDEOS_SIRIUS.portrait2 },
  { id: "video-3", src: VIDEOS_SIRIUS.portrait3 },
];

const PEDIGREE: PedigreeEntry[] = [
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
export default function SiriusPage() {
  const { t } = useLang();
  const s = t.sirius;

  return (
    <>
      <div className="article-hero article-hero--sirius">
        <Image
          src="/images/sirius/banner.jpg"
          alt={s.title || "Sirius"}
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
        <h2 className="section-title">{s.p0}</h2>
        <p>{s.p1}</p>
        <p>{s.p2}</p>
        <p>{s.p3}</p>
        <p>{s.p4}</p>

        <RevealOnScroll>
          <PedigreeTree
            header={s.pedigreeHeader || "Pedigree"}
            entries={PEDIGREE}
            labels={{
              parents: s.parents,
              grandParents: s.grandParents,
              greatGrandParents: s.greatGrandParents,
              greatGreatGrandParents: s.greatgreatGrandParents,
            }}
          />
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

        <RevealOnScroll>
          <PhotoGallery
            header={s.photosHeader || "Фотографии"}
            photos={SIRIUS_PHOTOS}
          />
        </RevealOnScroll>
      </div>
    </>
  );
}
