/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { useState, MouseEvent } from "react";
import { useLang } from "@/components/LangContext";
import PedigreeTree, { type PedigreeEntry } from "@/components/PedigreeTree";
import PhotoGallery, { type GalleryPhoto } from "@/components/PhotoGallery";

const BLOB_BASE_URL = "https://mmwjaafneskfdl7c.public.blob.vercel-storage.com";

const A_LITTER: {
  id: string;
  name: string;
  href?: string;
  flag?: string;
  locationKey?: "estonia" | "finland";
  available?: boolean;
  caption?: string;
  photos: GalleryPhoto[];
}[] = [
  {
    id: "allegro-a-priori",
    name: "Allegro A Priori",
    available: true,
    caption:
      "Allegro on toreda iseloomuga dobermannipoiss, kes otsib tõsise huviga armastavat kodu. Ta on sobilik nii spordiks kui ka näitustel osalemiseks.",
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
    flag: "🇪🇪",
    locationKey: "estonia",
    photos: ["armageddon_173", "armageddon_716", "armageddon_793"].map(
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
    flag: "🇪🇪",
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
    flag: "🇫🇮",
    locationKey: "finland",
    photos: ["anouchka_039", "anouchka_6007", "anouchka_075"].map((id) => ({
      id,
      src: `${BLOB_BASE_URL}/anouchka/${id}.jpg`,
      alt: "Anouchka At Ozone",
    })),
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
                      {puppy.flag}
                    </span>
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>

        <PhotoGallery header={selectedPuppy.name} photos={selectedPuppy.photos} />

        {selectedPuppy.caption && (
          <p className="photo-slider-caption">{selectedPuppy.caption}</p>
        )}

        {selectedPuppy.href && (
          <Link href={selectedPuppy.href} className="source-link">
            {selectedPuppy.name} →
          </Link>
        )}

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
