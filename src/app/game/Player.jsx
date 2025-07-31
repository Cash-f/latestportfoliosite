"use client";

import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useStore } from "./store";
import { KeyboardControls, useKeyboardControls } from "@react-three/drei";

function Controller() {
  const { movePlayer, shoot } = useStore();

  const [sub] = useKeyboardControls();

  useEffect(() => {
    return sub(
      (state) => state.shoot,
      (pressed) => {
        if (pressed) shoot();
      }
    );
  }, [sub, shoot]);

  useEffect(() => {
    return sub(
      (state) => ({ left: state.left, right: state.right }),
      ({ left, right }) => {
        let direction = 0;
        if (left) direction = -1;
        if (right) direction = 1;
        movePlayer(direction);
      }
    );
  }, [sub, movePlayer]);

  return null;
}

export function Player() {
  const playerRef = useRef();
  const playerState = useStore((state) => state.player);
  const viewport = useStore((state) => state.viewport);

  useFrame((state, delta) => {
    if (!playerRef.current || !viewport) return;

    const { direction, position } = useStore.getState().player;
    const { setPlayerPosition } = useStore.getState();

    let newX = position[0] + direction * 10 * delta;

    const halfWidth = viewport.width / 2;
    newX = Math.max(-halfWidth + 0.5, Math.min(halfWidth - 0.5, newX));

    playerRef.current.position.x = newX;

    setPlayerPosition([newX, position[1], position[2]]);
  });

  return (
    <>
      <KeyboardControls
        map={[
          { name: "left", keys: ["ArrowLeft", "a", "A"] },
          { name: "right", keys: ["ArrowRight", "d", "D"] },
          { name: "shoot", keys: ["Space"] },
        ]}
      >
        <Controller />
      </KeyboardControls>
      <mesh ref={playerRef} position={playerState.position}>
        <coneGeometry args={[0.5, 1, 3]} rotation={[0, 0, Math.PI]} />
        <meshStandardMaterial color="#ededed" />
      </mesh>
    </>
  );
}
