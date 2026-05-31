import Hero from "@/components/home/Hero";
import IntroSection from "@/components/home/IntroSection";
import Showcase from "@/components/home/Showcase";
import Showbg from "@/components/home/Showbg";
import Services from "@/components/home/Services";
import Workflow from "@/components/home/Workflow";
import MorphingParticles from "@/components/home/MorphingParticles";
import ContactSection from "@/components/home/ContactSection";
import Reviews from "@/components/home/Reviews";
import Script from "next/script";

export const metadata = {
  title: "Arc3D | Architectural Visualization & 3D Design Platform",
  description:
    "Arc3D specializes in architectural visualization, 3D rendering, floor planning, digital architecture, and immersive design experiences for residential and commercial projects.",

  keywords: [
    "Arc3D",
    "arc3d",
    "arc 3d",
    "Arc 3d",
    "Arc",
    "Arc3d India",
    "arc 3d india",
    "arc3d india",
    "Arc3d in",
    "arc 3d in",
    "architectural visualization",
    "3D rendering",
    "3D architecture",
    "architectural rendering",
    "floor planning",
    "house visualization",
    "building visualization",
    "architectural design",
    "3D walkthrough",
    "interior visualization",
    "exterior rendering",
    "architectural studio",
    "photorealistic rendering",
    "architectural design",
    "digital architecture",
    "3D architecture",
    "3D house design",
    "3D building design",
    "residential architecture",
    "commercial architecture",
    "interior visualization",
    "exterior visualization",
    "architectural walkthrough",
    "virtual walkthrough",
    "3D floor plans",
    "floor planning",
    "house floor plan",
    "villa design",
    "modern house design",
    "architectural concepts",
    "real estate visualization",
    "property visualization",
    "architectural presentation",
    "3D modeling services",
    "building visualization",
    "construction visualization",
    "architectural studio",
    "architecture technology",
    "immersive architecture",
    "cinematic architectural rendering",
    "visualization platform",
    "architectural workflow",
    "design visualization",
    "architectural projects",
    "3D design platform",
  ],

  alternates: {
    canonical: "https://arc3d.in",
  },

  openGraph: {
    title: "Arc3D | Architectural Visualization & 3D Design Platform",
    description:
      "Professional architectural visualization, cinematic rendering, floor planning, and immersive digital architecture experiences.",
    url: "https://arc3d.in",
    siteName: "Arc3D",
    type: "website",
    images: [
      {
        url: "https://arc3d.in/logo/logo.png",
        width: 1200,
        height: 630,
        alt: "Arc3D",
      },
    ],
  },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Arc3D",
    url: "https://arc3d.in",
    logo: "https://arc3d.in/logo/logo.png",
    description:
      "Architectural visualization, floor planning, 3D rendering, and digital architecture services.",
  };

  return (
    <>
      <Script
        id="arc3d-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <main className="bg-[#f3f1eb] min-h-screen">
        <Hero />
        <IntroSection />
        <Showbg />
        <Showcase />
        <Services />
        <Workflow />
        <Reviews />
        <MorphingParticles />
        <ContactSection />
      </main>
    </>
  );
}
