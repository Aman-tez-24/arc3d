"use client";

import Link from "next/link";

export default function CareersPage() {
  return (
    <section className="careersPage">
      {/* BACKGROUND */}
      <div className="noise" />
      <div className="gradientOrb orb1" />
      <div className="gradientOrb orb2" />

      {/* HERO */}
      <div className="hero">
        <div className="badge">
          <span className="dot" />
          ARC3D CAREERS
        </div>

        <h1>
          Build The Future
          <br />
          Of Architecture
        </h1>

        <p>
          Arc3D is building next-generation architectural visualization and
          intelligent spatial systems. We are looking for creators, engineers,
          designers, and innovators who want to redefine how architecture is
          imagined and presented.
        </p>
      </div>

      {/* OPENINGS */}
      <div className="openings">
        <div className="openingCard large">
          <div className="topLine" />

          <span className="index">01</span>

          <h2>AI Research Internship</h2>

          <p>
            Work on intelligent systems capable of converting 2D architectural
            floor plans into cinematic 3D environments using computer vision,
            spatial reasoning, and AI workflows.
          </p>

          <div className="tags">
            <span>Python</span>
            <span>AI/ML</span>
            <span>Computer Vision</span>
            <span>Blender</span>
          </div>

          <Link href="/internship">
            <button
              onClick={() => {
                window.location.href = "/internship";
              }}
            >
              Apply Now
            </button>
          </Link>
        </div>

        <div className="openingCard">
          <div className="topLine" />

          <span className="index">02</span>

          <h2>Frontend Developer</h2>

          <p>
            Build premium interactive experiences using React, Next.js, motion
            systems, and immersive UI architecture for the Arc3D platform.
          </p>

          <div className="tags">
            <span>React</span>
            <span>Next.js</span>
            <span>UI/UX</span>
          </div>

          <button className="disabled">Coming Soon</button>
        </div>

        <div className="openingCard">
          <div className="topLine" />

          <span className="index">03</span>

          <h2>3D Visualization Artist</h2>

          <p>
            Create cinematic architectural renders, material systems, lighting
            compositions, and premium visualization experiences.
          </p>

          <div className="tags">
            <span>Blender</span>
            <span>Rendering</span>
            <span>Architecture</span>
          </div>

          <button className="disabled">Coming Soon</button>
        </div>
      </div>

      {/* CULTURE */}
      <div className="culture">
        <div className="cultureLeft">
          <span className="sectionTag">WHY ARC3D</span>

          <h2>
            We are not building
            <br />
            another architecture studio.
          </h2>

          <p>
            Arc3D operates at the intersection of architecture, visualization,
            cinematic storytelling, and intelligent systems. Our goal is to
            create tools and experiences that redefine spatial design for the
            next generation.
          </p>
        </div>

        <div className="cultureGrid">
          <div className="cultureCard">
            <h3>Innovation First</h3>
            <p>We experiment with future-facing workflows and technologies.</p>
          </div>

          <div className="cultureCard">
            <h3>Creative Freedom</h3>
            <p>
              Every member contributes ideas that directly shape the platform.
            </p>
          </div>

          <div className="cultureCard">
            <h3>Research Driven</h3>
            <p>We focus heavily on AI-assisted architectural workflows.</p>
          </div>

          <div className="cultureCard">
            <h3>Premium Craftsmanship</h3>
            <p>Every detail matters — from visuals to system architecture.</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta">
        <div className="line" />

        <h2>
          Interested in shaping
          <br />
          the future of Arc3D?
        </h2>

        <p>
          Even if there is no current opening matching your profile, we would
          still love to hear from you.
        </p>

        <Link href="/contact">
          <button
            onClick={() => {
              window.location.href = "/contact";
            }}
          >
            Contact Us
          </button>
        </Link>
      </div>

      <style jsx>{`
        .careersPage {
          position: relative;
          overflow: hidden;

          min-height: 100vh;

          padding: 150px 24px;

          background:
            radial-gradient(
              circle at top left,
              rgba(255, 255, 255, 0.85),
              transparent 35%
            ),
            linear-gradient(180deg, #f8f5ef 0%, #f2efe8 45%, #ebe6db 100%);

          color: #111;
        }

        .noise {
          position: absolute;
          inset: 0;

          opacity: 0.03;

          background-image:
            linear-gradient(rgba(0, 0, 0, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.4) 1px, transparent 1px);

          background-size: 120px 120px;
        }

        .gradientOrb {
          position: absolute;
          border-radius: 999px;
          filter: blur(120px);
        }

        .orb1 {
          width: 500px;
          height: 500px;

          top: -180px;
          left: -140px;

          background: rgba(40, 70, 160, 0.1);
        }

        .orb2 {
          width: 400px;
          height: 400px;

          bottom: -120px;
          right: -120px;

          background: rgba(255, 255, 255, 0.55);
        }

        .hero {
          position: relative;
          z-index: 2;

          max-width: 980px;
          margin: auto;

          text-align: center;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;

          padding: 12px 18px;

          border-radius: 999px;

          background: rgba(255, 255, 255, 0.55);

          backdrop-filter: blur(20px);

          border: 1px solid rgba(255, 255, 255, 0.75);

          font-size: 10px;
          font-weight: 700;

          letter-spacing: 0.28em;

          color: rgba(0, 0, 0, 0.55);
        }

        .dot {
          width: 7px;
          height: 7px;

          border-radius: 999px;

          background: #111;
        }

        .hero h1 {
          margin-top: 34px;

          font-size: clamp(60px, 8vw, 110px);

          line-height: 0.92;
          letter-spacing: -4px;

          font-weight: 900;
        }

        .hero p {
          margin: 34px auto 0;

          max-width: 760px;

          font-size: 16px;
          line-height: 2;

          color: rgba(0, 0, 0, 0.62);
        }

        .openings {
          position: relative;
          z-index: 2;

          max-width: 1200px;

          margin: 110px auto 0;

          display: grid;
          grid-template-columns: repeat(3, 1fr);

          gap: 24px;
        }

        .openingCard {
          padding: 40px;

          border-radius: 34px;

          background: rgba(255, 255, 255, 0.5);

          backdrop-filter: blur(24px);

          border: 1px solid rgba(255, 255, 255, 0.75);
        }

        .large {
          background: linear-gradient(
            135deg,
            rgba(245, 248, 255, 0.9),
            rgba(255, 255, 255, 0.72)
          );
        }

        .topLine {
          width: 70px;
          height: 1px;

          background: rgba(0, 0, 0, 0.18);

          margin-bottom: 24px;
        }

        .index {
          font-size: 12px;

          letter-spacing: 0.24em;

          color: rgba(0, 0, 0, 0.45);
        }

        .openingCard h2 {
          margin-top: 18px;

          font-size: 34px;
          line-height: 1.05;

          font-weight: 800;
        }

        .openingCard p {
          margin-top: 18px;

          font-size: 15px;
          line-height: 1.9;

          color: rgba(0, 0, 0, 0.62);
        }

        .tags {
          margin-top: 28px;

          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .tags span {
          padding: 10px 16px;

          border-radius: 999px;

          background: rgba(255, 255, 255, 0.65);

          border: 1px solid rgba(255, 255, 255, 0.85);

          font-size: 11px;
          letter-spacing: 0.12em;

          text-transform: uppercase;
        }

        button {
          margin-top: 34px;

          height: 56px;
          padding: 0 26px;

          border: none;
          border-radius: 18px;

          background: #111;
          color: white;

          font-size: 12px;
          font-weight: 700;

          letter-spacing: 0.08em;

          text-transform: uppercase;

          cursor: pointer;
        }

        .disabled {
          background: rgba(0, 0, 0, 0.14);
          color: rgba(0, 0, 0, 0.45);

          cursor: not-allowed;
        }

        .culture {
          position: relative;
          z-index: 2;

          max-width: 1200px;

          margin: 140px auto 0;

          display: grid;
          grid-template-columns: 1.1fr 1fr;

          gap: 70px;
        }

        .sectionTag {
          font-size: 11px;

          letter-spacing: 0.22em;

          text-transform: uppercase;

          color: rgba(0, 0, 0, 0.45);
        }

        .cultureLeft h2 {
          margin-top: 22px;

          font-size: 58px;
          line-height: 1;

          letter-spacing: -3px;

          font-weight: 900;
        }

        .cultureLeft p {
          margin-top: 26px;

          font-size: 15px;
          line-height: 2;

          color: rgba(0, 0, 0, 0.62);
        }

        .cultureGrid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);

          gap: 20px;
        }

        .cultureCard {
          padding: 30px;

          border-radius: 28px;

          background: rgba(255, 255, 255, 0.45);

          border: 1px solid rgba(255, 255, 255, 0.7);

          backdrop-filter: blur(20px);
        }

        .cultureCard h3 {
          font-size: 22px;
          font-weight: 700;
        }

        .cultureCard p {
          margin-top: 14px;

          font-size: 14px;
          line-height: 1.8;

          color: rgba(0, 0, 0, 0.6);
        }

        .cta {
          position: relative;
          z-index: 2;

          margin-top: 150px;

          text-align: center;
        }

        .line {
          width: 120px;
          height: 1px;

          margin: 0 auto 32px;

          background: rgba(0, 0, 0, 0.14);
        }

        .cta h2 {
          font-size: 60px;

          line-height: 1;

          letter-spacing: -3px;

          font-weight: 900;
        }

        .cta p {
          margin-top: 24px;

          font-size: 15px;
          line-height: 2;

          color: rgba(0, 0, 0, 0.6);
        }

        @media (max-width: 1000px) {
          .openings {
            grid-template-columns: 1fr;
          }

          .culture {
            grid-template-columns: 1fr;
          }

          .cultureGrid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .careersPage {
            padding: 120px 18px;
          }

          .hero h1 {
            letter-spacing: -2px;
          }

          .cultureLeft h2,
          .cta h2 {
            font-size: 44px;
          }
        }
      `}</style>
    </section>
  );
}
