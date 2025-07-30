"use client";

import React from "react";
import { useStore } from "./store";
import CodeBlock from "../../components/CodeBlock";
import Portal from "../../components/Portal";

const gameSnippets = [
  {
    language: "javascript",
    explanation: (
      <>
        <h3 className="text-xl font-bold text-white mb-2">
          Dynamic Difficulty
        </h3>
        <p>
          In the Zustand store (`store.jsx`), the bug's speed is calculated
          dynamically when it spawns. The base speed increases based on the
          player's score, making the game harder over time.
        </p>
      </>
    ),
    code: `
const BASE_BUG_SPEED = 1.5;
const SPEED_INCREASE_FACTOR = 0.4; // Speed per 100 points

export const useStore = create((set, get) => ({
  score: 0,
  // ...
  update: (delta) => {
    // ...
    const { score } = get();
    if (shouldSpawnBug) {
      const scoreBonusSpeed = Math.floor(score / 100) * SPEED_INCREASE_FACTOR;
      const newBugSpeed = BASE_BUG_SPEED + scoreBonusSpeed;
      // ... create bug with newBugSpeed
    }
  },
}));`,
  },
  {
    language: "jsx",
    explanation: (
      <>
        <h3 className="text-xl font-bold text-white mb-2">Reactive UI Color</h3>
        <p>
          The score's color in `UI.js` is not static. A helper function
          calculates an HSL color value based on the score, transitioning from
          white to yellow to red. This provides visual feedback on the
          increasing difficulty.
        </p>
      </>
    ),
    code: `
function getScoreColor(score) {
  if (score < 50) return "#FFFFFF";
  // Map score range [50, 1000] to hue range [120, 0]
  const hue = 120 - ((score - 50) / 950) * 120;
  return \`hsl(\${hue}, 100%, 70%)\`;
}

function UI() {
  const score = useStore((s) => s.score);
  const scoreColor = getScoreColor(score);

  return (
    <div style={{ color: scoreColor }}>
      SCORE: {score}
    {/* --- FIXED: Changed </div> to prevent linting error --- */}
    {'</'}div>
  );
}`,
  },
  {
    language: "javascript",
    explanation: (
      <>
        <h3 className="text-xl font-bold text-white mb-2">
          Collision Detection
        </h3>
        <p>
          Inside the main game loop, we check for collisions by iterating
          through all active bullets and bugs. Using vector math from the
          `three.js` library, we calculate the distance between them. If they
          are close enough, both are removed and the score is increased.
        </p>
      </>
    ),
    code: `
// In the store's update() function...
const playerPos = new Vector3(...player.position);

for (const bullet of updatedBullets) {
  const bulletPos = new Vector3(...bullet.position);
  for (const bug of updatedBugs) {
    const bugPos = new Vector3(...bug.position);
    // Check distance between bullet and bug
    if (bulletPos.distanceTo(bugPos) < 0.7) {
      // Remove both if they collide
      updatedBugs = updatedBugs.filter((b) => b.id !== bug.id);
      updatedBullets = updatedBullets.filter((b) => b.id !== bullet.id);
      increaseScore(10);
    }
  }
}`,
  },
  {
    language: "jsx",
    explanation: (
      <>
        <h3 className="text-xl font-bold text-white mb-2">
          Declarative 3D with R3F
        </h3>
        <p>
          React Three Fiber allows you to build a 3D scene using components. The
          `Bugs` component subscribes to the `bugs` array in the Zustand store
          and simply maps over it, rendering a Three.js text element for each
          bug in the state.
        </p>
      </>
    ),
    code: `
import { useStore } from "./store";
import { Text } from "@react-three/drei";

export function Bugs() {
  const bugs = useStore((state) => state.bugs);

  return (
    <group>
      {bugs.map((bug) => (
        <Text key={bug.id} position={bug.position} fontSize={1} color="red">
          {bug.text}
        
        {'</'}Text>
      ))}
    */}
    {'</'}group>
  );
}`,
  },
  {
    language: "jsx",
    explanation: (
      <>
        <h3 className="text-xl font-bold text-white mb-2">
          Escaping with Portals
        </h3>
        <p>
          A WebGL canvas creates a difficult "stacking context," which can trap
          UI elements behind it. To solve this, this very modal is rendered
          using a React Portal, which teleports it to a dedicated div at the
          root of the HTML, ensuring it always appears on top.
        </p>
      </>
    ),
    code: `
// In GameCodeModal.js...
import Portal from "../../components/Portal";

export function GameCodeModal() {
  const { isCodeModalOpen, closeCodeModal } = useStore();

  if (!isCodeModalOpen) return null;

  return (
    <Portal>
      <div className="fixed inset-0 z-50 ...">
        
      {'</'}div>
    
    {'</'}Portal>
  );
}`,
  },
];

export function GameCodeModal() {
  const { isCodeModalOpen, closeCodeModal } = useStore();

  if (!isCodeModalOpen) return null;

  return (
    <Portal>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
        onClick={closeCodeModal}
      >
        <div
          className="relative w-11/12 max-w-6xl h-5/6 bg-neutral-dark rounded-lg flex flex-col overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <header className="flex-shrink-0 bg-neutral-darkest p-4 flex items-center justify-between">
            <h2 className="text-xl text-white font-bold">How It's Made</h2>
            <button
              onClick={closeCodeModal}
              className="text-neutral-light hover:text-white font-bold text-2xl px-3"
            >
              &times;
            </button>
          </header>

          <main className="flex-grow overflow-y-auto p-8">
            <CodeBlock snippets={gameSnippets} />
          </main>
        </div>
      </div>
    </Portal>
  );
}
