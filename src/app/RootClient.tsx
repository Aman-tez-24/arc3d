"use client";

import "./globals.css";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ZoomBlocker from "../components/ZoomBlocker";
import Cursor from "../components/Cursor";
import { AuthProvider } from "@/context/AuthContext";
import { useMobileBlock } from "@/hooks/useMobileBlock";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const hideLayoutRoutes = [
    "/signin",
    "/projects",
    "/slidebar/2d-3d",
    "/slidebar/floor-planning",
    "/slidebar/demo",
    "/profile",
    "/settings",
    "/slidebar/mywork",
    "/mobile-block",
  ];

  const hideLayout = hideLayoutRoutes.some((route) =>
    pathname.startsWith(route),
  );

  useMobileBlock();

  // =========================
  // 🚫 DISABLE RIGHT CLICK
  // =========================
  useEffect(() => {
    let isBlocked = false;

    const threshold = 160;

    const blockApp = () => {
      if (isBlocked) return;
      isBlocked = true;

      // freeze UI
      document.body.style.overflow = "hidden";

      const overlay = document.createElement("div");
      overlay.style.position = "fixed";
      overlay.style.top = "0";
      overlay.style.left = "0";
      overlay.style.width = "100vw";
      overlay.style.height = "100vh";
      overlay.style.background = "black";
      overlay.style.color = "white";
      overlay.style.display = "flex";
      overlay.style.alignItems = "center";
      overlay.style.justifyContent = "center";
      overlay.style.zIndex = "999999";
      overlay.style.fontSize = "18px";
      overlay.innerText = "DevTools detected. Access blocked.";

      document.body.appendChild(overlay);
    };

    const detect = () => {
      const widthDiff = window.outerWidth - window.innerWidth;
      const heightDiff = window.outerHeight - window.innerHeight;

      const devtoolsOpen = widthDiff > threshold || heightDiff > threshold;

      if (devtoolsOpen) {
        blockApp();
      }
    };

    // stronger detection interval
    const interval = setInterval(detect, 500);

    return () => clearInterval(interval);
  }, []);

  setInterval(() => {
    const start = performance.now();
    debugger;
    const end = performance.now();

    if (end - start > 100) {
      document.body.innerHTML = "Blocked";
    }
  }, 1000);

  useEffect(() => {
    const block = (e: Event) => e.preventDefault();

    document.addEventListener("copy", block);
    document.addEventListener("cut", block);
    document.addEventListener("paste", block);
    document.addEventListener("selectstart", block);

    return () => {
      document.removeEventListener("copy", block);
      document.removeEventListener("cut", block);
      document.removeEventListener("paste", block);
      document.removeEventListener("selectstart", block);
    };
  }, []);
  useEffect(() => {
    const blockAllRightClick = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    window.addEventListener("contextmenu", blockAllRightClick, true);
    document.addEventListener("contextmenu", blockAllRightClick, true);

    return () => {
      window.removeEventListener("contextmenu", blockAllRightClick, true);
      document.removeEventListener("contextmenu", blockAllRightClick, true);
    };
  }, []);
  // =========================
  // 🚫 BLOCK DEVTOOLS SHORTCUTS
  // =========================
  useEffect(() => {
    const blockKeys = (e: KeyboardEvent) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) ||
        (e.ctrlKey && e.key.toLowerCase() === "u")
      ) {
        e.preventDefault();
        return false;
      }
    };

    window.addEventListener("keydown", blockKeys);

    return () => window.removeEventListener("keydown", blockKeys);
  }, []);

  // =========================
  // 🚨 DETECT DEVTOOLS OPEN (basic trick)
  // =========================
  useEffect(() => {
    let devtools = false;

    const threshold = 160;

    const detectDevTools = () => {
      const widthDiff = window.outerWidth - window.innerWidth;
      const heightDiff = window.outerHeight - window.innerHeight;

      if (widthDiff > threshold || heightDiff > threshold) {
        if (!devtools) {
          devtools = true;

          // optional action
          console.clear();
          alert("DevTools detected. Access restricted.");

          router.push("/mobile-block"); // or show blank screen
        }
      } else {
        devtools = false;
      }
    };

    const interval = setInterval(detectDevTools, 1000);

    return () => clearInterval(interval);
  }, [router]);

  return (
    <html lang="en">
      <body className="appBody">
        <AuthProvider>
          <ZoomBlocker />
          <Cursor />

          {!hideLayout && <Navbar />}

          <main>{children}</main>

          {!hideLayout && <Footer />}
        </AuthProvider>
      </body>
    </html>
  );
}
