import { useStore } from "./store";
import Link from "next/link";

export function UI() {
  const { score, gameOver, resetGame } = useStore();

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
      <div className="absolute top-4 left-4 text-white text-2xl font-bold">
        SCORE: {score}
      </div>

      {gameOver && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <h2 className="text-6xl text-white font-bold mb-4">GAME OVER</h2>
          <button
            onClick={resetGame}
            className="pointer-events-auto bg-accent hover:bg-accent-hover text-foreground font-bold py-3 px-8 rounded-md"
          >
            RESTART
          </button>

          <Link
            href="/"
            className="pointer-events-auto mt-4 text-neutral-light hover:text-white"
          >
            Return to Home
          </Link>
        </div>
      )}
    </div>
  );
}
