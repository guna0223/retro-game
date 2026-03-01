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
  image: "Super Mario World (PAL).png",
  system: "snes",
  category: "action"
},
{
  id: "2",
  name: "Donkey Kong Country",
  file: "Donkey Kong Country (U) (V1.2) [!].smc",
  color: "#f39c12",
  image: "Donkey Kong Country (PAL).png",
  system: "snes",
  category: "action"
},
{
  id: "3",
  name: "Spider-Man",
  file: "Spider-Man.sfc",
  color: "#e74c3c",
  image: "Spider-Man (PAL).png",
  system: "snes",
  category: "action"
},
{
  id: "4",
  name: "Spider-Man 2",
  file: "Spiderman2.gba",
  color: "#e74c3c",
  image: "Spider-Man (PAL).png",
  system: "gba",
  category: "action"
},
{
  id: "5",
  name: "New Super Mario Bros",
  file: "New Super Mario Bros.nds",
  color: "#e74c3c",
  image: "Super Mario All-Stars and Super Mario World (PAL).png",
  system: "nds",
  category: "action"
},
{
  id: "6",
  name: "3 Ninjas Kick",
  file: "3 Ninjas Kick.smc",
  color: "#e74c3c",
  image: "3 Ninjas Kick Back (PAL).png",
  system: "snes",
  category: "action"
},
{
  id: "7",
  name: "Aero the Acro-Bat 2",
  file: "Aero the Acro-Bat 2.smc",
  color: "#3498db",
  image: "Aero the Acrobat 2 (PAL).png",
  system: "snes",
  category: "action"
},
{
  id: "8",
  name: "Chuck Rock",
  file: "Chuck Rock (U) [!].smc",
  color: "#f39c12",
  image: "Chuck Rock (PAL).png",
  system: "snes",
  category: "action"
},
{
  id: "9",
  name: "Incredible Crash Dummies",
  file: "Incredible Crash Dummies, The (U) [!].smc",
  color: "#e74c3c",
  image: "The Incredible Crash Dummies (PAL).png",
  system: "snes",
  category: "action"
},
{
  id: "10",
  name: "Izzy's Quest",
  file: "Izzy's Quest for the Olympic Rings (U) [!].smc",
  color: "#9b59b6",
  image: null,
  system: "snes",
  category: "action"
},
{
  id: "11",
  name: "LOBO",
  file: "LOBO.sfc",
  color: "#e74c3c",
  image: null,
  system: "snes",
  category: "action"
},
{
  id: "12",
  name: "Spanky's Quest",
  file: "Spanky's Quest (U) [!].smc",
  color: "#3498db",
  image: "Spanky's Quest (PAL).png",
  system: "snes",
  category: "action"
},
{
  id: "13",
  name: "Spider-Man Maximum Carnage",
  file: "Spider-Man & Venom - Maximum Carnage (U) [!].smc",
  color: "#e74c3c",
  image: "Spider-Man (PAL).png",
  system: "snes",
  category: "action"
},
{
  id: "14",
  name: "Spirou",
  file: "Spirou (E) (M4) [!].smc",
  color: "#27ae60",
  image: null,
  system: "snes",
  category: "action"
},
{
  id: "15",
  name: "Block Kuzush",
  file: "Block Kuzush.smc",
  color: "#3498db",
  image: null,
  system: "snes",
  category: "action"
},

// Racing Games

