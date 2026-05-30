"use client";
import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
export default function CompanyPage() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u) => {
      setUser(u);
    });

    return () => unsubscribe();
  }, []);
  const router = useRouter();
  return (
    <section className="companyPage">
      {/* HERO */}
      <div className="hero">
        <span className="tag">ARC3D COMPANY</span>

        <h1>
          We are building
          <br />
          the future of space itself.
        </h1>

        <p>
          Arc3D is not a traditional architecture company. We are a spatial
          intelligence studio — combining design, simulation, and artificial
          intelligence to redefine how environments are created and experienced.
        </p>
      </div>

      {/* ORIGIN STORY */}
      <div className="story">
        <div className="text">
          <h2>Why Arc3D Exists</h2>

          <p>
            Architecture has always been limited by imagination being trapped in
            static drawings. We believed that buildings should be lived before
            they are built.
          </p>

          <p>
            Arc3D was created to remove the gap between imagination and
            construction — turning ideas into interactive, evolving environments
            that behave like reality before they physically exist.
          </p>
        </div>

        <div className="card">
          <h3>Core Belief</h3>
          <p>“If you can experience it, you can perfect it.”</p>
        </div>
      </div>

      {/* PRINCIPLES */}
      <div className="principles">
        <h2>Our Principles</h2>

        <div className="grid">
          <div className="box">
            <h3>Precision in Every Detail</h3>
            <p>
              Every model, plan, and visualization is crafted with accuracy,
              proportion, and architectural integrity.
            </p>
          </div>

          <div className="box">
            <h3>Clarity over Complexity</h3>
            <p>
              Great architecture should be easy to understand, communicate, and
              present to every stakeholder.
            </p>
          </div>

          <div className="box">
            <h3>Visualization before Construction</h3>
            <p>
              Detailed visual representations help clients and architects make
              confident decisions before execution begins.
            </p>
          </div>

          <div className="box">
            <h3>Design with Purpose</h3>
            <p>
              Every space should balance functionality, aesthetics, comfort, and
              the unique requirements of its occupants.
            </p>
          </div>
        </div>
      </div>

      {/* TIMELINE */}
      <div className="timeline">
        <h2>Our Evolution</h2>

        <div className="step">
          <span>01</span>
          <div>
            <h3>The Vision</h3>
            <p>
              Arc3D began with a simple goal — helping clients visualize
              architectural spaces more clearly before construction starts.
            </p>
          </div>
        </div>

        <div className="step">
          <span>02</span>
          <div>
            <h3>Architectural Services</h3>
            <p>
              We started delivering professional floor planning, 3D modeling,
              and architectural visualization services for residential and
              commercial projects.
            </p>
          </div>
        </div>

        <div className="step">
          <span>03</span>
          <div>
            <h3>Expanding Solutions</h3>
            <p>
              Our offerings grew to include custom floor plans, vastu-based
              planning, detailed renders, and premium presentation visuals.
            </p>
          </div>
        </div>

        <div className="step">
          <span>04</span>
          <div>
            <h3>The Future of Arc3D</h3>
            <p>
              We continue building advanced architectural technologies and
              research systems that will further streamline design and
              visualization workflows.
            </p>
          </div>
        </div>
      </div>

      {/* CULTURE */}
      <div className="culture">
        <h2>Culture & Mindset</h2>

        <div className="cultureGrid">
          <div className="cultureCard">
            <h3>Think Spatially</h3>
            <p>We don’t think in screens — we think in environments.</p>
          </div>

          <div className="cultureCard">
            <h3>Build Systems, Not Features</h3>
            <p>Everything must scale as part of a larger intelligence layer.</p>
          </div>

          <div className="cultureCard">
            <h3>Precision Matters</h3>
            <p>Every pixel, wall, and shadow is intentional.</p>
          </div>

          <div className="cultureCard">
            <h3>Future First Thinking</h3>
            <p>We design for how people will build tomorrow, not today.</p>
          </div>
        </div>
      </div>

      {/* TEAM PLACEHOLDER */}
      <div className="team">
        <h2>Who We Are</h2>

        <p>
          Arc3D is a growing architectural visualization studio focused on
          helping clients transform ideas, floor plans, and concepts into
          detailed visual representations. We combine architectural
          understanding, creative design, and modern visualization techniques to
          deliver clear and impactful project presentations.
        </p>

        <div className="teamGrid">
          <div className="member">Architectural Visualization</div>
          <div className="member">3D Modeling</div>
          <div className="member">Floor Planning</div>
          <div className="member">Vastu Consultation</div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta">
        <h2>Let’s Redefine Architecture Together</h2>

        <p>
          Arc3D is not just a company — it is a shift in how humans create
          space.
        </p>

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
          {user ? "Go to Dashboard" : "Join Arc3D"}
        </button>
      </div>

      <style jsx>{`
        .companyPage {
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
          font-size: 68px;
          line-height: 1.02;
        }

        .hero p {
          margin-top: 24px;
          font-size: 16px;
          line-height: 1.9;
          color: rgba(0, 0, 0, 0.65);
        }

        /* STORY */
        .story {
          margin-top: 120px;
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 60px;
          align-items: center;
        }

        .story h2 {
          font-size: 42px;
        }

        .story p {
          margin-top: 16px;
          line-height: 1.9;
          color: rgba(0, 0, 0, 0.65);
        }

        .card {
          padding: 40px;
          border-radius: 26px;
          background: white;
          border: 1px solid rgba(0, 0, 0, 0.06);
        }

        /* PRINCIPLES */
        .principles {
          margin-top: 140px;
          text-align: center;
        }

        .grid {
          margin-top: 50px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .box {
          padding: 28px;
          background: white;
          border-radius: 22px;
        }
        .box p {
          color: #5d5d5d;
          padding-top: 10px;
        }

        /* TIMELINE */
        .timeline {
          padding-top: 40px;
          max-width: 900px;
          margin: auto;
        }

        .step {
          display: flex;
          gap: 20px;
          margin-top: 30px;
        }

        .step span {
          font-weight: bold;
          font-size: 18px;
        }

        /* CULTURE */
        .culture {
          margin-top: 140px;
          text-align: center;
        }

        .cultureGrid {
          margin-top: 50px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .cultureCard {
          padding: 28px;
          background: white;
          border-radius: 22px;
        }

        /* TEAM */
        .team {
          margin-top: 140px;
          text-align: center;
        }

        .teamGrid {
          margin-top: 40px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .member {
          padding: 26px;
          border-radius: 20px;
          background: white;
        }

        /* CTA */
        .cta {
          margin-top: 140px;
          text-align: center;
        }

        .cta button {
          margin-top: 20px;
          padding: 14px 28px;
          border: none;
          border-radius: 14px;
          background: #111;
          color: white;
        }

        @media (max-width: 900px) {
          .story,
          .grid,
          .cultureGrid,
          .teamGrid {
            grid-template-columns: 1fr;
          }

          .hero h1 {
            font-size: 42px;
          }
        }
      `}</style>
    </section>
  );
}
