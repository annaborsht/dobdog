/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { useState, useRef, MouseEvent, TouchEvent, KeyboardEvent } from "react";
import { useLang } from "@/components/LangContext";
import PedigreeTree, { type PedigreeEntry } from "@/components/PedigreeTree";

const PUPPY_PHOTOS: {
  id: string;
  src: string;
  alt: string;
  caption?: string;
}[] = [
  {
    id: "photo-1",
    src: "/images/puppies/1.png",
    alt: "Puppy",
    caption:
      "Allegro on toreda iseloomuga dobermannipoiss, kes otsib tõsise huviga armastavat kodu. Ta on sobilik nii spordiks kui ka näitustel osalemiseks.",
  },
  {
    id: "photo-2",
    src: "/images/puppies/2.png",
    alt: "Puppy",
  },
  {
    id: "photo-3",
    src: "/images/puppies/3.png",
    alt: "Puppy",
  },
  {
    id: "photo-4",
    src: "/images/puppies/4.png",
    alt: "Puppy",
  },
];

const A_LITTER: {
  id: string;
  name: string;
  href?: string;
  flag?: string;
  locationKey?: "estonia" | "finland";
  available?: boolean;
}[] = [
  {
    id: "allegro-a-priori",
    name: "Allegro A Priori",
    available: true,
  },
  {
    id: "armageddons-hope",
    name: "Armageddons Hope",
    href: "/our-dogs/armageddons_hope",
    flag: "🇪🇪",
    locationKey: "estonia",
  },
  {
    id: "a-rose-garden",
    name: "A Rose Garden",
    flag: "🇪🇪",
    locationKey: "estonia",
  },
  {
    id: "anouchka-at-ozone",
    name: "Anouchka At Ozone",
    flag: "🇫🇮",
    locationKey: "finland",
  },
];

// Pedigree for the 'A' litter (sire Korifey Vanquish x dam Fortuna Freya
// Happy Fly) — source: https://register.kennelliit.ee/dogs/400071
const A_LITTER_PEDIGREE: PedigreeEntry[] = [
  // Sire's side
  {
    gen: 1,
    side: "sire",
    row: "1 / span 4",
    reg: "KCAX02483802",
    name: "Korifey Vanquish",
  },
  {
    gen: 2,
    side: "sire",
    row: "1 / span 2",
    reg: "RKF4891873",
    name: "Sant Kreal Bellator",
  },
  {
    gen: 2,
    side: "sire",
    row: "3 / span 2",
    reg: "KCAX0901739",
    name: "Saltiga Iz Zoosfery",
  },
  {
    gen: 3,
    side: "sire",
    row: "1",
    reg: "ROI14/162",
    name: "Ebay Del Tibur",
  },
  {
    gen: 3,
    side: "sire",
    row: "2",
    reg: "RKF3392185",
    name: "Sant Kreal Centara",
  },
  {
    gen: 3,
    side: "sire",
    row: "3",
    reg: "LCCLOF281140/12535",
    name: "Gangster Dandias De La Villa Valiano",
  },
  {
    gen: 3,
    side: "sire",
    row: "4",
    reg: "RKF3378173",
    name: "Holland Rose Iz Zoosfery",
  },

  // Dam's side
  {
    gen: 1,
    side: "dam",
    row: "5 / span 4",
    reg: "EST-01040/23",
    name: "Fortuna Freya Happy Fly",
  },
  {
    gen: 2,
    side: "dam",
    row: "5 / span 2",
    reg: "LŠVKD2983/20",
    name: "Teraline El Seras",
  },
  {
    gen: 2,
    side: "dam",
    row: "7 / span 2",
    reg: "LV-DB-1937/18",
    name: "Teraline Gwendolin Happy Fly",
  },
  {
    gen: 3,
    side: "dam",
    row: "5",
    reg: "LOE2369015",
    name: "Legend Goez on Astor",
  },
  {
    gen: 3,
    side: "dam",
    row: "6",
    reg: "RKF4767845",
    name: "Teraline Arwen",
  },
  {
    gen: 3,
    side: "dam",
    row: "7",
    reg: "RKF4162750",
    name: "Teraline Rohan",
  },
  {
    gen: 3,
    side: "dam",
    row: "8",
    reg: "RKF4233638",
    name: "Teraline Sapphira",
  },
];

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

      <section className="a-litter-section">
        <h2>{p.aLitterHeader}</h2>

        <ul className="litter-roster">
          {A_LITTER.map((puppy) => (
            <li key={puppy.id} className="litter-roster-item">
              <span className="litter-puppy-name">
                {puppy.href ? (
                  <Link href={puppy.href}>{puppy.name}</Link>
                ) : (
                  puppy.name
                )}
              </span>
              {puppy.available ? (
                <span className="cta-badge">{p.available}</span>
              ) : (
                <span className="litter-puppy-location">
                  {puppy.locationKey === "finland" ? p.finland : p.estonia}
                  <span className="puppy-flag" aria-hidden="true">
                    {puppy.flag}
                  </span>
                </span>
              )}
            </li>
          ))}
        </ul>

        <h2>{p.photosHeader}</h2>

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

            {PUPPY_PHOTOS[slideIndex].caption && (
              <p className="photo-slider-caption">
                {PUPPY_PHOTOS[slideIndex].caption}
              </p>
            )}
          </div>
        </div>

        {lightboxPhoto && (
          <div
            className="photo-lightbox"
            onClick={() => setLightboxPhoto(null)}
          >
            <img src={lightboxPhoto.src} alt={lightboxPhoto.alt} />
          </div>
        )}

        <PedigreeTree
          header={p.pedigreeHeader}
          entries={A_LITTER_PEDIGREE}
          labels={{
            parents: p.parents,
            grandParents: p.grandParents,
            greatGrandParents: p.greatGrandParents,
          }}
        />
      </section>

      <Link href="/contact" className="submit-btn">
        {p.cta}
      </Link>
    </div>
  );
}
