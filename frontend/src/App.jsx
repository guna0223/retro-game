import Emulator from "./components/Emulator/Emulator";
import "./components/css/App.css";

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Retro SNES Arcade</h1>
      </header>
      <main className="app-main">
        <Emulator />
      </main>
    </div>
  );
}

export default App;
