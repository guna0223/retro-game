# Retro SNES Arcade 🎮

A modern React-based web application for playing classic Super Nintendo (SNES) and NES games in the browser using [EmulatorJS](https://emulatorjs.org/).

## Features

- **Game Selection Grid** - Browse and select from available ROMs
- **Emulator Integration** - Uses EmulatorJS for accurate emulation
- **Responsive Design** - Works on desktop and mobile devices
- **Mobile Controls** - Touch controls for playing on phones
- **Neon Arcade UI** - Beautiful retro-styled interface with glowing effects
- **Loading States** - Progress indicators and error handling
- **Optional Backend API** - Node.js server for game metadata

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

3. **Add ROM files** (Optional - one game included)
   
   Place your ROM files in `frontend/public/games/`:
   - SNES games: `.smc` or `.sfc` files
   - NES games: `.nes` files
   
   Example: `frontend/public/games/Super Mario World.smc`

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to `http://localhost:5173`

## Optional: Backend API

For enhanced features (game metadata, favorites), start the backend server:

1. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

2. **Start the backend server**
   ```bash
   npm start
   ```

3. **The API runs on** `http://localhost:3001`

### API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/games` | List all available games |
| GET | `/api/games/:filename` | Get game details |
| POST | `/api/favorites/:filename` | Add to favorites |
| DELETE | `/api/favorites/:filename` | Remove from favorites |
| GET | `/api/favorites` | Get all favorites |
| GET | `/api/health` | Health check |

## Project Structure

```
retro-games/
├── frontend/
│   ├── public/
│   │   └── games/           # ROM files go here
│   │       └── Super Mario World.smc
│   ├── src/
│   │   ├── components/
│   │   │   ├── Emulator/
│   │   │   │   └── Emulator.jsx    # Main emulator component
│   │   │   └── css/
│   │   │       ├── Emulator.css    # Emulator styles
│   │   │       └── App.css         # App styles
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
└── backend/
    ├── server.js            # Express API server
    ├── package.json
    └── node_modules/
```

## Game Controls

### Keyboard

| Key | Action |
|-----|--------|
| ↑ ↓ ← → | Move |
| Z | A Button |
| X | B Button |
| Enter | Start |
| Shift | Select |
| Esc | Menu |

### Mobile Touch Controls

The mobile controls appear automatically on smaller screens:
- **D-Pad**: Arrow navigation
- **A/B Buttons**: Game actions
- **Start/Select**: System buttons

## Troubleshooting

### ROM Not Loading

1. **Check file format**: Ensure ROM is `.smc`, `.sfc`, or `.nes`
2. **Check file path**: ROM should be in `public/games/`
3. **Check browser console**: Look for 404 or CORS errors
4. **Verify emulator loads**: Check Network tab for loader.js

### Black Screen

1. **Verify internet connection**: EmulatorJS loads from CDN
2. **Check console errors**: Look for failed script loads
3. **Try different browser**: Some browsers block certain features
4. **Check ROM integrity**: Corrupted ROMs may cause black screens

### Adding More Games

Edit `frontend/src/components/Emulator/Emulator.jsx` and add to the `DEFAULT_GAMES` array:

```javascript
{
  id: "game-id",
  name: "Game Name",
  file: "filename.smc",
  core: "snes",
  color: "#color",
  description: "Description"
}
```

## Technologies Used

- **Frontend**: React 19 + Vite
- **Emulation**: [EmulatorJS](https://emulatorjs.org/)
- **Styling**: Custom CSS with neon effects
- **Backend**: Node.js + Express (optional)

## Credits

- [EmulatorJS](https://emulatorjs.org/) - Browser-based emulation
- [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P) - Pixel font
- [VT323](https://fonts.google.com/specimen/VT323) - Retro terminal font

## License

This project is for educational purposes. ROM files are not included due to copyright. Please ensure you own the rights to any ROMs you use.
