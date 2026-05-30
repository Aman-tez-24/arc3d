"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  Cuboid,
  Compass,
  Boxes,
  Settings,
  ArrowUpRight,
  Play,
  Search,
  Bell,
  Sparkles,
  User,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Slidebar from "@/components/layout/slidebar";
import { useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { auth } from "@/lib/firebase";

const demos = [
  "Interactive Walkthrough",
  "Real-time Lighting",
  "AI Generated Floor Maps",
  "Cinematic Rendering",
];

export default function Arc3DProjectsPage() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        fetchProjects();
      } else {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);

      const user = auth.currentUser;

      if (!user) {
        setLoading(false);
        return;
      }

      // FETCH FLOOR PLANS
      const { data: floorPlans } = await supabase
        .from("floor_plans")
        .select("*")
        .eq("user_id", user.uid)
        .order("created_at", { ascending: false });

      // FETCH 3D ORDERS
      const { data: orders } = await supabase
        .from("orders")
        .select("*")
        .eq("user_id", user.uid)
        .order("created_at", { ascending: false });

      // FORMAT FLOOR PLANS
      const formattedFloorPlans = (floorPlans || []).map((item) => ({
        id: item.id,
        title: item.title || "2D Floor Plan",
        category: "2D Planning",
        image: item.image_url,
        status: item.status || "Progress",
        created_at: item.created_at,
      }));

      // FORMAT ORDERS
      const formattedOrders = (orders || []).map((item) => ({
        id: item.id,
        title: item.title || "3D Architecture",
        category: "3D Visualization",
        image: item.image_url,
        status: item.status || "Progress",
        created_at: item.created_at,
      }));

      // COMBINE + SORT
      const combinedProjects = [
        ...formattedFloorPlans,
        ...formattedOrders,
      ].sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
      );

      setProjects(combinedProjects);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="page">
      {/* BACKGROUND */}
      <div className="gradient gradient1" />
      <div className="gradient gradient2" />
      <div className="gridOverlay" />

      {/* SIDEBAR */}
      <Slidebar />
      {/* MAIN */}
      <main className="content">
        {/* TOPBAR */}
        <div className="topbar">
          <div>
            <span className="miniTag">ARC3D PROJECT SYSTEM</span>

            <h1>Architectural Project Dashboard</h1>
          </div>

          <div className="actions">
            <button
              className="primaryBtn"
              onClick={() => router.push("/slidebar/2d-3d")}
            >
              <Sparkles size={16} />
              <span>Create</span>
            </button>
          </div>
        </div>

        {/* HERO PANEL */}
        <div className="heroPanel">
          <div className="heroContent">
            <span className="heroTag">NEXT GENERATION ARCHITECTURE</span>

            <h2>
              Intelligent 3D Architecture
              <br />
              Powered by Spatial AI
            </h2>

            <p>
              Arc3D combines cinematic visualization, AI-driven floor planning,
              and immersive spatial systems into one premium architecture
              platform. Build, simulate, visualize, and deploy next-generation
              architectural environments with real-time intelligence.
            </p>

            <div className="heroButtons">
              <button
                className="primaryBtn largeBtn"
                onClick={() => router.push("/slidebar/2d-3d")}
              >
                Start New Environment
              </button>

              {/* <button className="secondaryBtn largeBtn">
                <Play size={16} />
                <span>Watch Demo</span>
              </button>*/}
            </div>
          </div>

          <div className="heroVisual">
            <div className="visualCard glass">
              <span>AI Render Engine</span>
              <h3>Realtime Visualization</h3>
            </div>

            <div className="visualCircle">
              <div className="innerCircle">
                <span>3D</span>
              </div>
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="stats">
          <div className="statCard glass">
            <h3>4+</h3>
            <p>Architectural Concepts</p>
          </div>

          <div className="statCard glass">
            <h3>98%</h3>
            <p>Visualization Accuracy</p>
          </div>

          <div className="statCard glass">
            <h3>Real World</h3>
            <p>Rendering Pipeline</p>
          </div>
        </div>

        {/* PROJECTS */}
        <div className="sectionHeader">
          <div>
            <span>SELECTED WORK</span>
            <h2>Built Architectural Environments</h2>
          </div>

          <button
            className="viewAll"
            onClick={() => router.push("/slidebar/mywork")}
          >
            View All
            <ArrowUpRight size={16} />
          </button>
        </div>
        {loading && <p className="loadingText">Loading projects...</p>}

        {!loading && projects.length === 0 && (
          <p className="loadingText">No projects found.</p>
        )}
        <div className="projectGrid">
          {projects.map((project, index) => (
            <div className="projectCard" key={index}>
              <div className="imageWrap">
                <img
                  src={project.image || "/images/showcase/showcase1.png"}
                  alt={project.title}
                />

                <div className="overlay" />

                <div
                  className={`status ${
                    project.status === "Completed"
                      ? "completed"
                      : project.status === "Progress"
                        ? "progress"
                        : "prototype"
                  }`}
                >
                  {project.status}
                </div>
              </div>

              <div className="projectContent">
                <span>{project.category}</span>
                <h3>{project.title}</h3>

                <div className="bottomRow">
                  <p>Immersive architectural visualization system.</p>

                  <button onClick={() => router.push("/slidebar/mywork")}>
                    <ArrowUpRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* DEMO SECTION */}
        <div className="demoSection glass">
          <div className="demoLeft">
            <span>COMING SOON</span>

            <h2>Future Arc3D Capabilities</h2>

            <p>
              We are actively developing the next generation of Arc3D
              technologies. These features are currently under research and
              development and will be introduced in future releases as the
              platform continues to evolve.
            </p>
          </div>

          <div className="demoGrid">
            <div className="demoCard">
              <div className="demoNumber">01</div>
              <h3>2D Floor Plan to 3D Model Automation</h3>
            </div>

            <div className="demoCard">
              <div className="demoNumber">02</div>
              <h3>AI-Assisted Architectural Planning</h3>
            </div>

            <div className="demoCard">
              <div className="demoNumber">03</div>
              <h3>Automated Interior Generation</h3>
            </div>

            <div className="demoCard">
              <div className="demoNumber">04</div>
              <h3>Interactive Architectural Experiences</h3>
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        .page {
          position: relative;
          min-height: 100vh;
          display: flex;
          background: linear-gradient(
            180deg,
            #f8f6f1 0%,
            #f1ede5 40%,
            #ece7dc 100%
          );
          overflow: hidden;
          color: #111;
          padding-top: 60px;
        }

        .gradient {
          position: absolute;
          border-radius: 999px;
          filter: blur(120px);
          z-index: 0;
        }

        .gradient1 {
          width: 520px;
          height: 520px;
          background: rgba(30, 80, 200, 0.12);
          top: -180px;
          left: -140px;
        }

        .gradient2 {
          width: 520px;
          height: 520px;
          background: rgba(255, 255, 255, 0.7);
          bottom: -220px;
          right: -120px;
        }

        .gridOverlay {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(0, 0, 0, 0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.025) 1px, transparent 1px);
          background-size: 70px 70px;
          opacity: 0.6;
          mask-image: radial-gradient(circle at center, black, transparent 90%);
        }

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

          font-size: 24px;
          font-weight: 900;

          background: linear-gradient(135deg, #111, #3d4d6b);
          color: white;

          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }
        .logo img {
          width: 60px;
        }
        .logoWrap h2 {
          font-size: 20px;
          letter-spacing: -0.5px;
        }

        .logoWrap p {
          margin-top: 4px;
          font-size: 12px;
          color: rgba(0, 0, 0, 0.55);
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

        .content {
          position: relative;
          z-index: 2;
          flex: 1;

          padding: 42px;
          margin-left: 290px;
        }

        .topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .miniTag {
          font-size: 11px;
          letter-spacing: 0.3em;
          color: rgba(0, 0, 0, 0.45);
        }

        .topbar h1 {
          margin-top: 14px;
          font-size: clamp(34px, 5vw, 62px);
          line-height: 0.95;
          letter-spacing: -2px;
        }

        .actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .iconBtn,
        .primaryBtn,
        .secondaryBtn,
        .viewAll,
        .projectContent button {
          border: none;
          cursor: pointer;
        }

        .iconBtn {
          width: 52px;
          height: 52px;
          border-radius: 16px;

          display: flex;
          align-items: center;
          justify-content: center;

          background: rgba(255, 255, 255, 0.65);
          backdrop-filter: blur(18px);

          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.06);
        }

        .primaryBtn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 15px 32px;
          border-radius: 18px;

          background: #111;
          color: white;

          font-weight: 600;

          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.18);
        }
        .actions {
          margin-top: 40px;
        }
        .heroPanel {
          margin-top: 36px;
          padding: 42px;
          border-radius: 40px;

          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 40px;

          background: rgba(255, 255, 255, 0.45);
          backdrop-filter: blur(30px);

          border: 1px solid rgba(255, 255, 255, 0.75);

          box-shadow:
            0 40px 120px rgba(0, 0, 0, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.9);
        }

        .heroTag {
          display: inline-block;
          padding: 10px 14px;
          border-radius: 999px;

          background: rgba(255, 255, 255, 0.7);

          font-size: 11px;
          letter-spacing: 0.2em;
          color: rgba(0, 0, 0, 0.6);
        }

        .heroContent h2 {
          margin-top: 26px;
          font-size: clamp(34px, 5vw, 68px);
          line-height: 0.95;
          letter-spacing: -3px;
        }

        .heroContent p {
          margin-top: 24px;
          max-width: 700px;

          font-size: 15px;
          line-height: 2;

          color: rgba(0, 0, 0, 0.62);
        }

        .heroButtons {
          margin-top: 34px;
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .secondaryBtn {
          display: flex;
          align-items: center;
          gap: 10px;

          padding: 15px 22px;
          border-radius: 18px;

          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(16px);
        }

        .heroVisual {
          position: relative;
          min-height: 420px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .visualCircle {
          width: 300px;
          height: 300px;
          border-radius: 999px;

          background: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.9),
            rgba(20, 20, 20, 0.08)
          );

          display: flex;
          align-items: center;
          justify-content: center;

          box-shadow:
            inset 0 0 40px rgba(255, 255, 255, 0.9),
            0 40px 120px rgba(0, 0, 0, 0.12);
        }

        .innerCircle {
          width: 180px;
          height: 180px;
          border-radius: 999px;

          background: linear-gradient(135deg, #111, #2d3c55);
          color: white;

          display: flex;
          align-items: center;
          justify-content: center;

          font-size: 64px;
          font-weight: 800;

          box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
        }

        .visualCard {
          position: absolute;
          top: 30px;
          right: 10px;

          padding: 24px;
          border-radius: 24px;
        }

        .visualCard span {
          font-size: 12px;
          letter-spacing: 0.18em;
          color: rgba(0, 0, 0, 0.45);
        }

        .visualCard h3 {
          margin-top: 10px;
          font-size: 24px;
          line-height: 1.1;
        }

        .glass {
          background: rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.8);

          box-shadow:
            0 30px 100px rgba(0, 0, 0, 0.06),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);
        }
        .loadingText {
          margin-top: 30px;
          font-size: 15px;
          color: rgba(0, 0, 0, 0.6);
        }

        .status.completed {
          background: rgba(16, 185, 129, 0.18);
          color: #065f46;
        }

        .status.progress {
          background: rgba(245, 158, 11, 0.18);
          color: #92400e;
        }

        .status.prototype {
          background: rgba(59, 130, 246, 0.18);
          color: #1d4ed8;
        }
        .stats {
          margin-top: 28px;

          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .statCard {
          padding: 30px;
          border-radius: 28px;
        }

        .statCard h3 {
          font-size: 40px;
          letter-spacing: -1px;
        }

        .statCard p {
          margin-top: 10px;
          color: rgba(0, 0, 0, 0.58);
        }

        .sectionHeader {
          margin-top: 90px;

          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 20px;
        }

        .sectionHeader span {
          font-size: 11px;
          letter-spacing: 0.25em;
          color: rgba(0, 0, 0, 0.45);
        }

        .sectionHeader h2 {
          margin-top: 14px;
          font-size: 42px;
          letter-spacing: -1.5px;
        }

        .viewAll {
          display: flex;
          align-items: center;
          gap: 10px;

          padding: 14px 18px;
          border-radius: 16px;

          background: rgba(255, 255, 255, 0.7);
        }

        .projectGrid {
          margin-top: 34px;

          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .projectCard {
          overflow: hidden;
          border-radius: 32px;

          background: rgba(255, 255, 255, 0.45);
          backdrop-filter: blur(24px);

          border: 1px solid rgba(255, 255, 255, 0.7);

          transition: all 0.5s ease;
        }

        .projectCard:hover {
          transform: translateY(-10px);

          box-shadow: 0 40px 120px rgba(0, 0, 0, 0.12);
        }

        .imageWrap {
          position: relative;
          height: 320px;
          overflow: hidden;
        }

        .imageWrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;

          transition: transform 1s ease;
        }

        .projectCard:hover img {
          transform: scale(1.08);
        }

        .overlay {
          position: absolute;
          inset: 0;

          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.6),
            transparent 60%
          );
        }

        .status {
          position: absolute;
          top: 20px;
          left: 20px;

          padding: 10px 14px;
          border-radius: 999px;

          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(12px);

          font-size: 12px;
          font-weight: 600;
        }

        .projectContent {
          padding: 28px;
        }

        .projectContent span {
          font-size: 11px;
          letter-spacing: 0.18em;
          color: rgba(0, 0, 0, 0.45);
        }

        .projectContent h3 {
          margin-top: 14px;
          font-size: 30px;
          line-height: 1.05;
          letter-spacing: -1px;
        }

        .bottomRow {
          margin-top: 24px;

          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .bottomRow p {
          color: rgba(0, 0, 0, 0.58);
          line-height: 1.7;
        }

        .projectContent button {
          width: 54px;
          height: 54px;
          border-radius: 16px;

          background: #111;
          color: white;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        .demoSection {
          margin-top: 100px;
          padding: 42px;
          border-radius: 38px;

          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }

        .demoLeft span {
          font-size: 11px;
          letter-spacing: 0.22em;
          color: rgba(0, 0, 0, 0.45);
        }

        .demoLeft h2 {
          margin-top: 18px;
          font-size: 42px;
          line-height: 1;
          letter-spacing: -1.5px;
        }

        .demoLeft p {
          margin-top: 20px;
          line-height: 2;
          color: rgba(0, 0, 0, 0.6);
        }

        .demoGrid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
        }

        .demoCard {
          padding: 28px;
          border-radius: 24px;

          background: rgba(255, 255, 255, 0.65);

          transition: all 0.4s ease;
        }

        .demoCard:hover {
          transform: translateY(-8px);
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.08);
        }

        .demoNumber {
          font-size: 12px;
          letter-spacing: 0.2em;
          color: rgba(0, 0, 0, 0.45);
        }

        .demoCard h3 {
          margin-top: 18px;
          font-size: 22px;
          line-height: 1.2;
        }

        @media (max-width: 1200px) {
          .heroPanel,
          .demoSection {
            grid-template-columns: 1fr;
          }

          .projectGrid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 900px) {
          .page {
            flex-direction: column;
          }

          .sidebar {
            position: relative;
            width: 100%;
            height: auto;
          }

          .content {
            padding: 24px 18px 80px;
          }

          .topbar {
            flex-direction: column;
            align-items: flex-start;
          }

          .stats,
          .demoGrid {
            grid-template-columns: 1fr;
          }

          .sectionHeader {
            flex-direction: column;
            align-items: flex-start;
          }

          .heroPanel,
          .demoSection {
            padding: 28px;
          }

          .heroContent h2,
          .sectionHeader h2,
          .demoLeft h2 {
            font-size: 34px;
          }

          .projectContent h3 {
            font-size: 24px;
          }
        }
      `}</style>
    </section>
  );
}
