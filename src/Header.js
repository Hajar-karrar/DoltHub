import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from './ThemeContext';
import './Header.css';

export default function Header() {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State for the menu toggle

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle menu state
    };

    return (
        <header className="hii">
            <div className="logo">DoItHub</div>
            <div className="hamburger" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
                <Link to="/">Home</Link>
                <Link to="/calcul">Calculatrice</Link>
                <Link to="/list">Liste-Profiles</Link>
                <Link to="/api">API-Country</Link>
                <Link to="/todo">To-Do List</Link>
                <Link to="/control">Control</Link>
            </nav>
            <div className="theme-toggle" onClick={toggleTheme}>
                <img
                    src={isDarkMode ? 'sun.png' : 'moon.png'}
                    alt="Toggle Theme"
                    style={{ cursor: 'pointer', width: '30px' }}
                />
            </div>
        </header>
    );
}
