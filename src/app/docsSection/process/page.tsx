"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
export default function ProcessPage() {
  const process = [
    {
      id: "01",
      title: "Requirement Collection",
      description:
        "Clients share floor plans, sketches, references, dimensions, and architectural requirements through the Arc3D workflow system.",
    },
    {
      id: "02",
      title: "Project Analysis",
      description:
        "Our design and visualization team studies spatial layouts, structure flow, material direction, lighting behavior, and visualization objectives.",
    },
    {
      id: "03",
      title: "3D Environment Creation",
      description:
        "Architectural spaces are manually transformed into premium cinematic 3D environments with realistic materials, proportions, and atmosphere.",
    },
    {
      id: "04",
      title: "Visualization & Refinement",
      description:
        "Camera compositions, lighting, textures, and environmental depth are refined to achieve highly immersive architectural presentation quality.",
    },
    {
      id: "05",
      title: "Client Review",
      description:
        "Rendered previews are shared with the client for feedback, modifications, and final adjustments before delivery.",
    },
    {
      id: "06",
      title: "Final Delivery",
      description:
        "The finalized renders, visual outputs, and architectural assets are securely delivered through the Arc3D platform.",
    },
  ];

  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u) => {
      setUser(u);
    });

    return () => unsubscribe();
  }, []);
  const router = useRouter();

  return (
    <section className="page">
      {/* BACKGROUND */}
      <div className="orb orb1" />
      <div className="orb orb2" />
      <div className="gridOverlay" />
      <div className="noise" />

      {/* HERO */}
      <div className="hero">
        <div className="badge">
          <span className="dot" />
          ARC3D WORKFLOW
        </div>

        <h1>
          From Floor Plans
          <br />
          to Cinematic Reality
        </h1>

        <p>
          Arc3D follows a structured architectural visualization workflow
          designed to transform concepts into premium cinematic spatial
          experiences with clarity, precision, and realism.
        </p>
      </div>

      {/* PROCESS TIMELINE */}
      <div className="timeline">
        {process.map((item) => (
          <div className="step" key={item.id}>
            <div className="stepNumber">{item.id}</div>

            <div className="stepContent">
              <div className="line" />

              <h2>{item.title}</h2>

              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* INFO */}
      <div className="infoBox">
        <span>WORKFLOW SYSTEM</span>

        <h2>
          Every Project Follows
          <br />a Refined Visualization Pipeline
        </h2>

        <p>
          Arc3D focuses on architectural storytelling through carefully designed
          workflows combining planning, modeling, rendering, and cinematic
          presentation systems.
        </p>

        <div className="stats">
          <div className="stat">
            <h3>Structured</h3>
            <p>Project Pipeline</p>
          </div>

          <div className="stat">
            <h3>Premium</h3>
            <p>Visualization Quality</p>
          </div>

          <div className="stat">
            <h3>Client Focused</h3>
            <p>Delivery Workflow</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta">
        <div className="ctaLine" />

        <h2>Ready to Visualize Your Architecture?</h2>

        <p>
          Start your project with Arc3D and transform architectural concepts
          into immersive cinematic presentations.
        </p>

        <Link href="/contact">
          <button
            onClick={() => {
              if (user) {
                router.push("/projects"); // dashboard
              } else {
                router.push("/signin");
              }
            }}
            className="joinBtn"
          >
            {user ? "Go to Dashboard" : "Start A Project"}
          </button>
        </Link>
      </div>

      {/* FOOTER */}
      <div className="footer">
        <div className="footerLine" />

        <p>
          “Architecture becomes powerful
          <br />
          when imagination meets visualization.”
        </p>
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
            linear-gradient(180deg, #f8f6f1 0%, #f2efe8 40%, #ebe5da 100%);

          color: #111;
        }

        /* BACKGROUND */
        .orb {
          position: absolute;
          border-radius: 999px;
          filter: blur(120px);
          z-index: 0;
        }

        .orb1 {
          width: 520px;
          height: 520px;

          background: rgba(60, 90, 180, 0.12);

          top: -180px;
          left: -140px;
        }

        .orb2 {
          width: 420px;
          height: 420px;

          background: rgba(255, 255, 255, 0.7);

          right: -120px;
          bottom: -120px;
        }

        .gridOverlay {
          position: absolute;
          inset: 0;

          background-image:
            linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px);

          background-size: 70px 70px;

          opacity: 0.4;

          mask-image: radial-gradient(circle at center, black, transparent 85%);
        }

        .noise {
          position: absolute;
          inset: 0;

          opacity: 0.03;

          background-image:
            linear-gradient(rgba(0, 0, 0, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.4) 1px, transparent 1px);

          background-size: 140px 140px;
        }

        /* HERO */
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

          padding: 12px 20px;
          border-radius: 999px;

          background: rgba(255, 255, 255, 0.55);
          backdrop-filter: blur(20px);

          border: 1px solid rgba(255, 255, 255, 0.8);

          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.32em;

          color: rgba(0, 0, 0, 0.55);

          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.05);
        }

        .dot {
          width: 8px;
          height: 8px;

          border-radius: 999px;

          background: #111;
        }

        .hero h1 {
          margin-top: 34px;

          font-size: clamp(56px, 8vw, 110px);
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

        /* TIMELINE */
        .timeline {
          position: relative;
          z-index: 2;

          max-width: 1100px;
          margin: 120px auto 0;

          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .step {
          display: flex;
          gap: 28px;

          padding: 38px;

          border-radius: 32px;

          background: rgba(255, 255, 255, 0.52);
          backdrop-filter: blur(24px);

          border: 1px solid rgba(255, 255, 255, 0.75);

          box-shadow:
            0 30px 100px rgba(0, 0, 0, 0.05),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);
        }

        .stepNumber {
          min-width: 90px;
          height: 90px;

          border-radius: 24px;

          background: #111;

          color: white;

          display: flex;
          align-items: center;
          justify-content: center;

          font-size: 24px;
          font-weight: 800;
          letter-spacing: -1px;
        }

        .stepContent {
          flex: 1;
        }

        .line {
          width: 70px;
          height: 1px;

          background: rgba(0, 0, 0, 0.2);

          margin-bottom: 24px;
        }

        .stepContent h2 {
          font-size: 34px;
          line-height: 1.1;
          letter-spacing: -1.5px;
          font-weight: 800;
        }

        .stepContent p {
          margin-top: 18px;

          max-width: 760px;

          font-size: 15px;
          line-height: 1.9;

          color: rgba(0, 0, 0, 0.62);
        }

        /* INFO */
        .infoBox {
          position: relative;
          z-index: 2;

          max-width: 1100px;
          margin: 140px auto 0;

          padding: 70px;

          border-radius: 40px;

          text-align: center;

          background: rgba(255, 255, 255, 0.55);
          backdrop-filter: blur(24px);

          border: 1px solid rgba(255, 255, 255, 0.75);

          box-shadow:
            0 40px 120px rgba(0, 0, 0, 0.06),
            inset 0 1px 0 rgba(255, 255, 255, 0.9);
        }

        .infoBox span {
          font-size: 11px;
          letter-spacing: 0.35em;

          color: rgba(0, 0, 0, 0.45);
        }

        .infoBox h2 {
          margin-top: 24px;

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

        .stats {
          margin-top: 60px;

          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .stat {
          padding: 30px;

          border-radius: 24px;

          background: rgba(255, 255, 255, 0.55);

          border: 1px solid rgba(255, 255, 255, 0.8);
        }

        .stat h3 {
          font-size: 30px;
          font-weight: 800;
        }

        .stat p {
          margin-top: 10px;

          font-size: 13px;
          letter-spacing: 0.08em;
          text-transform: uppercase;

          line-height: 1.6;
        }

        /* CTA */
        .cta {
          position: relative;
          z-index: 2;

          margin-top: 140px;

          text-align: center;
        }

        .ctaLine {
          width: 120px;
          height: 1px;

          margin: 0 auto 34px;

          background: rgba(0, 0, 0, 0.14);
        }

        .cta h2 {
          font-size: clamp(36px, 5vw, 64px);
          line-height: 1.05;
          letter-spacing: -2px;
        }

        .cta p {
          margin: 24px auto 0;

          max-width: 680px;

          font-size: 16px;
          line-height: 2;

          color: rgba(0, 0, 0, 0.62);
        }

        button {
          margin-top: 36px;

          height: 58px;
          padding: 0 34px;

          border: none;
          border-radius: 18px;

          background: #111;
          color: white;

          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;

          cursor: pointer;

          transition:
            transform 0.4s ease,
            box-shadow 0.4s ease;
        }

        button:hover {
          transform: translateY(-4px);

          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.16);
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

          margin: 0 auto 30px;

          background: rgba(0, 0, 0, 0.14);
        }

        .footer p {
          font-size: 18px;
          line-height: 1.8;

          color: rgba(0, 0, 0, 0.55);
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

          .step {
            flex-direction: column;
          }

          .stepNumber {
            width: 90px;
          }

          .stats {
            grid-template-columns: 1fr;
          }

          .infoBox {
            padding: 40px 26px;
          }

          .infoBox h2,
          .cta h2 {
            line-height: 1.1;
          }

          .footer {
            margin-top: 100px;
          }
        }
      `}</style>
    </section>
  );
}
