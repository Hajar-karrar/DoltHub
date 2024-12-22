import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from './ThemeContext';
import './Header.css';

export default function Header() {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);
    const [isSidebarVisible, setSidebarVisible] = useState(false); // State for sidebar visibility

    // Toggle Sidebar visibility
    const toggleSidebar = () => {
      setSidebarVisible(!isSidebarVisible);
    };
    return (
        <header className="hii">
            <div className="logo">DoItHub</div>
            <div className="hamburger" onClick={toggleSidebar}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav >

            <ul className={`sidebar ${isSidebarVisible ? "visible" : ""}`}>
                <li className='lii' onClick={() => setSidebarVisible(false)}><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a></li>
                <li className='lii'><Link to="/">Home</Link></li>
                <li className='lii'><Link to="/calcul">Calculator</Link></li>
                <li className='lii'> <Link to="/list">List-Profiles</Link></li>
                <li className='lii'><Link to="/api">API-Country</Link></li>
                <li className='lii'><Link to="/todo">To-Do List</Link></li>
                <li className='lii'><Link to="/control">Control</Link></li>
               </ul>
               <ul className='nav-menu'>
                <li className='lii hand ' ><Link to="/">Home</Link></li>
                <li className='lii hand'><Link to="/calcul">Calculator</Link></li>
                <li className='lii hand'> <Link to="/list">List-Profiles</Link></li>
                <li className='lii hand'><Link to="/api">API-Country</Link></li>
                <li className='lii hand'><Link to="/todo">To-Do List</Link></li>
                <li className='lii hand'><Link to="/control">Control</Link></li>
                
               </ul>
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


