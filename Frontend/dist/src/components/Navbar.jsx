
// import "../styles/Navbar.css";
// import {  Search } from "react-feather";
// import logo from "../assets/images/logo.png";
// import { useNavigate } from "react-router-dom"; 
// import ServicesDropdown from "../components/Navbar/ServicesDropdown";
// import AboutPanel from "../components/Navbar/AboutPanel";


//   function Navbar() {
//   const navigate = useNavigate(); 

//   const handlehome= () => {
//     navigate("/"); 
//   };
//   const handlecontact = () => {
//     navigate("/contact"); 
//   };
//   return (
//     <>
//       <nav className="navbar">
//         <div className="logo">
//           <img src={logo} alt="logo" height="65px" width="65px" />
//           <h1 className="title">DIDeccanIndia</h1>
//         </div>

       
//         <ul className="nav-links">
          
//           <li onClick={handlehome}>Home</li>
//           <AboutPanel />
//           <ServicesDropdown />
//           <li onClick={handlecontact}>Contact us</li>
         
          
//         </ul>

        
//         <div className="nav-right">
//           <div className="searchcon">
//             <input type="text" placeholder="Search..." className="search" />
//             <Search size={20} color="gray" className="searchicon" />
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Navbar;


import "../styles/Navbar.css";
import { Search } from "react-feather";
import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom"; 
import ServicesDropdown from "../components/Navbar/ServicesDropdown";
import AboutPanel from "../components/Navbar/AboutPanel";

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
            <AboutPanel /> 
            {/* Dropdown for Services */}
            <ServicesDropdown />
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
