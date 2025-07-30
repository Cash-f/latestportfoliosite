import { create } from "zustand";
import { Vector3 } from "three";

const BASE_BUG_SPEED = 1.5;
const SPEED_INCREASE_FACTOR = 0.4;
const BASE_SPAWN_INTERVAL = 1.2;
const MAX_SPAWN_RATE_SCORE = 1000;
const MIN_SPAWN_INTERVAL = 0.3;

export const useStore = create((set, get) => ({
  // --- Game State ---
  player: { position: [0, -4, 0], direction: 0 },
  bullets: [],
  bugs: [],
  score: 0,
  gameOver: false,
  bugSpawnTimer: 0,
  viewport: null,

  // --- NEW: Add state for the modal ---
  isCodeModalOpen: false,

  // --- Game Actions ---
  movePlayer: (direction) => {
    set((state) => ({ player: { ...state.player, direction } }));
  },
  shoot: () => {
    if (get().gameOver) return;
    const playerPos = get().player.position;
    set((state) => ({
      bullets: [
        ...state.bullets,
        { id: Date.now(), position: [playerPos[0], playerPos[1] + 0.5, 0] },
      ],
    }));
  },
  update: (delta) => {
    const {
      gameOver,
      viewport,
      bugs,
      bullets,
      player,
      increaseScore,
      setGameOver,
      score,
    } = get();
    if (gameOver || !viewport) return;
    let { bugSpawnTimer } = get();
    bugSpawnTimer += delta;
    const scoreProgress =
      Math.min(score, MAX_SPAWN_RATE_SCORE) / MAX_SPAWN_RATE_SCORE;
    const spawnInterval =
      BASE_SPAWN_INTERVAL -
      (BASE_SPAWN_INTERVAL - MIN_SPAWN_INTERVAL) * scoreProgress;
    if (bugSpawnTimer > spawnInterval) {
      bugSpawnTimer = 0;
      const scoreBonusSpeed = Math.floor(score / 100) * SPEED_INCREASE_FACTOR;
      const newBugSpeed =
        BASE_BUG_SPEED + scoreBonusSpeed + Math.random() * 0.5;
      const halfWidth = viewport.width / 2;
      const bugType = ["NaN", "{}", "</>"][Math.floor(Math.random() * 3)];
      set((state) => ({
        bugs: [
          ...state.bugs,
          {
            id: Date.now(),
            text: bugType,
            position: [
              (Math.random() - 0.5) * halfWidth * 1.8,
              viewport.height / 2 + 1,
              0,
            ],
            speed: newBugSpeed,
          },
        ],
      }));
    }
    let updatedBugs = get()
      .bugs.map((bug) => ({
        ...bug,
        position: [
          bug.position[0],
          bug.position[1] - bug.speed * delta,
          bug.position[2],
        ],
      }))
      .filter((bug) => bug.position[1] > -viewport.height / 2 - 2);
    let updatedBullets = bullets
      .map((bullet) => ({
        ...bullet,
        position: [
          bullet.position[0],
          bullet.position[1] + 20 * delta,
          bullet.position[2],
        ],
      }))
      .filter((bullet) => bullet.position[1] < viewport.height / 2 + 1);
    const playerPos = new Vector3(...player.position);
    for (const bullet of updatedBullets) {
      const bulletPos = new Vector3(...bullet.position);
      for (const bug of updatedBugs) {
        const bugPos = new Vector3(...bug.position);
        if (bulletPos.distanceTo(bugPos) < 0.7) {
          updatedBugs = updatedBugs.filter((b) => b.id !== bug.id);
          updatedBullets = updatedBullets.filter((b) => b.id !== bullet.id);
          increaseScore(10);
        }
      }
    }
    for (const bug of updatedBugs) {
      const bugPos = new Vector3(...bug.position);
      if (bugPos.distanceTo(playerPos) < 1) {
        setGameOver();
      }
    }
    set({ bugSpawnTimer, bugs: updatedBugs, bullets: updatedBullets });
  },
  increaseScore: (amount) => {
    set((state) => ({ score: state.score + amount }));
  },
  setGameOver: () => {
    set({ gameOver: true });
  },
  resetGame: () => {
    set({
      player: { position: [0, -4, 0], direction: 0 },
      bullets: [],
      bugs: [],
      score: 0,
      gameOver: false,
      bugSpawnTimer: 0,
      isCodeModalOpen: false, // --- Ensure modal closes on reset
    });
  },

  // --- NEW: Add actions for the modal ---
  openCodeModal: () => set({ isCodeModalOpen: true }),
  closeCodeModal: () => set({ isCodeModalOpen: false }),
}));
