"use client";
import { useLang } from "@/components/LangContext";
import RevealOnScroll from "@/components/RevealOnScroll";
import Image from "next/image";

export default function MiaPage() {
  const { t } = useLang();
  const m = t.mia;
  return (
    <>
      <div className="article-hero article-hero--mia">
        <Image
          src="/images/mia/banner.png"
          alt={m.title || "Mia"}
          fill
          priority
          sizes="100vw"
          className="article-hero-image"
        />
        <div className="article-hero-content">
          <h1>{m.title}</h1>
        </div>
      </div>
      <div className="article-body">
        <p>{m.p0}</p>
        <p>{m.p1}</p>
        <p>{m.p2}</p>
        <RevealOnScroll>
          <div className="portrait-video-grid">
            <div className="portrait-video-wrap">
              <video
                src="/videos/mia/1.mp4"
                poster="/images/mia_1_thumbnail.png"
                controls
                playsInline
                preload="metadata"
                className="portrait-video"
              />
            </div>
            <div className="portrait-video-wrap">
              <video
                src="/videos/mia/2.mp4"
                poster="/images/mia_2_thumbnail.png"
                controls
                playsInline
                preload="metadata"
                className="portrait-video"
              />
            </div>
          </div>
        </RevealOnScroll>

        <p>{m.p3}</p>
        <p>{m.p4}</p>
        <p>{m.p5}</p>
      </div>
    </>
  );
}
