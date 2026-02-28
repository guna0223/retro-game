import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/Navbar.css";

const CATEGORIES = [
    { id: "spiderman", name: "Spider-Man Games", path: "/category/spiderman" },
    { id: "pokemon", name: "Pokemon Games", path: "/category/pokemon" },
    { id: "ps1", name: "PS1 Games", path: "/category/ps1" },
    { id: "snes", name: "SNES Games", path: "/category/snes" },
    { id: "gba", name: "GBA Games", path: "/category/gba" }
];

function Navbar() {
    const [searchQuery, setSearchQuery] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
            setSearchQuery("");
        }
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

                    <div
                        className="nav-dropdown"
                        onMouseEnter={() => setShowDropdown(true)}
                        onMouseLeave={() => setShowDropdown(false)}
                    >
                        <button className="nav-dropdown-btn">
                            Category ▼
                        </button>
                        {showDropdown && (
                            <div className="dropdown-menu">
                                {CATEGORIES.map((category) => (
                                    <Link
                                        key={category.id}
                                        to={category.path}
                                        className="dropdown-item"
                                    >
                                        {category.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <form className="navbar-search" onSubmit={handleSearch}>
                    <input
                        type="text"
                        placeholder="Search Game..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="search-input"
                    />
                    <button type="submit" className="search-btn">
                        🔍
                    </button>
                </form>
            </div>
        </nav>
    );
}

export default Navbar;
