"use client";

import { useState, useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { MathUtils } from "three";

export function Starfield({ count = 5000, speed = 2 }) {
  const pointsRef = useRef();

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      pos[i] = MathUtils.randFloatSpread(100);
    }
    return pos;
  }, [count]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.position.y -= delta * speed;

      if (pointsRef.current.position.y < -50) {
        pointsRef.current.position.y = 50;
      }
    }
  });

  return (
    <group ref={pointsRef}>
      <Points positions={positions}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}
