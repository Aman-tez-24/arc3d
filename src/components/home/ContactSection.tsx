"use client";

import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    query: "",
  });

  return (
    <section className="contact">
      {/* HEADER */}
      <div className="header">
        <h2>Start Your Project</h2>
        <p>
          Share your idea with us — we’ll transform it into a structured,
          immersive architectural system.
        </p>
      </div>

      {/* CONTENT */}
      <div className="container">
        {/* IMAGE SIDE */}
        <div className="imageBox">
          <img
            src="/images/contactSection/contact-enquiry.png"
            alt="architecture contact"
          />
          <div className="overlay" />
          <div className="imageText">
            <h3>Arc3D Studio</h3>
            <p>Precision • Design • Intelligence</p>
          </div>
        </div>

        {/* FORM SIDE */}
        <div className="formBox">
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Project Query</label>
            <textarea
              placeholder="Describe your architectural idea..."
              value={form.query}
              onChange={(e) => setForm({ ...form, query: e.target.value })}
            />
          </div>

          <button className="btn">Send Request</button>
        </div>
      </div>

      {/* CSS */}
      <style jsx>{`
        .contact {
          padding: 160px 20px;
          background: #ffffff;
        }

        /* HEADER */
        .header {
          text-align: center;
          max-width: 850px;
          margin: auto;
          margin-bottom: 90px;
        }

        .header h2 {
          font-size: 54px;
          font-weight: 850;
          letter-spacing: -1px;
          color: #0a0a0a;
        }

        .header p {
          margin-top: 14px;
          font-size: 15.5px;
          line-height: 1.9;
          color: rgba(0, 0, 0, 0.65);
        }

        /* LAYOUT */
        .container {
          max-width: 1200px;
          margin: auto;
          display: flex;
          gap: 70px;
          align-items: stretch;
        }

        /* IMAGE BOX */
        .imageBox {
          flex: 1;
          position: relative;
          border-radius: 28px;
          overflow: hidden;

          box-shadow: 0 80px 200px rgba(0, 0, 0, 0.12);
          min-height: 520px;
        }

        .imageBox img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(1.05);
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.45), transparent);
        }

        .imageText {
          position: absolute;
          bottom: 24px;
          left: 24px;
          color: #fff;
        }

        .imageText h3 {
          font-size: 22px;
          font-weight: 800;
        }

        .imageText p {
          font-size: 13px;
          opacity: 0.8;
        }

        /* FORM */
        .formBox {
          flex: 1;
          background: linear-gradient(135deg, #f9f7f3, #ffffff);
          border-radius: 28px;
          padding: 40px;

          box-shadow: 0 60px 160px rgba(0, 0, 0, 0.08);
        }

        .field {
          margin-bottom: 22px;
          display: flex;
          flex-direction: column;
        }

        .field label {
          font-size: 12px;
          letter-spacing: 1.5px;
          color: rgba(0, 0, 0, 0.55);
          margin-bottom: 8px;
        }

        .field input,
        .field textarea {
          padding: 14px 16px;
          border-radius: 14px;
          border: 1px solid rgba(0, 0, 0, 0.08);
          outline: none;

          font-size: 14px;
          background: rgba(255, 255, 255, 0.7);
          transition: all 0.3s ease;
        }

        .field textarea {
          min-height: 120px;
          resize: none;
        }

        .field input:focus,
        .field textarea:focus {
          border-color: rgba(0, 0, 0, 0.25);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
        }

        /* BUTTON */
        .btn {
          width: 100%;
          padding: 14px;
          border-radius: 999px;
          border: none;

          background: #0a0a0a;
          color: #fff;

          font-size: 14px;
          font-weight: 600;
          cursor: pointer;

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 40px 100px rgba(0, 0, 0, 0.25);
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .container {
            flex-direction: column;
          }

          .imageBox {
            min-height: 320px;
          }

          .header h2 {
            font-size: 34px;
          }
        }
      `}</style>
    </section>
  );
}
