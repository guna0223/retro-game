import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { NAVBAR_CATEGORIES } from "../Data/Data";
import "../css/Navbar.css";

function Navbar() {
    const [searchQuery, setSearchQuery] = useState("");
    const [showCategories, setShowCategories] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

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

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
        setShowCategories(false);
    };

    // Handle home navigation - force reset if already on home page
    const handleHomeClick = (e) => {
        closeMobileMenu();
        if (location.pathname === '/') {
            e.preventDefault();
            // Force a re-render by navigating with a state flag
            navigate('/', { state: { reset: Date.now() }, replace: true });
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={handleHomeClick}>
                    Retro Game Vault
                </Link>

                <button className="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle menu">
                    <i className={`fas fa-${mobileMenuOpen ? 'times' : 'bars'}`}></i>
                </button>

                <div className={`navbar-links ${mobileMenuOpen ? 'open' : ''}`}>
                    <Link to="/" className="nav-link" onClick={handleHomeClick}>
                        Home
                    </Link>
                    
                    <button className="nav-link category-btn" onClick={toggleCategories}>
                        Category <i className={`fas fa-chevron-${showCategories ? 'up' : 'down'}`}></i>
                    </button>
                    
                    <Link to="/about" className="nav-link" onClick={closeMobileMenu}>
                        About
                    </Link>
                </div>

                {showCategories && (
                    <div className="categories-panel">
                        {NAVBAR_CATEGORIES.map((category) => (
                            <Link
                                key={category.id}
                                to={category.path}
                                className="category-item"
                                onClick={closeMobileMenu}
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
