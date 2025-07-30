import { useFrame } from "@react-three/fiber";
import { useStore } from "./store";

export function GameLogic() {
  useFrame((state, delta) => {
    // Call the main game update loop
    useStore.getState().update(delta);
  });

  return null;
}
