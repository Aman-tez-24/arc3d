import Script from "next/script";
import InternshipClient from "./InternshipClient";

export const metadata = {
  title: "Internships at Arc3D",
  description:
    "Explore internship opportunities at Arc3D and gain practical experience in architectural visualization, digital design workflows, project coordination, and creative development.",
  alternates: {
    canonical: "https://arc3d.in/internship",
  },
};

export default function Page() {
  const internshipSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Arc3D Internship Program",
    url: "https://arc3d.in/internship",
  };

  return (
    <>
      <Script
        id="internship-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(internshipSchema),
        }}
      />

      <InternshipClient />
    </>
  );
}
