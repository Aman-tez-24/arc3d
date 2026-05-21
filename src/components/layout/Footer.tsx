import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="bg" />
      <div className="glow" />

      {/* MAIN GRID */}
      <div className="container">
        {/* BRAND */}
        <div className="brand">
          <div
            className="fotterLogo"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            <img src="/images/logo.png" alt="Arc3D" />
          </div>

          <p>
            Transforming architectural imagination into precise, immersive
            digital reality through spatial intelligence and design systems.
          </p>

          {/* SOCIAL */}
          <div className="social">
            <a
              href="https://instagram.com/arc3d_in"
              target="_blank"
              rel="noopener noreferrer"
              className="circle"
            >
              IG
            </a>

            <a
              href="https://linkedin.com/company/yourcompany"
              target="_blank"
              rel="noopener noreferrer"
              className="circle"
            >
              IN
            </a>

            <a
              href="https://x.com/Arc3dIn"
              target="_blank"
              rel="noopener noreferrer"
              className="circle"
            >
              X
            </a>

            <a
              href="https://www.youtube.com/channel/UCEz7MWyt84wpxRN3EYy5c_Q"
              target="_blank"
              rel="noopener noreferrer"
              className="circle"
            >
              YT
            </a>

            <a
              href="https://github.com/yourcompany"
              target="_blank"
              rel="noopener noreferrer"
              className="circle"
            >
              GH
            </a>
          </div>

          {/* ADDRESS */}
          <div className="address">
            <p className="studio">Arc3D Studio</p>
            <p>Visakhapatnam</p>
            <p>Andhra Pradesh, India</p>
          </div>
        </div>

        {/* LINKS */}
        <div className="column">
          <h3>Services</h3>

          <Link href="/servicesSection/2d-to-3d">
            <span className="footerLink">2D → 3D Conversion</span>
          </Link>

          <Link href="/servicesSection/floor-planning">
            <span className="footerLink">Floor Planning</span>
          </Link>

          <Link href="/servicesSection/ai-design-system">
            <span className="footerLink">AI Design System</span>
          </Link>

          <Link href="/servicesSection/visualization">
            <span className="footerLink">Visualization</span>
          </Link>
        </div>

        <div className="column">
          <h3>Company</h3>

          <Link href="/companySection">
            <span className="footerLink">About</span>
          </Link>

          <Link href="/companySection">
            <span className="footerLink">Projects</span>
          </Link>

          <Link href="/companySection">
            <span className="footerLink">Careers</span>
          </Link>

          <Link href="/contact">
            <span className="footerLink">Contact</span>
          </Link>
        </div>

        <div className="column">
          <h3>Developers</h3>

          <Link href="/devSection">
            <span className="footerLink">API</span>
          </Link>

          <Link href="/devSection">
            <span className="footerLink">Integration</span>
          </Link>

          <Link href="/devSection">
            <span className="footerLink">Architecture</span>
          </Link>

          <Link href="https://github.com/yourrepo" target="_blank">
            <span className="footerLink">GitHub</span>
          </Link>
        </div>

        <div className="column">
          <h3>Docs</h3>

          <Link href="/docsSection">
            <span className="footerLink">Getting Started</span>
          </Link>

          <Link href="/docsSection">
            <span className="footerLink">3D Engine</span>
          </Link>

          <Link href="/docsSection">
            <span className="footerLink">Workflow</span>
          </Link>

          <Link href="/docsSection">
            <span className="footerLink">Support</span>
          </Link>
        </div>
      </div>
      {/* QUOTE SECTION */}
      <div className="quote">
        <p>
          “Architecture is not just built — it is computed, visualized, and
          experienced.”
        </p>
      </div>

      {/* BOTTOM BAR */}
      <div className="bottom">
        <p>© {new Date().getFullYear()} Arc3D. All rights reserved.</p>
        <p>Designed as a spatial intelligence system.</p>
      </div>

      {/* STYLE */}
      <style jsx>{`
        .footer {
          position: relative;
          padding: 120px 20px 50px;
          overflow: hidden;
        }

        /* PREMIUM GRADIENT */
        .bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            #f4f1ea 0%,
            #ffffff 45%,
            #f7f5f0 100%
          );
        }
        .fotterLogo {
          height: 60px;
          cursor: pointer;
          border-radius: 20px;

          background: transparent;

          display: flex;
        }

        .fotterLogo img {
          height: 42px;
          width: auto;
          object-fit: contain;
          display: block;
          user-select: none;

          filter: brightness(0) saturate(100%);

          opacity: 0.95;
        }

        .glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at top,
            rgba(0, 0, 0, 0.04),
            transparent 60%
          );
          pointer-events: none;
        }

        /* GRID */
        .container {
          max-width: 1200px;
          margin: auto;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
          gap: 50px;
          position: relative;
          z-index: 2;
        }

        /* BRAND */
        .brand h2 {
          font-size: 38px;
          font-weight: 900;
          color: #0a0a0a;
          margin-bottom: 14px;
        }

        .brand p {
          font-size: 14.5px;
          line-height: 1.8;
          color: rgba(0, 0, 0, 0.65);
          max-width: 320px;
          margin-bottom: 18px;
        }

        /* SOCIAL CIRCLES */
        .social {
          display: flex;
          gap: 12px;
          margin-bottom: 18px;
        }

        .circle {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #adadad94;
          color: #ffffff;

          display: flex;
          align-items: center;
          justify-content: center;

          font-size: 14px;
          font-weight: 700;

          cursor: pointer;

          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.12);

          transition:
            transform 0.25s ease,
            background 0.25s ease,
            box-shadow 0.25s ease;
        }

        .circle:hover {
          transform: translateY(-6px) scale(1.05);
          background: #1a1a1a;
          box-shadow: 0 60px 140px rgba(0, 0, 0, 0.2);
        }

        /* ADDRESS */
        .address {
          margin-top: 10px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .address p {
          font-size: 13px;
          color: rgba(0, 0, 0, 0.55);
          line-height: 1.6;
        }

        .address .studio {
          font-weight: 600;
          color: rgba(0, 0, 0, 0.75);
        }

        /* COLUMN */
        .column {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .column h3 {
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(0, 0, 0, 0.45);
          margin-bottom: 18px;
        }

        .footerLink {
          display: block;
          font-size: 14px;
          color: rgba(0, 0, 0, 0.7);
          text-decoration: none;

          transition:
            transform 0.25s ease,
            color 0.25s ease;
        }

        .footerLink:hover {
          color: #0a0a0a;
          transform: translateX(4px);
        }

        /* QUOTE */
        .quote {
          max-width: 900px;
          margin: 0 auto 0;
          text-align: center;
          position: relative;
          z-index: 2;
        }

        .quote p {
          font-size: 18px;
          font-style: italic;
          color: rgba(0, 0, 0, 0.6);
          line-height: 1.8;
        }

        /* BOTTOM */

        .bottom {
          max-width: 1200px;
          margin: 70px auto 0;

          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;

          padding-top: 22px;
          border-top: 1px solid rgba(0, 0, 0, 0.08);

          position: relative;
          z-index: 2;
        }

        .bottom p {
          font-size: 12.5px;
          color: rgba(0, 0, 0, 0.55);
        }

        /* RESPONSIVE */
        @media (max-width: 1000px) {
          .container {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 600px) {
          .container {
            grid-template-columns: 1fr;
          }

          .bottom {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
