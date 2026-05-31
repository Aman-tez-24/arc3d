"use client";

export default function ArcLoader() {
  return (
    <div className="loaderPage">
      <div className="dotSpinner">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="dotSpinnerDot" />
        ))}
      </div>

      <div className="brand">Arc3D</div>
      <div className="subtitle">Preparing Experience</div>

      <style jsx>{`
        .loaderPage {
          position: fixed;
          inset: 0;
          z-index: 999999;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          background: radial-gradient(
            circle at center,
            #ffffff 0%,
            #f7f4ef 60%,
            #ece6da 100%
          );
        }

        .dotSpinner {
          --uib-size: 5rem;
          --uib-speed: 1s;
          --uib-color: #111111;

          position: relative;

          display: flex;
          align-items: center;
          justify-content: flex-start;

          height: var(--uib-size);
          width: var(--uib-size);
        }

        .dotSpinnerDot {
          position: absolute;
          top: 0;
          left: 0;

          display: flex;
          align-items: center;
          justify-content: flex-start;

          width: 100%;
          height: 100%;
        }

        .dotSpinnerDot::before {
          content: "";

          width: 20%;
          height: 20%;

          border-radius: 999px;

          background-color: var(--uib-color);

          transform: scale(0);

          opacity: 0.45;

          animation: pulse 1.1s ease-in-out infinite;

          box-shadow:
            0 0 12px rgba(0, 0, 0, 0.08),
            0 8px 24px rgba(0, 0, 0, 0.08);
        }

        .dotSpinnerDot:nth-child(2) {
          transform: rotate(45deg);
        }

        .dotSpinnerDot:nth-child(2)::before {
          animation-delay: -0.875s;
        }

        .dotSpinnerDot:nth-child(3) {
          transform: rotate(90deg);
        }

        .dotSpinnerDot:nth-child(3)::before {
          animation-delay: -0.75s;
        }

        .dotSpinnerDot:nth-child(4) {
          transform: rotate(135deg);
        }

        .dotSpinnerDot:nth-child(4)::before {
          animation-delay: -0.625s;
        }

        .dotSpinnerDot:nth-child(5) {
          transform: rotate(180deg);
        }

        .dotSpinnerDot:nth-child(5)::before {
          animation-delay: -0.5s;
        }

        .dotSpinnerDot:nth-child(6) {
          transform: rotate(225deg);
        }

        .dotSpinnerDot:nth-child(6)::before {
          animation-delay: -0.375s;
        }

        .dotSpinnerDot:nth-child(7) {
          transform: rotate(270deg);
        }

        .dotSpinnerDot:nth-child(7)::before {
          animation-delay: -0.25s;
        }

        .dotSpinnerDot:nth-child(8) {
          transform: rotate(315deg);
        }

        .dotSpinnerDot:nth-child(8)::before {
          animation-delay: -0.125s;
        }

        .brand {
          margin-top: 40px;

          font-size: 28px;
          font-weight: 800;

          letter-spacing: 0.28em;

          color: #111;
        }

        .subtitle {
          margin-top: 12px;

          font-size: 11px;
          font-weight: 600;

          text-transform: uppercase;
          letter-spacing: 0.32em;

          color: rgba(0, 0, 0, 0.45);
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(0);
            opacity: 0.45;
          }

          50% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
