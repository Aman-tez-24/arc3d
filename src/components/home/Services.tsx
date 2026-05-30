"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";

export default function Services() {
  const router = useRouter();
  const services = [
    {
      id: "01",
      tag: "Architectural Visualization",
      title: "2D → 3D Architectural Conversion",
      description:
        "We transform architectural drawings and floor plans into detailed 3D visualizations with realistic materials, spatial depth, lighting composition, and premium presentation quality.",
      image: "/images/services/2d-3d-arc-design.png",
      path: "/servicesSection/2d-to-3d",
    },

    {
      id: "02",
      tag: "Spatial Planning",
      title: "Custom Floor Planning",
      description:
        "Thoughtfully designed floor plans focused on functionality, circulation, ventilation, space optimization, and architectural balance tailored to modern living requirements.",
      image: "/images/services/floor-planning.png",
      path: "/servicesSection/floor-planning",
    },

    {
      id: "03",
      tag: "Design Consultation",
      title: "Architectural Design Assistance",
      description:
        "Professional design guidance for layout refinement, space utilization, elevation concepts, lighting ideas, and architectural planning support for residential and commercial projects.",
      image: "/images/services/ai-design-model.png",
      path: "/servicesSection/design-assistance",
    },

    {
      id: "04",
      tag: "Cinematic Rendering",
      title: "Visualization & Rendering",
      description:
        "High-quality architectural renders crafted to showcase atmosphere, materials, lighting, and design intent through cinematic visual presentation.",
      image: "/images/services/visualization-rendering.png",
      path: "/servicesSection/visualization",
    },
  ];

  const [user, setUser] = useState<any>(null);
  useEffect(() => {
    const unsub = auth.onAuthStateChanged((u) => {
      setUser(u);
    });

    return () => unsub();
  }, []);

  return (
    <section className="services">
      {/* BACKGROUND */}
      <div className="bgGlow" />
      <div className="gridLines" />

      {/* HEADER */}
      <div className="header">
        <span className="miniTag">ARC3D SERVICES</span>

        <h2>
          Spatial Intelligence
          <br />
          Engineered for Luxury
        </h2>

        <p>
          Arc3D combines cinematic visualization, intelligent planning systems,
          and architectural precision to create immersive environments that feel
          futuristic, premium, and deeply experiential.
        </p>
      </div>

      {/* SERVICES */}
      <div className="servicesWrap">
        {services.map((service, index) => (
          <div
            className={`panel ${index % 2 !== 0 ? "reverse" : ""}`}
            key={service.id}
          >
            {/* IMAGE SIDE */}
            <div className="imageWrap">
              <div className="imageGlow" />

              <div className="image">
                <img src={service.image} alt={service.title} />
              </div>

              {/* FLOAT CARD */}
              <div className="floatingCard">
                <span>{service.id}</span>
                <p>Luxury Spatial System</p>
              </div>
            </div>

            {/* CONTENT */}
            <div className="content">
              <div className="line" />

              <span className="serviceTag">{service.tag}</span>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              {/* FEATURES */}
              <div className="features">
                <div>Detailed Visualization</div>
                <div>Premium Presentation</div>
                <div>Architectural Planning</div>
              </div>

              {/* BUTTON */}
              <button
                onClick={() => {
                  if (user) {
                    router.push("/projects");
                  } else {
                    router.push("/signin");
                  }
                }}
              >
                {user ? "Go to Dashboard" : "Join Arc3D"}
              </button>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .services {
          position: relative;
          overflow: hidden;

          background:
            radial-gradient(
              circle at top,
              rgba(0, 0, 0, 0.03),
              transparent 35%
            ),
            linear-gradient(to bottom, #ffffff, #f8f5ef);

          padding: 160px 24px;
        }

        /* BACKGROUND EFFECTS */
        .bgGlow {
          position: absolute;
          top: -200px;
          left: 50%;
          transform: translateX(-50%);

          width: 900px;
          height: 900px;

          background: radial-gradient(
            circle,
            rgba(0, 0, 0, 0.05),
            transparent 70%
          );

          filter: blur(80px);

          pointer-events: none;
        }

        .gridLines {
          position: absolute;
          inset: 0;

          background-image:
            linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px);

          background-size: 60px 60px;

          opacity: 0.3;

          pointer-events: none;
        }

        /* HEADER */
        .header {
          position: relative;
          z-index: 2;

          max-width: 950px;
          margin: auto;
          text-align: center;

          margin-bottom: 140px;
        }

        .miniTag {
          display: inline-flex;

          padding: 10px 18px;

          border-radius: 999px;

          background: rgba(255, 255, 255, 0.7);

          backdrop-filter: blur(20px);

          border: 1px solid rgba(0, 0, 0, 0.06);

          font-size: 11px;
          font-weight: 700;

          letter-spacing: 3px;
          text-transform: uppercase;

          color: rgba(0, 0, 0, 0.55);

          margin-bottom: 30px;

          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.06);
        }

        .header h2 {
          font-size: clamp(3rem, 7vw, 6rem);

          font-weight: 900;

          line-height: 0.92;

          letter-spacing: -0.08em;

          color: #0a0a0a;

          margin-bottom: 28px;
        }

        .header p {
          max-width: 760px;

          margin: auto;

          font-size: 16px;
          line-height: 2;

          color: rgba(0, 0, 0, 0.65);
        }

        /* SERVICES WRAP */
        .servicesWrap {
          position: relative;
          z-index: 2;

          max-width: 1350px;
          margin: auto;

          display: flex;
          flex-direction: column;
          gap: 140px;
        }

        /* PANEL */
        .panel {
          display: flex;
          align-items: center;
          gap: 90px;
        }

        .reverse {
          flex-direction: row-reverse;
        }

        /* IMAGE SIDE */
        .imageWrap {
          position: relative;

          flex: 1;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        .imageGlow {
          position: absolute;

          width: 80%;
          height: 80%;

          background: radial-gradient(
            circle,
            rgba(0, 0, 0, 0.08),
            transparent 70%
          );

          filter: blur(70px);

          opacity: 0.7;
        }

        .image {
          position: relative;

          width: 100%;
          height: 620px;

          overflow: hidden;

          border-radius: 34px;

          background: #ddd;

          box-shadow:
            0 60px 160px rgba(0, 0, 0, 0.14),
            inset 0 1px 0 rgba(255, 255, 255, 0.4);

          transform-style: preserve-3d;

          transition:
            transform 0.8s ease,
            box-shadow 0.8s ease;
        }

        .image::after {
          content: "";

          position: absolute;
          inset: 0;

          background:
            linear-gradient(to top, rgba(0, 0, 0, 0.3), transparent 30%),
            linear-gradient(to right, rgba(255, 255, 255, 0.12), transparent);

          pointer-events: none;
        }

        .image img {
          width: 100%;
          height: 100%;

          object-fit: cover;

          transform: scale(1.05);

          transition: transform 1.2s ease;
        }

        .panel:hover .image {
          transform: perspective(1200px) rotateY(-4deg) rotateX(2deg)
            translateY(-10px);
        }

        .panel:hover .image img {
          transform: scale(1.12);
        }

        /* FLOAT CARD */
        .floatingCard {
          position: absolute;

          bottom: -30px;
          left: 40px;

          padding: 22px 26px;

          border-radius: 26px;

          background: rgba(255, 255, 255, 0.7);

          backdrop-filter: blur(24px);

          border: 1px solid rgba(255, 255, 255, 0.5);

          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.12);
        }

        .floatingCard span {
          display: block;

          font-size: 36px;
          font-weight: 900;

          line-height: 1;

          color: #0a0a0a;
        }

        .floatingCard p {
          margin-top: 6px;

          font-size: 12px;

          letter-spacing: 2px;
          text-transform: uppercase;

          color: rgba(0, 0, 0, 0.55);
        }

        /* CONTENT */
        .content {
          flex: 1;

          position: relative;
        }

        .line {
          width: 120px;
          height: 1px;

          background: rgba(0, 0, 0, 0.15);

          margin-bottom: 26px;
        }

        .serviceTag {
          display: inline-block;

          margin-bottom: 18px;

          font-size: 12px;
          font-weight: 700;

          letter-spacing: 3px;
          text-transform: uppercase;

          color: rgba(0, 0, 0, 0.45);
        }

        .content h3 {
          font-size: clamp(2rem, 4vw, 4rem);

          font-weight: 850;

          line-height: 1;

          letter-spacing: -0.05em;

          color: #0a0a0a;

          margin-bottom: 28px;
        }

        .content p {
          max-width: 580px;

          font-size: 15.5px;
          line-height: 2;

          color: rgba(0, 0, 0, 0.66);

          margin-bottom: 34px;
        }

        /* FEATURES */
        .features {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;

          margin-bottom: 36px;
        }

        .features div {
          padding: 12px 18px;

          border-radius: 999px;

          background: rgba(255, 255, 255, 0.65);

          backdrop-filter: blur(12px);

          border: 1px solid rgba(0, 0, 0, 0.06);

          font-size: 12px;
          font-weight: 600;

          color: rgba(0, 0, 0, 0.65);

          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.05);
        }

        /* BUTTON */
        button {
          display: inline-flex;
          align-items: center;
          gap: 16px;

          padding: 18px 26px;

          border: none;
          outline: none;

          border-radius: 999px;

          background: #0a0a0a;

          color: white;

          font-size: 13px;
          font-weight: 700;

          letter-spacing: 2px;
          text-transform: uppercase;

          cursor: pointer;

          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.16);

          transition:
            transform 0.35s ease,
            gap 0.35s ease,
            box-shadow 0.35s ease;
        }

        button span {
          font-size: 18px;
        }

        button:hover {
          transform: translateY(-6px);
          gap: 22px;

          box-shadow: 0 50px 120px rgba(0, 0, 0, 0.22);
        }

        /* RESPONSIVE */
        @media (max-width: 1000px) {
          .panel,
          .reverse {
            flex-direction: column;
          }

          .image {
            height: 420px;
          }

          .floatingCard {
            left: 20px;
            bottom: -20px;
          }

          .content {
            margin-top: 20px;
          }

          .header {
            margin-bottom: 90px;
          }

          .servicesWrap {
            gap: 100px;
          }
        }

        @media (max-width: 640px) {
          .services {
            padding: 100px 18px;
          }

          .image {
            height: 320px;
            border-radius: 24px;
          }

          .content h3 {
            line-height: 1.05;
          }

          .floatingCard {
            padding: 18px 20px;
          }

          .floatingCard span {
            font-size: 28px;
          }
        }
      `}</style>
    </section>
  );
}
