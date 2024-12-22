import React,{useState} from 'react'
import { Link } from 'react-router-dom'

export default function Navv() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State for the menu toggle
    
        const toggleMenu = () => {
            setIsMenuOpen(!isMenuOpen); // Toggle menu state
        };
    
  return (
    <div>
      <header className="hii">
            <div className="logo">DoItHub</div>
            <div className="hamburger" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
                <Link to="/">Home</Link>
                <Link to="/control">Gestion-voiture</Link>
                <Link to="/control/sal">Liste-Salaries</Link>
                <Link to="/control/recherche">Recherche-Salaries</Link>
            </nav>
        </header>
    </div>
  )
}
