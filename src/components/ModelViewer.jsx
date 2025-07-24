"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model({ url }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

export default function ModelViewer({ modelUrl }) {
  return (
    <div className="w-full h-96 rounded-lg bg-neutral-darkest">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={5} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <Suspense fallback={null}>
          <Model url={modelUrl} />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
