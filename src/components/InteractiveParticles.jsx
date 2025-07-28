"use client";

import React, { useMemo, useRef, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { BufferAttribute, MathUtils, Mesh, Color, CanvasTexture } from "three";

function Particles({ count, shape }) {
  const points = useRef();
  const { viewport, mouse } = useThree();

  const white = useMemo(() => new Color("white"), []);
  const orange = useMemo(() => new Color("#f97316"), []);

  const particlePositions = useMemo(() => {
    let geometry;
    shape.traverse((child) => {
      if (child instanceof Mesh && !geometry) {
        geometry = child.geometry;
      }
    });
    if (!geometry) return new Float32Array(0);

    const positions = new Float32Array(count * 3);
    const sourcePositions = geometry.attributes.position.array;
    const vertexCount = sourcePositions.length / 3;
    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * vertexCount);
      const x = sourcePositions[randomIndex * 3];
      const y = sourcePositions[randomIndex * 3 + 1];
      const z = sourcePositions[randomIndex * 3 + 2];
      positions.set([x, y, z], i * 3);
    }
    return positions;
  }, [count, shape]);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        mx: 0,
        my: 0,
        x: particlePositions[i * 3],
        y: particlePositions[i * 3 + 1],
        z: particlePositions[i * 3 + 2],
      });
    }
    return temp;
  }, [count, particlePositions]);

  const particleColors = useMemo(() => new Float32Array(count * 3), [count]);

  const circleTexture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 128;
    canvas.height = 128;
    const context = canvas.getContext("2d");
    context.beginPath();
    context.arc(64, 64, 50, 0, 2 * Math.PI);
    context.fillStyle = "white";
    context.fill();
    return new CanvasTexture(canvas);
  }, []);

  useFrame(() => {
    if (points.current) {
      const mouseX = (mouse.x * viewport.width) / 2;
      const mouseY = (mouse.y * viewport.height) / 2;
      const positions = points.current.geometry.attributes.position.array;
      const colors = points.current.geometry.attributes.color.array;

      particles.forEach((particle, i) => {
        let dx = mouseX - positions[i * 3];
        let dy = mouseY - positions[i * 3 + 1];
        let dist = Math.sqrt(dx * dx + dy * dy);
        let force = -Math.max(0, 1.5 - dist);
        particle.mx += dx * force * 0.01;
        particle.my += dy * force * 0.01;
        particle.mx *= 0.92;
        particle.my *= 0.92;
        positions[i * 3] +=
          (particle.x - positions[i * 3]) * 0.05 + particle.mx;
        positions[i * 3 + 1] +=
          (particle.y - positions[i * 3 + 1]) * 0.05 + particle.my;

        const color = new Color();
        const interactionStrength = Math.min(1, 1 / (dist * 2));
        color.lerpColors(white, orange, interactionStrength);
        colors[i * 3] = color.r;
        colors[i * 3 + 1] = color.g;
        colors[i * 3 + 2] = color.b;

        const halfWidth = viewport.width / 2;
        const halfHeight = viewport.height / 2;
        positions[i * 3] = MathUtils.clamp(
          positions[i * 3],
          -halfWidth,
          halfWidth
        );
        positions[i * 3 + 1] = MathUtils.clamp(
          positions[i * 3 + 1],
          -halfHeight,
          halfHeight
        );
      });

      points.current.geometry.attributes.position.needsUpdate = true;
      points.current.geometry.attributes.color.needsUpdate = true;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlePositions.length / 3}
          array={particlePositions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleColors.length / 3}
          array={particleColors}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.075}
        sizeAttenuation
        depthWrite={false}
        vertexColors
        transparent
        alphaTest={0.5}
        map={circleTexture}
      />
    </points>
  );
}

function Scene() {
  const { scene: gamepad } = useGLTF("/models/gamepad.glb");
  const groupRef = useRef();

  useFrame((state, delta) => {
    groupRef.current.rotation.y += delta * 0.2;
  });

  return (
    <group
      ref={groupRef}
      scale={2}
      position={[0.2, -0.5, 0]}
      rotation={[0.5, Math.PI / 6, 0]}
    >
      <Particles count={4000} shape={gamepad} />
    </group>
  );
}

export default function InteractiveParticles() {
  return (
    <Canvas
      style={{ width: "100%", height: "100%" }}
      camera={{ position: [0, 0, 5] }}
    >
      <ambientLight intensity={1} />
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
}
