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
  { id: "horror", name: "Horror" },
  { id: "puzzle", name: "Puzzle" },
  { id: "strategy", name: "Strategy" }
];

// Category sections for JioHotstar-style display
export const CATEGORY_SECTIONS = [
  { id: "action", name: "Action Games", color: "#e74c3c" },
  { id: "racing", name: "Racing Games", color: "#3498db" },
  { id: "sports", name: "Sports Games", color: "#27ae60" },
  { id: "rpg", name: "RPG Games", color: "#9b59b6" },
  { id: "fighting", name: "Fighting Games", color: "#f39c12" },
  { id: "adventure", name: "Adventure Games", color: "#1abc9c" },
  { id: "horror", name: "Horror Games", color: "#8b0000" },
  { id: "puzzle", name: "Puzzle Games", color: "#3498db" },
  { id: "strategy", name: "Strategy Games", color: "#f39c12" }
];

// Category info for CategoryPage
export const CATEGORIES_INFO = {
  action: { name: "Action Games", games: ["action"] },
  racing: { name: "Racing Games", games: ["racing"] },
  sports: { name: "Sports Games", games: ["sports"] },
  fighting: { name: "Fighting Games", games: ["fighting"] },
  rpg: { name: "RPG Games", games: ["rpg"] },
  adventure: { name: "Adventure Games", games: ["adventure"] },
  horror: { name: "Horror Games", games: ["horror"] },
  puzzle: { name: "Puzzle Games", games: ["puzzle"] },
  strategy: { name: "Strategy Games", games: ["strategy"] }
};

