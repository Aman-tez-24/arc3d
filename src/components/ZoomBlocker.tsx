"use client";

import { useEffect } from "react";

export default function ZoomBlocker() {
  useEffect(() => {
    const preventZoom = (e: WheelEvent) => {
      if (e.ctrlKey) e.preventDefault();
    };

    const preventKeys = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey && (e.key === "+" || e.key === "-" || e.key === "0")) ||
        (e.metaKey && (e.key === "+" || e.key === "-" || e.key === "0"))
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("wheel", preventZoom, { passive: false });
    document.addEventListener("keydown", preventKeys);

    return () => {
      document.removeEventListener("wheel", preventZoom);
      document.removeEventListener("keydown", preventKeys);
    };
  }, []);

  return null;
}
