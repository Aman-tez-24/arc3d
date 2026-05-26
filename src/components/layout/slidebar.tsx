"use client";

import { useState } from "react";
import { signOut } from "firebase/auth";
import { supabase } from "@/lib/supabase";

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
  CheckCircle2,
  MessageSquare,
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
  const [profilePhoto, setProfilePhoto] = useState(
    "/images/default-avatar.png",
  );
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

  const fetchProfile = async () => {
    try {
      const user = auth.currentUser;

      if (!user) return;

      const { data, error } = await supabase
        .from("profiles")
        .select("photo_url")
        .eq("user_id", user.uid)
        .single();

      if (error) {
        console.log(error);
        return;
      }

      if (data?.photo_url) {
        setProfilePhoto(data.photo_url);
      } else {
        setProfilePhoto("/images/default-avatar.png");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        fetchProfile();
      }
    });

    return () => unsubscribe();
  }, []);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const file = e.target.files?.[0];

      if (!file) return;

      const currentUser = auth.currentUser;

      if (!currentUser) return;

      const fileExt = file.name.split(".").pop();

      const fileName = `${currentUser.uid}-${Date.now()}.${fileExt}`;

      // UPLOAD TO SUPABASE STORAGE
      const { error: uploadError } = await supabase.storage
        .from("profiles")
        .upload(fileName, file, {
          upsert: true,
        });

      if (uploadError) {
        console.log(uploadError);
        return;
      }

      // GET PUBLIC URL
      const {
        data: { publicUrl },
      } = supabase.storage.from("profiles").getPublicUrl(fileName);

      // SAVE TO DATABASE
      const { error: dbError } = await supabase.from("profiles").upsert({
        user_id: currentUser.uid,
        photo_url: publicUrl,
      });

      if (dbError) {
        console.log(dbError);
        return;
      }

      setProfilePhoto(publicUrl);

      alert("Profile photo updated!");
    } catch (error) {
      console.log(error);
    }
  };

  const [open, setOpen] = useState(false);

  const cardRef = useRef<HTMLDivElement>(null);

  /* const notifications = [
    {
      id: 1,
      title: "3D Model Generated",
      message: "Your luxury villa render has been completed.",
      time: "2 min ago",
      icon: <Sparkles size={16} />,
    },
    {
      id: 2,
      title: "New Message",
      message: "Architect team sent feedback on your floor plan.",
      time: "15 min ago",
      icon: <MessageSquare size={16} />,
    },
    {
      id: 3,
      title: "Project Approved",
      message: "Your modern elevation design was approved.",
      time: "1 hour ago",
      icon: <CheckCircle2 size={16} />,
    },
  ];*/

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [notifications, setNotifications] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchNotifications = async () => {
    const currentUser = auth.currentUser;
    if (!currentUser) return;

    setLoading(true);

    const { data, error } = await supabase
      .from("notifications")
      .select("*")
      .eq("user_id", currentUser.uid)
      .order("created_at", { ascending: false });

    if (error) {
      console.log(error);
    } else {
      setNotifications(data || []);
    }

    setLoading(false);
  };

  const handleOpen = () => {
    const next = !open;
    setOpen(next);

    if (next) fetchNotifications();
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <>
      <aside className="sidebar">
        <div>
          <div className="logoWrap">
            <div
              className="logo"
              onClick={() => document.getElementById("profileUpload")?.click()}
            >
              <img
                src={profilePhoto || "/images/default-avatar.png"}
                alt="Profile"
              />
            </div>
            <div
              className="navbarLogo"
              onClick={() => {
                window.location.href = "/";
              }}
            >
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
          <div className="notificationWrapper" ref={cardRef}>
            <button className="iconBtn" onClick={handleOpen}>
              <Bell size={20} />

              {unreadCount > 0 && <span className="notificationDot" />}
            </button>

            {open && (
              <div className="notificationCard">
                <div className="notificationHeader">
                  <h3>Notifications</h3>

                  <span>{notifications.length} New</span>
                </div>

                <div className="notificationList">
                  {loading ? (
                    <p style={{ padding: "20px" }}>Loading...</p>
                  ) : notifications.length === 0 ? (
                    <p style={{ padding: "20px" }}>No notifications</p>
                  ) : (
                    notifications.map((item) => (
                      <div className="notificationItem" key={item.id}>
                        <div className="notificationIcon">
                          <Bell size={16} />
                        </div>

                        <div className="notificationContent">
                          <h4>{item.title}</h4>
                          <p>{item.message}</p>
                          <span>
                            {new Date(item.created_at).toLocaleString()}
                          </span>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>

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
          width: 72px;
          height: 72px;
          border-radius: 18px;

          display: flex;
          align-items: center;
          justify-content: center;

          background: linear-gradient(135deg, #111, #3d4d6b);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          cursor: pointer;
        }

        .logo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 18px;
        }

        .navbarLogo {
          width: 128px;
          height: 68px;
          margin-left: 5px;
          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 14px;

          background: rgba(255, 255, 255, 0);
          /* backdrop-filter: blur(18px);

          border: 1px solid rgba(255, 255, 255, 0.7);

          box-shadow:
            0 10px 30px rgba(0, 0, 0, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);
*/
          cursor: pointer;

          transition: all 0.35s ease;

          overflow: hidden;
        }

        .navbarLogo:hover {
          transform: translateY(-3px) scale(1.03);
          /* box-shadow:
            0 18px 45px rgba(0, 0, 0, 0.12),
            inset 0 1px 0 rgba(255, 255, 255, 0.9); */
        }

        .navbarLogo img {
          width: 80%;
          height: 80%;
          object-fit: contain;

          filter: brightness(0) saturate(100%);
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
        .notificationWrapper {
          position: relative;
        }

        .iconBtn {
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

        .iconBtn:hover {
          transform: translateY(-2px);
        }

        .notificationDot {
          position: absolute;

          top: 12px;
          right: 12px;

          width: 10px;
          height: 10px;

          border-radius: 999px;

          background: #ff3b30;

          border: 2px solid white;
        }

        .notificationCard {
          position: absolute;

          top: 68px;
          right: 0;

          width: 380px;

          padding: 22px;

          border-radius: 30px;

          background: rgba(255, 255, 255, 0.87);

          backdrop-filter: blur(30px);

          border: 1px solid rgba(255, 255, 255, 0.7);

          box-shadow:
            0 40px 120px rgba(0, 0, 0, 0.12),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);

          animation: popup 0.25s ease;
        }

        @keyframes popup {
          from {
            opacity: 0;
            transform: translateY(-10px) scale(0.98);
          }

          to {
            opacity: 1;
            transform: translateY(0px) scale(1);
          }
        }

        .notificationHeader {
          display: flex;
          align-items: center;
          justify-content: space-between;

          margin-bottom: 20px;
        }

        .notificationHeader h3 {
          font-size: 22px;
          font-weight: 700;
        }

        .notificationHeader span {
          font-size: 12px;

          padding: 6px 10px;

          border-radius: 999px;

          background: rgba(0, 0, 0, 0.06);
        }

        .notificationList {
          display: flex;
          flex-direction: column;
          gap: 14px;

          max-height: 420px;
          overflow-y: auto;

          padding-right: 6px;

          scrollbar-width: thin; /* Firefox */
          scrollbar-color: rgba(0, 0, 0, 0.25) transparent;
        }

        /* Chrome / Edge / Safari */
        .notificationList::-webkit-scrollbar {
          width: 4px;
        }

        .notificationList::-webkit-scrollbar-track {
          background: transparent;
        }

        .notificationList::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.25);
          border-radius: 999px;
          transition: all 0.3s ease;
        }

        .notificationList::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 0, 0, 0.45);
        }
        .notificationItem {
          display: flex;
          gap: 14px;

          padding: 16px;

          border-radius: 22px;

          background: rgb(255, 255, 255);

          border: 1px solid rgba(255, 255, 255, 0.7);

          transition: 0.3s ease;
        }

        .notificationItem:hover {
          transform: translateY(-2px);

          background: white;
        }

        .notificationIcon {
          min-width: 42px;
          height: 42px;

          border-radius: 14px;

          display: flex;
          align-items: center;
          justify-content: center;

          background: linear-gradient(135deg, #111, #37445e);

          color: white;
        }

        .notificationContent h4 {
          font-size: 15px;
          margin-bottom: 6px;
        }

        .notificationContent p {
          font-size: 13px;
          line-height: 1.6;

          color: rgba(0, 0, 0, 0.65);

          margin-bottom: 8px;
        }

        .notificationContent span {
          font-size: 11px;

          color: rgba(0, 0, 0, 0.45);
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
