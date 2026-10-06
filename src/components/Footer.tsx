"use client";
import Link from "./LocalizedLink";
import { useLang } from "./LangContext";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">DobDog Elegance</span>
          <p className="footer-tagline">
            <a href="mailto:contact@dobdog.com" className="footer-link">
              contact@dobdog.com
            </a>
          </p>
          <p className="footer-tagline">FB Heidi Ader</p>
          <p className="footer-tagline">Tallinn, Estonia</p>
        </div>
        <nav className="footer-nav">
          <Link href="/dobermann" className="footer-link">
            {t.nav.dobermann}
          </Link>
          <Link href="/great-dane" className="footer-link">
            {t.nav.greatDane}
          </Link>
          <Link href="/our-dogs" className="footer-link">
            {t.nav.ourDogs}
          </Link>
          <Link href="/puppies" className="footer-link">
            {t.nav.puppies}
          </Link>
          <Link href="/contact" className="footer-link">
            {t.nav.contact}
          </Link>
          <Link href="/privacy" className="footer-link">
            {t.nav.privacy}
          </Link>
        </nav>
        <p className="footer-copy">
          © {new Date().getFullYear()} DobDog Elegance. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
