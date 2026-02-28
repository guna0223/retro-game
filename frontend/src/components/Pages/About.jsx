import { Link } from "react-router-dom";
import "../css/About.css";

function About() {
  return (
    <div className="arcade-container">
      <div className="arcade-bg"></div>

      <div className="about-page">
        <h2 className="about-title">About Retro Game Vault</h2>

        <section className="about-section">
          <h3 className="section-title">Project Introduction</h3>
          <p className="about-text">
            Retro Game Vault is a browser-based retro gaming platform that allows users 
            to explore and play classic console games directly online. The project is 
            designed as a retro-style arcade library showcasing nostalgic games through 
            modern web technologies.
          </p>
        </section>

        <section className="about-section">
          <h3 className="section-title">Technology Stack</h3>
          <ul className="tech-list">
            <li>React.js</li>
            <li>JavaScript</li>
            <li>EmulatorJS</li>
            <li>CSS3</li>
          </ul>
        </section>

        <section className="about-section">
          <h3 className="section-title">Credits</h3>
          <div className="credit-item">
            <strong>Emulator Engine:</strong>
            <p>EmulatorJS - Used to run classic console games directly in the browser.</p>
          </div>
          <div className="credit-item">
            <strong>Game ROMs:</strong>
            <p>ROM files are used for educational and preservation purposes. Users should only play games they legally own.</p>
          </div>
          <div className="credit-item">
            <strong>Game Artwork / Cover Images:</strong>
            <p>Game images and artwork belong to their respective copyright owners.</p>
          </div>
        </section>

        <section className="about-section disclaimer">
          <h3 className="section-title">Disclaimer</h3>
          <p className="about-text">
            This website is a personal project created for learning and demonstration purposes. 
            All game trademarks, ROMs, and artwork belong to their respective owners. 
            Users should only play ROMs they legally own.
          </p>
        </section>

        <Link to="/" className="back-link">
          ← Back to Games
        </Link>
      </div>
    </div>
  );
}

export default About;
