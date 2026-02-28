import { useState, useCallback, useEffect } from "react";
import GameCard from "../GameCard/GameCard";

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

// Category sections for JioHotstar-style display
const CATEGORY_SECTIONS = [
  { id: "snes", name: "SNES Classics", color: "#e74c3c" },
  { id: "gba", name: "GBA Games", color: "#9b59b6" },
  { id: "nds", name: "NDS Games", color: "#3498db" },
  { id: "nes", name: "NES Games", color: "#27ae60" }
];

// Game library
const GAMES = [
  // SNES Games
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
    id: "snes1",
    name: "Super Mario Kart",
    file: "Super Mario World.smc",
    color: "#e74c3c",
    image: "mario.jpg",
    system: "snes",
    category: "racing"
  },
  {
    id: "snes2",
    name: "Legend of Zelda",
    file: "Super Mario World.smc",
    color: "#27ae60",
    image: "mario.jpg",
    system: "snes",
    category: "adventure"
  },
  {
    id: "snes3",
    name: "Metroid",
    file: "Super Mario World.smc",
    color: "#f39c12",
    image: "mario.jpg",
    system: "snes",
    category: "action"
  },
  // GBA Games
  {
    id: "6",
    name: "Spider-Man 2",
    file: "Spiderman2.gba",
    color: "#e74c3c",
    image: "spiderman2.jpeg",
    system: "gba",
    category: "action"
  },
  {
    id: "7",
    name: "Pokemon FireRed",
    file: "Pokemon.gba",
    color: "#e74c3c",
    image: "spiderman2.jpeg",
    system: "gba",
    category: "rpg"
  },
  {
    id: "gba1",
    name: "Pokemon Emerald",
    file: "Pokemon.gba",
    color: "#2ecc71",
    image: "spiderman2.jpeg",
    system: "gba",
    category: "rpg"
  },
  {
    id: "gba2",
    name: "Mario Kart Advance",
    file: "Pokemon.gba",
    color: "#e74c3c",
    image: "spiderman2.jpeg",
    system: "gba",
    category: "racing"
  },
  {
    id: "gba3",
    name: "Zelda Minish Cap",
    file: "Pokemon.gba",
    color: "#27ae60",
    image: "spiderman2.jpeg",
    system: "gba",
    category: "adventure"
  },
  {
    id: "gba4",
    name: "Final Fantasy",
    file: "Pokemon.gba",
    color: "#9b59b6",
    image: "spiderman2.jpeg",
    system: "gba",
    category: "rpg"
  },
  {
    id: "gba5",
    name: "Sonic Advance",
    file: "Pokemon.gba",
    color: "#3498db",
    image: "spiderman2.jpeg",
    system: "gba",
    category: "action"
  },
  // NDS Games
  {
    id: "8",
    name: "New Super Mario Bros",
    file: "New Super Mario Bros.nds",
    color: "#e74c3c",
    image: "new-mario.jpg",
    system: "nds",
    category: "action"
  },
  {
    id: "9",
    name: "Mario Kart DS",
    file: "Mario Kart.nds",
    color: "#e74c3c",
    image: "mario-kart.jpg",
    system: "nds",
    category: "racing"
  },
  {
    id: "nds1",
    name: "Pokemon Diamond",
    file: "Mario Kart.nds",
    color: "#3498db",
    image: "mario-kart.jpg",
    system: "nds",
    category: "rpg"
  },
  {
    id: "nds2",
    name: "Pokemon Platinum",
    file: "Mario Kart.nds",
    color: "#9b59b6",
    image: "mario-kart.jpg",
    system: "nds",
    category: "rpg"
  },
  {
    id: "nds3",
    name: "Mario Party",
    file: "New Super Mario Bros.nds",
    color: "#e74c3c",
    image: "new-mario.jpg",
    system: "nds",
    category: "action"
  },
  {
    id: "nds4",
    name: "Zelda Phantom",
    file: "Mario Kart.nds",
    color: "#27ae60",
    image: "mario-kart.jpg",
    system: "nds",
    category: "adventure"
  },
  {
    id: "nds5",
    name: "Sonic Colors",
    file: "New Super Mario Bros.nds",
    color: "#3498db",
    image: "new-mario.jpg",
    system: "nds",
    category: "action"
  },
  // NES Games
  {
    id: "10",
    name: "Home Alone 2",
    file: "Home Alone 2.nes",
    color: "#27ae60",
    image: "home-alone-2.jpg",
    system: "nes",
    category: "adventure"
  },
  {
    id: "nes1",
    name: "Super Mario Bros",
    file: "Home Alone 2.nes",
    color: "#e74c3c",
    image: "home-alone-2.jpg",
    system: "nes",
    category: "action"
  },
  {
    id: "nes2",
    name: "Contra",
    file: "Home Alone 2.nes",
    color: "#e74c3c",
    image: "home-alone-2.jpg",
    system: "nes",
    category: "action"
  },
  {
    id: "nes3",
    name: "Tecmo Bowl",
    file: "Home Alone 2.nes",
    color: "#f39c12",
    image: "home-alone-2.jpg",
    system: "nes",
    category: "sports"
  },
  {
    id: "nes4",
    name: "Castlevania",
    file: "Home Alone 2.nes",
    color: "#9b59b6",
    image: "home-alone-2.jpg",
    system: "nes",
    category: "action"
  },
  {
    id: "nes5",
    name: "Mega Man",
    file: "Home Alone 2.nes",
    color: "#3498db",
    image: "home-alone-2.jpg",
    system: "nes",
    category: "action"
  },
  {
    id: "nes6",
    name: "Excitebike",
    file: "Home Alone 2.nes",
    color: "#e74c3c",
    image: "home-alone-2.jpg",
    system: "nes",
    category: "racing"
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
  const [gameStarted, setGameStarted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Keyboard controls handler
  useEffect(() => {
    if (!gameStarted) return;

    const handleKeyDown = (e) => {
      // Prevent default for game keys to avoid browser shortcuts
      const gameKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'z', 'Z', 'x', 'X', 'Enter', 'Shift', ' '];
      if (gameKeys.includes(e.key)) {
        e.preventDefault();
      }

      // Dispatch to emulator if available
      if (window.EJS && window.EJS.emulator) {
        try {
          window.EJS.emulator.keyboard.keydown(e);
        } catch (err) {
          console.log('Key down error:', err);
        }
      }
    };

    const handleKeyUp = (e) => {
      if (window.EJS && window.EJS.emulator) {
        try {
          window.EJS.emulator.keyboard.keyup(e);
        } catch (err) {
          console.log('Key up error:', err);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [gameStarted]);

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

    // Enable keyboard controls
    window.EJS_controls = true;
    window.EJS_autoKeyPress = true;

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
      // Focus the game container for keyboard input
      const gameContainer = document.getElementById("game");
      if (gameContainer) {
        gameContainer.setAttribute('tabindex', '0');
        gameContainer.focus();
      }
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

  // Show game selection grid with JioHotstar-style category sections
  if (!selectedGame) {
    return (
      <div className="arcade-container">
        <div className="arcade-bg"></div>

        <div className="game-library">
          <h2 className="library-title"><i className="fas fa-gamepad"></i> RETRO ARCADE</h2>

          {/* JioHotstar-style category sections */}
          <div className="category-sections">
            {CATEGORY_SECTIONS.map((section) => {
              const sectionGames = GAMES.filter(game => game.system === section.id);
              if (sectionGames.length === 0) return null;
              
              return (
                <div key={section.id} className="category-section">
                  <div className="section-header">
                    <h3 className="section-title" style={{ borderLeftColor: section.color }}>
                      {section.name}
                    </h3>
                  </div>
                  <div className="section-games horizontal-scroll">
                    {sectionGames.map((game) => (
                      <div key={game.id} className="game-card-wrapper">
                        <GameCard
                          game={game}
                          onPlay={selectGame}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
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
        <i className="fas fa-arrow-left"></i> Back to Games
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
                <i className="fas fa-play"></i> START GAME
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
        <h3 className="controls-title"><i className="fas fa-gamepad"></i> CONTROLS</h3>
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
