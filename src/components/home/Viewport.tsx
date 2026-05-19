"use client";

export default function Viewport() {
  return (
    <section className="viewport">
      {/* HEADER */}
      <div className="header">
        <h2>Interactive 3D Viewport</h2>
        <p>
          Explore architectural models in real-time. Rotate, zoom, and inspect
          every detail with precision — just like a real design review room.
        </p>
      </div>

      {/* VIEWPORT FRAME */}
      <div className="frame">
        <div className="canvasArea">
          {/* Placeholder for 3D canvas (Three.js / R3F later) */}
          <div className="placeholder">
            <div className="glow" />
            <h3>3D Model Loading Space</h3>
            <p>Connect your Three.js / React Three Fiber scene here</p>
          </div>
        </div>

        {/* UI HINTS */}
        <div className="controlsHint">
          <span>Drag → Rotate</span>
          <span>Scroll → Zoom</span>
          <span>Right Click → Pan</span>
        </div>
      </div>

      {/* CSS */}
      <style jsx>{`
        .viewport {
          background:
            radial-gradient(
              circle at top,
              rgba(0, 0, 0, 0.04),
              transparent 50%
            ),
            #ffffff;
          padding: 140px 20px;
        }

        /* HEADER */
        .header {
          max-width: 900px;
          margin: auto;
          text-align: center;
          margin-bottom: 70px;
        }

        .header h2 {
          font-size: 52px;
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

        /* FRAME (IMPORTANT LUXURY LAYER) */
        .frame {
          max-width: 1200px;
          margin: auto;
          position: relative;
        }

        .canvasArea {
          height: 650px;
          border-radius: 30px;

          background: linear-gradient(135deg, #f6f3ee, #ffffff);
          box-shadow: 0 80px 200px rgba(0, 0, 0, 0.12);

          overflow: hidden;
          position: relative;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* GLOW DEPTH */
        .glow {
          position: absolute;
          width: 500px;
          height: 500px;
          background: radial-gradient(
            circle,
            rgba(0, 0, 0, 0.08),
            transparent 60%
          );
          filter: blur(60px);
          opacity: 0.5;
        }

        /* PLACEHOLDER */
        .placeholder {
          text-align: center;
          z-index: 2;
        }

        .placeholder h3 {
          font-size: 24px;
          font-weight: 700;
          color: #0a0a0a;
          margin-bottom: 10px;
        }

        .placeholder p {
          font-size: 14px;
          color: rgba(0, 0, 0, 0.6);
        }

        /* CONTROLS HINT */
        .controlsHint {
          position: absolute;
          bottom: 18px;
          left: 50%;
          transform: translateX(-50%);

          display: flex;
          gap: 18px;

          font-size: 12px;
          color: rgba(0, 0, 0, 0.55);

          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(10px);

          padding: 10px 16px;
          border-radius: 999px;

          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .header h2 {
            font-size: 34px;
          }

          .canvasArea {
            height: 420px;
            border-radius: 22px;
          }

          .controlsHint {
            flex-direction: column;
            gap: 6px;
            font-size: 11px;
            bottom: 10px;
          }
        }
      `}</style>
    </section>
  );
}
