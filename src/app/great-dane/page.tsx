"use client";
import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/components/LangContext";

export default function GreatDanePage() {
  const { t } = useLang();
  const g = t.greatDane;

  return (
    <>
      <div className="article-hero article-hero--greatDane">
        <Image
          className="article-hero-image"
          src="/images/greatDane/banner2.png"
          alt={g.title}
          fill
          priority
          sizes="100vw"
        />
        <h1>{g.title}</h1>
      </div>
      <div className="article-body">
        <p>{g.p0}</p>
        <h2>{g.h1}</h2>
        <p>{g.p1}</p>
        <h2>{g.h2}</h2>
        <p>{g.p3}</p>
        <h2>{g.h3}</h2>
        <p>{g.p4}</p>
        <h2>{g.h4}</h2>
        <p>{g.p5}</p>
        <h2>{g.h5}</h2>
        <p>{g.p6}</p>
        <Link
          href="https://www.creeddanes.ch/en/the-breed/"
          target="_blank"
          rel="noopener noreferrer"
          className="source-link"
        >
          {g.source}
        </Link>
      </div>
    </>
  );
}
