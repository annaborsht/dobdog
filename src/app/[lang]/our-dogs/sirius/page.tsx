"use client";
import { useLang } from "@/components/LangContext";
import RevealOnScroll from "@/components/RevealOnScroll";
import { VIDEOS_SIRIUS } from "@/lib/videos";
import PhotoGallery from "@/components/PhotoGallery";
import PedigreeTree from "@/components/PedigreeTree";
import { SIRIUS_PEDIGREE } from "@/lib/pedigrees";
import Image from "next/image";

const SIRIUS_PHOTOS = [
  {
    id: "photo-1",
    src: "/images/sirius/1.jpg",
    alt: "Sirius – Dobermann male",
  },
];

const SIRIUS_VIDEOS = [
  { id: "video-1", src: VIDEOS_SIRIUS.portrait1 },
  { id: "video-2", src: VIDEOS_SIRIUS.portrait2 },
  { id: "video-3", src: VIDEOS_SIRIUS.portrait3 },
];

export default function SiriusPage() {
  const { t } = useLang();
  const s = t.sirius;

  return (
    <>
      <div className="article-hero article-hero--sirius">
        <Image
          src="/images/sirius/banner.jpg"
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
        <h2 className="section-title">{s.p0}</h2>
        <p>{s.p1}</p>
        <p>{s.p2}</p>
        <p>{s.p3}</p>
        <p>{s.p4}</p>

        <RevealOnScroll>
          <PedigreeTree
            header={s.pedigreeHeader}
            entries={SIRIUS_PEDIGREE}
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
            <h2>{s.videosHeader}</h2>

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
          <PhotoGallery header={s.photosHeader} photos={SIRIUS_PHOTOS} />
        </RevealOnScroll>
      </div>
    </>
  );
}
