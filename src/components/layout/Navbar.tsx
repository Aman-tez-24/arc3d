"use client";

export default function Navbar() {
  return (
    <>
      <header className="navbar">
        {/* LOGO */}
        <div
          className="navbarLogo"
          onClick={() => {
            window.location.href = "/";
          }}
        >
          <img src="/images/logo.png" alt="Arc3D" />
        </div>

        {/* MENU */}
        <nav className="navbarMenu">
          <button
            className="navItem active"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            Home
          </button>

          <button
            className="navItem"
            onClick={() => {
              window.location.href = "/about";
            }}
          >
            About
          </button>

          <button
            className="navItem"
            onClick={() => {
              window.location.href = "/services";
            }}
          >
            Services
          </button>

          <button
            className="navItem"
            onClick={() => {
              window.location.href = "/company";
            }}
          >
            Company
          </button>

          <button
            className="signBtn"
            onClick={() => {
              window.location.href = "/signin";
            }}
          >
            Sign in
          </button>
        </nav>
      </header>

      <style jsx>{`
        .navbar {
          position: absolute;

          top: 12px;
          left: 24px;
          right: 24px;

          z-index: 100;

          display: flex;
          align-items: flex-start;
          justify-content: space-between;
        }

        /* LOGO */

        .navbarLogo {
          height: 60px;
          cursor: pointer;
          padding: 0 10px;

          border-radius: 20px;

          background: transparent;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        .navbarLogo img {
          height: 42px;
          width: auto;
          object-fit: contain;
          display: block;
          user-select: none;

          filter: brightness(0) saturate(100%);

          opacity: 0.95;
        }

        /* MENU */

        .navbarMenu {
          height: 60px;
          margin-top: 10px;
          padding: 0 12px;

          border-radius: 20px;

          display: flex;
          align-items: center;
          gap: 4px;

          background: rgba(185, 200, 210, 0.14);

          backdrop-filter: blur(18px);

          border: 1px solid rgba(255, 255, 255, 0.12);
        }

        /* NAV ITEMS */

        .navItem {
          height: 40px;

          padding: 0 24px;
          margin: 0 10px;

          border: none;
          outline: none;

          border-radius: 20px;

          background: transparent;

          color: rgba(255, 255, 255, 0.82);

          font-size: 1rem;
          font-weight: 300;

          letter-spacing: -0.03em;

          cursor: pointer;

          transition: 0.3s ease;
        }

        .navItem:hover {
          background: rgba(255, 255, 255, 0.08);

          color: white;
        }

        .active {
          background: rgba(255, 255, 255, 0.08);

          color: white;
        }

        /* SIGN BUTTON */

        .signBtn {
          height: 40px;

          padding: 0 20px;

          margin-left: 6px;

          border: none;
          outline: none;

          border-radius: 16px;

          background: black;

          color: white;

          font-size: 1rem;
          font-weight: 500;

          letter-spacing: -0.03em;

          cursor: pointer;

          transition: 0.3s ease;
        }

        .signBtn:hover {
          transform: scale(1.02);
        }
      `}</style>
    </>
  );
}
