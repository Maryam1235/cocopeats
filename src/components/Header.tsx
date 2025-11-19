import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Header.css';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="header">
            <div className="header-container">
                <div className="logo-container">
                    <img src="/logo.jpg" alt="Nembo ya Bidhaa za COCO" className="header-logo" />
                    <span className="header-title">Bidhaa za COCO</span>
                </div>
                
                <button 
                    className="mobile-menu-button"
                    onClick={toggleMenu}
                    aria-label="Fungua menyu ya urambazaji"
                >
                    ☰
                </button>
                
                <nav>
                    <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
                        <li className="nav-item">
                            <Link 
                                to="/" 
                                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                                onClick={closeMenu}
                            >
                                Nyumbani
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                to="/Bidhaa" 
                                className={`nav-link ${location.pathname === '/Bidhaa' ? 'active' : ''}`}
                                onClick={closeMenu}
                            >
                                Bidhaa
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                to="/Matumizi" 
                                className={`nav-link ${location.pathname === '/Matumizi' ? 'active' : ''}`}
                                onClick={closeMenu}
                            >
                                Matumizi
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                to="/Kuhusu" 
                                className={`nav-link ${location.pathname === '/kuhusu' ? 'active' : ''}`}
                                onClick={closeMenu}
                            >
                                Kuhusu Sisi
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                to="/Wasiliana" 
                                className={`nav-link ${location.pathname === '/wasiliana' ? 'active' : ''}`}
                                onClick={closeMenu}
                            >
                                Wasiliana
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;