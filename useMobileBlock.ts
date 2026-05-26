"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function useMobileBlock() {
  const router = useRouter();

  useEffect(() => {
    const check = () => {
      if (window.innerWidth < 768) {
        router.push("/mobile-block");
      }
    };

    check();
    window.addEventListener("resize", check);

    return () => window.removeEventListener("resize", check);
  }, [router]);
}