"use client";
import { useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  objectPosition?: string;
}

export default function PhotoGallery({
  photos,
  header,
  subheader,
  caption,
}: {
  photos: GalleryPhoto[];
  header?: string;
  subheader?: string;
  caption?: string;
}) {
  const [lightboxPhoto, setLightboxPhoto] = useState<GalleryPhoto | null>(null);

  return (
    <div className="sahara-photos">
      {header && <h2>{header}</h2>}
      {subheader && <p className="photo-gallery-subheader">{subheader}</p>}

      <div className="photos-grid">
        {photos.map((photo, i) => (
          <button
            key={photo.id}
            className="photo-thumb"
            style={{ transitionDelay: `${(i % 6) * 60}ms` }}
            onClick={() => setLightboxPhoto(photo)}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              style={{ objectPosition: photo.objectPosition }}
              sizes="(max-width: 480px) 90vw, (max-width: 768px) 45vw, 220px"
            />
          </button>
        ))}
        {caption && <p className="photos-caption">{caption}</p>}
      </div>

      {lightboxPhoto &&
        createPortal(
          <div
            className="photo-lightbox"
            onClick={() => setLightboxPhoto(null)}
          >
            <div className="photo-lightbox-frame">
              <Image
                src={lightboxPhoto.src}
                alt={lightboxPhoto.alt}
                fill
                sizes="90vw"
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
}
