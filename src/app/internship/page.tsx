"use client";
import { useState } from "react";
import { db } from "@/lib/firebase";

import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function InternshipPage() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    role: "",
    duration: "",
    portfolio: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      await addDoc(collection(db, "internshipApplications"), {
        ...formData,
        createdAt: serverTimestamp(),
      });

      alert("Application submitted successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        college: "",
        role: "",
        duration: "",
        portfolio: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="internshipPage">
      {/* HERO */}
      <div className="heroSection">
        <div className="heroContent">
          <span className="tag">Arc3D AI Research Internship</span>

          <h1>
            Build AI For
            <br />
            Future Architecture
          </h1>

          <p>
            Join Arc3D to help develop intelligent systems capable of
            transforming 2D architectural floor plans into structured 3D spatial
            models and architectural visualizations.
          </p>
        </div>
      </div>

      {/* MAIN SECTION */}
      <div className="applicationSection">
        {/* LEFT */}
        <div className="leftSide">
          <h2>
            AI + Architecture
            <br />
            Research Program
          </h2>

          <p>
            We are building advanced architectural intelligence systems focused
            on understanding floor plans, spatial structures, room segmentation,
            wall detection, geometry generation, and automated 3D reconstruction
            workflows.
          </p>

          <p>
            This internship is designed for students and developers interested
            in artificial intelligence, computer vision, machine learning, 3D
            systems, frontend visualization, and architectural technology.
          </p>

          {/* SKILLS */}
          <div className="skillsSection">
            <div className="skillCard">
              <h3>Computer Vision</h3>
              <span>
                Floor plan detection, segmentation, geometry extraction, and
                image processing systems.
              </span>
            </div>

            <div className="skillCard">
              <h3>AI Model Development</h3>
              <span>
                Research and development of intelligent systems for converting
                2D plans into structured 3D environments.
              </span>
            </div>

            <div className="skillCard">
              <h3>3D Visualization</h3>
              <span>
                Architectural rendering pipelines, spatial systems, and digital
                environment generation.
              </span>
            </div>
          </div>

          {/* TECH STACK */}
          <div className="techStack">
            <h3>Preferred Skills</h3>

            <div className="stackGrid">
              <span>Python</span>
              <span>PyTorch</span>
              <span>OpenCV</span>
              <span>TensorFlow</span>
              <span>React</span>
              <span>Three.js</span>
              <span>Machine Learning</span>
              <span>Computer Vision</span>
            </div>
          </div>
          <div className="applicationNote">
            Applications are reviewed on a rolling basis. Candidates selected
            for further evaluation will be notified via email from
            <strong> intern@arc3d.in</strong>. Due to the volume of
            applications, we may not be able to respond individually to all
            applicants.
          </div>
        </div>

        {/* RIGHT */}
        <div className="rightSide">
          <form className="applicationForm" onSubmit={handleSubmit}>
            <h3>Apply For Internship</h3>

            <div className="inputGroup">
              <label>Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="inputGroup">
              <label>Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="inputGroup">
              <label>Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
              />
            </div>

            <div className="inputGroup">
              <label>College / University *</label>
              <input
                type="text"
                name="college"
                value={formData.college}
                onChange={handleChange}
                placeholder="Your institution"
                required
              />
            </div>

            <div className="inputGroup">
              <label>Role Interested In *</label>

              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
              >
                <option value="">Select Role</option>

                <option>AI Model Development</option>
                <option>3D Designing</option>
                <option>Frontend Development</option>
              </select>
            </div>

            <div className="inputGroup">
              <label>Internship Duration *</label>

              <select
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                required
              >
                <option value="">Select Duration</option>

                <option value="4 Weeks">4 Weeks</option>
                <option value="6 Weeks">6 Weeks</option>
              </select>
            </div>

            <div className="inputGroup">
              <label>Portfolio / Resume Link *</label>
              <input
                type="url"
                name="portfolio"
                value={formData.portfolio}
                onChange={handleChange}
                placeholder="GitHub / Drive / Portfolio URL"
                required
              />
            </div>

            <div className="inputGroup">
              <label>Why do you want to join Arc3D? *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your interests, skills, and goals..."
                required
              />
            </div>

            <button type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        .internshipPage {
          min-height: 100vh;

          padding: 40px;

          background: #f4f1ea;
        }

        /* =========================
           HERO
        ========================= */

        .heroSection {
          position: relative;
          margin-top: 60px;
          height: 580px;

          overflow: hidden;

          border-radius: 36px;

          background-image: url("/images/internship-bg.jpg");

          background-size: cover;
          background-position: center;

          display: flex;
          align-items: center;

          padding: 70px;
        }

        .heroSection::before {
          content: "";

          position: absolute;

          inset: 0;

          background: linear-gradient(
            to right,
            rgba(0, 0, 0, 0.7),
            rgba(0, 0, 0, 0.25)
          );
        }

        .heroContent {
          position: relative;

          z-index: 2;

          max-width: 760px;
        }

        .tag {
          display: inline-flex;

          padding: 10px 18px;

          border-radius: 999px;

          background: rgba(255, 255, 255, 0.12);

          backdrop-filter: blur(10px);

          color: white;

          font-size: 0.85rem;

          letter-spacing: 0.08em;

          text-transform: uppercase;
        }

        .heroContent h1 {
          margin-top: 26px;

          color: white;

          font-size: 5.5rem;

          line-height: 0.92;

          letter-spacing: -0.06em;

          text-transform: uppercase;
        }

        .heroContent p {
          margin-top: 28px;

          max-width: 680px;

          color: rgba(255, 255, 255, 0.78);

          font-size: 1.15rem;

          line-height: 1.8;
        }

        /* =========================
           MAIN SECTION
        ========================= */

        .applicationSection {
          display: grid;

          grid-template-columns: 1.1fr 0.9fr;

          gap: 60px;

          margin-top: 90px;
        }

        /* =========================
           LEFT
        ========================= */

        .leftSide h2 {
          color: black;

          font-size: 4.3rem;

          line-height: 0.94;

          letter-spacing: -0.06em;

          text-transform: uppercase;
        }

        .leftSide p {
          margin-top: 28px;

          color: rgba(0, 0, 0, 0.72);

          font-size: 1.05rem;

          line-height: 1.9;
        }

        /* =========================
           SKILLS
        ========================= */

        .skillsSection {
          margin-top: 50px;

          display: flex;
          flex-direction: column;

          gap: 24px;
        }

        .skillCard {
          padding: 30px;

          border-radius: 28px;

          background: white;
        }

        .skillCard h3 {
          color: black;

          font-size: 1.3rem;
        }

        .skillCard span {
          display: block;

          margin-top: 12px;

          color: rgba(0, 0, 0, 0.65);

          line-height: 1.8;
        }

        /* =========================
           TECH STACK
        ========================= */

        .techStack {
          margin-top: 50px;
        }

        .techStack h3 {
          font-size: 1.3rem;

          color: black;

          margin-bottom: 24px;
        }

        .stackGrid {
          display: flex;
          flex-wrap: wrap;

          gap: 14px;
        }

        .stackGrid span {
          padding: 14px 20px;

          border-radius: 999px;

          background: white;

          color: black;

          font-size: 0.95rem;
        }

        .applicationNote {
          margin-top: 20px;
          padding: 14px 18px;
          border-left: 3px solid #111;
          background: rgba(0, 0, 0, 0.03);
          border-radius: 10px;
          font-size: 14px;
          line-height: 1.8;
          color: rgba(0, 0, 0, 0.7);
        }
        /* =========================
           FORM
        ========================= */

        .applicationForm {
          padding: 42px;

          border-radius: 34px;

          background: white;
        }

        .applicationForm h3 {
          color: black;

          font-size: 2rem;

          margin-bottom: 36px;
        }

        .inputGroup {
          margin-bottom: 24px;
        }

        .inputGroup label {
          display: block;

          margin-bottom: 12px;

          color: black;

          font-size: 0.95rem;

          font-weight: 500;
        }

        .inputGroup input,
        .inputGroup select,
        .inputGroup textarea {
          width: 100%;

          border: none;
          outline: none;

          background: #f5f5f5;

          border-radius: 18px;

          padding: 18px 20px;

          font-size: 1rem;

          color: black;
        }

        .inputGroup textarea {
          min-height: 150px;

          resize: none;
        }

        .applicationForm button {
          width: 100%;

          height: 64px;

          border: none;

          border-radius: 18px;

          background: black;

          color: white;

          font-size: 1rem;

          cursor: pointer;

          transition: 0.3s ease;
        }

        .applicationForm button:hover {
          opacity: 0.92;
        }

        /* =========================
           RESPONSIVE
        ========================= */

        @media (max-width: 1100px) {
          .applicationSection {
            grid-template-columns: 1fr;
          }

          .heroContent h1 {
            font-size: 4rem;
          }
        }

        @media (max-width: 768px) {
          .internshipPage {
            padding: 20px;
          }

          .heroSection {
            padding: 40px;

            height: auto;
          }

          .heroContent h1 {
            font-size: 2.8rem;
          }

          .leftSide h2 {
            font-size: 2.8rem;
          }

          .applicationForm {
            padding: 28px;
          }
        }
      `}</style>
    </section>
  );
}
