"use client";

export default function IntroSection() {
  return (
    <section className="intro">
      {/* AMBIENT BACKGROUND */}
      <div className="ambient ambient1" />
      <div className="ambient ambient2" />

      {/* SECTION 1 */}
      <div className="container">
        {/* IMAGE */}
        <div className="imageWrap">
          <div className="frame">
            <div className="glassCard">
              <span>ARC3D / SPATIAL ENGINE</span>
            </div>

            <div className="blob">
              <img
                src="/images/intro/intro1.webp"
                alt="architectural visualization"
              />
            </div>

            {/* FLOATING ELEMENTS */}
            <div className="floating floating1" />
            <div className="floating floating2" />
          </div>
        </div>

        {/* TEXT */}
        <div className="textWrap">
          <div className="miniTag">Architectural Intelligence</div>

          <h2>
            Designing Spaces
            <br />
            that Think, Flow,
            <br />
            and Feel Alive
          </h2>

          <div className="line" />

          <p>
            At Arc3D, we transform imagination into immersive architectural
            reality. Every structure begins as a thought — refined into a
            spatial experience shaped by proportion, atmosphere, and movement.
          </p>

          <p>
            Our visualization system combines cinematic rendering with
            intelligent architectural workflows, allowing designers and clients
            to experience environments before they physically exist.
          </p>

          <p>
            From conceptual sketches to fully interactive 3D worlds, Arc3D
            redefines how architecture is explored, presented, and understood.
          </p>

          <div className="stats">
            <div className="statCard">
              <h3>4+</h3>
              <span>Projects</span>
            </div>

            <div className="statCard">
              <h3>Cinematic</h3>
              <span>Spatial Visualization</span>
            </div>

            <div className="statCard">
              <h3>Custom</h3>
              <span>Design Experience</span>
            </div>
          </div>
        </div>
      </div>

      <div className="spacer" />

      {/* SECTION 2 */}
      <div className="container reverse">
        {/* IMAGE */}
        <div className="imageWrap">
          <div className="frame">
            <div className="glassCard right">
              <span>IMMERSIVE VISUALIZATION</span>
            </div>

            <div className="blob blob2">
              <img
                src="/images/intro/intro2.webp"
                alt="luxury architectural design"
              />
            </div>

            <div className="floating floating3" />
            <div className="floating floating4" />
          </div>
        </div>

        {/* TEXT */}
        <div className="textWrap">
          <div className="miniTag">Luxury Digital Craft</div>

          <h2>
            Where Digital
            <br />
            Precision Meets
            <br />
            Spatial Emotion
          </h2>

          <div className="line" />

          <p>
            We do not simply create visualizations — we craft architectural
            experiences. Every material, lighting detail, texture, and
            composition is carefully refined to deliver realism, atmosphere, and
            spatial depth.
          </p>

          <p>
            Arc3D enables architects, developers, and clients to explore future
            spaces through cinematic architectural visualization and premium
            digital presentation workflows.
          </p>

          <p>
            This is more than rendering. It is architecture transformed into
            immersive visual storytelling through modern design and advanced
            spatial visualization.
          </p>

          <button
            className="navItem"
            onClick={() => {
              window.location.href = "/about";
            }}
          >
            Explore Spatial Engine
            <span>→</span>
          </button>
        </div>
      </div>

      {/* CSS */}
      <style jsx>{`
        .intro {
          position: relative;
          overflow: hidden;

          background:
            radial-gradient(
              circle at top,
              rgba(0, 0, 0, 0.04),
              transparent 45%
            ),
            linear-gradient(to bottom, #f8f6f2, #ffffff);

          padding: 140px 24px 80px;
        }

        /* AMBIENT LIGHTS */
        .ambient {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.5;
          pointer-events: none;
        }

        .ambient1 {
          width: 500px;
          height: 500px;
          background: rgba(0, 0, 0, 0.05);

          top: -100px;
          left: -120px;
        }

        .ambient2 {
          width: 400px;
          height: 400px;
          background: rgba(0, 0, 0, 0.03);

          bottom: -100px;
          right: -100px;
        }

        .container {
          position: relative;
          z-index: 2;

          max-width: 1300px;

          margin: auto;

          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 100px;
        }

        .reverse {
          flex-direction: row-reverse;
        }

        /* IMAGE AREA */
        .imageWrap {
          width: 50%;
          display: flex;
          justify-content: center;
          position: relative;
        }

        .frame {
          position: relative;
        }

        .blob {
          width: 520px;
          height: 650px;

          overflow: hidden;

          border-radius: 34px;

          background: #ddd;

          box-shadow:
            0 100px 240px rgba(0, 0, 0, 0.14),
            inset 0 1px 0 rgba(255, 255, 255, 0.6);

          transition:
            transform 0.8s ease,
            box-shadow 0.8s ease;
        }

        .blob2 {
          transform: rotate(-2deg);
        }

        .blob img {
          width: 100%;
          height: 100%;
          object-fit: cover;

          transition: transform 1.5s ease;
        }

        .imageWrap:hover .blob {
          transform: translateY(-12px) scale(1.02);
          box-shadow:
            0 120px 280px rgba(0, 0, 0, 0.18),
            inset 0 1px 0 rgba(255, 255, 255, 0.7);
        }

        .imageWrap:hover img {
          transform: scale(1.08);
        }

        /* GLASS CARD */
        .glassCard {
          position: absolute;

          top: 30px;
          left: -40px;

          z-index: 10;

          padding: 18px 24px;

          border-radius: 20px;

          background: rgba(255, 255, 255, 0.6);

          backdrop-filter: blur(14px);

          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.08);

          border: 1px solid rgba(255, 255, 255, 0.4);
        }

        .glassCard.right {
          left: auto;
          right: -40px;
        }

        .glassCard span {
          font-size: 11px;
          letter-spacing: 0.24em;
          color: rgba(0, 0, 0, 0.65);
        }

        /* FLOATING ELEMENTS */
        .floating {
          position: absolute;
          border-radius: 50%;

          backdrop-filter: blur(10px);

          background: rgba(255, 255, 255, 0.3);

          border: 1px solid rgba(255, 255, 255, 0.4);

          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.08);
        }

        .floating1 {
          width: 120px;
          height: 120px;

          top: 12%;
          right: -50px;
        }

        .floating2 {
          width: 60px;
          height: 60px;

          bottom: 12%;
          left: -30px;
        }

        .floating3 {
          width: 90px;
          height: 90px;

          top: 18%;
          left: -40px;
        }

        .floating4 {
          width: 150px;
          height: 150px;

          bottom: 8%;
          right: -60px;
        }

        /* TEXT */
        .textWrap {
          width: 50%;
        }

        .miniTag {
          font-size: 11px;
          letter-spacing: 0.28em;
          text-transform: uppercase;

          color: rgba(0, 0, 0, 0.45);

          margin-bottom: 24px;
        }

        h2 {
          font-size: 68px;
          font-weight: 900;

          line-height: 0.95;

          letter-spacing: -0.07em;

          color: #0a0a0a;
        }

        .line {
          width: 120px;
          height: 1px;

          background: rgba(0, 0, 0, 0.15);

          margin: 36px 0;
        }

        p {
          font-size: 16px;
          line-height: 2;

          color: rgba(0, 0, 0, 0.65);

          margin-top: 18px;

          max-width: 620px;
        }

        /* STATS */
        .stats {
          display: flex;
          gap: 20px;

          margin-top: 40px;

          flex-wrap: wrap;
        }

        .statCard {
          padding: 24px;

          min-width: 170px;

          border-radius: 24px;

          background: rgba(255, 255, 255, 0.7);

          backdrop-filter: blur(14px);

          border: 1px solid rgba(255, 255, 255, 0.6);

          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.06);
        }

        .statCard h3 {
          font-size: 26px;
          color: #0a0a0a;
          margin-bottom: 8px;
        }

        .statCard span {
          font-size: 12px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(0, 0, 0, 0.5);
        }

        button {
          margin-top: 42px;

          display: flex;
          align-items: center;
          gap: 14px;

          padding: 18px 28px;

          border: none;

          border-radius: 999px;

          background: #0a0a0a;

          color: white;

          font-size: 13px;
          letter-spacing: 0.14em;
          text-transform: uppercase;

          cursor: pointer;

          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.18);

          transition: all 0.35s ease;
        }

        button:hover {
          transform: translateY(-6px);
          gap: 18px;
        }

        button span {
          font-size: 18px;
        }

        .spacer {
          height: 180px;
        }

        /* RESPONSIVE */
        @media (max-width: 1100px) {
          .container {
            flex-direction: column;
            gap: 70px;
          }

          .imageWrap,
          .textWrap {
            width: 100%;
          }

          .blob {
            width: 100%;
            height: 520px;
          }

          h2 {
            font-size: 48px;
          }
        }

        @media (max-width: 700px) {
          .intro {
            padding: 100px 20px 60px;
          }

          h2 {
            font-size: 38px;
          }

          .blob {
            height: 420px;
          }

          .stats {
            flex-direction: column;
          }

          .glassCard {
            left: 20px;
            right: 20px;
            top: 20px;
          }
        }
      `}</style>
    </section>
  );
}
