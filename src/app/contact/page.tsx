"use client";

import { useEffect, useRef } from "react";

export default function ContactSectionPage() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const ctx = context;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const particles = Array.from({ length: 90 }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      size: Math.random() * 2 + 1,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
    }));

    const render = () => {
      ctx.clearRect(0, 0, w, h);

      const gradient = ctx.createLinearGradient(0, 0, w, h);
      gradient.addColorStop(0, "#f4f1ea");
      gradient.addColorStop(1, "#ebe6dc");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);

      for (const p of particles) {
        ctx.beginPath();
        ctx.fillStyle = "rgba(0,0,0,0.08)";
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }

      requestAnimationFrame(render);
    };

    render();

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
    <section className="contactPage">
      {/* BG */}
      <canvas ref={canvasRef} className="bgCanvas" />

      {/* HERO */}
      <div className="hero">
        <span className="miniTag">ARC3D CONTACT SYSTEM</span>

        <h1>
          Let’s Build
          <br />
          Future Spaces Together
        </h1>

        <p>
          Connect with Arc3D for immersive architecture, cinematic
          visualization, AI-driven planning, and premium digital spatial
          experiences.
        </p>
      </div>

      {/* MAIN */}
      <div className="contactGrid">
        {/* LEFT */}
        <div className="infoPanel">
          <div className="glassCard">
            <span className="smallTag">HEADQUARTERS</span>

            <h2>Arc3D Studio</h2>

            <p>
              Spatial intelligence and immersive architecture visualization
              company focused on future-ready digital experiences.
            </p>

            <div className="infoBlock">
              <h3>Location</h3>
              <p>Visakhapatnam, Andhra Pradesh, India</p>
            </div>

            <div className="infoBlock">
              <h3>Email</h3>
              <p>contact@arc3d.in</p>
            </div>

            <div className="infoBlock">
              <h3>Phone</h3>
              <p>+91 98765 43210</p>
            </div>

            <div className="socials">
              <a href="#">IG</a>
              <a href="#">X</a>
              <a href="#">YT</a>
              <a href="#">IN</a>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="formPanel">
          <div className="formCard">
            <span className="smallTag">SEND MESSAGE</span>

            <h2>Start Your Project</h2>

            <div className="inputGroup">
              <label>Full Name</label>
              <input type="text" placeholder="Enter your name" />
            </div>

            <div className="inputGroup">
              <label>Email Address</label>
              <input type="email" placeholder="Enter your email" />
            </div>

            <div className="inputGroup">
              <label>Project Type</label>

              <select>
                <option>2D → 3D Conversion</option>
                <option>Floor Planning</option>
                <option>AI Design System</option>
                <option>Visualization</option>
              </select>
            </div>

            <div className="inputGroup">
              <label>Project Details</label>

              <textarea placeholder="Tell us about your project..." />
            </div>

            <button className="submitBtn">Send Request</button>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta">
        <h2>Architecture Should Be Experienced.</h2>

        <p>
          Arc3D transforms concepts into immersive digital environments with
          cinematic precision and AI-powered workflows.
        </p>

        <button>Explore Arc3D</button>
      </div>

      <style jsx>{`
        .contactPage {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          background: #f3f1eb;
          padding: 140px 50px 100px;
          color: #111;
        }

        .bgCanvas {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .hero {
          position: relative;
          z-index: 2;
          max-width: 900px;
          margin: auto;
          text-align: center;
        }

        .miniTag {
          font-size: 11px;
          letter-spacing: 0.35em;
          color: rgba(0, 0, 0, 0.45);
        }

        .hero h1 {
          margin-top: 24px;
          font-size: 76px;
          line-height: 0.95;
          font-weight: 700;
        }

        .hero p {
          margin: 28px auto 0;
          max-width: 700px;
          line-height: 1.9;
          color: rgba(0, 0, 0, 0.65);
          font-size: 16px;
        }

        .contactGrid {
          position: relative;
          z-index: 2;

          margin-top: 100px;

          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 40px;

          max-width: 1400px;
          margin-inline: auto;
        }

        .glassCard,
        .formCard {
          padding: 40px;
          border-radius: 32px;

          background: rgba(255, 255, 255, 0.72);

          backdrop-filter: blur(20px);

          border: 1px solid rgba(0, 0, 0, 0.06);

          box-shadow:
            0 20px 60px rgba(0, 0, 0, 0.06),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);
        }

        .smallTag {
          font-size: 11px;
          letter-spacing: 0.25em;
          color: rgba(0, 0, 0, 0.45);
        }

        .glassCard h2,
        .formCard h2 {
          margin-top: 16px;
          font-size: 42px;
        }

        .glassCard p {
          margin-top: 18px;
          line-height: 1.8;
          color: rgba(0, 0, 0, 0.65);
        }

        .infoBlock {
          margin-top: 28px;
        }

        .infoBlock h3 {
          font-size: 13px;
          letter-spacing: 0.12em;
          margin-bottom: 8px;
          color: rgba(0, 0, 0, 0.45);
        }

        .socials {
          display: flex;
          gap: 14px;
          margin-top: 36px;
        }

        .socials a {
          width: 48px;
          height: 48px;
          border-radius: 50%;

          background: #111;
          color: white;

          display: flex;
          align-items: center;
          justify-content: center;

          text-decoration: none;
          font-size: 13px;
          font-weight: 700;

          transition: 0.3s ease;
        }

        .socials a:hover {
          transform: translateY(-5px);
        }

        .inputGroup {
          margin-top: 24px;
        }

        .inputGroup label {
          display: block;
          margin-bottom: 10px;

          font-size: 13px;
          font-weight: 500;

          color: rgba(0, 0, 0, 0.65);
        }

        .inputGroup input,
        .inputGroup select,
        .inputGroup textarea {
          width: 100%;

          border-radius: 18px;
          border: 1px solid rgba(0, 0, 0, 0.08);

          background: rgba(255, 255, 255, 0.85);

          padding: 18px 20px;

          font-size: 15px;
          color: #111;

          outline: none;
          transition: 0.3s ease;
        }

        .inputGroup textarea {
          min-height: 160px;
          resize: none;
        }

        .inputGroup input:focus,
        .inputGroup select:focus,
        .inputGroup textarea:focus {
          border-color: rgba(0, 0, 0, 0.25);
          box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.04);
        }

        .submitBtn {
          margin-top: 30px;

          width: 100%;
          height: 60px;

          border: none;
          border-radius: 18px;

          background: #111;
          color: white;

          font-size: 15px;
          font-weight: 600;

          transition: 0.3s ease;
        }

        .submitBtn:hover {
          transform: translateY(-4px);
        }

        .cta {
          position: relative;
          z-index: 2;

          margin-top: 140px;
          text-align: center;
        }

        .cta h2 {
          font-size: 56px;
          line-height: 1;
        }

        .cta p {
          max-width: 700px;
          margin: 24px auto 0;

          line-height: 1.9;
          color: rgba(0, 0, 0, 0.65);
        }

        .cta button {
          margin-top: 32px;

          padding: 16px 28px;

          border: none;
          border-radius: 18px;

          background: #111;
          color: white;

          font-size: 14px;
          font-weight: 600;
        }

        @media (max-width: 1000px) {
          .contactGrid {
            grid-template-columns: 1fr;
          }

          .hero h1 {
            font-size: 52px;
          }

          .cta h2 {
            font-size: 42px;
          }
        }

        @media (max-width: 700px) {
          .contactPage {
            padding: 120px 20px 80px;
          }

          .hero h1 {
            font-size: 40px;
          }

          .glassCard,
          .formCard {
            padding: 28px;
          }
        }
      `}</style>
    </section>
  );
}
