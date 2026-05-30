"use client";

import Link from "next/link";

export default function TechnologyPage() {
  const technologies = [
    {
      id: "01",
      title: "3D Visualization Pipeline",
      description:
        "Our visualization workflow combines precision modeling, cinematic lighting, material detailing, and advanced rendering techniques to create premium architectural presentations.",
    },
    {
      id: "02",
      title: "Architectural Modeling",
      description:
        "We use industry-standard 3D modeling workflows to convert 2D plans into accurate architectural structures with spatial realism and design consistency.",
    },
    {
      id: "03",
      title: "Rendering Infrastructure",
      description:
        "Arc3D rendering systems focus on high-detail outputs, realistic atmosphere, material accuracy, and presentation-grade visual quality for architectural showcases.",
    },
    {
      id: "04",
      title: "AI Research Systems",
      description:
        "Our research team is building internal AI systems focused on automated floor-plan understanding, intelligent space generation, and future architectural automation.",
    },
    {
      id: "05",
      title: "Web Platform",
      description:
        "The Arc3D platform is engineered using modern web technologies with immersive layouts, premium motion systems, and scalable architecture for future expansion.",
    },
    {
      id: "06",
      title: "Cloud Infrastructure",
      description:
        "Project storage, rendering assets, workflow management, and architectural data are managed through scalable cloud-based infrastructure systems.",
    },
  ];

  return (
    <section className="page">
      {/* BACKGROUND */}
      <div className="grid" />
      <div className="orb orb1" />
      <div className="orb orb2" />

      {/* HERO */}
      <div className="hero">
        <div className="badge">
          <span />
          ARC3D TECHNOLOGY
        </div>

        <h1>
          The Technology
          <br />
          Behind Arc3D
        </h1>

        <p>
          Arc3D combines architectural visualization, cinematic rendering,
          advanced modeling systems, and next-generation research workflows to
          build immersive digital architectural experiences.
        </p>
      </div>

      {/* STACK */}
      <div className="stackGrid">
        {technologies.map((item) => (
          <div key={item.id} className="card">
            <div className="top">
              <span>{item.id}</span>
            </div>

            <h2>{item.title}</h2>

            <p>{item.description}</p>
          </div>
        ))}
      </div>

      {/* CORE SECTION */}
      <div className="coreSection">
        <div className="left">
          <span className="miniTag">Core Infrastructure</span>

          <h2>
            Designed For
            <br />
            Future Spatial Systems
          </h2>

          <p>
            Arc3D is being built with scalability in mind — enabling future
            integration of intelligent automation, AI-assisted architectural
            workflows, and advanced spatial generation systems.
          </p>
        </div>

        <div className="right">
          <div className="infoCard">
            <h3>Current Systems</h3>

            <ul>
              <li>2D → 3D Conversion Pipeline</li>
              <li>Cinematic Rendering Workflow</li>
              <li>Architectural Presentation Systems</li>
              <li>Project Management Infrastructure</li>
            </ul>
          </div>

          <div className="infoCard">
            <h3>Future Systems</h3>

            <ul>
              <li>AI Floor Plan Interpretation</li>
              <li>Automated Spatial Generation</li>
              <li>Intelligent Layout Optimization</li>
              <li>Advanced Visualization Automation</li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta">
        <h2>Interested in building future architectural systems?</h2>

        <p>
          Arc3D is actively expanding its technology and research ecosystem.
        </p>

        <div className="buttons">
          <Link href="/devSection/careers">
            <button>Explore Careers</button>
          </Link>

          <Link href="/devSection/research">
            <button className="ghost">Research Program</button>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .page {
          position: relative;
          overflow: hidden;

          padding: 150px 24px;

          background: #f4f1ea;
          color: #111;
        }

        .grid {
          position: absolute;
          inset: 0;

          background-image:
            linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px);

          background-size: 70px 70px;

          opacity: 0.4;
        }

        .orb {
          position: absolute;
          border-radius: 999px;
          filter: blur(120px);
        }

        .orb1 {
          width: 420px;
          height: 420px;

          background: rgba(40, 70, 140, 0.1);

          top: -120px;
          left: -100px;
        }

        .orb2 {
          width: 350px;
          height: 350px;

          background: rgba(255, 255, 255, 0.7);

          right: -100px;
          top: 20%;
        }

        .hero {
          position: relative;
          z-index: 2;

          max-width: 1000px;
          margin: auto;

          text-align: center;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;

          padding: 12px 18px;

          border-radius: 999px;

          background: rgba(255, 255, 255, 0.6);

          border: 1px solid rgba(255, 255, 255, 0.8);

          font-size: 10px;
          font-weight: 700;

          letter-spacing: 0.28em;

          color: rgba(0, 0, 0, 0.55);

          backdrop-filter: blur(20px);
        }

        .badge span {
          width: 7px;
          height: 7px;

          border-radius: 999px;

          background: #111;
        }

        .hero h1 {
          margin-top: 30px;

          font-size: clamp(56px, 8vw, 100px);

          line-height: 0.95;

          letter-spacing: -4px;

          font-weight: 900;
        }

        .hero p {
          margin: 34px auto 0;

          max-width: 760px;

          font-size: 16px;
          line-height: 2;

          color: rgba(0, 0, 0, 0.65);
        }

        .stackGrid {
          position: relative;
          z-index: 2;

          max-width: 1200px;
          margin: 100px auto 0;

          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .card {
          padding: 34px;

          border-radius: 30px;

          background: rgba(255, 255, 255, 0.55);

          border: 1px solid rgba(255, 255, 255, 0.7);

          backdrop-filter: blur(20px);

          transition:
            transform 0.4s ease,
            background 0.4s ease;
        }

        .card:hover {
          transform: translateY(-8px);

          background: rgba(255, 255, 255, 0.8);
        }

        .top span {
          font-size: 11px;

          letter-spacing: 0.2em;

          color: rgba(0, 0, 0, 0.45);
        }

        .card h2 {
          margin-top: 18px;

          font-size: 30px;

          line-height: 1.1;

          letter-spacing: -1px;

          font-weight: 800;
        }

        .card p {
          margin-top: 18px;

          font-size: 15px;
          line-height: 1.9;

          color: rgba(0, 0, 0, 0.62);
        }

        .coreSection {
          position: relative;
          z-index: 2;

          max-width: 1200px;
          margin: 130px auto 0;

          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }

        .miniTag {
          font-size: 12px;

          letter-spacing: 0.22em;

          text-transform: uppercase;

          color: rgba(0, 0, 0, 0.45);
        }

        .left h2 {
          margin-top: 20px;

          font-size: clamp(42px, 5vw, 72px);

          line-height: 0.95;

          letter-spacing: -3px;

          font-weight: 900;
        }

        .left p {
          margin-top: 28px;

          max-width: 540px;

          font-size: 16px;
          line-height: 2;

          color: rgba(0, 0, 0, 0.62);
        }

        .right {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .infoCard {
          padding: 34px;

          border-radius: 28px;

          background: rgba(255, 255, 255, 0.55);

          border: 1px solid rgba(255, 255, 255, 0.75);

          backdrop-filter: blur(20px);
        }

        .infoCard h3 {
          font-size: 26px;
          font-weight: 800;
        }

        .infoCard ul {
          margin-top: 22px;

          display: flex;
          flex-direction: column;
          gap: 16px;

          padding-left: 18px;
        }

        .infoCard li {
          color: rgba(0, 0, 0, 0.65);

          line-height: 1.7;
        }

        .cta {
          position: relative;
          z-index: 2;

          max-width: 1000px;
          margin: 140px auto 0;

          text-align: center;
        }

        .cta h2 {
          font-size: clamp(40px, 5vw, 70px);

          line-height: 1;

          letter-spacing: -3px;

          font-weight: 900;
        }

        .cta p {
          margin-top: 24px;

          font-size: 16px;
          line-height: 1.9;

          color: rgba(0, 0, 0, 0.62);
        }

        .buttons {
          margin-top: 40px;

          display: flex;
          justify-content: center;
          gap: 18px;
        }

        button {
          height: 56px;
          padding: 0 28px;

          border: none;
          border-radius: 18px;

          background: #111;
          color: white;

          font-size: 12px;
          font-weight: 700;

          letter-spacing: 0.12em;

          text-transform: uppercase;

          cursor: pointer;

          transition: 0.3s ease;
        }

        button:hover {
          transform: translateY(-4px);
        }

        .ghost {
          background: rgba(255, 255, 255, 0.6);

          color: #111;

          border: 1px solid rgba(255, 255, 255, 0.8);
        }

        @media (max-width: 1000px) {
          .stackGrid {
            grid-template-columns: 1fr;
          }

          .coreSection {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .page {
            padding: 120px 18px;
          }

          .buttons {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
}
