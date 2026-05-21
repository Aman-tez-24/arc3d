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
          ARC3D DOCUMENTATION PLATFORM
        </div>

        <h1>
          Learn.
          <br />
          Build.
          <br />
          Deploy at Scale.
        </h1>

        <p>
          A complete developer ecosystem for understanding Arc3D’s architecture
          intelligence engine — from foundational setup to cinematic rendering
          systems, AI-powered workflows, spatial computing pipelines, and
          enterprise-scale deployment infrastructure.
        </p>

        <div className="heroBottom">
          <div className="heroCard">
            <h3>Realtime Engine</h3>
            <span>Advanced rendering pipeline documentation</span>
          </div>

          <div className="heroCard">
            <h3>AI Spatial Systems</h3>
            <span>Learn intelligent architecture generation</span>
          </div>

          <div className="heroCard">
            <h3>Production Ready</h3>
            <span>Enterprise deployment + optimization guides</span>
          </div>
        </div>
      </div>

      {/* DOCS GRID */}
      <div className="grid">
        <Link href="/docs" className="card large">
          <div className="line" />

          <span className="index">01</span>

          <h2>Getting Started</h2>

          <p>
            Learn how to install Arc3D, configure the rendering environment,
            initialize the visualization engine, and launch your first cinematic
            architecture workflow in minutes.
          </p>

          <ul>
            <li>Engine installation</li>
            <li>Project structure</li>
            <li>Scene configuration</li>
            <li>Development workflow</li>
          </ul>

          <div className="bottom">
            <span>Start Learning</span>
            <span>↗</span>
          </div>
        </Link>

        <Link href="/docs" className="card">
          <div className="line" />

          <span className="index">02</span>

          <h2>3D Rendering Engine</h2>

          <p>
            Deep dive into Arc3D’s realtime rendering architecture including
            shaders, cinematic lighting systems, GPU optimization, particle
            engines, environment simulation, and immersive camera workflows.
          </p>

          <div className="bottom">
            <span>Explore Engine</span>
            <span>↗</span>
          </div>
        </Link>

        <Link href="/docs" className="card">
          <div className="line" />

          <span className="index">03</span>

          <h2>AI Architecture Pipeline</h2>

          <p>
            Understand how Arc3D processes blueprints, interprets spatial
            relationships, optimizes floor plans, and generates intelligent 3D
            environments using AI-assisted architectural reasoning systems.
          </p>

          <div className="bottom">
            <span>View Pipeline</span>
            <span>↗</span>
          </div>
        </Link>

        <Link href="/docs" className="card highlight">
          <div className="line" />

          <span className="index">04</span>

          <h2>Deployment & Support</h2>

          <p>
            Production deployment guides for Vercel, performance optimization,
            rendering stability, model compression, asset streaming, debugging,
            and scaling large architecture environments.
          </p>

          <div className="bottom">
            <span>Get Support</span>
            <span>↗</span>
          </div>
        </Link>
      </div>

      {/* TERMINAL */}
      <div className="terminal">
        <div className="terminalTop">
          <div className="circles">
            <span />
            <span />
            <span />
          </div>

          <p>arc3d-terminal</p>
        </div>

        <div className="codeArea">
          <div className="codeLine">
            <span className="prompt">$</span>
            npx create-next-app arc3d-app
          </div>

          <div className="codeLine">
            <span className="prompt">$</span>
            cd arc3d-app
          </div>

          <div className="codeLine">
            <span className="prompt">$</span>
            npm install three @react-three/fiber framer-motion
          </div>

          <div className="codeLine">
            <span className="prompt">$</span>
            npm run dev
          </div>

          <div className="success">✓ Arc3D Engine initialized successfully</div>
        </div>
      </div>

      {/* FEATURES */}
      <div className="features">
        <div className="sectionTitle">
          <span>DEVELOPER EXPERIENCE</span>
          <h2>Built for Modern Spatial Engineering</h2>
        </div>

        <div className="featureGrid">
          <div className="featureCard">
            <h3>Realtime Visualization</h3>

            <p>
              Understand cinematic rendering systems, realtime scene updates,
              physically based lighting, reflections, and advanced spatial
              interactions.
            </p>
          </div>

          <div className="featureCard">
            <h3>Production Workflows</h3>

            <p>
              Learn scalable architecture workflows for handling large
              environments, asset optimization, streaming, and immersive user
              experiences.
            </p>
          </div>

          <div className="featureCard">
            <h3>AI Assisted Systems</h3>

            <p>
              Discover how AI enhances architecture generation, layout
              optimization, environmental analysis, and intelligent design
              recommendations.
            </p>
          </div>
        </div>
      </div>

      {/* INFO SECTION */}
      <div className="info">
        <div className="infoBox">
          <span>WHY THESE DOCS MATTER</span>

          <h2>
            Arc3D is More Than a Framework —
            <br />
            It’s an Entire Spatial Computing Ecosystem.
          </h2>

          <p>
            These documentation systems are designed to help developers,
            designers, architects, and visualization engineers understand how
            cinematic rendering, AI-assisted architecture, immersive interaction
            systems, and realtime spatial intelligence work together inside a
            unified platform.
          </p>

          <div className="infoStats">
            <div>
              <h3>120+</h3>
              <p>Technical Guides</p>
            </div>

            <div>
              <h3>40+</h3>
              <p>Rendering Modules</p>
            </div>

            <div>
              <h3>AI Powered</h3>
              <p>Architecture Systems</p>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="footer">
        <div className="footerLine" />

        <p>“Documentation is where imagination becomes executable reality.”</p>
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

        /* BACKGROUND */
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

        /* HERO */
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

          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.05);
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: #4f46e5;
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

        .heroCard {
          padding: 28px;
          border-radius: 28px;

          background: rgba(255, 255, 255, 0.45);
          backdrop-filter: blur(24px);

          border: 1px solid rgba(255, 255, 255, 0.75);

          box-shadow:
            0 30px 80px rgba(0, 0, 0, 0.06),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);
        }

        .heroCard h3 {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .heroCard span {
          font-size: 13px;
          color: rgba(0, 0, 0, 0.55);
          line-height: 1.7;
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

          background: rgba(255, 255, 255, 0.52);
          backdrop-filter: blur(24px);

          border: 1px solid rgba(255, 255, 255, 0.7);

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

          background: rgba(255, 255, 255, 0.72);

          box-shadow:
            0 50px 140px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 1);
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

        .card p {
          margin-top: 18px;

          font-size: 15px;
          line-height: 1.9;

          color: rgba(0, 0, 0, 0.62);
        }

        .card ul {
          margin-top: 26px;
          padding-left: 18px;
        }

        .card li {
          margin-bottom: 12px;
          font-size: 14px;
          color: rgba(0, 0, 0, 0.58);
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

        /* TERMINAL */
        .terminal {
          position: relative;
          z-index: 2;

          max-width: 1100px;
          margin: 130px auto 0;

          overflow: hidden;
          border-radius: 34px;

          background: #0b1020;

          box-shadow:
            0 50px 140px rgba(0, 0, 0, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
        }

        .terminalTop {
          display: flex;
          align-items: center;
          justify-content: space-between;

          padding: 18px 24px;

          background: rgba(255, 255, 255, 0.04);

          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .circles {
          display: flex;
          gap: 8px;
        }

        .circles span {
          width: 10px;
          height: 10px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.35);
        }

        .terminalTop p {
          font-size: 12px;
          letter-spacing: 0.15em;
          color: rgba(255, 255, 255, 0.5);
        }

        .codeArea {
          padding: 40px;
        }

        .codeLine {
          margin-bottom: 18px;

          font-size: 14px;
          font-family: monospace;

          color: rgba(255, 255, 255, 0.88);
        }

        .prompt {
          margin-right: 14px;
          color: #7dd3fc;
        }

        .success {
          margin-top: 26px;

          color: #86efac;
          font-size: 14px;
          font-family: monospace;
        }

        /* FEATURES */
        .features {
          position: relative;
          z-index: 2;

          max-width: 1200px;
          margin: 140px auto 0;
        }

        .sectionTitle {
          text-align: center;
        }

        .sectionTitle span {
          font-size: 11px;
          letter-spacing: 0.35em;
          color: rgba(0, 0, 0, 0.45);
        }

        .sectionTitle h2 {
          margin-top: 20px;

          font-size: clamp(38px, 5vw, 64px);
          line-height: 1;
          letter-spacing: -2px;
        }

        .featureGrid {
          margin-top: 60px;

          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .featureCard {
          padding: 36px;
          border-radius: 28px;

          background: rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(20px);

          border: 1px solid rgba(255, 255, 255, 0.8);

          box-shadow:
            0 25px 80px rgba(0, 0, 0, 0.05),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);
        }

        .featureCard h3 {
          font-size: 24px;
          margin-bottom: 16px;
          font-weight: 700;
        }

        .featureCard p {
          font-size: 15px;
          line-height: 1.9;
          color: rgba(0, 0, 0, 0.6);
        }

        /* INFO */
        .info {
          position: relative;
          z-index: 2;

          max-width: 1100px;
          margin: 140px auto 0;
        }

        .infoBox {
          padding: 70px;
          border-radius: 40px;

          background: rgba(255, 255, 255, 0.55);
          backdrop-filter: blur(28px);

          border: 1px solid rgba(255, 255, 255, 0.75);

          box-shadow:
            0 40px 120px rgba(0, 0, 0, 0.06),
            inset 0 1px 0 rgba(255, 255, 255, 0.9);

          text-align: center;
        }

        .infoBox span {
          font-size: 11px;
          letter-spacing: 0.35em;
          color: rgba(0, 0, 0, 0.45);
        }

        .infoBox h2 {
          margin-top: 22px;

          font-size: clamp(36px, 5vw, 64px);
          line-height: 1.05;
          letter-spacing: -2px;
        }

        .infoBox p {
          margin: 28px auto 0;

          max-width: 760px;

          font-size: 16px;
          line-height: 2;

          color: rgba(0, 0, 0, 0.62);
        }

        .infoStats {
          margin-top: 60px;

          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .infoStats div {
          padding: 30px;
          border-radius: 24px;

          background: rgba(255, 255, 255, 0.55);

          border: 1px solid rgba(255, 255, 255, 0.8);
        }

        .infoStats h3 {
          font-size: 32px;
          font-weight: 800;
          margin-bottom: 10px;
        }

        .infoStats p {
          margin: 0;
          font-size: 13px;
          line-height: 1.6;
          letter-spacing: 0.08em;
          text-transform: uppercase;
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
          margin: 0 auto 28px;

          background: rgba(0, 0, 0, 0.15);
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
            letter-spacing: -2px;
            line-height: 1;
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

          .card h2 {
            font-size: 28px;
          }

          .sectionTitle h2,
          .infoBox h2 {
            line-height: 1.1;
          }

          .terminal {
            border-radius: 28px;
          }

          .codeArea {
            padding: 28px;
          }

          .footer {
            margin-top: 100px;
          }
        }
      `}</style>
    </section>
  );
}
