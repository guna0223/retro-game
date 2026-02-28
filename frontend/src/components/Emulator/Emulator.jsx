import { useEffect, useRef } from "react";
import "../css/Emulator.css";

function Emulator() {
  const containerRef = useRef(null);
  const isLoaded = useRef(false);

  useEffect(() => {
    // Prevent multiple loads
    if (isLoaded.current) return;
    isLoaded.current = true;

    // Set EmulatorJS globals BEFORE loading the script
    window.EJS_player = "#game";
    window.EJS_core = "snes";
    window.EJS_pathtodata = "https://cdn.emulatorjs.org/stable/data/";
    window.EJS_gameUrl = "/games/Super Mario World.smc";

    console.log("EmulatorJS Config:");
    console.log("  Player:", window.EJS_player);
    console.log("  Core:", window.EJS_core);
    console.log("  Path:", window.EJS_pathtodata);
    console.log("  ROM:", window.EJS_gameUrl);

    // Create and load the script
    const script = document.createElement("script");
    script.src = "https://cdn.emulatorjs.org/stable/data/loader.js";
    script.async = true;

    script.onload = () => {
      console.log("✅ EmulatorJS loader loaded successfully");
    };

    script.onerror = (err) => {
      console.error("❌ Failed to load EmulatorJS:", err);
    };

    document.body.appendChild(script);

    // Cleanup on unmount
    return () => {
      isLoaded.current = false;
    };
  }, []);

  return (
    <div className="emulator-container" ref={containerRef}>
      <div className="emulator-wrapper">
        <div id="game" className="emulator-game"></div>
      </div>
      
      <div className="controls-info">
        <p><strong>Controls:</strong></p>
        <p>Arrow Keys → Move</p>
        <p>Z → A button</p>
        <p>X → B button</p>
        <p>Enter → Start</p>
        <p>Shift → Select</p>
      </div>
    </div>
  );
}

export default Emulator;
