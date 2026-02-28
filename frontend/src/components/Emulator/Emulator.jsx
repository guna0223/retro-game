import { useState, useCallback, useEffect } from "react";
import GameCard from "../GameCard/GameCard";

import "../css/GameCard.css";
import "../css/Emulator.css";

// Categories
const CATEGORIES = [
  { id: "all", name: "All Games" },
  { id: "action", name: "Action" },
  { id: "racing", name: "Racing" },
  { id: "sports", name: "Sports" },
  { id: "rpg", name: "RPG" },
  { id: "fighting", name: "Fighting" },
  { id: "adventure", name: "Adventure" },
  { id: "horror", name: "Horror" }
];

// Category sections for JioHotstar-style display
const CATEGORY_SECTIONS = [
  { id: "action", name: "Action Games", color: "#e74c3c" },
  { id: "racing", name: "Racing Games", color: "#3498db" },
  { id: "sports", name: "Sports Games", color: "#27ae60" },
  { id: "rpg", name: "RPG Games", color: "#9b59b6" },
  { id: "fighting", name: "Fighting Games", color: "#f39c12" },
  { id: "adventure", name: "Adventure Games", color: "#1abc9c" },
  { id: "horror", name: "Horror Games", color: "#e74c3c" }
];

// Game library with all games
const GAMES = [
  // Action Games
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
    name: "Spider-Man 2",
    file: "Spiderman2.gba",
    color: "#e74c3c",
    image: "spiderman2.jpeg",
    system: "gba",
    category: "action"
  },
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
    id: "3ninjas",
    name: "3 Ninjas Kick",
    file: "3 Ninjas Kick.smc",
    color: "#e74c3c",
    image: "mario.jpg",
    system: "snes",
    category: "action"
  },
  {
    id: "aero2",
    name: "Aero the Acro-Bat 2",
    file: "Aero the Acro-Bat 2.smc",
    color: "#3498db",
    image: "mario.jpg",
    system: "snes",
    category: "action"
  },
  {
    id: "chuckrock",
    name: "Chuck Rock",
    file: "Chuck Rock (U) [!].smc",
    color: "#f39c12",
    image: "monkey.jpg",
    system: "snes",
    category: "action"
  },
  {
    id: "crashdummies",
    name: "Incredible Crash Dummies",
    file: "Incredible Crash Dummies, The (U) [!].smc",
    color: "#e74c3c",
    image: "mario.jpg",
    system: "snes",
    category: "action"
  },
  {
    id: "izzyquest",
    name: "Izzy's Quest",
    file: "Izzy's Quest for the Olympic Rings (U) [!].smc",
    color: "#9b59b6",
    image: "mario.jpg",
    system: "snes",
    category: "action"
  },
  {
    id: "lobo",
    name: "LOBO",
    file: "LOBO.sfc",
    color: "#e74c3c",
    image: "mario.jpg",
    system: "snes",
    category: "action"
  },
  {
    id: "spankys",
    name: "Spanky's Quest",
    file: "Spanky's Quest (U) [!].smc",
    color: "#3498db",
    image: "mario.jpg",
    system: "snes",
    category: "action"
  },
  {
    id: "spidermancarnage",
    name: "Spider-Man Maximum Carnage",
    file: "Spider-Man & Venom - Maximum Carnage (U) [!].smc",
    color: "#e74c3c",
    image: "spiderman1.jpeg",
    system: "snes",
    category: "action"
  },
  {
    id: "spirou",
    name: "Spirou",
    file: "Spirou (E) (M4) [!].smc",
    color: "#27ae60",
    image: "mario.jpg",
    system: "snes",
    category: "action"
  },
  {
    id: "blockkuz",
    name: "Block Kuzush",
    file: "Block Kuzush.smc",
    color: "#3498db",
    image: "mario.jpg",
    system: "snes",
    category: "action"
  },
  
  // Racing Games
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
    id: "9",
    name: "Mario Kart DS",
    file: "Mario Kart.nds",
    color: "#e74c3c",
    image: "mario-kart.jpg",
    system: "nds",
    category: "racing"
  },
  {
    id: "dirttrax",
    name: "Dirt Trax FX",
    file: "Dirt Trax FX (U) [!].smc",
    color: "#f39c12",
    image: "topgear.jpeg",
    system: "snes",
    category: "racing"
  },
  {
    id: "espnspeed",
    name: "ESPN Speedworld",
    file: "ESPN Speedworld (U) [!].smc",
    color: "#3498db",
    image: "topgear.jpeg",
    system: "snes",
    category: "racing"
  },
  {
    id: "excitebike",
    name: "Excitebike",
    file: "Excitebike - Bunbun Mario Battle - Stadium 4 (Japan) (BS SoundLink).sfc",
    color: "#27ae60",
    image: "topgear.jpeg",
    system: "snes",
    category: "racing"
  },
  
  // Sports Games
  {
    id: "bassclassic",
    name: "BASS Masters Classic",
    file: "BASS Masters Classic.sfc",
    color: "#27ae60",
    image: "topgear.jpeg",
    system: "snes",
    category: "sports"
  },
  {
    id: "soccershootout",
    name: "Capcom's Soccer Shootout",
    file: "Capcom's Soccer Shootout.smc",
    color: "#e74c3c",
    image: "topgear.jpeg",
    system: "snes",
    category: "sports"
  },
  {
    id: "dreambasket",
    name: "Dream Basketball",
    file: "Dream Basketball - Dunk & Hoop (J) [!].smc",
    color: "#f39c12",
    image: "topgear.jpeg",
    system: "snes",
    category: "sports"
  },
  {
    id: "emmitt",
    name: "Emmitt Smith Football",
    file: "Emmitt Smith Football (U) [!].smc",
    color: "#e74c3c",
    image: "topgear.jpeg",
    system: "snes",
    category: "sports"
  },
  {
    id: "jleague94",
    name: "J.League Excite Stage '94",
    file: "J.League Excite Stage '94 (J) (V1.1) [!].smc",
    color: "#9b59b6",
    image: "topgear.jpeg",
    system: "snes",
    category: "sports"
  },
  {
    id: "jleague2",
    name: "J.League Soccer Prime Goal 2",
    file: "J.League Soccer Prime Goal 2 (J) [!].smc",
    color: "#3498db",
    image: "topgear.jpeg",
    system: "snes",
    category: "sports"
  },
  {
    id: "nbalive",
    name: "NBA Live '96",
    file: "NBA Live '96 (U) [!].smc",
    color: "#e74c3c",
    image: "topgear.jpeg",
    system: "snes",
    category: "sports"
  },
  {
    id: "super dunk",
    name: "Super Dunk Star",
    file: "Super Dunk Star (J).smc",
    color: "#f39c12",
    image: "topgear.jpeg",
    system: "snes",
    category: "sports"
  },
  {
    id: "soccer2",
    name: "Super Formation Soccer II",
    file: "Super Formation Soccer II (J) [!].smc",
    color: "#27ae60",
    image: "topgear.jpeg",
    system: "snes",
    category: "sports"
  },
  {
    id: "golf",
    name: "Golf Daisuki!",
    file: "Golf Daisuki! O.B. Club (Japan) (BS).sfc",
    color: "#27ae60",
    image: "topgear.jpeg",
    system: "snes",
    category: "sports"
  },
  
  // RPG Games
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
    id: "earthbound",
    name: "EarthBound",
    file: "EarthBound (Regal).sfc",
    color: "#27ae60",
    image: "spiderman2.jpeg",
    system: "snes",
    category: "rpg"
  },
  {
    id: "bastard",
    name: "Bastard!!",
    file: "Bastard!! - Ankoku no Hakai-shin.smc",
    color: "#9b59b6",
    image: "spiderman2.jpeg",
    system: "snes",
    category: "rpg"
  },
  {
    id: "juteisenki",
    name: "Jutei Senki",
    file: "Jutei Senki (J) [T+Eng1.00_AGTP].smc",
    color: "#f39c12",
    image: "spiderman2.jpeg",
    system: "snes",
    category: "rpg"
  },
  {
    id: "kouryuumimi",
    name: "Kouryuu no Mimi",
    file: "Kouryuu no Mimi (J) [T+Eng 100% V1 RPGONE].smc",
    color: "#3498db",
    image: "spiderman2.jpeg",
    system: "snes",
    category: "rpg"
  },
  {
    id: "super genjin",
    name: "Super Genjin",
    file: "Super Genjin.smc",
    color: "#e74c3c",
    image: "spiderman2.jpeg",
    system: "snes",
    category: "rpg"
  },
  
  // Fighting Games
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
    id: "ggundam",
    name: "Kidou Butouden G-Gundam",
    file: "Kidou Butouden G-Gundam (J) [T+Eng1.00_AGTP].smc",
    color: "#f39c12",
    image: "Street Fighter Two.jpg",
    system: "snes",
    category: "fighting"
  },
  
  // Adventure Games
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
    id: "maruquest",
    name: "Maru's Quest",
    file: "Maru's Quest (Prototype).SFC",
    color: "#9b59b6",
    image: "home-alone-2.jpg",
    system: "snes",
    category: "adventure"
  },
  {
    id: "marvelous",
    name: "Marvelous",
    file: "Marvelous - Mouhitotsu no Takarajima (Japan).sfc",
    color: "#3498db",
    image: "home-alone-2.jpg",
    system: "snes",
    category: "adventure"
  },
  {
    id: "matsumura",
    name: "Matsumura Kunihiro Den",
    file: "Matsumura Kunihiro Den - Saikyou no Rekishi o Nurikaero! (Japan).sfc",
    color: "#e74c3c",
    image: "home-alone-2.jpg",
    system: "snes",
    category: "adventure"
  },
  {
    id: "mickmac",
    name: "Mick and Mack",
    file: "Mick and Mack - Global Gladiators (Sabotage hack).sfc",
    color: "#f39c12",
    image: "home-alone-2.jpg",
    system: "snes",
    category: "adventure"
  },
  {
    id: "sylvester",
    name: "Sylvester and Tweety",
    file: "Sylvester and Tweety.sfc",
    color: "#27ae60",
    image: "home-alone-2.jpg",
    system: "snes",
    category: "adventure"
  },
  {
    id: "carrier",
    name: "Carrier Aces",
    file: "Carrier Aces (U) [!].smc",
    color: "#3498db",
    image: "home-alone-2.jpg",
    system: "snes",
    category: "adventure"
  },
  {
    id: "sos",
    name: "SOS",
    file: "SOS (U) [!].smc",
    color: "#9b59b6",
    image: "home-alone-2.jpg",
    system: "snes",
    category: "adventure"
  },
  
  // Horror Games
  {
    id: "bramdrac",
    name: "Bram Stoker's Dracula",
    file: "Bram Stoker's Dracula.smc",
    color: "#8b0000",
    image: "spiderman1.jpeg",
    system: "snes",
    category: "horror"
  },
  
  // Puzzle Games
  {
    id: "familyfeud",
    name: "Family Feud",
    file: "Family Feud (U) (V1.0) [!].smc",
    color: "#3498db",
    image: "mario.jpg",
    system: "snes",
    category: "action"
  },
  {
    id: "mrdo",
    name: "Mr. Do!",
    file: "Mr. Do! (U) [!].smc",
    color: "#f39c12",
    image: "mario.jpg",
    system: "snes",
    category: "action"
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
