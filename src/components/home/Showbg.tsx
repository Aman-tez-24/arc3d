"use client";
export default function Showbg() {
  return (
    <section className="showbg">
      <div className="imageBox" />

      <style jsx>{`
        .showbg {
          background: #f4f1ea;
          padding: 40px 10px; /* 10px horizontal padding */
        }

        .imageBox {
          width: 100%;
          height: 80vh;

          border-radius: 36px;

          background-image: url("/images/showcase.jpg");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;

          /* luxury feel depth 
          box-shadow: 0 40px 120px rgba(0, 0, 0, 0.18);
*/
          /* smooth premium touch */
          transition:
            transform 0.6s ease,
            box-shadow 0.6s ease;
        }

        .imageBox:hover {
          transform: scale(1.01);
          box-shadow: 0 60px 160px rgba(0, 0, 0, 0.25);
        }

        /* responsive tuning */
        @media (max-width: 768px) {
          .imageBox {
            height: 60vh;
            border-radius: 24px;
          }
        }
      `}</style>
    </section>
  );
}
