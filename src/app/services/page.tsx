"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
export default function ServicesPage() {
  const [user, setUser] = useState<any>(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u) => {
      setUser(u);
    });

    return () => unsubscribe();
  }, []);

  const router = useRouter();
  return (
    <section className="servicesPage">
      {/* HERO — CINEMATIC INTRO */}
      <div className="hero">
        <span className="tag">ARC3D EXPERIENCE ENGINE</span>

        <h1>
          Architecture is no longer
          <br />
          drawn — it is experienced.
        </h1>

        <p>
          Arc3D transforms static architectural thinking into living, responsive
          environments. Every wall, light, and material is simulated before
          construction begins — giving you the power to design reality before it
          exists.
        </p>
      </div>

      {/* DIVIDER STATEMENT */}
      <div className="statement">
        “We don’t design buildings. We simulate futures.”
      </div>

      {/* CORE EXPERIENCE GRID */}
      <div className="experience">
        <div className="expCard">
          <span>01</span>
          <h2>2D to 3D Transformation</h2>
          <p>
            We convert architectural floor plans into detailed 3D models that
            help clients visualize structure, proportions, and spatial
            relationships before construction begins.
          </p>
        </div>

        <div className="expCard">
          <span>02</span>
          <h2>Custom Planning & Design</h2>
          <p>
            From residential homes to commercial spaces, we create functional
            and well-balanced floor plans tailored to project requirements,
            usability, and architectural goals.
          </p>
        </div>

        <div className="expCard">
          <span>03</span>
          <h2>Premium Architectural Visualization</h2>
          <p>
            High-quality renders, materials, lighting, and presentation visuals
            help communicate design intent with clarity, realism, and
            professional precision.
          </p>
        </div>
      </div>

      {/* FEATURE STORY SECTION */}
      <div className="featureStory">
        <div className="text">
          <h2>From Floor Plan to Architectural Visualization</h2>

          <p>
            Every project begins with an idea, sketch, or floor plan. At Arc3D,
            we transform those concepts into detailed architectural visuals that
            help clients, architects, and developers better understand a space
            before construction begins. Our process focuses on accuracy,
            aesthetics, and clear visual communication.
          </p>

          <ul>
            <li>Professional 2D to 3D model conversion</li>
            <li>Custom floor planning solutions</li>
            <li>Vastu-oriented design assistance</li>
            <li>High-quality architectural rendering</li>
          </ul>
        </div>

        <div className="visualBlock">
          <div className="glow"></div>
          <div className="mock">
            <img src="/images/services/visualization-rendering.png" alt="" />
          </div>
        </div>
      </div>

      {/* PREMIUM SERVICES STRIP */}
      <div className="strip">
        <h2>Core Arc3D Services</h2>

        <div className="stripGrid">
          <div className="miniCard">
            <h3>2D → 3D Conversion</h3>
            <p>
              Transform architectural floor plans into detailed and visually
              accurate 3D models.
            </p>
          </div>

          <div className="miniCard">
            <h3>Custom Floor Planning</h3>
            <p>
              Professionally designed layouts focused on functionality, comfort,
              and efficient space utilization.
            </p>
          </div>

          <div className="miniCard">
            <h3>Vastu Planning</h3>
            <p>
              Architectural planning aligned with vastu principles while
              maintaining modern design standards.
            </p>
          </div>

          <div className="miniCard">
            <h3>Visualization & Rendering</h3>
            <p>
              High-quality architectural renders with realistic materials,
              lighting, and presentation-ready visuals.
            </p>
          </div>
        </div>
      </div>

      {/* SUBSCRIPTION SECTION (LUXURY SaaS STYLE) */}
      {/*  <div className="pricing">
        <h2>Membership Access</h2>

        <div className="plans">
          <div className="plan">
            <h3>Explorer</h3>
            <h1>Free</h1>
            <p>For students & learning</p>

            <ul>
              <li>Basic 3D conversion</li>
              <li>Limited AI suggestions</li>
              <li>Community access</li>
            </ul>

            <button>Start Exploring</button>
          </div>

          <div className="plan highlight">
            <h3>Architect</h3>
            <h1>₹1499</h1>
            <p>For professionals</p>

            <ul>
              <li>Full AI design engine</li>
              <li>Real-time simulation</li>
              <li>High-end rendering</li>
              <li>Cloud collaboration</li>
            </ul>

            <button>Most Chosen</button>
          </div>

          <div className="plan">
            <h3>Studio+</h3>
            <h1>₹4999</h1>
            <p>For firms & enterprises</p>

            <ul>
              <li>Unlimited projects</li>
              <li>Team system</li>
              <li>Priority compute</li>
              <li>API access</li>
            </ul>

            <button>Contact Sales</button>
          </div>
        </div>
      </div>
*/}
      {/* FINAL CTA */}
      <div className="cta">
        <h2>Build Something That Has Never Existed</h2>
        <p>Arc3D is not software — it is a new way of thinking about space.</p>

        <button
          onClick={() => {
            if (user) {
              router.push("/projects"); // dashboard
            } else {
              router.push("/signin");
            }
          }}
          className="joinBtn"
        >
          {user ? "Go to Dashboard" : "Enter Arc3D"}
        </button>
      </div>

      <style jsx>{`
        .servicesPage {
          padding: 140px 50px;
          background: #f3f1eb;
          color: #111;
        }

        /* HERO */
        .hero {
          max-width: 900px;
          margin: auto;
          text-align: center;
        }

        .tag {
          font-size: 11px;
          letter-spacing: 0.4em;
          color: rgba(0, 0, 0, 0.5);
        }

        .hero h1 {
          margin-top: 20px;
          font-size: 70px;
          line-height: 1.02;
          font-weight: 600;
        }

        .hero p {
          margin-top: 28px;
          font-size: 16px;
          line-height: 1.9;
          color: rgba(0, 0, 0, 0.65);
        }

        /* STATEMENT */
        .statement {
          margin-top: 120px;
          text-align: center;
          font-size: 20px;
          letter-spacing: 0.2em;
          color: rgba(0, 0, 0, 0.5);
        }

        /* EXPERIENCE */
        .experience {
          margin-top: 120px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .expCard {
          padding: 36px;
          border-radius: 26px;
          background: white;
          border: 1px solid rgba(0, 0, 0, 0.06);
          transition: 0.4s ease;
        }

        .expCard:hover {
          transform: translateY(-10px);
        }

        .expCard span {
          font-size: 12px;
          letter-spacing: 0.3em;
          color: rgba(0, 0, 0, 0.4);
        }

        .expCard h2 {
          margin-top: 16px;
          font-size: 22px;
        }

        .expCard p {
          margin-top: 14px;
          line-height: 1.7;
          color: rgba(0, 0, 0, 0.65);
        }

        /* FEATURE STORY */
        .featureStory {
          margin-top: 140px;
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 60px;
          align-items: center;
        }

        .text h2 {
          font-size: 42px;
        }

        .text p {
          margin-top: 18px;
          line-height: 1.9;
          color: rgba(0, 0, 0, 0.65);
        }

        .text ul {
          margin-top: 20px;
          padding-left: 18px;
        }

        .visualBlock {
          height: 420px;
          border-radius: 28px;
          background: white;
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(0, 0, 0, 0.06);
        }

        .mock {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          color: rgba(0, 0, 0, 0.3);
          width: 100%;
          height: 100%;
          overflow: hidden;
          border-radius: inherit;
        }

        .mock img {
          width: 100%;
          height: 100%;
          object-fit: fill; /* fills container */
          display: block;
        }

        .glow {
          position: absolute;
          width: 300px;
          height: 300px;
          background: rgba(20, 40, 80, 0.1);
          filter: blur(80px);
          top: -80px;
          left: -80px;
        }

        /* STRIP */
        .strip {
          margin-top: 140px;
          text-align: center;
        }

        .stripGrid {
          margin-top: 50px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .miniCard {
          padding: 24px;
          background: white;
          border-radius: 20px;
        }

        /* PRICING */
        .pricing {
          margin-top: 140px;
          text-align: center;
        }

        .plans {
          margin-top: 60px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .plan {
          padding: 36px;
          background: white;
          border-radius: 28px;
        }

        .plan.highlight {
          border: 2px solid #111;
          transform: scale(1.05);
        }

        .plan h1 {
          font-size: 42px;
        }

        .plan ul {
          margin-top: 18px;
          text-align: left;
          padding-left: 18px;
        }

        .plan button {
          margin-top: 20px;
          width: 100%;
          padding: 14px;
          border-radius: 14px;
          border: none;
          background: #111;
          color: white;
        }

        /* CTA */
        .cta {
          margin-top: 140px;
          text-align: center;
        }

        .cta button {
          margin-top: 20px;
          padding: 14px 28px;
          border-radius: 14px;
          border: none;
          background: #111;
          color: white;
        }

        @media (max-width: 900px) {
          .experience,
          .stripGrid,
          .plans {
            grid-template-columns: 1fr;
          }

          .featureStory {
            grid-template-columns: 1fr;
          }

          .hero h1 {
            font-size: 44px;
          }
        }
      `}</style>
    </section>
  );
}
