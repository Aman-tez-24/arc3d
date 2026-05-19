"use client";

import { useEffect } from "react";

export default function ZoomBlocker() {
  useEffect(() => {
    // Block Ctrl + wheel zoom
    const handleWheel = (e: WheelEvent) => {
      if (e.ctrlKey) {
        e.preventDefault();
      }
    };

    // Block keyboard zoom shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey || e.metaKey) &&
        ["+", "-", "=", "0"].includes(e.key)
      ) {
        e.preventDefault();
      }
    };

    // Block gesture zoom (trackpads)
    const preventGesture = (e: any) => {
      e.preventDefault();
    };

    document.addEventListener("wheel", handleWheel, { passive: false });
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("gesturestart", preventGesture);
    document.addEventListener("gesturechange", preventGesture);

    return () => {
      document.removeEventListener("wheel", handleWheel);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("gesturestart", preventGesture);
      document.removeEventListener("gesturechange", preventGesture);
    };
  }, []);

  return null;
}