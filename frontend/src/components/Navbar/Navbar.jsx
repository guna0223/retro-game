import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/Navbar.css";

const CATEGORIES = [
    { id: "action", name: "Action", path: "/category/action" },
    { id: "racing", name: "Racing", path: "/category/racing" },
    { id: "fighting", name: "Fighting", path: "/category/fighting" },
    { id: "rpg", name: "RPG", path: "/category/rpg" },
    { id: "adventure", name: "Adventure", path: "/category/adventure" },
    { id: "snes", name: "SNES", path: "/category/snes" },
    { id: "gba", name: "GBA", path: "/category/gba" },
    { id: "nds", name: "NDS", path: "/category/nds" },
    { id: "nes", name: "NES", path: "/category/nes" }
];

function Navbar() {
    const [searchQuery, setSearchQuery] = useState("");
    const [showCategories, setShowCategories] = useState(false);
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
            setSearchQuery("");
        }
    };

    const toggleCategories = () => {
        setShowCategories(!showCategories);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    Retro Game Vault
                </Link>

                <div className="navbar-links">
                    <Link to="/" className="nav-link">
                        Home
                    </Link>
                    
                    <button className="nav-link category-btn" onClick={toggleCategories}>
                        Category <i className={`fas fa-chevron-${showCategories ? 'up' : 'down'}`}></i>
                    </button>
                    
                    <Link to="/about" className="nav-link">
                        About
                    </Link>
                </div>

                {showCategories && (
                    <div className="categories-panel">
                        {CATEGORIES.map((category) => (
                            <Link
                                key={category.id}
                                to={category.path}
                                className="category-item"
                                onClick={() => setShowCategories(false)}
                            >
                                {category.name}
                            </Link>
                        ))}
                    </div>
                )}

                <form className="navbar-search" onSubmit={handleSearch}>
                    <input
                        type="text"
                        placeholder="Search Game..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="search-input"
                    />
                    <button type="submit" className="search-btn">
                        <i className="fas fa-search"></i>
                    </button>
                </form>
            </div>
        </nav>
    );
}

export default Navbar;
