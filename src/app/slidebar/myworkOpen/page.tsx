"use client";

import { Sparkles, DollarSign, Send } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Download,
  Cuboid,
  Calendar,
  User,
  Ruler,
  Layers,
  Eye,
  Share2,
  Settings,
} from "lucide-react";
import Slidebar from "@/components/layout/slidebar";

export default function MyWorkModelPreviewPage() {
  const [activeTab, setActiveTab] = useState("details");

  const router = useRouter();
  const [models, setModels] = useState<any[]>([]);
  const model = models[0];
  const searchParams = useSearchParams();

  const id = searchParams.get("id");
  const table = searchParams.get("table");
  console.log("ID:", id);
  console.log("TABLE:", table);
  const [bid, setBid] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!id || !table) return;
    const safeTable = table as "orders" | "floor_plans";
    const fetchData = async () => {
      const { data, error } = await supabase
        .from(safeTable)
        .select("*")
        .eq("id", id);

      console.log("DATA:", data);
      console.log("ERROR:", error);

      if (error) {
        console.error("Fetch error:", error);
        return;
      }

      if (!data || data.length === 0) {
        console.log("No record found");
        return;
      }

      const item = data[0];

      setModels([
        {
          id: item.id,
          title: item.title,
          type: table === "orders" ? "3D Model" : "2D Plan",
          image: item.image_url,
          description: item.description,
          price: item.price || "N/A",
          status: item.status || "Processing",
          created: item.created_at,
          author: item.user_name || "Arc3D AI Engine",
          scale: item.scale || "1:100",
          floors: item.floors || 1,
          tags: item.tags || [],
        },
      ]);
    };

    fetchData();
  }, [id, table]);

  return (
    <section className="page">
      {/* BACKGROUND */}
      <Slidebar />
      <div className="bgGlow g1" />
      <div className="bgGlow g2" />
      <div className="noise" />

      {/* SIDEBAR SPACE WRAPPER */}
      <div className="container">
        {/* TOP BAR */}
        <div className="topBar">
          <div className="titleWrap">
            <span className="tag">ARC3D WORKSPACE</span>
            <h1>{model?.title || "In Progress..."}</h1>
          </div>

          <div className="actions">
            <button className="primaryBtn">
              <Download size={18} /> Download
            </button>
          </div>
        </div>

        {/* MAIN */}
        <div className="layout">
          {/* PREVIEW */}
          <div className="preview">
            <div className="previewHeader">
              <span>3D Model Preview</span>
              <div className="badge">Interactive</div>
            </div>

            <div className="modelBox">
              <div className="modelMock">
                <Cuboid size={64} />
                <p>3D Model Render Area</p>
              </div>
            </div>

            <div className="previewFooter">
              <button>Rotate</button>
              <button>Zoom</button>
              <button>Fullscreen</button>
            </div>
          </div>

          {/* DETAILS BELOW PREVIEW */}
          <div className="details">
            <div className="tabs">
              <button
                className={activeTab === "details" ? "active" : ""}
                onClick={() => setActiveTab("details")}
              >
                Details
              </button>
              <button
                className={activeTab === "specs" ? "active" : ""}
                onClick={() => setActiveTab("specs")}
              >
                Specs
              </button>
              <button
                className={activeTab === "activity" ? "active" : ""}
                onClick={() => setActiveTab("activity")}
              >
                Activity
              </button>
            </div>

            {activeTab === "details" && (
              <div className="panel">
                <h2>Description</h2>
                <p>{model?.description}</p>

                <div className="infoGrid">
                  <div className="info">
                    <Calendar size={16} />
                    <span>{model?.created}</span>
                  </div>

                  <div className="info">
                    <User size={16} />
                    <span>{model?.author}</span>
                  </div>

                  <div className="info">
                    <Layers size={16} />
                    <span>{model?.floors} Floors</span>
                  </div>

                  <div className="info">
                    <Ruler size={16} />
                    <span>{model?.scale}</span>
                  </div>
                </div>

                <div className="tags">
                  {model?.tags.map((t: string, i: number) => (
                    <span key={i}>{t}</span>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "specs" && (
              <div className="panel">
                <h2>Technical Specs</h2>
                <p>
                  • Optimized polygon mesh structure
                  <br />
                  • Real-world scale mapping enabled
                  <br />
                  • Physically-based rendering materials
                  <br />
                  • AI-driven structural validation
                  <br />• Lighting simulation ready
                </p>
              </div>
            )}

            {activeTab === "activity" && (
              <div className="panel">
                <h2>Recent Activity</h2>
                <p>
                  • Model generated via Arc3D AI
                  <br />
                  • Materials optimized
                  <br />
                  • Lighting recalculated
                  <br />• Ready for export
                </p>
              </div>
            )}

            <div className="cta">
              <button className="primaryFull">Download Full Model</button>
              <button className="ghost">Request Revision</button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .page {
          position: relative;
          min-height: 100vh;
          background:
            radial-gradient(
              circle at top left,
              rgba(60, 90, 200, 0.12),
              transparent 40%
            ),
            radial-gradient(
              circle at bottom right,
              rgba(0, 0, 0, 0.05),
              transparent 50%
            ),
            linear-gradient(180deg, #f7f5ef, #f1ede4);
          overflow: hidden;
        }

        .noise {
          position: absolute;
          inset: 0;
          opacity: 0.03;
          background-image: linear-gradient(
            rgba(0, 0, 0, 0.4) 1px,
            transparent 1px
          );
          background-size: 90px 90px;
        }

        .bgGlow {
          position: absolute;
          border-radius: 999px;
          filter: blur(120px);
        }

        .g1 {
          width: 420px;
          height: 420px;
          background: rgba(80, 120, 255, 0.12);
          top: -120px;
          left: -120px;
        }

        .g2 {
          width: 420px;
          height: 420px;
          background: rgba(0, 0, 0, 0.06);
          bottom: -120px;
          right: -120px;
        }

        .container {
          position: relative;
          z-index: 2;
          margin-left: 310px;
          width: 75%;
          padding: 40px;
          margin-top: 60px;
        }

        .topBar {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .tag {
          font-size: 10px;
          letter-spacing: 0.3em;
          color: rgba(0, 0, 0, 0.5);
        }

        h1 {
          font-size: 34px;
          letter-spacing: -1px;
        }

        .actions {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .iconBtn {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.7);
          background: rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(20px);

          display: flex;
          align-items: center;
          justify-content: center;
        }

        .primaryBtn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 20px;
          padding: 14px 18px;
          border-radius: 14px;
          background: #111;
          color: white;
          border: none;
        }

        .layout {
          margin-top: 20px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .preview,
        .details {
          background: rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(20px);
          border-radius: 28px;
          padding: 26px;
          border: 1px solid rgba(255, 255, 255, 0.7);
        }

        .modelBox {
          height: 420px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modelMock {
          text-align: center;
          opacity: 0.6;
        }

        .previewFooter {
          display: flex;
          justify-content: space-around;
        }

        .tabs {
          display: flex;
          gap: 10px;
        }

        .tabs button {
          flex: 1;
          padding: 10px;
          border-radius: 10px;
          border: none;
          background: rgba(0, 0, 0, 0.05);
        }

        .tabs .active {
          background: #111;
          color: white;
        }

        .infoGrid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          margin-top: 20px;
        }

        .info {
          display: flex;
          gap: 10px;
          align-items: center;
          font-size: 13px;
        }

        .tags span {
          display: inline-block;
          margin: 4px;
          padding: 6px 10px;
          border-radius: 999px;
          background: rgba(0, 0, 0, 0.06);
          font-size: 12px;
        }

        .cta {
          margin-top: 20px;
          display: flex;
          gap: 10px;
        }

        .primaryFull {
          flex: 1;
          padding: 14px;
          background: #111;
          color: white;
          border-radius: 14px;
          border: none;
        }

        .ghost {
          flex: 1;
          border-radius: 14px;
          border: 1px solid #ddd;
          background: transparent;
        }

        @media (max-width: 1000px) {
          .container {
            margin-left: 0;
          }
        }
      `}</style>
    </section>
  );
}
