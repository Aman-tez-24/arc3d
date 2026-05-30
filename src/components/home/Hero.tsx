"use client";

import Navbar from "../layout/Navbar";
import { Suspense, useEffect, useLayoutEffect, useRef } from "react";

import { Canvas, useFrame } from "@react-three/fiber";

import { Environment, useGLTF } from "@react-three/drei";

import * as THREE from "three";

import { ChevronUp } from "lucide-react";
/*function BackgroundModel() {
  const { scene } = useGLTF("/models/scene.gltf");

  const ref = useRef<THREE.Group>(null);

  useLayoutEffect(() => {
    requestAnimationFrame(() => {
      if (!ref.current) return;

      const box = new THREE.Box3().setFromObject(ref.current);
      const center = new THREE.Vector3();
      box.getCenter(center);

      ref.current.position.x = -center.x;
      ref.current.position.y = -center.y;
      ref.current.position.z = -center.z;
    });
  }, []);

  useFrame((state) => {
    if (!ref.current) return;

    const { pointer } = state;

    const targetRotY = Math.PI * 1.5 + pointer.x * 0.08;
    const targetRotX = -pointer.y * 0.05;

    ref.current.rotation.y += (targetRotY - ref.current.rotation.y) * 0.06;
    ref.current.rotation.x += (targetRotX - ref.current.rotation.x) * 0.06;
  });

  return (
    <group ref={ref}>
      <primitive object={scene} />
    </group>
  );
}*/

