"use client";

import "./globals.css";
import { usePathname } from "next/navigation";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ZoomBlocker from "../components/ZoomBlocker";
import Cursor from "../components/Cursor";
import { AuthProvider } from "@/context/AuthContext";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const hideLayoutRoutes = [
    "/signin",
    "/projects",
    "/slidebar/2d-3d",
    "/slidebar/floor-planning",
    "/slidebar/demo",
    "/profile",
    "/settings",
    "/slidebar/mywork",
  ];

  const hideLayout = hideLayoutRoutes.some((route) =>
    pathname.startsWith(route),
  );

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
