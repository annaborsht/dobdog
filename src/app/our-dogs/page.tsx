"use client";
import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/components/LangContext";

// Not yet wired into LangContext translations — add en/et/ru entries
// under t.ourDogs.armageddonsHope later if you want this localized too.
const ARMAGEDDONS_HOPE = {
  breed: "Dobermann · Puppy",
  blurb:
    "Born 25.07.2026 — the newest member of our pack, full of curiosity and promise.",
  link: "Read more →",
};

export default function OurDogsPage() {
  const { t } = useLang();
  const o = t.ourDogs;
  const dogs = [
    { name: "Freya", data: o.freya, href: "/our-dogs/freya" },
    { name: "Sirius", data: o.sirius, href: "/our-dogs/sirius" },
    { name: "Mia", data: o.mia, href: "/our-dogs/mia" },
    { name: "Sahara", data: o.sahara, href: "/our-dogs/sahara" },
    {
      name: "Armageddons Hope",
      data: ARMAGEDDONS_HOPE,
      href: "/our-dogs/armageddons_hope",
    },
  ];

  return (
    <>
      <div className="article-hero article-hero--ourdogs">
        <Image
          src="/images/ourDogs/banner_cropped.jpg"
          alt={o.title || "Our Dogs"}
          fill
          priority
          sizes="100vw"
          className="article-hero-image"
        />
        <div className="article-hero-content">
          <p className="article-byline">{o.byline}</p>
          <h1>{o.title}</h1>
        </div>
      </div>
      <div className="dogs-grid">
        {dogs.map(({ name, data, href }) => (
          <div key={name} className="dog-card">
            <div className="dog-card-body">
              <h3>{name}</h3>
              <p
                style={{
                  fontSize: "0.8rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: "0.5rem",
                }}
              >
                {data.breed}
              </p>
              <p>{data.blurb}</p>
              <Link href={href} className="dog-card-link">
                {data.link}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
