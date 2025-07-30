import { useStore } from "./store";
import Link from "next/link";
import { GameCodeModal } from "./GameCodeModal";

// (getScoreColor function remains the same)
function getScoreColor(score) {
  if (score < 50) return "#FFFFFF";
  const scoreForColor = Math.min(score, 1000);
  const hue = 120 - ((scoreForColor - 50) / 950) * 120;
  return `hsl(${hue}, 100%, 70%)`;
}

export function UI() {
  const { score, gameOver, resetGame, openCodeModal } = useStore();
  const scoreColor = getScoreColor(score);

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
      {/* ... score display ... */}
      <div
        className="absolute top-4 left-4 text-2xl font-bold transition-colors duration-500"
        style={{ color: scoreColor, textShadow: "1px 1px 3px #000" }}
      >
        SCORE: {score}
      </div>

      {gameOver && (
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <h2 className="text-6xl text-white font-bold mb-4">GAME OVER</h2>
          <p className="text-3xl text-white mb-8">Your Score: {score}</p>

          <div className="flex space-x-4">
            <button
              onClick={resetGame}
              className="pointer-events-auto bg-accent hover:bg-accent-hover text-foreground font-bold py-3 px-8 rounded-md"
            >
              RESTART
            </button>
            <button
              // --- DEBUGGING: Add a console.log here ---
              onClick={() => {
                console.log("1. 'Show Code' button clicked in UI.js");
                openCodeModal();
              }}
              className="pointer-events-auto bg-neutral-dark hover:bg-neutral-medium text-foreground font-bold py-3 px-8 rounded-md"
            >
              SHOW CODE
            </button>
          </div>

          <Link
            href="/"
            className="pointer-events-auto mt-8 text-neutral-light hover:text-white"
          >
            Return to Home
          </Link>
        </div>
      )}

      <GameCodeModal />
    </div>
  );
}
