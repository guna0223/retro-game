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

// Touch control mappings
const TOUCH_CONTROLS = [
  { key: "ArrowUp", label: "↑" },
  { key: "ArrowDown", label: "↓" },
  { key: "ArrowLeft", label: "←" },
  { key: "ArrowRight", label: "→" },
  { key: "z", label: "A" },
  { key: "x", label: "B" },
  { key: "Enter", label: "START" },
  { key: "Shift", label: "SELECT" }
];

function Emulator() {
  const [selectedGame, setSelectedGame] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showRotationMessage, setShowRotationMessage] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
      setIsMobile(mobile);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Send key event to emulator
  const sendKeyToEmulator = useCallback((key, isKeyDown = true) => {
    if (window.EJS && window.EJS.emulator) {
      try {
        const event = new KeyboardEvent(isKeyDown ? 'keydown' : 'keyup', { key });
        if (isKeyDown) {
          window.EJS.emulator.keyboard.keydown(event);
        } else {
          window.EJS.emulator.keyboard.keyup(event);
        }
      } catch (err) {
        console.log('Key error:', err);
      }
    }
  }, []);

  // Handle touch control press
  const handleTouchStart = useCallback((key) => {
    sendKeyToEmulator(key, true);
  }, [sendKeyToEmulator]);

  // Handle touch control release
  const handleTouchEnd = useCallback((key) => {
    sendKeyToEmulator(key, false);
  }, [sendKeyToEmulator]);

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

    // Request landscape orientation on mobile
    if (isMobile && screen.orientation && screen.orientation.lock) {
      screen.orientation.lock("landscape").catch(() => {
        // Show rotation message if lock fails
        setShowRotationMessage(true);
        setTimeout(() => setShowRotationMessage(false), 4000);
      });
    }

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
  }, [selectedGame, isMobile]);

  // Go back to game selection - stop game and sound
  const goBack = useCallback(() => {
    // Exit landscape orientation
    if (screen.orientation && screen.orientation.unlock) {
      screen.orientation.unlock().catch(() => {});
    }

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

      {/* Rotation message for mobile */}
      {showRotationMessage && (
        <div className="rotation-message">
          <i className="fas fa-mobile-alt"></i>
          <p>Please rotate your device to landscape mode for the best gaming experience</p>
        </div>
      )}

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

      {/* Mobile Touch Controls */}
      {gameStarted && isMobile && (
        <div className="mobile-controls">
          {/* D-Pad */}
          <div className="dpad-container">
            <button 
              className="control-btn dpad-btn up"
              onTouchStart={() => handleTouchStart("ArrowUp")}
              onTouchEnd={() => handleTouchEnd("ArrowUp")}
            >↑</button>
            <button 
              className="control-btn dpad-btn left"
              onTouchStart={() => handleTouchStart("ArrowLeft")}
              onTouchEnd={() => handleTouchEnd("ArrowLeft")}
            >←</button>
            <button 
              className="control-btn dpad-btn right"
              onTouchStart={() => handleTouchStart("ArrowRight")}
              onTouchEnd={() => handleTouchEnd("ArrowRight")}
            >→</button>
            <button 
              className="control-btn dpad-btn down"
              onTouchStart={() => handleTouchStart("ArrowDown")}
              onTouchEnd={() => handleTouchEnd("ArrowDown")}
            >↓</button>
          </div>
          
          {/* Action Buttons */}
          <div className="action-buttons">
            <button 
              className="control-btn action-btn b-btn"
              onTouchStart={() => handleTouchStart("x")}
              onTouchEnd={() => handleTouchEnd("x")}
            >B</button>
            <button 
              className="control-btn action-btn a-btn"
              onTouchStart={() => handleTouchStart("z")}
              onTouchEnd={() => handleTouchEnd("z")}
            >A</button>
            <button 
              className="control-btn action-btn select-btn"
              onTouchStart={() => handleTouchStart("Shift")}
              onTouchEnd={() => handleTouchEnd("Shift")}
            >SELECT</button>
            <button 
              className="control-btn action-btn start-btn-mobile"
              onTouchStart={() => handleTouchStart("Enter")}
              onTouchEnd={() => handleTouchEnd("Enter")}
            >START</button>
          </div>
        </div>
      )}

      {/* Desktop Keyboard Controls Guide - hide on mobile */}
      {!isMobile && (
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
      )}
    </div>
  );
}

export default Emulator;
