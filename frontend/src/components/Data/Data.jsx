// Centralized game data for the Retro Arcade

// Categories
export const CATEGORIES = [
  { id: "all", name: "All Games" },
  { id: "action", name: "Action" },
  { id: "racing", name: "Racing" },
  { id: "sports", name: "Sports" },
  { id: "rpg", name: "RPG" },
  { id: "fighting", name: "Fighting" },
  { id: "adventure", name: "Adventure" },
  { id: "horror", name: "Horror" }
];

// Category sections for JioHotstar-style display
export const CATEGORY_SECTIONS = [
  { id: "action", name: "Action Games", color: "#e74c3c" },
  { id: "racing", name: "Racing Games", color: "#3498db" },
  { id: "sports", name: "Sports Games", color: "#27ae60" },
  { id: "rpg", name: "RPG Games", color: "#9b59b6" },
  { id: "fighting", name: "Fighting Games", color: "#f39c12" },
  { id: "adventure", name: "Adventure Games", color: "#1abc9c" },
  { id: "horror", name: "Horror Games", color: "#e74c3c" }
];

// Category info for CategoryPage
export const CATEGORIES_INFO = {
  action: { name: "Action Games", games: ["action"] },
  racing: { name: "Racing Games", games: ["racing"] },
  sports: { name: "Sports Games", games: ["sports"] },
  fighting: { name: "Fighting Games", games: ["fighting"] },
  rpg: { name: "RPG Games", games: ["rpg"] },
  adventure: { name: "Adventure Games", games: ["adventure"] },
  horror: { name: "Horror Games", games: ["horror"] }
};

// Navbar categories
export const NAVBAR_CATEGORIES = [
  { id: "action", name: "Action", path: "/category/action" },
  { id: "racing", name: "Racing", path: "/category/racing" },
  { id: "sports", name: "Sports", path: "/category/sports" },
  { id: "rpg", name: "RPG", path: "/category/rpg" },
  { id: "fighting", name: "Fighting", path: "/category/fighting" },
  { id: "adventure", name: "Adventure", path: "/category/adventure" },
  { id: "horror", name: "Horror", path: "/category/horror" }
];

