import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import GameCard from "../GameCard/GameCard";
import { GAMES } from "../Data/Data";
import "../css/GameCard.css";
import "../css/Emulator.css";

function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query) {
      const searchTerm = query.toLowerCase();
      const filtered = GAMES.filter(game =>
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