// Navbar categories
export const NAVBAR_CATEGORIES = [
  { id: "action", name: "Action", path: "/category/action" },
  { id: "racing", name: "Racing", path: "/category/racing" },
  { id: "sports", name: "Sports", path: "/category/sports" },
  { id: "rpg", name: "RPG", path: "/category/rpg" },
  { id: "fighting", name: "Fighting", path: "/category/fighting" },
  { id: "adventure", name: "Adventure", path: "/category/adventure" },
  { id: "horror", name: "Horror", path: "/category/horror" },
  { id: "puzzle", name: "Puzzle", path: "/category/puzzle" },
  { id: "strategy", name: "Strategy", path: "/category/strategy" }
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
    image: null,
    system: "gba",
    category: "rpg"
  },
  {
    id: "earthbound",
    name: "EarthBound",
    file: "EarthBound (Regal).sfc",
    color: "#27ae60",
    image: "Dragon Quest V (Official Asset Artwork).jpeg",
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
  },
  
  // Additional Action Games
  {
    id: "acrobatm",
    name: "Acrobat Mission",
    file: "Acrobat Mission (J).smc",
    color: "#3498db",
    image: null,
    system: "snes",
    category: "action"
  },
  {
    id: "drfranken",
    name: "Adventures of Dr. Franken",
    file: "Adventures of Dr. Franken, The (U) [!].smc",
    color: "#8b0000",
    image: null,
    system: "snes",
    category: "action"
  },
  {
    id: "tintin",
    name: "Adventures of Tintin",
    file: "Adventures of Tintin, The - Prisoners of the Sun (Europe) (En,Fr,De,Es).sfc",
    color: "#f39c12",
    image: null,
    system: "snes",
    category: "adventure"
  },
  {
    id: "aero1",
    name: "Aero the Acro-Bat",
    file: "Aero the Acro-Bat (U) [!].smc",
    color: "#3498db",
    image: null,
    system: "snes",
    category: "action"
  },
  {
    id: "aircav",
    name: "Air Cavalry",
    file: "Air Cavalry (U) [!].smc",
    color: "#27ae60",
    image: null,
    system: "snes",
    category: "action"
  },
  {
    id: "arcana",
    name: "Arcana",
    file: "Arcana (U) [!].smc",
    color: "#9b59b6",
    image: null,
    system: "snes",
    category: "rpg"
  },
  {
    id: "barkley",
    name: "Barkley Shut Up and Jam!",
    file: "Barkley Shut Up and Jam! (U) [!].smc",
    color: "#e74c3c",
    image: null,
    system: "snes",
    category: "sports"
  },
  {
    id: "bassin",
    name: "Bassin's Black Bass",
    file: "Bassin's Black Bass (U) [!].smc",
    color: "#27ae60",
    image: null,
    system: "snes",
    category: "sports"
  },
  {
    id: "bestkarate",
    name: "Best of the Best - Championship Karate",
    file: "Best of the Best - Championship Karate (U) [!].smc",
    color: "#e74c3c",
    image: null,
    system: "snes",
    category: "fighting"
  },
  {
    id: "breakthru",
    name: "BreakThru!",
    file: "BreakThru! (U) [!].smc",
    color: "#3498db",
    image: null,
    system: "snes",
    category: "action"
  },
  {
    id: "bronkie",
    name: "Bronkie the Bronchiasaurus",
    file: "Bronkie the Bronchiasaurus (U) (M2).smc",
    color: "#27ae60",
    image: null,
    system: "snes",
    category: "action"
  },
  {
    id: "bsmario",
    name: "BS Super Mario USA",
    file: "BS Super Mario USA - Power Challenge - Dai-2-kai (Japan) (BS SoundLink).sfc",
    color: "#e74c3c",
    image: "mario.jpg",
    system: "snes",
    category: "action"
  },
  {
    id: "cyberknight",
    name: "Cyber Knight",
    file: "Cyber Knight (J) [T+Eng1.01_AGTP].smc",
    color: "#9b59b6",
    image: null,
    system: "snes",
    category: "rpg"
  },
  {
    id: "dirtrace",
    name: "Dirt Racer",
    file: "Dirt Racer (E) (M3) [!].smc",
    color: "#f39c12",
    image: null,
    system: "snes",
    category: "racing"
  },
  {
    id: "dreamtv",
    name: "Dream TV",
    file: "Dream TV (U) [!].smc",
    color: "#3498db",
    image: null,
    system: "snes",
    category: "action"
  },
  {
    id: "dualorb",
    name: "Dual Orb II",
    file: "Dual Orb II (J) [T+Eng1.00b+fix_TransCorp].smc",
    color: "#9b59b6",
    image: null,
    system: "snes",
    category: "rpg"
  },
  {
    id: "eek",
    name: "Eek! The Cat",
    file: "Eek! The Cat (U) [!].smc",
    color: "#f39c12",
    image: null,
    system: "snes",
    category: "action"
  },
  {
    id: "excitebike1",
    name: "Excitebike Stadium 1",
    file: "Excitebike - Bunbun Mario Battle - Stadium 1 (Japan) (BS SoundLink).sfc",
    color: "#27ae60",
    image: null,
    system: "snes",
    category: "racing"
  },
  {
    id: "fzero",
    name: "F-Zero",
    file: "F-Zero (Sup Zero).sfc",
    color: "#3498db",
    image: "1080° Avalanche (Official Asset Artwork).jpg",
    system: "snes",
    category: "racing"
  },
  {
    id: "fifa98",
    name: "FIFA 98",
    file: "FIFA 98 - Road to World Cup (E) (M6) [!].smc",
    color: "#27ae60",
    image: null,
    system: "snes",
    category: "sports"
  },
  {
    id: "ff2",
    name: "Final Fantasy II",
    file: "Final Fantasy II(Darkness Within).smc",
    color: "#9b59b6",
    image: "Dragon Quest III (Super Famicom Version - Official Asset Artwork).jpeg",
    system: "snes",
    category: "rpg"
  },
  {
    id: "ff4",
    name: "Final Fantasy IV",
    file: "Final Fantasy IV - Ultima (v25k plus).sfc",
    color: "#9b59b6",
    image: "Dragon Quest IV (Official Asset Artwork).jpeg",
    system: "snes",
    category: "rpg"
  },
  {
    id: "finalfight",
    name: "Final Fight",
    file: "Final Fight (U) [!].smc",
    color: "#e74c3c",
    image: "Street Fighter (Official Asset Artwork).jpg",
    system: "snes",
    category: "fighting"
  },
  {
    id: "firstsam",
    name: "First Samurai",
    file: "First Samurai (U) [!].smc",
    color: "#f39c12",
    image: null,
    system: "snes",
    category: "action"
  },
  {
    id: "fungames",
    name: "Fun 'N Games",
    file: "Fun 'N Games (E) [!].smc",
    color: "#3498db",
    image: null,
    system: "snes",
    category: "action"
  },
  {
    id: "gp1",
    name: "GP-1",
    file: "GP-1 (U) [!].smc",
    color: "#3498db",
    image: null,
    system: "snes",
    category: "racing"
  },
  {
    id: "gradius3",
    name: "Gradius III",
    file: "Gradius III (U) [!].smc",
    color: "#3498db",
    image: null,
    system: "snes",
    category: "action"
  },
  {
    id: "holylum",
    name: "Holy Umbrella",
    file: "Holy Umbrella - Dondera Wild (J)[T+Eng 100% AGTP].smc",
    color: "#9b59b6",
    image: null,
    system: "snes",
    category: "rpg"
  },
  {
    id: "jacknick",
    name: "Jack Nicklaus Golf",
    file: "Jack Nicklaus Golf (U) [!].smc",
    color: "#27ae60",
    image: null,
    system: "snes",
    category: "sports"
  },
  {
    id: "lennus2",
    name: "Lennus II",
    file: "Lennus II - Paladins Quest 2 (J)[T+Eng 100% V1.04 Magic Destiny].smc",
    color: "#9b59b6",
    image: null,
    system: "snes",
    category: "rpg"
  },
  {
    id: "liberty",
    name: "Liberty or Death",
    file: "Liberty or Death (U) [!].smc",
    color: "#e74c3c",
    image: null,
    system: "snes",
    category: "strategy"
  },
  {
    id: "lostviks",
    name: "The Lost Vikings",
    file: "The Lost Vikings (U) [!].smc",
    color: "#3498db",
    image: null,
    system: "snes",
    category: "puzzle"
  },
  {
    id: "magicslam",
    name: "Magic Johnson's Super Slam Dunk",
    file: "Magic Johnson's Super Slam Dunk (U) [!].smc",
    color: "#e74c3c",
    image: null,
    system: "snes",
    category: "sports"
  },
  {
    id: "mariopres",
    name: "Mario's Early Years",
    file: "Mario's Early Years - Preschool Fun (U) [!].smc",
    color: "#e74c3c",
    image: "mario.jpg",
    system: "snes",
    category: "action"
  },
  {
    id: "mecarobot",
    name: "Mecarobot Golf",
    file: "Mecarobot Golf (U) [!].smc",
    color: "#27ae60",
    image: null,
    system: "snes",
    category: "sports"
  },
  {
    id: "megalo",
    name: "Mega lo Mania",
    file: "Mega lo Mania (E) (M3) [!].smc",
    color: "#3498db",
    image: null,
    system: "snes",
    category: "action"
  },
  {
    id: "papuwa",
    name: "Nankoku Shounen Papuwa-kun",
    file: "Nankoku Shounen Papuwa-kun (J) [T+Eng1.00_FH].smc",
    color: "#f39c12",
    image: null,
    system: "snes",
    category: "action"
  },
  {
    id: "nflqc",
    name: "NFL Quarterback Club",
    file: "NFL Quarterback Club (U) [!].smc",
    color: "#e74c3c",
    image: null,
    system: "snes",
    category: "sports"
  },
  {
    id: "nhlpa",
    name: "NHLPA Hockey '93",
    file: "NHLPA Hockey '93 (U) [!].smc",
    color: "#3498db",
    image: null,
    system: "snes",
    category: "sports"
  },
  {
    id: "olympic96",
    name: "Olympic Summer Games 96",
    file: "Olympic Summer Games 96 (U) [!].smc",
    color: "#27ae60",
    image: null,
    system: "snes",
    category: "sports"
  },
  {
    id: "oozumou",
    name: "Oozumou Tamashii",
    file: "Oozumou Tamashii (J) [!].smc",
    color: "#f39c12",
    image: null,
    system: "snes",
    category: "sports"
  },
  {
    id: "peacekeep",
    name: "The Peace Keepers",
    file: "The Peace Keepers (U) [!].smc",
    color: "#e74c3c",
    image: null,
    system: "snes",
    category: "fighting"
  },
  {
    id: "phantom",
    name: "Phantom 2040",
    file: "Phantom 2040 (U) [!].smc",
    color: "#9b59b6",
    image: null,
    system: "snes",
    category: "action"
  },
  {
    id: "pipedream",
    name: "Pipe Dream",
    file: "Pipe Dream (J).smc",
    color: "#3498db",
    image: null,
    system: "snes",
    category: "puzzle"
  },
  {
    id: "realm",
    name: "Realm",
    file: "Realm (U) [!].smc",
    color: "#9b59b6",
    image: null,
    system: "snes",
    category: "rpg"
  },
  {
    id: "simpro",
    name: "Simulation Pro Yakyuu 2",
    file: "Simulation Pro Yakyuu 2 (J).smc",
    color: "#27ae60",
    image: null,
    system: "snes",
    category: "sports"
  },
  {
    id: "streetcomb",
    name: "Street Combat",
    file: "Street Combat (U) [!].smc",
    color: "#e74c3c",
    image: null,
    system: "snes",
    category: "fighting"
  },
  {
    id: "superchase",
    name: "Super Chase H.Q.",
    file: "Super Chase H.Q. (U) [!].smc",
    color: "#3498db",
    image: null,
    system: "snes",
    category: "racing"
  },
  {
    id: "supercirc",
    name: "Super Family Circuit",
    file: "Super Family Circuit (J) [!].smc",
    color: "#e74c3c",
    image: null,
    system: "snes",
    category: "racing"
  },
  {
    id: "supergere",
    name: "Super Family Gerende",
    file: "Super Family Gerende (J) (NP).smc",
    color: "#e74c3c",
    image: null,
    system: "snes",
    category: "racing"
  },
  {
    id: "supertroll",
    name: "Super Troll Islands",
    file: "Super Troll Islands (U) [!].smc",
    color: "#f39c12",
    image: null,
    system: "snes",
    category: "action"
  },
  {
    id: "swatkats",
    name: "SWAT Kats",
    file: "SWAT Kats - The Radical Squadron (U) [!].smc",
    color: "#3498db",
    image: null,
    system: "snes",
    category: "action"
  },
  {
    id: "taloon",
    name: "Taloon's Great Adventure",
    file: "Taloon's Great Adventure (English v0.99).smc",
    color: "#9b59b6",
    image: null,
    system: "snes",
    category: "rpg"
  },
  {
    id: "troddlers",
    name: "Troddlers",
    file: "Troddlers (U) [!].smc",
    color: "#27ae60",
    image: null,
    system: "snes",
    category: "action"
  },
  {
    id: "ugoku",
    name: "Ugoku E Ver. 2.0",
    file: "Ugoku E Ver. 2.0 - Aryol (J).smc",
    color: "#3498db",
    image: null,
    system: "snes",
    category: "action"
  },
  {
    id: "ultraman1",
    name: "Ultraman",
    file: "Ultraman (J) [!].smc",
    color: "#e74c3c",
    image: null,
    system: "snes",
    category: "action"
  },
  {
    id: "ultramantf",
    name: "Ultraman - Towards the Future",
    file: "Ultraman - Towards the Future (U) [!].smc",
    color: "#e74c3c",
    image: null,
    system: "snes",
    category: "action"
  },
  {
    id: "wonderpj",
    name: "Wonder Project J",
    file: "Wonder Project J - Kikai no Shounen Pino (J) [T+Eng1.04_WakdHacks].smc",
    color: "#9b59b6",
    image: null,
    system: "snes",
    category: "rpg"
  },
  {
    id: "wordtris",
    name: "Wordtris",
    file: "Wordtris (U) [!].smc",
    color: "#3498db",
    image: null,
    system: "snes",
    category: "puzzle"
  },
  {
    id: "wwfarcade",
    name: "WWF WrestleMania - The Arcade Game",
    file: "WWF WrestleMania - The Arcade Game (U) [!].smc",
    color: "#e74c3c",
    image: null,
    system: "snes",
    category: "fighting"
  },
  
  // Additional popular games
  {
    id: "tmnt4",
    name: "Teenage Mutant Ninja Turtles IV",
    file: "Teenage Mutant Ninja Turtles IV - Turtles in Time (U) [!].smc",
    color: "#27ae60",
    image: null,
    system: "snes",
    category: "action"
  },
  {
    id: "contra3",
    name: "Contra 3",
    file: "Contra 3 - The Alien Wars (U) [!].smc",
    color: "#e74c3c",
    image: "Neo Contra (Official Asset Artwork).jpg",
    system: "snes",
    category: "action"
  },
  {
    id: "megamanx",
    name: "Mega Man X",
    file: "Mega Man X (U) [!].smc",
    color: "#3498db",
    image: "Mega Man X (Official Asset Artwork).jpeg",
    system: "snes",
    category: "action"
  },
  {
    id: "supermetroid",
    name: "Super Metroid",
    file: "Super Metroid (U) [!].smc",
    color: "#9b59b6",
    image: "Castlevania - Dawn of Sorrow (Official Asset Artwork).jpg",
    system: "snes",
    category: "action"
  },
  {
    id: "dkc2",
    name: "Donkey Kong Country 2",
    file: "Donkey Kong Country 2 - Diddy's Kong Quest (U) [!].smc",
    color: "#f39c12",
    image: "monkey.jpg",
    system: "snes",
    category: "action"
  },
  {
    id: "dkc3",
    name: "Donkey Kong Country 3",
    file: "Donkey Kong Country 3 - Dixie Kong's Double Trouble! (U) [!].smc",
    color: "#f39c12",
    image: "monkey.jpg",
    system: "snes",
    category: "action"
  },
  {
    id: "aladdin",
    name: "Aladdin",
    file: "Aladdin (U) [!].smc",
    color: "#f39c12",
    image: null,
    system: "snes",
    category: "action"
  },
  {
    id: "street2alpha",
    name: "Street Fighter Alpha 2",
    file: "Street Fighter Alpha 2 (U) [!].smc",
    color: "#e74c3c",
    image: "Street Fighter (Official Asset Artwork).jpg",
    system: "snes",
    category: "fighting"
  },
  {
    id: "mortal3",
    name: "Mortal Kombat 3",
    file: "Mortal Kombat 3 (U) [!].smc",
    color: "#8b0000",
    image: "Mortal Kombat II (Official Asset Artwork).jpg",
    system: "snes",
    category: "fighting"
  },
  {
    id: "mk1",
    name: "Mortal Kombat",
    file: "Mortal Kombat (U) [!].smc",
    color: "#8b0000",
    image: "Mortal Kombat II (Official Asset Artwork).jpg",
    system: "snes",
    category: "fighting"
  },
  {
    id: "mk2",
    name: "Mortal Kombat 2",
    file: "Mortal Kombat 2 (U) [!].smc",
    color: "#8b0000",
    image: "Mortal Kombat II (Official Asset Artwork).jpg",
    system: "snes",
    category: "fighting"
  },
  {
    id: "simcity",
    name: "SimCity",
    file: "SimCity (U) [!].smc",
    color: "#3498db",
    image: null,
    system: "snes",
    category: "strategy"
  },
  {
    id: "tetris",
    name: "Tetris",
    file: "Tetris (U) [!].smc",
    color: "#3498db",
    image: "Pac-Man (Atari 2600 Concept - Official Asset Artwork).jpeg",
    system: "snes",
    category: "puzzle"
  },
  {
    id: "tetrisattack",
    name: "Tetris Attack",
    file: "Tetris Attack (U) [!].smc",
    color: "#9b59b6",
    image: null,
    system: "snes",
    category: "puzzle"
  },
  {
    id: "kirbyDream",
    name: "Kirby's Dream Land 3",
    file: "Kirby's Dream Land 3 (U) [!].smc",
    color: "#ff69b4",
    image: null,
    system: "snes",
    category: "action"
  },
  {
    id: "yoshisisland",
    name: "Yoshi's Island",
    file: "Super Mario World 2 - Yoshi's Island (U) [!].smc",
    color: "#27ae60",
    image: "mario.jpg",
    system: "snes",
    category: "action"
  },
  {
    id: "starfox",
    name: "Star Fox",
    file: "Star Fox (U) [!].smc",
    color: "#27ae60",
    image: null,
    system: "snes",
    category: "action"
  },
  {
    id: "gradius",
    name: "Gradius",
    file: "Gradius (U) [!].smc",
    color: "#3498db",
    image: null,
    system: "snes",
    category: "action"
  },
  {
    id: "rtype",
    name: "R-Type",
    file: "R-Type (U) [!].smc",
    color: "#9b59b6",
    image: null,
    system: "snes",
    category: "action"
  },
  {
    id: "pacman",
    name: "Pac-Man",
    file: "Pac-Man (U) [!].smc",
    color: "#f39c12",
    image: null,
    system: "snes",
    category: "action"
  },
  {
    id: "doubledragon",
    name: "Double Dragon",
    file: "Double Dragon (U) [!].smc",
    color: "#e74c3c",
    image: null,
    system: "snes",
    category: "action"
  },
  {
    id: "sonic2",
    name: "Sonic the Hedgehog 2",
    file: "Sonic the Hedgehog 2 (U) [!].smc",
    color: "#3498db",
    image: null,
    system: "snes",
    category: "action"
  },
  {
    id: "sonic1",
    name: "Sonic the Hedgehog",
    file: "Sonic the Hedgehog (U) [!].smc",
    color: "#3498db",
    image: null,
    system: "snes",
    category: "action"
  },
  {
    id: "gunstarheroes",
    name: "Gunstar Heroes",
    file: "Gunstar Heroes (U) [!].smc",
    color: "#e74c3c",
    image: null,
    system: "snes",
    category: "action"
  },
  {
    id: "vforce",
    name: "V-force",
    file: "V-force (U) [!].smc",
    color: "#3498db",
    image: null,
    system: "snes",
    category: "action"
  },
  {
    id: "panzer",
    name: "Panzer Bandit",
    file: "Panzer Bandit (U) [!].smc",
    color: "#f39c12",
    image: null,
    system: "snes",
    category: "action"
  },
  {
    id: "umk3",
    name: "Ultimate Mortal Kombat 3",
    file: "Ultimate Mortal Kombat 3 (U) [!].smc",
    color: "#8b0000",
    image: null,
    system: "snes",
    category: "fighting"
  }
];

export default { GAMES, CATEGORIES, CATEGORY_SECTIONS, CATEGORIES_INFO, NAVBAR_CATEGORIES };

