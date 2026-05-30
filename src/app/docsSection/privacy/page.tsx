"use client";

import Link from "next/link";

export default function PrivacyPolicyPage() {
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
          ARC3D LEGAL DOCUMENTATION
        </div>

        <h1>
          Privacy
          <br />
          Policy
        </h1>

        <p>
          Arc3D values transparency, data protection, professional
          confidentiality, and responsible management of client, project, and
          internship-related information across our platform, services, and
          operational workflows.
        </p>
      </div>

      {/* CONTENT */}
      <div className="contentWrapper">
        <div className="policyCard">
          <div className="line" />

          <span className="sectionIndex">01</span>

          <h2>Information We Collect</h2>

          <p>
            Arc3D may collect project-related information including floor plans,
            architectural references, contact information, uploaded files,
            project descriptions, and communication details shared during client
            interactions.
          </p>
        </div>

        <div className="policyCard">
          <div className="line" />

          <span className="sectionIndex">02</span>

          <h2>How Information is Used</h2>

          <p>
            Project information is used exclusively for architectural
            visualization workflows, rendering production, communication,
            project management, and improving the overall client experience
            across Arc3D systems.
          </p>
        </div>

        <div className="policyCard">
          <div className="line" />

          <span className="sectionIndex">03</span>

          <h2>Project Confidentiality</h2>

          <p>
            Arc3D respects client confidentiality. Uploaded architectural
            layouts, concepts, and visual assets are handled securely and are
            not publicly shared without client permission.
          </p>
        </div>

        <div className="policyCard">
          <div className="line" />

          <span className="sectionIndex">04</span>

          <h2>Data Security</h2>

          <p>
            We implement secure workflows and platform protections to help
            safeguard client submissions, project files, and communication data
            stored within Arc3D systems.
          </p>
        </div>

        <div className="policyCard">
          <div className="line" />

          <span className="sectionIndex">05</span>

          <h2>Third-Party Services</h2>

          <p>
            Arc3D may utilize secure third-party infrastructure and cloud
            services for hosting, storage, authentication, and workflow
            management. These services operate under their own privacy
            standards.
          </p>
        </div>

        <div className="policyCard">
          <div className="line" />

          <span className="sectionIndex">06</span>

          <h2>Intern Work & Intellectual Property</h2>

          <p>
            Work created, developed, or contributed to by interns during their
            internship period may be used within Arc3D projects, platforms,
            marketing materials, research initiatives, and internal workflows.
            Interns agree to maintain confidentiality regarding client
            information, proprietary systems, project assets, and business
            operations throughout and after the internship period.
          </p>
        </div>

        <div className="policyCard">
          <div className="line" />

          <span className="sectionIndex">07</span>

          <h2>Internship Program Policies</h2>

          <p>
            Arc3D may offer internship opportunities in areas including
            architectural visualization, 3D modeling, AI development, LLM
            modelling, design research, software development, marketing, and
            business operations. Participation in an internship does not
            guarantee future employment unless explicitly stated in a separate
            written agreement.
          </p>
        </div>

        <div className="policyCard">
          <div className="line" />

          <span className="sectionIndex">08</span>

          <h2>Internship Certification</h2>

          <p>
            Internship certificates or completion documents may be issued only
            to interns who successfully complete assigned responsibilities,
            comply with Arc3D policies, maintain satisfactory attendance, and
            actively participate throughout the internship period. Failure to
            meet attendance, conduct, or performance requirements may affect
            certification eligibility.
          </p>
        </div>
      </div>

      {/* INFO BOX */}
      <div className="infoBox">
        <span>CLIENT TRUST</span>

        <h2>
          Privacy, Confidentiality
          <br />
          And Professional Responsibility
        </h2>

        <p>
          Whether working with clients, collaborators, or interns, Arc3D is
          committed to maintaining secure systems, responsible information
          handling, and professional standards across every stage of project
          development and architectural visualization.
        </p>

        <div className="infoStats">
          <div className="stat">
            <h3>Secure</h3>
            <p>Project Handling</p>
          </div>

          <div className="stat">
            <h3>Protected</h3>
            <p>Client Data</p>
          </div>

          <div className="stat">
            <h3>Private</h3>
            <p>Architecture Workflows</p>
          </div>
        </div>
      </div>

      {/* CONTACT */}
      <div className="contactSection">
        <div className="contactLine" />

        <h2>Questions About Privacy?</h2>

        <p>
          Contact Arc3D for additional information regarding project security,
          data handling, or architectural confidentiality practices.
        </p>

        <Link href="/contact">
          <button>Contact Us</button>
        </Link>
      </div>

      {/* FOOTER */}
      <div className="footer">
        <div className="footerLine" />

        <p>
          “Trust is the foundation
          <br />
          of every architectural collaboration.”
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

          background: rgba(60, 90, 180, 0.12);

          top: -180px;
          left: -140px;
        }

        .orb2 {
          width: 420px;
          height: 420px;

          background: rgba(255, 255, 255, 0.72);

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

        /* CONTENT */
        .contentWrapper {
          position: relative;
          z-index: 2;

          max-width: 1100px;
          margin: 120px auto 0;

          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .policyCard {
          padding: 42px;

          border-radius: 34px;

          background: rgba(255, 255, 255, 0.52);
          backdrop-filter: blur(24px);

          border: 1px solid rgba(255, 255, 255, 0.75);

          box-shadow:
            0 30px 100px rgba(0, 0, 0, 0.05),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);
        }

        .line {
          width: 70px;
          height: 1px;

          background: rgba(0, 0, 0, 0.2);

          margin-bottom: 24px;
        }

        .sectionIndex {
          font-size: 11px;
          letter-spacing: 0.3em;

          color: rgba(0, 0, 0, 0.4);
        }

        .policyCard h2 {
          margin-top: 18px;

          font-size: 30px;
          line-height: 1.1;
          letter-spacing: -1.5px;
          font-weight: 800;
        }

        .policyCard p {
          margin-top: 18px;

          font-size: 15px;
          line-height: 1.9;

          color: rgba(0, 0, 0, 0.62);
        }

        /* INFO */
        .infoBox {
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

        .infoBox span {
          font-size: 11px;
          letter-spacing: 0.35em;

          color: rgba(0, 0, 0, 0.45);
        }

        .infoBox h2 {
          margin-top: 24px;

          font-size: clamp(36px, 5vw, 64px);
          line-height: 1.05;
          letter-spacing: -2px;
        }

        .infoBox p {
          margin: 28px auto 0;

          max-width: 760px;

          font-size: 16px;
          line-height: 2;

          color: rgba(0, 0, 0, 0.62);
        }

        .infoStats {
          margin-top: 60px;

          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .stat {
          padding: 30px;

          border-radius: 24px;

          background: rgba(255, 255, 255, 0.55);

          border: 1px solid rgba(255, 255, 255, 0.8);
        }

        .stat h3 {
          font-size: 30px;
          font-weight: 800;
        }

        .stat p {
          margin-top: 10px;

          font-size: 13px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        /* CONTACT */
        .contactSection {
          position: relative;
          z-index: 2;

          margin-top: 140px;

          text-align: center;
        }

        .contactLine {
          width: 120px;
          height: 1px;

          margin: 0 auto 34px;

          background: rgba(0, 0, 0, 0.14);
        }

        .contactSection h2 {
          font-size: clamp(36px, 5vw, 64px);
          line-height: 1.05;
          letter-spacing: -2px;
        }

        .contactSection p {
          margin: 24px auto 0;

          max-width: 680px;

          font-size: 16px;
          line-height: 2;

          color: rgba(0, 0, 0, 0.62);
        }

        button {
          margin-top: 36px;

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

          .contentWrapper,
          .infoStats {
            grid-template-columns: 1fr;
          }

          .policyCard,
          .infoBox {
            padding: 34px 26px;
          }

          .infoBox h2,
          .contactSection h2 {
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
