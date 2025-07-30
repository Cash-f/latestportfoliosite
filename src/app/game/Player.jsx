import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useStore } from "./store";
import { KeyboardControls, useKeyboardControls } from "@react-three/drei";

function Controller() {
  const { movePlayer, shoot } = useStore.getState();
  const [sub, get] = useKeyboardControls();

  useEffect(() => {
    return sub(
      (state) => state.shoot,
      (pressed) => {
        if (pressed) shoot();
      }
    );
  }, [sub, shoot]);

  useFrame((state, delta) => {
    const controls = get();
    let direction = 0;
    if (controls.left) direction = -1;
    if (controls.right) direction = 1;
    movePlayer(direction);
  });

  return null;
}

export function Player() {
  const playerRef = useRef();
  const playerState = useStore((state) => state.player);
  const viewport = useStore((state) => state.viewport);

  useFrame((state, delta) => {
    if (!viewport) return;
    const { direction, position } = useStore.getState().player;
    position[0] += direction * 10 * delta;

    const halfWidth = viewport.width / 2;
    position[0] = Math.max(
      -halfWidth + 0.5,
      Math.min(halfWidth - 0.5, position[0])
    );

    playerRef.current.position.set(...position);
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
