"use client";

import Link from "next/link";

export default function DevSectionPage() {
  return (
    <section className="page">
      {/* PREMIUM BACKGROUND */}
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
          ARC3D DEVELOPER HUB
        </div>

        <h1>
          Build Intelligent
          <br />
          Spatial Systems
        </h1>

        <p>
          Access rendering APIs, AI architecture systems, visualization
          pipelines, and developer tools engineered for next-generation 3D
          architectural platforms.
        </p>

        <div className="heroActions">
          <button>Explore SDK</button>
          <button className="ghost">Read Documentation</button>
        </div>
      </div>

      {/* METRICS */}
      <div className="metrics">
        <div className="metric">
          <h3>REST + WebGL</h3>
          <span>High Performance APIs</span>
        </div>

        <div className="metric">
          <h3>AI Driven</h3>
          <span>Spatial Intelligence Engine</span>
        </div>

        <div className="metric">
          <h3>Real-Time</h3>
          <span>3D Visualization Pipeline</span>
        </div>
      </div>

      {/* DEV GRID */}
      <div className="grid">
        <Link href="/docs" className="card large">
          <div className="topLine" />

          <span className="index">01</span>

          <h2>API Systems</h2>

          <p>
            Connect to Arc3D rendering engines, AI processors, and visualization
            services through scalable REST and real-time rendering APIs.
          </p>

          <div className="bottom">
            <span>Explore APIs</span>
            <span>↗</span>
          </div>
        </Link>

        <Link href="/docs" className="card">
          <div className="topLine" />

          <span className="index">02</span>

          <h2>Integration</h2>

          <p>
            Plug Arc3D into React, Next.js, Unity, enterprise architecture
            systems, and immersive visualization workflows.
          </p>

          <div className="bottom">
            <span>View Stack</span>
            <span>↗</span>
          </div>
        </Link>

        <Link href="/docs" className="card">
          <div className="topLine" />

          <span className="index">03</span>

          <h2>Architecture</h2>

          <p>
            Understand rendering infrastructure, AI spatial systems, and the
            neural visualization pipeline powering Arc3D.
          </p>

          <div className="bottom">
            <span>See System</span>
            <span>↗</span>
          </div>
        </Link>

        <Link
          href="https://github.com/yourrepo"
          target="_blank"
          className="card highlight"
        >
          <div className="topLine" />

          <span className="index">04</span>

          <h2>GitHub</h2>

          <p>
            Access SDKs, developer resources, rendering modules, and open-source
            infrastructure behind Arc3D.
          </p>

          <div className="bottom">
            <span>Open Repository</span>
            <span>↗</span>
          </div>
        </Link>
      </div>

      {/* CODE WINDOW */}
      <div className="codeSection">
        <div className="codeHeader">
          <div className="controls">
            <span />
            <span />
            <span />
          </div>

          <p>arc3d-sdk / visualization-engine.ts</p>
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
            {`import { Arc3D } from "arc3d-sdk";

const engine = new Arc3D.Engine({
  lighting: "cinematic",
  quality: "ultra",
});

await engine.load("/models/villa.glb");

engine.render({
  environment: "sunset",
});`}
          </pre>
        </div>
      </div>

      {/* TERMINAL BAR */}
      <div className="terminal">
        <div className="pulse" />
        <span>System Status:</span>
        <p>All Rendering Systems Operational</p>
      </div>

      {/* FOOTER */}
      <div className="footer">
        <div className="footerLine" />

        <p>
          “Build once.
          <br />
          Visualize infinitely.”
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

        /* NOISE */
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

        /* GRID */
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

        /* ORBS */
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

        /* HERO */
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

          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.05);
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

          transition:
            transform 0.4s ease,
            box-shadow 0.4s ease;
        }

        button:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.18);
        }

        .ghost {
          background: rgba(255, 255, 255, 0.45);
          backdrop-filter: blur(20px);

          color: #111;

          border: 1px solid rgba(255, 255, 255, 0.8);
        }

        /* METRICS */
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

          box-shadow:
            0 30px 80px rgba(0, 0, 0, 0.06),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);

          text-align: center;
        }

        .metric h3 {
          font-size: 32px;
          font-weight: 800;
          letter-spacing: -1px;
        }

        .metric span {
          display: block;
          margin-top: 10px;

          font-size: 12px;
          letter-spacing: 0.14em;
          text-transform: uppercase;

          color: rgba(0, 0, 0, 0.5);
        }

        /* GRID */
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
          position: relative;

          overflow: hidden;

          padding: 42px;
          border-radius: 34px;

          text-decoration: none;
          color: inherit;

          background: rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(24px);

          border: 1px solid rgba(255, 255, 255, 0.75);

          box-shadow:
            0 30px 100px rgba(0, 0, 0, 0.06),
            inset 0 1px 0 rgba(255, 255, 255, 0.7);

          transition:
            transform 0.6s ease,
            box-shadow 0.6s ease,
            background 0.6s ease;
        }

        .card:hover {
          transform: translateY(-12px);

          background: rgba(255, 255, 255, 0.75);

          box-shadow:
            0 50px 140px rgba(0, 0, 0, 0.12),
            inset 0 1px 0 rgba(255, 255, 255, 1);
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
          letter-spacing: -1.5px;
          font-weight: 800;
        }

        .card p {
          margin-top: 18px;

          font-size: 15px;
          line-height: 1.9;

          color: rgba(0, 0, 0, 0.62);

          max-width: 420px;
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

        /* CODE SECTION */
        .codeSection {
          position: relative;
          z-index: 2;

          margin: 130px auto 0;

          max-width: 1100px;

          overflow: hidden;

          border-radius: 34px;

          background: #0b1020;

          box-shadow:
            0 50px 140px rgba(0, 0, 0, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
        }

        .codeHeader {
          height: 70px;

          padding: 0 26px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          border-bottom: 1px solid rgba(255, 255, 255, 0.06);

          background: rgba(255, 255, 255, 0.03);
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
          letter-spacing: 0.12em;
          text-transform: uppercase;

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

          overflow-x: auto;
        }

        /* TERMINAL */
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

          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.06);
        }

        .pulse {
          width: 10px;
          height: 10px;
          border-radius: 999px;

          background: #111;
        }

        .terminal span {
          font-size: 12px;
          letter-spacing: 0.14em;
          text-transform: uppercase;

          color: rgba(0, 0, 0, 0.45);
        }

        .terminal p {
          font-size: 13px;
          color: rgba(0, 0, 0, 0.72);
        }

        /* FOOTER */
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

          letter-spacing: 0.04em;

          color: rgba(0, 0, 0, 0.55);
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .page {
            padding: 120px 18px;
          }

          .hero h1 {
            line-height: 1;
            letter-spacing: -2px;
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

          .card {
            padding: 34px 28px;
          }

          .card h2 {
            font-size: 28px;
          }

          .codeContent {
            padding: 24px;
          }

          .footer {
            margin-top: 100px;
          }
        }
      `}</style>
    </section>
  );
}
