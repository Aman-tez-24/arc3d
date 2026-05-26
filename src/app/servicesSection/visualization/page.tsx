"use client";

import { useEffect, useRef } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";
export default function VisualizationPage() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [user, setUser] = useState<any>(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u) => {
      setUser(u);
    });

    return () => unsubscribe();
  }, []);
  const router = useRouter();
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const ctx: CanvasRenderingContext2D = context;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const particles = Array.from({ length: 220 }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      z: Math.random(),
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
    }));

    const rings = Array.from({ length: 6 }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: 250 + Math.random() * 300,
    }));

    let raf: number;

    function draw() {
      ctx.clearRect(0, 0, w, h);

      /* BACKGROUND */
      const bg = ctx.createLinearGradient(0, 0, w, h);

      bg.addColorStop(0, "#faf7f1");
      bg.addColorStop(0.5, "#efe9de");
      bg.addColorStop(1, "#f6f2eb");

      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);

      /* SOFT LIGHT GLOWS */
      for (const r of rings) {
        const glow = ctx.createRadialGradient(r.x, r.y, 0, r.x, r.y, r.r);

        glow.addColorStop(0, "rgba(255,255,255,0.35)");
        glow.addColorStop(1, "transparent");

        ctx.fillStyle = glow;
        ctx.fillRect(0, 0, w, h);
      }

      /* VERTICAL LIGHT BEAMS */
      for (let i = 0; i < 8; i++) {
        const x = (i * w) / 7;

        const beam = ctx.createLinearGradient(x, 0, x + 240, h);

        beam.addColorStop(0, "rgba(255,255,255,0)");
        beam.addColorStop(0.5, "rgba(0,0,0,0.035)");
        beam.addColorStop(1, "rgba(255,255,255,0)");

        ctx.fillStyle = beam;
        ctx.fillRect(x, 0, 220, h);
      }

      /* GRID */
      ctx.strokeStyle = "rgba(0,0,0,0.03)";
      ctx.lineWidth = 1;

      for (let x = 0; x < w; x += 80) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }

      for (let y = 0; y < h; y += 80) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      /* PARTICLES */
      for (const p of particles) {
        const depth = 1 - p.z;

        ctx.fillStyle = `rgba(10,10,15,${0.12 * depth})`;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.2 + depth * 2.2, 0, Math.PI * 2);
        ctx.fill();

        p.x += p.vx * (1 + depth);
        p.y += p.vy * (1 + depth);

        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;
      }

      /* VIGNETTE */
      const vignette = ctx.createRadialGradient(
        w / 2,
        h / 2,
        100,
        w / 2,
        h / 2,
        Math.max(w, h),
      );

      vignette.addColorStop(0, "rgba(0,0,0,0)");
      vignette.addColorStop(1, "rgba(0,0,0,0.08)");

      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, w, h);

      raf = requestAnimationFrame(draw);
    }

    draw();

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="page">
      {/* BACKGROUND */}
      <canvas ref={canvasRef} className="bg" />

      {/* NOISE */}
      <div className="noise" />

      {/* HERO */}
      <div className="hero">
        <div className="heroGlass">
          <span className="tag">ARC3D VISUAL ENGINE</span>

          <h1>
            Cinematic
            <br />
            Architectural Visualization
          </h1>

          <p>
            Ultra-realistic rendering architecture designed to transform spatial
            concepts into emotionally immersive cinematic experiences with
            physically accurate materials, lighting, reflections, and depth.
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
              Launch Render Engine
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
              Explore Gallery
            </button>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="stats">
        <div className="stat">
          <h3>8K</h3>
          <p>Photoreal Rendering Output</p>
        </div>

        <div className="stat">
          <h3>Real-Time</h3>
          <p>Interactive Walkthrough Engine</p>
        </div>

        <div className="stat">
          <h3>Physically Accurate</h3>
          <p>Lighting & Material Simulation</p>
        </div>
      </div>

      {/* PIPELINE */}
      <div className="section">
        <div className="sectionHeader">
          <span>Rendering Workflow</span>

          <h2>Visualization Pipeline</h2>
        </div>

        <div className="grid">
          <div className="card">
            <div className="number">01</div>

            <h3>Geometry Processing</h3>

            <p>
              Optimizes high-detail architectural structures for smooth,
              cinematic rendering performance.
            </p>
          </div>

          <div className="card">
            <div className="number">02</div>

            <h3>Material Simulation</h3>

            <p>
              Applies physically accurate textures, reflections, roughness, and
              real-world surface behavior.
            </p>
          </div>

          <div className="card">
            <div className="number">03</div>

            <h3>Lighting Intelligence</h3>

            <p>
              Simulates natural sunlight, interior ambience, shadows, and
              cinematic environmental lighting.
            </p>
          </div>

          <div className="card">
            <div className="number">04</div>

            <h3>Cinematic Rendering</h3>

            <p>
              Produces immersive walkthroughs, animations, and luxury-grade
              visual presentation systems.
            </p>
          </div>
        </div>
      </div>

      {/* TRANSFORMATION */}
      <div className="compare">
        <div className="compareBox">
          <div className="compareHeader">
            <span>Transformation Layer</span>

            <h2>From Technical Drawings To Cinematic Reality</h2>
          </div>

          <div className="row">
            <div className="compareCard">
              <div className="line" />

              <span>INPUT</span>

              <h3>Blueprint & CAD Geometry</h3>

              <p>
                Raw technical architectural data, structural plans, and spatial
                layouts.
              </p>
            </div>

            <div className="arrow">→</div>

            <div className="compareCard">
              <div className="line" />

              <span>OUTPUT</span>

              <h3>Immersive Spatial Visualization</h3>

              <p>
                Fully cinematic 3D environments with realistic lighting,
                materials, atmosphere, and emotion.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* OUTPUTS */}
      <div className="output">
        <div className="sectionHeader">
          <span>Deliverables</span>

          <h2>Premium Visual Outputs</h2>
        </div>

        <div className="cards">
          <div className="smallCard">
            <div className="topLine" />
            <h3>Photoreal 3D Renders</h3>
          </div>

          <div className="smallCard">
            <div className="topLine" />
            <h3>Lighting Simulations</h3>
          </div>

          <div className="smallCard">
            <div className="topLine" />
            <h3>Walkthrough Films</h3>
          </div>

          <div className="smallCard">
            <div className="topLine" />
            <h3>Luxury Client Presentations</h3>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta">
        <div className="ctaBox">
          <span>ARC3D VISUAL EXPERIENCE</span>

          <h2>See Architecture Before It Exists</h2>

          <p>
            Transform concepts into emotionally immersive visual experiences
            with cinematic realism and spatial precision.
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
            Start Visualization
          </button>
        </div>
      </div>

      <style jsx>{`
        .page {
          position: relative;
          overflow: hidden;
          min-height: 100vh;
          color: #111;
          padding: 140px 28px;
        }

        .bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        .noise {
          position: absolute;
          inset: 0;
          opacity: 0.05;
          z-index: 1;
          background-image: radial-gradient(#000 0.6px, transparent 0.6px);
          background-size: 8px 8px;
          pointer-events: none;
        }

        /* HERO */

        .hero {
          position: relative;
          z-index: 2;

          max-width: 1350px;
          margin: auto;
        }

        .heroGlass {
          position: relative;

          overflow: hidden;

          padding: 90px;

          border-radius: 42px;

          background: rgba(255, 255, 255, 0.42);

          backdrop-filter: blur(24px);

          border: 1px solid rgba(255, 255, 255, 0.6);

          text-align: center;

          box-shadow:
            0 50px 140px rgba(0, 0, 0, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);
        }

        .heroGlass::before {
          content: "";

          position: absolute;

          width: 520px;
          height: 520px;

          border-radius: 50%;

          background: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.7),
            transparent 70%
          );

          top: -240px;
          right: -140px;
        }

        .tag {
          font-size: 11px;
          letter-spacing: 0.45em;
          text-transform: uppercase;

          color: rgba(0, 0, 0, 0.45);
        }

        .hero h1 {
          margin-top: 28px;

          font-size: clamp(58px, 8vw, 108px);

          line-height: 0.92;
          letter-spacing: -0.08em;

          font-weight: 800;

          color: #0a0a0a;
        }

        .hero p {
          margin: 34px auto 0 auto;

          max-width: 820px;

          font-size: 17px;
          line-height: 2;

          color: rgba(0, 0, 0, 0.65);
        }

        .buttons {
          margin-top: 44px;

          display: flex;
          justify-content: center;
          gap: 18px;
          flex-wrap: wrap;
        }

        button {
          height: 58px;
          padding: 0 28px;

          border-radius: 999px;

          border: none;

          background: #0a0a0a;

          color: white;

          font-size: 13px;
          letter-spacing: 0.12em;
          text-transform: uppercase;

          cursor: pointer;

          transition: all 0.4s ease;
        }

        button:hover {
          transform: translateY(-4px);

          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
        }

        .ghost {
          background: rgba(255, 255, 255, 0.5);

          color: #111;

          border: 1px solid rgba(0, 0, 0, 0.08);
        }

        /* STATS */

        .stats {
          position: relative;
          z-index: 2;

          max-width: 1200px;

          margin: 70px auto 0 auto;

          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .stat {
          padding: 36px;

          border-radius: 30px;

          background: rgba(255, 255, 255, 0.58);

          backdrop-filter: blur(20px);

          border: 1px solid rgba(255, 255, 255, 0.6);

          box-shadow: 0 20px 80px rgba(0, 0, 0, 0.06);
        }

        .stat h3 {
          font-size: 40px;
          line-height: 1;
          letter-spacing: -0.05em;
          font-weight: 800;
        }

        .stat p {
          margin-top: 12px;

          color: rgba(0, 0, 0, 0.6);

          line-height: 1.7;
        }

        /* SECTION */

        .section,
        .compare,
        .output,
        .cta {
          position: relative;
          z-index: 2;

          max-width: 1300px;

          margin: 160px auto 0 auto;
        }

        .sectionHeader span,
        .compareHeader span,
        .ctaBox span {
          font-size: 11px;
          letter-spacing: 0.35em;
          text-transform: uppercase;

          color: rgba(0, 0, 0, 0.45);
        }

        .sectionHeader h2,
        .compareHeader h2,
        .ctaBox h2 {
          margin-top: 18px;

          font-size: clamp(38px, 5vw, 70px);

          line-height: 0.95;
          letter-spacing: -0.06em;

          font-weight: 800;
        }

        /* GRID */

        .grid {
          margin-top: 70px;

          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .card {
          position: relative;

          overflow: hidden;

          padding: 42px;

          border-radius: 34px;

          background: rgba(255, 255, 255, 0.62);

          backdrop-filter: blur(20px);

          border: 1px solid rgba(255, 255, 255, 0.6);

          transition: all 0.45s ease;

          box-shadow: 0 25px 90px rgba(0, 0, 0, 0.05);
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

          opacity: 0;

          transition: 0.5s ease;
        }

        .card:hover {
          transform: translateY(-10px);

          box-shadow: 0 45px 120px rgba(0, 0, 0, 0.1);
        }

        .card:hover::before {
          opacity: 1;
        }

        .number {
          font-size: 13px;
          letter-spacing: 0.3em;

          color: rgba(0, 0, 0, 0.35);

          margin-bottom: 30px;
        }

        .card h3 {
          font-size: 30px;

          line-height: 1.08;
          letter-spacing: -0.04em;

          margin-bottom: 18px;
        }

        .card p {
          font-size: 15px;
          line-height: 1.9;

          color: rgba(0, 0, 0, 0.62);
        }

        /* COMPARE */

        .compareBox {
          padding: 70px;

          border-radius: 40px;

          background:
            linear-gradient(
              135deg,
              rgba(255, 255, 255, 0.78),
              rgba(255, 255, 255, 0.45)
            ),
            #fff;

          backdrop-filter: blur(20px);

          border: 1px solid rgba(255, 255, 255, 0.7);

          box-shadow: 0 40px 140px rgba(0, 0, 0, 0.08);
        }

        .row {
          margin-top: 60px;

          display: flex;
          align-items: center;
          justify-content: center;
          gap: 30px;
        }

        .compareCard {
          flex: 1;

          padding: 40px;

          min-height: 280px;

          border-radius: 30px;

          background: rgba(255, 255, 255, 0.7);

          border: 1px solid rgba(255, 255, 255, 0.7);
        }

        .line {
          width: 100%;
          height: 1px;

          background: rgba(0, 0, 0, 0.12);

          margin-bottom: 30px;
        }

        .compareCard span {
          font-size: 11px;
          letter-spacing: 0.3em;
          color: rgba(0, 0, 0, 0.4);
        }

        .compareCard h3 {
          margin-top: 18px;

          font-size: 32px;

          line-height: 1.05;
          letter-spacing: -0.04em;
        }

        .compareCard p {
          margin-top: 20px;

          line-height: 1.9;

          color: rgba(0, 0, 0, 0.6);
        }

        .arrow {
          font-size: 44px;
          font-weight: 300;
          color: rgba(0, 0, 0, 0.35);
        }

        /* OUTPUT */

        .cards {
          margin-top: 70px;

          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .smallCard {
          position: relative;

          padding: 40px 28px;

          min-height: 240px;

          border-radius: 30px;

          background: rgba(255, 255, 255, 0.58);

          backdrop-filter: blur(20px);

          border: 1px solid rgba(255, 255, 255, 0.6);

          transition: all 0.4s ease;
        }

        .smallCard:hover {
          transform: translateY(-10px);
        }

        .topLine {
          width: 100%;
          height: 1px;

          background: rgba(0, 0, 0, 0.12);

          margin-bottom: 30px;
        }

        .smallCard h3 {
          font-size: 24px;

          line-height: 1.15;
          letter-spacing: -0.04em;
        }

        /* CTA */

        .ctaBox {
          padding: 90px;

          border-radius: 40px;

          background:
            linear-gradient(
              135deg,
              rgba(255, 255, 255, 0.8),
              rgba(255, 255, 255, 0.45)
            ),
            #fff;

          backdrop-filter: blur(20px);

          border: 1px solid rgba(255, 255, 255, 0.8);

          text-align: center;

          box-shadow: 0 40px 140px rgba(0, 0, 0, 0.08);
        }

        .ctaBox p {
          margin: 24px auto 0 auto;

          max-width: 720px;

          font-size: 16px;
          line-height: 2;

          color: rgba(0, 0, 0, 0.65);
        }

        .ctaBox button {
          margin-top: 40px;
        }

        /* RESPONSIVE */

        @media (max-width: 1000px) {
          .grid,
          .stats,
          .cards {
            grid-template-columns: 1fr;
          }

          .row {
            flex-direction: column;
          }

          .arrow {
            transform: rotate(90deg);
          }

          .heroGlass,
          .compareBox,
          .ctaBox {
            padding: 50px 30px;
          }

          .page {
            padding: 120px 18px;
          }

          .hero h1 {
            font-size: 54px;
          }

          .sectionHeader h2,
          .compareHeader h2,
          .ctaBox h2 {
            font-size: 42px;
          }
        }

        @media (max-width: 640px) {
          .hero h1 {
            font-size: 42px;
          }

          .hero p {
            font-size: 15px;
          }

          .card,
          .smallCard,
          .compareCard,
          .stat {
            padding: 28px;
          }

          .buttons {
            flex-direction: column;
          }

          button {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
