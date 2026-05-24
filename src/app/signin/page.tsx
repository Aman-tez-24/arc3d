"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase";
export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);

  const router = useRouter();

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleAuth = async () => {
    try {
      if (isSignUp) {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password,
        );

        await updateProfile(userCredential.user, {
          displayName: name,
        });

        router.push("/profile");
      } else {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password,
        );

        console.log("SIGNED IN USER:", userCredential.user);

        router.push("/profile");
      }
    } catch (error: any) {
      console.log(error);

      alert(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);

      router.push("/projects");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <>
      <section className="authPage">
        {/* BLUR OVERLAY */}
        <div className="pageBlurOverlay" />

        {/* GLOW EFFECTS */}
        <div className="bgGlow glow1" />
        <div className="bgGlow glow2" />

        <div className="authContainer">
          {/* LEFT */}
          <div className="authLeft">
            <div
              className="brandRow"
              onClick={() => {
                window.location.href = "/";
              }}
            >
              <img src="/images/logo.png" alt="Arc3D" />
            </div>

            <div className="leftContent">
              <span className="miniTag">IMMERSIVE ARCHITECTURE</span>

              <h1>
                Build Future
                <br />
                Spaces With Arc3D
              </h1>

              <p>
                Experience premium AI-powered architectural visualization,
                cinematic 3D walkthroughs, smart planning, and immersive spatial
                design workflows.
              </p>

              <div className="featureGrid">
                <div className="featureCard">
                  <span>01</span>
                  <h3>3D Visualization</h3>
                </div>

                <div className="featureCard">
                  <span>02</span>
                  <h3>AI Planning</h3>
                </div>

                <div className="featureCard">
                  <span>03</span>
                  <h3>Virtual Experience</h3>
                </div>

                <div className="featureCard">
                  <span>04</span>
                  <h3>Luxury Interiors</h3>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="authRight">
            <div className="glassCard">
              <div className="topRow">
                <button
                  className={!isSignUp ? "toggleBtn active" : "toggleBtn"}
                  onClick={() => setIsSignUp(false)}
                >
                  Sign In
                </button>

                <button
                  className={isSignUp ? "toggleBtn active" : "toggleBtn"}
                  onClick={() => setIsSignUp(true)}
                >
                  Sign Up
                </button>
              </div>

              <div className="formContent">
                <span className="formTag">
                  {isSignUp ? "CREATE ACCOUNT" : "WELCOME BACK"}
                </span>

                <h2>
                  {isSignUp
                    ? "Join the Future of Architecture"
                    : "Access Your Workspace"}
                </h2>

                <p>
                  {isSignUp
                    ? "Create your Arc3D account to start building immersive architectural experiences."
                    : "Sign in to continue managing projects, visualizations, and workflows."}
                </p>

                {isSignUp && (
                  <div className="inputGroup">
                    <label>Full Name</label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                )}

                <div className="inputGroup">
                  <label>Email Address</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="inputGroup">
                  <label>Password</label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                {isSignUp && (
                  <div className="inputGroup">
                    <label>Confirm Password</label>
                    <input
                      type="password"
                      placeholder="Confirm your password"
                    />
                  </div>
                )}

                {!isSignUp && (
                  <div className="helperRow">
                    <label className="remember">
                      <input type="checkbox" />
                      Remember me
                    </label>

                    <button className="forgotBtn">Forgot Password?</button>
                  </div>
                )}

                <button className="submitBtn" onClick={handleAuth}>
                  {isSignUp ? "Create Account" : "Sign In"}
                </button>

                <div className="divider">
                  <span />
                  <p>OR CONTINUE WITH</p>
                  <span />
                </div>

                <button className="googleBtn" onClick={handleGoogleSignIn}>
                  <div className="googleIcon">G</div>
                  Continue with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .authPage {
          position: relative;
          min-height: 100vh;
          overflow: hidden;

          display: flex;
          align-items: center;
          justify-content: center;

          padding: 60px 40px 60px;

          isolation: isolate;

          background:
            radial-gradient(
              circle at top left,
              rgba(33, 57, 98, 0.08),
              transparent 28%
            ),
            radial-gradient(
              circle at bottom right,
              rgba(10, 25, 52, 0.12),
              transparent 32%
            ),
            linear-gradient(to bottom, #f7f4ee, #f2eee6);
        }

        /* BACKGROUND BLUR */
        .pageBlurOverlay {
          position: absolute;
          inset: 0;

          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);

          background: radial-gradient(
            circle at top left,
            rgba(255, 255, 255, 0.35),
            rgba(255, 255, 255, 0.16)
          );

          z-index: 0;
        }

        .bgGlow {
          position: absolute;
          border-radius: 999px;
          filter: blur(120px);
          pointer-events: none;
          z-index: 1;
        }

        .glow1 {
          width: 420px;
          height: 420px;

          background: rgba(42, 72, 126, 0.12);

          top: -100px;
          left: -120px;
        }

        .glow2 {
          width: 460px;
          height: 460px;

          background: rgba(18, 42, 82, 0.08);

          bottom: -160px;
          right: -120px;
        }

        .authContainer {
          position: relative;
          z-index: 2;

          width: 100%;
          max-width: 1400px;

          display: grid;
          grid-template-columns: 1.1fr 0.9fr;

          border-radius: 40px;
          overflow: hidden;

          background: rgba(255, 255, 255, 0.5);

          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);

          border: 1px solid rgba(255, 255, 255, 0.4);

          box-shadow:
            0 30px 80px rgba(0, 0, 0, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);
        }

        .authLeft {
          position: relative;
          padding: 60px;

          background: linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.72),
            rgba(247, 244, 238, 0.88)
          );

          border-right: 1px solid rgba(0, 0, 0, 0.06);
        }

        .brandRow {
          width: 100%;

          display: flex;
          justify-content: center;
        }

        .brandRow img {
          height: 46px;
          width: auto;
          object-fit: contain;

          filter: brightness(0) saturate(100%) invert(84%) sepia(16%)
            saturate(403%) hue-rotate(356deg) brightness(91%) contrast(87%);
        }

        .leftContent {
          margin-top: 80px;
        }

        .miniTag {
          font-size: 11px;
          letter-spacing: 0.35em;
          color: rgba(0, 0, 0, 0.5);
        }

        .leftContent h1 {
          margin-top: 20px;

          font-size: 72px;
          line-height: 0.95;
          font-weight: 700;

          color: #111;
        }

        .leftContent p {
          margin-top: 28px;

          max-width: 560px;

          font-size: 16px;
          line-height: 1.9;

          color: rgba(0, 0, 0, 0.6);
        }

        .featureGrid {
          margin-top: 50px;

          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;

          max-width: 620px;
        }

        .featureCard {
          padding: 26px;

          border-radius: 24px;

          background: rgba(255, 255, 255, 0.6);

          border: 1px solid rgba(255, 255, 255, 0.5);

          backdrop-filter: blur(12px);

          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.7),
            0 10px 30px rgba(0, 0, 0, 0.04);

          transition: 0.4s ease;
        }

        .featureCard:hover {
          transform: translateY(-6px);
        }

        .featureCard span {
          font-size: 12px;
          letter-spacing: 0.25em;
          color: rgba(0, 0, 0, 0.45);
        }

        .featureCard h3 {
          margin-top: 16px;

          font-size: 18px;
          font-weight: 600;

          color: #111;
        }

        .authRight {
          padding: 60px;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        .glassCard {
          width: 100%;
          max-width: 520px;

          padding: 36px;

          border-radius: 32px;

          background: rgba(255, 255, 255, 0.62);

          backdrop-filter: blur(22px);
          -webkit-backdrop-filter: blur(22px);

          border: 1px solid rgba(255, 255, 255, 0.5);

          box-shadow:
            0 20px 60px rgba(0, 0, 0, 0.06),
            inset 0 1px 0 rgba(255, 255, 255, 0.9);
        }

        .topRow {
          display: flex;
          gap: 12px;

          padding: 8px;

          border-radius: 18px;

          background: rgba(0, 0, 0, 0.04);
        }

        .toggleBtn {
          flex: 1;
          height: 52px;

          border: none;
          border-radius: 14px;

          background: transparent;

          font-size: 15px;
          font-weight: 600;

          color: rgba(0, 0, 0, 0.5);

          cursor: pointer;
          transition: 0.35s ease;
        }

        .toggleBtn.active {
          background: #111;
          color: white;

          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }

        .formContent {
          margin-top: 36px;
        }

        .formTag {
          font-size: 11px;
          letter-spacing: 0.3em;
          color: rgba(0, 0, 0, 0.45);
        }

        .formContent h2 {
          margin-top: 16px;

          font-size: 42px;
          line-height: 1.1;

          color: #111;
        }

        .formContent p {
          margin-top: 16px;

          font-size: 15px;
          line-height: 1.8;

          color: rgba(0, 0, 0, 0.6);
        }

        .inputGroup {
          margin-top: 22px;
        }

        .inputGroup label {
          display: block;
          margin-bottom: 10px;

          font-size: 13px;
          font-weight: 500;

          color: rgba(0, 0, 0, 0.65);
        }

        .inputGroup input {
          width: 100%;
          height: 58px;

          border: 1px solid rgba(0, 0, 0, 0.08);

          border-radius: 18px;

          padding: 0 20px;

          background: rgba(255, 255, 255, 0.82);

          font-size: 15px;
          color: #111;

          outline: none;
          transition: 0.3s ease;
        }

        .inputGroup input:focus {
          border-color: rgba(20, 45, 88, 0.4);

          box-shadow: 0 0 0 4px rgba(34, 59, 108, 0.08);
        }

        .helperRow {
          margin-top: 20px;

          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .remember {
          display: flex;
          align-items: center;
          gap: 10px;

          font-size: 14px;
          color: rgba(0, 0, 0, 0.6);
        }

        .forgotBtn {
          border: none;
          background: transparent;

          font-size: 14px;
          color: #1d3766;

          cursor: pointer;
        }

        .submitBtn {
          margin-top: 28px;

          width: 100%;
          height: 60px;

          border: none;
          border-radius: 20px;

          background: linear-gradient(135deg, #0f1f3b, #1d3766);

          color: white;

          font-size: 15px;
          font-weight: 600;
          letter-spacing: 0.04em;

          cursor: pointer;
          transition: 0.35s ease;

          box-shadow: 0 16px 40px rgba(15, 31, 59, 0.2);
        }

        .submitBtn:hover {
          transform: translateY(-4px);
        }

        .divider {
          margin: 28px 0;

          display: flex;
          align-items: center;
          gap: 16px;
        }

        .divider span {
          flex: 1;
          height: 1px;

          background: rgba(0, 0, 0, 0.08);
        }

        .divider p {
          margin: 0;

          font-size: 11px;
          letter-spacing: 0.25em;

          color: rgba(0, 0, 0, 0.4);
        }

        .googleBtn {
          width: 100%;
          height: 58px;

          border: 1px solid rgba(0, 0, 0, 0.08);

          border-radius: 18px;

          background: rgba(255, 255, 255, 0.72);

          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;

          font-size: 15px;
          font-weight: 500;

          color: #111;

          cursor: pointer;
          transition: 0.35s ease;
        }

        .googleBtn:hover {
          transform: translateY(-3px);
        }

        .googleIcon {
          width: 32px;
          height: 32px;

          border-radius: 999px;

          display: flex;
          align-items: center;
          justify-content: center;

          background: #111;
          color: white;

          font-size: 14px;
          font-weight: 700;
        }

        @media (max-width: 1100px) {
          .authContainer {
            grid-template-columns: 1fr;
          }

          .authLeft {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .authPage {
            padding: 110px 20px 40px;
          }

          .authRight {
            padding: 20px;
          }

          .glassCard {
            padding: 24px;
            border-radius: 28px;
          }

          .formContent h2 {
            font-size: 34px;
          }
        }
      `}</style>
    </>
  );
}
