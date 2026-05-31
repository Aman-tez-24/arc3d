import PrivacyClient from "./PrivacyClient";

export const metadata = {
  title: "Privacy Policy | Arc3D",
  description:
    "Read Arc3D's Privacy Policy regarding project confidentiality, data protection, information security, and responsible handling of client and project information.",
  alternates: {
    canonical: "https://arc3d.in/docsSection/privacy",
  },
};

export default function Page() {
  return <PrivacyClient />;
}
