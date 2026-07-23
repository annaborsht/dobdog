"use client";
import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/components/LangContext";

export default function DobermannPage() {
  const { t } = useLang();
  const d = t.dobermann;
  return (
    <>
      <div className="article-hero article-hero--dobermann">
        <Image
          className="article-hero-image"
          src="/images/dobermann/banner.jpg"
          alt={d.title || "Dobermann"}
          fill
          priority
          sizes="100vw"
        />
        <div className="article-hero-content">
          <h1>{d.title}</h1>
        </div>
      </div>
      <div className="article-body">
        <p>{d.p0}</p>
        <h2>{d.h1}</h2>
        <p>{d.p1}</p>
        <p>{d.p2}</p>
        <p>{d.p3}</p>
        <h2>{d.h2}</h2>
        <p>{d.p4}</p>
        <p>{d.p5}</p>
        <h2>{d.h3}</h2>
        <p>{d.p6}</p>
        <p>{d.p7}</p>
        <h2>{d.h4}</h2>
        <p>{d.p8}</p>
        <p>{d.p9}</p>
        <h2>{d.h5}</h2>
        <p>{d.p10}</p>
        <Link
          href="https://www.doberman.org.uk/the-breed/"
          target="_blank"
          rel="noopener noreferrer"
          className="source-link"
        >
          {d.source}
        </Link>
      </div>
    </>
  );
}
