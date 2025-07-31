"use client";

import { Canvas, useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { useStore } from "./store";
import { Player } from "./Player";
import { Bullets } from "./Bullets";
import { Bugs } from "./Bugs";
import { GameLogic } from "./GameLogic";
import { UI } from "./UI";
import { Starfield } from "./Starfield";

function SceneSetup() {
  const { viewport } = useThree();
  useEffect(() => {
    useStore.setState({ viewport });
  }, [viewport]);
  return null;
}

export default function GamePage() {
  const isCodeModalOpen = useStore((state) => state.isCodeModalOpen);
  const mobileControlsInteracted = useStore(
    (state) => state.mobileControlsInteracted
  );
  const { movePlayer, shoot } = useStore();

  return (
    <div className="relative w-screen h-screen bg-neutral-darkest select-none">
      <div className={`absolute inset-0 ${isCodeModalOpen ? "z-50" : "z-20"}`}>
        <UI />
      </div>

      <div className="absolute inset-0 z-10">
        <Canvas>
          <orthographicCamera makeDefault position={[0, 0, 10]} zoom={40} />
          <ambientLight intensity={1} />
          <directionalLight position={[0, 5, 5]} intensity={2} />
          <SceneSetup />
          <Starfield speed={1} />
          <Player />
          <Bullets />
          <Bugs />
          <GameLogic />
        </Canvas>
      </div>

      <div
        className={`md:hidden absolute bottom-0 left-0 w-full h-1/4 grid grid-cols-3 gap-4 p-4 z-30 transition-opacity duration-700 ${
          mobileControlsInteracted ? "opacity-0" : "opacity-100"
        }`}
      >
        <div
          className="bg-white bg-opacity-20 rounded-lg flex items-center justify-center text-white text-3xl"
          onPointerDown={() => movePlayer(-1)}
          onPointerUp={() => movePlayer(0)}
        >
          &larr;
        </div>
        <div
          className="bg-accent bg-opacity-50 rounded-lg flex items-center justify-center text-white text-3xl"
          onPointerDown={() => shoot()}
        >
          SHOOT
        </div>
        <div
          className="bg-white bg-opacity-20 rounded-lg flex items-center justify-center text-white text-3xl"
          onPointerDown={() => movePlayer(1)}
          onPointerUp={() => movePlayer(0)}
        >
          &rarr;
        </div>
      </div>
    </div>
  );
}
