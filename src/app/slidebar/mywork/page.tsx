"use client";

import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Cuboid,
  Compass,
  Sparkles,
  Clock3,
  Search,
  Filter,
  Plus,
  MoreHorizontal,
  Eye,
  Download,
  Trash2,
} from "lucide-react";
import Slidebar from "@/components/layout/slidebar";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
export default function MyWorkPage() {
  const router = useRouter();

  const [works, setWorks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWorks();
  }, []);

  const fetchWorks = async () => {
    setLoading(true);

    // FETCH 2D FLOOR PLANS
    const { data: floorPlans, error: floorError } = await supabase
      .from("floor_plans")
      .select("*")
      .order("created_at", { ascending: false });

    // FETCH 3D ORDERS
    const { data: orders, error: orderError } = await supabase
      .from("orders")
      .select("*")
      .order("created_at", { ascending: false });

    console.log("FLOOR PLANS:", floorPlans);
    console.log("ORDERS:", orders);

    if (floorError) {
      console.error("Floor Plans Error:", floorError);
    }

    if (orderError) {
      console.error("Orders Error:", orderError);
    }

    // FORMAT FLOOR PLANS
    const formattedFloorPlans = (floorPlans || []).map((item) => ({
      id: item.id,
      table: "floor_plans",
      title: item.title || "2D Floor Plan",
      image: item.image_url,
      description: item.description || "",
      created_at: item.created_at,
      category: "2D Planning",
      status: "Progress",
    }));

    // FORMAT 3D ORDERS
    const formattedOrders = (orders || []).map((item) => ({
      id: item.id,
      table: "orders",
      title: item.title || "Architecture",
      image: item.image_url,
      description: item.description || "",
      created_at: item.created_at,
      category: "3D Architecture",
      status: "Progress",
    }));

    // COMBINE BOTH
    const combinedWorks = [...formattedFloorPlans, ...formattedOrders];

    // SORT BY DATE
    combinedWorks.sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
    );

    setWorks(combinedWorks);

    setLoading(false);
  };

  const deleteWork = async (id: string, table: string) => {
    const { error } = await supabase.from(table).delete().eq("id", id);

    if (error) {
      console.error("Delete error:", error);
      return;
    }

    setWorks((prev) => prev.filter((item) => item.id !== id));
  };
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [deleteTable, setDeleteTable] = useState<string | null>(null);
  const confirmDelete = async () => {
    if (!deleteId || !deleteTable) return;

    console.log("Deleting from:", deleteTable, deleteId);

    const { error } = await supabase
      .from(deleteTable)
      .delete()
      .eq("id", deleteId);

    if (error) {
      console.error("Delete error:", error.message);
      return;
    }

    // refresh from DB (BEST PRACTICE)
    await fetchWorks();

    setDeleteId(null);
    setDeleteTable(null);
  };

  return (
    <section className="page">
      <Slidebar />
      {/* BACKGROUND */}
      <div className="noise" />
      <div className="gradient gradient1" />
      <div className="gradient gradient2" />
      <div className="gridOverlay" />

      {/* SIDEBAR SPACE */}
      <div className="content">
        {/* TOP BAR */}
        <div className="topBar">
          <div className="left">
            <div>
              <span className="miniTag">ARC3D WORKSPACE</span>
              <h1>My Work</h1>
            </div>
          </div>

          {/*<div className="actions">
            <div className="searchBox">
              <Search size={16} />
              <input type="text" placeholder="Search projects..." />
            </div>

            <button className="filterBtn">
              <Filter size={16} />
            </button>

            <button className="createBtn">
              <Plus size={16} />
              New Project
            </button>
          </div> */}
        </div>

        {/* HERO */}
        <div className="hero">
          <div className="heroContent">
            <span className="tag">CREATIVE ARCHIVE</span>

            <h2>
              All Your Architectural
              <br />
              Creations In One Place
            </h2>

            <p>
              Access every 3D visualization, intelligent floor plan, AI-powered
              layout, and Vastu optimized design generated inside the Arc3D
              ecosystem. Built for creators, architects, and next-generation
              spatial designers.
            </p>
          </div>

          <div className="heroStats">
            <div className="statCard">
              <h3>48</h3>
              <span>Total Projects</span>
            </div>

            <div className="statCard">
              <h3>12</h3>
              <span>Currently Rendering</span>
            </div>

            <div className="statCard">
              <h3>98%</h3>
              <span>Completion Accuracy</span>
            </div>
          </div>
        </div>

        {/* CATEGORY PILLS */}
        <div className="pills">
          <button className="pill active">All Works</button>
          {/* <button className="pill">3D Models</button>
          <button className="pill">2D Plans</button>
          <button className="pill">Vastu Plans</button>
          <button className="pill">AI Generated</button>*/}
        </div>
        {!loading && works.length === 0 && (
          <p className="loading">No projects found.</p>
        )}
        {loading && <p className="loading">Loading projects...</p>}
        {/* GRID */}
        <div className="grid">
          {works.map((work, index) => (
            <div className="card" key={index} style={{ cursor: "pointer" }}>
              <div className="imageWrap">
                <img
                  src={work.image || "/images/showcase/showcase1.png"}
                  alt={work.title}
                />

                <div className="overlay" />

                <div className="topInfo">
                  <div className="type">
                    {work.category === "2D Planning" ? (
                      <Compass size={18} />
                    ) : (
                      <Cuboid size={18} />
                    )}
                    <span>Architecture Project</span>
                  </div>
                  {/* */}

                  <button
                    className="moreBtn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setDeleteId(work.id);
                      setDeleteTable(work.table);
                    }}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>

                <div className="bottomInfo">
                  <div>
                    <h3>{work.title}</h3>
                    <div className="meta">
                      <Clock3 size={14} />
                      <span>
                        {new Date(work.created_at).toLocaleDateString()}
                      </span>
                    </div>
                  </div>

                  <div className="status completed">Process...</div>
                </div>
              </div>

              <div className="cardFooter">
                <button
                  disabled={work.status !== "Completed"}
                  className={work.status !== "Completed" ? "disabledBtn" : ""}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (work.status === "Completed") {
                      router.push(
                        `/slidebar/myworkOpen/${work.table}/${work.id}`,
                      );
                    }
                  }}
                >
                  <Eye size={16} />
                  Open
                </button>

                <button
                  disabled={work.status !== "Completed"}
                  className={work.status !== "Completed" ? "disabledBtn" : ""}
                  onClick={() => {
                    if (work.status === "Completed") {
                      console.log("Export:", work.id);
                    }
                  }}
                >
                  <Download size={16} />
                  Export
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* GRID */}
      {loading && <p className="loading">Loading projects...</p>}

      <style jsx>{`
        .page {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          padding-top: 60px;
          background:
            radial-gradient(
              circle at top left,
              rgba(72, 98, 255, 0.12),
              transparent 30%
            ),
            radial-gradient(
              circle at bottom right,
              rgba(255, 255, 255, 0.8),
              transparent 40%
            ),
            linear-gradient(180deg, #f8f6f1 0%, #f1ede4 100%);
        }

        .noise {
          position: absolute;
          inset: 0;
          opacity: 0.03;
          background-image:
            linear-gradient(rgba(0, 0, 0, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.4) 1px, transparent 1px);
          background-size: 100px 100px;
        }

        .gridOverlay {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(circle at center, black, transparent 90%);
        }

        .gradient {
          position: absolute;
          border-radius: 999px;
          filter: blur(120px);
        }

        .gradient1 {
          width: 420px;
          height: 420px;
          background: rgba(60, 100, 255, 0.12);
          top: -100px;
          left: -120px;
        }

        .gradient2 {
          width: 420px;
          height: 420px;
          background: rgba(0, 0, 0, 0.05);
          bottom: -100px;
          right: -120px;
        }

        .content {
          position: relative;
          z-index: 2;
          margin-left: 310px;
          padding: 40px 40px 80px;
        }

        .topBar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
        }

        .left {
          display: flex;
          align-items: center;
          gap: 18px;
          margin-left: 10px;
        }

        .miniTag {
          font-size: 10px;
          letter-spacing: 0.28em;
          color: rgba(0, 0, 0, 0.45);
        }

        .left h1 {
          margin-top: 8px;
          font-size: 42px;
          letter-spacing: -2px;
        }

        .actions {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .searchBox {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 18px;
          width: 320px;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.55);
          backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.7);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.05);
        }

        .searchBox input {
          border: none;
          outline: none;
          background: transparent;
          width: 100%;
          font-size: 14px;
        }

        .filterBtn,
        .createBtn {
          border: none;
          cursor: pointer;
          transition: all 0.4s ease;
        }

        .filterBtn {
          width: 54px;
          height: 54px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.55);
          backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .createBtn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 16px 24px;
          border-radius: 18px;
          background: linear-gradient(135deg, #0f172a, #31415f);
          color: white;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.18);
        }

        .hero {
          margin-top: 50px;
          display: grid;
          grid-template-columns: 1.3fr 0.7fr;
          gap: 28px;
        }

        .heroContent,
        .heroStats {
          border-radius: 36px;
          background: rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.7);
          box-shadow:
            0 30px 100px rgba(0, 0, 0, 0.06),
            inset 0 1px 0 rgba(255, 255, 255, 0.7);
        }

        .heroContent {
          padding: 54px;
        }

        .tag {
          display: inline-flex;
          padding: 12px 18px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.75);
          border: 1px solid rgba(255, 255, 255, 0.8);
          font-size: 10px;
          letter-spacing: 0.3em;
          font-weight: 700;
          color: rgba(0, 0, 0, 0.5);
        }

        .heroContent h2 {
          margin-top: 28px;
          font-size: clamp(42px, 5vw, 72px);
          line-height: 0.95;
          letter-spacing: -3px;
        }

        .heroContent p {
          margin-top: 28px;
          max-width: 720px;
          font-size: 16px;
          line-height: 2;
          color: rgba(0, 0, 0, 0.62);
        }

        .heroStats {
          padding: 30px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          justify-content: center;
        }

        .statCard {
          padding: 28px;
          border-radius: 26px;
          background: rgba(255, 255, 255, 0.65);
          border: 1px solid rgba(255, 255, 255, 0.7);
        }

        .statCard h3 {
          font-size: 42px;
          letter-spacing: -2px;
          margin-bottom: 10px;
        }

        .statCard span {
          font-size: 13px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(0, 0, 0, 0.5);
        }

        .pills {
          margin-top: 40px;
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        .pill {
          padding: 14px 22px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.8);
          background: rgba(255, 255, 255, 0.55);
          backdrop-filter: blur(24px);
          color: rgba(0, 0, 0, 0.65);
          cursor: pointer;
          transition: all 0.4s ease;
        }

        .pill.active,
        .pill:hover {
          background: #111827;
          color: white;
          transform: translateY(-3px);
        }

        .grid {
          margin-top: 40px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .card {
          overflow: hidden;
          border-radius: 30px;
          background: rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.7);
          box-shadow: 0 25px 80px rgba(0, 0, 0, 0.06);
          transition: all 0.5s ease;
        }

        .card:hover {
          transform: translateY(-10px);
          box-shadow: 0 40px 120px rgba(0, 0, 0, 0.12);
        }

        .imageWrap {
          position: relative;
          height: 320px;
        }

        .imageWrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s ease;
        }

        .card:hover img {
          transform: scale(1.08);
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.78),
            transparent 60%
          );
        }

        .topInfo,
        .bottomInfo {
          position: absolute;
          left: 22px;
          right: 22px;
          z-index: 2;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .topInfo {
          top: 22px;
        }

        .bottomInfo {
          bottom: 22px;
          align-items: flex-end;
        }

        .type {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 16px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.16);
          backdrop-filter: blur(20px);
          color: white;
          font-size: 12px;
        }

        .moreBtn {
          width: 42px;
          height: 42px;
          border-radius: 14px;
          border: none;
          background: rgba(255, 255, 255, 0.16);
          backdrop-filter: blur(20px);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .bottomInfo h3 {
          font-size: 26px;
          line-height: 1.1;
          color: white;
          letter-spacing: -1px;
        }

        .meta {
          margin-top: 10px;
          display: flex;
          align-items: center;
          gap: 8px;
          color: rgba(255, 255, 255, 0.7);
          font-size: 13px;
        }

        .status {
          padding: 12px 16px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 700;
          backdrop-filter: blur(20px);
        }

        .completed {
          background: rgba(16, 185, 129, 0.2);
          color: #b8ffe1;
        }

        .processing,
        .rendering {
          background: rgba(245, 158, 11, 0.2);
          color: #ffe7b3;
        }

        .cardFooter {
          display: flex;
          gap: 48px;
          padding: 22px;
          height: 100px;
        }

        .cardFooter button {
          flex: 1;
          display: flex;
          height: 50;
          align-items: center;
          justify-content: center;
          gap: 10px;

          padding: 12px;
          border-radius: 16px;
          border: 1px solid rgba(0, 0, 0, 0.06);
          background: rgba(255, 255, 255, 0.65);
          cursor: pointer;
          transition: all 0.4s ease;
        }

        .cardFooter button:hover {
          transform: translateY(-3px);
          background: white;
        }
        .disabledBtn {
          opacity: 0.45;
          cursor: not-allowed !important;
          pointer-events: none;
          background: rgba(255, 255, 255, 0.35) !important;
          color: rgba(0, 0, 0, 0.45);
          border: 1px solid rgba(0, 0, 0, 0.05);
          box-shadow: none !important;
          transform: none !important;
        }

        .disabledBtn:hover {
          transform: none !important;
          background: rgba(255, 255, 255, 0.35) !important;
        }
        .modalOverlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 999;
        }

        .modal {
          width: 360px;
          padding: 24px;
          border-radius: 20px;
          background: white;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
          text-align: center;
        }

        .modalActions {
          display: flex;
          justify-content: space-between;
          margin-top: 20px;
        }

        .modalActions button {
          padding: 10px 16px;
          border-radius: 10px;
          border: none;
          cursor: pointer;
        }

        .modalActions .danger {
          background: #ef4444;
          color: white;
        }
        .loading {
          margin-top: 30px;
          font-size: 14px;
          opacity: 0.6;
        }
        @media (max-width: 1200px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 1000px) {
          .content {
            margin-left: 0;
            padding: 24px;
          }

          .topBar,
          .hero {
            grid-template-columns: 1fr;
            display: grid;
          }

          .actions {
            flex-wrap: wrap;
          }

          .searchBox {
            width: 100%;
          }
        }

        @media (max-width: 768px) {
          .grid {
            grid-template-columns: 1fr;
          }

          .heroContent {
            padding: 34px 26px;
          }

          .heroContent h2 {
            line-height: 1;
            letter-spacing: -2px;
          }

          .left h1 {
            font-size: 32px;
          }
        }
      `}</style>
      {deleteId && (
        <div className="modalOverlay">
          <div className="modal">
            <h3>Delete Project?</h3>
            <p>This action cannot be undone.</p>

            <div className="modalActions">
              <button
                onClick={() => {
                  setDeleteId(null);
                  setDeleteTable(null);
                }}
              >
                Cancel
              </button>

              <button className="danger" onClick={confirmDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
