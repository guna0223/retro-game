# Retro Game Vault 🎮

A modern React-based web application for playing classic retro games in the browser. Play SNES, GBA, NDS, and NES games directly from your web browser using EmulatorJS.

## Table of Contents

- [Features](#features)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Game Controls](#game-controls)
- [Adding Games](#adding-games)
- [Technologies Used](#technologies-used)
- [Credits](#credits)
- [License](#license)

## Features

### 🎮 Gaming
- **Multi-Console Support** - Play SNES, GBA, NDS, and NES games
- **EmulatorJS Integration** - High-quality browser-based emulation
- **130+ Games** - Large collection of classic retro games
- **Category Organization** - Games organized by genre (Action, Racing, Sports, RPG, Fighting, Adventure, Horror, Puzzle, Strategy)

### 📱 Mobile Experience
- **Touch Controls** - On-screen D-Pad and action buttons for mobile gaming
- **Auto Landscape** - Automatically requests landscape orientation on mobile
- **Responsive Design** - Works seamlessly on phones, tablets, and desktops

### 🎨 UI/UX
- **Retro Arcade Theme** - Neon glowing borders and pixel-style fonts
- **JioHotstar-Style Layout** - Horizontal scrolling category sections
- **Game Cards** - Beautiful cards with game covers and titles
- **Search Functionality** - Find games quickly
- **Category Filtering** - Browse games by genre

## Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   cd retro-games
   ```

2. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Add ROM files**
   
   Place your ROM files in `frontend/public/games/`:
   - SNES games: `.smc` or `.sfc` files
   - GBA games: `.gba` files
   - NDS games: `.nds` files
   - NES games: `.nes` files
   
   Example: `frontend/public/games/Super Mario World.smc`

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to `http://localhost:5173`

## Project Structure

```
retro-games/
├── frontend/
│   ├── public/
│   │   ├── games/           # ROM files go here
│   │   │   ├── Super Mario World.smc
│   │   │   ├── Pokemon.gba
│   │   │   └── ...
│   │   └── game-image/     # Game cover images
│   ├── src/
│   │   ├── components/
│   │   │   ├── Data/
│   │   │   │   └── Data.jsx       # Centralized game data
│   │   │   ├── Emulator/
│   │   │   │   └── Emulator.jsx   # Main emulator & game selection
│   │   │   ├── GameCard/
│   │   │   │   └── GameCard.jsx   # Game card component
│   │   │   ├── Navbar/
│   │   │   │   └── Navbar.jsx     # Navigation header
│   │   │   ├── Footer/
│   │   │   │   └── Footer.jsx     # Footer component
│   │   │   └── Pages/
│   │   │       ├── CategoryPage.jsx    # Category filtering
│   │   │       ├── SearchResults.jsx   # Search results
│   │   │       └── About.jsx           # About page
│   │   │   └── css/
│   │   │       ├── Emulator.css    # Emulator styles
│   │   │       ├── GameCard.css    # Card styles
│   │   │       └── Navbar.css      # Navbar styles
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
```

## Game Controls

### Desktop Keyboard Controls

| Key | Action |
|-----|--------|
| ↑ ↓ ← → | Move |
| Z | A Button |
| X | B Button |
| Enter | Start |
| Shift | Select |

### Mobile Touch Controls

When playing on mobile devices, touch controls appear automatically:
- **D-Pad**: Arrow navigation (↑ ↓ ← →)
- **A Button**: Action button
- **B Button**: Secondary action
- **START**: Start game
- **SELECT**: Select/pause

## Adding Games

### Method 1: Edit Data.jsx

The recommended way to add games is through the centralized Data.jsx file:

1. Open `frontend/src/components/Data/Data.jsx`
2. Add your game to the `GAMES` array:

```javascript
{
  id: "unique-id",
  name: "Game Name",
  file: "filename.smc",
  color: "#e74c3c",
  image: "cover-image.jpg", // or null
  system: "snes", // snes, gba, nds, nes
  category: "action" // action, racing, sports, rpg, fighting, adventure, horror, puzzle, strategy
}
```

3. Add the game ROM file to `frontend/public/games/`
4. Optionally add a cover image to `frontend/public/game-image/`

### Method 2: Supported Game Formats

| Console | Extensions | Emulator Core |
|---------|------------|---------------|
| SNES | .smc, .sfc | snes |
| GBA | .gba | gba |
| NDS | .nds | nds |
| NES | .nes | nes |

## Getting ROM Files

### Recommended Source: Internet Archive

The Internet Archive offers a large collection of legally available ROM sets:

**Nintendo ROM Sets:**
- https://archive.org/details/ni-romsets
- https://archive.org/details/nds-roms
- https://archive.org/details/gameboy-advance-roms

### Important Legal Notice

This project is for educational purposes. ROM files are not included due to copyright. Please ensure you own the rights to any ROMs you use and comply with your local laws regarding ROM backups.

## Technologies Used

### Frontend
- **React 19** - UI framework
- **Vite** - Build tool
- **React Router** - Navigation

### Emulation
- **EmulatorJS** - Browser-based emulation engine
- **EJS (EmulatorJS)** - Multiple console emulation

### Styling
- **Custom CSS** - Retro neon arcade theme
- **Press Start 2P** - Pixel-style font
- **VT323** - Retro terminal font
- **Font Awesome** - Icons

## Credits

### Core Technologies
- [EmulatorJS](https://emulatorjs.org/) - Browser-based emulation engine
- [Internet Archive](https://archive.org/) - ROM file repository
  - NI ROM Sets Collection: https://archive.org/details/ni-romsets

### Fonts
- [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P) - Pixel font
- [VT323](https://fonts.google.com/specimen/VT323) - Retro terminal font

### Icons
- [Font Awesome](https://fontawesome.com/) - Icon library

## License

This project is for educational and personal use only. 

ROM files are not included with this project. Please ensure:
1. You own the original game cartridges/CDs
2. You have the legal right to download and use ROM files in your jurisdiction
3. You comply with all applicable copyright laws



**Enjoy your retro gaming experience!** 🎮
