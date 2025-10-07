import React from "react";
import "../styles/Footer.css";
import { Facebook,  Linkedin, Instagram } from "react-feather";
import logo from "../assets/images/logo.png";
import { useNavigate } from "react-router-dom"; 


const Footer = () => {
  const navigate = useNavigate();
  const handlestudentbook = () => {
    navigate("/StudentBook"); 
  };
   const handlehappyride= () => {
    navigate("/HappyRide"); 
  };
  const handlebusinessguider= () => {
    navigate("/BusinessGuider"); 
  };
  const handleFAQ= () => {
    navigate("/FAQ"); 
  };
   const handlePrivacyPolicy= () => {
    navigate("/PrivacyPolicy"); 
  };
  const handleTermsConditions= () => {
    navigate("/TermsConditions"); 
  };
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>DIDeccan India Software Technologies Pvt  Ltd</h3>
          <ul>
            <li>Educational Platform</li>
            <li>Raid booking Platform</li>
            <li>Business awareness Platform</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Product</h3>
          <ul>
            <li onClick={handlestudentbook} className="links">Student Book</li>
            <li onClick={handlebusinessguider} className="links">Business Guider</li>
            <li onClick={handlehappyride} className="links">Happy Ride</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Support</h3>
          <ul>
            <li onClick={handleFAQ} className="links">FAQ</li>
            <li onClick={handlePrivacyPolicy} className="links">Privacy Policy</li>
            <li onClick={handleTermsConditions} className="links">Terms & Conditions</li>
          </ul>
        </div>
        <div className="footer-column">
          <div className="footer-logo"><img src={logo} alt="logo" height="50px" width="50px"></img></div>
          <p>
            Access high-quality educational videos designed for students like
            you. Watch, learn, and review at your own pace, on any device.
            Learning has never been more flexible.
          </p>

          <ul className="social-icons">
            <li>
              <a href="https://www.facebook.com/people/DIDeccanIndia/61579760649607/" target="_blank" rel="noopener noreferrer">
                <Facebook size={20} />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/dideccan-india-software-technologies-pvt-ltd/" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/dideccanindia?igsh=N3F2bXVkeGNiZGEw"  target="_blank" rel="noopener noreferrer">
                <Instagram size={20} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        Designed and Developed By DIDeccan India
      </div>
    </footer>
  );
};

export default Footer;
