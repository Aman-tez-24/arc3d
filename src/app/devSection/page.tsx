"use client";

import Link from "next/link";

export default function DevSectionPage() {
  return (
    <section className="page">
      {/* BACKGROUND */}
      <div className="noise" />
      <div className="gridOverlay" />

      {/* ORBS */}
      <div className="orb orb1" />
      <div className="orb orb2" />
      <div className="orb orb3" />

      {/* HERO */}
      <div className="hero">
        <div className="badge">
          <span className="dot" />
          ARC3D INNOVATION HUB
        </div>

        <h1>
          Building The Future
          <br />
          Of Architectural Intelligence
        </h1>

        <p>
          Arc3D is expanding beyond visualization into intelligent architectural
          systems, spatial automation, and AI-assisted design workflows focused
          on the future of architecture.
        </p>

        <div className="heroActions">
          <Link href="/internship">
            <button>Apply Internship</button>
          </Link>

          <Link href="/contact">
            <button className="ghost">Collaborate With Us</button>
          </Link>
        </div>
      </div>

      {/* METRICS */}
      <div className="metrics">
        <div className="metric">
          <h3>2D → 3D</h3>
          <span>AI Research Pipeline</span>
        </div>

        <div className="metric">
          <h3>Spatial AI</h3>
          <span>Architectural Intelligence</span>
        </div>

        <div className="metric">
          <h3>4K Visuals</h3>
          <span>Cinematic Rendering</span>
        </div>
      </div>

      {/* GRID */}
      <div className="grid">
        <Link href="/devSection/research" className="card large">
          <div className="topLine" />

          <span className="index">01</span>

          <h2>Research Program</h2>

          <p>
            Explore Arc3D research initiatives focused on AI-assisted
            architectural generation, spatial automation, and intelligent 3D
            workflows.
          </p>

          <div className="bottom">
            <span>Explore Research</span>
            <span>↗</span>
          </div>
        </Link>

        <Link href="/devSection/careers" className="card">
          <div className="topLine" />

          <span className="index">02</span>

          <h2>Careers</h2>

          <p>
            Join Arc3D and help shape next-generation architectural experiences,
            visualization systems, and future spatial technologies.
          </p>

          <div className="bottom">
            <span>View Careers</span>
            <span>↗</span>
          </div>
        </Link>

        <Link href="/devSection/technology" className="card">
          <div className="topLine" />

          <span className="index">03</span>

          <h2>Technology Stack</h2>

          <p>
            Discover the technologies powering Arc3D including React, Next.js,
            Blender workflows, rendering systems, and AI development pipelines.
          </p>

          <div className="bottom">
            <span>See Stack</span>
            <span>↗</span>
          </div>
        </Link>

        <Link href="/devSection/collaborate" className="card highlight">
          <div className="topLine" />

          <span className="index">04</span>

          <h2>Collaborate With Us</h2>

          <p>
            Partner with Arc3D on architectural visualization, spatial research,
            AI systems, or next-generation design innovation projects.
          </p>

          <div className="bottom">
            <span>Start Collaboration</span>
            <span>↗</span>
          </div>
        </Link>
      </div>

      {/* RESEARCH WINDOW */}
      <div className="codeSection">
        <div className="codeHeader">
          <div className="controls">
            <span />
            <span />
            <span />
          </div>

          <p>arc3d / ai-research-roadmap.md</p>
        </div>

        <div className="codeContent">
          <div className="lineNumbers">
            <span>01</span>
            <span>02</span>
            <span>03</span>
            <span>04</span>
            <span>05</span>
            <span>06</span>
            <span>07</span>
            <span>08</span>
            <span>09</span>
            <span>10</span>
          </div>

          <pre>
            {`• 2D Floor Plan Understanding
• Intelligent Wall Detection
• Spatial Room Segmentation
• Automatic Furniture Placement
• Material Recommendation System
• Lighting & Shadow Prediction
• 3D Scene Reconstruction
• Architectural AI Research
• Blender Automation Pipeline
• Spatial Visualization Engine`}
          </pre>
        </div>
      </div>

      {/* STATUS */}
      <div className="terminal">
        <div className="pulse" />
        <span>Research Status:</span>
        <p>Active Development Phase</p>
      </div>

      {/* FOOTER */}
      <div className="footer">
        <div className="footerLine" />

        <p>
          “Designing the future
          <br />
          of architectural intelligence.”
        </p>
      </div>

      <style jsx>{`
        .page {
          position: relative;
          overflow: hidden;

          background:
            radial-gradient(
              circle at top left,
              rgba(255, 255, 255, 0.85),
              transparent 35%
            ),
            linear-gradient(180deg, #f8f5ef 0%, #f3f1eb 40%, #ebe6db 100%);

          padding: 150px 24px;
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

          pointer-events: none;
        }

        .gridOverlay {
          position: absolute;
          inset: 0;

          background-image:
            linear-gradient(rgba(0, 0, 0, 0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.025) 1px, transparent 1px);

          background-size: 70px 70px;

          mask-image: radial-gradient(circle at center, black, transparent 90%);

          opacity: 0.45;
        }

        .orb {
          position: absolute;
          border-radius: 999px;
          filter: blur(120px);
          z-index: 0;
        }

        .orb1 {
          width: 520px;
          height: 520px;
          background: rgba(30, 60, 140, 0.12);
          top: -180px;
          left: -120px;
        }

        .orb2 {
          width: 420px;
          height: 420px;
          background: rgba(255, 255, 255, 0.6);
          top: 20%;
          right: -120px;
        }

        .orb3 {
          width: 450px;
          height: 450px;
          background: rgba(20, 20, 20, 0.05);
          bottom: -200px;
          left: 50%;
          transform: translateX(-50%);
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
          letter-spacing: 0.32em;

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

          font-size: clamp(56px, 8vw, 104px);
          line-height: 0.92;
          letter-spacing: -4px;
          font-weight: 900;

          color: #0a0a0a;
        }

        .hero p {
          margin: 34px auto 0;

          max-width: 760px;

          font-size: 16px;
          line-height: 2;

          color: rgba(0, 0, 0, 0.62);
        }

        .heroActions {
          margin-top: 42px;

          display: flex;
          justify-content: center;
          gap: 16px;
        }

        button {
          height: 56px;
          padding: 0 28px;

          border-radius: 18px;
          border: none;

          background: #111;
          color: white;

          font-size: 13px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-weight: 700;

          cursor: pointer;
        }

        .ghost {
          background: rgba(255, 255, 255, 0.45);
          backdrop-filter: blur(20px);

          color: #111;

          border: 1px solid rgba(255, 255, 255, 0.8);
        }

        .metrics {
          position: relative;
          z-index: 2;

          max-width: 1100px;
          margin: 90px auto 0;

          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .metric {
          padding: 34px;
          border-radius: 30px;

          background: rgba(255, 255, 255, 0.45);
          backdrop-filter: blur(24px);

          border: 1px solid rgba(255, 255, 255, 0.7);

          text-align: center;
        }

        .metric h3 {
          font-size: 32px;
          font-weight: 800;
        }

        .metric span {
          display: block;
          margin-top: 10px;

          font-size: 12px;
          letter-spacing: 0.14em;
          text-transform: uppercase;

          color: rgba(0, 0, 0, 0.5);
        }

        .grid {
          position: relative;
          z-index: 2;

          max-width: 1200px;
          margin: 110px auto 0;

          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .card {
          padding: 42px;
          border-radius: 34px;

          text-decoration: none;
          color: inherit;

          background: rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(24px);

          border: 1px solid rgba(255, 255, 255, 0.75);
        }

        .large {
          min-height: 360px;
        }

        .highlight {
          background: linear-gradient(
            135deg,
            rgba(240, 245, 255, 0.85),
            rgba(255, 255, 255, 0.7)
          );
        }

        .topLine {
          width: 70px;
          height: 1px;

          background: rgba(0, 0, 0, 0.2);

          margin-bottom: 26px;
        }

        .index {
          font-size: 12px;
          letter-spacing: 0.25em;
          color: rgba(0, 0, 0, 0.4);
        }

        .card h2 {
          margin-top: 18px;

          font-size: 34px;
          line-height: 1.05;
          font-weight: 800;
        }

        .card p {
          margin-top: 18px;

          font-size: 15px;
          line-height: 1.9;

          color: rgba(0, 0, 0, 0.62);
        }

        .bottom {
          margin-top: 42px;

          display: flex;
          justify-content: space-between;

          font-size: 13px;
          letter-spacing: 0.18em;
          text-transform: uppercase;

          color: rgba(0, 0, 0, 0.55);
        }

        .codeSection {
          position: relative;
          z-index: 2;

          margin: 130px auto 0;

          max-width: 1100px;

          overflow: hidden;

          border-radius: 34px;

          background: #0b1020;
        }

        .codeHeader {
          height: 70px;

          padding: 0 26px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .controls {
          display: flex;
          gap: 8px;
        }

        .controls span {
          width: 11px;
          height: 11px;
          border-radius: 999px;

          background: rgba(255, 255, 255, 0.3);
        }

        .codeHeader p {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.45);
        }

        .codeContent {
          display: flex;
          gap: 30px;

          padding: 34px;
        }

        .lineNumbers {
          display: flex;
          flex-direction: column;
          gap: 12px;

          color: rgba(255, 255, 255, 0.22);

          font-size: 13px;
        }

        pre {
          margin: 0;

          color: rgba(255, 255, 255, 0.85);

          font-size: 14px;
          line-height: 2;
        }

        .terminal {
          position: relative;
          z-index: 2;

          width: fit-content;

          margin: 50px auto 0;

          display: flex;
          align-items: center;
          gap: 14px;

          padding: 14px 22px;

          border-radius: 999px;

          background: rgba(255, 255, 255, 0.55);
          backdrop-filter: blur(20px);

          border: 1px solid rgba(255, 255, 255, 0.7);
        }

        .pulse {
          width: 10px;
          height: 10px;
          border-radius: 999px;

          background: #111;
        }

        .footer {
          position: relative;
          z-index: 2;

          margin-top: 140px;

          text-align: center;
        }

        .footerLine {
          width: 120px;
          height: 1px;

          margin: 0 auto 30px;

          background: rgba(0, 0, 0, 0.14);
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

          .heroActions {
            flex-direction: column;
          }

          .metrics {
            grid-template-columns: 1fr;
          }

          .grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
