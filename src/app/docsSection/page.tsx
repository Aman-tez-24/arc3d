"use client";

import Link from "next/link";

export default function DocsSectionPage() {
  return (
    <section className="page">
      {/* BACKGROUND */}
      <div className="gradient gradient1" />
      <div className="gradient gradient2" />
      <div className="gridOverlay" />
      <div className="noise" />

      {/* HERO */}
      <div className="hero">
        <div className="badge">
          <span className="dot" />
          ARC3D CLIENT DOCUMENTATION
        </div>

        <h1>
          Understand
          <br />
          The Entire
          <br />
          Arc3D Workflow
        </h1>

        <p>
          Everything you need to know about Arc3D’s project workflow,
          architectural visualization process, rendering delivery standards,
          privacy systems, and client experience from submission to final
          output.
        </p>

        <div className="heroBottom">
          <div className="heroCard">
            <h3>Project Workflow</h3>
            <span>Step-by-step architecture visualization pipeline</span>
          </div>

          <div className="heroCard">
            <h3>Rendering Standards</h3>
            <span>Understand quality, outputs, and delivery formats</span>
          </div>

          <div className="heroCard">
            <h3>Client Support</h3>
            <span>FAQs, policies, and service information</span>
          </div>
        </div>
      </div>

      {/* DOCS GRID */}
      <div className="grid">
        <Link href="/docsSection/process" className="card large">
          <div className="line" />

          <span className="index">01</span>

          <h2>Project Process</h2>

          <p>
            Understand how Arc3D handles architectural projects — from client
            submission and planning review to cinematic rendering and final
            delivery.
          </p>

          <div className="bottom">
            <span>Explore Process</span>
            <span>↗</span>
          </div>
        </Link>

        <Link href="/docsSection/faq" className="card">
          <div className="line" />

          <span className="index">02</span>

          <h2>Frequently Asked Questions</h2>

          <p>
            Answers to common questions regarding project timelines, file
            formats, rendering quality, revisions, pricing structure, and
            delivery systems.
          </p>

          <div className="bottom">
            <span>Read FAQ</span>
            <span>↗</span>
          </div>
        </Link>

        <Link href="/docsSection/privacy" className="card">
          <div className="line" />

          <span className="index">03</span>

          <h2>Privacy Policy</h2>

          <p>
            Learn how Arc3D securely handles architectural drawings, project
            information, client uploads, rendering assets, and confidential
            design data.
          </p>

          <div className="bottom">
            <span>View Policy</span>
            <span>↗</span>
          </div>
        </Link>

        <Link href="/docsSection/terms" className="card highlight">
          <div className="line" />

          <span className="index">04</span>

          <h2>Terms & Conditions</h2>

          <p>
            Understand project agreements, revisions, rendering ownership,
            delivery policies, service responsibilities, and usage conditions
            for Arc3D clients.
          </p>

          <div className="bottom">
            <span>Read Terms</span>
            <span>↗</span>
          </div>
        </Link>
      </div>

      {/* WORKFLOW SECTION */}
      <div className="features">
        <div className="sectionTitle">
          <span>CLIENT EXPERIENCE</span>
          <h2>Designed Around Simplicity & Clarity</h2>
        </div>

        <div className="featureGrid">
          <div className="featureCard">
            <h3>Structured Workflow</h3>

            <p>
              Every project follows a clear process from architectural drawing
              submission to cinematic visualization delivery.
            </p>
          </div>

          <div className="featureCard">
            <h3>Professional Rendering</h3>

            <p>
              High-quality architectural renders crafted with attention to
              lighting, materials, proportions, and visual storytelling.
            </p>
          </div>

          <div className="featureCard">
            <h3>Secure Handling</h3>

            <p>
              Your floor plans, concepts, and architectural assets remain
              protected throughout the project lifecycle.
            </p>
          </div>
        </div>
      </div>

      {/* INFO SECTION */}
      <div className="info">
        <div className="infoBox">
          <span>WHY THESE DOCUMENTS MATTER</span>

          <h2>
            Transparency Builds
            <br />
            Better Architectural Experiences.
          </h2>

          <p>
            Arc3D believes every client should clearly understand how their
            architectural project is handled, visualized, delivered, and
            protected. These documentation systems are designed to create
            clarity, trust, and a smoother project experience.
          </p>

          <div className="infoStats">
            <div>
              <h3>4+</h3>
              <p>Projects Completed</p>
            </div>

            <div>
              <h3>4K</h3>
              <p>Rendering Quality</p>
            </div>

            <div>
              <h3>Secure</h3>
              <p>Client Workflow</p>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="footer">
        <div className="footerLine" />

        <p>
          “Great architecture begins with
          <br />
          clear understanding.”
        </p>
      </div>

      <style jsx>{`
        .page {
          position: relative;
          overflow: hidden;
          padding: 160px 24px;
          background:
            radial-gradient(
              circle at top left,
              rgba(255, 255, 255, 0.95),
              transparent 35%
            ),
            linear-gradient(180deg, #f8f6f1 0%, #f3f1eb 40%, #ebe5da 100%);

          color: #111;
        }

        .gradient {
          position: absolute;
          border-radius: 999px;
          filter: blur(120px);
          z-index: 0;
        }

        .gradient1 {
          width: 600px;
          height: 600px;
          background: rgba(40, 80, 180, 0.12);
          top: -180px;
          left: -180px;
        }

        .gradient2 {
          width: 500px;
          height: 500px;
          background: rgba(255, 255, 255, 0.65);
          bottom: -160px;
          right: -120px;
        }

        .gridOverlay {
          position: absolute;
          inset: 0;

          background-image:
            linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px);

          background-size: 70px 70px;

          mask-image: radial-gradient(circle at center, black, transparent 85%);

          opacity: 0.4;
        }

        .noise {
          position: absolute;
          inset: 0;
          opacity: 0.03;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(0, 0, 0, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.4) 1px, transparent 1px);
          background-size: 140px 140px;
        }

        .hero {
          position: relative;
          z-index: 2;

          max-width: 1100px;
          margin: auto;
          text-align: center;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 12px;

          padding: 12px 20px;
          border-radius: 999px;

          background: rgba(255, 255, 255, 0.55);
          backdrop-filter: blur(20px);

          border: 1px solid rgba(255, 255, 255, 0.8);

          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.35em;

          color: rgba(0, 0, 0, 0.55);
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: #111;
        }

        .hero h1 {
          margin-top: 34px;

          font-size: clamp(58px, 8vw, 110px);
          line-height: 0.9;
          letter-spacing: -5px;
          font-weight: 900;
        }

        .hero p {
          margin: 34px auto 0;

          max-width: 760px;

          font-size: 16px;
          line-height: 2;

          color: rgba(0, 0, 0, 0.62);
        }

        .heroBottom {
          margin-top: 70px;

          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .heroCard,
        .card,
        .featureCard,
        .infoBox,
        .infoStats div {
          background: rgba(255, 255, 255, 0.52);
          backdrop-filter: blur(24px);

          border: 1px solid rgba(255, 255, 255, 0.7);

          box-shadow:
            0 30px 100px rgba(0, 0, 0, 0.06),
            inset 0 1px 0 rgba(255, 255, 255, 0.7);
        }

        .heroCard,
        .featureCard,
        .infoStats div {
          padding: 28px;
          border-radius: 28px;
        }

        .heroCard h3,
        .featureCard h3 {
          font-size: 22px;
          margin-bottom: 12px;
        }

        .heroCard span,
        .featureCard p {
          font-size: 14px;
          line-height: 1.8;
          color: rgba(0, 0, 0, 0.58);
        }

        .grid,
        .featureGrid,
        .infoStats {
          display: grid;
          gap: 24px;
        }

        .grid {
          position: relative;
          z-index: 2;

          max-width: 1200px;
          margin: 110px auto 0;

          grid-template-columns: repeat(2, 1fr);
        }

        .featureGrid,
        .infoStats {
          grid-template-columns: repeat(3, 1fr);
        }
        .featureGrid {
          margin-top: 40px;
        }

        .card {
          position: relative;

          overflow: hidden;

          padding: 42px;
          border-radius: 34px;

          text-decoration: none;
          color: inherit;

          transition: 0.5s ease;
        }

        .card:hover {
          transform: translateY(-10px);
        }

        .large {
          min-height: 420px;
        }

        .highlight {
          background: linear-gradient(
            135deg,
            rgba(240, 245, 255, 0.9),
            rgba(255, 255, 255, 0.7)
          );
        }

        .line {
          width: 70px;
          height: 1px;
          background: rgba(0, 0, 0, 0.2);
          margin-bottom: 24px;
        }

        .index {
          font-size: 11px;
          letter-spacing: 0.3em;
          color: rgba(0, 0, 0, 0.4);
        }

        .card h2 {
          margin-top: 18px;

          font-size: 34px;
          line-height: 1.05;
          letter-spacing: -1.5px;
          font-weight: 800;
        }

        .card p,
        .card li,
        .infoBox p {
          color: rgba(0, 0, 0, 0.62);
          line-height: 1.9;
        }

        .card ul {
          margin-top: 24px;
          padding-left: 18px;
        }

        .bottom {
          margin-top: 42px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          font-size: 13px;
          letter-spacing: 0.18em;
          text-transform: uppercase;

          color: rgba(0, 0, 0, 0.55);
        }

        .features,
        .info,
        .footer {
          position: relative;
          z-index: 2;
        }

        .features {
          max-width: 1200px;
          margin: 140px auto 0;
        }

        .sectionTitle,
        .infoBox,
        .footer {
          text-align: center;
        }

        .sectionTitle span,
        .infoBox span {
          font-size: 11px;
          letter-spacing: 0.35em;
          color: rgba(0, 0, 0, 0.45);
        }

        .sectionTitle h2,
        .infoBox h2 {
          margin-top: 20px;

          font-size: clamp(38px, 5vw, 64px);
          line-height: 1;
          letter-spacing: -2px;
        }

        .info {
          max-width: 1100px;
          margin: 140px auto 0;
        }

        .infoBox {
          padding: 70px;
          border-radius: 40px;
        }

        .infoBox p {
          margin: 28px auto 0;
          max-width: 760px;
        }

        .infoStats {
          margin-top: 60px;
        }

        .infoStats h3 {
          font-size: 32px;
          margin-bottom: 10px;
        }

        .footer {
          margin-top: 140px;
        }

        .footerLine {
          width: 120px;
          height: 1px;
          margin: 0 auto 28px;

          background: rgba(0, 0, 0, 0.15);
        }

        .footer p {
          font-size: 18px;
          line-height: 1.8;
          color: rgba(0, 0, 0, 0.55);
        }

        @media (max-width: 900px) {
          .page {
            padding: 120px 18px;
          }

          .heroBottom,
          .grid,
          .featureGrid,
          .infoStats {
            grid-template-columns: 1fr;
          }

          .card,
          .featureCard,
          .infoBox {
            padding: 34px 26px;
          }

          .hero h1 {
            letter-spacing: -2px;
            line-height: 1;
          }
        }
      `}</style>
    </section>
  );
}
