import { useState, useCallback, useEffect } from "react";
import GameCard from "../GameCard/GameCard";
import { GAMES, CATEGORY_SECTIONS } from "../Data/Data";

import "../css/GameCard.css";
import "../css/Emulator.css";

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
              const sectionGames = GAMES.filter(game => game.category === section.id);
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
