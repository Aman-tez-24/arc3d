"use client";

import { useEffect, useRef } from "react";

export default function TwoDtoThreeDPage() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const ctx: CanvasRenderingContext2D = context;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const nodes = Array.from({ length: 90 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // premium background
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "#f6f3ee");
      gradient.addColorStop(1, "#ffffff");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // grid
      ctx.strokeStyle = "rgba(0,0,0,0.03)";
      ctx.lineWidth = 1;

      for (let x = 0; x < width; x += 60) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = 0; y < height; y += 60) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.strokeStyle = `rgba(20,20,20,${0.08 - dist / 1800})`;

            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // nodes
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0,0,0,0.55)";
        ctx.fill();

        n.x += n.vx;
        n.y += n.vy;

        if (n.x <= 0 || n.x >= width) n.vx *= -1;
        if (n.y <= 0 || n.y >= height) n.vy *= -1;
      }

      requestAnimationFrame(draw);
    };

    draw();

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="page">
      {/* BACKGROUND */}
      <canvas ref={canvasRef} className="bgCanvas" />

      {/* PREMIUM GLOW */}
      <div className="ambient ambient1" />
      <div className="ambient ambient2" />

      {/* HERO */}
      <div className="hero">
        <div className="heroGlass">
          <span className="tag">ARC3D • SPATIAL ENGINE</span>

          <h1>
            Transforming
            <br />
            2D Blueprints
            <br />
            Into Living 3D Spaces
          </h1>

          <p>
            Arc3D converts architectural drawings into immersive cinematic
            environments using intelligent spatial reconstruction, material
            simulation, and real-time visualization systems.
          </p>

          <div className="buttons">
            <button className="primary">
              Upload Blueprint
              <span>↗</span>
            </button>

            <button className="secondary">View Experience</button>
          </div>

          {/* STATS */}
          <div className="stats">
            <div>
              <h3>98%</h3>
              <p>Spatial Accuracy</p>
            </div>

            <div>
              <h3>4K</h3>
              <p>Cinematic Rendering</p>
            </div>

            <div>
              <h3>AI</h3>
              <p>Design Intelligence</p>
            </div>
          </div>
        </div>
      </div>

      {/* PIPELINE */}
      <div className="section">
        <div className="sectionHeader">
          <span>PROCESS</span>
          <h2>Neural Conversion Pipeline</h2>
        </div>

        <div className="grid">
          <div className="card">
            <div className="number">01</div>

            <h3>Vision Parsing</h3>

            <p>
              AI systems detect walls, openings, room boundaries, and structural
              geometry directly from 2D plans.
            </p>
          </div>

          <div className="card">
            <div className="number">02</div>

            <h3>Spatial Mapping</h3>

            <p>
              Blueprint coordinates are translated into a scalable architectural
              3D space with real-world proportions.
            </p>
          </div>

          <div className="card">
            <div className="number">03</div>

            <h3>Material Intelligence</h3>

            <p>
              Surfaces, lighting behavior, textures, and environmental depth are
              simulated for realism.
            </p>
          </div>

          <div className="card">
            <div className="number">04</div>

            <h3>3D Environment Output</h3>

            <p>
              The final environment becomes fully interactive, cinematic, and
              walkthrough-ready.
            </p>
          </div>
        </div>
      </div>

      {/* FEATURE PANEL */}
      <div className="featurePanel">
        <div className="left">
          <span>OUTPUT SYSTEM</span>

          <h2>Built for Modern Architectural Visualization</h2>

          <p>
            Every generated environment is optimized for immersive design
            reviews, cinematic presentation, and future AI-driven spatial
            workflows.
          </p>

          <div className="features">
            <div>✔ Real-world scale precision</div>
            <div>✔ Interactive walkthrough system</div>
            <div>✔ Material & lighting simulation</div>
            <div>✔ Spatial AI enhancement</div>
          </div>
        </div>

        <div className="right">
          <div className="previewCard">
            <div className="previewGlow" />

            <img src="/images/showcase.jpg" alt="3D preview" />

            <div className="previewOverlay">
              <h3>Realtime Architectural Preview</h3>
              <p>Interactive cinematic viewport generated from 2D plans.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta">
        <div className="ctaBox">
          <span>START YOUR PROJECT</span>

          <h2>Convert Your Floor Plan Into A Cinematic 3D Reality</h2>

          <p>
            Upload architectural drawings and experience the next generation of
            intelligent spatial visualization.
          </p>

          <button>
            Begin Conversion
            <span>→</span>
          </button>
        </div>
      </div>

      <style jsx>{`
        .page {
          position: relative;
          overflow: hidden;
          background: #f6f3ee;
          min-height: 100vh;
          padding: 140px 24px;
        }

        .bgCanvas {
          position: fixed;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        .ambient {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.4;
          z-index: 1;
        }

        .ambient1 {
          width: 500px;
          height: 500px;
          background: rgba(0, 0, 0, 0.05);
          top: -120px;
          left: -120px;
        }

        .ambient2 {
          width: 420px;
          height: 420px;
          background: rgba(0, 0, 0, 0.04);
          right: -100px;
          bottom: 100px;
        }

        /* HERO */

        .hero {
          position: relative;
          z-index: 2;
          max-width: 1400px;
          margin: auto;
        }

        .heroGlass {
          padding: 80px;
          border-radius: 42px;

          background: rgba(255, 255, 255, 0.6);

          backdrop-filter: blur(18px);

          border: 1px solid rgba(255, 255, 255, 0.7);

          box-shadow:
            0 40px 140px rgba(0, 0, 0, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.7);
        }

        .tag {
          font-size: 11px;
          letter-spacing: 0.35em;
          color: rgba(0, 0, 0, 0.45);
        }

        .hero h1 {
          margin-top: 24px;

          font-size: 6rem;
          line-height: 0.92;
          letter-spacing: -0.08em;

          color: #0a0a0a;

          font-weight: 850;
        }

        .hero p {
          margin-top: 28px;

          max-width: 760px;

          font-size: 17px;
          line-height: 1.9;

          color: rgba(0, 0, 0, 0.62);
        }

        /* BUTTONS */

        .buttons {
          margin-top: 40px;

          display: flex;
          gap: 18px;
          flex-wrap: wrap;
        }

        button {
          border: none;
          outline: none;
          cursor: pointer;
          transition: 0.35s ease;
        }

        .primary {
          padding: 16px 28px;
          border-radius: 16px;

          background: #0f0f0f;
          color: white;

          font-size: 14px;
          font-weight: 600;

          display: flex;
          align-items: center;
          gap: 12px;

          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
        }

        .primary:hover {
          transform: translateY(-5px);
        }

        .secondary {
          padding: 16px 28px;
          border-radius: 16px;

          background: rgba(255, 255, 255, 0.7);

          border: 1px solid rgba(0, 0, 0, 0.08);

          color: #111;

          font-size: 14px;
          font-weight: 600;

          backdrop-filter: blur(10px);
        }

        .secondary:hover {
          transform: translateY(-5px);
        }

        /* STATS */

        .stats {
          margin-top: 60px;

          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .stats div {
          padding: 28px;
          border-radius: 24px;

          background: rgba(255, 255, 255, 0.55);

          border: 1px solid rgba(255, 255, 255, 0.8);

          backdrop-filter: blur(10px);
        }

        .stats h3 {
          font-size: 38px;
          color: #0a0a0a;
          margin-bottom: 10px;
        }

        .stats p {
          margin: 0;
          font-size: 13px;
          color: rgba(0, 0, 0, 0.55);
        }

        /* SECTION */

        .section {
          position: relative;
          z-index: 2;

          max-width: 1400px;
          margin: 180px auto 0;
        }

        .sectionHeader {
          text-align: center;
          margin-bottom: 70px;
        }

        .sectionHeader span {
          font-size: 11px;
          letter-spacing: 0.35em;
          color: rgba(0, 0, 0, 0.45);
        }

        .sectionHeader h2 {
          margin-top: 18px;

          font-size: 4rem;
          line-height: 1;

          letter-spacing: -0.06em;

          color: #0a0a0a;
        }

        /* GRID */

        .grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .card {
          position: relative;

          padding: 40px;

          border-radius: 30px;

          background: rgba(255, 255, 255, 0.65);

          backdrop-filter: blur(18px);

          border: 1px solid rgba(255, 255, 255, 0.8);

          overflow: hidden;

          transition:
            transform 0.5s ease,
            box-shadow 0.5s ease;
        }

        .card::before {
          content: "";

          position: absolute;
          inset: 0;

          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.45),
            transparent
          );

          pointer-events: none;
        }

        .card:hover {
          transform: translateY(-10px);

          box-shadow: 0 40px 120px rgba(0, 0, 0, 0.1);
        }

        .number {
          font-size: 13px;
          letter-spacing: 0.25em;
          color: rgba(0, 0, 0, 0.35);
          margin-bottom: 20px;
        }

        .card h3 {
          font-size: 30px;
          line-height: 1.1;
          color: #0a0a0a;
          margin-bottom: 16px;
        }

        .card p {
          font-size: 15px;
          line-height: 1.9;
          color: rgba(0, 0, 0, 0.62);
        }

        /* FEATURE PANEL */

        .featurePanel {
          position: relative;
          z-index: 2;

          max-width: 1400px;
          margin: 180px auto 0;

          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .left span {
          font-size: 11px;
          letter-spacing: 0.35em;
          color: rgba(0, 0, 0, 0.45);
        }

        .left h2 {
          margin-top: 20px;

          font-size: 4rem;
          line-height: 0.95;

          letter-spacing: -0.06em;

          color: #0a0a0a;
        }

        .left p {
          margin-top: 24px;

          font-size: 16px;
          line-height: 1.9;

          color: rgba(0, 0, 0, 0.62);

          max-width: 580px;
        }

        .features {
          margin-top: 40px;

          display: grid;
          gap: 18px;
        }

        .features div {
          padding: 18px 22px;

          border-radius: 18px;

          background: rgba(255, 255, 255, 0.6);

          backdrop-filter: blur(10px);

          border: 1px solid rgba(255, 255, 255, 0.7);

          color: #111;

          font-size: 14px;
        }

        /* PREVIEW */

        .previewCard {
          position: relative;

          height: 700px;

          border-radius: 34px;

          overflow: hidden;

          box-shadow: 0 60px 180px rgba(0, 0, 0, 0.14);
        }

        .previewGlow {
          position: absolute;
          inset: 0;

          background: radial-gradient(
            circle at top,
            rgba(255, 255, 255, 0.25),
            transparent 60%
          );

          z-index: 2;
        }

        .previewCard img {
          width: 100%;
          height: 100%;
          object-fit: cover;

          transition: transform 1.2s ease;
        }

        .previewCard:hover img {
          transform: scale(1.08);
        }

        .previewOverlay {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;

          padding: 34px;

          background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);

          color: white;

          z-index: 3;
        }

        .previewOverlay h3 {
          font-size: 28px;
          margin-bottom: 10px;
        }

        .previewOverlay p {
          font-size: 14px;
          opacity: 0.8;
        }

        /* CTA */

        .cta {
          position: relative;
          z-index: 2;

          max-width: 1200px;
          margin: 180px auto 0;
        }

        .ctaBox {
          text-align: center;

          padding: 90px 40px;

          border-radius: 40px;

          background: rgba(255, 255, 255, 0.65);

          backdrop-filter: blur(18px);

          border: 1px solid rgba(255, 255, 255, 0.8);

          box-shadow: 0 40px 140px rgba(0, 0, 0, 0.08);
        }

        .ctaBox span {
          font-size: 11px;
          letter-spacing: 0.35em;
          color: rgba(0, 0, 0, 0.45);
        }

        .ctaBox h2 {
          margin-top: 20px;

          font-size: 4rem;
          line-height: 1;

          letter-spacing: -0.06em;

          color: #0a0a0a;
        }

        .ctaBox p {
          margin: 26px auto 0;

          max-width: 760px;

          font-size: 16px;
          line-height: 1.9;

          color: rgba(0, 0, 0, 0.62);
        }

        .ctaBox button {
          margin-top: 36px;

          padding: 18px 34px;

          border-radius: 18px;

          background: #111;
          color: white;

          display: inline-flex;
          align-items: center;
          gap: 14px;

          font-size: 14px;
          font-weight: 600;

          box-shadow: 0 25px 70px rgba(0, 0, 0, 0.18);
        }

        .ctaBox button:hover {
          transform: translateY(-6px);
        }

        /* RESPONSIVE */

        @media (max-width: 1100px) {
          .featurePanel {
            grid-template-columns: 1fr;
          }

          .previewCard {
            height: 500px;
          }
        }

        @media (max-width: 900px) {
          .page {
            padding: 110px 18px;
          }

          .heroGlass {
            padding: 34px;
          }

          .hero h1 {
            font-size: 3.5rem;
          }

          .sectionHeader h2,
          .left h2,
          .ctaBox h2 {
            font-size: 2.6rem;
          }

          .grid {
            grid-template-columns: 1fr;
          }

          .stats {
            grid-template-columns: 1fr;
          }

          .previewCard {
            height: 360px;
          }
        }
      `}</style>
    </section>
  );
}
