"use client";

export default function AboutPage() {
  return (
    <section className="aboutPage">
      {/* HERO */}
      <div className="hero">
        <span className="tag">ABOUT ARC3D</span>

        <h1>
          Designing the Future of
          <br />
          Immersive Architecture
        </h1>

        <p>
          Arc3D is a next-generation architectural experience platform that
          blends design, AI, and real-time 3D visualization. We transform
          traditional blueprints into immersive digital environments that can be
          explored, analyzed, and refined like never before.
        </p>
      </div>

      {/* MISSION */}
      <div className="section">
        <div className="card">
          <h2>Our Mission</h2>
          <p>
            To redefine how architecture is designed and experienced by merging
            AI-driven planning, real-time 3D rendering, and intuitive spatial
            design tools into one seamless ecosystem.
          </p>
        </div>

        <div className="card">
          <h2>Our Vision</h2>
          <p>
            A world where every structure is first experienced digitally in full
            immersion before it is built physically — reducing cost, increasing
            precision, and enhancing creativity.
          </p>
        </div>
      </div>

      {/* WHAT WE DO */}
      <div className="wideSection">
        <h2>What We Do</h2>

        <p>
          Arc3D is not just a design tool — it is an intelligent architectural
          engine. We convert 2D floor plans into fully interactive 3D
          environments, simulate real-world lighting conditions, and enable
          architects, developers, and clients to walk through spaces before
          construction begins.
        </p>

        <div className="grid">
          <div className="feature">
            <h3>2D → 3D Conversion</h3>
            <p>
              Automatically generate accurate 3D models from architectural
              blueprints with structural intelligence.
            </p>
          </div>

          <div className="feature">
            <h3>AI Design Assistant</h3>
            <p>
              Smart suggestions for layouts, optimization, vastu alignment, and
              space efficiency.
            </p>
          </div>

          <div className="feature">
            <h3>Real-Time Walkthroughs</h3>
            <p>
              Experience cinematic walkthroughs of spaces before they are built.
            </p>
          </div>

          <div className="feature">
            <h3>Luxury Visualization</h3>
            <p>
              High-quality rendering with lighting, textures, and realism
              optimized for decision making.
            </p>
          </div>
        </div>
      </div>

      {/* JOURNEY */}
      <div className="timeline">
        <h2>Our Journey</h2>

        <div className="step">
          <span>01</span>
          <div>
            <h3>Idea Formation</h3>
            <p>
              Arc3D began with a simple idea — make architecture interactive
              instead of static.
            </p>
          </div>
        </div>

        <div className="step">
          <span>02</span>
          <div>
            <h3>AI Integration</h3>
            <p>
              We introduced intelligent systems that understand space,
              structure, and design intent.
            </p>
          </div>
        </div>

        <div className="step">
          <span>03</span>
          <div>
            <h3>3D Engine Build</h3>
            <p>
              Developed a real-time 3D visualization system for immersive
              architecture workflows.
            </p>
          </div>
        </div>

        <div className="step">
          <span>04</span>
          <div>
            <h3>Arc3D Platform</h3>
            <p>
              Unified everything into one platform for architects, clients, and
              developers.
            </p>
          </div>
        </div>
      </div>

      {/* VALUES */}
      <div className="values">
        <h2>Core Values</h2>

        <div className="valueGrid">
          <div className="valueCard">
            <h3>Precision</h3>
            <p>Every detail matters in spatial design.</p>
          </div>

          <div className="valueCard">
            <h3>Innovation</h3>
            <p>We push beyond traditional architectural limits.</p>
          </div>

          <div className="valueCard">
            <h3>Immersion</h3>
            <p>Design should be experienced, not just viewed.</p>
          </div>

          <div className="valueCard">
            <h3>Simplicity</h3>
            <p>Complex systems made intuitive and usable.</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta">
        <h2>Let’s Build the Future Together</h2>
        <p>
          Join Arc3D and transform how architecture is designed, visualized, and
          experienced.
        </p>

        <button>Get Started</button>
      </div>

      <style jsx>{`
        .aboutPage {
          padding: 120px 40px;
          background: #f3f1eb;
          color: #111;
        }

        .hero {
          max-width: 900px;
          margin: auto;
          text-align: center;
        }

        .tag {
          font-size: 12px;
          letter-spacing: 0.3em;
          color: rgba(0, 0, 0, 0.5);
        }

        .hero h1 {
          margin-top: 20px;
          font-size: 64px;
          line-height: 1.05;
        }

        .hero p {
          margin-top: 24px;
          font-size: 16px;
          line-height: 1.9;
          color: rgba(0, 0, 0, 0.65);
        }

        .section {
          margin-top: 100px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          max-width: 1100px;
          margin-left: auto;
          margin-right: auto;
        }

        .card {
          padding: 40px;
          border-radius: 28px;
          background: rgba(255, 255, 255, 0.6);
          border: 1px solid rgba(0, 0, 0, 0.06);
        }

        .wideSection {
          margin-top: 120px;
          max-width: 1100px;
          margin-left: auto;
          margin-right: auto;
        }

        .wideSection h2 {
          font-size: 42px;
        }

        .wideSection p {
          margin-top: 20px;
          line-height: 1.8;
          color: rgba(0, 0, 0, 0.65);
        }

        .grid {
          margin-top: 40px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .feature {
          padding: 28px;
          border-radius: 22px;
          background: white;
          border: 1px solid rgba(0, 0, 0, 0.06);
        }

        .timeline {
          margin-top: 120px;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
        }

        .step {
          display: flex;
          gap: 20px;
          margin-top: 30px;
        }

        .step span {
          font-size: 20px;
          font-weight: bold;
        }

        .values {
          margin-top: 120px;
          max-width: 1100px;
          margin: auto;
        }

        .valueGrid {
          margin-top: 40px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .valueCard {
          padding: 28px;
          border-radius: 22px;
          background: white;
        }

        .cta {
          margin-top: 140px;
          text-align: center;
        }

        .cta button {
          margin-top: 20px;
          padding: 14px 28px;
          border: none;
          border-radius: 14px;
          background: #111;
          color: white;
          cursor: pointer;
        }

        @media (max-width: 900px) {
          .section,
          .grid,
          .valueGrid {
            grid-template-columns: 1fr;
          }

          .hero h1 {
            font-size: 42px;
          }
        }
      `}</style>
    </section>
  );
}
