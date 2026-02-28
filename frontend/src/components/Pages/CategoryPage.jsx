import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import GameCard from "../GameCard/GameCard";
import { GAMES, CATEGORIES_INFO } from "../Data/Data";
import "../css/GameCard.css";
import "../css/Emulator.css";

function CategoryPage() {
  const { categoryId } = useParams();
  const [games, setGames] = useState([]);
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    const category = CATEGORIES_INFO[categoryId];
    if (category) {
      setCategoryName(category.name);
      const filtered = GAMES.filter(game => 
        game.category === categoryId
      );
      setGames(filtered);
    }
  }, [categoryId]);

  const handlePlay = (game) => {
    window.location.href = `/?game=${game.id}`;
  };

  return (
    <div className="arcade-container">
      <div className="arcade-bg"></div>

      <div className="game-library">
        <h2 className="library-title">{categoryName}</h2>

        {games.length > 0 ? (
          <div className="game-grid">
            {games.map((game) => (
              <GameCard
                key={game.id}
                game={game}
                onPlay={handlePlay}
              />
            ))}
          </div>
        ) : (
          <div className="no-results">
            <p>No games found in this category</p>
            <Link to="/" className="back-link">
              ← Back to Home
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default CategoryPage;
