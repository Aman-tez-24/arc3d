"use client";

export default function IntroSection() {
  return (
    <section className="intro">
      {/* SECTION 1 */}
      <div className="container">
        {/* IMAGE */}
        <div className="imageWrap">
          <div className="blob">
            <img src="/images/hero.jpg" alt="architectural visualization" />
          </div>
        </div>

        {/* TEXT */}
        <div className="textWrap">
          <h2>Designing Spaces that Think, Flow, and Live Beyond Blueprints</h2>

          <p>
            At Arc3D, we transform imagination into immersive architectural
            reality. Every structure begins as a thought — we refine it into a
            spatial experience shaped by light, proportion, and purpose.
          </p>

          <p>
            Our approach blends design intelligence with advanced 3D
            visualization, allowing architects and clients to experience spaces
            before they are built. Precision meets creativity at every stage.
          </p>

          <p>
            From concept sketches to fully interactive 3D environments, we
            redefine how architecture is visualized, evaluated, and experienced
            in the modern world.
          </p>
        </div>
      </div>

      <div className="spacer" />

      {/* SECTION 2 */}
      <div className="container reverse">
        {/* IMAGE */}
        <div className="imageWrap">
          <div className="blob blob2">
            <img src="/images/hero.jpg" alt="luxury architectural design" />
          </div>
        </div>

        {/* TEXT */}
        <div className="textWrap">
          <h2>Where Digital Craft Meets Architectural Precision</h2>

          <p>
            We don’t just build 3D models — we craft spatial narratives. Every
            curve, material, and shadow is tuned to reflect real-world physics
            and emotional design intent.
          </p>

          <p>
            Arc3D empowers architects, builders, and visionaries to explore
            their ideas in fully interactive environments before a single brick
            is laid.
          </p>

          <p>
            This is not visualization. This is architectural intelligence —
            rendered, refined, and ready for reality.
          </p>
        </div>
      </div>

      {/* CSS */}
      <style jsx>{`
        .intro {
          background:
            radial-gradient(
              circle at top,
              rgba(0, 0, 0, 0.03),
              transparent 40%
            ),
            #ffffff;
          padding: 100px 10px 40px 10px;
        }

        .container {
          max-width: 1200px;
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 90px;
        }

        .reverse {
          flex-direction: row-reverse;
        }

        /* ✅ TRUE VERTICAL CENTERING FIX */
        .imageWrap {
          width: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          position: relative;
        }

        .blob {
          width: 420px;
          height: 520px;
          overflow: hidden;

          clip-path: path(
            "M 90 0 C 40 10, 10 40, 0 90 C -10 160, 40 220, 90 240 C 180 280, 260 240, 300 180 C 340 120, 320 40, 260 10 C 200 -10, 150 -10, 90 0 Z"
          );

          box-shadow: 0 50px 140px rgba(0, 0, 0, 0.12);
          transition:
            transform 0.6s ease,
            box-shadow 0.6s ease;
        }

        .blob2 {
          clip-path: path(
            "M 120 0 C 60 20, 20 60, 0 120 C -20 200, 40 260, 120 280 C 220 300, 300 260, 340 200 C 380 140, 360 60, 300 20 C 240 -10, 180 -10, 120 0 Z"
          );
        }

        .blob img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(1.08);
        }

        .imageWrap:hover .blob {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 70px 180px rgba(0, 0, 0, 0.18);
        }

        .textWrap {
          width: 50%;
        }

        h2 {
          font-size: 44px;
          font-weight: 800;
          line-height: 1.05;
          margin-bottom: 22px;
          color: #0a0a0a;
          letter-spacing: -0.6px;
        }

        p {
          font-size: 15px;
          line-height: 1.9;
          color: rgba(0, 0, 0, 0.65);
          margin-top: 16px;
          max-width: 540px;
        }

        .spacer {
          height: 90px;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .container {
            flex-direction: column;
            gap: 50px;
          }

          .imageWrap,
          .textWrap {
            width: 100%;
          }

          .blob {
            width: 100%;
            height: 420px;
          }

          h2 {
            font-size: 32px;
          }
        }
      `}</style>
    </section>
  );
}
