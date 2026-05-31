import TermsClient from "./TermsClient";

export const metadata = {
  title: "Terms & Conditions | Arc3D",
  description:
    "Review Arc3D's Terms and Conditions governing platform usage, project submissions, internship participation, intellectual property, and service policies.",
  alternates: {
    canonical: "https://arc3d.in/docsSection/terms",
  },
};

export default function Page() {
  return <TermsClient />;
}
