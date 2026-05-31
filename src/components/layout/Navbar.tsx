"use client";
import { useEffect, useState, useRef } from "react";

import { User } from "lucide-react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";

import { onAuthStateChanged, signOut } from "firebase/auth";
export default function Navbar() {
  const router = useRouter();

  const [user, setUser] = useState<any>(null);

  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);
  return (
    <>
      <header className="navbar">
        {/* LOGO */}
        <div className="navbarLogo" onClick={() => router.push("/")}>
          <img src="/images/logo.png" alt="Arc3D" />
        </div>

        {/* MENU */}
        <nav className="navbarMenu">
          <button className="navItem active" onClick={() => router.push("/")}>
            Home
          </button>

          <button className="navItem" onClick={() => router.push("/about")}>
            About
          </button>

          <button className="navItem" onClick={() => router.push("/services")}>
            Services
          </button>

          <button className="navItem" onClick={() => router.push("/company")}>
            Company
          </button>

          {user ? (
            <div className="profileWrapper" ref={menuRef}>
              <button
                className="profileBtn"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <User size={18} />
              </button>

              {menuOpen && (
                <div className="profileMenu">
                  <button
                    onClick={() => {
                      window.location.href = "/projects";
                    }}
                  >
                    Dashboard
                  </button>

                  <button
                    onClick={async () => {
                      await signOut(auth);

                      window.location.href = "/";
                    }}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              className="signBtn"
              onClick={() => {
                window.location.href = "/signin";
              }}
            >
              Sign in
            </button>
          )}
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

          background: rgba(199, 199, 199, 0.45);

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
        .profileWrapper {
          position: relative;
        }

        .profileBtn {
          width: 42px;
          height: 42px;

          border-radius: 50%;
          border: none;

          background: rgba(255, 255, 255, 0.12);

          color: white;

          cursor: pointer;

          display: flex;
          align-items: center;
          justify-content: center;

          transition: 0.3s ease;
        }

        .profileBtn:hover {
          background: rgba(255, 255, 255, 0.18);
        }

        .profileMenu {
          position: absolute;

          top: 55px;
          right: 0;

          width: 180px;

          padding: 10px;

          border-radius: 20px;

          background: rgba(255, 255, 255, 0.12);

          backdrop-filter: blur(18px);

          border: 1px solid rgba(255, 255, 255, 0.12);

          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .profileMenu button {
          height: 44px;

          border: none;

          border-radius: 14px;

          background: transparent;

          color: white;

          cursor: pointer;

          transition: 0.3s ease;
        }

        .profileMenu button:hover {
          background: rgba(255, 255, 255, 0.08);
        }
      `}</style>
    </>
  );
}
