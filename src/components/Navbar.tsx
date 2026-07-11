"use client";
import Link from "next/link";
import { useState } from "react";
import { useLang, type Lang } from "./LangContext";

const LANGS: { code: Lang; flag: string; label: string }[] = [
  { code: "et", flag: "🇪🇪", label: "Eesti" },
  { code: "en", flag: "🇬🇧", label: "English" },
  { code: "ru", flag: "🇷🇺", label: "Русский" },
];

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [dogsOpen, setDogsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const current = LANGS.find(l => l.code === lang)!;

  return (
    <header className="navbar">
      <nav className="navbar-inner">
        <Link href="/" className="navbar-brand">DobDog Elegance</Link>

        {/* Desktop nav */}
        <ul className="nav-links">
          <li><Link href="/" className="nav-link">{t.nav.home}</Link></li>
          <li><Link href="/dobermann" className="nav-link">{t.nav.dobermann}</Link></li>
          <li><Link href="/great-dane" className="nav-link">{t.nav.greatDane}</Link></li>

          <li
            className="nav-dropdown"
            onMouseEnter={() => setDogsOpen(true)}
            onMouseLeave={() => setDogsOpen(false)}
          >
            <button className="nav-link nav-dropdown-btn">{t.nav.ourDogs} ▾</button>
            {dogsOpen && (
              <ul className="dropdown-menu">
                <li><Link href="/our-dogs/freya" className="dropdown-item">Freya</Link></li>
                <li><Link href="/our-dogs/sirius" className="dropdown-item">Sirius</Link></li>
                <li><Link href="/our-dogs/mia" className="dropdown-item">Mia</Link></li>
                <li><Link href="/our-dogs/sahara" className="dropdown-item">Sahara</Link></li>
              </ul>
            )}
          </li>

          <li><Link href="/puppies" className="nav-link">{t.nav.puppies}</Link></li>
          <li><Link href="/contact" className="nav-link">{t.nav.contact}</Link></li>

          {/* ── Language selector ── */}
          <li
            className="nav-dropdown lang-selector"
            onMouseEnter={() => setLangOpen(true)}
            onMouseLeave={() => setLangOpen(false)}
          >
            <button className="nav-link nav-dropdown-btn lang-btn" aria-label="Select language">
              <span className="lang-flag">{current.flag}</span>
              <span className="lang-code">{current.code.toUpperCase()}</span>
              <span className="lang-chevron">▾</span>
            </button>
            {langOpen && (
              <ul className="dropdown-menu lang-menu">
                {LANGS.map(l => (
                  <li key={l.code}>
                    <button
                      className={`dropdown-item lang-option${lang === l.code ? " lang-active" : ""}`}
                      onClick={() => { setLang(l.code); setLangOpen(false); }}
                    >
                      <span className="lang-flag">{l.flag}</span>
                      <span>{l.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {mobileOpen && (
        <div className="mobile-menu">
          <Link href="/" className="mobile-link" onClick={() => setMobileOpen(false)}>{t.nav.home}</Link>
          <Link href="/dobermann" className="mobile-link" onClick={() => setMobileOpen(false)}>{t.nav.dobermann}</Link>
          <Link href="/great-dane" className="mobile-link" onClick={() => setMobileOpen(false)}>{t.nav.greatDane}</Link>
          <Link href="/our-dogs/freya" className="mobile-link" onClick={() => setMobileOpen(false)}>Freya</Link>
          <Link href="/our-dogs/sirius" className="mobile-link" onClick={() => setMobileOpen(false)}>Sirius</Link>
          <Link href="/our-dogs/mia" className="mobile-link" onClick={() => setMobileOpen(false)}>Mia</Link>
          <Link href="/our-dogs/sahara" className="mobile-link" onClick={() => setMobileOpen(false)}>Sahara</Link>
          <Link href="/puppies" className="mobile-link" onClick={() => setMobileOpen(false)}>{t.nav.puppies}</Link>
          <Link href="/contact" className="mobile-link" onClick={() => setMobileOpen(false)}>{t.nav.contact}</Link>

          {/* Mobile language row */}
          <div className="mobile-lang-row">
            {LANGS.map(l => (
              <button
                key={l.code}
                className={`mobile-lang-btn${lang === l.code ? " mobile-lang-active" : ""}`}
                onClick={() => { setLang(l.code); setMobileOpen(false); }}
              >
                <span>{l.flag}</span>
                <span>{l.code.toUpperCase()}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
