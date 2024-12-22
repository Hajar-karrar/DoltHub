import React,{useState} from 'react'
import { Link } from 'react-router-dom'

export default function Navv() {
    const [isSidebarVisible, setSidebarVisible] = useState(false); // State for sidebar visibility
    
        // Toggle Sidebar visibility
        const toggleSidebar = () => {
          setSidebarVisible(!isSidebarVisible);
        };
  return (
    <div>
      <header className="hii">
            <div className="logo">DoItHub</div>
            <div className="hamburger" onClick={toggleSidebar}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav>

                <ul className={`sidebar ${isSidebarVisible ? "visible" : ""}`}>
                     <li className='lii' onClick={() => setSidebarVisible(false)}><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a></li>
                     <li className='lii'><Link to="/">Home</Link></li>
                     <li className='lii'><Link to="/control">Car management</Link></li>
                     <li className='lii'> <Link to="/control/sal">List-Salaries</Link> </li>
                     <li className='lii'><Link to="/control/recherche">Search-Salaries</Link></li>
                 </ul>
                 <ul className="nav-menu">
                     <li className='lii'><Link to="/">Home</Link></li>
                     <li className='lii'><Link to="/control">Car management</Link></li>
                     <li className='lii'> <Link to="/control/sal">List-Salaries</Link> </li>
                     <li className='lii'><Link to="/control/recherche">Search-Salaries</Link></li>
                 </ul>
            </nav>
        </header>
    </div>
  )
}
