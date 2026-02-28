import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import GameCard from "../Emulator/GameCard";
import "../css/GameCard.css";
import "../css/Emulator.css";

// Game library
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
    category: "spiderman"
  },
  {
    id: "6",
    name: "Spider-Man-2",
    file: "Spiderman2.gba",
    color: "#e74c3c",
    image: "spiderman2.jpeg",
    system: "gba",
    category: "spiderman"
  },
  {
    id: "7",
    name: "Pokemon FireRed",
    file: "Pokemon.gba",
    color: "#e74c3c",
    image: "spiderman2.jpeg",
    system: "gba",
    category: "pokemon"
  },
  {
    id: "8",
    name: "Mario Kart",
    file: "Mario Kart.sfc",
    color: "#e74c3c",
    image: "mario.jpg",
    system: "snes",
    category: "racing"
  },
  {
    id: "9",
    name: "Pokemon Emerald",
    file: "Pokemon Emerald.gba",
    color: "#2ecc71",
    image: "spiderman2.jpeg",
    system: "gba",
    category: "pokemon"
  },
  {
    id: "10",
    name: "Spider-Man PS1",
    file: "Spider-Man PS1.bin",
    color: "#e74c3c",
    image: "spiderman1.jpeg",
    system: "ps1",
    category: "spiderman"
  }
];

// Category info
const CATEGORIES = {
  spiderman: { name: "Spider-Man Games", games: ["spiderman"] },
  pokemon: { name: "Pokemon Games", games: ["pokemon"] },
  ps1: { name: "PS1 Games", games: ["ps1"] },
  snes: { name: "SNES Games", games: ["snes"] },
  gba: { name: "GBA Games", games: ["gba"] }
};

function CategoryPage() {
  const { categoryId } = useParams();
  const [games, setGames] = useState([]);
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    const category = CATEGORIES[categoryId];
    if (category) {
      setCategoryName(category.name);
      const filtered = ALL_GAMES.filter(game => 
        game.system === categoryId || game.category === categoryId
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
