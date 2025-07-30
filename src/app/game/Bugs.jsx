import { useStore } from "./store";
import { Text } from "@react-three/drei";

export function Bugs() {
  const bugs = useStore((state) => state.bugs);

  return (
    <group>
      {bugs.map((bug) => (
        <Text key={bug.id} position={bug.position} fontSize={1} color="red">
          {bug.text}
        </Text>
      ))}
    </group>
  );
}
