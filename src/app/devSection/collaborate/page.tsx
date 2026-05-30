"use client";

import Link from "next/link";

export default function CollaboratePage() {
  const collaborations = [
    {
      id: "01",
      title: "Architects & Studios",
      description:
        "Partner with Arc3D to transform architectural concepts into premium cinematic visualizations and high-detail presentation experiences.",
    },
    {
      id: "02",
      title: "AI Research Partners",
      description:
        "Collaborate with our research team to explore AI-assisted floor-plan understanding, intelligent spatial systems, and architectural automation.",
    },
    {
      id: "03",
      title: "3D Artists & Designers",
      description:
        "Work with Arc3D on visualization pipelines, cinematic rendering systems, environment detailing, and architectural storytelling.",
    },
    {
      id: "04",
      title: "Technology Collaborations",
      description:
        "Build future-ready spatial platforms, rendering systems, and immersive architectural tools together with the Arc3D engineering ecosystem.",
    },
  ];

  return (
    <section className="page">
      {/* BACKGROUND */}
      <div className="grid" />

      <div className="orb orb1" />
      <div className="orb orb2" />

      {/* HERO */}
      <div className="hero">
        <div className="badge">
          <span />
          ARC3D COLLABORATIONS
        </div>

        <h1>
          Let’s Build
          <br />
          The Future Together
        </h1>

        <p>
          Arc3D collaborates with architects, researchers, developers,
          visualization artists, and technology innovators to shape the next
          generation of architectural experiences.
        </p>
      </div>

      {/* COLLABORATION GRID */}
      <div className="collabGrid">
        {collaborations.map((item) => (
          <div key={item.id} className="card">
            <div className="top">
              <span>{item.id}</span>
            </div>

            <h2>{item.title}</h2>

            <p>{item.description}</p>
          </div>
        ))}
      </div>

      {/* WHY COLLABORATE */}
      <div className="whySection">
        <div className="left">
          <span className="miniTag">Why Arc3D</span>

          <h2>
            Collaboration
            <br />
            Beyond Visualization
          </h2>

          <p>
            Arc3D is more than a rendering platform. We are building a complete
            architectural technology ecosystem focused on premium visualization,
            future AI systems, and intelligent spatial workflows.
          </p>
        </div>

        <div className="right">
          <div className="infoCard">
            <h3>Collaboration Areas</h3>

            <ul>
              <li>Architectural Visualization</li>
              <li>AI Research & Automation</li>
              <li>3D Environment Design</li>
              <li>Spatial Technology Systems</li>
              <li>Rendering Infrastructure</li>
            </ul>
          </div>

          <div className="infoCard">
            <h3>Who Can Collaborate</h3>

            <ul>
              <li>Architecture Firms</li>
              <li>AI Researchers</li>
              <li>3D Artists & Designers</li>
              <li>Frontend / 3D Developers</li>
              <li>Technology Startups</li>
            </ul>
          </div>
        </div>
      </div>

      {/* PROCESS */}
      <div className="process">
        <div className="processHeader">
          <span>WORKFLOW</span>

          <h2>How Collaboration Works</h2>
        </div>

        <div className="steps">
          <div className="step">
            <h3>01</h3>
            <p>Submit your collaboration proposal or partnership idea.</p>
          </div>

          <div className="step">
            <h3>02</h3>
            <p>
              Our team reviews the project scope, technical goals, and vision.
            </p>
          </div>

          <div className="step">
            <h3>03</h3>
            <p>We establish a shared workflow for execution and development.</p>
          </div>

          <div className="step">
            <h3>04</h3>
            <p>
              Together we build immersive architectural systems and experiences.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta">
        <h2>Interested in collaborating with Arc3D?</h2>

        <p>Let’s create next-generation architectural systems together.</p>

        <div className="buttons">
          <Link href="/contact">
            <button>Contact Us</button>
          </Link>

          <Link href="/devSection/research">
            <button className="ghost">Research Program</button>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .page {
          position: relative;
          overflow: hidden;

          padding: 150px 24px;

          background: #f4f1ea;
          color: #111;
        }

        .grid {
          position: absolute;
          inset: 0;

          background-image:
            linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px);

          background-size: 70px 70px;

          opacity: 0.35;
        }

        .orb {
          position: absolute;
          border-radius: 999px;

          filter: blur(120px);
        }

        .orb1 {
          width: 420px;
          height: 420px;

          background: rgba(50, 80, 140, 0.12);

          top: -120px;
          left: -120px;
        }

        .orb2 {
          width: 360px;
          height: 360px;

          background: rgba(255, 255, 255, 0.75);

          right: -100px;
          top: 25%;
        }

        .hero {
          position: relative;
          z-index: 2;

          max-width: 1000px;
          margin: auto;

          text-align: center;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;

          padding: 12px 18px;

          border-radius: 999px;

          background: rgba(255, 255, 255, 0.6);

          border: 1px solid rgba(255, 255, 255, 0.8);

          backdrop-filter: blur(20px);

          font-size: 10px;
          font-weight: 700;

          letter-spacing: 0.28em;

          color: rgba(0, 0, 0, 0.55);
        }

        .badge span {
          width: 7px;
          height: 7px;

          border-radius: 999px;

          background: #111;
        }

        .hero h1 {
          margin-top: 30px;

          font-size: clamp(58px, 8vw, 102px);

          line-height: 0.95;

          letter-spacing: -4px;

          font-weight: 900;
        }

        .hero p {
          margin: 34px auto 0;

          max-width: 760px;

          font-size: 16px;
          line-height: 2;

          color: rgba(0, 0, 0, 0.64);
        }

        .collabGrid {
          position: relative;
          z-index: 2;

          max-width: 1200px;
          margin: 100px auto 0;

          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .card {
          padding: 38px;

          border-radius: 30px;

          background: rgba(255, 255, 255, 0.55);

          border: 1px solid rgba(255, 255, 255, 0.7);

          backdrop-filter: blur(20px);

          transition:
            transform 0.4s ease,
            background 0.4s ease;
        }

        .card:hover {
          transform: translateY(-8px);

          background: rgba(255, 255, 255, 0.82);
        }

        .top span {
          font-size: 11px;

          letter-spacing: 0.2em;

          color: rgba(0, 0, 0, 0.45);
        }

        .card h2 {
          margin-top: 18px;

          font-size: 34px;

          line-height: 1.05;

          letter-spacing: -1px;

          font-weight: 800;
        }

        .card p {
          margin-top: 20px;

          font-size: 15px;
          line-height: 1.9;

          color: rgba(0, 0, 0, 0.62);
        }

        .whySection {
          position: relative;
          z-index: 2;

          max-width: 1200px;
          margin: 130px auto 0;

          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }

        .miniTag {
          font-size: 12px;

          letter-spacing: 0.22em;

          text-transform: uppercase;

          color: rgba(0, 0, 0, 0.45);
        }

        .left h2 {
          margin-top: 20px;

          font-size: clamp(44px, 5vw, 72px);

          line-height: 0.95;

          letter-spacing: -3px;

          font-weight: 900;
        }

        .left p {
          margin-top: 28px;

          max-width: 540px;

          font-size: 16px;
          line-height: 2;

          color: rgba(0, 0, 0, 0.62);
        }

        .right {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .infoCard {
          padding: 34px;

          border-radius: 28px;

          background: rgba(255, 255, 255, 0.58);

          border: 1px solid rgba(255, 255, 255, 0.75);

          backdrop-filter: blur(20px);
        }

        .infoCard h3 {
          font-size: 26px;
          font-weight: 800;
        }

        .infoCard ul {
          margin-top: 22px;

          display: flex;
          flex-direction: column;
          gap: 16px;

          padding-left: 18px;
        }

        .infoCard li {
          color: rgba(0, 0, 0, 0.65);

          line-height: 1.7;
        }

        .process {
          position: relative;
          z-index: 2;

          max-width: 1200px;
          margin: 140px auto 0;
        }

        .processHeader span {
          font-size: 12px;

          letter-spacing: 0.24em;

          text-transform: uppercase;

          color: rgba(0, 0, 0, 0.45);
        }

        .processHeader h2 {
          margin-top: 18px;

          font-size: clamp(42px, 5vw, 72px);

          line-height: 1;

          letter-spacing: -3px;

          font-weight: 900;
        }

        .steps {
          margin-top: 60px;

          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }

        .step {
          padding: 30px;

          border-radius: 28px;

          background: rgba(255, 255, 255, 0.55);

          border: 1px solid rgba(255, 255, 255, 0.7);

          backdrop-filter: blur(20px);
        }

        .step h3 {
          font-size: 42px;

          font-weight: 900;

          letter-spacing: -2px;
        }

        .step p {
          margin-top: 18px;

          font-size: 14px;
          line-height: 1.9;

          color: rgba(0, 0, 0, 0.62);
        }

        .cta {
          position: relative;
          z-index: 2;

          max-width: 1000px;
          margin: 150px auto 0;

          text-align: center;
        }

        .cta h2 {
          font-size: clamp(40px, 5vw, 68px);

          line-height: 1;

          letter-spacing: -3px;

          font-weight: 900;
        }

        .cta p {
          margin-top: 24px;

          font-size: 16px;
          line-height: 1.9;

          color: rgba(0, 0, 0, 0.62);
        }

        .buttons {
          margin-top: 40px;

          display: flex;
          justify-content: center;
          gap: 18px;
        }

        button {
          height: 56px;
          padding: 0 30px;

          border: none;
          border-radius: 18px;

          background: #111;
          color: white;

          font-size: 12px;
          font-weight: 700;

          letter-spacing: 0.12em;

          text-transform: uppercase;

          cursor: pointer;

          transition: 0.3s ease;
        }

        button:hover {
          transform: translateY(-4px);
        }

        .ghost {
          background: rgba(255, 255, 255, 0.6);

          color: #111;

          border: 1px solid rgba(255, 255, 255, 0.8);
        }

        @media (max-width: 1000px) {
          .collabGrid {
            grid-template-columns: 1fr;
          }

          .whySection {
            grid-template-columns: 1fr;
          }

          .steps {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .page {
            padding: 120px 18px;
          }

          .buttons {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
}
