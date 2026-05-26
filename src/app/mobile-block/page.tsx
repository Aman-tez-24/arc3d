"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function MobileBlockPage() {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

      // if not mobile, send back to app
      if (!mobile) {
        router.replace("/projects");
      }
    };

    checkDevice();

    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, [router]);

  // ❌ disable right click
  useEffect(() => {
    const disableRightClick = (e: MouseEvent) => e.preventDefault();
    document.addEventListener("contextmenu", disableRightClick);

    return () => document.removeEventListener("contextmenu", disableRightClick);
  }, []);

  // ❌ block dev shortcuts (best effort only)
  useEffect(() => {
    const blockKeys = (e: KeyboardEvent) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "i") ||
        (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "j") ||
        (e.ctrlKey && e.key.toLowerCase() === "u")
      ) {
        e.preventDefault();
        return false;
      }
    };

    window.addEventListener("keydown", blockKeys);

    return () => window.removeEventListener("keydown", blockKeys);
  }, []);

  if (!isMobile) return null;

  return (
    <section className="blockPage">
      <div className="card">
        <h1>Desktop Required</h1>

        <p>
          Arc3D is built for immersive 3D architectural experiences and requires
          a larger screen for full performance and visualization.
        </p>

        <div className="icon">💻</div>

        <h2>Please use a Laptop / PC</h2>

        <p className="sub">Recommended: Chrome or Edge on Windows / macOS</p>

        <div className="badge">Arc3D System Locked</div>
      </div>

      <style jsx>{`
        .blockPage {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;

          background: radial-gradient(circle at top, #0a0a0a, #000);
          color: white;
          text-align: center;
          padding: 20px;
        }

        .card {
          max-width: 460px;
          padding: 44px;
          border-radius: 26px;

          background: rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(25px);

          border: 1px solid rgba(255, 255, 255, 0.12);

          box-shadow: 0 50px 150px rgba(0, 0, 0, 0.6);

          animation: fadeIn 0.6s ease;
        }

        h1 {
          font-size: 34px;
          margin-bottom: 10px;
          letter-spacing: -0.5px;
        }

        p {
          font-size: 14px;
          opacity: 0.85;
          line-height: 1.7;
        }

        .icon {
          font-size: 64px;
          margin: 22px 0;
        }

        h2 {
          font-size: 18px;
          margin-top: 10px;
        }

        .sub {
          margin-top: 10px;
          font-size: 12px;
          opacity: 0.6;
        }

        .badge {
          margin-top: 18px;
          display: inline-block;
          padding: 8px 14px;
          border-radius: 999px;

          font-size: 11px;
          letter-spacing: 1px;

          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}
