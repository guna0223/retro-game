import { useState } from "react";
import "../css/GameCard.css";

function GameCard({ game, onPlay }) {
  const [imageError, setImageError] = useState(false);
  
  // Build image path - use game-image folder
  const imagePath = game.image ? `/game-image/${game.image}` : null;

  return (
    <button 
      className="game-card"
      onClick={() => onPlay(game)}
      style={{ "--accent": game.color }}
    >
      <div className="card-image">
        {imagePath && !imageError ? (
          <img 
            src={imagePath} 
            alt={game.name}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="no-image"></div>
        )}
        <div className="card-overlay">
          <span className="play-text">PLAY</span>
        </div>
      </div>
      <div className="card-info">
        <span className="card-name">{game.name}</span>
      </div>
    </button>
  );
}

export default GameCard;