export default function Hero() {
  return (
    <section className="heroSection">
      {/* HERO CONTAINER */}
      <div className="heroContainer">
        {/* BACKGROUND IMAGE */}
        {/* 3D BACKGROUND */}
        <div className="heroImage">
          <img src="/images/hero/bg.png" alt="Arc3D Contact" />
        </div>
        {/*  <div className="heroImage">
          <Canvas
            style={{
              width: "100%",
              height: "100%",
              touchAction: "none",
            }}
            camera={{
              position: [6, 6, 30],
              rotation: [0, 0, 0],
              fov: 45,
            }}
            dpr={[1, 2]}
            gl={{
              antialias: true,
              toneMapping: THREE.ACESFilmicToneMapping,
              toneMappingExposure: 1.2,
            }}
          >
            <Suspense fallback={null}>
              <ambientLight intensity={0.8} />

              <directionalLight position={[10, 15, 10]} intensity={3} />

              <directionalLight
                position={[-10, 8, -10]}
                intensity={1.5}
                color="#cfe8ff"
              />

              <pointLight position={[0, 5, 3]} intensity={2} color="#fff2df" />

              <Environment preset="apartment" />

              <BackgroundModel />
            </Suspense>
          </Canvas>
        </div>*/}

        {/* OVERLAY */}
        <div className="heroOverlay" />

        {/* TOP LEFT CURVE */}
        <div className="topLeftCurve" />

        {/* BOTTOM RIGHT CURVE */}
        <div className="bottomRightCurve" />

        {/* CONTENT */}
        <div className="heroContentWrapper">
          <div className="heroContent">
            {/* TOP CUT */}
            <div className="topCut" />

            {/* SIDE CUT */}
            <div className="sideCut" />

            <h1>
              Future
              <br />
              Architecture
            </h1>

            <p>
              Arc3D transforms architectural concepts into immersive cinematic
              environments with intelligent visualization and futuristic spatial
              storytelling.
            </p>
            <button
              className="explore"
              onClick={() => {
                const section = document.getElementById("showcase");

                if (section) {
                  const y =
                    section.getBoundingClientRect().top + window.scrollY - 80;

                  window.scrollTo({
                    top: y,
                    behavior: "smooth",
                  });
                }
              }}
            >
              Explore Experience
              <span>→</span>
            </button>
          </div>
        </div>

        {/* FLOAT BUTTON */}
        <div
          className="floatingBtn"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <ChevronUp />
        </div>
      </div>

      <style jsx>{`
        .heroSection {
          padding: 12px;

          background: #f4f1ea;
        }

        /* =========================
           HERO CONTAINER
        ========================= */

        .heroContainer {
          position: relative;

          height: 96vh;

          overflow: hidden;

          border-radius: 30px;

          background: #d9e1e7;
        }

        /* =========================
           IMAGE
        ========================= */

        .heroImage {
          position: relative;

          width: 100%;
          height: 100%;

          overflow: hidden;

          box-shadow:
            0 40px 120px rgba(0, 0, 0, 0.12),
            inset 0 1px 0 rgba(255, 255, 255, 0.5);

          border: 1px solid rgba(255, 255, 255, 0.4);

          z-index: 2;
        }

        .heroImage img {
          width: 100%;
          height: 100%;

          object-fit: cover;

          display: block;

          transition: transform 1.2s ease;
        }
        .heroImage:hover img {
          transform: scale(1.05);
        }

        /* cinematic overlay */
        .heroImage::after {
          content: "";

          position: absolute;
          inset: 0;

          background:
            linear-gradient(to top, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.05)),
            linear-gradient(to right, rgba(255, 255, 255, 0.08), transparent);

          pointer-events: none;
        }

        /* =========================
           OVERLAY
        ========================= */

        .heroOverlay {
          position: absolute;

          inset: 0;

          background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.04),
            rgba(0, 0, 0, 0.05)
          );
        }
        .heroOverlay,
        .topLeftCurve,
        .bottomRightCurve {
          pointer-events: none;
        }

        .explore {
          margin-top: 32px;

          display: flex;
          align-items: center;
          gap: 14px;

          padding: 12px 28px;

          border: none;

          border-radius: 999px;

          background: #0a0a0a;

          color: white;

          font-size: 13px;
          letter-spacing: 0.14em;
          text-transform: uppercase;

          cursor: pointer;

          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.07);

          transition: all 0.35s ease;
        }

        .explore:hover {
          background: #0a0a0a;

          transform: translateY(-6px);
          gap: 18px;
        }
        /* =========================
           TOP LEFT CURVE
        ========================= */

        .topLeftCurve {
          position: absolute;

          top: 0;
          left: 0;

          width: 160px;
          height: 70px;

          background: #f4f1ea;

          border-bottom-right-radius: 30px;

          z-index: 10;
        }

        .topLeftCurve::after {
          content: "";

          position: absolute;

          right: -60px;
          top: 0;

          width: 60px;
          height: 60px;

          border-top-left-radius: 20px;

          box-shadow: -20px -20px 0 #f4f1ea;
        }

        .topLeftCurve::before {
          content: "";

          position: absolute;

          left: 0;
          bottom: -60px;

          width: 60px;
          height: 60px;

          border-top-left-radius: 20px;

          box-shadow: -20px -20px 0 #f4f1ea;
        }

        /* =========================
           BOTTOM RIGHT CURVE
        ========================= */

        .bottomRightCurve {
          position: absolute;

          right: 0;
          bottom: 0;

          width: 60px;
          height: 60px;

          background: #f4f1ea;

          border-top-left-radius: 20px;

          z-index: 10;
        }

        .bottomRightCurve::after {
          content: "";

          position: absolute;

          top: -60px;
          right: 0;

          width: 60px;
          height: 60px;

          border-bottom-right-radius: 20px;

          box-shadow: 20px 20px 0 #f4f1ea;
        }

        .bottomRightCurve::before {
          content: "";

          position: absolute;

          left: -60px;
          bottom: 0;

          width: 60px;
          height: 60px;

          border-bottom-right-radius: 20px;

          box-shadow: 20px 20px 0 #f4f1ea;
        }

        /* =========================
           CONTENT WRAPPER
        ========================= */

        .heroContentWrapper {
          position: absolute;

          left: 0;
          bottom: 0;

          z-index: 20;
        }

        /* =========================
           CONTENT BOX
        ========================= */

        .heroContent {
          position: relative;

          width: 600px;

          padding: 24px 24px 24px 24px;

          background: #f4f1ea;

          border-top-right-radius: 44px;
        }

        /* =========================
           CONTENT CUTS
        ========================= */

        .topCut {
          position: absolute;

          top: -60px;
          left: 0;

          width: 60px;
          height: 60px;

          border-bottom-left-radius: 30px;

          box-shadow: -20px 20px 0 #f4f1ea;
        }

        .sideCut {
          position: absolute;

          right: -60px;
          bottom: 0;

          width: 60px;
          height: 60px;

          border-bottom-left-radius: 30px;

          box-shadow: -20px 20px 0 #f4f1ea;
        }

        /* =========================
           TYPOGRAPHY
        ========================= */

        .heroContent h1 {
          color: black;

          font-size: 4.6rem;
          font-weight: 700;

          line-height: 0.92;

          letter-spacing: -0.06em;

          text-transform: uppercase;
        }

        .heroContent p {
          margin-top: 28px;

          max-width: 560px;

          color: rgba(0, 0, 0, 0.68);

          font-size: 1.2rem;

          line-height: 1.7;
        }

        /* =========================
           BUTTON
        ========================= 

        .heroContent button {
          margin-top: 30px;

          display: flex;
          align-items: center;
          gap: 14px;

          border: none;
          outline: none;

          background: transparent;

          color: #6f8796;

          font-size: 1rem;
          font-weight: 500;

          letter-spacing: 0.12em;

          text-transform: uppercase;

          cursor: pointer;

          transition: 0.3s ease;
        }

        .heroContent button:hover {
          gap: 20px;
        }
*/
        .heroContent span {
          font-size: 1.5rem;
        }

        /* =========================
           FLOAT BUTTON
        ========================= */

        .floatingBtn {
          position: fixed;

          right: 10px;
          bottom: 20px;

          width: 46px;
          height: 46px;

          border-radius: 50%;

          background: black;

          color: white;

          display: flex;
          align-items: center;
          justify-content: center;

          font-size: 2rem;

          z-index: 30;
        }
      `}</style>
    </section>
  );
}
