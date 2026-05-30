"use client";

import Link from "next/link";

export default function ResearchPage() {
  return (
    <section className="researchPage">
      {/* BACKGROUND */}
      <div className="noise" />
      <div className="gridOverlay" />

      <div className="orb orb1" />
      <div className="orb orb2" />
      <div className="orb orb3" />

      {/* HERO */}
      <div className="hero">
        <div className="badge">
          <span className="dot" />
          ARC3D RESEARCH PROGRAM
        </div>

        <h1>
          Researching The Future
          <br />
          Of Spatial Intelligence
        </h1>

        <p>
          Arc3D is actively researching intelligent architectural systems that
          bridge 2D planning, 3D visualization, spatial automation, and
          cinematic presentation into one unified workflow.
        </p>

        <div className="heroButtons">
          <Link href="/internship">
            <button>Join Research</button>
          </Link>

          <Link href="/contact">
            <button className="ghost">Contact Team</button>
          </Link>
        </div>
      </div>

      {/* RESEARCH AREAS */}
      <div className="researchGrid">
        <div className="researchCard large">
          <div className="line" />

          <span className="index">01</span>

          <h2>2D → 3D Intelligence</h2>

          <p>
            Researching AI systems capable of understanding architectural floor
            plans and converting them into accurate cinematic 3D spatial
            structures.
          </p>

          <div className="tags">
            <span>Computer Vision</span>
            <span>Spatial Parsing</span>
            <span>3D Generation</span>
          </div>
        </div>

        <div className="researchCard">
          <div className="line" />

          <span className="index">02</span>

          <h2>Spatial Automation</h2>

          <p>
            Exploring automation pipelines for wall generation, room
            segmentation, lighting systems, and intelligent architectural
            arrangement.
          </p>

          <div className="tags">
            <span>Automation</span>
            <span>Geometry</span>
            <span>Architecture</span>
          </div>
        </div>

        <div className="researchCard">
          <div className="line" />

          <span className="index">03</span>

          <h2>Cinematic Rendering</h2>

          <p>
            Developing rendering workflows that combine realism, atmosphere,
            composition, and emotional depth for architectural storytelling.
          </p>

          <div className="tags">
            <span>Rendering</span>
            <span>Lighting</span>
            <span>Visualization</span>
          </div>
        </div>

        <div className="researchCard">
          <div className="line" />

          <span className="index">04</span>

          <h2>Architectural AI</h2>

          <p>
            Investigating intelligent systems for layout suggestions, spatial
            optimization, material reasoning, and architectural understanding.
          </p>

          <div className="tags">
            <span>AI Systems</span>
            <span>Spatial Logic</span>
            <span>Research</span>
          </div>
        </div>
      </div>

      {/* ROADMAP */}
      <div className="roadmap">
        <div className="roadmapLeft">
          <span className="sectionTag">RESEARCH ROADMAP</span>

          <h2>
            Building systems
            <br />
            beyond visualization.
          </h2>

          <p>
            Arc3D is evolving into a research-driven platform focused on
            intelligent architectural workflows and future spatial systems.
          </p>
        </div>

        <div className="roadmapRight">
          <div className="step">
            <span>01</span>
            <div>
              <h3>Floor Plan Understanding</h3>
              <p>
                Detecting walls, openings, room structures, and spatial layout
                logic from architectural plans.
              </p>
            </div>
          </div>

          <div className="step">
            <span>02</span>
            <div>
              <h3>3D Scene Reconstruction</h3>
              <p>
                Generating spatial geometry and architectural environments from
                structured 2D information.
              </p>
            </div>
          </div>

          <div className="step">
            <span>03</span>
            <div>
              <h3>Intelligent Visualization</h3>
              <p>
                Enhancing architectural presentation through cinematic rendering
                and realistic atmosphere systems.
              </p>
            </div>
          </div>

          <div className="step">
            <span>04</span>
            <div>
              <h3>Future Spatial Systems</h3>
              <p>
                Researching intelligent architectural experiences and advanced
                digital spatial workflows.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* TERMINAL */}
      <div className="terminal">
        <div className="terminalHeader">
          <div className="controls">
            <span />
            <span />
            <span />
          </div>

          <p>research-log.md</p>
        </div>

        <div className="terminalBody">
          <pre>
            {`> Arc3D Research Status

[✓] Spatial Layout Parsing
[✓] Architectural Geometry Mapping
[✓] 3D Scene Structuring
[✓] Cinematic Rendering Workflow
[•] AI Spatial Intelligence
[•] Automated Environment Systems

Research Phase: ACTIVE DEVELOPMENT`}
          </pre>
        </div>
      </div>

      {/* CTA */}
      <div className="cta">
        <div className="footerLine" />

        <h2>
          Interested in contributing
          <br />
          to future spatial systems?
        </h2>

        <p>
          We are always looking for researchers, developers, architects, and
          creative thinkers interested in the future of intelligent
          architecture.
        </p>

        <Link href="/internship">
          <button>Apply Internship</button>
        </Link>
      </div>

      <style jsx>{`
        .researchPage {
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

        .gridOverlay {
          position: absolute;
          inset: 0;

          background-image:
            linear-gradient(rgba(0, 0, 0, 0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.025) 1px, transparent 1px);

          background-size: 70px 70px;

          opacity: 0.4;
        }

        .orb {
          position: absolute;
          border-radius: 999px;
          filter: blur(120px);
        }

        .orb1 {
          width: 520px;
          height: 520px;

          top: -180px;
          left: -140px;

          background: rgba(40, 70, 160, 0.1);
        }

        .orb2 {
          width: 420px;
          height: 420px;

          right: -120px;
          top: 20%;

          background: rgba(255, 255, 255, 0.55);
        }

        .orb3 {
          width: 460px;
          height: 460px;

          bottom: -200px;
          left: 50%;

          transform: translateX(-50%);

          background: rgba(20, 20, 20, 0.05);
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

          font-size: clamp(58px, 8vw, 110px);

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

        .heroButtons {
          margin-top: 42px;

          display: flex;
          justify-content: center;
          gap: 16px;
        }

        button {
          height: 56px;
          padding: 0 28px;

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

        .ghost {
          background: rgba(255, 255, 255, 0.45);

          backdrop-filter: blur(20px);

          color: #111;

          border: 1px solid rgba(255, 255, 255, 0.8);
        }

        .researchGrid {
          position: relative;
          z-index: 2;

          max-width: 1200px;

          margin: 110px auto 0;

          display: grid;
          grid-template-columns: repeat(2, 1fr);

          gap: 24px;
        }

        .researchCard {
          padding: 42px;

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

        .line {
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

        .researchCard h2 {
          margin-top: 18px;

          font-size: 34px;
          line-height: 1.05;

          font-weight: 800;
        }

        .researchCard p {
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

        .roadmap {
          position: relative;
          z-index: 2;

          max-width: 1200px;

          margin: 140px auto 0;

          display: grid;
          grid-template-columns: 1fr 1fr;

          gap: 70px;
        }

        .sectionTag {
          font-size: 11px;

          letter-spacing: 0.22em;

          text-transform: uppercase;

          color: rgba(0, 0, 0, 0.45);
        }

        .roadmapLeft h2 {
          margin-top: 22px;

          font-size: 58px;

          line-height: 1;

          letter-spacing: -3px;

          font-weight: 900;
        }

        .roadmapLeft p {
          margin-top: 26px;

          font-size: 15px;
          line-height: 2;

          color: rgba(0, 0, 0, 0.62);
        }

        .roadmapRight {
          display: flex;
          flex-direction: column;
          gap: 34px;
        }

        .step {
          display: flex;
          gap: 24px;
        }

        .step span {
          font-size: 14px;

          font-weight: 700;

          color: rgba(0, 0, 0, 0.35);
        }

        .step h3 {
          font-size: 24px;
          font-weight: 800;
        }

        .step p {
          margin-top: 10px;

          font-size: 14px;
          line-height: 1.8;

          color: rgba(0, 0, 0, 0.6);
        }

        .terminal {
          position: relative;
          z-index: 2;

          max-width: 1100px;

          margin: 130px auto 0;

          overflow: hidden;

          border-radius: 34px;

          background: #0b1020;
        }

        .terminalHeader {
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

        .terminalHeader p {
          font-size: 12px;

          color: rgba(255, 255, 255, 0.45);
        }

        .terminalBody {
          padding: 36px;
        }

        pre {
          margin: 0;

          color: rgba(255, 255, 255, 0.85);

          font-size: 14px;

          line-height: 2;
        }

        .cta {
          position: relative;
          z-index: 2;

          margin-top: 150px;

          text-align: center;
        }

        .footerLine {
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
          margin: 24px auto 0;

          max-width: 760px;

          font-size: 15px;

          line-height: 2;

          color: rgba(0, 0, 0, 0.62);
        }

        .cta button {
          margin-top: 36px;
        }

        @media (max-width: 1000px) {
          .researchGrid,
          .roadmap {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .researchPage {
            padding: 120px 18px;
          }

          .heroButtons {
            flex-direction: column;
          }

          .hero h1,
          .roadmapLeft h2,
          .cta h2 {
            letter-spacing: -2px;
          }
        }
      `}</style>
    </section>
  );
}
