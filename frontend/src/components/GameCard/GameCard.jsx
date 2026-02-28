import { useState } from "react";
import "../css/GameCard.css";

function GameCard({ game, onPlay }) {
  const [imageError, setImageError] = useState(false);
  
  // Build image path - use game-image folder
  const imagePath = game.image ? `/game-image/${game.image}` : null;
  
  // Check if we should show title instead of image
  const showTitleOnly = !imagePath || imageError;
  
  // Get system display name
  const getSystemName = (system) => {
    const systems = {
      snes: 'SNES',
      gba: 'GBA',
      nds: 'NDS',
      nes: 'NES',
      ps1: 'PS1'
    };
    return systems[system] || system.toUpperCase();
  };

  return (
    <button 
      className="game-card"
      onClick={() => onPlay(game)}
      style={{ "--accent": game.color }}
    >
      <div className="card-image">
        {showTitleOnly ? (
          <div className="no-image" style={{ background: game.color || '#1a1a2e' }}>
            <span className="no-image-title">{game.name}</span>
          </div>
        ) : (
          <img 
            src={imagePath} 
            alt={game.name}
            onError={() => setImageError(true)}
          />
        )}
        <div className="card-overlay">
          <span className="play-text"><i className="fas fa-play"></i> PLAY</span>
        </div>
        <div className="card-badge">
          {getSystemName(game.system)}
        </div>
        <div className="card-title-overlay">
          <span className="card-name">{game.name}</span>
          <span className="card-category">{game.category}</span>
        </div>
      </div>
    </button>
  );
}

export default GameCard;
