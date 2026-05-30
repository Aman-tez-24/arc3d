"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  User,
  Bell,
  Lock,
  Palette,
  Sparkles,
  Database,
  Globe,
  Layers,
  Box,
  Activity,
} from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import { auth, db } from "@/lib/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { updateProfile, deleteUser } from "firebase/auth";
import { supabase } from "@/lib/supabase";
import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword,
} from "firebase/auth";

export default function SettingsPage() {
  const router = useRouter();
  const [active, setActive] = useState("account");
  const [profileLoading, setProfileLoading] = useState(true);
  const menu = [
    { id: "account", label: "Account", icon: <User size={18} /> },
    { id: "notifications", label: "Notifications", icon: <Bell size={18} /> },
    { id: "security", label: "Security", icon: <Lock size={18} /> },
    //{ id: "appearance", label: "Appearance", icon: <Palette size={18} /> },
    //{ id: "ai", label: "AI Settings", icon: <Sparkles size={18} /> },
    { id: "data", label: "Data", icon: <Database size={18} /> },
    // { id: "global", label: "Global", icon: <Globe size={18} /> },
  ];
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [updatingPassword, setUpdatingPassword] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    location: "",
    role: "",
    photo: "",
    company: "",
    phone: "",
  });

  const [form, setForm] = useState({
    name: "",
    email: "",
    location: "",
    role: "",
    photo: "",
    company: "",
    phone: "",
  });
  useEffect(() => {
    const loadUser = async () => {
      const currentUser = auth.currentUser;

      if (!currentUser) {
        setProfileLoading(false);
        return;
      }

      try {
        const { data } = await supabase
          .from("profiles")
          .select("photo_url")
          .eq("user_id", currentUser.uid)
          .single();

        const photo =
          data?.photo_url ||
          currentUser.photoURL ||
          "/images/default-avatar.png";

        const updatedUser = {
          name: currentUser.displayName || "Arc3D User",
          email: currentUser.email || "",
          location: "",
          role: "Arc3D Member",
          company: "",
          phone: "",
          photo,
        };

        setUser(updatedUser);
        setForm(updatedUser);
        setImagePreview(photo);
      } catch (error) {
        console.log(error);
      } finally {
        setProfileLoading(false);
      }
    };

    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        loadUser();
      } else {
        setProfileLoading(false);
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

      setUploading(true);

      // EXTENSION
      const fileExt = file.name.split(".").pop();

      // UNIQUE FILE
      const fileName = `${currentUser.uid}.${fileExt}`;

      // UPLOAD
      const { error } = await supabase.storage
        .from("profiles")
        .upload(fileName, file, {
          upsert: true,
        });

      if (error) {
        console.log(error);
        alert("Upload failed");
        return;
      }

      // GET URL
      const {
        data: { publicUrl },
      } = supabase.storage.from("profiles").getPublicUrl(fileName);

      // REMOVE CACHE
      const imageUrl = `${publicUrl}?t=${Date.now()}`;

      // UPDATE FIREBASE
      await updateProfile(currentUser, {
        photoURL: imageUrl,
      });

      // SAVE IN DATABASE
      await supabase.from("profiles").upsert({
        user_id: currentUser.uid,
        photo_url: imageUrl,
      });

      // UPDATE STATES
      setImagePreview(imageUrl);

      setForm((prev) => ({
        ...prev,
        photo: imageUrl,
      }));

      setUser((prev) => ({
        ...prev,
        photo: imageUrl,
      }));

      // LOCAL STORAGE
      const existingUser = JSON.parse(
        localStorage.getItem("arc3d-user") || "{}",
      );

      localStorage.setItem(
        "arc3d-user",
        JSON.stringify({
          ...existingUser,
          photo: imageUrl,
        }),
      );

      alert("Profile image updated");
    } catch (error) {
      console.log(error);
    } finally {
      setUploading(false);
    }
  };
  const stats = [
    { label: "Projects", value: 24, icon: <Layers size={18} /> },
    { label: "3D Models", value: 58, icon: <Box size={18} /> },
    { label: "Renders", value: 112, icon: <Activity size={18} /> },
  ];
  const [imagePreview, setImagePreview] = useState("");
  const [uploading, setUploading] = useState(false);

  const fetchProfile = async () => {
    const currentUser = auth.currentUser;

    if (!currentUser) return;

    try {
      const { data } = await supabase
        .from("profiles")
        .select("photo_url")
        .eq("user_id", currentUser.uid)
        .single();

      const profileUrl =
        data?.photo_url || form.photo || "/images/default-avatar.png";

      setImagePreview(profileUrl);

      setUser((prev) => ({
        ...prev,
        photo: profileUrl,
      }));

      setForm((prev) => ({
        ...prev,
        photo: profileUrl,
      }));
    } catch (error) {
      console.log(error);
    }
  };
  const handlePasswordUpdate = async () => {
    try {
      setUpdatingPassword(true);

      const user = auth.currentUser;

      if (!user || !user.email) {
        alert("User not found");
        return;
      }

      if (!currentPassword || !newPassword) {
        alert("Please fill all fields");
        return;
      }

      if (newPassword.length < 6) {
        alert("Password must be at least 6 characters");
        return;
      }

      const credential = EmailAuthProvider.credential(
        user.email,
        currentPassword,
      );

      await reauthenticateWithCredential(user, credential);

      await updatePassword(user, newPassword);

      setCurrentPassword("");
      setNewPassword("");

      alert("Password updated successfully");
    } catch (error: any) {
      console.log(error);

      if (error.code === "auth/wrong-password") {
        alert("Current password is incorrect");
      } else {
        alert(error.message);
      }
    } finally {
      setUpdatingPassword(false);
    }
  };

  const [notifSettings, setNotifSettings] = useState({
    emailUpdates: false,
    aiAlerts: false,
    projectActivity: false,
  });
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (!user) return;

      const ref = doc(db, "users", user.uid);
      const snap = await getDoc(ref);

      if (snap.exists()) {
        const data = snap.data()?.settings?.notifications;

        if (data) {
          setNotifSettings({
            emailUpdates: data.emailUpdates ?? false,
            aiAlerts: data.aiAlerts ?? false,
            projectActivity: data.projectActivity ?? false,
          });
        }
      }
    });

    return () => unsubscribe();
  }, []);
  const updateNotificationSetting = async (key: string, value: boolean) => {
    const user = auth.currentUser;
    if (!user) return;

    const updated = {
      ...notifSettings,
      [key]: value,
    };

    setNotifSettings(updated);

    await setDoc(
      doc(db, "users", user.uid),
      {
        settings: {
          notifications: updated,
        },
      },
      { merge: true },
    );
  };

  const handleClearCache = () => {
    try {
      localStorage.clear();
      sessionStorage.clear();

      alert("Cache cleared successfully");
    } catch (err) {
      console.log(err);
    }
  };

  const [deleting, setDeleting] = useState(false);
  const handleDeleteProjects = async () => {
    const user = auth.currentUser;
    if (!user) return;

    const confirmDelete = confirm(
      "This will permanently delete all your projects.",
    );

    if (!confirmDelete) return;

    setDeleting(true);

    const { error } = await supabase
      .from("projects")
      .delete()
      .eq("user_id", user.uid);

    setDeleting(false);

    if (error) {
      alert("Delete failed");
      return;
    }

    alert("Projects deleted successfully");
  };
  return (
    <section className="page">
      {/* PREMIUM BACKGROUND */}
      <div className="noise" />
      <div className="gridOverlay" />

      <div className="orb orb1" />
      <div className="orb orb2" />
      <div className="orb orb3" />

      {/* BACK BUTTON */}
      <button className="backBtn" onClick={() => router.back()}>
        <ArrowLeft size={17} />
        <span>Back</span>
      </button>

      {/* HEADER */}

      {/* MAIN */}
      <div className="layout">
        {/* SIDEBAR */}
        <aside className="sidebar">
          <div className="sidebarTop">
            <div className="profile">
              <div className="avatarWrapper">
                <div className="avatarContainer">
                  {profileLoading ? (
                    <div className="avatarSkeleton" />
                  ) : (
                    <Image
                      src={imagePreview || "/images/default-avatar.png"}
                      alt="Profile"
                      fill
                      sizes="110px"
                      className="previewImage"
                    />
                  )}
                </div>

                <label className="uploadBtn">
                  {uploading ? "Uploading..." : "Upload Photo"}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    hidden
                  />
                </label>
              </div>

              <div>
                <h3>{user.name}</h3>
                <span>{user.role || "Add your role"}</span>
              </div>
            </div>
          </div>

          <div className="menu">
            {menu.map((item) => (
              <button
                key={item.id}
                className={active === item.id ? "item active" : "item"}
                onClick={() => setActive(item.id)}
              >
                <div className="icon">{item.icon}</div>

                <span>{item.label}</span>

                <div className="dot" />
              </button>
            ))}
          </div>

          <div className="sidebarFooter">
            <p>ARC3D v2.0</p>
          </div>
        </aside>

        {/* CONTENT */}
        <div className="content">
          {/* ACCOUNT */}
          {active === "account" && (
            <div className="card">
              <div className="cardHeader">
                <div>
                  <span className="miniTag">PROFILE SETTINGS</span>
                  <h2>Account Configuration</h2>
                </div>

                <button
                  className="saveBtn"
                  onClick={async () => {
                    try {
                      const currentUser = auth.currentUser;

                      if (!currentUser) return;

                      await updateProfile(currentUser, {
                        displayName: form.name,
                        photoURL: form.photo,
                      });

                      const updatedUser = {
                        name: form.name,
                        email: form.email,
                        location: form.location,
                        role: form.role,
                        company: form.company,
                        phone: form.phone,
                        photo: form.photo,
                      };

                      localStorage.setItem(
                        "arc3d-user",
                        JSON.stringify(updatedUser),
                      );

                      setUser(updatedUser);

                      alert("Profile updated successfully");
                    } catch (error) {
                      console.log(error);
                    }
                  }}
                >
                  Save Changes
                </button>
              </div>

              <p className="desc">
                Manage your personal identity, workspace information, and
                architectural collaboration settings.
              </p>

              <div className="formGrid">
                {/* NAME */}
                <div className="inputBox">
                  <label>Full Name</label>

                  <input
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>

                {/* EMAIL */}
                <div className="inputBox">
                  <label>Email Address</label>

                  <input
                    placeholder="Enter your email"
                    value={form.email}
                    disabled
                  />
                </div>

                {/* ROLE */}
                <div className="inputBox">
                  <label>Role</label>

                  <input
                    placeholder="Architect Designer"
                    value={form.role}
                    onChange={(e) => setForm({ ...form, role: e.target.value })}
                  />
                </div>

                {/* LOCATION */}
                <div className="inputBox">
                  <label>Location</label>

                  <input
                    placeholder="India"
                    value={form.location}
                    onChange={(e) =>
                      setForm({ ...form, location: e.target.value })
                    }
                  />
                </div>

                {/* COMPANY */}
                <div className="inputBox full">
                  <label>Company / Studio</label>

                  <input
                    placeholder="Arc3D Studio"
                    value={form.company || ""}
                    onChange={(e) =>
                      setForm({ ...form, company: e.target.value })
                    }
                  />
                </div>

                {/* PHONE */}
                <div className="inputBox full">
                  <label>Phone Number</label>

                  <input
                    placeholder="+91 04011 05099"
                    value={form.phone || ""}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                  />
                </div>

                <div className="dangerAccount">
                  <div>
                    <h3>Delete Account</h3>

                    <p>
                      Permanently remove your Arc3D account and all associated
                      profile data.
                    </p>
                  </div>

                  <button
                    className="deleteBtn"
                    onClick={async () => {
                      try {
                        const confirmed = confirm(
                          "Are you sure you want to permanently delete your account?",
                        );

                        if (!confirmed) return;

                        const currentUser = auth.currentUser;

                        if (!currentUser) return;

                        const provider =
                          currentUser.providerData[0]?.providerId;

                        // GOOGLE RE-AUTH
                        if (provider === "google.com") {
                          const {
                            GoogleAuthProvider,
                            reauthenticateWithPopup,
                          } = await import("firebase/auth");

                          const providerInstance = new GoogleAuthProvider();

                          await reauthenticateWithPopup(
                            currentUser,
                            providerInstance,
                          );
                        }

                        // DELETE ACCOUNT
                        await deleteUser(currentUser);

                        localStorage.removeItem("arc3d-user");

                        router.push("/signin");
                      } catch (error) {
                        console.log(error);

                        alert("Unable to delete account.");
                      }
                    }}
                  >
                    Delete Account
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* NOTIFICATIONS */}
          {active === "notifications" && (
            <div className="card">
              <div className="cardHeader">
                <div>
                  <span className="miniTag">SYSTEM ALERTS</span>
                  <h2>Notifications</h2>
                </div>
              </div>

              <div className="toggleWrap">
                <div className="toggle">
                  <div>
                    <h3>Email Updates</h3>
                    <p>Receive system and workspace notifications.</p>
                  </div>

                  <input
                    type="checkbox"
                    checked={notifSettings.emailUpdates}
                    onChange={(e) =>
                      updateNotificationSetting(
                        "emailUpdates",
                        e.target.checked,
                      )
                    }
                  />
                </div>

                <div className="toggle">
                  <div>
                    <h3>AI Processing Alerts</h3>
                    <p>Get alerts when AI tasks are completed.</p>
                  </div>

                  <input
                    type="checkbox"
                    checked={notifSettings.aiAlerts}
                    onChange={(e) =>
                      updateNotificationSetting("aiAlerts", e.target.checked)
                    }
                  />
                </div>

                <div className="toggle">
                  <div>
                    <h3>Project Activity</h3>
                    <p>Track collaboration and workspace activity.</p>
                  </div>

                  <input
                    type="checkbox"
                    checked={notifSettings.projectActivity}
                    onChange={(e) =>
                      updateNotificationSetting(
                        "projectActivity",
                        e.target.checked,
                      )
                    }
                  />
                </div>
              </div>
            </div>
          )}

          {/* SECURITY */}
          {active === "security" && (
            <div className="card">
              <div className="cardHeader">
                <div>
                  <span className="miniTag">PROTECTION LAYER</span>
                  <h2>Security Settings</h2>
                </div>
              </div>

              <div className="formGrid">
                <div className="inputBox full">
                  <label>Current Password</label>
                  <input
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    placeholder="Enter current password"
                  />
                </div>

                <div className="inputBox full">
                  <label>New Password</label>
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Enter new password"
                  />
                </div>

                <button
                  className="saveBtn"
                  onClick={handlePasswordUpdate}
                  disabled={updatingPassword}
                >
                  {updatingPassword ? "Updating..." : "Update Password"}
                </button>
              </div>
            </div>
          )}

          {/* APPEARANCE 
          {active === "appearance" && (
            <div className="card">
              <div className="cardHeader">
                <div>
                  <span className="miniTag">INTERFACE DESIGN</span>
                  <h2>Appearance</h2>
                </div>
              </div>

              <div className="themeGrid">
                <div
                  className={`theme ${theme === "light" ? "activeTheme" : ""}`}
                  onClick={() => changeTheme("light")}
                >
                  <div className="themePreview light" />
                  <span>Light</span>
                </div>

                <div
                  className={`theme ${theme === "dark" ? "activeTheme" : ""}`}
                  onClick={() => changeTheme("dark")}
                >
                  <div className="themePreview dark" />
                  <span>Dark</span>
                </div>
              </div>
            </div>
          )}*/}

          {/* AI */}
          {active === "ai" && (
            <div className="card">
              <div className="cardHeader">
                <div>
                  <span className="miniTag">SPATIAL INTELLIGENCE</span>
                  <h2>AI Behavior</h2>
                </div>
              </div>

              <div className="sliderBox">
                <label>Creativity Level</label>
                <input type="range" />
              </div>

              <div className="sliderBox">
                <label>Precision Level</label>
                <input type="range" />
              </div>
            </div>
          )}

          {/* DATA */}
          {active === "data" && (
            <div className="card">
              <div className="cardHeader">
                <div>
                  <span className="miniTag">SYSTEM STORAGE</span>
                  <h2>Data Management</h2>
                </div>
              </div>

              <div className="dangerZone">
                <button onClick={handleClearCache}>Clear Cache</button>

                <button onClick={handleDeleteProjects}>Delete Projects</button>
              </div>
            </div>
          )}
          {/* GLOBAL */}
          {active === "global" && (
            <div className="card">
              <div className="cardHeader">
                <div>
                  <span className="miniTag">SYSTEM ENVIRONMENT</span>
                  <h2>Global Settings</h2>
                </div>
              </div>

              <div className="inputBox full">
                <label>Measurement Units</label>

                <select>
                  <option>Meters</option>
                  <option>Feet</option>
                </select>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* STYLES */}
      <style jsx>{`
        body.dark-mode {
          background: #0f1115;
          color: #ffffff;
        }

        /* cards */
        body.dark-mode .card {
          background: rgba(20, 22, 28, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.06);
        }

        /* inputs */
        body.dark-mode input,
        body.dark-mode textarea,
        body.dark-mode select {
          background: #1a1d25;
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        /* text dim fix */
        body.dark-mode p,
        body.dark-mode span {
          color: rgba(255, 255, 255, 0.7);
        }
        .page {
          position: relative;
          min-height: 100vh;
          overflow: hidden;

          padding: 34px;

          background:
            radial-gradient(
              circle at top left,
              rgba(255, 255, 255, 0.95),
              transparent 35%
            ),
            linear-gradient(180deg, #f8f5ef 0%, #f2eee7 40%, #ece7dd 100%);
        }

        /* NOISE */
        .noise {
          position: absolute;
          inset: 0;

          opacity: 0.03;

          background-image:
            linear-gradient(rgba(0, 0, 0, 0.45) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.45) 1px, transparent 1px);

          background-size: 140px 140px;
        }

        /* GRID */
        .gridOverlay {
          position: absolute;
          inset: 0;

          background-image:
            linear-gradient(rgba(0, 0, 0, 0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.025) 1px, transparent 1px);

          background-size: 60px 60px;

          mask-image: radial-gradient(circle at center, black, transparent 85%);
        }

        /* ORBS */
        .orb {
          position: absolute;
          border-radius: 999px;
          filter: blur(120px);
        }

        .orb1 {
          width: 500px;
          height: 500px;

          background: rgba(60, 90, 180, 0.12);

          top: -160px;
          left: -120px;
        }

        .orb2 {
          width: 420px;
          height: 420px;

          background: rgba(255, 255, 255, 0.55);

          top: 20%;
          right: -120px;
        }

        .orb3 {
          width: 400px;
          height: 400px;

          background: rgba(0, 0, 0, 0.06);

          bottom: -180px;
          left: 50%;
          transform: translateX(-50%);
        }

        /* BACK */
        .backBtn {
          position: relative;
          z-index: 10;

          display: inline-flex;
          align-items: center;
          gap: 10px;

          padding: 14px 18px;

          border-radius: 18px;

          border: 1px solid rgba(255, 255, 255, 0.7);

          background: rgba(255, 255, 255, 0.45);
          backdrop-filter: blur(20px);

          box-shadow:
            0 20px 60px rgba(0, 0, 0, 0.05),
            inset 0 1px 0 rgba(255, 255, 255, 0.9);

          cursor: pointer;

          transition: all 0.4s ease;
        }

        .backBtn:hover {
          transform: translateX(-4px);
        }

        /* LAYOUT */
        .layout {
          position: relative;
          z-index: 2;

          max-width: 1400px;
          margin: 20px auto 0;

          display: grid;
          grid-template-columns: 320px 1fr;
          gap: 28px;
        }

        /* SIDEBAR */
        .sidebar {
          padding: 26px;

          border-radius: 34px;

          background: rgba(255, 255, 255, 0.45);
          backdrop-filter: blur(24px);

          border: 1px solid rgba(255, 255, 255, 0.7);

          box-shadow:
            0 30px 100px rgba(0, 0, 0, 0.06),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);
        }

        .profile {
          display: flex;
          align-items: center;
          gap: 14px;

          padding-bottom: 24px;
          margin-bottom: 24px;

          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
        }

        .profile h3 {
          font-size: 16px;
          margin-bottom: 4px;
        }

        .profile span {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.5);
        }

        .menu {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .item {
          position: relative;

          display: flex;
          align-items: center;
          gap: 14px;

          width: 100%;

          padding: 16px 18px;

          border-radius: 20px;

          border: 1px solid transparent;

          background: transparent;

          cursor: pointer;

          transition: all 0.45s ease;

          color: rgba(0, 0, 0, 0.72);
        }

        .item:hover {
          transform: translateX(6px);

          background: rgba(255, 255, 255, 0.55);
        }

        .active {
          background: linear-gradient(
            135deg,
            rgba(15, 15, 15, 0.96),
            rgba(45, 55, 75, 0.95)
          );

          color: white;

          box-shadow:
            0 25px 60px rgba(0, 0, 0, 0.16),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
        }
        .active:hover {
          background: linear-gradient(
            135deg,
            rgba(15, 15, 15, 0.96),
            rgba(45, 55, 75, 0.95)
          );

          color: white;

          box-shadow:
            0 25px 60px rgba(0, 0, 0, 0.16),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
        }

        .icon {
          width: 38px;
          height: 38px;

          border-radius: 12px;

          display: flex;
          align-items: center;
          justify-content: center;

          background: rgba(255, 255, 255, 0.08);
        }

        .dot {
          margin-left: auto;

          width: 8px;
          height: 8px;

          border-radius: 999px;

          background: currentColor;

          opacity: 0.35;
        }

        .sidebarFooter {
          margin-top: 40px;

          text-align: center;
        }

        .sidebarFooter p {
          font-size: 12px;
          letter-spacing: 0.2em;
          color: rgba(0, 0, 0, 0.4);
        }

        /* CONTENT */
        .content {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .card {
          padding: 42px;

          border-radius: 36px;

          background: rgba(255, 255, 255, 0.45);
          backdrop-filter: blur(24px);

          border: 1px solid rgba(255, 255, 255, 0.7);

          box-shadow:
            0 30px 100px rgba(0, 0, 0, 0.06),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);
        }

        .cardHeader {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 20px;
        }

        .miniTag {
          font-size: 10px;
          letter-spacing: 0.3em;
          color: rgba(0, 0, 0, 0.45);
        }

        .card h2 {
          margin-top: 10px;

          font-size: 38px;
          line-height: 1;
          letter-spacing: -2px;
        }

        .desc {
          margin-top: 20px;

          max-width: 700px;

          font-size: 15px;
          line-height: 1.9;

          color: rgba(0, 0, 0, 0.6);
        }

        .saveBtn {
          padding: 14px 20px;

          border-radius: 16px;

          border: none;

          background: linear-gradient(135deg, #111, #37445e);

          color: white;

          cursor: pointer;
        }

        /* FORM */
        .formGrid {
          margin-top: 40px;

          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .inputBox {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .full {
          grid-column: span 2;
        }

        label {
          font-size: 13px;
          color: rgba(0, 0, 0, 0.55);
        }

        input,
        select {
          height: 58px;

          padding: 0 18px;

          border-radius: 18px;

          border: 1px solid rgba(255, 255, 255, 0.7);

          background: rgba(255, 255, 255, 0.55);

          backdrop-filter: blur(20px);

          outline: none;

          font-size: 15px;

          transition: all 0.3s ease;
        }

        input:focus,
        select:focus {
          border-color: rgba(40, 80, 180, 0.4);

          box-shadow: 0 0 0 4px rgba(40, 80, 180, 0.08);
        }

        /* TOGGLES */
        .toggleWrap {
          margin-top: 34px;

          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .toggle {
          display: flex;
          align-items: center;
          justify-content: space-between;

          padding: 24px;

          border-radius: 24px;

          background: rgba(255, 255, 255, 0.45);

          border: 1px solid rgba(255, 255, 255, 0.7);
        }

        .toggle h3 {
          margin-bottom: 6px;
        }

        .toggle p {
          font-size: 14px;
          color: rgba(0, 0, 0, 0.55);
        }

        /* THEMES */
        .themeGrid {
          margin-top: 34px;

          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .theme {
          padding: 16px;

          border-radius: 24px;

          background: rgba(255, 255, 255, 0.45);

          border: 1px solid rgba(255, 255, 255, 0.7);

          cursor: pointer;

          transition: all 0.4s ease;
        }

        .theme:hover {
          transform: translateY(-6px);
        }

        .activeTheme {
          border-color: rgba(40, 80, 180, 0.3);
        }

        .themePreview {
          height: 120px;

          border-radius: 18px;

          margin-bottom: 14px;
        }

        .light {
          background: linear-gradient(135deg, #fff, #ececec);
        }

        .dark {
          background: linear-gradient(135deg, #111, #2d3748);
        }

        .glass {
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.6),
            rgba(220, 220, 220, 0.3)
          );
        }

        .neon {
          background: linear-gradient(135deg, #00d4ff, #6a5cff);
        }

        /* SLIDER */
        .sliderBox {
          margin-top: 30px;
        }

        .sliderBox input {
          width: 100%;
          margin-top: 12px;
        }

        /* DANGER */
        .dangerZone {
          margin-top: 34px;

          display: flex;
          gap: 14px;
        }

        .dangerZone button {
          padding: 14px 18px;

          border-radius: 16px;

          border: none;

          background: linear-gradient(135deg, #8b0000, #c62828);

          color: white;

          cursor: pointer;
        }

        .avatarWrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
        }

        .avatarContainer {
          position: relative;

          width: 110px;
          height: 110px;

          overflow: hidden;
          flex-shrink: 0;

          border-radius: 28px;

          border: 3px solid rgba(255, 255, 255, 0.9);

          background: rgba(255, 255, 255, 0.75);

          backdrop-filter: blur(24px);

          box-shadow:
            0 25px 60px rgba(0, 0, 0, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 1);
        }

        .previewImage {
          object-fit: cover;
        }

        .avatarSkeleton {
          position: absolute;
          inset: 0;

          border-radius: 25px;

          background: linear-gradient(
            90deg,
            rgba(240, 240, 240, 0.9) 25%,
            rgba(225, 225, 225, 0.95) 50%,
            rgba(240, 240, 240, 0.9) 75%
          );

          background-size: 200% 100%;

          animation: shimmer 1.4s linear infinite;
        }

        @keyframes shimmer {
          from {
            background-position: 200% 0;
          }

          to {
            background-position: -200% 0;
          }
        }

        @media (max-width: 768px) {
          .profile {
            flex-direction: column;
            text-align: center;
            gap: 20px;
          }

          .profile h3 {
            font-size: 26px;
          }
        }
        .avatarSkeleton {
          position: absolute;
          inset: 0;

          border-radius: 25px;

          background: linear-gradient(
            90deg,
            rgba(240, 240, 240, 0.9) 25%,
            rgba(225, 225, 225, 0.95) 50%,
            rgba(240, 240, 240, 0.9) 75%
          );

          background-size: 200% 100%;

          animation: avatarShimmer 1.5s linear infinite;
        }

        @keyframes avatarShimmer {
          0% {
            background-position: 200% 0;
          }

          100% {
            background-position: -200% 0;
          }
        }
        .uploadBtn {
          padding: 10px 18px;

          border-radius: 14px;

          background: rgba(255, 255, 255, 0.6);

          border: 1px solid rgba(255, 255, 255, 0.8);

          backdrop-filter: blur(20px);

          font-size: 13px;
          font-weight: 600;

          cursor: pointer;

          transition: all 0.3s ease;
        }

        .uploadBtn:hover {
          transform: translateY(-2px);

          background: white;
        }
        .dangerAccount {
          margin-top: 90px;

          padding: 28px;

          width: 100%;
          max-width: 100%;

          grid-column: span 2;

          border-radius: 28px;

          background: rgba(255, 0, 0, 0.04);

          border: 1px solid rgba(255, 0, 0, 0.12);

          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 20px;
        }

        .dangerAccount h3 {
          font-size: 20px;
          margin-bottom: 10px;

          color: #8b0000;
        }

        .dangerAccount p {
          font-size: 14px;
          line-height: 1.7;

          color: rgba(0, 0, 0, 0.6);
        }

        .deleteBtn {
          padding: 14px 22px;

          border-radius: 18px;

          border: none;

          background: linear-gradient(135deg, #af0000, #c62828);

          color: white;

          font-weight: 600;

          cursor: pointer;

          transition: 0.3s ease;
        }

        .deleteBtn:hover {
          transform: translateY(-3px);

          box-shadow: 0 20px 50px rgba(198, 40, 40, 0.25);
        }

        /* RESPONSIVE */
        @media (max-width: 1100px) {
          .layout {
            grid-template-columns: 1fr;
          }

          .themeGrid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .page {
            padding: 20px;
          }

          .hero h1 {
            letter-spacing: -2px;
          }

          .formGrid {
            grid-template-columns: 1fr;
          }

          .full {
            grid-column: span 1;
          }

          .themeGrid {
            grid-template-columns: 1fr;
          }

          .card {
            padding: 28px;
          }

          .cardHeader {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
}
