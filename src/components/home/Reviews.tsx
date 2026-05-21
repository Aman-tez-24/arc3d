"use client";

export default function Reviews() {
  const reviews = [
    {
      name: "Rohan Mehta",
      role: "Luxury Villa Architect",
      company: "RM Studio",
      review:
        "Arc3D completely transformed how we present architecture. The cinematic visualization quality helped our clients emotionally connect with the project before construction even started.",
      rating: "5.0",
    },
    {
      name: "Sophia Carter",
      role: "Interior Visualization Lead",
      company: "Nova Spaces",
      review:
        "The level of realism, lighting precision, and interactive spatial depth feels years ahead of traditional rendering workflows. It feels premium in every detail.",
      rating: "5.0",
    },
    {
      name: "Arjun Dev",
      role: "Real Estate Developer",
      company: "Urban Axis",
      review:
        "Arc3D helped us reduce design approval cycles dramatically. Clients understood the space instantly through immersive walkthroughs and intelligent visualization.",
      rating: "5.0",
    },
  ];

  return (
    <section className="reviews">
      {/* AMBIENT LIGHT */}
      <div className="ambient ambient1" />
      <div className="ambient ambient2" />

      {/* HEADER */}
      <div className="header">
        <span>CLIENT EXPERIENCES</span>

        <h2>
          Trusted by Visionaries,
          <br />
          Architects & Builders
        </h2>

        <p>
          Arc3D creates immersive architectural experiences that transform how
          modern spaces are designed, presented, and experienced.
        </p>
      </div>

      {/* REVIEW GRID */}
      <div className="grid">
        {reviews.map((item, index) => (
          <div className="card" key={index}>
            {/* TOP */}
            <div className="top">
              <div className="profile">
                <div className="avatar">
                  {item.name
                    .split(" ")
                    .map((word) => word[0])
                    .join("")}
                </div>

                <div>
                  <h3>{item.name}</h3>
                  <span>{item.role}</span>
                </div>
              </div>

              <div className="rating">{item.rating}</div>
            </div>

            {/* REVIEW */}
            <p className="review">“{item.review}”</p>

            {/* BOTTOM */}
            <div className="bottom">
              <span>{item.company}</span>

              <div className="stars">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
            </div>

            {/* GLOW */}
            <div className="cardGlow" />
          </div>
        ))}
      </div>

      <style jsx>{`
        .reviews {
          position: relative;

          overflow: hidden;

          padding: 140px 24px;

          background:
            radial-gradient(
              circle at top,
              rgba(0, 0, 0, 0.04),
              transparent 45%
            ),
            linear-gradient(to bottom, #f8f6f2, #ffffff);
        }

        /* AMBIENT */
        .ambient {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          pointer-events: none;
        }

        .ambient1 {
          width: 420px;
          height: 420px;

          background: rgba(0, 0, 0, 0.05);

          top: -120px;
          left: -100px;
        }

        .ambient2 {
          width: 360px;
          height: 360px;

          background: rgba(0, 0, 0, 0.03);

          bottom: -120px;
          right: -80px;
        }

        /* HEADER */
        .header {
          position: relative;
          z-index: 2;

          max-width: 900px;

          margin: auto;

          text-align: center;

          margin-bottom: 90px;
        }

        .header span {
          font-size: 11px;
          letter-spacing: 0.28em;
          text-transform: uppercase;

          color: rgba(0, 0, 0, 0.45);
        }

        .header h2 {
          margin-top: 20px;

          font-size: 68px;
          line-height: 0.95;
          letter-spacing: -0.07em;

          font-weight: 900;

          color: #0a0a0a;
        }

        .header p {
          margin: 30px auto 0;

          max-width: 700px;

          font-size: 16px;
          line-height: 2;

          color: rgba(0, 0, 0, 0.62);
        }

        /* GRID */
        .grid {
          position: relative;
          z-index: 2;

          max-width: 1400px;

          margin: auto;

          display: grid;
          grid-template-columns: repeat(3, 1fr);

          gap: 28px;
        }

        /* CARD */
        .card {
          position: relative;

          overflow: hidden;

          padding: 34px;

          min-height: 420px;

          border-radius: 34px;

          background: rgba(255, 255, 255, 0.72);

          backdrop-filter: blur(16px);

          border: 1px solid rgba(255, 255, 255, 0.7);

          box-shadow:
            0 40px 120px rgba(0, 0, 0, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.7);

          transition:
            transform 0.45s ease,
            box-shadow 0.45s ease;
        }

        .card:hover {
          transform: translateY(-12px);

          box-shadow:
            0 70px 180px rgba(0, 0, 0, 0.12),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);
        }

        .cardGlow {
          position: absolute;

          width: 300px;
          height: 300px;

          border-radius: 50%;

          background: radial-gradient(
            circle,
            rgba(0, 0, 0, 0.06),
            transparent 70%
          );

          top: -120px;
          right: -120px;

          pointer-events: none;
        }

        /* TOP */
        .top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .profile {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .avatar {
          width: 58px;
          height: 58px;

          border-radius: 50%;

          background: #0a0a0a;

          color: white;

          display: flex;
          align-items: center;
          justify-content: center;

          font-size: 16px;
          font-weight: 700;

          letter-spacing: 0.08em;

          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
        }

        .profile h3 {
          font-size: 18px;
          color: #0a0a0a;
          margin-bottom: 4px;
        }

        .profile span {
          font-size: 12px;
          letter-spacing: 0.08em;
          text-transform: uppercase;

          color: rgba(0, 0, 0, 0.45);
        }

        .rating {
          padding: 10px 14px;

          border-radius: 999px;

          background: rgba(0, 0, 0, 0.06);

          font-size: 13px;
          font-weight: 600;

          color: #0a0a0a;
        }

        /* REVIEW */
        .review {
          margin-top: 42px;

          font-size: 17px;
          line-height: 2;

          color: rgba(0, 0, 0, 0.68);
        }

        /* BOTTOM */
        .bottom {
          margin-top: 50px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          padding-top: 24px;

          border-top: 1px solid rgba(0, 0, 0, 0.08);
        }

        .bottom span {
          font-size: 12px;
          letter-spacing: 0.14em;
          text-transform: uppercase;

          color: rgba(0, 0, 0, 0.45);
        }

        .stars {
          display: flex;
          gap: 3px;

          color: #111;
        }

        .stars span {
          font-size: 14px;
        }

        /* RESPONSIVE */
        @media (max-width: 1100px) {
          .grid {
            grid-template-columns: 1fr;
          }

          .header h2 {
            font-size: 48px;
          }
        }

        @media (max-width: 700px) {
          .reviews {
            padding: 100px 20px;
          }

          .header h2 {
            font-size: 38px;
          }

          .card {
            padding: 26px;
            min-height: auto;
          }

          .review {
            font-size: 15px;
          }
        }
      `}</style>
    </section>
  );
}
