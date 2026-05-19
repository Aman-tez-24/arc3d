"use client";

import { useEffect, useState } from "react";

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hideRing, setHideRing] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });

      // detect element under cursor
      const el = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement;

      if (!el) return;

      const cursorStyle = window.getComputedStyle(el).cursor;

      // hide ring for interactive cursors
      const shouldHide =
        cursorStyle === "pointer" ||
        cursorStyle === "text" ||
        cursorStyle === "grab" ||
        cursorStyle === "grabbing" ||
        cursorStyle === "not-allowed";

      setHideRing(shouldHide);
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* RING */}
      <div
        className={`cursor-ring ${hideRing ? "hidden" : ""}`}
        style={{
          transform: `translate(${pos.x}px, ${pos.y}px)`,
        }}
      />

      {/* DOT */}
      <div
        className="cursor-dot"
        style={{
          transform: `translate(${pos.x}px, ${pos.y}px)`,
        }}
      />

      <style jsx>{`
        :global(body) {
          cursor: none;
        }

        .cursor-ring {
          position: fixed;
          top: 0;
          left: 0;

          width: 34px;
          height: 34px;

          border: 1.5px solid rgba(255, 255, 255, 0.75);
          border-radius: 50%;

          pointer-events: none;
          transform: translate(-50%, -50%);
          transition:
            opacity 0.2s ease,
            transform 0.08s linear;

          z-index: 9999;
          mix-blend-mode: difference;
        }

        .cursor-ring.hidden {
          opacity: 0;
          transform: translate(-50%, -50%) scale(0.6);
        }

        .cursor-dot {
          position: fixed;
          top: 14;
          left: 14;

          width: 6px;
          height: 6px;

          background: #ffffff;
          border-radius: 50%;

          pointer-events: none;
          transform: translate(-50%, -50%);

          z-index: 10000;
          mix-blend-mode: difference;
        }

        /* disable on mobile */
        @media (max-width: 768px) {
          :global(body) {
            cursor: auto;
          }

          .cursor-ring,
          .cursor-dot {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
