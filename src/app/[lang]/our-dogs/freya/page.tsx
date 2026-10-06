"use client";
import { useLang } from "@/components/LangContext";
import RevealOnScroll from "@/components/RevealOnScroll";
import Image from "next/image";
import PhotoGallery from "@/components/PhotoGallery";
import PedigreeTree from "@/components/PedigreeTree";
import { FREYA_PEDIGREE } from "@/lib/pedigrees";
import TitleBadges from "@/components/TitleBadges";
import DiplomaViewer, { type Diploma } from "@/components/DiplomaViewer";

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

const DIPLOMAS: Diploma[] = [
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
  alt: `Freya – Dobermann female, photo ${i + 1}`,
}));

export default function FreyaPage() {
  const { t } = useLang();
  const f = t.freya;

  return (
    <>
      <div className="article-hero article-hero--freya">
        <Image
          src="/images/freya/banner.jpg"
          alt={f.title}
          fill
          priority
          sizes="100vw"
          className="article-hero-image"
        />
        <div className="article-hero-content">
          <h1>{f.title}</h1>
          <p className="article-byline">{f.byline}</p>
        </div>
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
          <TitleBadges header={f.titlesHeader} titles={FREYA_TITLES} />
        </RevealOnScroll>

        <RevealOnScroll>
          <DiplomaViewer header={f.documentsHeader} diplomas={DIPLOMAS} />
        </RevealOnScroll>

        <RevealOnScroll>
          <PedigreeTree
            header={f.pedigreeHeader}
            entries={FREYA_PEDIGREE}
            labels={{
              parents: f.parents,
              grandParents: f.grandParents,
              greatGrandParents: f.greatGrandParents,
            }}
          />
        </RevealOnScroll>

        <RevealOnScroll>
          <PhotoGallery header={f.photosHeader} photos={FREYA_PHOTOS} />
        </RevealOnScroll>
      </div>
    </>
  );
}
