import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import GameCard from "../GameCard/GameCard";
import "../css/GameCard.css";
import "../css/Emulator.css";

// Game library with more games
const ALL_GAMES = [
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
    id: "8",
    name: "Mario Kart DS",
    file: "Mario Kart.nds",
    color: "#e74c3c",
    image: "mario-kart.jpg",
    system: "nds",
    category: "racing"
  },
  {
    id: "9",
    name: "New Super Mario Bros",
    file: "New Super Mario Bros.nds",
    color: "#e74c3c",
    image: "new-mario.jpg",
    system: "nds",
    category: "action"
  },
  {
    id: "10",
    name: "Home Alone 2",
    file: "Home Alone 2.nes",
    color: "#27ae60",
    image: "home-alone-2.jpg",
    system: "nes",
    category: "adventure"
  }
];

function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query) {
      const searchTerm = query.toLowerCase();
      const filtered = ALL_GAMES.filter(game =>
        game.name.toLowerCase().includes(searchTerm)
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [query]);

  const handlePlay = (game) => {
    // Navigate to emulator with selected game
    window.location.href = `/?game=${game.id}`;
  };

  return (
    <div className="arcade-container">
      <div className="arcade-bg"></div>

      <div className="game-library">
        <h2 className="library-title">
          Search Results for "{query}"
        </h2>

        {results.length > 0 ? (
          <div className="game-grid">
            {results.map((game) => (
              <GameCard
                key={game.id}
                game={game}
                onPlay={handlePlay}
              />
            ))}
          </div>
        ) : (
          <div className="no-results">
            <p>No games found matching "{query}"</p>
            <Link to="/" className="back-link">
              ← Back to Home
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchResults;
