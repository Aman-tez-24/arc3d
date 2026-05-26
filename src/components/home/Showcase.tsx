"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";

export default function Showcase() {
  const router = useRouter();
  const projects = [
    {
      title: "Modern Villa Concept",
      category: "Residential • 3D Visualization",
      image: "/images/showcase/showcase1.png",
      size: "large",
    },
    {
      title: "Urban Minimal Residence",
      category: "Architecture • Spatial Flow",
      image: "/images/showcase/showcase2.png",
      size: "small",
    },
    {
      title: "Luxury Nature Estate",
      category: "Landscape • Rendering",
      image: "/images/showcase/showcase3.png",
      size: "small",
    },
    {
      title: "Smart Space Prototype",
      category: "AI Assisted • Concept Build",
      image: "/images/showcase/showcase4.png",
      size: "large",
    },
  ];

  const [user, setUser] = useState<any>(null);
  useEffect(() => {
    const unsub = auth.onAuthStateChanged((u) => {
      setUser(u);
    });

    return () => unsub();
  }, []);
  return (
    <section id="showcase" className="showcase">
      {/* BACKGROUND */}
      <div className="noise" />
      <div className="gradientGlow" />

      {/* HEADER */}
      <div className="header">
        <span className="miniTag">SELECTED WORKS</span>

        <h2>
          Cinematic Architecture
          <br />
          Designed for Experience
        </h2>

        <p>
          A curated collection of immersive architectural environments crafted
          with precision, realism, and spatial intelligence. Every project is
          designed to feel cinematic, emotional, and deeply experiential.
        </p>
      </div>

      {/* GRID */}
      <div className="grid">
        {projects.map((project, index) => (
          <div
            className={`card ${project.size === "large" ? "large" : "small"}`}
            key={index}
          >
            {/* IMAGE */}
            <img src={project.image} alt={project.title} />

            {/* DARK OVERLAY */}
            <div className="darkLayer" />

            {/* LIGHT REFLECTION */}
            <div className="reflection" />

            {/* TOP BAR */}
            <div className="topBar">
              <span>ARC3D</span>
              <div className="dot" />
            </div>

            {/* CONTENT */}
            <div className="content">
              <div className="line" />

              <p>{project.category}</p>

              <h3>{project.title}</h3>

              <button
                className="navItem"
                onClick={() => {
                  if (user) {
                    router.push("/projects");
                  } else {
                    router.push("/signup");
                  }
                }}
              >
                {user ? "Explore Project" : "Explore Project"} <span>→</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* BOTTOM TEXT */}
      <div className="bottomText">
        <p>
          Architecture is no longer static — it is immersive, interactive, and
          emotionally experienced before construction even begins.
        </p>
      </div>

      <style jsx>{`
        .showcase {
          position: relative;
          overflow: hidden;

          background:
            radial-gradient(
              circle at top,
              rgba(0, 0, 0, 0.04),
              transparent 35%
            ),
            linear-gradient(to bottom, #ffffff, #f8f5ef);

          padding: 160px 24px;
        }

        /* BACKGROUND */
        .noise {
          position: absolute;
          inset: 0;

          opacity: 0.03;

          background-image:
            linear-gradient(rgba(0, 0, 0, 1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 1) 1px, transparent 1px);

          background-size: 80px 80px;

          pointer-events: none;
        }

        .gradientGlow {
          position: absolute;

          top: -300px;
          left: 50%;

          transform: translateX(-50%);

          width: 1000px;
          height: 1000px;

          background: radial-gradient(
            circle,
            rgba(0, 0, 0, 0.05),
            transparent 70%
          );

          filter: blur(100px);

          pointer-events: none;
        }

        /* HEADER */
        .header {
          position: relative;
          z-index: 2;

          max-width: 950px;

          margin: auto;
          margin-bottom: 120px;

          text-align: center;
        }

        .miniTag {
          display: inline-flex;

          padding: 10px 18px;

          border-radius: 999px;

          background: rgba(255, 255, 255, 0.7);

          backdrop-filter: blur(20px);

          border: 1px solid rgba(0, 0, 0, 0.06);

          font-size: 11px;
          font-weight: 700;

          letter-spacing: 3px;
          text-transform: uppercase;

          color: rgba(0, 0, 0, 0.5);

          margin-bottom: 28px;

          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.05);
        }

        .header h2 {
          font-size: clamp(3rem, 7vw, 6rem);

          font-weight: 900;

          line-height: 0.92;

          letter-spacing: -0.08em;

          color: #0a0a0a;

          margin-bottom: 26px;
        }

        .header p {
          max-width: 760px;

          margin: auto;

          font-size: 16px;
          line-height: 2;

          color: rgba(0, 0, 0, 0.65);
        }

        /* GRID */
        .grid {
          position: relative;
          z-index: 2;

          max-width: 1400px;

          margin: auto;

          display: grid;
          grid-template-columns: repeat(2, 1fr);

          gap: 34px;
        }

        /* CARD */
        .card {
          position: relative;

          overflow: hidden;

          border-radius: 34px;

          background: #ddd;

          cursor: pointer;

          isolation: isolate;

          box-shadow:
            0 50px 140px rgba(0, 0, 0, 0.12),
            inset 0 1px 0 rgba(255, 255, 255, 0.4);

          transition:
            transform 0.8s ease,
            box-shadow 0.8s ease;
        }

        .large {
          height: 680px;
        }

        .small {
          height: 480px;
          margin-top: 80px;
        }

        .card img {
          width: 100%;
          height: 100%;

          object-fit: cover;

          transform: scale(1.04);

          transition:
            transform 1.4s ease,
            filter 1s ease;
        }

        /* DARK LAYER */
        .darkLayer {
          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              to top,
              rgba(0, 0, 0, 0.72),
              rgba(0, 0, 0, 0.12),
              transparent
            ),
            linear-gradient(to right, rgba(255, 255, 255, 0.08), transparent);

          z-index: 2;
        }

        /* REFLECTION */
        .reflection {
          position: absolute;

          top: -40%;
          left: -20%;

          width: 60%;
          height: 180%;

          background: linear-gradient(
            to right,
            transparent,
            rgba(255, 255, 255, 0.18),
            transparent
          );

          transform: rotate(18deg);

          z-index: 3;

          opacity: 0;

          transition: opacity 0.8s ease;
        }

        /* TOP BAR */
        .topBar {
          position: absolute;

          top: 24px;
          left: 24px;
          right: 24px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          z-index: 5;
        }

        .topBar span {
          padding: 10px 14px;

          border-radius: 999px;

          background: rgba(255, 255, 255, 0.14);

          backdrop-filter: blur(20px);

          border: 1px solid rgba(255, 255, 255, 0.18);

          font-size: 10px;
          font-weight: 700;

          letter-spacing: 2px;
          text-transform: uppercase;

          color: rgba(255, 255, 255, 0.9);
        }

        .dot {
          width: 12px;
          height: 12px;

          border-radius: 50%;

          background: rgba(255, 255, 255, 0.85);

          box-shadow: 0 0 30px rgba(255, 255, 255, 0.8);
        }

        /* CONTENT */
        .content {
          position: absolute;

          left: 32px;
          right: 32px;
          bottom: 32px;

          z-index: 5;
        }

        .line {
          width: 120px;
          height: 1px;

          background: rgba(255, 255, 255, 0.3);

          margin-bottom: 20px;
        }

        .content p {
          font-size: 12px;
          font-weight: 600;

          letter-spacing: 2px;
          text-transform: uppercase;

          color: rgba(255, 255, 255, 0.7);

          margin-bottom: 12px;
        }

        .content h3 {
          font-size: clamp(2rem, 3vw, 3rem);

          font-weight: 850;

          line-height: 1;

          letter-spacing: -0.05em;

          color: white;

          max-width: 440px;

          margin-bottom: 24px;
        }

        /* BUTTON */
        button {
          display: inline-flex;
          align-items: center;
          gap: 14px;

          padding: 16px 24px;

          border: 1px solid rgba(255, 255, 255, 0.15);

          border-radius: 999px;

          background: rgba(255, 255, 255, 0.12);

          backdrop-filter: blur(16px);

          color: white;

          font-size: 12px;
          font-weight: 700;

          letter-spacing: 2px;
          text-transform: uppercase;

          cursor: pointer;

          transition:
            transform 0.35s ease,
            gap 0.35s ease,
            background 0.35s ease;
        }

        button span {
          font-size: 18px;
        }

        /* HOVER */
        .card:hover {
          transform: perspective(1400px) rotateX(2deg) rotateY(-2deg)
            translateY(-12px);

          box-shadow: 0 70px 180px rgba(0, 0, 0, 0.2);
        }

        .card:hover img {
          transform: scale(1.12);
          filter: saturate(1.08);
        }

        .card:hover .reflection {
          opacity: 1;
        }

        .card:hover button {
          gap: 22px;

          background: rgba(255, 255, 255, 0.18);
        }

        /* BOTTOM */
        .bottomText {
          position: relative;
          z-index: 2;

          max-width: 850px;

          margin: 120px auto 0;

          text-align: center;
        }

        .bottomText p {
          font-size: 20px;
          line-height: 2;

          font-style: italic;

          color: rgba(0, 0, 0, 0.55);
        }

        /* RESPONSIVE */
        @media (max-width: 1000px) {
          .grid {
            grid-template-columns: 1fr;
          }

          .small {
            margin-top: 0;
          }

          .large,
          .small {
            height: 420px;
          }
        }

        @media (max-width: 640px) {
          .showcase {
            padding: 100px 18px;
          }

          .card {
            border-radius: 24px;
          }

          .large,
          .small {
            height: 320px;
          }

          .content {
            left: 22px;
            right: 22px;
            bottom: 22px;
          }

          .content h3 {
            font-size: 28px;
          }

          .bottomText p {
            font-size: 16px;
          }
        }
      `}</style>
    </section>
  );
}
