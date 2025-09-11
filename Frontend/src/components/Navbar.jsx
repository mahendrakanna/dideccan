
import "../styles/Navbar.css";
import {  Search } from "react-feather";
import logo from "../assets/images/logo.png";
import { useNavigate } from "react-router-dom"; 
import ServicesDropdown from "../components/Navbar/ServicesDropdown";
import AboutPanel from "../components/Navbar/AboutPanel";


  function Navbar() {
  const navigate = useNavigate(); 

  const handlehome= () => {
    navigate("/"); 
  };
  const handlecontact = () => {
    navigate("/contact"); 
  };
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" height="65px" width="65px" />
          <h1 className="title">DIDeccanIndia</h1>
        </div>

       
        <ul className="nav-links">
          
          <li onClick={handlehome}>Home</li>
          <AboutPanel />
          <ServicesDropdown />
          <li onClick={handlecontact}>Contact us</li>
         
          
        </ul>

        
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
