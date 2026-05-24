"use client";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";
export default function Workflow() {
  const router = useRouter();
  return (
    <section className="workflow">
      {/* BACKGROUND */}
      <div className="bg" />

      {/* HEADER */}
      <div className="header">
        <h2>From Idea to Built Reality</h2>
        <p>
          A precision-driven workflow that transforms architectural intent into
          immersive, build-ready 3D environments.
        </p>
      </div>

      {/* FLOW */}
      <div className="flow">
        <div className="line" />

        {/* STEP 1 */}
        <div className="step left">
          <div className="node">01</div>
          <div className="card">
            <div className="meta">Concept Phase</div>
            <h3>Understanding the Idea</h3>
            <p>
              We analyze sketches, references, and requirements to extract the
              core architectural intent.
            </p>
          </div>
        </div>

        {/* STEP 2 */}
        <div className="step right">
          <div className="node">02</div>
          <div className="card">
            <div className="meta">Structure Phase</div>
            <h3>Spatial Mapping</h3>
            <p>
              Ideas are translated into structured layouts with correct flow,
              proportions, and balance.
            </p>
          </div>
        </div>

        {/* STEP 3 */}
        <div className="step left">
          <div className="node">03</div>
          <div className="card">
            <div className="meta">3D Phase</div>
            <h3>Environment Creation</h3>
            <p>
              We build accurate 3D environments with materials, lighting, and
              spatial realism.
            </p>
          </div>
        </div>

        {/* STEP 4 */}
        <div className="step right">
          <div className="node">04</div>
          <div className="card">
            <div className="meta">Final Phase</div>
            <h3>Cinematic Visualization</h3>
            <p>
              Final renders and walkthroughs ready for presentation and
              execution.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta">
        <h3>Ready to bring your vision to life?</h3>
        <p>Start your architectural transformation in minutes.</p>

        <button
          className="btn"
          onClick={() => {
            if (auth.currentUser) {
              router.push("/projects");
            } else {
              router.push("/signin");
            }
          }}
        >
          Get Started
        </button>
      </div>

      {/* CSS */}
      <style jsx>{`
        .workflow {
          position: relative;
          padding: 160px 20px 120px;
          background: #ffffff;
          overflow: hidden;
        }

        .bg {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at top,
            rgba(0, 0, 0, 0.04),
            transparent 55%
          );
          pointer-events: none;
        }

        /* HEADER */
        .header {
          text-align: center;
          max-width: 900px;
          margin: auto;
          margin-bottom: 110px;
        }

        .header h2 {
          font-size: 56px;
          font-weight: 850;
          letter-spacing: -1px;
          color: #0a0a0a;
        }

        .header p {
          margin-top: 14px;
          font-size: 15.5px;
          line-height: 1.9;
          color: rgba(0, 0, 0, 0.65);
        }

        /* FLOW */
        .flow {
          max-width: 1000px;
          margin: auto;
          position: relative;
        }

        .line {
          position: absolute;
          left: 50%;
          top: 0;
          transform: translateX(-50%);
          width: 2px;
          height: 100%;
          background: linear-gradient(
            to bottom,
            transparent,
            rgba(0, 0, 0, 0.25),
            transparent
          );
        }

        .step {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 120px 0;
          position: relative;
        }

        .left {
          flex-direction: row;
        }

        .right {
          flex-direction: row-reverse;
        }

        .node {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: #d8ccb0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          box-shadow: 0 50px 140px rgba(0, 0, 0, 0.12);
          z-index: 2;
        }

        .card {
          width: 44%;
          background: linear-gradient(135deg, #f9f7f3, #ffffff);
          border-radius: 26px;
          padding: 30px 32px;
          box-shadow: 0 50px 140px rgba(0, 0, 0, 0.08);
        }

        .meta {
          font-size: 12px;
          letter-spacing: 1.8px;
          color: rgba(0, 0, 0, 0.45);
          margin-bottom: 10px;
        }

        .card h3 {
          font-size: 22px;
          font-weight: 800;
          margin-bottom: 12px;
          color: rgba(0, 0, 0, 0.65);
        }

        .card p {
          font-size: 14.5px;
          line-height: 1.8;
          color: rgba(0, 0, 0, 0.65);
        }

        /* CTA SECTION */
        .cta {
          max-width: 900px;
          margin: 140px auto 0;
          text-align: center;

          padding: 70px 30px;
          border-radius: 30px;

          background: linear-gradient(135deg, #f6f3ee, #ffffff);
          box-shadow: 0 80px 200px rgba(0, 0, 0, 0.1);

          position: relative;
          overflow: hidden;
        }

        .cta::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at top,
            rgba(0, 0, 0, 0.06),
            transparent 60%
          );
        }

        .cta h3 {
          font-size: 30px;
          font-weight: 850;
          color: #0a0a0a;
          margin-bottom: 10px;
          position: relative;
        }

        .cta p {
          font-size: 15px;
          color: rgba(0, 0, 0, 0.65);
          margin-bottom: 30px;
          position: relative;
        }

        .btn {
          padding: 14px 34px;
          border-radius: 999px;
          border: none;
          cursor: pointer;

          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.5px;

          background: #0a0a0a;
          color: #ffffff;

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
          position: relative;
        }

        .btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.25);
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .step {
            flex-direction: column !important;
            align-items: flex-start;
            margin: 70px 0;
            padding-left: 50px;
          }

          .line {
            left: 24px;
          }

          .card {
            width: 100%;
            margin-top: 16px;
          }

          .header h2 {
            font-size: 34px;
          }

          .cta h3 {
            font-size: 22px;
          }
        }
      `}</style>
    </section>
  );
}
