"use client";

import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Cuboid,
  Compass,
  Boxes,
  Settings,
  Sparkles,
  Bell,
  User,
  Search,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const [profileOpen, setProfileOpen] = useState(false);
  const [logoutOpen, setLogoutOpen] = useState(false);
  const menu = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={18} />,
      path: "/projects",
    },
    {
      name: "2D → 3D Model",
      icon: <Cuboid size={18} />,
      path: "/slidebar/2d-3d",
    },
    {
      name: "Floor Planning",
      icon: <Compass size={18} />,
      path: "/slidebar/floor-planning",
    },
    {
      name: "Demo Models",
      icon: <Boxes size={18} />,
      path: "/slidebar/demo",
    },
    {
      name: "My work",
      icon: <Sparkles size={18} />,
      path: "/slidebar/mywork",
    },
  ];

  const profileRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <aside className="sidebar">
        <div>
          <div className="logoWrap">
            <div className="logo" onClick={() => router.push("/")}>
              <img src="/images/logo.png" alt="Arc3D" />
            </div>
          </div>

          <div className="menu">
            {menu.map((item) => {
              const isActive = pathname === item.path;

              return (
                <button
                  key={item.name}
                  className={`menuItem ${isActive ? "active" : ""}`}
                  onClick={() => router.push(item.path)}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        <button className="settings" onClick={() => router.push("/profile")}>
          <Settings size={18} />
          <span>Settings</span>
        </button>
      </aside>

      {/* TOP BAR (unchanged) */}
      <header className="topbar">
        <div className="searchBox">
          <Search size={18} />
          <input type="text" placeholder="Search..." />
        </div>

        <div className="topbarRight">
          <button className="iconBtn">
            <Bell size={20} />
          </button>

          <div className="profileWrapper" ref={profileRef}>
            <button
              className="profileBtn"
              onClick={() => setProfileOpen((prev) => !prev)}
            >
              <User size={20} />
            </button>

            {profileOpen && (
              <div className="profileMenu">
                <button
                  className="menuItem"
                  onClick={() => router.push("/profile")}
                >
                  Profile
                </button>
                <button
                  className="menuItem logout"
                  onClick={() => {
                    setProfileOpen(false);
                    setLogoutOpen(true);
                  }}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* STYLES */}
      <style jsx>{`
        .sidebar {
          position: fixed;
          top: 0;
          left: 0;
          width: 290px;
          height: 100vh;
          padding: 34px 22px;

          display: flex;
          flex-direction: column;
          justify-content: space-between;

          background: rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(24px);

          border-right: 1px solid rgba(255, 255, 255, 0.7);
          box-shadow: inset -1px 0 0 rgba(255, 255, 255, 0.6);

          z-index: 1000;
        }

        .logoWrap {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 50px;
        }

        .logo {
          width: 60%;
          height: 56px;
          border-radius: 18px;

          display: flex;
          align-items: center;
          justify-content: center;

          background: linear-gradient(135deg, #111, #3d4d6b);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          cursor: pointer;
        }

        .logo img {
          width: 60px;
        }

        .menu {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .menuItem,
        .settings {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px 18px;
          border-radius: 18px;

          border: 1px solid transparent;
          background: transparent;
          color: rgba(0, 0, 0, 0.7);

          cursor: pointer;
          transition: all 0.4s ease;
        }

        .menuItem:hover,
        .settings:hover,
        .active {
          background: rgba(255, 255, 255, 0.75);
          border-color: rgba(255, 255, 255, 0.8);
          transform: translateX(6px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.06);
        }

        /* TOP BAR */
        .topbar {
          position: fixed;
          top: 12px;
          left: 310px;
          right: 0;
          border-radius: 20px;
          height: 70px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          padding: 0 30px;

          background: rgba(197, 197, 197, 0.38);
          backdrop-filter: blur(20px);

          border-bottom: 1px solid rgba(255, 255, 255, 0.6);
          margin-right: 20px;
          z-index: 999;
        }

        .topbarRight {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        /* SEARCH BOX (LEFT SIDE) */
        .searchBox {
          display: flex;
          align-items: center;
          gap: 8px;

          padding: 8px 14px;
          border-radius: 14px;

          background: rgba(255, 255, 255, 0.55);
          border: 1px solid rgba(255, 255, 255, 0.7);

          backdrop-filter: blur(10px);

          transition: all 0.3s ease;
        }

        .searchBox input {
          border: none;
          outline: none;
          background: transparent;

          width: 220px;
          font-size: 14px;
          color: #111;
        }

        .searchBox:focus-within {
          transform: scale(1.02);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
        }

        .iconBtn,
        .profileBtn {
          width: 42px;
          height: 42px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 12px;

          border: 1px solid rgba(255, 255, 255, 0.6);

          background: rgba(255, 255, 255, 0.5);

          cursor: pointer;

          transition: all 0.3s ease;
        }

        .iconBtn:hover,
        .profileBtn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
        }

        .profileWrapper {
          position: relative;
        }

        .profileMenu {
          position: absolute;
          top: 50px;
          right: 0;

          width: 160px;

          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(18px);

          border: 1px solid rgba(255, 255, 255, 0.6);

          border-radius: 14px;

          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);

          overflow: hidden;

          animation: fadeIn 0.2s ease;
          z-index: 2000;
        }

        .profileMenu .menuItem {
          width: 100%;
          padding: 12px 14px;

          background: transparent;
          border: none;

          text-align: left;

          cursor: pointer;

          transition: 0.2s ease;
        }

        .profileMenu .menuItem:hover {
          background: rgba(0, 0, 0, 0.05);
        }

        .profileMenu .logout {
          color: #e11d48;
        }

        /* animation */
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .modalOverlay {
          position: fixed;
          inset: 0;

          background: rgba(0, 0, 0, 0.45);
          backdrop-filter: blur(6px);

          display: flex;
          align-items: center;
          justify-content: center;

          z-index: 3000;

          animation: fadeBg 0.2s ease;
        }

        .modalCard {
          width: 320px;

          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(20px);

          border-radius: 18px;

          padding: 22px;

          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.25);

          text-align: center;

          animation: popIn 0.25s ease;
        }

        .modalCard h2 {
          margin-bottom: 8px;
          font-size: 18px;
        }

        .modalCard p {
          font-size: 14px;
          color: #555;
          margin-bottom: 18px;
        }

        .modalActions {
          display: flex;
          justify-content: space-between;
          gap: 10px;
        }

        .cancelBtn,
        .confirmBtn {
          flex: 1;
          padding: 10px 12px;

          border-radius: 10px;

          border: none;

          cursor: pointer;

          transition: 0.2s ease;
        }

        .cancelBtn {
          background: #e5e7eb;
        }

        .cancelBtn:hover {
          background: #d1d5db;
        }

        .confirmBtn {
          background: #ef4444;
          color: white;
        }

        .confirmBtn:hover {
          background: #dc2626;
        }

        /* animations */
        @keyframes fadeBg {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes popIn {
          from {
            transform: scale(0.85);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
      {logoutOpen && (
        <div className="modalOverlay">
          <div className="modalCard">
            <h2>Confirm Logout</h2>
            <p>Are you sure you want to logout from Arc3D?</p>

            <div className="modalActions">
              <button
                className="cancelBtn"
                onClick={() => setLogoutOpen(false)}
              >
                Cancel
              </button>

              <button
                className="confirmBtn"
                onClick={async () => {
                  try {
                    await signOut(auth);

                    setLogoutOpen(false);

                    router.push("/signin");
                  } catch (error) {
                    console.log(error);
                  }
                }}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
