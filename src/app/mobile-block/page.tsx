"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Monitor, Smartphone, Sparkles } from "lucide-react";

export default function MobileBlockPage() {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

      if (!mobile) {
        router.replace("/projects");
      }
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => window.removeEventListener("resize", checkDevice);
  }, [router]);

  if (!isMobile) return null;

  return (
    <section className="blockPage">
      <div className="orb orb1" />
      <div className="orb orb2" />
      <div className="gridOverlay" />

      <div className="card">
        <div className="iconBox">
          <Smartphone size={28} />
        </div>

        <h1>Desktop Experience Required</h1>

        <p>
          Arc3D is designed for immersive architectural visualization, cinematic
          rendering, and advanced 3D workflows.
          <br />
          Please use a larger screen for the best experience.
        </p>

        <div className="divider" />

        <div className="features">
          <div className="feature">
            <Monitor size={16} />
            <span>High-Precision 3D Tools</span>
          </div>

          <div className="feature">
            <Sparkles size={16} />
            <span>Cinematic Rendering Engine</span>
          </div>

          <div className="feature">
            <Monitor size={16} />
            <span>Professional Workspace</span>
          </div>
        </div>

        <div className="badge">Arc3D System Notice</div>
      </div>

      <style jsx>{`
        .blockPage {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;

          background: linear-gradient(
            180deg,
            #f8f6f1 0%,
            #f2efe8 50%,
            #ebe5da 100%
          );

          color: #111;
          text-align: center;
          padding: 20px;
        }

        /* BACKGROUND ORBS (same as your site style) */
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
          background: rgba(255, 255, 255, 0.8);
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

          opacity: 0.35;

          mask-image: radial-gradient(circle at center, black, transparent 85%);
        }

        /* CARD */
        .card {
          position: relative;
          z-index: 2;

          max-width: 520px;
          padding: 46px 42px;
          border-radius: 34px;

          background: rgba(255, 255, 255, 0.55);
          backdrop-filter: blur(24px);

          border: 1px solid rgba(255, 255, 255, 0.75);

          box-shadow:
            0 40px 120px rgba(0, 0, 0, 0.06),
            inset 0 1px 0 rgba(255, 255, 255, 0.9);

          animation: fadeIn 0.6s ease;
        }

        .iconBox {
          width: 64px;
          height: 64px;

          margin: 0 auto 18px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 18px;

          background: rgba(255, 255, 255, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.9);

          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.05);
        }

        h1 {
          font-size: 26px;
          font-weight: 900;
          letter-spacing: -1px;
          margin-bottom: 14px;
        }

        p {
          font-size: 14px;
          line-height: 1.9;
          color: rgba(0, 0, 0, 0.62);
        }

        .divider {
          height: 1px;
          background: rgba(0, 0, 0, 0.08);
          margin: 26px 0;
        }

        .features {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 24px;
        }

        .feature {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;

          font-size: 13px;
          color: rgba(0, 0, 0, 0.7);
        }

        .badge {
          display: inline-block;
          padding: 8px 14px;
          border-radius: 999px;

          font-size: 11px;
          letter-spacing: 0.2em;

          background: rgba(255, 255, 255, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.9);

          color: rgba(0, 0, 0, 0.5);
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(18px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </section>
  );
}
