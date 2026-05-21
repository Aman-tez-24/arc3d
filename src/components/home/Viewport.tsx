"use client";

import { useEffect, useRef } from "react";

export default function Viewport() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const context = canvas.getContext("2d");

    if (!context) return;

    const ctx: CanvasRenderingContext2D = context;

    let w = (canvas.width = canvas.offsetWidth);
    let h = (canvas.height = canvas.offsetHeight);

    let time = 0;

    const resize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", resize);

    const nodes = Array.from({ length: 70 }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      z: Math.random() * 2,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
    }));

    function render() {
      time += 0.01;

      ctx.clearRect(0, 0, w, h);

      /* PREMIUM BACKGROUND */
      const bg = ctx.createLinearGradient(0, 0, w, h);

      bg.addColorStop(0, "#f8f6f2");
      bg.addColorStop(0.5, "#ffffff");
      bg.addColorStop(1, "#f1eee8");

      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);

      /* SOFT GRID */
      ctx.strokeStyle = "rgba(0,0,0,0.035)";
      ctx.lineWidth = 1;

      const grid = 60;

      for (let x = 0; x < w; x += grid) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }

      for (let y = 0; y < h; y += grid) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      /* CONNECTION LINES */
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];

        a.x += a.vx;
        a.y += a.vy;

        if (a.x < 0 || a.x > w) a.vx *= -1;
        if (a.y < 0 || a.y > h) a.vy *= -1;

        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];

          const dx = a.x - b.x;
          const dy = a.y - b.y;

          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 170) {
            const opacity = 1 - dist / 170;

            ctx.beginPath();

            ctx.strokeStyle = `rgba(0,0,0,${opacity * 0.08})`;

            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);

            ctx.stroke();
          }
        }
      }

      /* NODES */
      for (const p of nodes) {
        const pulse = Math.sin(time * 2 + p.x * 0.01 + p.y * 0.01) * 0.5 + 1;

        /* OUTER GLOW */
        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 18);

        glow.addColorStop(0, "rgba(0,0,0,0.08)");
        glow.addColorStop(1, "transparent");

        ctx.fillStyle = glow;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 18, 0, Math.PI * 2);
        ctx.fill();

        /* MAIN DOT */
        ctx.beginPath();

        ctx.fillStyle = "#111";

        ctx.arc(p.x, p.y, 2.2 * pulse, 0, Math.PI * 2);

        ctx.fill();
      }

      /* FLOATING SCAN LINE */
      const scanX = ((Math.sin(time * 0.5) + 1) / 2) * w;

      const scan = ctx.createLinearGradient(scanX - 120, 0, scanX + 120, 0);

      scan.addColorStop(0, "transparent");
      scan.addColorStop(0.5, "rgba(0,0,0,0.03)");
      scan.addColorStop(1, "transparent");

      ctx.fillStyle = scan;
      ctx.fillRect(scanX - 120, 0, 240, h);

      requestAnimationFrame(render);
    }

    render();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="viewport">
      <div className="header">
        <h2>Interactive 3D Viewport</h2>

        <p>
          Explore architectural systems with cinematic spatial rendering,
          intelligent graph structures, and real-time depth simulation.
        </p>
      </div>

      <div className="frame">
        <canvas ref={canvasRef} className="graphCanvas" />

        <div className="overlayContent">
          <h3>Spatial Visualization Engine</h3>
          <p>Real-time architectural graph simulation</p>
        </div>

        <div className="controlsHint">
          <span>Rotate</span>
          <span>Inspect</span>
          <span>Spatial Depth</span>
        </div>
      </div>

      <style jsx>{`
        .viewport {
          padding: 140px 20px;
          background: #fff;
        }

        .header {
          max-width: 900px;
          margin: auto;
          text-align: center;
          margin-bottom: 70px;
        }

        .header h2 {
          font-size: 58px;
          font-weight: 900;
          letter-spacing: -0.06em;
          color: #0a0a0a;
        }

        .header p {
          margin-top: 24px;
          color: rgba(0, 0, 0, 0.65);
          line-height: 1.8;
        }

        .frame {
          position: relative;

          max-width: 1300px;
          height: 720px;

          margin: auto;

          overflow: hidden;

          border-radius: 34px;

          background: white;

          box-shadow:
            0 100px 240px rgba(0, 0, 0, 0.12),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);
        }

        .graphCanvas {
          width: 100%;
          height: 100%;
          display: block;
        }

        .overlayContent {
          position: absolute;

          left: 50px;
          bottom: 50px;

          padding: 26px;

          border-radius: 24px;

          background: rgba(255, 255, 255, 0.6);

          backdrop-filter: blur(14px);

          box-shadow: 0 30px 100px rgba(0, 0, 0, 0.08);
        }

        .overlayContent h3 {
          font-size: 28px;
          color: #0a0a0a;
        }

        .overlayContent p {
          margin-top: 10px;
          color: rgba(0, 0, 0, 0.6);
        }

        .controlsHint {
          position: absolute;

          top: 30px;
          right: 30px;

          display: flex;
          gap: 12px;
        }

        .controlsHint span {
          padding: 10px 16px;

          border-radius: 999px;

          background: rgba(255, 255, 255, 0.7);

          backdrop-filter: blur(10px);

          font-size: 12px;
          letter-spacing: 0.08em;

          color: rgba(0, 0, 0, 0.65);
        }

        @media (max-width: 900px) {
          .frame {
            height: 500px;
          }

          .header h2 {
            font-size: 38px;
          }

          .overlayContent {
            left: 20px;
            right: 20px;
            bottom: 20px;
          }
        }
      `}</style>
    </section>
  );
}
