"use client";

import { useEffect, useRef } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";
export default function FloorPlanningPage() {
  const [user, setUser] = useState<any>(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u) => {
      setUser(u);
    });

    return () => unsubscribe();
  }, []);
  const router = useRouter();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const ctx = context;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const gridSize = 42;

    const blocks = Array.from({ length: 35 }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      w: 60 + Math.random() * 180,
      h: 60 + Math.random() * 180,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
    }));

    function drawGrid() {
      ctx.strokeStyle = "rgba(0,0,0,0.045)";
      ctx.lineWidth = 1;

      for (let x = 0; x < w; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }

      for (let y = 0; y < h; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);

      const gradient = ctx.createLinearGradient(0, 0, w, h);
      gradient.addColorStop(0, "#f7f4ee");
      gradient.addColorStop(1, "#ebe7df");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);

      drawGrid();

      for (const b of blocks) {
        ctx.fillStyle = "rgba(0,0,0,0.025)";
        ctx.fillRect(b.x, b.y, b.w, b.h);

        ctx.strokeStyle = "rgba(0,0,0,0.12)";
        ctx.lineWidth = 1;
        ctx.strokeRect(b.x, b.y, b.w, b.h);

        ctx.beginPath();
        ctx.moveTo(b.x, b.y);
        ctx.lineTo(b.x + b.w, b.y + b.h);
        ctx.stroke();

        b.x += b.vx;
        b.y += b.vy;

        if (b.x < -300) b.x = w + 300;
        if (b.x > w + 300) b.x = -300;
        if (b.y < -300) b.y = h + 300;
        if (b.y > h + 300) b.y = -300;
      }

      requestAnimationFrame(draw);
    }

    draw();

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="page">
      {/* BACKGROUND */}
      <canvas ref={canvasRef} className="bg" />

      {/* GLOW */}
      <div className="glow glow1" />
      <div className="glow glow2" />

      {/* HERO */}
      <div className="hero">
        <span className="tag">ARC3D SPATIAL ENGINE</span>

        <h1>
          Intelligent
          <br />
          Floor Planning
        </h1>

        <p>
          A next-generation architectural planning system designed to generate
          luxurious, efficient, and structurally optimized floor layouts with
          AI-assisted spatial intelligence.
        </p>

        <div className="buttons">
          <button
            onClick={() => {
              if (user) {
                router.push("/projects"); // dashboard
              } else {
                router.push("/signin");
              }
            }}
          >
            Generate Plan
          </button>
          <button
            className="ghost"
            onClick={() => {
              if (user) {
                router.push("/projects"); // dashboard
              } else {
                router.push("/signin");
              }
            }}
          >
            Upload Blueprint
          </button>
        </div>

        {/* STATS */}
        <div className="stats">
          <div className="stat">
            <h3>98%</h3>
            <span>Space Efficiency</span>
          </div>

          <div className="stat">
            <h3>AI</h3>
            <span>Layout Optimization</span>
          </div>

          <div className="stat">
            <h3>3D</h3>
            <span>Conversion Ready</span>
          </div>
        </div>
      </div>

      {/* WORKFLOW */}
      <div className="section">
        <div className="sectionHead">
          <span>WORKFLOW</span>
          <h2>Spatial Intelligence Pipeline</h2>
        </div>

        <div className="grid">
          <div className="card">
            <div className="number">01</div>

            <h3>Requirement Analysis</h3>

            <p>
              Understand dimensions, lifestyle requirements, circulation, and
              zoning preferences before planning begins.
            </p>
          </div>

          <div className="card">
            <div className="number">02</div>

            <h3>AI Layout Generation</h3>

            <p>
              Multiple intelligent layout configurations are generated based on
              optimization logic and real-world architectural principles.
            </p>
          </div>

          <div className="card">
            <div className="number">03</div>

            <h3>Structural Optimization</h3>

            <p>
              Plans are refined for movement flow, ventilation, lighting, and
              structural feasibility.
            </p>
          </div>

          <div className="card">
            <div className="number">04</div>

            <h3>3D Ready Export</h3>

            <p>
              Final layouts integrate directly into immersive 3D visualization
              and rendering pipelines.
            </p>
          </div>
        </div>
      </div>

      {/* FEATURES */}
      <div className="features">
        <div className="featureBox">
          <div className="left">
            <span>CAPABILITIES</span>

            <h2>Designed For Precision & Luxury Living</h2>

            <p>
              Arc3D combines intelligent automation with architectural logic to
              create highly optimized and visually balanced floor planning
              systems.
            </p>
          </div>

          <div className="right">
            <div className="feature">✔ Smart Room Allocation</div>
            <div className="feature">✔ Vastu Optimization</div>
            <div className="feature">✔ Real-Time Editing</div>
            <div className="feature">✔ AI Space Balancing</div>
            <div className="feature">✔ 2D + 3D Workflow</div>
            <div className="feature">✔ Construction Ready Output</div>
          </div>
        </div>
      </div>

      {/* OUTPUT */}
      <div className="output">
        <div className="sectionHead">
          <span>OUTPUT SYSTEMS</span>
          <h2>Architectural Deliverables</h2>
        </div>

        <div className="cards">
          <div className="smallCard">
            <div className="line" />
            <h3>Residential Layouts</h3>
            <p>Luxury home planning with optimized circulation.</p>
          </div>

          <div className="smallCard">
            <div className="line" />
            <h3>Commercial Systems</h3>
            <p>Functional and scalable workspace structures.</p>
          </div>

          <div className="smallCard">
            <div className="line" />
            <h3>AI Optimized Maps</h3>
            <p>Machine-assisted architectural balancing systems.</p>
          </div>

          <div className="smallCard">
            <div className="line" />
            <h3>3D Conversion Pipeline</h3>
            <p>Instant transition into immersive visualization.</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta">
        <div className="ctaBox">
          <span>START BUILDING</span>

          <h2>Design Smarter Architectural Spaces</h2>

          <p>
            Generate highly optimized floor plans powered by intelligent spatial
            systems and architectural precision.
          </p>

          <button
            onClick={() => {
              if (user) {
                router.push("/projects"); // dashboard
              } else {
                router.push("/signin");
              }
            }}
          >
            Start Planning
          </button>
        </div>
      </div>

      <style jsx>{`
        .page {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          background: #f3f1eb;
          padding: 140px 20px;
          color: #111;
        }

        .bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        .glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.35;
          z-index: 1;
        }

        .glow1 {
          width: 500px;
          height: 500px;
          background: rgba(0, 0, 0, 0.06);
          top: -120px;
          left: -120px;
        }

        .glow2 {
          width: 400px;
          height: 400px;
          background: rgba(0, 0, 0, 0.05);
          right: -100px;
          bottom: 0;
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
          font-size: 11px;
          letter-spacing: 0.45em;
          color: rgba(0, 0, 0, 0.5);
        }

        .hero h1 {
          margin-top: 26px;
          font-size: clamp(4rem, 9vw, 7rem);
          line-height: 0.9;
          letter-spacing: -0.08em;
          font-weight: 900;
          text-transform: uppercase;
        }

        .hero p {
          margin: 30px auto 0;
          max-width: 760px;
          font-size: 16px;
          line-height: 2;
          color: rgba(0, 0, 0, 0.65);
        }

        .buttons {
          margin-top: 40px;
          display: flex;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        button {
          height: 58px;
          padding: 0 28px;
          border-radius: 999px;
          border: none;
          cursor: pointer;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          transition: all 0.4s ease;
        }

        button:hover {
          transform: translateY(-4px);
        }

        button:not(.ghost) {
          background: #111;
          color: white;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.18);
        }

        .ghost {
          background: rgba(255, 255, 255, 0.5);
          border: 1px solid rgba(0, 0, 0, 0.08);
          backdrop-filter: blur(10px);
        }

        /* STATS */
        .stats {
          margin-top: 70px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .stat {
          padding: 34px;
          border-radius: 28px;
          background: rgba(255, 255, 255, 0.55);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.6);

          box-shadow:
            0 30px 80px rgba(0, 0, 0, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.7);
        }

        .stat h3 {
          font-size: 42px;
          font-weight: 900;
          margin-bottom: 10px;
        }

        .stat span {
          color: rgba(0, 0, 0, 0.6);
          font-size: 13px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        /* SECTIONS */
        .section,
        .features,
        .output,
        .cta {
          position: relative;
          z-index: 2;
          max-width: 1250px;
          margin: 160px auto 0;
        }

        .sectionHead {
          text-align: center;
          margin-bottom: 60px;
        }

        .sectionHead span {
          font-size: 11px;
          letter-spacing: 0.4em;
          color: rgba(0, 0, 0, 0.45);
        }

        .sectionHead h2 {
          margin-top: 18px;
          font-size: 56px;
          line-height: 1;
          letter-spacing: -0.06em;
          font-weight: 850;
        }

        /* GRID */
        .grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .card {
          position: relative;
          padding: 42px;
          border-radius: 34px;

          background: rgba(255, 255, 255, 0.58);
          backdrop-filter: blur(12px);

          border: 1px solid rgba(255, 255, 255, 0.7);

          box-shadow:
            0 35px 100px rgba(0, 0, 0, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.7);

          overflow: hidden;

          transition:
            transform 0.5s ease,
            box-shadow 0.5s ease;
        }

        .card:hover {
          transform: translateY(-10px);
          box-shadow: 0 60px 140px rgba(0, 0, 0, 0.12);
        }

        .number {
          font-size: 12px;
          letter-spacing: 0.35em;
          color: rgba(0, 0, 0, 0.35);
          margin-bottom: 22px;
        }

        .card h3 {
          font-size: 30px;
          line-height: 1.1;
          margin-bottom: 18px;
          font-weight: 800;
          letter-spacing: -0.04em;
        }

        .card p {
          font-size: 15px;
          line-height: 1.9;
          color: rgba(0, 0, 0, 0.65);
        }

        /* FEATURE BOX */
        .featureBox {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 40px;

          padding: 60px;

          border-radius: 40px;

          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.7),
            rgba(255, 255, 255, 0.4)
          );

          backdrop-filter: blur(12px);

          border: 1px solid rgba(255, 255, 255, 0.7);

          box-shadow: 0 50px 140px rgba(0, 0, 0, 0.08);
        }

        .left span {
          font-size: 11px;
          letter-spacing: 0.35em;
          color: rgba(0, 0, 0, 0.45);
        }

        .left h2 {
          margin-top: 18px;
          font-size: 52px;
          line-height: 1;
          font-weight: 850;
          letter-spacing: -0.06em;
        }

        .left p {
          margin-top: 26px;
          font-size: 15px;
          line-height: 2;
          color: rgba(0, 0, 0, 0.65);
          max-width: 520px;
        }

        .right {
          display: grid;
          gap: 18px;
          align-content: center;
        }

        .feature {
          padding: 22px 24px;
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.75);
          border: 1px solid rgba(255, 255, 255, 0.7);
          font-size: 14px;
          font-weight: 600;

          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.05);
        }

        /* OUTPUT */
        .cards {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .smallCard {
          padding: 34px;
          border-radius: 28px;

          background: rgba(255, 255, 255, 0.55);
          backdrop-filter: blur(12px);

          border: 1px solid rgba(255, 255, 255, 0.7);

          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.07);

          transition: transform 0.4s ease;
        }

        .smallCard:hover {
          transform: translateY(-8px);
        }

        .line {
          width: 60px;
          height: 2px;
          background: #111;
          margin-bottom: 24px;
        }

        .smallCard h3 {
          font-size: 24px;
          line-height: 1.1;
          margin-bottom: 16px;
          font-weight: 750;
        }

        .smallCard p {
          font-size: 14px;
          line-height: 1.8;
          color: rgba(0, 0, 0, 0.65);
        }

        /* CTA */
        .ctaBox {
          padding: 90px 40px;
          border-radius: 42px;
          text-align: center;

          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.8),
            rgba(255, 255, 255, 0.45)
          );

          backdrop-filter: blur(14px);

          border: 1px solid rgba(255, 255, 255, 0.7);

          box-shadow:
            0 60px 160px rgba(0, 0, 0, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);
        }

        .ctaBox span {
          font-size: 11px;
          letter-spacing: 0.4em;
          color: rgba(0, 0, 0, 0.45);
        }

        .ctaBox h2 {
          margin-top: 18px;
          font-size: 62px;
          line-height: 0.95;
          font-weight: 900;
          letter-spacing: -0.08em;
        }

        .ctaBox p {
          max-width: 720px;
          margin: 28px auto 0;
          font-size: 15px;
          line-height: 2;
          color: rgba(0, 0, 0, 0.65);
        }

        .ctaBox button {
          margin-top: 36px;
        }

        /* RESPONSIVE */
        @media (max-width: 1000px) {
          .stats,
          .grid,
          .cards,
          .featureBox {
            grid-template-columns: 1fr;
          }

          .featureBox {
            padding: 40px 28px;
          }

          .sectionHead h2,
          .left h2,
          .ctaBox h2 {
            font-size: 38px;
          }
        }

        @media (max-width: 700px) {
          .page {
            padding: 120px 16px;
          }

          .hero h1 {
            font-size: 3.2rem;
          }

          .card,
          .smallCard,
          .stat {
            padding: 26px;
          }

          .ctaBox {
            padding: 70px 24px;
          }
        }
      `}</style>
    </section>
  );
}
