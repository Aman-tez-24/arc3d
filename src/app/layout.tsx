import "./globals.css";
import RootClient from "./RootClient";

export const metadata = {
  title: "Arc3D – Official Platform for 3D Architectural Visualization",
  description:
    "Arc3D (arc3d.in) is a next-generation architectural visualization platform for 3D rendering, floor planning, AI-based design generation, and cinematic real-time architectural walkthroughs. Explore immersive building design tools used by architects, designers, and creators worldwide.",
  icons: {
    icon: "/logo/favicon_io/favicon.ico", // main tab icon
    shortcut: "/logo/favicon_io/favicon.ico",
    apple: "/logo/favicon_io/favicon.ico",
  },
  keywords: [
    "Arc3D",
    "arc3d",
    "arc3d.in",
    "Arc 3D platform",
    "3D architecture software",
    "architectural visualization tool",
    "3D rendering platform",
    "AI architecture design",
    "floor planning software",
    "real-time 3D walkthrough",
    "architecture visualization India",
    "design automation tools",
    "3D building design platform",
  ],

  authors: [{ name: "Arc3D Team", url: "https://arc3d.in" }],

  creator: "Arc3D",
  publisher: "Arc3D",

  applicationName: "Arc3D",

  metadataBase: new URL("https://arc3d.in"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Arc3D – Immersive 3D Architectural Visualization Platform",
    description:
      "Arc3D is a powerful platform for architectural visualization, AI-powered floor planning, and cinematic 3D rendering experiences.",
    url: "https://arc3d.in",
    siteName: "Arc3D",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Arc3D Architectural Visualization Platform",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Arc3D – 3D Architecture Visualization Platform",
    description:
      "AI-powered architectural design, 3D rendering, and immersive visualization system.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="appBody">
        <RootClient>{children}</RootClient>
      </body>
    </html>
  );
}
