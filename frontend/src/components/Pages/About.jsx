import { Link } from "react-router-dom";
import "../css/GameCard.css";
import "../css/Emulator.css";

function About() {
  return (
    <div className="arcade-container">
      <div className="arcade-bg"></div>

      <div className="game-library">
        <h2 className="library-title">About Us</h2>

        <div className="about-content">
          <p className="about-text">
            Welcome to Retro SNES Arcade - your ultimate destination for classic gaming! 
            We bring you the best retro games from the golden era of gaming.
          </p>
          
          <p className="about-text">
            Play legendary titles like Super Mario World, Donkey Kong Country, 
            Street Fighter, Pokemon, and many more - all in your browser!
          </p>
          
          <p className="about-text">
            Our emulator supports SNES and GBA games with full controls compatibility.
            Simply select a game and start playing instantly.
          </p>
          
          <Link to="/" className="back-link">
            ← Back to Games
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
