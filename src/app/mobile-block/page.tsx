"use client";

import { useEffect, useState } from "react";

export default function MobileBlockPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth < 768);
    };

    check();
    window.addEventListener("resize", check);

    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section className="blockPage">
      <div className="card">
        <h1>Desktop Required</h1>

        <p>
          Arc3D is built for immersive 3D architectural experience which
          requires a larger screen.
        </p>

        <div className="icon">💻</div>

        <h2>Please open this on a laptop or PC</h2>
        <p className="sub">
          For best experience, use Chrome / Edge on desktop devices.
        </p>
      </div>

      <style jsx>{`
        .blockPage {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle at top, #1a1a1a, #000);
          color: white;
          text-align: center;
          padding: 20px;
        }

        .card {
          max-width: 420px;
          padding: 40px;
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 40px 120px rgba(0, 0, 0, 0.5);
        }

        h1 {
          font-size: 32px;
          margin-bottom: 10px;
        }

        p {
          font-size: 14px;
          opacity: 0.8;
          line-height: 1.6;
        }

        .icon {
          font-size: 60px;
          margin: 20px 0;
        }

        h2 {
          font-size: 18px;
          margin-top: 10px;
        }

        .sub {
          margin-top: 8px;
          font-size: 12px;
          opacity: 0.6;
        }
      `}</style>
    </section>
  );
}
