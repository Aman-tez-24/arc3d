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
  return <CompanyClient />;
}
