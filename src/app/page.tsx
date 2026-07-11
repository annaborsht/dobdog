"use client";
import Image from "next/image";
import { useLang } from "@/components/LangContext";

export default function HomePage() {
  const { t } = useLang();

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <Image
          src="/images/banner2.jpg"
          alt="DobDog Elegance hero"
          width={6240}
          height={4160}
          className="hero-img"
          priority
        />
        <div className="hero-overlay">
          <div className="hero-content-group">
            <h1 className="hero-title">DobDog Elegance</h1>
            <p className="hero-subtitle">{t.home.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Welcome / About Section */}
      <section className="welcome-section">
        <div className="container">
          <h2 className="section-title">{t.home.welcomeTitle}</h2>

          <div className="welcome-grid">
            <div className="welcome-text-block">
              <p className="lead-paragraph">{t.home.welcome1}</p>
              <p>{t.home.welcome2}</p>
            </div>
            <div className="welcome-text-block">
              <p>{t.home.welcome3}</p>
              <p>{t.home.welcome4}</p>
            </div>
            <div>
              <Image
                src="/images/welcome/logo.png"
                alt="logo"
                width={400}
                height={400}
              />
            </div>
            <div className="logo">
              <Image
                src="/images/welcome/a1.png"
                alt="allkiri"
                width={150}
                height={100}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
