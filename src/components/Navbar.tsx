/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import Link from "./LocalizedLink";
import {
  useState,
  useEffect,
  useId,
  useRef,
  type KeyboardEvent,
  type PointerEvent,
  type ReactNode,
} from "react";
import { useLang, type Lang } from "./LangContext";
import Flag, { type FlagCode } from "./Flag";

const DOG_LINKS = [
  { href: "/our-dogs/freya", name: "Freya" },
  { href: "/our-dogs/sirius", name: "Sirius" },
  { href: "/our-dogs/mia", name: "Mia" },
  { href: "/our-dogs/sahara", name: "Sahara" },
  { href: "/our-dogs/armageddons_hope", name: "Armageddon" },
];

const LANGS: { code: Lang; flag: FlagCode; label: string }[] = [
  { code: "et", flag: "ee", label: "Eesti" },
  { code: "en", flag: "gb", label: "English" },
  { code: "ru", flag: "ru", label: "Русский" },
];

/**
 * Dropdown that opens on mouse hover, and on click/tap/keyboard for everyone
 * else. Closes on Escape, outside click, or when focus leaves it.
 */
function NavDropdown({
  className = "",
  buttonClassName,
  buttonLabel,
  buttonContent,
  menuClassName = "",
  children,
}: {
  className?: string;
  buttonClassName: string;
  buttonLabel?: string;
  buttonContent: ReactNode;
  menuClassName?: string;
  children: (close: () => void) => ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLLIElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();
  const lastPointer = useRef<string | null>(null);
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: globalThis.PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  const onKeyDown = (e: KeyboardEvent<HTMLLIElement>) => {
    if (e.key === "Escape" && open) {
      setOpen(false);
      buttonRef.current?.focus();
    } else if (e.key === "ArrowDown" && e.target === buttonRef.current) {
      e.preventDefault();
      setOpen(true);
      // Wait for the menu to render, then focus its first item.
      requestAnimationFrame(() =>
        rootRef.current
          ?.querySelector<HTMLElement>(
            ".dropdown-menu a, .dropdown-menu button",
          )
          ?.focus(),
      );
    }
  };

  // Hover only for real mice; on touch the tap (click) toggles instead.
  const onPointerEnter = (e: PointerEvent) => {
    if (e.pointerType === "mouse") setOpen(true);
  };
  const onPointerLeave = (e: PointerEvent) => {
    if (e.pointerType === "mouse") setOpen(false);
  };

  return (
    <li
      ref={rootRef}
      className={`nav-dropdown ${className}`.trim()}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      onKeyDown={onKeyDown}
      onBlur={(e) => {
        if (!rootRef.current?.contains(e.relatedTarget as Node)) close();
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        className={buttonClassName}
        aria-label={buttonLabel}
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={menuId}
        onPointerDown={(e) => {
          lastPointer.current = e.pointerType;
        }}
        onClick={() => {
          // A mouse has already opened it on hover, so a click shouldn't close it.
          if (lastPointer.current === "mouse") setOpen(true);
          else setOpen((o) => !o);
          lastPointer.current = null;
        }}
      >
        {buttonContent}
      </button>
      {open && (
        <ul id={menuId} className={`dropdown-menu ${menuClassName}`.trim()}>
          {children(close)}
        </ul>
      )}
    </li>
  );
}

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [puppiesSeen, setPuppiesSeen] = useState(true); // default true to avoid SSR flash

  useEffect(() => {
    const seen = localStorage.getItem("puppiesBadgeSeen");
    setPuppiesSeen(seen === "true");
  }, []);

  const dismissPuppiesBadge = () => {
    localStorage.setItem("puppiesBadgeSeen", "true");
    setPuppiesSeen(true);
  };

  const current = LANGS.find((l) => l.code === lang)!;

  return (
    <header className="navbar">
      <nav className="navbar-inner">
        <Link href="/" className="navbar-brand">
          DobDog Elegance
        </Link>

        {/* Desktop nav */}
        <ul className="nav-links">
          <li>
            <Link href="/" className="nav-link">
              {t.nav.home}
            </Link>
          </li>
          <li>
            <Link href="/dobermann" className="nav-link">
              {t.nav.dobermann}
            </Link>
          </li>
          <li>
            <Link href="/great-dane" className="nav-link">
              {t.nav.greatDane}
            </Link>
          </li>

          <NavDropdown
            buttonClassName="nav-link nav-dropdown-btn"
            buttonContent={<>{t.nav.ourDogs} ▾</>}
          >
            {(close) =>
              DOG_LINKS.map(({ href, name }) => (
                <li key={href}>
                  <Link href={href} className="dropdown-item" onClick={close}>
                    {name}
                  </Link>
                </li>
              ))
            }
          </NavDropdown>

          <li>
            <Link
              href="/puppies"
              className="nav-link nav-link-badge-wrap"
              onClick={dismissPuppiesBadge}
            >
              {t.nav.puppies}
              {!puppiesSeen && <span className="nav-badge-dot" />}
            </Link>
          </li>

          <li>
            <Link href="/contact" className="nav-link">
              {t.nav.contact}
            </Link>
          </li>

          {/* ── Language selector ── */}
          <NavDropdown
            className="lang-selector"
            buttonClassName="nav-link nav-dropdown-btn lang-btn"
            buttonLabel="Select language"
            buttonContent={
              <>
                <span className="lang-flag">
                  <Flag code={current.flag} />
                </span>
                <span className="lang-code">{current.code.toUpperCase()}</span>
                <span className="lang-chevron">▾</span>
              </>
            }
            menuClassName="lang-menu"
          >
            {(close) =>
              LANGS.map((l) => (
                <li key={l.code}>
                  <button
                    type="button"
                    lang={l.code}
                    aria-current={lang === l.code ? "true" : undefined}
                    className={`dropdown-item lang-option${lang === l.code ? " lang-active" : ""}`}
                    onClick={() => {
                      setLang(l.code);
                      close();
                    }}
                  >
                    <span className="lang-flag">
                      <Flag code={l.flag} />
                    </span>
                    <span>{l.label}</span>
                  </button>
                </li>
              ))
            }
          </NavDropdown>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {mobileOpen && (
        <div id="mobile-menu" className="mobile-menu">
          <Link
            href="/"
            className="mobile-link"
            onClick={() => setMobileOpen(false)}
          >
            {t.nav.home}
          </Link>
          <Link
            href="/dobermann"
            className="mobile-link"
            onClick={() => setMobileOpen(false)}
          >
            {t.nav.dobermann}
          </Link>
          <Link
            href="/great-dane"
            className="mobile-link"
            onClick={() => setMobileOpen(false)}
          >
            {t.nav.greatDane}
          </Link>
          <Link
            href="/our-dogs/freya"
            className="mobile-link"
            onClick={() => setMobileOpen(false)}
          >
            Freya
          </Link>
          <Link
            href="/our-dogs/sirius"
            className="mobile-link"
            onClick={() => setMobileOpen(false)}
          >
            Sirius
          </Link>
          <Link
            href="/our-dogs/mia"
            className="mobile-link"
            onClick={() => setMobileOpen(false)}
          >
            Mia
          </Link>
          <Link
            href="/our-dogs/sahara"
            className="mobile-link"
            onClick={() => setMobileOpen(false)}
          >
            Sahara
          </Link>
          <Link
            href="/our-dogs/armageddons_hope"
            className="mobile-link"
            onClick={() => setMobileOpen(false)}
          >
            Armageddon
          </Link>

          <Link
            href="/puppies"
            className="mobile-link"
            onClick={() => {
              setMobileOpen(false);
              dismissPuppiesBadge();
            }}
          >
            {/* Inner span so the dot sits next to the word, not at the row's edge */}
            <span className="mobile-link-badge-wrap">
              {t.nav.puppies}
              {!puppiesSeen && (
                <span className="nav-badge-dot nav-badge-dot--mobile" />
              )}
            </span>
          </Link>

          <Link
            href="/contact"
            className="mobile-link"
            onClick={() => setMobileOpen(false)}
          >
            {t.nav.contact}
          </Link>

          {/* Mobile language row */}
          <div className="mobile-lang-row">
            {LANGS.map((l) => (
              <button
                key={l.code}
                className={`mobile-lang-btn${lang === l.code ? " mobile-lang-active" : ""}`}
                onClick={() => {
                  setLang(l.code);
                  setMobileOpen(false);
                }}
              >
                <span>
                  <Flag code={l.flag} />
                </span>
                <span>{l.code.toUpperCase()}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
