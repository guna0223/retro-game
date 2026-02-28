import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import GameCard from "../GameCard/GameCard";
import "../css/GameCard.css";
import "../css/Emulator.css";

// Game library with all games
const ALL_GAMES = [
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
    id: "nbalive",
    name: "NBA Live '96",
    file: "NBA Live '96 (U) [!].smc",
    color: "#e74c3c",
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
    id: "marvelous",
    name: "Marvelous",
    file: "Marvelous - Mouhitotsu no Takarajima (Japan).sfc",
    color: "#3498db",
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
  
  // Horror Games
  {
    id: "bramdrac",
    name: "Bram Stoker's Dracula",
    file: "Bram Stoker's Dracula.smc",
    color: "#8b0000",
    image: "spiderman1.jpeg",
    system: "snes",
    category: "horror"
  }
];

// Category info
const CATEGORIES = {
  action: { name: "Action Games", games: ["action"] },
  racing: { name: "Racing Games", games: ["racing"] },
  sports: { name: "Sports Games", games: ["sports"] },
  fighting: { name: "Fighting Games", games: ["fighting"] },
  rpg: { name: "RPG Games", games: ["rpg"] },
  adventure: { name: "Adventure Games", games: ["adventure"] },
  horror: { name: "Horror Games", games: ["horror"] }
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
