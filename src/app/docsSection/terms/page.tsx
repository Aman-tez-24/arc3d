"use client";

import Link from "next/link";

export default function TermsPage() {
  return (
    <section className="page">
      {/* BACKGROUND */}
      <div className="gradient gradient1" />
      <div className="gradient gradient2" />
      <div className="gridOverlay" />
      <div className="noise" />

      {/* HERO */}
      <div className="hero">
        <div className="badge">
          <span className="dot" />
          ARC3D LEGAL FRAMEWORK
        </div>

        <h1>
          Terms &
          <br />
          Conditions
        </h1>

        <p>
          These Terms & Conditions govern the usage of Arc3D services,
          architectural visualization systems, digital assets, project
          submissions, and all interactions with the Arc3D platform.
        </p>
      </div>

      {/* CONTENT */}
      <div className="content">
        <div className="section">
          <span>01</span>

          <h2>Acceptance of Terms</h2>

          <p>
            By accessing Arc3D, submitting project requests, using our
            architectural services, or interacting with our digital platform,
            you agree to comply with these Terms & Conditions.
          </p>

          <p>
            If you do not agree with any part of these terms, you should
            discontinue use of the platform and services immediately.
          </p>
        </div>

        <div className="section">
          <span>02</span>

          <h2>Services Provided</h2>

          <p>
            Arc3D provides architectural visualization and design-related
            services including:
          </p>

          <ul>
            <li>2D floor plan to 3D model conversion</li>
            <li>Custom floor planning</li>
            <li>Architectural visualization rendering</li>
            <li>Conceptual spatial presentations</li>
            <li>Vastu-based planning assistance</li>
            <li>Research and experimental visualization systems</li>
          </ul>

          <p>
            All deliverables are produced digitally and may vary depending on
            project complexity, client requirements, and technical constraints.
          </p>
        </div>

        <div className="section">
          <span>03</span>

          <h2>Project Submission Responsibility</h2>

          <p>
            Clients are responsible for ensuring that all uploaded drawings,
            dimensions, references, and architectural inputs are accurate before
            submission.
          </p>

          <p>
            Arc3D is not responsible for inaccuracies resulting from incomplete,
            incorrect, or misleading project information provided by clients.
          </p>
        </div>

        <div className="section">
          <span>04</span>

          <h2>Intellectual Property</h2>

          <p>
            All Arc3D branding, interface systems, design frameworks,
            visualization methods, graphics, animations, and platform elements
            remain the intellectual property of Arc3D.
          </p>

          <p>
            Client-provided architectural materials remain the property of the
            client unless otherwise agreed in writing.
          </p>

          <p>
            Arc3D reserves the right to showcase completed projects in
            portfolios, presentations, marketing materials, or research
            demonstrations unless restricted by a prior agreement.
          </p>
        </div>

        <div className="section">
          <span>05</span>

          <h2>Payments & Refunds</h2>

          <p>
            Payments for services must be completed according to the agreed
            project terms before final delivery of assets.
          </p>

          <p>
            Due to the custom and digital nature of architectural visualization
            work, refunds are generally not applicable once project production
            has started.
          </p>

          <p>
            Exceptional cases may be reviewed individually at the discretion of
            Arc3D management.
          </p>
        </div>

        <div className="section">
          <span>06</span>

          <h2>Delivery Timelines</h2>

          <p>
            Estimated delivery timelines are provided based on project scope and
            current workload.
          </p>

          <p>Arc3D is not liable for delays caused by:</p>

          <ul>
            <li>Late client responses</li>
            <li>Revision requests beyond agreed scope</li>
            <li>Technical rendering limitations</li>
            <li>Third-party service interruptions</li>
            <li>Unexpected infrastructure failures</li>
          </ul>
        </div>

        <div className="section">
          <span>07</span>

          <h2>Limitation of Liability</h2>

          <p>
            Arc3D provides architectural visualization and conceptual digital
            services only.
          </p>

          <p>
            Arc3D shall not be held responsible for structural, engineering,
            legal, or construction-related decisions made using visualized
            concepts or rendered outputs.
          </p>

          <p>
            Final real-world implementation decisions remain solely the
            responsibility of architects, engineers, builders, and project
            owners.
          </p>
        </div>

        <div className="section">
          <span>08</span>

          <h2>Research & Experimental Systems</h2>

          <p>
            Certain features, workflows, or visualization systems shown on the
            Arc3D platform may represent experimental technologies, research
            concepts, or systems currently under development.
          </p>

          <p>
            Availability of future technologies is not guaranteed and may change
            without notice.
          </p>
        </div>

        <div className="section">
          <span>09</span>

          <h2>Account & Platform Usage</h2>

          <p>
            Users agree not to misuse the Arc3D platform, attempt unauthorized
            access, interfere with infrastructure systems, or use the platform
            for unlawful activities.
          </p>

          <p>
            Arc3D reserves the right to suspend or terminate access for users
            violating these conditions.
          </p>
        </div>

        <div className="section">
          <span>10</span>

          <h2>Modification of Terms</h2>

          <p>
            Arc3D reserves the right to update, modify, or replace these Terms &
            Conditions at any time without prior notice.
          </p>

          <p>
            Continued use of the platform after updates constitutes acceptance
            of the revised terms.
          </p>
        </div>

        <div className="section">
          <span>11</span>

          <h2>Contact Information</h2>

          <p>
            For legal inquiries, support requests, or clarification regarding
            these Terms & Conditions, please contact the Arc3D team.
          </p>

          <div className="contactBox">
            <div>
              <h3>Email</h3>
              <p>legal@arc3d.in</p>
            </div>

            <div>
              <h3>Support</h3>
              <p>support@arc3d.in</p>
            </div>

            <div>
              <h3>Website</h3>
              <p>www.arc3d.in</p>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="footer">
        <div className="footerLine" />

        <p>
          “Architecture deserves clarity —
          <br />
          and every system deserves structure.”
        </p>

        <Link href="/" className="backBtn">
          Return Home
        </Link>
      </div>

      <style jsx>{`
        .page {
          position: relative;
          overflow: hidden;

          padding: 160px 24px;

          background:
            radial-gradient(
              circle at top left,
              rgba(255, 255, 255, 0.92),
              transparent 35%
            ),
            linear-gradient(180deg, #f8f6f1 0%, #f2efe8 40%, #ebe4d8 100%);

          color: #111;
        }

        /* BACKGROUND */
        .gradient {
          position: absolute;
          border-radius: 999px;
          filter: blur(120px);
          z-index: 0;
        }

        .gradient1 {
          width: 560px;
          height: 560px;

          background: rgba(60, 90, 180, 0.1);

          top: -180px;
          left: -160px;
        }

        .gradient2 {
          width: 500px;
          height: 500px;

          background: rgba(255, 255, 255, 0.7);

          bottom: -180px;
          right: -120px;
        }

        .gridOverlay {
          position: absolute;
          inset: 0;

          background-image:
            linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px);

          background-size: 70px 70px;

          mask-image: radial-gradient(circle at center, black, transparent 90%);

          opacity: 0.4;
        }

        .noise {
          position: absolute;
          inset: 0;

          opacity: 0.03;

          background-image:
            linear-gradient(rgba(0, 0, 0, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.4) 1px, transparent 1px);

          background-size: 120px 120px;
        }

        /* HERO */
        .hero {
          position: relative;
          z-index: 2;

          max-width: 900px;
          margin: auto;

          text-align: center;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 12px;

          padding: 12px 20px;

          border-radius: 999px;

          background: rgba(255, 255, 255, 0.55);
          backdrop-filter: blur(20px);

          border: 1px solid rgba(255, 255, 255, 0.8);

          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.35em;

          color: rgba(0, 0, 0, 0.55);
        }

        .dot {
          width: 8px;
          height: 8px;

          border-radius: 999px;

          background: #111;
        }

        .hero h1 {
          margin-top: 34px;

          font-size: clamp(58px, 8vw, 110px);
          line-height: 0.9;
          letter-spacing: -5px;
          font-weight: 900;
        }

        .hero p {
          margin: 34px auto 0;

          max-width: 760px;

          font-size: 16px;
          line-height: 2;

          color: rgba(0, 0, 0, 0.62);
        }

        /* CONTENT */
        .content {
          position: relative;
          z-index: 2;

          max-width: 1100px;
          margin: 120px auto 0;

          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .section {
          padding: 50px;

          border-radius: 34px;

          background: rgba(255, 255, 255, 0.55);
          backdrop-filter: blur(24px);

          border: 1px solid rgba(255, 255, 255, 0.75);

          box-shadow:
            0 30px 100px rgba(0, 0, 0, 0.05),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);
        }

        .section span {
          font-size: 11px;
          letter-spacing: 0.3em;

          color: rgba(0, 0, 0, 0.42);
        }

        .section h2 {
          margin-top: 16px;

          font-size: 38px;
          line-height: 1.1;
          letter-spacing: -1.5px;
          font-weight: 800;
        }

        .section p {
          margin-top: 22px;

          font-size: 15px;
          line-height: 2;

          color: rgba(0, 0, 0, 0.62);
        }

        .section ul {
          margin-top: 24px;
          padding-left: 22px;
        }

        .section li {
          margin-bottom: 14px;

          font-size: 15px;
          line-height: 1.8;

          color: rgba(0, 0, 0, 0.6);
        }

        /* CONTACT */
        .contactBox {
          margin-top: 40px;

          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .contactBox div {
          padding: 26px;

          border-radius: 24px;

          background: rgba(255, 255, 255, 0.6);

          border: 1px solid rgba(255, 255, 255, 0.8);
        }

        .contactBox h3 {
          font-size: 18px;
          margin-bottom: 10px;
        }

        .contactBox p {
          margin: 0;

          font-size: 14px;
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

          background: rgba(0, 0, 0, 0.15);
        }

        .footer p {
          font-size: 18px;
          line-height: 1.8;

          color: rgba(0, 0, 0, 0.55);
        }

        .backBtn {
          margin-top: 36px;

          display: inline-flex;
          align-items: center;
          justify-content: center;

          height: 58px;
          padding: 0 34px;

          border-radius: 18px;

          background: #111;
          color: white;

          text-decoration: none;

          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;

          transition:
            transform 0.4s ease,
            box-shadow 0.4s ease;
        }

        .backBtn:hover {
          transform: translateY(-4px);

          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.16);
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .page {
            padding: 120px 18px;
          }

          .hero h1 {
            letter-spacing: -2px;
            line-height: 1;
          }

          .section {
            padding: 34px 26px;
          }

          .section h2 {
            font-size: 30px;
          }

          .contactBox {
            grid-template-columns: 1fr;
          }

          .footer {
            margin-top: 100px;
          }
        }
      `}</style>
    </section>
  );
}
