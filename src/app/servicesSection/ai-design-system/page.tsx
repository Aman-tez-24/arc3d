"use client";

import { useEffect, useRef } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";
export default function AIDesignSystemPage() {
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

    const nodes = Array.from({ length: 120 }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      size: 1 + Math.random() * 2,
    }));

    const pulses = Array.from({ length: 6 }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: 200 + Math.random() * 300,
    }));

    function draw() {
      ctx.clearRect(0, 0, w, h);

      /* BACKGROUND */
      const gradient = ctx.createLinearGradient(0, 0, w, h);

      gradient.addColorStop(0, "#f8f5ef");
      gradient.addColorStop(0.5, "#f2eee6");
      gradient.addColorStop(1, "#ebe5db");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);

      /* PULSE GLOWS */
      for (const p of pulses) {
        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);

        glow.addColorStop(0, "rgba(0,0,0,0.05)");
        glow.addColorStop(1, "transparent");

        ctx.fillStyle = glow;
        ctx.fillRect(0, 0, w, h);
      }

      /* GRID */
      ctx.strokeStyle = "rgba(0,0,0,0.035)";
      ctx.lineWidth = 1;

      for (let x = 0; x < w; x += 70) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }

      for (let y = 0; y < h; y += 70) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      /* CONNECTIONS */
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;

          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.strokeStyle = `rgba(0,0,0,${0.12 - dist / 1200})`;

            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      /* NODES */
      for (const n of nodes) {
        ctx.beginPath();

        ctx.fillStyle = "rgba(0,0,0,0.8)";
        ctx.arc(n.x, n.y, n.size, 0, Math.PI * 2);
        ctx.fill();

        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      }

      requestAnimationFrame(draw);
    }

    draw();

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
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
          <span className="tag">ARC3D AI CORE</span>

          <h1>
            AI Powered
            <br />
            Architectural Intelligence
          </h1>

          <p>
            A futuristic spatial intelligence engine designed to generate,
            optimize, and evolve architectural systems using neural reasoning,
            environmental analysis, and real-world design logic.
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
              Generate model
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
              Explore Intelligence
            </button>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="stats">
        <div className="stat">
          <h3>98%</h3>
          <p>Layout Optimization Accuracy</p>
        </div>

        <div className="stat">
          <h3>4.2x</h3>
          <p>Faster Spatial Iteration</p>
        </div>

        <div className="stat">
          <h3>Real-Time</h3>
          <p>Generative Design Engine</p>
        </div>
      </div>

      {/* HOW IT THINKS */}
      <div className="section">
        <div className="sectionHeader">
          <span>Neural Workflow</span>

          <h2>How The Intelligence Engine Operates</h2>
        </div>

        <div className="grid">
          <div className="card">
            <div className="number">01</div>

            <h3>Input Understanding</h3>

            <p>
              Reads sketches, prompts, requirements, constraints, and
              environmental data with contextual spatial awareness.
            </p>
          </div>

          <div className="card">
            <div className="number">02</div>

            <h3>Architectural Logic</h3>

            <p>
              Applies structural safety rules, circulation logic, geometry
              systems, and intelligent planning frameworks.
            </p>
          </div>

          <div className="card">
            <div className="number">03</div>

            <h3>Generative Evolution</h3>

            <p>
              Creates multiple optimized layouts and continuously improves them
              through adaptive reasoning.
            </p>
          </div>

          <div className="card">
            <div className="number">04</div>

            <h3>Simulation & Refinement</h3>

            <p>
              Evaluates lighting, energy efficiency, usability, and design flow
              before final generation.
            </p>
          </div>
        </div>
      </div>

      {/* FEATURE SECTION */}
      <div className="features">
        <div className="featureLeft">
          <span>Core Capabilities</span>

          <h2>
            Architectural
            <br />
            Intelligence Layer
          </h2>

          <p>
            Arc3D AI transforms traditional workflows into intelligent design
            ecosystems capable of generating optimized, immersive, and
            construction-ready architectural outputs.
          </p>
        </div>

        <div className="featurePanel">
          <div className="featureItem">
            <span>✔</span>
            Auto spatial optimization
          </div>

          <div className="featureItem">
            <span>✔</span>
            Real-time 3D generation
          </div>

          <div className="featureItem">
            <span>✔</span>
            Structural validation engine
          </div>

          <div className="featureItem">
            <span>✔</span>
            Environmental analysis
          </div>

          <div className="featureItem">
            <span>✔</span>
            Vastu-aware intelligence
          </div>

          <div className="featureItem">
            <span>✔</span>
            Cost-aware planning systems
          </div>
        </div>
      </div>

      {/* OUTPUT */}
      <div className="output">
        <div className="outputHeader">
          <span>Generated Systems</span>

          <h2>AI Generated Deliverables</h2>
        </div>

        <div className="cards">
          <div className="smallCard">
            <div className="line" />
            <h3>Smart Floor Plans</h3>
          </div>

          <div className="smallCard">
            <div className="line" />
            <h3>3D Spatial Environments</h3>
          </div>

          <div className="smallCard">
            <div className="line" />
            <h3>Optimization Reports</h3>
          </div>

          <div className="smallCard">
            <div className="line" />
            <h3>Construction Ready Systems</h3>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta">
        <div className="ctaBox">
          <span>ARC3D NEXT GEN ENGINE</span>

          <h2>Design With Intelligence, Not Assumptions</h2>

          <p>
            Enter the future of architectural generation powered by AI-driven
            spatial reasoning and immersive design systems.
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
            Launch AI Design Engine
          </button>
        </div>
      </div>

      <style jsx>{`
        .page {
          position: relative;
          overflow: hidden;
          min-height: 100vh;
          background: #f5f1e9;
          padding: 140px 28px;
          color: #111;
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
          padding: 90px;
          border-radius: 40px;

          background: rgba(255, 255, 255, 0.42);

          backdrop-filter: blur(24px);

          border: 1px solid rgba(255, 255, 255, 0.6);

          box-shadow:
            0 50px 140px rgba(0, 0, 0, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);

          text-align: center;

          position: relative;
          overflow: hidden;
        }

        .heroGlass::before {
          content: "";

          position: absolute;

          width: 500px;
          height: 500px;

          background: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.6),
            transparent 70%
          );

          top: -200px;
          right: -100px;
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
          margin: 32px auto 0 auto;

          max-width: 820px;

          font-size: 17px;
          line-height: 2;

          color: rgba(0, 0, 0, 0.65);
        }

        .buttons {
          margin-top: 45px;

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
          font-size: 42px;
          font-weight: 800;
          letter-spacing: -0.05em;
        }

        .stat p {
          margin-top: 10px;
          color: rgba(0, 0, 0, 0.6);
          line-height: 1.7;
        }

        /* SECTION */

        .section,
        .features,
        .output,
        .cta {
          position: relative;
          z-index: 2;

          max-width: 1300px;

          margin: 160px auto 0 auto;
        }

        .sectionHeader span,
        .featureLeft span,
        .outputHeader span,
        .ctaBox span {
          font-size: 11px;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: rgba(0, 0, 0, 0.45);
        }

        .sectionHeader h2,
        .featureLeft h2,
        .outputHeader h2,
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

          padding: 42px;

          border-radius: 34px;

          background: rgba(255, 255, 255, 0.62);

          backdrop-filter: blur(20px);

          border: 1px solid rgba(255, 255, 255, 0.6);

          overflow: hidden;

          transition: all 0.45s ease;

          box-shadow: 0 25px 90px rgba(0, 0, 0, 0.05);
        }

        .card::before {
          content: "";

          position: absolute;
          inset: 0;

          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.5),
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
          font-size: 28px;
          line-height: 1.1;
          letter-spacing: -0.04em;
          margin-bottom: 18px;
        }

        .card p {
          font-size: 15px;
          line-height: 1.9;
          color: rgba(0, 0, 0, 0.62);
        }

        /* FEATURES */

        .features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
        }

        .featureLeft p {
          margin-top: 26px;

          max-width: 560px;

          font-size: 16px;
          line-height: 2;

          color: rgba(0, 0, 0, 0.65);
        }

        .featurePanel {
          padding: 50px;

          border-radius: 36px;

          background: rgba(255, 255, 255, 0.58);

          backdrop-filter: blur(20px);

          border: 1px solid rgba(255, 255, 255, 0.6);

          box-shadow: 0 25px 100px rgba(0, 0, 0, 0.06);

          display: grid;
          gap: 18px;
        }

        .featureItem {
          height: 70px;

          border-radius: 18px;

          background: rgba(255, 255, 255, 0.7);

          display: flex;
          align-items: center;
          gap: 14px;

          padding: 0 22px;

          font-size: 14px;
          letter-spacing: 0.03em;

          color: rgba(0, 0, 0, 0.75);
        }

        .featureItem span {
          font-size: 16px;
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

          padding: 40px 30px;

          min-height: 240px;

          border-radius: 30px;

          background: rgba(255, 255, 255, 0.58);

          backdrop-filter: blur(20px);

          border: 1px solid rgba(255, 255, 255, 0.6);

          overflow: hidden;

          transition: all 0.4s ease;
        }

        .smallCard:hover {
          transform: translateY(-10px);
        }

        .line {
          width: 100%;
          height: 1px;

          background: rgba(0, 0, 0, 0.12);

          margin-bottom: 30px;
        }

        .smallCard h3 {
          font-size: 24px;
          line-height: 1.2;
          letter-spacing: -0.04em;
        }

        /* CTA */

        .ctaBox {
          padding: 90px;

          border-radius: 40px;

          background:
            linear-gradient(
              135deg,
              rgba(255, 255, 255, 0.78),
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
          .features,
          .cards {
            grid-template-columns: 1fr;
          }

          .heroGlass,
          .ctaBox {
            padding: 50px 30px;
          }

          .featurePanel {
            padding: 28px;
          }

          .page {
            padding: 120px 18px;
          }

          .hero h1 {
            font-size: 54px;
          }

          .sectionHeader h2,
          .featureLeft h2,
          .outputHeader h2,
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
