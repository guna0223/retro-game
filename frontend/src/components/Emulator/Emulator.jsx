import { useState, useCallback } from "react";
import GameCard from "./GameCard";
import "../css/GameCard.css";
import "../css/Emulator.css";

// Categories
const CATEGORIES = [
  { id: "all", name: "All Games" },
  { id: "action", name: "Action" },
  { id: "racing", name: "Racing" },
  { id: "fighting", name: "Fighting" },
  { id: "adventure", name: "Adventure" },
  { id: "rpg", name: "RPG" }
];

// Game library
const GAMES = [
  {
    id: "1",
    name: "Super Mario World",
    file: "Super Mario World.smc",
    color: "#e74c3c",
    image: "mario.jpg",
    system: "snes",
    category: "action"
  },
  {
    id: "2",
    name: "Donkey Kong Country",
    file: "Donkey Kong Country (U) (V1.2) [!].smc",
    color: "#f39c12",
    image: "monkey.jpg",
    system: "snes",
    category: "action"
  },
  {
    id: "3",
    name: "Top Gear",
    file: "Top Gear (USA).sfc",
    color: "#3498db",
    image: "topgear.jpeg",
    system: "snes",
    category: "racing"
  },
  {
    id: "4",
    name: "Street Fighter Two",
    file: "Street Fighter Two .smc",
    color: "#e74c3c",
    image: "Street Fighter Two.jpg",
    system: "snes",
    category: "fighting"
  },
  {
    id: "5",
    name: "Spider-Man",
    file: "Spider-Man.sfc",
    color: "#e74c3c",
    image: "spiderman1.jpeg",
    system: "snes",
    category: "action"
  },
  {
    id: "6",
    name: "Spider-Man-2",
    file: "Spiderman2.gba",
    color: "#e74c3c",
    image: "spiderman2.jpeg",
    system: "gba",
    category: "action"
  },
   {
    id: "7",
    name: "Pokemon",
    file: "Pokemon.gba",
    color: "#e74c3c",
    image: "spiderman2.jpeg",
    system: "gba",
    category: "rpg"
  },
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
  const [gameStarted, setGameStarted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filter games by category
  const filteredGames = selectedCategory === "all" 
    ? GAMES 
    : GAMES.filter(game => game.category === selectedCategory);

  // Select a game (show preview)
  const selectGame = useCallback((game) => {
    setSelectedGame(game);
    setGameStarted(false);
  }, []);

  // Start the game
  const startGame = useCallback(() => {
    if (!selectedGame) return;

    setGameStarted(true);
    setIsLoading(true);

    // Get the correct emulator core for the game
    const emulatorCore = selectedGame.system || "snes";

    // Configure EmulatorJS
    window.EJS_player = "#game";
    window.EJS_core = emulatorCore;
    window.EJS_pathtodata = "https://cdn.emulatorjs.org/stable/data/";
    window.EJS_gameUrl = `/games/${selectedGame.file}`;

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
  }, [selectedGame]);

  // Go back to game selection - stop game and sound
  const goBack = useCallback(() => {
    // Find and remove all audio elements created by the emulator
    const allAudio = document.querySelectorAll('audio');
    allAudio.forEach(audio => {
      audio.pause();
      audio.src = '';
      audio.remove();
    });

    // Stop EmulatorJS if it exists
    try {
      // Try to access the emulator through the element
      const gameContainer = document.getElementById('game');
      if (gameContainer && gameContainer.emulator) {
        if (gameContainer.emulator.stop) {
          gameContainer.emulator.stop();
        }
        gameContainer.emulator = null;
      }
      // Also try window.EJS
      if (window.EJS) {
        if (window.EJS.stop) window.EJS.stop();
        if (window.EJS.emulator && window.EJS.emulator.stop) {
          window.EJS.emulator.stop();
        }
      }
    } catch (e) {
      console.log("Emulator stop error:", e);
    }

    // Clear the game container
    const gameDiv = document.getElementById("game");
    if (gameDiv) {
      gameDiv.innerHTML = "";
      gameDiv.innerHTML = '';
    }

    // Remove the emulator script to fully stop
    const existingScript = document.querySelector('script[data-ejs]');
    if (existingScript) {
      existingScript.remove();
    }

    // Clear EJS variables
    window.EJS_player = undefined;
    window.EJS_core = undefined;
    window.EJS_gameUrl = undefined;

    setSelectedGame(null);
    setGameStarted(false);
  }, []);

  // Show game selection grid
  if (!selectedGame) {
    return (
      <div className="arcade-container">
        <div className="arcade-bg"></div>

        <div className="game-library">
          <h2 className="library-title">RETRO ARCADE</h2>

          {/* Category Filters */}
          <div className="category-filters">
            {CATEGORIES.map((category) => (
              <button
                key={category.id}
                className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="games-grid">
            {filteredGames.map((game) => (
              <GameCard
                key={game.id}
                game={game}
                onPlay={selectGame}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Show emulator with preview
  return (
    <div className="arcade-container">
      <div className="arcade-bg"></div>

      <button className="back-btn" onClick={goBack}>
        ← Back to Games
      </button>

      <div className="emulator-area">
        <div className="emulator-screen">
          {/* Game Preview - shown before starting */}
          {!gameStarted && (
            <div className="game-preview">
              {selectedGame.image ? (
                <img
                  src={`/game-image/${selectedGame.image}`}
                  alt={selectedGame.name}
                  className="preview-image"
                />
              ) : (
                <div className="preview-placeholder">
                  <span>{selectedGame.name}</span>
                </div>
              )}
              <button className="start-btn" onClick={startGame}>
                START GAME
              </button>
            </div>
          )}

          {/* Loading */}
          {isLoading && (
            <div className="loading-overlay">
              <div className="loading-spinner"></div>
              <p>Loading {selectedGame.name}...</p>
            </div>
          )}

          {/* Emulator */}
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
