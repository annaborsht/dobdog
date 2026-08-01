/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { useState, useRef, MouseEvent, TouchEvent, KeyboardEvent } from "react";
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

  const [slideIndex, setSlideIndex] = useState(0);
  const touchStartX = useRef(0);

  const goTo = (i: number) =>
    setSlideIndex((i + PUPPY_PHOTOS.length) % PUPPY_PHOTOS.length);
  const nextSlide = () => goTo(slideIndex + 1);
  const prevSlide = () => goTo(slideIndex - 1);

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: TouchEvent) => {
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (diff > 50) prevSlide();
    if (diff < -50) nextSlide();
  };
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft") prevSlide();
    if (e.key === "ArrowRight") nextSlide();
  };

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
        <div
          className="photo-slider"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="photo-slider-frame">
            <button
              className="photo-slider-slide"
              onClick={() => setLightboxPhoto(PUPPY_PHOTOS[slideIndex])}
            >
              <img
                key={PUPPY_PHOTOS[slideIndex].src}
                src={PUPPY_PHOTOS[slideIndex].src}
                alt={PUPPY_PHOTOS[slideIndex].alt}
              />
            </button>

            {PUPPY_PHOTOS.length > 1 && (
              <>
                <button
                  className="photo-slider-arrow prev"
                  onClick={prevSlide}
                  aria-label="Previous photo"
                >
                  ‹
                </button>
                <button
                  className="photo-slider-arrow next"
                  onClick={nextSlide}
                  aria-label="Next photo"
                >
                  ›
                </button>
              </>
            )}
          </div>

          {PUPPY_PHOTOS.length > 1 && (
            <div className="photo-slider-dots">
              {PUPPY_PHOTOS.map((photo, i) => (
                <button
                  key={photo.id}
                  className={`photo-slider-dot ${i === slideIndex ? "active" : ""}`}
                  onClick={() => goTo(i)}
                  aria-label={`Go to photo ${i + 1}`}
                />
              ))}
            </div>
          )}
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