"use client";

import { useState } from "react";
import { Upload, Sparkles, Grid3X3, Home, Building2 } from "lucide-react";
import Slidebar from "@/components/layout/slidebar";
export default function FloorPlanningPage() {
  const [planType, setPlanType] = useState("Residential");
  const [file, setFile] = useState<File | null>(null);

  return (
    <section className="page">
      {/* MAIN WORKSPACE */}
      <Slidebar />
      <div className="workspace">
        {/* LEFT: DESIGN AREA */}
        <div className="canvasArea">
          <div className="hero">
            <span className="tag">ARC3D FLOOR ENGINE</span>

            <h1>AI Floor Planning Studio</h1>

            <p>
              Upload your blueprint and transform it into intelligent, optimized
              architectural layouts with AI-assisted spatial design.
            </p>
          </div>

          {/* UPLOAD ZONE */}
          <div className="uploadBox">
            <div className="uploadInner">
              <Upload size={22} />
              <h3>Upload 2D Floor Plan</h3>
              <p>Drag & drop your blueprint or click to browse</p>

              <input
                type="file"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
              />
            </div>
          </div>

          {/* PLAN TYPE */}
          <div className="section">
            <h2>Plan Type</h2>

            <div className="types">
              {["Residential", "Commercial", "Industrial", "Custom"].map(
                (type) => (
                  <button
                    key={type}
                    className={planType === type ? "active" : ""}
                    onClick={() => setPlanType(type)}
                  >
                    {type === "Residential" && <Home size={16} />}
                    {type === "Commercial" && <Building2 size={16} />}
                    {type === "Industrial" && <Grid3X3 size={16} />}
                    {type === "Custom" && <Sparkles size={16} />}
                    {type}
                  </button>
                ),
              )}
            </div>
          </div>

          {/* REQUIREMENTS */}
          <div className="section">
            <h2>Design Requirements</h2>

            <textarea placeholder="Describe rooms, constraints, vastu preferences, number of floors, special requirements..." />
          </div>

          {/* CTA */}
          <div className="cta">
            <button className="generate">
              <Sparkles size={18} />
              Order Floor Plan
            </button>
          </div>
        </div>

        {/* RIGHT: INSPECTOR PANEL */}
        <div className="panel">
          <h2>AI Inspector</h2>

          <div className="card">
            <h3>Status</h3>
            <p>Waiting for blueprint input...</p>
          </div>

          <div className="card">
            <h3>Optimization Engine</h3>
            <p>
              AI will optimize space efficiency, lighting flow, and structural
              alignment.
            </p>
          </div>

          <div className="card">
            <h3>Output</h3>
            <p>
              • Floor layout
              <br />
              • 3D ready model
              <br />
              • PDF blueprint
              <br />• Construction plan
            </p>
          </div>

          <div className="preview">
            <div className="previewBox">
              <p>Preview will appear here</p>
            </div>
          </div>
        </div>
      </div>

      {/* STYLE */}
      <style jsx>{`
        .page {
          position: relative;
          min-height: 100vh;
          padding: 110px 40px 40px 330px; /* space for sidebar */
          background:
            radial-gradient(
              circle at top left,
              rgba(236, 232, 184, 0.12),
              transparent 40%
            ),
            linear-gradient(180deg, #f7f4ee, #ece7dc);
        }

        /* WORKSPACE */
        .workspace {
          display: grid;
          grid-template-columns: 1.6fr 0.8fr;
          gap: 30px;
        }

        /* LEFT */
        .canvasArea {
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(20px);
          border-radius: 26px;
          padding: 40px;
          border: 1px solid rgba(255, 255, 255, 0.8);
          box-shadow: 0 30px 90px rgba(0, 0, 0, 0.06);
        }

        .hero h1 {
          font-size: 44px;
          margin-top: 20px;
        }

        .hero p {
          margin-top: 14px;
          color: rgba(0, 0, 0, 0.6);
          line-height: 1.8;
        }

        .tag {
          font-size: 11px;
          letter-spacing: 0.3em;
          color: rgba(0, 0, 0, 0.5);
        }

        /* UPLOAD */
        .uploadBox {
          margin-top: 40px;
          padding: 30px;
          border-radius: 22px;
          border: 1px dashed rgba(0, 0, 0, 0.2);
          background: rgba(255, 255, 255, 0.4);
          text-align: center;
          position: relative;
        }

        .uploadInner input {
          position: absolute;
          inset: 0;
          opacity: 0;
          cursor: pointer;
        }

        .uploadInner h3 {
          margin-top: 10px;
        }

        /* TYPES */
        .section {
          margin-top: 40px;
        }

        .types {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 15px;
        }

        .types button {
          padding: 12px 16px;
          border-radius: 14px;
          border: 1px solid rgba(0, 0, 0, 0.1);
          background: white;
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          transition: 0.3s;
        }

        .types button.active {
          background: #111;
          color: white;
        }

        /* TEXTAREA */
        textarea {
          width: 100%;
          height: 120px;
          margin-top: 12px;
          padding: 16px;
          border-radius: 16px;
          border: 1px solid rgba(0, 0, 0, 0.1);
          outline: none;
          resize: none;
          background: rgba(255, 255, 255, 0.7);
        }

        /* CTA */
        .cta {
          margin-top: 40px;
          display: flex;
          justify-content: center;
        }

        .generate {
          padding: 16px 22px;
          border-radius: 16px;
          background: linear-gradient(135deg, #111, #2c3a55);
          color: white;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        /* RIGHT PANEL */
        .panel {
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(20px);
          border-radius: 26px;
          padding: 30px;
          border: 1px solid rgba(255, 255, 255, 0.8);
        }

        .panel h2 {
          margin-bottom: 20px;
        }

        .card {
          padding: 16px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.7);
          margin-bottom: 16px;
        }

        .previewBox {
          height: 200px;
          border-radius: 18px;
          border: 1px dashed rgba(0, 0, 0, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(0, 0, 0, 0.5);
        }

        /* RESPONSIVE */
        @media (max-width: 1000px) {
          .workspace {
            grid-template-columns: 1fr;
          }

          .page {
            padding-left: 40px;
          }
        }
      `}</style>
    </section>
  );
}
