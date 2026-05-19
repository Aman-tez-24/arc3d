"use client";

export default function Showcase() {
  return (
    <section className="showcase">
      {/* HEADER */}
      <div className="header">
        <h2>Selected Architectural Works</h2>
        <p>
          A curated collection of 3D environments crafted with precision,
          realism, and spatial intelligence. Each project reflects our focus on
          immersive architectural storytelling.
        </p>
      </div>

      {/* GRID */}
      <div className="grid">
        <div className="card">
          <img src="/images/hero.jpg" alt="project 1" />
          <div className="overlay">
            <h3>Modern Villa Concept</h3>
            <p>3D Visualization • Residential</p>
          </div>
        </div>

        <div className="card">
          <img src="/images/hero.jpg" alt="project 2" />
          <div className="overlay">
            <h3>Urban Minimal Home</h3>
            <p>Architecture Design • Interior Flow</p>
          </div>
        </div>

        <div className="card">
          <img src="/images/hero.jpg" alt="project 3" />
          <div className="overlay">
            <h3>Luxury Nature Estate</h3>
            <p>3D Rendering • Landscape Integration</p>
          </div>
        </div>

        <div className="card">
          <img src="/images/hero.jpg" alt="project 4" />
          <div className="overlay">
            <h3>Smart Space Prototype</h3>
            <p>AI Assisted Design • Concept Build</p>
          </div>
        </div>
      </div>

      {/* CSS */}
      <style jsx>{`
        .showcase {
          background: #fff;
          padding: 120px 20px;
        }

        /* HEADER */
        .header {
          max-width: 900px;
          margin: auto;
          text-align: center;
          margin-bottom: 70px;
        }

        .header h2 {
          font-size: 46px;
          font-weight: 800;
          letter-spacing: -0.6px;
          color: #0a0a0a;
          margin-bottom: 16px;
        }

        .header p {
          font-size: 15px;
          line-height: 1.9;
          color: rgba(0, 0, 0, 0.65);
          max-width: 700px;
          margin: auto;
        }

        /* GRID */
        .grid {
          max-width: 1200px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
        }

        /* CARD */
        .card {
          position: relative;
          height: 360px;
          overflow: hidden;
          border-radius: 18px;

          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.08);
          cursor: pointer;

          transition:
            transform 0.6s ease,
            box-shadow 0.6s ease;
        }

        .card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(1.05);
          transition: transform 1s ease;
        }

        /* OVERLAY */
        .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.65),
            rgba(0, 0, 0, 0.1),
            transparent
          );

          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 24px;
          color: white;

          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .overlay h3 {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 6px;
        }

        .overlay p {
          font-size: 13px;
          opacity: 0.85;
        }

        /* HOVER LUXURY EFFECT */
        .card:hover {
          transform: translateY(-10px);
          box-shadow: 0 50px 140px rgba(0, 0, 0, 0.18);
        }

        .card:hover img {
          transform: scale(1.12);
        }

        .card:hover .overlay {
          opacity: 1;
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .grid {
            grid-template-columns: 1fr;
          }

          .header h2 {
            font-size: 32px;
          }

          .card {
            height: 280px;
          }
        }
      `}</style>
    </section>
  );
}
