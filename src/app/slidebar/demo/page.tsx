"use client";

import { useMemo, useState } from "react";
import { Cuboid, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import Slidebar from "@/components/layout/slidebar";
export default function DemoModelsPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(4);

  const categories = ["All", "Residential", "Commercial", "Luxury", "Interior"];

  const models = [
    {
      title: "Modern Villa X1",
      type: "Residential",
      desc: "Ultra-modern 3BHK villa with open space planning.",
      image: "/images/showcase/showcase.png",
    },
    {
      title: "Skyline Tower",
      type: "Commercial",
      desc: "High-rise commercial structure with glass facade.",
      image: "/images/showcase/showcase1.png",
    },
    {
      title: "Luxury Mansion A9",
      type: "Luxury",
      desc: "Premium mansion with cinematic architectural design.",
      image: "/images/showcase/showcase2.png",
    },
    {
      title: "Minimal Studio Home",
      type: "Residential",
      desc: "Compact minimalist home optimized for urban living.",
      image: "/images/showcase/showcase3.png",
    },
    {
      title: "Corporate HQ Prime",
      type: "Commercial",
      desc: "Smart corporate headquarters with modern workflow design.",
      image: "/images/showcase/showcase4.png",
    },
    {
      title: "Zen Interior Space",
      type: "Interior",
      desc: "Peaceful interior with natural lighting balance.",
      image: "/images/showcase/showcase.png",
    },
    {
      title: "Glass Penthouse",
      type: "Luxury",
      desc: "Ultra-premium penthouse with skyline view.",
      image: "/images/showcase/showcase1.png",
    },
    {
      title: "Urban Smart Home",
      type: "Residential",
      desc: "AI-optimized smart home layout design.",
      image: "/images/showcase/showcase2.png",
    },
  ];

  const filtered =
    activeTab === "All" ? models : models.filter((m) => m.type === activeTab);

  const paginated = useMemo(() => {
    const start = (page - 1) * perPage;
    return filtered.slice(start, start + perPage);
  }, [filtered, page, perPage]);

  const changePage = (newPage: number): void => {
    if (Number.isNaN(newPage)) return;

    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };
  const totalPages = Math.ceil(models.length / perPage);

  const next = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const prev = () => {
    if (page > 1) setPage(page - 1);
  };
  return (
    <div className="page">
      <Slidebar />
      {/* HERO */}
      <div className="hero">
        <div className="badge">
          <Sparkles size={16} />
          Premium 3D Model Library
        </div>

        <h1>Explore Demo Models</h1>
        <p>
          High-fidelity architectural visuals with real-world lighting and
          materials for immersive previews.
        </p>
      </div>
      {/*
    
      <div className="tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`tab ${activeTab === cat ? "activeTab" : ""}`}
            onClick={() => {
              setActiveTab(cat);
              setPage(1);
            }}
          >
            {cat}
          </button>
        ))}
      </div>

    
      <div className="grid">
        {paginated.map((model, i) => (
          <div
            key={i}
            className="card"
            style={{ backgroundImage: `url(${model.image})` }}
          >
            <div className="overlay" />

            <div className="content">
              <div className="top">
                <Cuboid size={16} />
                <span>{model.type}</span>
              </div>

              <h3>{model.title}</h3>
              <p>{model.desc}</p>

              <button className="btn">View Project</button>
            </div>
          </div>
        ))}
      </div>
      */}

      {/*
      <div className="pagination">
        <div className="left">
          <button className="navBtn" onClick={prev}>
            <ChevronLeft size={18} />
          </button>

          <div className="pagePill"> 
      
      <strong>{page}</strong>
      
       </div>

          <button className="navBtn" onClick={next}>
            <ChevronRight size={18} />
          </button>
        </div> 
     
        <div className="right">
          <div className="label">Cards per page</div>

          <div className="selectWrap">
            <select
              value={perPage}
              onChange={(e) => {
                setPerPage(Number(e.target.value));
                setPage(1);
              }}
            >
              <option value={4}>4</option>
              <option value={6}>6</option>
              <option value={8}>8</option>
              <option value={12}>12</option>
            </select>
          </div>
        </div>
      </div>*/}

      <div className="comingSoonCard">
        <div className="comingBadge">
          <Cuboid size={18} />
          <span>DEMO MODELS</span>
        </div>

        <h2>Interactive Demo Models Coming Soon</h2>

        <p>
          We are currently preparing a collection of immersive architectural
          demonstrations, real-time walkthroughs, AI-generated floor plans, and
          cinematic visualization experiences. These showcase environments will
          be available in a future update.
        </p>

        <div className="comingFeatures">
          <span>Interactive models</span>
          <span>Real world Rendering</span>
          <span>Floor Planning</span>
          <span>Cinematic Visualizations</span>
        </div>
      </div>

      {/* STYLES */}
      <style jsx>{`
        .page {
          margin-left: 290px;
          padding: 100px 40px 60px;
          min-height: 100vh;
          background:
            radial-gradient(
              circle at top left,
              rgba(236, 232, 184, 0.12),
              transparent 40%
            ),
            linear-gradient(180deg, #f7f4ee, #ece7dc);
          /*background: #f3f1eb;*/
        }

        /* HERO */
        .hero {
          padding: 40px;
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.7);
          margin-bottom: 30px;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 12px;
          border-radius: 999px;
          background: rgba(0, 0, 0, 0.05);
          font-size: 12px;
          margin-bottom: 12px;
        }

        .hero h1 {
          margin: 0;
          font-size: 34px;
        }

        .hero p {
          margin-top: 10px;
          color: rgba(0, 0, 0, 0.6);
          max-width: 600px;
        }

        /* TABS */
        .tabs {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 30px;
        }

        .tab {
          padding: 10px 16px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.8);
          cursor: pointer;
        }

        .activeTab {
          background: #111;
          color: white;
        }

        /* GRID */
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 20px;
        }

        .card {
          position: relative;
          height: 320px;
          border-radius: 22px;
          background-size: cover;
          background-position: center;
          overflow: hidden;
          transition: all 0.4s ease;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
        }

        .card:hover {
          transform: translateY(-10px) scale(1.02);
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.75),
            rgba(0, 0, 0, 0.2),
            transparent
          );
        }

        .content {
          position: absolute;
          bottom: 0;
          padding: 18px;
          color: white;
        }

        .top {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          opacity: 0.85;
        }

        h3 {
          margin: 8px 0 4px;
          font-size: 18px;
        }

        p {
          font-size: 12px;
          opacity: 0.8;
        }

        .btn {
          margin-top: 10px;
          width: 100%;
          padding: 10px;
          border-radius: 12px;
          border: none;
          background: rgba(255, 255, 255, 0.15);
          color: white;
          backdrop-filter: blur(10px);
          cursor: pointer;
        }

        /* ===== PREMIUM PAGINATION BAR ===== */
        .pagination {
          margin-top: 62px;

          display: flex;
          justify-content: space-between;
          align-items: center;

          padding: 16px 18px;

          border-radius: 18px;

          background: rgba(255, 255, 255, 0.65);
          backdrop-filter: blur(22px);

          border: 1px solid rgba(255, 255, 255, 0.7);

          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.08);

          transition: all 0.3s ease;
        }

        /* LEFT SIDE */
        .left {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        /* NAV BUTTONS */
        .navBtn {
          width: 40px;
          height: 40px;

          border-radius: 12px;

          border: 1px solid rgba(0, 0, 0, 0.06);
          background: rgba(255, 255, 255, 0.9);

          display: flex;
          align-items: center;
          justify-content: center;

          cursor: pointer;

          transition: all 0.25s ease;
        }

        .navBtn:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
          background: white;
        }

        /* CENTER PILL */
        .pagePill {
          display: flex;
          align-items: center;
          gap: 6px;

          padding: 8px 14px;

          border-radius: 12px;

          background: linear-gradient(135deg, #ffffff, #f2f6ff);
          border: 1px solid rgba(0, 0, 0, 0.06);

          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.8);
        }

        .pagePill span {
          font-size: 12px;
          color: #666;
        }

        .pagePill strong {
          font-size: 14px;
          color: #111;
        }

        /* RIGHT SIDE */
        .right {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .label {
          font-size: 13px;
          color: #555;
        }

        /* SELECT WRAPPER (premium feel) */
        .selectWrap {
          position: relative;
        }

        .selectWrap select {
          appearance: none;

          padding: 8px 32px 8px 12px;

          border-radius: 12px;

          border: 1px solid rgba(0, 0, 0, 0.08);

          background: rgba(255, 255, 255, 0.95);

          cursor: pointer;

          font-weight: 500;

          transition: all 0.25s ease;
        }

        .selectWrap select:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
        }

        /* OPTIONAL: hover glow for full bar */
        .pagination:hover {
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.12);
        }
        .comingSoonCard {
          position: relative;
          overflow: hidden;

          max-width: 1000px;
          margin: 60px auto 0;
          padding: 80px 50px;

          text-align: center;

          border-radius: 32px;

          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.08),
            rgba(255, 255, 255, 0.03)
          );

          backdrop-filter: blur(20px);

          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .comingBadge {
          display: inline-flex;
          align-items: center;
          gap: 10px;

          padding: 12px 20px;
          border-radius: 999px;

          background: rgba(52, 52, 52, 0.06);

          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.15em;
        }

        .comingSoonCard h2 {
          margin-top: 28px;

          font-size: clamp(36px, 5vw, 64px);
          line-height: 1.05;
          font-weight: 800;
          letter-spacing: -2px;
        }

        .comingSoonCard p {
          max-width: 720px;
          margin: 24px auto 0;

          font-size: 16px;
          line-height: 1.9;

          color: rgba(33, 33, 33, 0.65);
        }

        .comingFeatures {
          margin-top: 40px;

          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 14px;
        }

        .comingFeatures span {
          padding: 12px 18px;

          border-radius: 999px;

          background: rgba(2, 2, 2, 0.05);

          border: 1px solid rgba(255, 255, 255, 0);

          font-size: 13px;
          color: rgba(23, 23, 23, 0.8);
        }

        @media (max-width: 768px) {
          .comingSoonCard {
            padding: 60px 24px;
          }

          .comingSoonCard h2 {
            letter-spacing: -1px;
          }
        }
        .comingSoonCard {
          position: relative;
          overflow: hidden;

          max-width: 1000px;
          margin: 60px auto 0;
          padding: 80px 50px;

          text-align: center;

          border-radius: 32px;

          background: rgba(255, 255, 255, 0.75);

          backdrop-filter: blur(24px);

          border: 1px solid rgba(255, 255, 255, 0.9);

          box-shadow:
            0 30px 80px rgba(0, 0, 0, 0.06),
            inset 0 1px 0 rgba(255, 255, 255, 0.9);
        }
      `}</style>
    </div>
  );
}
