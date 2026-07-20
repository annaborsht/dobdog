"use client";
import Link from "next/link";
import { useLang } from "@/components/LangContext";

export default function OurDogsPage() {
  const { t } = useLang();
  const o = t.ourDogs;
  const dogs = [
    { name: "Freya", data: o.freya, href: "/our-dogs/freya" },
    { name: "Sirius", data: o.sirius, href: "/our-dogs/sirius" },
    { name: "Mia", data: o.mia, href: "/our-dogs/mia" },
    { name: "Sahara", data: o.sahara, href: "/our-dogs/sahara" },
  ];
  return (
    <>
      <div className="article-hero article-hero--ourdogs">
        <p className="article-byline">{o.byline}</p>
        <h1>{o.title}</h1>
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
