"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
export default function Showbg() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  useEffect(() => {
    const unsub = auth.onAuthStateChanged((u) => {
      setUser(u);
    });

    return () => unsub();
  }, []);
  return (
    <section className="showbg">
      {/* TOP LABEL */}
      <div className="topBar">
        <span className="line" />
        <p>IMMERSIVE ARCHITECTURAL EXPERIENCE</p>
      </div>

      {/* MAIN SHOWCASE */}
      <div className="imageWrapper">
        <div className="imageBox">
          {/* OVERLAYS */}
          <div className="darkOverlay" />
          <div className="noise" />
          <div className="gradientLight" />

          {/* FLOATING PANEL */}
          <div className="infoCard">
            <span className="tag">Arc3D Showcase</span>

            <h2>
              Architecture
              <br />
              Designed for
              <br />
              Human Experience
            </h2>

            <p>
              Every environment is crafted with cinematic precision, spatial
              intelligence, and immersive depth to redefine how architecture is
              explored digitally.
            </p>

            <button
              className="navItem"
              onClick={() => {
                if (user) {
                  router.push("/projects");
                } else {
                  router.push("/signin");
                }
              }}
            >
              {user ? "Explore Project" : "Explore Project"} <span>→</span>
            </button>
          </div>

          {/* FLOATING METRICS */}
          <div className="metrics">
            <div className="metric">
              <h3>120+</h3>
              <p>Spatial Concepts</p>
            </div>

            <div className="metric">
              <h3>4K</h3>
              <p>Cinematic Quality</p>
            </div>

            <div className="metric">
              <h3>Real-Time</h3>
              <p>Interactive Rendering</p>
            </div>
          </div>

          {/* CORNER CURVES 
          <div className="topLeftCurve" />
          <div className="bottomRightCurve" />*/}
        </div>
      </div>

      <style jsx>{`
        .showbg {
          position: relative;
          overflow: hidden;
          background: #f4f1ea;
          padding: 120px 12px;
        }

        /* =========================
           TOP BAR
        ========================= */

        .topBar {
          max-width: 1400px;
          margin: 0 auto 30px;

          display: flex;
          align-items: center;
          gap: 14px;

          padding-left: 8px;
        }

        .line {
          width: 70px;
          height: 1px;
          background: rgba(0, 0, 0, 0.3);
        }

        .topBar p {
          font-size: 11px;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: rgba(0, 0, 0, 0.5);
        }

        /* =========================
           WRAPPER
        ========================= */

        .imageWrapper {
          max-width: 1450px;
          margin: auto;
        }

        /* =========================
           IMAGE BOX
        ========================= */

        .imageBox {
          position: relative;

          width: 100%;
          height: 92vh;

          overflow: hidden;

          border-radius: 42px;

          background-image: url("/images/showcase-bg/showcase-bg.png");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;

          box-shadow:
            0 60px 180px rgba(0, 0, 0, 0.18),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);

          transition:
            transform 1s ease,
            box-shadow 1s ease;
        }

        .imageBox:hover {
          transform: scale(1.01);
          box-shadow:
            0 90px 220px rgba(0, 0, 0, 0.24),
            inset 0 1px 0 rgba(255, 255, 255, 0.4);
        }

        /* =========================
           OVERLAYS
        ========================= */

        .darkOverlay {
          position: absolute;
          inset: 0;

          background:
            linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1)),
            linear-gradient(to top, rgba(0, 0, 0, 0.45), transparent 45%);

          z-index: 1;
        }

        .gradientLight {
          position: absolute;

          width: 700px;
          height: 700px;

          top: -250px;
          right: -180px;

          border-radius: 50%;

          background: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.18),
            transparent 65%
          );

          filter: blur(40px);

          z-index: 2;
        }

        .noise {
          position: absolute;
          inset: 0;

          opacity: 0.05;

          background-image: radial-gradient(
            rgba(255, 255, 255, 0.5) 0.5px,
            transparent 0.5px
          );

          background-size: 4px 4px;

          z-index: 2;
        }

        /* =========================
           INFO CARD
        ========================= */

        .infoCard {
          position: absolute;

          left: 60px;
          bottom: 60px;

          width: 520px;

          z-index: 5;

          padding: 40px;

          border-radius: 34px;

          backdrop-filter: blur(18px);

          background: rgba(255, 255, 255, 0.08);

          border: 1px solid rgba(255, 255, 255, 0.12);

          box-shadow:
            0 30px 90px rgba(0, 0, 0, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }

        .tag {
          display: inline-flex;

          padding: 10px 16px;

          border-radius: 999px;

          background: rgba(255, 255, 255, 0.1);

          border: 1px solid rgba(255, 255, 255, 0.15);

          color: rgba(255, 255, 255, 0.8);

          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;

          margin-bottom: 26px;
        }

        .infoCard h2 {
          font-size: 4.4rem;
          line-height: 0.95;
          letter-spacing: -0.08em;
          font-weight: 800;

          color: white;

          margin-bottom: 24px;
        }

        .infoCard p {
          font-size: 15px;
          line-height: 1.9;
          color: rgba(255, 255, 255, 0.74);

          margin-bottom: 34px;

          max-width: 430px;
        }

        /* =========================
           BUTTON
        ========================= */

        .infoCard button {
          height: 58px;

          padding: 0 26px;

          border-radius: 999px;

          border: none;
          outline: none;

          background: white;
          color: black;

          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;

          display: flex;
          align-items: center;
          gap: 14px;

          cursor: pointer;

          transition:
            transform 0.35s ease,
            gap 0.35s ease;
        }

        .infoCard button:hover {
          transform: translateY(-4px);
          gap: 20px;
        }

        .infoCard button span {
          font-size: 1.3rem;
        }

        /* =========================
           METRICS
        ========================= */

        .metrics {
          position: absolute;

          right: 40px;
          bottom: 40px;

          display: flex;
          gap: 18px;

          z-index: 5;
        }

        .metric {
          min-width: 170px;

          padding: 22px;

          border-radius: 26px;

          background: rgba(255, 255, 255, 0.08);

          border: 1px solid rgba(255, 255, 255, 0.12);

          backdrop-filter: blur(14px);

          box-shadow: 0 20px 70px rgba(0, 0, 0, 0.18);
        }

        .metric h3 {
          font-size: 1.7rem;
          font-weight: 800;
          color: white;

          margin-bottom: 8px;
        }

        .metric p {
          font-size: 12px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.68);

          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        /* =========================
           CURVES
        ========================= */

        .topLeftCurve {
          position: absolute;

          top: 0;
          left: 0;

          width: 140px;
          height: 70px;

          background: #f4f1ea;

          border-bottom-right-radius: 28px;

          z-index: 10;
        }

        .topLeftCurve::after {
          content: "";

          position: absolute;

          top: 0;
          right: -60px;

          width: 60px;
          height: 60px;

          border-top-left-radius: 20px;

          box-shadow: -20px -20px 0 #f4f1ea;
        }

        .topLeftCurve::before {
          content: "";

          position: absolute;

          left: 0;
          bottom: -60px;

          width: 60px;
          height: 60px;

          border-top-left-radius: 20px;

          box-shadow: -20px -20px 0 #f4f1ea;
        }

        .bottomRightCurve {
          position: absolute;

          right: 0;
          bottom: 0;

          width: 60px;
          height: 60px;

          background: #f4f1ea;

          border-top-left-radius: 20px;

          z-index: 10;
        }

        .bottomRightCurve::after {
          content: "";

          position: absolute;

          top: -60px;
          right: 0;

          width: 60px;
          height: 60px;

          border-bottom-right-radius: 20px;

          box-shadow: 20px 20px 0 #f4f1ea;
        }

        .bottomRightCurve::before {
          content: "";

          position: absolute;

          left: -60px;
          bottom: 0;

          width: 60px;
          height: 60px;

          border-bottom-right-radius: 20px;

          box-shadow: 20px 20px 0 #f4f1ea;
        }

        /* =========================
           RESPONSIVE
        ========================= */

        @media (max-width: 1100px) {
          .imageBox {
            height: auto;
            min-height: 850px;
          }

          .infoCard {
            position: relative;
            left: auto;
            bottom: auto;

            width: calc(100% - 40px);

            margin: 20px;
          }

          .metrics {
            position: relative;

            right: auto;
            bottom: auto;

            padding: 0 20px 20px;

            flex-wrap: wrap;
          }
        }

        @media (max-width: 768px) {
          .showbg {
            padding: 90px 10px;
          }

          .imageBox {
            border-radius: 28px;
            min-height: 760px;
          }

          .infoCard {
            padding: 28px;
            border-radius: 26px;
          }

          .infoCard h2 {
            font-size: 2.8rem;
          }

          .infoCard p {
            font-size: 14px;
          }

          .metrics {
            flex-direction: column;
          }

          .metric {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
