"use client";
import { useLang } from "@/components/LangContext";

export default function MiaPage() {
  const { t } = useLang();
  const m = t.mia;
  return (
    <>
      <div className="article-hero article-hero--mia">
        <h1>{m.title}</h1>
      </div>
      <div className="article-body">
        <p>{m.p0}</p>
        <p>{m.p1}</p>
        <p>{m.p2}</p>

        <div className="mia-videos">
          <div className="mia-video-wrap">
            <video
              src="/videos/1.mp4"
              poster="/images/mia_1_thumbnail.png"
              controls
              playsInline
              preload="metadata"
              className="mia-video"
            />
          </div>
          <div className="mia-video-wrap">
            <video
              src="/videos/2.mp4"
              poster="/images/mia_2_thumbnail.png"
              controls
              playsInline
              preload="metadata"
              className="mia-video"
            />
          </div>
        </div>

        <p>{m.p3}</p>
        <p>{m.p4}</p>
        <p>{m.p5}</p>
      </div>
    </>
  );
}
