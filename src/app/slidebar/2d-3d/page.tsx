"use client";

import { useState } from "react";
import Sidebar from "@/components/layout/slidebar";
import { supabase } from "@/lib/supabase";
import { auth } from "@/lib/firebase";
export default function Convert2Dto3DPage() {
  const [file, setFile] = useState<File | null>(null);
  const [planType, setPlanType] = useState("Residential");
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const user = auth.currentUser;

  console.log(user?.uid);
  const handleUpload = async () => {
    if (!file) {
      alert("Please upload a floor plan");
      return;
    }
    if (!user) {
      alert("Please login first");
      return;
    }
    setLoading(true);

    try {
      // UNIQUE FILE NAME
      const fileName = `${Date.now()}-${file.name}`;

      // UPLOAD IMAGE
      const { error: uploadError } = await supabase.storage
        .from("floorplans")
        .upload(fileName, file);

      if (uploadError) {
        console.error(uploadError);
        setLoading(false);
        alert("Upload failed");
        return;
      }

      // GET PUBLIC URL
      const {
        data: { publicUrl },
      } = supabase.storage.from("floorplans").getPublicUrl(fileName);

      // SAVE ORDER DATA
      const { error: dbError } = await supabase.from("orders").insert([
        {
          title: `${planType} 3D Model`,
          description: prompt,
          image_url: publicUrl,
          plan_type: planType,
          design_requirements: prompt,

          status: "Progress",

          user_id: user?.uid,

          created_at: new Date().toISOString(),
        },
      ]);

      if (dbError) {
        console.error("DB ERROR:", JSON.stringify(dbError, null, 2));
        setLoading(false);
        alert("Database insert failed");
        return;
      }

      // RESET FORM
      setFile(null);
      setPrompt("");
      setPlanType("Residential");

      setLoading(false);

      alert("Uploaded successfully!");
    } catch (err) {
      console.error(err);
      setLoading(false);
      alert("Something went wrong");
    }
  };
  return (
    <section className="page">
      <Sidebar />
      <div className="content">
        {/* BACKGROUND */}
        <div className="bgGlow" />
        <div className="gridNoise" />

        {/* HERO */}
        <div className="hero">
          <span className="tag">ARC3D CONVERSION ENGINE</span>

          <h1>
            Transform 2D Plans
            <br />
            Into Living 3D Worlds
          </h1>

          <p>
            Upload architectural blueprints, define design intent, and let the
            Arc3D AI engine reconstruct fully spatial, real-world accurate 3D
            environments in seconds.
          </p>
        </div>

        {/* WORKSPACE */}
        <div className="workspace">
          {/* LEFT INPUT PANEL */}
          <div className="panel">
            <h2>Upload Blueprint</h2>

            <div
              className="uploadBox"
              onClick={() => document.getElementById("file")?.click()}
            >
              <input
                id="file"
                type="file"
                key={file ? file.name : "empty"}
                hidden
                onChange={(e) => setFile(e.target.files?.[0] || null)}
              />

              <p>
                {file ? file.name : "Drop or click to upload 2D floor plan"}
              </p>
              <span>PNG • JPG • PDF supported</span>
            </div>

            <h2>Plan Type</h2>

            <div className="options">
              {["Residential", "Commercial", "Industrial", "Custom"].map(
                (type) => (
                  <button
                    key={type}
                    className={`optionBtn ${planType === type ? "active" : ""}`}
                    onClick={() => setPlanType(type)}
                  >
                    {type}
                  </button>
                ),
              )}
            </div>

            <h2>Design Requirements</h2>

            <textarea
              placeholder="Describe your vision: number of floors, style, materials, lighting preference, vastu constraints..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />

            <button
              className="generate"
              onClick={handleUpload}
              disabled={loading}
            >
              {loading ? "Uploading..." : "Order 3D Model →"}
            </button>
          </div>

          {/* RIGHT PREVIEW PANEL */}
          <div className="preview">
            <div className="previewHeader">
              <h2>3D Preview Output</h2>
              <span>Status: Idle</span>
            </div>

            <div className="previewBox">
              <p>Once processed you can see the model here.</p>
            </div>

            <div className="infoGrid">
              <div className="infoCard">
                <h3>AI Parsing</h3>
                <p>Detects walls, rooms & structure</p>
              </div>

              <div className="infoCard">
                <h3>Spatial Mapping</h3>
                <p>Converts layout into 3D space</p>
              </div>

              <div className="infoCard">
                <h3>Material Engine</h3>
                <p>Applies textures & realism</p>
              </div>

              <div className="infoCard">
                <h3>Rendering</h3>
                <p>Generates cinematic output</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .page {
          min-height: 100vh;
          padding: 20px 60px;
          background:
            radial-gradient(
              circle at top left,
              rgba(236, 232, 184, 0.12),
              transparent 40%
            ),
            linear-gradient(180deg, #f7f4ee, #ece7dc);
          color: #111;
          position: relative;
          overflow: hidden;
        }
        .content {
          position: relative;
          z-index: 2;
          flex: 1;

          padding: 22px;
          margin-left: 240px;
        }
        /* BACKGROUND EFFECTS */
        .bgGlow {
          position: absolute;
          width: 600px;
          height: 600px;
          background: rgba(100, 120, 255, 0.1);
          filter: blur(140px);
          top: -200px;
          left: -200px;
          border-radius: 999px;
        }

        .gridNoise {
          position: absolute;
          inset: 0;
          opacity: 0.04;
          background-image:
            linear-gradient(#000 1px, transparent 1px),
            linear-gradient(90deg, #000 1px, transparent 1px);
          background-size: 70px 70px;
        }

        /* HERO */
        .hero {
          text-align: center;
          max-width: 900px;
          margin: auto;
          position: relative;
          z-index: 2;
        }

        .tag {
          font-size: 11px;
          letter-spacing: 0.35em;
          opacity: 0.6;
        }

        .hero h1 {
          font-size: 64px;
          margin-top: 20px;
          line-height: 1.05;
        }

        .hero p {
          margin-top: 20px;
          font-size: 16px;
          color: rgba(0, 0, 0, 0.6);
          line-height: 1.8;
        }

        /* WORKSPACE */
        .workspace {
          margin-top: 90px;
          display: grid;
          grid-template-columns: 420px 1fr;
          gap: 30px;
          position: relative;
          z-index: 2;
        }

        /* LEFT PANEL */
        .panel {
          padding: 28px;
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.65);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(0, 0, 0, 0.06);
        }

        .panel h2 {
          font-size: 14px;
          letter-spacing: 0.2em;
          margin: 18px 0 12px;
          color: rgba(0, 0, 0, 0.6);
        }

        .uploadBox {
          padding: 30px;
          border-radius: 18px;
          border: 1px dashed rgba(0, 0, 0, 0.2);
          text-align: center;
          cursor: pointer;
          transition: 0.3s;
        }

        .uploadBox:hover {
          background: rgba(255, 255, 255, 0.8);
        }

        .uploadBox p {
          font-size: 14px;
          margin-bottom: 6px;
        }

        .uploadBox span {
          font-size: 12px;
          opacity: 0.6;
        }

        .options {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 16px;
        }

        .optionBtn {
          padding: 8px 12px;
          border-radius: 14px;

          border: 1px solid rgba(255, 255, 255, 0.6);
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(18px);

          color: rgba(0, 0, 0, 0.7);
          font-size: 12px;
          font-weight: 500;

          cursor: pointer;

          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
        }

        /* hover effect */
        .optionBtn:hover {
          transform: translateY(-2px);
          background: rgba(255, 255, 255, 0.7);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
        }

        /* active state */
        .optionBtn.active {
          background: linear-gradient(135deg, #111, #2d3c55);
          color: white;
          border-color: transparent;

          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.2);
          transform: translateY(-2px) scale(1.05);
        }

        textarea {
          width: 100%;
          height: 120px;
          border-radius: 16px;
          padding: 14px;
          border: 1px solid rgba(0, 0, 0, 0.1);
          resize: none;
          margin-top: 10px;
          font-size: 13px;
        }

        .generate {
          margin-top: 18px;
          width: 100%;
          padding: 14px;
          border-radius: 14px;
          background: #111;
          color: #fff;
          border: none;
          cursor: pointer;
        }

        /* RIGHT PANEL */
        .preview {
          padding: 30px;
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.55);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(0, 0, 0, 0.06);
        }

        .previewHeader {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .previewBox {
          margin-top: 20px;
          height: 320px;
          border-radius: 20px;
          border: 1px dashed rgba(0, 0, 0, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: rgba(0, 0, 0, 0.5);
          padding: 20px;
        }

        .infoGrid {
          margin-top: 30px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }

        .infoCard {
          padding: 16px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.6);
        }

        .infoCard h3 {
          font-size: 14px;
          margin-bottom: 6px;
        }

        .infoCard p {
          font-size: 12px;
          opacity: 0.6;
        }

        @media (max-width: 1000px) {
          .workspace {
            grid-template-columns: 1fr;
          }

          .hero h1 {
            font-size: 40px;
          }
        }
      `}</style>
    </section>
  );
}
