/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { useState, MouseEvent } from "react";
import { useLang } from "@/components/LangContext";
import Flag, { type FlagCode } from "@/components/Flag";
import PedigreeTree from "@/components/PedigreeTree";
import { A_LITTER_PEDIGREE } from "@/lib/pedigrees";
import PhotoGallery, { type GalleryPhoto } from "@/components/PhotoGallery";

const BLOB_BASE_URL = "https://mmwjaafneskfdl7c.public.blob.vercel-storage.com";

const A_LITTER: {
  id: string;
  name: string;
  href?: string;
  flag?: FlagCode;
  locationKey?: "estonia" | "finland";
  available?: boolean;
  photos: GalleryPhoto[];
}[] = [
  {
    id: "allegro-a-priori",
    name: "Allegro A Priori",
    available: true,
    photos: ["allegro_841", "allegro_852"].map((id) => ({
      id,
      src: `${BLOB_BASE_URL}/allegro/${id}.jpg`,
      alt: "Allegro A Priori",
    })),
  },
  {
    id: "armageddons-hope",
    name: "Armageddons Hope",
    href: "/our-dogs/armageddons_hope",
    flag: "ee",
    locationKey: "estonia",
    photos: ["armageddon_173", "armageddon_793", "armageddon_5570"].map(
      (id) => ({
        id,
        src: `${BLOB_BASE_URL}/armageddons_hope/${id}.jpg`,
        alt: "Armageddons Hope",
      }),
    ),
  },
  {
    id: "a-rose-garden",
    name: "A Rose Garden",
    flag: "ee",
    locationKey: "estonia",
    photos: ["roosi_634", "roosi_690", "roosi_682"].map((id) => ({
      id,
      src: `${BLOB_BASE_URL}/roosi/${id}.jpg`,
      alt: "A Rose Garden",
    })),
  },
  {
    id: "anouchka-at-ozone",
    name: "Anouchka At Ozone",
    flag: "fi",
    locationKey: "finland",
    photos: ["anouchka_039", "anouchka_075", "anouchka_4873"].map((id) => ({
      id,
      src: `${BLOB_BASE_URL}/anouchka/${id}.jpg`,
      alt: "Anouchka At Ozone",
    })),
  },
];

export default function PuppiesPage() {
  const { t } = useLang();
  const p = t.puppies;

  const [transformOrigin, setTransformOrigin] =
    useState<string>("center center");

  const [selectedPuppyId, setSelectedPuppyId] = useState(A_LITTER[0].id);
  const selectedPuppy =
    A_LITTER.find((puppy) => puppy.id === selectedPuppyId) ?? A_LITTER[0];

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
              <button
                type="button"
                className={`litter-roster-select ${
                  puppy.id === selectedPuppyId ? "active" : ""
                }`}
                onClick={() => setSelectedPuppyId(puppy.id)}
              >
                <span className="litter-puppy-name">{puppy.name}</span>
                {puppy.available ? (
                  <span className="cta-badge">{p.available}</span>
                ) : (
                  <span className="litter-puppy-location">
                    {puppy.locationKey === "finland" ? p.finland : p.estonia}
                    <span className="puppy-flag" aria-hidden="true">
                      {puppy.flag && <Flag code={puppy.flag} />}
                    </span>
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>

        <PhotoGallery
          header={selectedPuppy.name}
          subheader={p.puppyAge}
          photos={selectedPuppy.photos}
        />

        {selectedPuppy.id === "allegro-a-priori" && (
          <p className="photo-slider-caption">{p.allegroCaption}</p>
        )}

        {selectedPuppy.href && (
          <Link href={selectedPuppy.href} className="source-link">
            {selectedPuppy.name} →
          </Link>
        )}

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
