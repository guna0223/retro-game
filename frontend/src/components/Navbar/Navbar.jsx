import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/Navbar.css";

const CATEGORIES = [
    { id: "spiderman", name: "Spider-Man", path: "/category/spiderman" },
    { id: "pokemon", name: "Pokemon", path: "/category/pokemon" },
    { id: "ps1", name: "PS1", path: "/category/ps1" },
    { id: "snes", name: "SNES", path: "/category/snes" },
    { id: "gba", name: "GBA", path: "/category/gba" }
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
                    Retro SNES Arcade
                </Link>

                <div className="navbar-links">
                    <Link to="/" className="nav-link">
                        Home
                    </Link>
                    
                    <button className="nav-link category-btn" onClick={toggleCategories}>
                        Category
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
                        🔍
                    </button>
                </form>
            </div>
        </nav>
    );
}

export default Navbar;
