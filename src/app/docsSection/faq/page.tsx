"use client";

import Link from "next/link";

export default function FAQPage() {
  const faqs = [
    {
      question: "What services does Arc3D provide?",
      answer:
        "Arc3D specializes in cinematic architectural visualization including 2D to 3D conversion, custom floor planning, rendering, spatial presentation, and premium architectural visualization workflows.",
    },
    {
      question: "Do you provide realtime walkthrough systems?",
      answer:
        "No. Arc3D currently focuses on high-quality cinematic renders and architectural visualization experiences rather than realtime walkthrough environments.",
    },
    {
      question: "How does the project process work?",
      answer:
        "Clients submit floor plans, sketches, or project requirements. Our team manually analyzes the architecture, creates premium 3D environments, refines visual quality, and delivers the final rendered outputs.",
    },
    {
      question: "Can clients request modifications?",
      answer:
        "Yes. Clients can review previews during the workflow and request adjustments related to layout presentation, materials, lighting, atmosphere, and overall visual direction.",
    },
    {
      question: "Does Arc3D use AI systems?",
      answer:
        "Arc3D internally researches intelligent architectural workflows and AI-assisted systems, but current client projects are manually handled and refined by our visualization team.",
    },
    {
      question: "What files should clients provide?",
      answer:
        "Clients can provide 2D floor plans, sketches, dimensions, reference images, design inspirations, and architectural requirements to begin the visualization process.",
    },
    {
      question: "How long does a project take?",
      answer:
        "Project timelines depend on scale, complexity, revisions, and rendering requirements. Estimated timelines are shared after project analysis.",
    },
    {
      question: "How are final files delivered?",
      answer:
        "Final renders and project outputs are securely delivered digitally through the Arc3D workflow and client management system.",
    },
  ];

  return (
    <section className="page">
      {/* BACKGROUND */}
      <div className="orb orb1" />
      <div className="orb orb2" />
      <div className="gridOverlay" />
      <div className="noise" />

      {/* HERO */}
      <div className="hero">
        <div className="badge">
          <span className="dot" />
          ARC3D SUPPORT CENTER
        </div>

        <h1>
          Frequently Asked
          <br />
          Questions
        </h1>

        <p>
          Everything you need to know about Arc3D workflows, visualization
          systems, project delivery, architectural rendering, and client
          collaboration.
        </p>
      </div>

      {/* FAQ LIST */}
      <div className="faqWrapper">
        {faqs.map((faq, index) => (
          <div className="faqCard" key={index}>
            <div className="topLine" />

            <span className="index">
              {(index + 1).toString().padStart(2, "0")}
            </span>

            <h2>{faq.question}</h2>

            <p>{faq.answer}</p>
          </div>
        ))}
      </div>

      {/* SUPPORT SECTION */}
      <div className="supportBox">
        <span>NEED MORE HELP?</span>

        <h2>
          Our Team is Ready
          <br />
          to Assist You
        </h2>

        <p>
          If your question is not listed here, connect directly with Arc3D for
          project discussions, workflow guidance, visualization support, and
          architectural consultation.
        </p>

        <div className="supportActions">
          <Link href="/contact">
            <button>Contact Support</button>
          </Link>

          <Link href="/docsSection/process">
            <button className="ghost">View Process</button>
          </Link>
        </div>
      </div>

      {/* INFO */}
      <div className="infoGrid">
        <div className="infoCard">
          <h3>Project Workflow</h3>

          <p>
            Structured visualization pipeline from floor plans to cinematic
            architectural renders.
          </p>
        </div>

        <div className="infoCard">
          <h3>Client Communication</h3>

          <p>
            Transparent review process with revision support and collaborative
            feedback.
          </p>
        </div>

        <div className="infoCard">
          <h3>Premium Rendering</h3>

          <p>
            High-quality architectural visualization focused on realism,
            lighting, and presentation.
          </p>
        </div>
      </div>

      {/* FOOTER */}
      <div className="footer">
        <div className="footerLine" />

        <p>
          “Clarity creates confidence.
          <br />
          Every question leads to better architecture.”
        </p>
      </div>

      <style jsx>{`
        .page {
          position: relative;
          overflow: hidden;

          padding: 160px 24px;

          background:
            radial-gradient(
              circle at top left,
              rgba(255, 255, 255, 0.95),
              transparent 35%
            ),
            linear-gradient(180deg, #f8f6f1 0%, #f2efe8 40%, #ebe5da 100%);

          color: #111;
        }

        /* BACKGROUND */
        .orb {
          position: absolute;
          border-radius: 999px;
          filter: blur(120px);
          z-index: 0;
        }

        .orb1 {
          width: 520px;
          height: 520px;

          background: rgba(70, 90, 180, 0.12);

          top: -180px;
          left: -140px;
        }

        .orb2 {
          width: 420px;
          height: 420px;

          background: rgba(255, 255, 255, 0.7);

          right: -120px;
          bottom: -120px;
        }

        .gridOverlay {
          position: absolute;
          inset: 0;

          background-image:
            linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px);

          background-size: 70px 70px;

          opacity: 0.4;

          mask-image: radial-gradient(circle at center, black, transparent 85%);
        }

        .noise {
          position: absolute;
          inset: 0;

          opacity: 0.03;

          background-image:
            linear-gradient(rgba(0, 0, 0, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.4) 1px, transparent 1px);

          background-size: 140px 140px;
        }

        /* HERO */
        .hero {
          position: relative;
          z-index: 2;

          max-width: 980px;
          margin: auto;

          text-align: center;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;

          padding: 12px 20px;
          border-radius: 999px;

          background: rgba(255, 255, 255, 0.55);
          backdrop-filter: blur(20px);

          border: 1px solid rgba(255, 255, 255, 0.8);

          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.32em;

          color: rgba(0, 0, 0, 0.55);

          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.05);
        }

        .dot {
          width: 8px;
          height: 8px;

          border-radius: 999px;

          background: #111;
        }

        .hero h1 {
          margin-top: 34px;

          font-size: clamp(56px, 8vw, 110px);
          line-height: 0.92;
          letter-spacing: -4px;
          font-weight: 900;
        }

        .hero p {
          margin: 34px auto 0;

          max-width: 760px;

          font-size: 16px;
          line-height: 2;

          color: rgba(0, 0, 0, 0.62);
        }

        /* FAQ */
        .faqWrapper {
          position: relative;
          z-index: 2;

          max-width: 1100px;
          margin: 120px auto 0;

          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .faqCard {
          padding: 42px;

          border-radius: 34px;

          background: rgba(255, 255, 255, 0.52);
          backdrop-filter: blur(24px);

          border: 1px solid rgba(255, 255, 255, 0.75);

          box-shadow:
            0 30px 100px rgba(0, 0, 0, 0.05),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);
        }

        .topLine {
          width: 70px;
          height: 1px;

          background: rgba(0, 0, 0, 0.2);

          margin-bottom: 24px;
        }

        .index {
          font-size: 11px;
          letter-spacing: 0.3em;

          color: rgba(0, 0, 0, 0.4);
        }

        .faqCard h2 {
          margin-top: 18px;

          font-size: 30px;
          line-height: 1.1;
          letter-spacing: -1.5px;
          font-weight: 800;
        }

        .faqCard p {
          margin-top: 18px;

          font-size: 15px;
          line-height: 1.9;

          color: rgba(0, 0, 0, 0.62);
        }

        /* SUPPORT */
        .supportBox {
          position: relative;
          z-index: 2;

          max-width: 1100px;
          margin: 140px auto 0;

          padding: 70px;

          border-radius: 40px;

          text-align: center;

          background: rgba(255, 255, 255, 0.55);
          backdrop-filter: blur(24px);

          border: 1px solid rgba(255, 255, 255, 0.75);

          box-shadow:
            0 40px 120px rgba(0, 0, 0, 0.06),
            inset 0 1px 0 rgba(255, 255, 255, 0.9);
        }

        .supportBox span {
          font-size: 11px;
          letter-spacing: 0.35em;

          color: rgba(0, 0, 0, 0.45);
        }

        .supportBox h2 {
          margin-top: 24px;

          font-size: clamp(36px, 5vw, 64px);
          line-height: 1.05;
          letter-spacing: -2px;
        }

        .supportBox p {
          margin: 28px auto 0;

          max-width: 760px;

          font-size: 16px;
          line-height: 2;

          color: rgba(0, 0, 0, 0.62);
        }

        .supportActions {
          margin-top: 40px;

          display: flex;
          justify-content: center;
          gap: 18px;
        }

        button {
          height: 58px;
          padding: 0 34px;

          border: none;
          border-radius: 18px;

          background: #111;
          color: white;

          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;

          cursor: pointer;

          transition:
            transform 0.4s ease,
            box-shadow 0.4s ease;
        }

        button:hover {
          transform: translateY(-4px);

          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.16);
        }

        .ghost {
          background: rgba(255, 255, 255, 0.6);

          color: #111;

          border: 1px solid rgba(0, 0, 0, 0.08);
        }

        /* INFO */
        .infoGrid {
          position: relative;
          z-index: 2;

          max-width: 1100px;
          margin: 120px auto 0;

          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .infoCard {
          padding: 34px;

          border-radius: 28px;

          background: rgba(255, 255, 255, 0.52);
          backdrop-filter: blur(20px);

          border: 1px solid rgba(255, 255, 255, 0.75);

          box-shadow:
            0 25px 80px rgba(0, 0, 0, 0.05),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);
        }

        .infoCard h3 {
          font-size: 24px;
          font-weight: 700;
        }

        .infoCard p {
          margin-top: 16px;

          font-size: 15px;
          line-height: 1.9;

          color: rgba(0, 0, 0, 0.6);
        }

        /* FOOTER */
        .footer {
          position: relative;
          z-index: 2;

          margin-top: 140px;

          text-align: center;
        }

        .footerLine {
          width: 120px;
          height: 1px;

          margin: 0 auto 30px;

          background: rgba(0, 0, 0, 0.14);
        }

        .footer p {
          font-size: 18px;
          line-height: 1.8;

          color: rgba(0, 0, 0, 0.55);
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .page {
            padding: 120px 18px;
          }

          .hero h1 {
            line-height: 1;
            letter-spacing: -2px;
          }

          .faqWrapper,
          .infoGrid {
            grid-template-columns: 1fr;
          }

          .supportActions {
            flex-direction: column;
          }

          .faqCard,
          .supportBox,
          .infoCard {
            padding: 34px 26px;
          }

          .supportBox h2 {
            line-height: 1.1;
          }

          .footer {
            margin-top: 100px;
          }
        }
      `}</style>
    </section>
  );
}