// Game library with all games
export const GAMES = [
  // Action Games
  {
    id: "1",
    name: "Super Mario World",
    file: "Super Mario World.smc",
    color: "#e74c3c",
    image: "mario.jpg",
    system: "snes",
    category: "action"
  },
  {
    id: "2",
    name: "Donkey Kong Country",
    file: "Donkey Kong Country (U) (V1.2) [!].smc",
    color: "#f39c12",
    image: "monkey.jpg",
    system: "snes",
    category: "action"
  },
  {
    id: "5",
    name: "Spider-Man",
    file: "Spider-Man.sfc",
    color: "#e74c3c",
    image: "spiderman1.jpeg",
    system: "snes",
    category: "action"
  },
  {
    id: "6",
    name: "Spider-Man 2",
    file: "Spiderman2.gba",
    color: "#e74c3c",
    image: "spiderman2.jpeg",
    system: "gba",
    category: "action"
  },
  {
    id: "8",
    name: "New Super Mario Bros",
    file: "New Super Mario Bros.nds",
    color: "#e74c3c",
    image: "new-mario.jpg",
    system: "nds",
    category: "action"
  },
  {
    id: "3ninjas",
    name: "3 Ninjas Kick",
    file: "3 Ninjas Kick.smc",
    color: "#e74c3c",
    image: null,
    system: "snes",
    category: "action"
  },
  {
    id: "aero2",
    name: "Aero the Acro-Bat 2",
    file: "Aero the Acro-Bat 2.smc",
    color: "#3498db",
    image: null,
    system: "snes",
    category: "action"
  },
  {
    id: "chuckrock",
    name: "Chuck Rock",
    file: "Chuck Rock (U) [!].smc",
    color: "#f39c12",
    image: null,
    system: "snes",
    category: "action"
  },
  {
    id: "crashdummies",
    name: "Incredible Crash Dummies",
    file: "Incredible Crash Dummies, The (U) [!].smc",
    color: "#e74c3c",
    image: null,
    system: "snes",
    category: "action"
  },
  {
    id: "izzyquest",
    name: "Izzy's Quest",
    file: "Izzy's Quest for the Olympic Rings (U) [!].smc",
    color: "#9b59b6",
    image: null,
    system: "snes",
    category: "action"
  },
  {
    id: "lobo",
    name: "LOBO",
    file: "LOBO.sfc",
    color: "#e74c3c",
    image: null,
    system: "snes",
    category: "action"
  },
  {
    id: "spankys",
    name: "Spanky's Quest",
    file: "Spanky's Quest (U) [!].smc",
    color: "#3498db",
    image: null,
    system: "snes",
    category: "action"
  },
  {
    id: "spidermancarnage",
    name: "Spider-Man Maximum Carnage",
    file: "Spider-Man & Venom - Maximum Carnage (U) [!].smc",
    color: "#e74c3c",
    image: "spiderman1.jpeg",
    system: "snes",
    category: "action"
  },
  {
    id: "spirou",
    name: "Spirou",
    file: "Spirou (E) (M4) [!].smc",
    color: "#27ae60",
    image: null,
    system: "snes",
    category: "action"
  },
  {
    id: "blockkuz",
    name: "Block Kuzush",
    file: "Block Kuzush.smc",
    color: "#3498db",
    image: null,
    system: "snes",
    category: "action"
  },
  
  // Racing Games
  {
    id: "3",
    name: "Top Gear",
    file: "Top Gear (USA).sfc",
    color: "#3498db",
    image: "topgear.jpeg",
    system: "snes",
    category: "racing"
  },
  {
    id: "9",
    name: "Mario Kart DS",
    file: "Mario Kart.nds",
    color: "#e74c3c",
    image: "mario-kart.jpg",
    system: "nds",
    category: "racing"
  },
  {
    id: "dirttrax",
    name: "Dirt Trax FX",
    file: "Dirt Trax FX (U) [!].smc",
    color: "#f39c12",
    image: null,
    system: "snes",
    category: "racing"
  },
  {
    id: "espnspeed",
    name: "ESPN Speedworld",
    file: "ESPN Speedworld (U) [!].smc",
    color: "#3498db",
    image: null,
    system: "snes",
    category: "racing"
  },
  {
    id: "excitebike",
    name: "Excitebike",
    file: "Excitebike - Bunbun Mario Battle - Stadium 4 (Japan) (BS SoundLink).sfc",
    color: "#27ae60",
    image: null,
    system: "snes",
    category: "racing"
  },
  
  // Sports Games
  {
    id: "bassclassic",
    name: "BASS Masters Classic",
    file: "BASS Masters Classic.sfc",
    color: "#27ae60",
    image: null,
    system: "snes",
    category: "sports"
  },
  {
    id: "soccershootout",
    name: "Capcom's Soccer Shootout",
    file: "Capcom's Soccer Shootout.smc",
    color: "#e74c3c",
    image: null,
    system: "snes",
    category: "sports"
  },
  {
    id: "dreambasket",
    name: "Dream Basketball",
    file: "Dream Basketball - Dunk & Hoop (J) [!].smc",
    color: "#f39c12",
    image: null,
    system: "snes",
    category: "sports"
  },
  {
    id: "emmitt",
    name: "Emmitt Smith Football",
    file: "Emmitt Smith Football (U) [!].smc",
    color: "#e74c3c",
    image: null,
    system: "snes",
    category: "sports"
  },
  {
    id: "jleague94",
    name: "J.League Excite Stage '94",
    file: "J.League Excite Stage '94 (J) (V1.1) [!].smc",
    color: "#9b59b6",
    image: null,
    system: "snes",
    category: "sports"
  },
  {
    id: "jleague2",
    name: "J.League Soccer Prime Goal 2",
    file: "J.League Soccer Prime Goal 2 (J) [!].smc",
    color: "#3498db",
    image: null,
    system: "snes",
    category: "sports"
  },
  {
    id: "nbalive",
    name: "NBA Live '96",
    file: "NBA Live '96 (U) [!].smc",
    color: "#e74c3c",
    image: null,
    system: "snes",
    category: "sports"
  },
  {
    id: "superdunk",
    name: "Super Dunk Star",
    file: "Super Dunk Star (J).smc",
    color: "#f39c12",
    image: null,
    system: "snes",
    category: "sports"
  },
  {
    id: "soccer2",
    name: "Super Formation Soccer II",
    file: "Super Formation Soccer II (J) [!].smc",
    color: "#27ae60",
    image: null,
    system: "snes",
    category: "sports"
  },
  {
    id: "golf",
    name: "Golf Daisuki!",
    file: "Golf Daisuki! O.B. Club (Japan) (BS).sfc",
    color: "#27ae60",
    image: null,
    system: "snes",
    category: "sports"
  },
  
  // RPG Games
  {
    id: "7",
    name: "Pokemon FireRed",
    file: "Pokemon.gba",
    color: "#e74c3c",
    image: "spiderman2.jpeg",
    system: "gba",
    category: "rpg"
  },
  {
    id: "earthbound",
    name: "EarthBound",
    file: "EarthBound (Regal).sfc",
    color: "#27ae60",
    image: null,
    system: "snes",
    category: "rpg"
  },
  {
    id: "bastard",
    name: "Bastard!!",
    file: "Bastard!! - Ankoku no Hakai-shin.smc",
    color: "#9b59b6",
    image: null,
    system: "snes",
    category: "rpg"
  },
  {
    id: "juteisenki",
    name: "Jutei Senki",
    file: "Jutei Senki (J) [T+Eng1.00_AGTP].smc",
    color: "#f39c12",
    image: null,
    system: "snes",
    category: "rpg"
  },
  {
    id: "kouryuumimi",
    name: "Kouryuu no Mimi",
    file: "Kouryuu no Mimi (J) [T+Eng 100% V1 RPGONE].smc",
    color: "#3498db",
    image: null,
    system: "snes",
    category: "rpg"
  },
  {
    id: "supergenjin",
    name: "Super Genjin",
    file: "Super Genjin.smc",
    color: "#e74c3c",
    image: null,
    system: "snes",
    category: "rpg"
  },
  
  // Fighting Games
  {
    id: "4",
    name: "Street Fighter Two",
    file: "Street Fighter Two .smc",
    color: "#e74c3c",
    image: "Street Fighter Two.jpg",
    system: "snes",
    category: "fighting"
  },
  {
    id: "ggundam",
    name: "Kidou Butouden G-Gundam",
    file: "Kidou Butouden G-Gundam (J) [T+Eng1.00_AGTP].smc",
    color: "#f39c12",
    image: null,
    system: "snes",
    category: "fighting"
  },
  
  // Adventure Games
  {
    id: "10",
    name: "Home Alone 2",
    file: "Home Alone 2.nes",
    color: "#27ae60",
    image: "home-alone-2.jpg",
    system: "nes",
    category: "adventure"
  },
  {
    id: "maruquest",
    name: "Maru's Quest",
    file: "Maru's Quest (Prototype).SFC",
    color: "#9b59b6",
    image: null,
    system: "snes",
    category: "adventure"
  },
  {
    id: "marvelous",
    name: "Marvelous",
    file: "Marvelous - Mouhitotsu no Takarajima (Japan).sfc",
    color: "#3498db",
    image: null,
    system: "snes",
    category: "adventure"
  },
  {
    id: "matsumura",
    name: "Matsumura Kunihiro Den",
    file: "Matsumura Kunihiro Den - Saikyou no Rekishi o Nurikaero! (Japan).sfc",
    color: "#e74c3c",
    image: null,
    system: "snes",
    category: "adventure"
  },
  {
    id: "mickmac",
    name: "Mick and Mack",
    file: "Mick and Mack - Global Gladiators (Sabotage hack).sfc",
    color: "#f39c12",
    image: null,
    system: "snes",
    category: "adventure"
  },
  {
    id: "sylvester",
    name: "Sylvester and Tweety",
    file: "Sylvester and Tweety.sfc",
    color: "#27ae60",
    image: null,
    system: "snes",
    category: "adventure"
  },
  {
    id: "carrier",
    name: "Carrier Aces",
    file: "Carrier Aces (U) [!].smc",
    color: "#3498db",
    image: null,
    system: "snes",
    category: "adventure"
  },
  {
    id: "sos",
    name: "SOS",
    file: "SOS (U) [!].smc",
    color: "#9b59b6",
    image: null,
    system: "snes",
    category: "adventure"
  },
  
  // Horror Games
  {
    id: "bramdrac",
    name: "Bram Stoker's Dracula",
    file: "Bram Stoker's Dracula.smc",
    color: "#8b0000",
    image: null,
    system: "snes",
    category: "horror"
  },
  
  // Puzzle/Other Games
  {
    id: "familyfeud",
    name: "Family Feud",
    file: "Family Feud (U) (V1.0) [!].smc",
    color: "#3498db",
    image: null,
    system: "snes",
    category: "action"
  },
  {
    id: "mrdo",
    name: "Mr. Do!",
    file: "Mr. Do! (U) [!].smc",
    color: "#f39c12",
    image: null,
    system: "snes",
    category: "action"
  }
];

export default { GAMES, CATEGORIES, CATEGORY_SECTIONS, CATEGORIES_INFO, NAVBAR_CATEGORIES };
