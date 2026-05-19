"use client";

import { useEffect, useRef, useMemo, useCallback } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const SPREAD_X = 16;
const SPREAD_Y = 9;
const SPREAD_Z = 3.5;

/* ─────────────────────────────────────────────
   TEXT SAMPLING
───────────────────────────────────────────── */
function sampleText(text: string): { x: number; y: number }[] {
  const w = 600;
  const h = 200;

  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;

  const ctx = canvas.getContext("2d")!;

  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = "#fff";
  ctx.font = `bold ${Math.floor(w / 4)}px Outfit, sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  ctx.fillText(text, w / 2, h / 2);

  const data = ctx.getImageData(0, 0, w, h).data;

  const points: { x: number; y: number }[] = [];

  for (let y = 0; y < h; y += 4) {
    for (let x = 0; x < w; x += 4) {
      if (data[(y * w + x) * 4] > 128 && Math.random() > 0.08) {
        points.push({ x, y });
      }
    }
  }

  return points;
}

/* ─────────────────────────────────────────────
   VERTEX SHADER
───────────────────────────────────────────── */
const VERT = /* glsl */ `
uniform float uTime;
uniform float uHover;

attribute vec3 aHome;
attribute vec3 aTarget;
attribute float aIsText;
attribute vec3 aRand;
attribute float aDepth;
attribute float aSize;

varying float vIsText;
varying float vDepth;
varying float vAlpha;
varying float vFormation;

void main() {

  vec3 pos;

  if (aIsText > 0.5) {

    float p = uHover * uHover * (3.0 - 2.0 * uHover);

    pos = mix(aHome, aTarget, p);

    float speed = mix(1.8, 0.18, p);

    float t1 = uTime * speed * (0.52 + aRand.x * 0.34);
    float t2 = uTime * speed * (0.46 + aRand.y * 0.28);
    float t3 = uTime * speed * (0.38 + aRand.z * 0.22);

    float moveActivity = 1.0 - p * 0.45;

    pos.x += (
      sin(t1 * 1.8 + aRand.y * 10.0) * 0.06 +
      cos(t2 * 2.1 + aRand.z * 7.0) * 0.04
    ) * moveActivity;

    pos.y += (
      cos(t2 * 1.7 + aRand.x * 8.0) * 0.05 +
      sin(t1 * 2.4 + aRand.z * 5.0) * 0.03
    ) * moveActivity;

    pos.z += (
      sin(t3 * 1.9 + aRand.x * 6.0) * 0.025
    ) * moveActivity;

    float breath = 0.03 * p;

    pos.x += sin(uTime * 0.22 + aRand.x * 6.28) * breath;
    pos.y += cos(uTime * 0.18 + aRand.y * 6.28) * breath * 0.8;

    vFormation = p;

  } else {

    pos = aHome;

    float activity = 1.0 - uHover * 0.45;

    float t1 = uTime * (0.18 + aRand.x * 0.25);
    float t2 = uTime * (0.16 + aRand.y * 0.22);
    float t3 = uTime * (0.14 + aRand.z * 0.20);

    pos.x += (
      sin(t1 * 1.7 + aRand.y * 12.0) * 0.22 +
      cos(t2 * 2.3 + aRand.z * 8.0) * 0.13 +
      sin(t3 * 3.1 + aRand.x * 5.0) * 0.09
    ) * activity;

    pos.y += (
      cos(t2 * 1.9 + aRand.x * 9.0) * 0.20 +
      sin(t1 * 2.6 + aRand.z * 7.0) * 0.12 +
      cos(t3 * 2.8 + aRand.y * 4.0) * 0.08
    ) * activity;

    pos.z += (
      sin(t3 * 2.1 + aRand.x * 6.0) * 0.10 +
      cos(t1 * 1.4 + aRand.y * 5.0) * 0.06
    ) * activity;

    pos.xy += vec2(
      sin(uTime * 0.25 + aRand.x * 20.0),
      cos(uTime * 0.22 + aRand.y * 20.0)
    ) * 0.03 * activity;

    /* SAFE ZONE */

    float safeX = 4.8;
    float safeY = 1.9;

    float edgeX = smoothstep(
      safeX,
      safeX + 1.5,
      abs(pos.x)
    );

    float edgeY = smoothstep(
      safeY,
      safeY + 1.2,
      abs(pos.y)
    );

    float edge = max(edgeX, edgeY);

    if (uHover > 0.01) {

      vec2 dir = normalize(pos.xy + 0.0001);

      float pushStrength =
        (1.0 - edge) *
        uHover *
        1.6;

      pos.xy += dir * pushStrength;
    }

    vFormation = 0.0;
  }

  float depthScale = mix(0.3, 1.5, aDepth);

  float baseSize = aSize * depthScale;

  if (aIsText > 0.5) {
    baseSize *= mix(1.0, 1.6, vFormation);
  }

  vec4 mvPos = modelViewMatrix * vec4(pos, 1.0);

  gl_Position = projectionMatrix * mvPos;

  gl_PointSize = max(
    baseSize * 38.0 * (1.0 / -mvPos.z),
    0.5
  );

  vIsText = aIsText;
  vDepth = aDepth;

  if (aIsText > 0.5) {

    vAlpha = mix(0.35, 1.0, vFormation);

  } else {

    float baseAlpha =
      mix(0.12, 0.45, aDepth);

    vAlpha = mix(
      baseAlpha,
      baseAlpha * 0.65,
      uHover
    );
  }
}
`;

/* ─────────────────────────────────────────────
   FRAGMENT SHADER
───────────────────────────────────────────── */
const FRAG = /* glsl */ `
varying float vIsText;
varying float vDepth;
varying float vAlpha;
varying float vFormation;

void main() {

  float d = length(gl_PointCoord - vec2(0.5));

  if (d > 0.5) discard;

  float softEdge =
    1.0 - smoothstep(0.0, 0.5, d);

  float alpha =
    vAlpha * softEdge * 1.4;

  vec3 deepBlue =
    vec3(0.05, 0.12, 0.28);

  vec3 midBlue =
    vec3(0.10, 0.25, 0.55);

  vec3 color;

  if (vIsText > 0.5) {

    color = mix(
      vec3(0.15, 0.30, 0.65),
      vec3(0.30, 0.55, 0.95),
      vFormation
    );

    alpha +=
      (1.0 - d * 2.0) *
      0.06 *
      vFormation;

    alpha = min(alpha, 1.0);

  } else {

    color = mix(
      deepBlue,
      midBlue,
      vDepth
    );
  }

  gl_FragColor = vec4(color, alpha);
}
`;

/* ─────────────────────────────────────────────
   PARTICLES
───────────────────────────────────────────── */
function Arc3DParticles({ hover }: { hover: React.MutableRefObject<number> }) {
  const matRef = useRef<THREE.ShaderMaterial>(null);

  const count = useMemo(() => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      return 4500;
    }

    return 8500;
  }, []);

  const geometry = useMemo(() => {
    const g = new THREE.BufferGeometry();

    const home = new Float32Array(count * 3);

    const target = new Float32Array(count * 3);

    const rand = new Float32Array(count * 3);

    const isText = new Float32Array(count);

    const depth = new Float32Array(count);

    const size = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * SPREAD_X;

      const y = (Math.random() - 0.5) * SPREAD_Y;

      const z = (Math.random() - 0.5) * SPREAD_Z;

      home[i * 3] = x;
      home[i * 3 + 1] = y;
      home[i * 3 + 2] = z;

      target[i * 3] = x;
      target[i * 3 + 1] = y;
      target[i * 3 + 2] = z;

      rand[i * 3] = Math.random();
      rand[i * 3 + 1] = Math.random();
      rand[i * 3 + 2] = Math.random();

      depth[i] = (z + SPREAD_Z / 2) / SPREAD_Z;

      size[i] = 0.3 + Math.random() * 0.7;
    }

    g.setAttribute("position", new THREE.BufferAttribute(home.slice(), 3));

    g.setAttribute("aHome", new THREE.BufferAttribute(home, 3));

    g.setAttribute("aTarget", new THREE.BufferAttribute(target, 3));

    g.setAttribute("aRand", new THREE.BufferAttribute(rand, 3));

    g.setAttribute("aIsText", new THREE.BufferAttribute(isText, 1));

    g.setAttribute("aDepth", new THREE.BufferAttribute(depth, 1));

    g.setAttribute("aSize", new THREE.BufferAttribute(size, 1));

    return g;
  }, [count]);

  /* TEXT FORMATION */
  useEffect(() => {
    const pts = sampleText("Arc3D");

    if (!pts.length) return;

    const tgtA = geometry.getAttribute("aTarget") as THREE.BufferAttribute;

    const isTxt = geometry.getAttribute("aIsText") as THREE.BufferAttribute;

    const textWorld = pts.map((p) => ({
      x: (p.x / 600 - 0.5) * SPREAD_X * 0.55,

      y: -(p.y / 200 - 0.5) * SPREAD_Y * 0.35,
    }));

    for (let i = 0; i < textWorld.length; i++) {
      const idx = i % count;

      tgtA.array[idx * 3] = textWorld[i].x + (Math.random() - 0.5) * 0.08;

      tgtA.array[idx * 3 + 1] = textWorld[i].y + (Math.random() - 0.5) * 0.08;

      tgtA.array[idx * 3 + 2] = (Math.random() - 0.5) * 0.08;

      isTxt.array[idx] = 1;
    }

    tgtA.needsUpdate = true;
    isTxt.needsUpdate = true;
  }, [geometry, count]);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uHover: { value: 0 },
    }),
    [],
  );

  useFrame(() => {
    if (!matRef.current) return;

    const u = matRef.current.uniforms;

    u.uTime.value += 0.016;

    u.uHover.value += (hover.current - u.uHover.value) * 0.08;
  });

  return (
    <points>
      <primitive object={geometry} attach="geometry" />

      <shaderMaterial
        ref={matRef}
        vertexShader={VERT}
        fragmentShader={FRAG}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.NormalBlending}
      />
    </points>
  );
}

/* ─────────────────────────────────────────────
   SECTION
───────────────────────────────────────────── */
export default function MorphingParticles() {
  const hover = useRef(0);

  const onEnter = useCallback(() => {
    hover.current = 1;
  }, []);

  const onLeave = useCallback(() => {
    hover.current = 0;
  }, []);

  return (
    <section
      className="
        relative
        z-10
        w-full
        bg-white
        overflow-hidden
      "
      style={{
        minHeight: "70vh",
      }}
    >
      <div
        className="
          relative
          w-full
          h-[70vh]
        "
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        <Canvas
          camera={{
            position: [0, 0, 7],
            fov: 55,
          }}
          dpr={[1, 2]}
          style={{
            position: "absolute",
            inset: 0,
          }}
        >
          <Arc3DParticles hover={hover} />
        </Canvas>

        <div
          className="
            absolute
            bottom-12
            left-1/2
            -translate-x-1/2
            text-black/20
            text-xs
            tracking-[0.3em]
            uppercase
            pointer-events-none
            select-none
          "
        >
          Arc3D
        </div>
      </div>
    </section>
  );
}
