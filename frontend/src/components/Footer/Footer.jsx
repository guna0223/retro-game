import { Link } from "react-router-dom";
import "../css/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">Retro SNES Arcade</h3>
          <p className="footer-text">
            Your ultimate destination for classic retro gaming.
          </p>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-subtitle">Quick Links</h4>
          <Link to="/" className="footer-link">Home</Link>
          <Link to="/about" className="footer-link">About</Link>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-subtitle">Categories</h4>
          <Link to="/category/spiderman" className="footer-link">Spider-Man</Link>
          <Link to="/category/pokemon" className="footer-link">Pokemon</Link>
          <Link to="/category/snes" className="footer-link">SNES</Link>
          <Link to="/category/gba" className="footer-link">GBA</Link>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-subtitle">Supported Systems</h4>
          <span className="footer-text">SNES</span>
          <span className="footer-text">GBA</span>
          <span className="footer-text">PS1</span>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 Retro SNES Arcade. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
