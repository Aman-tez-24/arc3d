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
} from "lucide-react";
import Slidebar from "@/components/layout/slidebar";
export default function MyWorkPage() {
  const router = useRouter();

  const works = [
    {
      title: "Luxury Forest Villa",
      type: "3D Architecture",
      status: "Completed",
      image: "/images/showcase/showcase1.png",
      date: "May 22, 2026",
      icon: <Cuboid size={18} />,
    },
    {
      title: "Modern Duplex Floor Plan",
      type: "2D Planning",
      status: "Processing",
      image: "/images/showcase/showcase2.png",
      date: "May 19, 2026",
      icon: <Compass size={18} />,
    },
    {
      title: "Vastu Optimized Residence",
      type: "Vastu Layout",
      status: "Completed",
      image: "/images/showcase/showcase3.png",
      date: "May 16, 2026",
      icon: <Sparkles size={18} />,
    },
    {
      title: "Smart Space Interior",
      type: "3D Visualization",
      status: "Rendering",
      image: "/images/showcase/showcase4.png",
      date: "May 12, 2026",
      icon: <Cuboid size={18} />,
    },
    {
      title: "Commercial Tower Blueprint",
      type: "2D Planning",
      status: "Completed",
      image: "/images/showcase/showcase.png",
      date: "May 08, 2026",
      icon: <Compass size={18} />,
    },
    {
      title: "AI Generated Smart Layout",
      type: "AI Design",
      status: "Completed",
      image: "/images/showcase/showcase1.png",
      date: "May 03, 2026",
      icon: <Sparkles size={18} />,
    },
  ];

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
          <button className="pill">3D Models</button>
          <button className="pill">2D Plans</button>
          <button className="pill">Vastu Plans</button>
          <button className="pill">AI Generated</button>
        </div>

        {/* GRID */}
        <div className="grid">
          {works.map((work, index) => (
            <div className="card" key={index}>
              <div className="imageWrap">
                <img src={work.image} alt={work.title} />

                <div className="overlay" />

                <div className="topInfo">
                  <div className="type">
                    {work.icon}
                    <span>{work.type}</span>
                  </div>

                  <button className="moreBtn">
                    <MoreHorizontal size={16} />
                  </button>
                </div>

                <div className="bottomInfo">
                  <div>
                    <h3>{work.title}</h3>
                    <div className="meta">
                      <Clock3 size={14} />
                      <span>{work.date}</span>
                    </div>
                  </div>

                  <div
                    className={`status ${work.status
                      .toLowerCase()
                      .replace(/ /g, "")}`}
                  >
                    {work.status}
                  </div>
                </div>
              </div>

              <div className="cardFooter">
                <button>
                  <Eye size={16} />
                  Open
                </button>

                <button>
                  <Download size={16} />
                  Export
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

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
          gap: 14px;
          padding: 22px;
        }

        .cardFooter button {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 14px;
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
    </section>
  );
}
