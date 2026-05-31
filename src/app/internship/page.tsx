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
  return <InternshipClient />;
}
