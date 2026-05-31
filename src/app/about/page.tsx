import Script from "next/script";
import AboutClient from "./AboutClient";

export const metadata = {
  title: "About Arc3D",
  description:
    "Learn about Arc3D and our architectural visualization platform.",
  alternates: {
    canonical: "https://arc3d.in/about",
  },
};

export default function Page() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Arc3D",
    url: "https://arc3d.in/about",
  };

  return (
    <>
      <Script
        id="about-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutSchema),
        }}
      />

      <AboutClient />
    </>
  );
}
