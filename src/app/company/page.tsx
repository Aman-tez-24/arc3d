import Script from "next/script";
import CompanyClient from "./CompanyClient";

export const metadata = {
  title: "Arc3D Company | Innovation in Architectural Visualization",
  description:
    "Discover Arc3D's mission, values, and approach to creating immersive architectural environments through advanced visualization and design workflows.",
  alternates: {
    canonical: "https://arc3d.in/company",
  },
};

export default function Page() {
  const companySchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Arc3D",
    url: "https://arc3d.in/company",
  };

  return (
    <>
      <Script
        id="company-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(companySchema),
        }}
      />

      <CompanyClient />
    </>
  );
}
