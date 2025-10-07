import "../styles/Navbar.css";
import { Search } from "react-feather";
import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom"; 


function Navbar() {
  return (
    <>
      <nav className="navbar">
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="logo" height="65px" width="65px" />
          <h1 className="title">DIDeccanIndia</h1>
        </div>

        {/* Nav Links */}
        <ul className="nav-links">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? "active-link" : ""}
              end
            >
              Home
            </NavLink>
          </li>
           
            <li>
            <NavLink 
              to="/About" 
              className={({ isActive }) => isActive ? "active-link" : ""}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/Services" 
              className={({ isActive }) => isActive ? "active-link" : ""}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => isActive ? "active-link" : ""}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>

        {/* Search Box */}
        <div className="nav-right">
          <div className="searchcon">
            <input type="text" placeholder="Search..." className="search" />
            <Search size={20} color="gray" className="searchicon" />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
