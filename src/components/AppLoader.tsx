"use client";

import { useEffect, useState } from "react";
import Loader from "./Loader";

export default function AppLoader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const images = [
      "/images/hero.jpg",
      "/images/about.jpg",
      "/images/services/2d-3d-arc-design.png",
      "/images/services/floor-planning.png",
      "/images/services/visualization-rendering.png",
    ];

    Promise.all(
      images.map(
        (src) =>
          new Promise((resolve) => {
            const img = new Image();

            img.src = src;

            img.onload = () => resolve(true);
            img.onerror = () => resolve(true);
          }),
      ),
    ).then(() => {
      setTimeout(() => {
        setLoading(false);
      }, 800);
    });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return <>{children}</>;
}
