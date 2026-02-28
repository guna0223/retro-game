import { useState, useCallback } from "react";
import GameCard from "./GameCard";
import "../css/GameCard.css";
import "../css/Emulator.css";

// Game library
const GAMES = [
  {
    id: "mario",
    name: "Super Mario World",
    file: "Super Mario World.smc",
    color: "#e74c3c",
    image: "mario.jpg"
  },
  {
    id: "donkey-kong",
    name: "Donkey Kong Country",
    file: "Donkey Kong Country (U) (V1.2) [!].smc",
    color: "#f39c12",
    image : "monkey.jpg"
  },
  {
    id: "top-gear",
    name: "Top Gear",
    file: "Top Gear (USA).sfc",
    color: "#3498db"
  }
];

// Controls
const CONTROLS = [
  { keys: ["↑", "↓", "←", "→"], action: "Move" },
  { keys: ["Z"], action: "A Button" },
  { keys: ["X"], action: "B Button" },
  { keys: ["Enter"], action: "Start" },
  { keys: ["Shift"], action: "Select" }
];

function Emulator() {
  const [selectedGame, setSelectedGame] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Play a game
  const playGame = useCallback((game) => {
    setSelectedGame(game);
    setIsLoading(true);

    // Configure EmulatorJS
    window.EJS_player = "#game";
    window.EJS_core = "snes";
    window.EJS_pathtodata = "https://cdn.emulatorjs.org/stable/data/";
    window.EJS_gameUrl = `/games/${game.file}`;

    // Clear previous
    const gameDiv = document.getElementById("game");
    if (gameDiv) {
      gameDiv.innerHTML = "";
    }

    // Remove old script
    const existingScript = document.querySelector('script[data-ejs]');
    if (existingScript) {
      existingScript.remove();
    }

    // Load new script
    const script = document.createElement("script");
    script.src = "https://cdn.emulatorjs.org/stable/data/loader.js";
    script.async = true;
    script.setAttribute('data-ejs', 'true');

    script.onload = () => {
      setIsLoading(false);
    };

    script.onerror = () => {
      setIsLoading(false);
    };

    document.body.appendChild(script);
  }, []);

  // Go back to game selection
  const goBack = useCallback(() => {
    setSelectedGame(null);
    const gameDiv = document.getElementById("game");
    if (gameDiv) {
      gameDiv.innerHTML = "";
    }
  }, []);

  // Show game selection grid
  if (!selectedGame) {
    return (
      <div className="arcade-container">
        <div className="arcade-bg"></div>
        
        <div className="game-library">
          <h2 className="library-title">SELECT GAME</h2>
          
          <div className="games-grid">
            {GAMES.map((game) => (
              <GameCard 
                key={game.id} 
                game={game} 
                onPlay={playGame} 
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Show emulator
  return (
    <div className="arcade-container">
      <div className="arcade-bg"></div>
      
      <button className="back-btn" onClick={goBack}>
        ← Back to Games
      </button>

      <div className="emulator-area">
        <div className="emulator-screen">
          {isLoading && (
            <div className="loading-overlay">
              <div className="loading-spinner"></div>
              <p>Loading {selectedGame.name}...</p>
            </div>
          )}
          <div id="game" className="emulator-game"></div>
        </div>
      </div>

      <div className="controls-panel">
        <h3 className="controls-title">CONTROLS</h3>
        <div className="controls-grid">
          {CONTROLS.map((control, i) => (
            <div key={i} className="control-row">
              <div className="control-keys">
                {control.keys.map((key, j) => (
                  <kbd key={j}>{key}</kbd>
                ))}
              </div>
              <span className="control-action">{control.action}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Emulator;
