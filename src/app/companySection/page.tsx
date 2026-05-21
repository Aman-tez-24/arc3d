"use client";

import Link from "next/link";

export default function DevelopmentSection() {
  return (
    <section className="page">
      {/* BACKGROUND */}
      <div className="noise" />
      <div className="gridOverlay" />

      {/* LIGHT ORBS */}
      <div className="orb orb1" />
      <div className="orb orb2" />
      <div className="orb orb3" />
      <div className="orb orb4" />

      {/* HERO */}
      <div className="hero">
        <span className="tag">
          <span className="dot" />
          ARC3D DEVELOPMENT SYSTEM
        </span>

        <h1>
          Engineering the
          <br />
          Future of Intelligent
          <br />
          Architecture
        </h1>

        <p>
          Arc3D is building a new generation architectural ecosystem where AI,
          spatial intelligence, cinematic visualization, and immersive 3D
          systems converge into one intelligent workflow. Our platform is
          designed to redefine how modern spaces are imagined, planned,
          experienced, and constructed.
        </p>

        <div className="heroMeta">
          <div>
            <h3>Realtime</h3>
            <span>Spatial Processing</span>
          </div>

          <div>
            <h3>AI Powered</h3>
            <span>Architectural Intelligence</span>
          </div>

          <div>
            <h3>Cinematic</h3>
            <span>Visualization Pipeline</span>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="stats">
        <div className="stat">
          <span className="mini">Projects</span>
          <h3>250+</h3>
          <p>
            Immersive architectural concepts visualized through intelligent
            spatial systems.
          </p>
        </div>

        <div className="stat">
          <span className="mini">Technology</span>
          <h3>Next-Gen AI</h3>
          <p>
            Neural spatial engines capable of interpreting and optimizing
            architectural environments.
          </p>
        </div>

        <div className="stat">
          <span className="mini">Experience</span>
          <h3>Ultra Realistic</h3>
          <p>
            Cinematic rendering pipelines delivering emotionally immersive
            architectural storytelling.
          </p>
        </div>
      </div>

      {/* DEVELOPMENT TIMELINE */}
      <div className="timelineSection">
        <div className="sectionHeader">
          <span>DEVELOPMENT ECOSYSTEM</span>
          <h2>What Arc3D Is Building</h2>

          <p>
            We are not creating a traditional architecture platform. Arc3D is
            evolving into a complete spatial intelligence infrastructure powered
            by artificial intelligence, realtime rendering systems, and
            immersive interactive technologies.
          </p>
        </div>

        <div className="timeline">
          <div className="timelineCard">
            <div className="number">01</div>

            <h3>AI Spatial Intelligence</h3>

            <p>
              An intelligent architectural reasoning engine capable of analyzing
              layouts, optimizing circulation, understanding structural logic,
              and generating smarter spatial solutions automatically.
            </p>

            <ul>
              <li>Realtime plan understanding</li>
              <li>Vastu-aware optimization</li>
              <li>AI-assisted decision systems</li>
            </ul>
          </div>

          <div className="timelineCard">
            <div className="number">02</div>

            <h3>2D → 3D Neural Conversion</h3>

            <p>
              Automated conversion pipelines that transform floor plans,
              sketches, and blueprints into immersive, spatially accurate 3D
              environments with intelligent geometry reconstruction.
            </p>

            <ul>
              <li>Blueprint recognition engine</li>
              <li>Realtime environment generation</li>
              <li>Structural depth mapping</li>
            </ul>
          </div>

          <div className="timelineCard">
            <div className="number">03</div>

            <h3>Cinematic Visualization</h3>

            <p>
              Advanced rendering architecture designed to produce emotionally
              immersive walkthroughs, luxury-quality visuals, lighting
              simulations, and interactive presentation experiences.
            </p>

            <ul>
              <li>Photorealistic rendering</li>
              <li>Material simulation systems</li>
              <li>Realtime walkthrough experiences</li>
            </ul>
          </div>

          <div className="timelineCard">
            <div className="number">04</div>

            <h3>Future Spatial Platform</h3>

            <p>
              Arc3D is evolving into a complete intelligent architecture
              operating system where architects, designers, and clients can
              collaborate inside immersive digital environments.
            </p>

            <ul>
              <li>Cloud collaboration systems</li>
              <li>Interactive design ecosystems</li>
              <li>AI-driven architecture workflows</li>
            </ul>
          </div>
        </div>
      </div>

      {/* NAV GRID */}
      <div className="grid">
        <Link href="/about" className="card large">
          <div className="lineTop" />

          <span className="index">01</span>

          <h2>About Arc3D</h2>

          <p>
            Explore the philosophy, engineering vision, and future-focused
            innovation shaping the Arc3D ecosystem and its intelligent spatial
            infrastructure.
          </p>

          <div className="bottom">
            <span>Explore Vision</span>
            <span>↗</span>
          </div>
        </Link>

        <Link href="/projects" className="card">
          <div className="lineTop" />

          <span className="index">02</span>

          <h2>Projects</h2>

          <p>
            Discover immersive architecture experiences, cinematic renders,
            luxury spatial concepts, and intelligent environment systems crafted
            through Arc3D.
          </p>

          <div className="bottom">
            <span>View Projects</span>
            <span>↗</span>
          </div>
        </Link>

        <Link href="/careers" className="card">
          <div className="lineTop" />

          <span className="index">03</span>

          <h2>Careers</h2>

          <p>
            Join a future-driven team building the intersection between
            architecture, artificial intelligence, immersive systems, and
            realtime spatial computing.
          </p>

          <div className="bottom">
            <span>Join Team</span>
            <span>↗</span>
          </div>
        </Link>

        <Link href="/contactSection" className="card highlight">
          <div className="lineTop" />

          <span className="index">04</span>

          <h2>Start a Project</h2>

          <p>
            Collaborate with Arc3D to transform concepts into intelligent,
            cinematic, and future-ready architectural experiences.
          </p>

          <div className="bottom">
            <span>Collaborate</span>
            <span>↗</span>
          </div>
        </Link>
      </div>

      {/* QUOTE */}
      <div className="footerNote">
        <div className="footerLine" />

        <p>
          “The future of architecture is not static.
          <br />
          It is intelligent, immersive, adaptive, and alive.”
        </p>
      </div>

      <style jsx>{`
        .page {
          position: relative;
          overflow: hidden;
          padding: 170px 24px;
          background:
            radial-gradient(
              circle at top left,
              rgba(255, 255, 255, 0.9),
              transparent 40%
            ),
            linear-gradient(180deg, #faf7f1 0%, #f3f1eb 35%, #ebe6dc 100%);

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
            linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px);

          background-size: 70px 70px;

          mask-image: radial-gradient(circle at center, black, transparent 85%);

          opacity: 0.6;
        }

        /* ORBS */
        .orb {
          position: absolute;
          border-radius: 999px;
          filter: blur(140px);
          z-index: 0;
        }

        .orb1 {
          width: 520px;
          height: 520px;
          background: rgba(70, 100, 220, 0.14);
          top: -180px;
          left: -120px;
        }

        .orb2 {
          width: 420px;
          height: 420px;
          background: rgba(255, 255, 255, 0.7);
          right: -120px;
          top: 20%;
        }

        .orb3 {
          width: 420px;
          height: 420px;
          background: rgba(0, 0, 0, 0.06);
          bottom: -160px;
          left: 20%;
        }

        .orb4 {
          width: 320px;
          height: 320px;
          background: rgba(130, 150, 255, 0.12);
          bottom: 10%;
          right: 10%;
        }

        /* HERO */
        .hero {
          position: relative;
          z-index: 2;

          max-width: 1100px;
          margin: auto;

          text-align: center;
        }

        .tag {
          display: inline-flex;
          align-items: center;
          gap: 10px;

          padding: 12px 20px;
          border-radius: 999px;

          background: rgba(255, 255, 255, 0.55);
          backdrop-filter: blur(20px);

          border: 1px solid rgba(255, 255, 255, 0.8);

          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.35em;

          color: rgba(0, 0, 0, 0.55);

          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.06);
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: #4d6fff;

          box-shadow: 0 0 20px rgba(77, 111, 255, 0.8);
        }

        .hero h1 {
          margin-top: 36px;

          font-size: clamp(56px, 8vw, 110px);
          line-height: 0.9;
          letter-spacing: -5px;
          font-weight: 900;

          color: #0a0a0a;
        }

        .hero p {
          margin: 36px auto 0;

          max-width: 850px;

          font-size: 16px;
          line-height: 2;

          color: rgba(0, 0, 0, 0.62);
        }

        .heroMeta {
          margin-top: 60px;

          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .heroMeta div {
          padding: 28px;
          border-radius: 26px;

          background: rgba(255, 255, 255, 0.45);
          backdrop-filter: blur(20px);

          border: 1px solid rgba(255, 255, 255, 0.7);

          box-shadow:
            0 20px 60px rgba(0, 0, 0, 0.05),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);
        }

        .heroMeta h3 {
          font-size: 22px;
          font-weight: 800;
          letter-spacing: -0.5px;
        }

        .heroMeta span {
          display: block;
          margin-top: 8px;

          font-size: 13px;
          letter-spacing: 0.08em;
          text-transform: uppercase;

          color: rgba(0, 0, 0, 0.5);
        }

        /* STATS */
        .stats {
          position: relative;
          z-index: 2;

          max-width: 1200px;
          margin: 110px auto 0;

          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .stat {
          padding: 40px;
          border-radius: 32px;

          background: rgba(255, 255, 255, 0.45);
          backdrop-filter: blur(24px);

          border: 1px solid rgba(255, 255, 255, 0.75);

          box-shadow:
            0 30px 100px rgba(0, 0, 0, 0.06),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);
        }

        .mini {
          font-size: 11px;
          letter-spacing: 0.25em;
          text-transform: uppercase;

          color: rgba(0, 0, 0, 0.45);
        }

        .stat h3 {
          margin-top: 20px;

          font-size: 44px;
          font-weight: 900;
          letter-spacing: -2px;
        }

        .stat p {
          margin-top: 16px;

          font-size: 15px;
          line-height: 1.9;

          color: rgba(0, 0, 0, 0.58);
        }

        /* TIMELINE */
        .timelineSection {
          position: relative;
          z-index: 2;

          max-width: 1250px;
          margin: 160px auto 0;
        }

        .sectionHeader {
          text-align: center;
          max-width: 900px;
          margin: auto;
        }

        .sectionHeader span {
          font-size: 11px;
          letter-spacing: 0.3em;
          color: rgba(0, 0, 0, 0.45);
        }

        .sectionHeader h2 {
          margin-top: 24px;

          font-size: clamp(42px, 5vw, 72px);
          line-height: 1;
          letter-spacing: -3px;
          font-weight: 900;
        }

        .sectionHeader p {
          margin-top: 28px;

          font-size: 16px;
          line-height: 2;

          color: rgba(0, 0, 0, 0.6);
        }

        .timeline {
          margin-top: 80px;

          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .timelineCard {
          position: relative;

          padding: 42px;
          border-radius: 34px;

          background: rgba(255, 255, 255, 0.48);
          backdrop-filter: blur(24px);

          border: 1px solid rgba(255, 255, 255, 0.75);

          box-shadow:
            0 30px 100px rgba(0, 0, 0, 0.06),
            inset 0 1px 0 rgba(255, 255, 255, 0.85);

          transition:
            transform 0.6s ease,
            box-shadow 0.6s ease;
        }

        .timelineCard:hover {
          transform: translateY(-12px);

          box-shadow:
            0 50px 140px rgba(0, 0, 0, 0.12),
            inset 0 1px 0 rgba(255, 255, 255, 1);
        }

        .number {
          font-size: 12px;
          letter-spacing: 0.3em;
          color: rgba(0, 0, 0, 0.38);
        }

        .timelineCard h3 {
          margin-top: 18px;

          font-size: 34px;
          line-height: 1.1;
          letter-spacing: -1.5px;
          font-weight: 850;
        }

        .timelineCard p {
          margin-top: 18px;

          font-size: 15px;
          line-height: 1.9;

          color: rgba(0, 0, 0, 0.6);
        }

        .timelineCard ul {
          margin-top: 24px;
          padding-left: 18px;
        }

        .timelineCard li {
          margin-top: 12px;

          font-size: 14px;
          line-height: 1.7;

          color: rgba(0, 0, 0, 0.58);
        }

        /* NAV GRID */
        .grid {
          position: relative;
          z-index: 2;

          max-width: 1200px;
          margin: 150px auto 0;

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

          background: rgba(255, 255, 255, 0.48);
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

        .lineTop {
          width: 80px;
          height: 1px;
          background: rgba(0, 0, 0, 0.18);

          margin-bottom: 24px;
        }

        .index {
          font-size: 12px;
          letter-spacing: 0.25em;
          color: rgba(0, 0, 0, 0.38);
        }

        .card h2 {
          margin-top: 18px;

          font-size: 36px;
          line-height: 1.05;
          letter-spacing: -1.5px;
          font-weight: 850;
        }

        .card p {
          margin-top: 18px;

          max-width: 420px;

          font-size: 15px;
          line-height: 1.9;

          color: rgba(0, 0, 0, 0.6);
        }

        .bottom {
          margin-top: 42px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          font-size: 12px;
          letter-spacing: 0.2em;
          text-transform: uppercase;

          color: rgba(0, 0, 0, 0.5);
        }

        /* FOOTER */
        .footerNote {
          position: relative;
          z-index: 2;

          margin-top: 160px;

          text-align: center;
        }

        .footerLine {
          width: 120px;
          height: 1px;

          margin: 0 auto 30px;

          background: rgba(0, 0, 0, 0.14);
        }

        .footerNote p {
          font-size: 20px;
          line-height: 1.9;
          letter-spacing: 0.03em;

          color: rgba(0, 0, 0, 0.52);
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

          .heroMeta,
          .stats,
          .timeline,
          .grid {
            grid-template-columns: 1fr;
          }

          .timelineCard,
          .card,
          .stat {
            padding: 32px 26px;
          }

          .timelineCard h3,
          .card h2 {
            font-size: 28px;
          }

          .footerNote {
            margin-top: 110px;
          }
        }
      `}</style>
    </section>
  );
}
