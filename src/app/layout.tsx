"use client";

import "./globals.css";
import { usePathname } from "next/navigation";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ZoomBlocker from "../components/ZoomBlocker";
import Cursor from "../components/Cursor";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isAuthPage = pathname === "/signin";

  return (
    <html lang="en">
      <body className="appBody">
        <ZoomBlocker />
        <Cursor />

        {/* NAVBAR ONLY IF NOT AUTH PAGE */}
        {!isAuthPage && <Navbar />}

        <main>{children}</main>

        {/* FOOTER ONLY IF NOT AUTH PAGE */}
        {!isAuthPage && <Footer />}
      </body>
    </html>
  );
}
