"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  User,
  Bell,
  Lock,
  Palette,
  Sparkles,
  Database,
  Globe,
  ArrowLeft,
} from "lucide-react";

export default function SettingsPage() {
  const [active, setActive] = useState("account");
  const router = useRouter();
  const menu = [
    { id: "account", label: "Account", icon: <User size={18} /> },
    { id: "notifications", label: "Notifications", icon: <Bell size={18} /> },
    { id: "security", label: "Security", icon: <Lock size={18} /> },
    { id: "appearance", label: "Appearance", icon: <Palette size={18} /> },
    { id: "ai", label: "AI Settings", icon: <Sparkles size={18} /> },
    { id: "data", label: "Data", icon: <Database size={18} /> },
    { id: "global", label: "Global", icon: <Globe size={18} /> },
  ];

  return (
    <section className="page">
      {/* BACKGROUND */}
      <div className="bgGlow g1" />
      <div className="bgGlow g2" />

      {/* TOP HEADER */}
      <div className="top">
        <button className="backBtn" onClick={() => router.back()}>
          <ArrowLeft size={18} />
          Back
        </button>
      </div>

      {/* LAYOUT */}
      <div className="layout">
        {/* LEFT SIDEBAR (NEW PREMIUM PANEL) */}
        <aside className="sideBar">
          <div className="logoWrap">
            <div className="logo" onClick={() => router.push("/")}>
              <img src="/images/logo.png" alt="Arc3D" />
            </div>
          </div>
          <div className="menu">
            {menu.map((item) => (
              <button
                key={item.id}
                className={active === item.id ? "active item" : "item"}
                onClick={() => setActive(item.id)}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </aside>

        {/* RIGHT CONTENT */}
        <main className="content">
          {/* ACCOUNT */}
          {active === "account" && (
            <div className="card">
              <h2>Account Overview</h2>
              <p>Manage your identity and workspace profile.</p>

              <div className="grid">
                <input placeholder="Full Name" />
                <input placeholder="Email Address" />
                <input placeholder="Company Name" />
                <input placeholder="Role / Profession" />
              </div>
            </div>
          )}

          {/* NOTIFICATIONS */}
          {active === "notifications" && (
            <div className="card">
              <h2>Notifications</h2>

              <div className="toggle">
                <span>Email Updates</span>
                <input type="checkbox" />
              </div>

              <div className="toggle">
                <span>AI Processing Alerts</span>
                <input type="checkbox" />
              </div>

              <div className="toggle">
                <span>Project Activity</span>
                <input type="checkbox" />
              </div>
            </div>
          )}

          {/* SECURITY */}
          {active === "security" && (
            <div className="card">
              <h2>Security Center</h2>

              <div className="grid">
                <input placeholder="Change Password" />
                <input placeholder="2FA Code" />
              </div>
            </div>
          )}

          {/* APPEARANCE */}
          {active === "appearance" && (
            <div className="card">
              <h2>Appearance</h2>

              <div className="themes">
                <button>Light</button>
                <button>Dark</button>
                <button>Glass</button>
                <button>Neo</button>
              </div>
            </div>
          )}

          {/* AI */}
          {active === "ai" && (
            <div className="card">
              <h2>AI Behavior Control</h2>

              <div className="slider">
                <label>Creativity</label>
                <input type="range" />

                <label>Precision</label>
                <input type="range" />
              </div>
            </div>
          )}

          {/* DATA */}
          {active === "data" && (
            <div className="card danger">
              <h2>Data Management</h2>

              <button>Clear Cache</button>
              <button>Delete All Projects</button>
            </div>
          )}

          {/* GLOBAL */}
          {active === "global" && (
            <div className="card">
              <h2>Global System Settings</h2>

              <select>
                <option>Metric (Meters)</option>
                <option>Imperial (Feet)</option>
              </select>
            </div>
          )}
        </main>
      </div>

      {/* STYLE */}
      <style jsx>{`
        .page {
          min-height: 100vh;
          padding: 90px 40px 40px 40px;
          background: #f3f1eb;
          position: relative;
        }

        /* BACKGROUND */
        .bgGlow {
          position: absolute;
          width: 500px;
          height: 500px;
          filter: blur(120px);
          border-radius: 999px;
          z-index: 0;
        }

        .g1 {
          background: rgba(0, 60, 120, 0.12);
          top: -120px;
          left: -120px;
        }

        .g2 {
          background: rgba(0, 0, 0, 0.05);
          bottom: -120px;
          right: -120px;
        }

        /* TOP BAR */
        /* BACK BUTTON */
        .backBtn {
          position: fixed;
          top: 20px;
          left: 20px;

          display: flex;
          align-items: center;
          gap: 8px;

          padding: 10px 14px;
          border-radius: 12px;

          border: 1px solid rgba(0, 0, 0, 0.1);
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);

          cursor: pointer;
          transition: 0.3s;
        }

        .backBtn:hover {
          transform: translateX(-3px);
        }

        /* LAYOUT */
        .layout {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 24px;
          margin-top: 20px;
        }

        /* SIDEBAR */
        .sideBar {
          position: sticky;
          top: 80px;

          height: fit-content;

          padding: 24px;
          border-radius: 24px;

          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(20px);

          border: 1px solid rgba(255, 255, 255, 0.8);
        }

        .logoWrap {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 40px;
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
          gap: 10px;
        }

        .item {
          display: flex;
          align-items: center;
          gap: 10px;

          padding: 12px 14px;
          border-radius: 14px;

          border: 1px solid transparent;
          background: transparent;

          cursor: pointer;
          transition: 0.3s;
        }

        .item:hover {
          transform: translateX(4px);
          background: rgba(255, 255, 255, 0.7);
        }

        .active {
          background: #111;
          color: white;
        }

        /* CONTENT */
        .content {
          padding: 20px;
        }

        .card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(20px);

          padding: 26px;
          border-radius: 22px;

          border: 1px solid rgba(255, 255, 255, 0.8);
        }

        .grid {
          display: grid;
          gap: 12px;
          margin-top: 16px;
        }

        input,
        select {
          padding: 12px;
          border-radius: 12px;
          border: 1px solid rgba(0, 0, 0, 0.1);
        }

        .toggle {
          display: flex;
          justify-content: space-between;
          margin-top: 14px;
        }

        .themes button {
          margin-right: 10px;
          padding: 10px 14px;
          border-radius: 12px;
          border: 1px solid rgba(0, 0, 0, 0.1);
          background: white;
        }

        .danger button {
          margin-right: 10px;
          padding: 10px 14px;
          border-radius: 12px;
          background: #b91c1c;
          color: white;
          border: none;
        }

        @media (max-width: 900px) {
          .layout {
            grid-template-columns: 1fr;
          }

          .sideBar {
            position: relative;
            top: 0;
          }
        }
      `}</style>
    </section>
  );
}
