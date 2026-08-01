/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { useState, MouseEvent } from "react";
import { useLang } from "@/components/LangContext";

const PUPPY_PHOTOS = Array.from({ length: 4 }, (_, i) => ({
  id: `photo-${i + 1}`,
  src: `/images/puppies/${i + 1}.png`,
  alt: "Puppy",
}));

export default function PuppiesPage() {
  const { t } = useLang();
  const p = t.puppies;

  const [transformOrigin, setTransformOrigin] =
    useState<string>("center center");

  const [lightboxPhoto, setLightboxPhoto] = useState<
    (typeof PUPPY_PHOTOS)[number] | null
  >(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setTransformOrigin(`${x}% ${y}%`);
  };

  return (
    <div className="puppies-cta">
      <h1>{p.title}</h1>
      <h2>{p.announcement}</h2>

      <div
        className="overflow-hidden rounded-lg cursor-zoom-in"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setTransformOrigin("center center")}
      >
        <img
          src="/images/puppies/poster.jpg"
          alt={p.title}
          className="puppies-poster w-full h-auto transition-transform duration-200 ease-out hover:scale-150"
          style={{ transformOrigin }}
        />
      </div>

      <div className="sahara-photos">
        <div className="photos-grid">
          {PUPPY_PHOTOS.map((photo, i) => (
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

      {lightboxPhoto && (
        <div className="photo-lightbox" onClick={() => setLightboxPhoto(null)}>
          <img src={lightboxPhoto.src} alt={lightboxPhoto.alt} />
        </div>
      )}

      <Link href="/contact" className="submit-btn">
        {p.cta}
      </Link>
    </div>
  );
}
