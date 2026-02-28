import { Link } from "react-router-dom";
import "../css/About.css";

function About() {
  return (
    <div className="arcade-container">
      <div className="arcade-bg"></div>

      <div className="about-page">
        <h2 className="about-title">About Retro Game Vault</h2>

        <section className="about-section">
          <h3 className="section-title">Welcome to Retro Game Vault</h3>
          <p className="about-text">
            Retro Game Vault is a browser-based retro gaming platform that allows users 
            to explore and play classic console games directly in the browser. Play SNES, 
            GBA, NDS, and NES games with our modern React-based interface featuring 
            retro arcade aesthetics.
          </p>
        </section>

        <section className="about-section">
          <h3 className="section-title">Features</h3>
          <ul className="tech-list">
            <li>🎮 130+ Classic Games</li>
            <li>📱 Mobile Touch Controls</li>
            <li>🕹️ Multi-Console Support (SNES, GBA, NDS, NES)</li>
            <li>🔍 Search & Category Filtering</li>
            <li>🎨 Retro Neon Arcade UI</li>
            <li>📺 Auto Landscape Mode on Mobile</li>
          </ul>
        </section>

        <section className="about-section">
          <h3 className="section-title">Technology Stack</h3>
          <ul className="tech-list">
            <li>⚛️ React 19</li>
            <li>⚡ Vite</li>
            <li>🎯 EmulatorJS</li>
            <li>🎨 CSS3 with Neon Effects</li>
            <li>🧭 React Router</li>
          </ul>
        </section>

        <section className="about-section">
          <h3 className="section-title">Supported Consoles</h3>
          <ul className="tech-list">
            <li>🕹️ <strong>SNES</strong> - Super Nintendo Entertainment System</li>
            <li>🎮 <strong>GBA</strong> - Game Boy Advance</li>
            <li>📱 <strong>NDS</strong> - Nintendo DS</li>
            <li>🕹️ <strong>NES</strong> - Nintendo Entertainment System</li>
          </ul>
        </section>

        <section className="about-section">
          <h3 className="section-title">Credits</h3>
          <div className="credit-item">
            <strong>🖥️ Emulator Engine:</strong>
            <p>
              <a href="https://emulatorjs.org/" target="_blank" rel="noopener noreferrer">
                EmulatorJS
              </a> - Browser-based emulation engine that powers all our games.
            </p>
          </div>
          <div className="credit-item">
            <strong>📦 ROM Sources:</strong>
            <p>
              <a href="https://archive.org/" target="_blank" rel="noopener noreferrer">
                Internet Archive
              </a> - 
              <a href="https://archive.org/details/ni-romsets" target="_blank" rel="noopener noreferrer">
                NI ROM Sets Collection
              </a>
            </p>
            <p className="credit-note">
              ROM files can be sourced from the Internet Archive's ROM collections. 
              Please ensure you only use ROMs you legally own.
            </p>
          </div>
          <div className="credit-item">
            <strong>🎨 Fonts:</strong>
            <p>Press Start 2P - Pixel font from Google Fonts</p>
            <p>VT323 - Retro terminal font from Google Fonts</p>
          </div>
          <div className="credit-item">
            <strong>🖼️ Game Artwork:</strong>
            <p>Game images belong to their respective copyright owners.</p>
          </div>
        </section>

        <section className="about-section disclaimer">
          <h3 className="section-title">⚠️ Disclaimer</h3>
          <p className="about-text">
            This website is a personal project created for educational and demonstration purposes. 
            All game trademarks, ROMs, and artwork belong to their respective owners. 
            Users should only play ROMs they legally own. This project does not distribute 
            copyrighted ROM files.
          </p>
        </section>

        <section className="about-section">
          <h3 className="section-title">How to Play</h3>
          <ol className="tech-list">
            <li>Browse games on the home page</li>
            <li>Click on a game card to select it</li>
            <li>Click "START GAME" to launch</li>
            <li>Use keyboard (desktop) or touch controls (mobile)</li>
            <li>Enjoy classic gaming!</li>
          </ol>
        </section>

        <Link to="/" className="back-link">
          ← Back to Games
        </Link>
      </div>
    </div>
  );
}

export default About;
