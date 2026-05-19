"use client";

export default function Services() {
  return (
    <section className="services">
      {/* HEADER */}
      <div className="header">
        <h2>Our Core Services</h2>
        <p>
          We design intelligent architectural systems that convert imagination
          into precise, immersive, and build-ready 3D environments.
        </p>
      </div>

      {/* SERVICE 1 */}
      <div className="panel">
        <div className="image">
          <img src="/images/showcase.jpg" alt="2D to 3D conversion" />
        </div>
        <div className="content">
          <span>01 / Core</span>
          <h3>2D to 3D Architectural Conversion</h3>
          <p>
            We transform static architectural drawings into fully immersive 3D
            environments with accurate scale, materials, lighting, and spatial
            depth — ready for real-world visualization and walkthroughs.
          </p>
        </div>
      </div>

      {/* SERVICE 2 (REVERSE) */}
      <div className="panel reverse">
        <div className="image">
          <img src="/images/showcase.jpg" alt="floor planning" />
        </div>
        <div className="content">
          <span>02 / Design</span>
          <h3>Custom Floor Planning</h3>
          <p>
            Intelligent layout design focused on flow, usability, and structural
            balance. Every plan is optimized for real-life functionality and
            aesthetic harmony.
          </p>
        </div>
      </div>

      {/* SERVICE 3 */}
      <div className="panel">
        <div className="image">
          <img src="/images/showcase.jpg" alt="ai design" />
        </div>
        <div className="content">
          <span>03 / Intelligence</span>
          <h3>AI Design Assistance</h3>
          <p>
            Smart design suggestions for structure, orientation, ventilation,
            and spatial efficiency powered by architectural intelligence
            systems.
          </p>
        </div>
      </div>

      {/* SERVICE 4 (REVERSE) */}
      <div className="panel reverse">
        <div className="image">
          <img src="/images/showcase.jpg" alt="rendering visualization" />
        </div>
        <div className="content">
          <span>04 / Visuals</span>
          <h3>Visualization & Rendering</h3>
          <p>
            Cinematic-quality renders and walkthroughs that bring architectural
            concepts to life before construction begins — realistic, emotional,
            and immersive.
          </p>
        </div>
      </div>

      {/* CSS */}
      <style jsx>{`
        .services {
          background: #ffffff;
          padding: 140px 20px;
        }

        /* HEADER */
        .header {
          max-width: 900px;
          margin: auto;
          text-align: center;
          margin-bottom: 100px;
        }

        .header h2 {
          font-size: 54px;
          font-weight: 850;
          letter-spacing: -0.8px;
          color: #0a0a0a;
          margin-bottom: 18px;
        }

        .header p {
          font-size: 15.5px;
          line-height: 1.9;
          color: rgba(0, 0, 0, 0.65);
          max-width: 750px;
          margin: auto;
        }

        /* PANEL (KEY LAYOUT) */
        .panel {
          max-width: 1200px;
          margin: 120px auto;

          display: flex;
          align-items: center;
          gap: 80px;
        }

        .reverse {
          flex-direction: row-reverse;
        }

        /* IMAGE */
        .image {
          flex: 1;
          height: 520px;
          border-radius: 28px;
          overflow: hidden;

          box-shadow: 0 60px 160px rgba(0, 0, 0, 0.12);

          transition: transform 0.6s ease;
        }

        .image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(1.05);
          transition: transform 1s ease;
        }

        .panel:hover .image img {
          transform: scale(1.12);
        }

        .panel:hover .image {
          transform: translateY(-10px);
        }

        /* CONTENT */
        .content {
          flex: 1;
        }

        .content span {
          font-size: 12px;
          letter-spacing: 2px;
          color: rgba(0, 0, 0, 0.45);
        }

        .content h3 {
          font-size: 34px;
          font-weight: 800;
          margin: 14px 0;
          color: #0a0a0a;
          letter-spacing: -0.5px;
        }

        .content p {
          font-size: 15px;
          line-height: 1.9;
          color: rgba(0, 0, 0, 0.65);
          max-width: 520px;
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .panel {
            flex-direction: column;
            gap: 30px;
            margin: 80px auto;
          }

          .reverse {
            flex-direction: column;
          }

          .image {
            height: 320px;
          }

          .header h2 {
            font-size: 34px;
          }

          .content h3 {
            font-size: 26px;
          }
        }
      `}</style>
    </section>
  );
}
