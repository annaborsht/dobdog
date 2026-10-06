/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";

export interface Diploma {
  id: string;
  title: string;
  src: string;
  type: "pdf" | "jpg";
}

export default function DiplomaViewer({
  header,
  diplomas,
  openLabel,
}: {
  header?: string;
  diplomas: Diploma[];
  openLabel: string;
}) {
  const [activeDoc, setActiveDoc] = useState(diplomas[0]);

  return (
    <div className="dog-documents-section">
      {header && <h2>{header}</h2>}

      <div className="dog-docs-layout">
        <div className="dog-docs-tabs">
          {diplomas.map((doc) => (
            <button
              key={doc.id}
              type="button"
              aria-pressed={activeDoc.id === doc.id}
              onClick={() => setActiveDoc(doc)}
              className={`dog-doc-tab${activeDoc.id === doc.id ? " dog-doc-tab--active" : ""}`}
            >
              {doc.title}
            </button>
          ))}
        </div>

        <div className="dog-docs-preview">
          <h3>{activeDoc.title}</h3>

          {activeDoc.type === "pdf" ? (
            <iframe
              src={`${activeDoc.src}#view=FitH`}
              title={activeDoc.title}
              width="100%"
            />
          ) : (
            <img src={activeDoc.src} alt={activeDoc.title} />
          )}

          {/* Embedded PDFs are cramped on phones; let people open the full file */}
          <a
            href={activeDoc.src}
            target="_blank"
            rel="noopener noreferrer"
            className="dog-docs-open"
          >
            {openLabel} ↗
          </a>
        </div>
      </div>
    </div>
  );
}
