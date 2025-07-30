import { useStore } from "./store";

export function Bullets() {
  const bullets = useStore((state) => state.bullets);

  return (
    <group>
      {bullets.map((bullet) => (
        <mesh key={bullet.id} position={bullet.position}>
          <boxGeometry args={[0.1, 0.5, 0.1]} />
          <meshStandardMaterial
            color="#f97316"
            emissive="#f97316"
            emissiveIntensity={2}
          />
        </mesh>
      ))}
    </group>
  );
}
