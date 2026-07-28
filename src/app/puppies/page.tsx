/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { useState, MouseEvent } from "react";
import { useLang } from "@/components/LangContext";

export default function PuppiesPage() {
  const { t } = useLang();
  const p = t.puppies;

  const [transformOrigin, setTransformOrigin] =
    useState<string>("center center");

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

      <Link href="/contact" className="submit-btn">
        {p.cta}
      </Link>
    </div>
  );
}
