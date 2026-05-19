"use client";

export default function Navbar() {
  return (
    <>
      <header className="navbar">
        {/* LOGO */}
        <div className="navbarLogo">
          <h1>Arc3D</h1>
        </div>

        {/* MENU */}
        <nav className="navbarMenu">
          <button className="navItem active">Home</button>

          <button className="navItem">About</button>

          <button className="navItem">Services</button>

          <button className="navItem">Company</button>

          <button className="signBtn">Sign in</button>
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

          padding: 0 32px;

          border-radius: 20px;

          background: black;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        .navbarLogo h1 {
          color: white;

          font-size: 2rem;
          font-weight: 500;

          letter-spacing: -0.08em;

          line-height: 1;
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
