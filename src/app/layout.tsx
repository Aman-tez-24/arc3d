import "./globals.css";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ZoomBlocker from "../components/ZoomBlocker";
import Cursor from "../components/Cursor";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </head>

      <body className="bg-black text-white overflow-x-hidden">
        <ZoomBlocker />
        <Cursor />

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