{
  id: "16",
  name: "Top Gear",
  file: "Top Gear (USA).sfc",
  color: "#3498db",
  image: "Top Gear (PAL).png",
  system: "snes",
  category: "racing"
},
{
  id: "17",
  name: "Mario Kart DS",
  file: "Mario Kart.nds",
  color: "#e74c3c",
  image: "Super Mario Kart (PAL).png",
  system: "nds",
  category: "racing"
},
{
  id: "18",
  name: "Dirt Trax FX",
  file: "Dirt Trax FX (U) [!].smc",
  color: "#f39c12",
  image: "Dirt Trax FX (PAL).png",
  system: "snes",
  category: "racing"
},
{
  id: "19",
  name: "ESPN Speedworld",
  file: "ESPN Speedworld (U) [!].smc",
  color: "#3498db",
  image: "ESPN Speed World (PAL).png",
  system: "snes",
  category: "racing"
},
{
  id: "20",
  name: "Excitebike",
  file: "Excitebike - Bunbun Mario Battle - Stadium 4 (Japan) (BS SoundLink).sfc",
  color: "#27ae60",
  image: null,
  system: "snes",
  category: "racing"
},{
  id: "21",
  name: "BASS Masters Classic",
  file: "BASS Masters Classic.sfc",
  color: "#27ae60",
  image: "Bass Masters Classic (PAL).png",
  system: "snes",
  category: "sports"
},
{
  id: "22",
  name: "Capcom's Soccer Shootout",
  file: "Capcom's Soccer Shootout.smc",
  color: "#e74c3c",
  image: null,
  system: "snes",
  category: "sports"
},
{
  id: "23",
  name: "Dream Basketball",
  file: "Dream Basketball - Dunk & Hoop (J) [!].smc",
  color: "#f39c12",
  image: null,
  system: "snes",
  category: "sports"
},
{
  id: "24",
  name: "Emmitt Smith Football",
  file: "Emmitt Smith Football (U) [!].smc",
  color: "#e74c3c",
  image: "Emmitt Smith Football (PAL).png",
  system: "snes",
  category: "sports"
},
{
  id: "25",
  name: "J.League Excite Stage '94",
  file: "J.League Excite Stage '94 (J) (V1.1) [!].smc",
  color: "#9b59b6",
  image: null,
  system: "snes",
  category: "sports"
},
{
  id: "26",
  name: "J.League Soccer Prime Goal 2",
  file: "J.League Soccer Prime Goal 2 (J) [!].smc",
  color: "#3498db",
  image: null,
  system: "snes",
  category: "sports"
},
{
  id: "27",
  name: "NBA Live '96",
  file: "NBA Live '96 (U) [!].smc",
  color: "#e74c3c",
  image: null,
  system: "snes",
  category: "sports"
},
{
  id: "28",
  name: "Super Dunk Star",
  file: "Super Dunk Star (J).smc",
  color: "#f39c12",
  image: null,
  system: "snes",
  category: "sports"
},
{
  id: "29",
  name: "Super Formation Soccer II",
  file: "Super Formation Soccer II (J) [!].smc",
  color: "#27ae60",
  image: null,
  system: "snes",
  category: "sports"
},
{
  id: "30",
  name: "Golf Daisuki!",
  file: "Golf Daisuki! O.B. Club (Japan) (BS).sfc",
  color: "#27ae60",
  image: null,
  system: "snes",
  category: "sports"
},
{
  id: "31",
  name: "Pokemon FireRed",
  file: "Pokemon.gba",
  color: "#e74c3c",
  image: null,
  system: "gba",
  category: "rpg"
},
{
  id: "32",
  name: "EarthBound",
  file: "EarthBound (Regal).sfc",
  color: "#27ae60",
  image: "EarthBound (PAL).png",
  system: "snes",
  category: "rpg"
},
{
  id: "33",
  name: "Bastard!!",
  file: "Bastard!! - Ankoku no Hakai-shin.smc",
  color: "#9b59b6",
  image: null,
  system: "snes",
  category: "rpg"
},
{
  id: "34",
  name: "Jutei Senki",
  file: "Jutei Senki (J) [T+Eng1.00_AGTP].smc",
  color: "#f39c12",
  image: null,
  system: "snes",
  category: "rpg"
},
{
  id: "35",
  name: "Kouryuu no Mimi",
  file: "Kouryuu no Mimi (J) [T+Eng 100% V1 RPGONE].smc",
  color: "#3498db",
  image: null,
  system: "snes",
  category: "rpg"
},
{
  id: "36",
  name: "Super Genjin",
  file: "Super Genjin.smc",
  color: "#e74c3c",
  image: null,
  system: "snes",
  category: "rpg"
},
{
  id: "37",
  name: "Street Fighter Two",
  file: "Street Fighter Two .smc",
  color: "#e74c3c",
  image: "Street Fighter II (PAL).png",
  system: "snes",
  category: "fighting"
},
{
  id: "38",
  name: "Kidou Butouden G-Gundam",
  file: "Kidou Butouden G-Gundam (J) [T+Eng1.00_AGTP].smc",
  color: "#f39c12",
  image: null,
  system: "snes",
  category: "fighting"
},
{
  id: "39",
  name: "Home Alone 2",
  file: "Home Alone 2.nes",
  color: "#27ae60",
  image: "Home Alone 2 - Lost in New York (PAL).png",
  system: "nes",
  category: "adventure"
},{
  id: "40",
  name: "Maru's Quest",
  file: "Maru's Quest (Prototype).SFC",
  color: "#9b59b6",
  image: null,
  system: "snes",
  category: "adventure"
},
{
  id: "41",
  name: "Marvelous",
  file: "Marvelous - Mouhitotsu no Takarajima (Japan).sfc",
  color: "#3498db",
  image: null,
  system: "snes",
  category: "adventure"
},
{
  id: "42",
  name: "Matsumura Kunihiro Den",
  file: "Matsumura Kunihiro Den - Saikyou no Rekishi o Nurikaero! (Japan).sfc",
  color: "#e74c3c",
  image: null,
  system: "snes",
  category: "adventure"
},
{
  id: "43",
  name: "Mick and Mack",
  file: "Mick and Mack - Global Gladiators (Sabotage hack).sfc",
  color: "#f39c12",
  image: null,
  system: "snes",
  category: "adventure"
},
{
  id: "44",
  name: "Sylvester and Tweety",
  file: "Sylvester and Tweety.sfc",
  color: "#27ae60",
  image: null,
  system: "snes",
  category: "adventure"
},
{
  id: "45",
  name: "Carrier Aces",
  file: "Carrier Aces (U) [!].smc",
  color: "#3498db",
  image: "Carrier Aces (PAL).png",
  system: "snes",
  category: "adventure"
},
{
  id: "46",
  name: "SOS",
  file: "SOS (U) [!].smc",
  color: "#9b59b6",
  image: "SOS (PAL).png",
  system: "snes",
  category: "adventure"
},
{
  id: "47",
  name: "Bram Stoker's Dracula",
  file: "Bram Stoker's Dracula.smc",
  color: "#8b0000",
  image: "Bram Stoker's Dracula (PAL).png",
  system: "snes",
  category: "horror"
},
{
  id: "48",
  name: "Family Feud",
  file: "Family Feud (U) (V1.0) [!].smc",
  color: "#3498db",
  image: "Family Feud (PAL).png",
  system: "snes",
  category: "action"
},
{
  id: "49",
  name: "Mr. Do!",
  file: "Mr. Do! (U) [!].smc",
  color: "#f39c12",
  image: null,
  system: "snes",
  category: "action"
},
{
  id: "50",
  name: "Acrobat Mission",
  file: "Acrobat Mission (J).smc",
  color: "#3498db",
  image: null,
  system: "snes",
  category: "action"
},
{
  id: "51",
  name: "Adventures of Dr. Franken",
  file: "Adventures of Dr. Franken, The (U) [!].smc",
  color: "#8b0000",
  image: null,
  system: "snes",
  category: "action"
},
{
  id: "52",
  name: "Adventures of Tintin",
  file: "Adventures of Tintin, The - Prisoners of the Sun (Europe) (En,Fr,De,Es).sfc",
  color: "#f39c12",
  image: null,
  system: "snes",
  category: "adventure"
},
{
  id: "53",
  name: "Aero the Acro-Bat",
  file: "Aero the Acro-Bat (U) [!].smc",
  color: "#3498db",
  image: "Aero the Acrobat (PAL).png",
  system: "snes",
  category: "action"
},
{
  id: "54",
  name: "Air Cavalry",
  file: "Air Cavalry (U) [!].smc",
  color: "#27ae60",
  image: null,
  system: "snes",
  category: "action"
},
{
  id: "55",
  name: "Arcana",
  file: "Arcana (U) [!].smc",
  color: "#9b59b6",
  image: null,
  system: "snes",
  category: "rpg"
},
{
  id: "56",
  name: "Barkley Shut Up and Jam!",
  file: "Barkley Shut Up and Jam! (U) [!].smc",
  color: "#e74c3c",
  image: null,
  system: "snes",
  category: "sports"
},
{
  id: "57",
  name: "Bassin's Black Bass",
  file: "Bassin's Black Bass (U) [!].smc",
  color: "#27ae60",
  image: "Bassin's Black Bass with Hank Parker (PAL).png",
  system: "snes",
  category: "sports"
},
{
  id: "58",
  name: "Best of the Best - Championship Karate",
  file: "Best of the Best - Championship Karate (U) [!].smc",
  color: "#e74c3c",
  image: "Best of the Best Championship Karate (PAL).png",
  system: "snes",
  category: "fighting"
},
{
  id: "59",
  name: "BreakThru!",
  file: "BreakThru! (U) [!].smc",
  color: "#3498db",
  image: "BreakThru! (PAL).png",
  system: "snes",
  category: "action"
},{
  id: "60",
  name: "Bronkie the Bronchiasaurus",
  file: "Bronkie the Bronchiasaurus (U) (M2).smc",
  color: "#27ae60",
  image: "Bronkie the Bronchiasaurus (PAL).png",
  system: "snes",
  category: "action"
},
{
  id: "61",
  name: "BS Super Mario USA",
  file: "BS Super Mario USA - Power Challenge - Dai-2-kai (Japan) (BS SoundLink).sfc",
  color: "#e74c3c",
  image: "Super Mario All-Stars and Super Mario World (PAL).png",
  system: "snes",
  category: "action"
},
{
  id: "62",
  name: "Cyber Knight",
  file: "Cyber Knight (J) [T+Eng1.01_AGTP].smc",
  color: "#9b59b6",
  image: null,
  system: "snes",
  category: "rpg"
},
{
  id: "63",
  name: "Dirt Racer",
  file: "Dirt Racer (E) (M3) [!].smc",
  color: "#f39c12",
  image: null,
  system: "snes",
  category: "racing"
},
{
  id: "64",
  name: "Dream TV",
  file: "Dream TV (U) [!].smc",
  color: "#3498db",
  image: null,
  system: "snes",
  category: "action"
},
{
  id: "65",
  name: "Dual Orb II",
  file: "Dual Orb II (J) [T+Eng1.00b+fix_TransCorp].smc",
  color: "#9b59b6",
  image: null,
  system: "snes",
  category: "rpg"
},
{
  id: "66",
  name: "Eek! The Cat",
  file: "Eek! The Cat (U) [!].smc",
  color: "#f39c12",
  image: "Eek! The Cat (PAL).png",
  system: "snes",
  category: "action"
},
{
  id: "67",
  name: "Excitebike Stadium 1",
  file: "Excitebike - Bunbun Mario Battle - Stadium 1 (Japan) (BS SoundLink).sfc",
  color: "#27ae60",
  image: null,
  system: "snes",
  category: "racing"
},
{
  id: "68",
  name: "F-Zero",
  file: "F-Zero (Sup Zero).sfc",
  color: "#3498db",
  image: null,
  system: "snes",
  category: "racing"
},
{
  id: "69",
  name: "FIFA 98",
  file: "FIFA 98 - Road to World Cup (E) (M6) [!].smc",
  color: "#27ae60",
  image: "FIFA - Road to World Cup 98 (PAL).png",
  system: "snes",
  category: "sports"
},
{
  id: "70",
  name: "Final Fantasy II",
  file: "Final Fantasy II(Darkness Within).smc",
  color: "#9b59b6",
  image: null,
  system: "snes",
  category: "rpg"
},
{
  id: "71",
  name: "Final Fantasy IV",
  file: "Final Fantasy IV - Ultima (v25k plus).sfc",
  color: "#9b59b6",
  image: null,
  system: "snes",
  category: "rpg"
},
{
  id: "72",
  name: "Final Fight",
  file: "Final Fight (U) [!].smc",
  color: "#e74c3c",
  image: "Final Fight (PAL).png",
  system: "snes",
  category: "fighting"
},
{
  id: "73",
  name: "First Samurai",
  file: "First Samurai (U) [!].smc",
  color: "#f39c12",
  image: "First Samurai (PAL).png",
  system: "snes",
  category: "action"
},
{
  id: "74",
  name: "Fun 'N Games",
  file: "Fun 'N Games (E) [!].smc",
  color: "#3498db",
  image: null,
  system: "snes",
  category: "action"
},
{
  id: "75",
  name: "GP-1",
  file: "GP-1 (U) [!].smc",
  color: "#3498db",
  image: null,
  system: "snes",
  category: "racing"
},
{
  id: "76",
  name: "Gradius III",
  file: "Gradius III (U) [!].smc",
  color: "#3498db",
  image: "Gradius III (PAL).png",
  system: "snes",
  category: "action"
},{
  id: "77",
  name: "Holy Umbrella",
  file: "Holy Umbrella - Dondera Wild (J)[T+Eng 100% AGTP].smc",
  color: "#9b59b6",
  image: null,
  system: "snes",
  category: "rpg"
},
{
  id: "78",
  name: "Jack Nicklaus Golf",
  file: "Jack Nicklaus Golf (U) [!].smc",
  color: "#27ae60",
  image: "Jack Nicklaus Golf (PAL).png",
  system: "snes",
  category: "sports"
},
{
  id: "79",
  name: "Lennus II",
  file: "Lennus II - Paladins Quest 2 (J)[T+Eng 100% V1.04 Magic Destiny].smc",
  color: "#9b59b6",
  image: null,
  system: "snes",
  category: "rpg"
},
{
  id: "80",
  name: "Liberty or Death",
  file: "Liberty or Death (U) [!].smc",
  color: "#e74c3c",
  image: null,
  system: "snes",
  category: "strategy"
},
{
  id: "81",
  name: "The Lost Vikings",
  file: "The Lost Vikings (U) [!].smc",
  color: "#3498db",
  image: null,
  system: "snes",
  category: "puzzle"
},
{
  id: "82",
  name: "Magic Johnson's Super Slam Dunk",
  file: "Magic Johnson's Super Slam Dunk (U) [!].smc",
  color: "#e74c3c",
  image: null,
  system: "snes",
  category: "sports"
},
{
  id: "83",
  name: "Mario's Early Years",
  file: "Mario's Early Years - Preschool Fun (U) [!].smc",
  color: "#e74c3c",
  image: null,
  system: "snes",
  category: "action"
},
{
  id: "84",
  name: "Mecarobot Golf",
  file: "Mecarobot Golf (U) [!].smc",
  color: "#27ae60",
  image: null,
  system: "snes",
  category: "sports"
},
{
  id: "85",
  name: "Mega lo Mania",
  file: "Mega lo Mania (E) (M3) [!].smc",
  color: "#3498db",
  image: null,
  system: "snes",
  category: "action"
},
{
  id: "86",
  name: "Nankoku Shounen Papuwa-kun",
  file: "Nankoku Shounen Papuwa-kun (J) [T+Eng1.00_FH].smc",
  color: "#f39c12",
  image: null,
  system: "snes",
  category: "action"
},
{
  id: "87",
  name: "NFL Quarterback Club",
  file: "NFL Quarterback Club (U) [!].smc",
  color: "#e74c3c",
  image: null,
  system: "snes",
  category: "sports"
},
{
  id: "88",
  name: "NHLPA Hockey '93",
  file: "NHLPA Hockey '93 (U) [!].smc",
  color: "#3498db",
  image: null,
  system: "snes",
  category: "sports"
},
{
  id: "89",
  name: "Olympic Summer Games 96",
  file: "Olympic Summer Games 96 (U) [!].smc",
  color: "#27ae60",
  image: null,
  system: "snes",
  category: "sports"
},
{
  id: "90",
  name: "Oozumou Tamashii",
  file: "Oozumou Tamashii (J) [!].smc",
  color: "#f39c12",
  image: null,
  system: "snes",
  category: "sports"
},
{
  id: "91",
  name: "The Peace Keepers",
  file: "The Peace Keepers (U) [!].smc",
  color: "#e74c3c",
  image: "The Peace Keepers (PAL).png",
  system: "snes",
  category: "fighting"
},
{
  id: "92",
  name: "Phantom 2040",
  file: "Phantom 2040 (U) [!].smc",
  color: "#9b59b6",
  image: null,
  system: "snes",
  category: "action"
},
{
  id: "93",
  name: "Pipe Dream",
  file: "Pipe Dream (J).smc",
  color: "#3498db",
  image: null,
  system: "snes",
  category: "puzzle"
},
{
  id: "94",
  name: "Realm",
  file: "Realm (U) [!].smc",
  color: "#9b59b6",
  image: null,
  system: "snes",
  category: "rpg"
},
{
  id: "95",
  name: "Simulation Pro Yakyuu 2",
  file: "Simulation Pro Yakyuu 2 (J).smc",
  color: "#27ae60",
  image: null,
  system: "snes",
  category: "sports"
},
{
  id: "96",
  name: "Street Combat",
  file: "Street Combat (U) [!].smc",
  color: "#e74c3c",
  image: null,
  system: "snes",
  category: "fighting"
},
{
  id: "97",
  name: "Super Chase H.Q.",
  file: "Super Chase H.Q. (U) [!].smc",
  color: "#3498db",
  image: null,
  system: "snes",
  category: "racing"
},{
  id: "98",
  name: "Super Family Circuit",
  file: "Super Family Circuit (J) [!].smc",
  color: "#e74c3c",
  image: null,
  system: "snes",
  category: "racing"
},
{
  id: "99",
  name: "Super Family Gerende",
  file: "Super Family Gerende (J) (NP).smc",
  color: "#e74c3c",
  image: null,
  system: "snes",
  category: "racing"
},
{
  id: "100",
  name: "Super Troll Islands",
  file: "Super Troll Islands (U) [!].smc",
  color: "#f39c12",
  image: null,
  system: "snes",
  category: "action"
},
{
  id: "101",
  name: "SWAT Kats",
  file: "SWAT Kats - The Radical Squadron (U) [!].smc",
  color: "#3498db",
  image: null,
  system: "snes",
  category: "action"
},
{
  id: "102",
  name: "Taloon's Great Adventure",
  file: "Taloon's Great Adventure (English v0.99).smc",
  color: "#9b59b6",
  image: null,
  system: "snes",
  category: "rpg"
},
{
  id: "103",
  name: "Troddlers",
  file: "Troddlers (U) [!].smc",
  color: "#27ae60",
  image: null,
  system: "snes",
  category: "action"
},
{
  id: "104",
  name: "Ugoku E Ver. 2.0",
  file: "Ugoku E Ver. 2.0 - Aryol (J).smc",
  color: "#3498db",
  image: null,
  system: "snes",
  category: "action"
},
{
  id: "105",
  name: "Ultraman",
  file: "Ultraman (J) [!].smc",
  color: "#e74c3c",
  image: null,
  system: "snes",
  category: "action"
},
{
  id: "106",
  name: "Ultraman - Towards the Future",
  file: "Ultraman - Towards the Future (U) [!].smc",
  color: "#e74c3c",
  image: null,
  system: "snes",
  category: "action"
},
{
  id: "107",
  name: "Wonder Project J",
  file: "Wonder Project J - Kikai no Shounen Pino (J) [T+Eng1.04_WakdHacks].smc",
  color: "#9b59b6",
  image: null,
  system: "snes",
  category: "rpg"
},
{
  id: "108",
  name: "Wordtris",
  file: "Wordtris (U) [!].smc",
  color: "#3498db",
  image: null,
  system: "snes",
  category: "puzzle"
},
{
  id: "109",
  name: "WWF WrestleMania - The Arcade Game",
  file: "WWF WrestleMania - The Arcade Game (U) [!].smc",
  color: "#e74c3c",
  image: null,
  system: "snes",
  category: "fighting"
},{
  id: "110",
  name: "Teenage Mutant Ninja Turtles IV",
  file: "Teenage Mutant Ninja Turtles IV - Turtles in Time (U) [!].smc",
  color: "#27ae60",
  image: null,
  system: "snes",
  category: "action"
},
{
  id: "111",
  name: "Contra 3",
  file: "Contra 3 - The Alien Wars (U) [!].smc",
  color: "#e74c3c",
  image: null,
  system: "snes",
  category: "action"
},
{
  id: "112",
  name: "Mega Man X",
  file: "Mega Man X (U) [!].smc",
  color: "#3498db",
  image: "Mega Man X (PAL).png",
  system: "snes",
  category: "action"
},
{
  id: "113",
  name: "Super Metroid",
  file: "Super Metroid (U) [!].smc",
  color: "#9b59b6",
  image: null,
  system: "snes",
  category: "action"
},
{
  id: "114",
  name: "Donkey Kong Country 2",
  file: "Donkey Kong Country 2 - Diddy's Kong Quest (U) [!].smc",
  color: "#f39c12",
  image: "Donkey Kong Country 2 - Diddy's Kong Quest (PAL).png",
  system: "snes",
  category: "action"
},
{
  id: "115",
  name: "Donkey Kong Country 3",
  file: "Donkey Kong Country 3 - Dixie Kong's Double Trouble! (U) [!].smc",
  color: "#f39c12",
  image: "Donkey Kong Country 3 - Dixie Kong's Double Trouble! (PAL).png",
  system: "snes",
  category: "action"
},
{
  id: "116",
  name: "Aladdin",
  file: "Aladdin (U) [!].smc",
  color: "#f39c12",
  image: null,
  system: "snes",
  category: "action"
},
{
  id: "117",
  name: "Street Fighter Alpha 2",
  file: "Street Fighter Alpha 2 (U) [!].smc",
  color: "#e74c3c",
  image: "Street Fighter Alpha 2 (PAL).png",
  system: "snes",
  category: "fighting"
},
{
  id: "118",
  name: "Mortal Kombat 3",
  file: "Mortal Kombat 3 (U) [!].smc",
  color: "#8b0000",
  image: "Mortal Kombat 3 (PAL).png",
  system: "snes",
  category: "fighting"
},
{
  id: "119",
  name: "Mortal Kombat",
  file: "Mortal Kombat (U) [!].smc",
  color: "#8b0000",
  image: "Mortal Kombat (PAL).png",
  system: "snes",
  category: "fighting"
},
{
  id: "120",
  name: "Mortal Kombat 2",
  file: "Mortal Kombat 2 (U) [!].smc",
  color: "#8b0000",
  image: "Mortal Kombat 2 (PAL).png",
  system: "snes",
  category: "fighting"
},
{
  id: "121",
  name: "SimCity",
  file: "SimCity (U) [!].smc",
  color: "#3498db",
  image: null,
  system: "snes",
  category: "strategy"
},
{
  id: "122",
  name: "Tetris",
  file: "Tetris (U) [!].smc",
  color: "#3498db",
  image: "Pac-Man (PAL).png",
  system: "snes",
  category: "puzzle"
},
{
  id: "123",
  name: "Tetris Attack",
  file: "Tetris Attack (U) [!].smc",
  color: "#9b59b6",
  image: null,
  system: "snes",
  category: "puzzle"
},
{
  id: "124",
  name: "Kirby's Dream Land 3",
  file: "Kirby's Dream Land 3 (U) [!].smc",
  color: "#ff69b4",
  image: null,
  system: "snes",
  category: "action"
},
{
  id: "125",
  name: "Yoshi's Island",
  file: "Super Mario World 2 - Yoshi's Island (U) [!].smc",
  color: "#27ae60",
  image: "Super Mario World 2 - Yoshi's Island (PAL).png",
  system: "snes",
  category: "action"
},
{
  id: "126",
  name: "Star Fox",
  file: "Star Fox (U) [!].smc",
  color: "#27ae60",
  image: null,
  system: "snes",
  category: "action"
},
{
  id: "127",
  name: "Gradius",
  file: "Gradius (U) [!].smc",
  color: "#3498db",
  image: null,
  system: "snes",
  category: "action"
},
{
  id: "128",
  name: "R-Type",
  file: "R-Type (U) [!].smc",
  color: "#9b59b6",
  image: null,
  system: "snes",
  category: "action"
},
{
  id: "129",
  name: "Pac-Man",
  file: "Pac-Man (U) [!].smc",
  color: "#f39c12",
  image: null,
  system: "snes",
  category: "action"
},
{
  id: "130",
  name: "Double Dragon",
  file: "Double Dragon (U) [!].smc",
  color: "#e74c3c",
  image: null,
  system: "snes",
  category: "action"
},
{
  id: "131",
  name: "Sonic the Hedgehog 2",
  file: "Sonic the Hedgehog 2 (U) [!].smc",
  color: "#3498db",
  image: null,
  system: "snes",
  category: "action"
},
{
  id: "132",
  name: "Sonic the Hedgehog",
  file: "Sonic the Hedgehog (U) [!].smc",
  color: "#3498db",
  image: null,
  system: "snes",
  category: "action"
},
{
  id: "133",
  name: "Gunstar Heroes",
  file: "Gunstar Heroes (U) [!].smc",
  color: "#e74c3c",
  image: null,
  system: "snes",
  category: "action"
},
{
  id: "134",
  name: "V-force",
  file: "V-force (U) [!].smc",
  color: "#3498db",
  image: null,
  system: "snes",
  category: "action"
},
{
  id: "135",
  name: "Panzer Bandit",
  file: "Panzer Bandit (U) [!].smc",
  color: "#f39c12",
  image: null,
  system: "snes",
  category: "action"
},
{
  id: "136",
  name: "Ultimate Mortal Kombat 3",
  file: "Ultimate Mortal Kombat 3 (U) [!].smc",
  color: "#8b0000",
  image: null,
  system: "snes",
  category: "fighting"
}
];

export default { GAMES, CATEGORIES, CATEGORY_SECTIONS, CATEGORIES_INFO, NAVBAR_CATEGORIES };

