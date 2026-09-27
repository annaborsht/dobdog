/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import RevealOnScroll from "@/components/RevealOnScroll";

// TODO: replace with your actual Vercel Blob store base URL once the
// photos are uploaded, e.g.
// "https://<your-store-id>.public.blob.vercel-storage.com/armageddons_hope"
const PHOTO_BASE_URL =
  "https://mmwjaafneskfdl7c.public.blob.vercel-storage.com/armageddons_hope/compressed";

const ARMAGEDDONS_HOPE_PHOTOS = [
  "6T1A5173",
  "6T1A5570",
  "6T1A5716",
  "6T1A5744",
  "6T1A5781",
].map((id) => ({
  id,
  src: `${PHOTO_BASE_URL}/${id}.jpg`,
  alt: "Dobdog Elegance Armageddons Hope",
}));

export default function ArmageddonsHopePage() {
  const [lightboxPhoto, setLightboxPhoto] = useState<
    (typeof ARMAGEDDONS_HOPE_PHOTOS)[number] | null
  >(null);

  return (
    <>
      <div className="article-hero article-hero--armageddonshope">
        <div className="article-hero-content">
          <h1>Dobdog Elegance Armageddons Hope</h1>
          <p className="article-byline">DOB 25.07.2026</p>
        </div>
      </div>

      <div className="article-body">
        {/* Filler description — swap in the real text whenever it's ready */}
        <p>
          Dobdog Elegance Armageddons Hope is the newest member of our pack,
          born on the 25th of July, 2026. From the very first days, this little
          one has already shown a spark of curiosity and confidence that
          promises great things ahead.
        </p>
        <p>
          Growing up surrounded by love, gentle guidance, and plenty of
          socialization, Armageddons Hope is being raised the same way every
          DobDog Elegance puppy is — with patience, care, and an eye toward a
          healthy, balanced future.
        </p>
        <p>
          As the weeks go on, we&apos;ll be updating this page with more photos,
          milestones, and stories as this pup continues to grow and explore the
          world.
        </p>

        {/* --- Photo Gallery Section --- */}
        <RevealOnScroll>
          <div className="sahara-photos">
            <h2>Photos</h2>

            <div className="photos-grid">
              {ARMAGEDDONS_HOPE_PHOTOS.map((photo, i) => (
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
