import Script from "next/script";
import ContactClient from "./ContactClient";

export const metadata = {
  title: "Contact Arc3D",
  description:
    "Contact Arc3D for project inquiries, architectural visualization services, partnerships, support, and collaboration opportunities.",
  alternates: {
    canonical: "https://arc3d.in/contact",
  },
};

export default function Page() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Arc3D",
    url: "https://arc3d.in/contact",
  };

  return (
    <>
      <Script
        id="contact-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactSchema),
        }}
      />

      <ContactClient />
    </>
  );
}
