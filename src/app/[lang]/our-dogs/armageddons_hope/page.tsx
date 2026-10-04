"use client";
import { useLang } from "@/components/LangContext";
import Image from "next/image";
import RevealOnScroll from "@/components/RevealOnScroll";
import PhotoGallery from "@/components/PhotoGallery";
import PedigreeTree from "@/components/PedigreeTree";
import { A_LITTER_PEDIGREE } from "@/lib/pedigrees";

const PHOTO_BASE_URL =
  "https://mmwjaafneskfdl7c.public.blob.vercel-storage.com/armageddons_hope";

const ARMAGEDDONS_HOPE_PHOTOS = [
  "armageddon_173",
  "armageddon_793",
  "armageddon_5570",
].map((id, i) => ({
  id,
  src: `${PHOTO_BASE_URL}/${id}.jpg`,
  alt: `Armageddons Hope – Dobermann puppy, photo ${i + 1}`,
}));

export default function ArmageddonsHopePage() {
  const { t } = useLang();
  const a = t.armageddonsHope;
  const p = t.puppies;

  return (
    <>
      <div className="article-hero article-hero--armageddonshope">
        <Image
          src={`${PHOTO_BASE_URL}/armageddon_5570.jpg`}
          alt={a.title}
          fill
          priority
          sizes="100vw"
          className="article-hero-image"
        />
        <div className="article-hero-content">
          <h1>{a.title}</h1>
          <p className="article-byline">{a.byline}</p>
        </div>
      </div>

      <div className="article-body">
        {/* Filler description — swap in the real text whenever it's ready */}
        <p>{a.p0}</p>
        <p>{a.p1}</p>
        <p>{a.p2}</p>

        <RevealOnScroll>
          <PedigreeTree
            header={a.pedigreeHeader}
            entries={A_LITTER_PEDIGREE}
            labels={{
              parents: p.parents,
              grandParents: p.grandParents,
              greatGrandParents: p.greatGrandParents,
            }}
          />
        </RevealOnScroll>

        <RevealOnScroll>
          <PhotoGallery
            header={a.photosHeader}
            photos={ARMAGEDDONS_HOPE_PHOTOS}
          />
        </RevealOnScroll>
      </div>
    </>
  );
}
