/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { useLang } from "@/components/LangContext";

export default function PuppiesPage() {
  const { t } = useLang();
  const p = t.puppies;
  return (
    <div className="puppies-cta">
      <h1>{p.title}</h1>
      <img
        src="/images/puppies/poster.jpg"
        alt={p.title}
        className="puppies-poster"
      />
      <Link href="/contact" className="submit-btn">
        {p.cta}
      </Link>
    </div>
  );
}
