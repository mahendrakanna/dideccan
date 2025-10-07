import React from "react";
import "../styles/Contact.css";
import { Phone, Mail, MapPin } from "react-feather";
import LoginForm from "./Navbar/LoginForm";

function Contact() {
 
  const handlePhoneClick = (e) => {
    e.preventDefault();
    window.location.href = "tel:+917981559252";
  };


  const handleLocationClick = (e) => {
    e.preventDefault();
    window.open(
      "https://www.google.com/maps/search/?api=1&query=KKR+Heights+D.No.+23-8-158+Flat+Nos.+401+&+402+Air+Bypass+Road+Tirupati+Andhra+Pradesh+517501",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <>
      <h1 className="title-1">Contact Us</h1>

      <div className="contact-container">
        <div className="contact-wrapper">
          <div className="content">
            <h2>Why you should contact us!</h2>
            <p>
              At DIDeccan India, we believe every child deserves a bright future
              and it starts with quality education.
            </p>
            <ul className="info-list">
              <li>
                <a href="#phone" onClick={handlePhoneClick} className="contact-link">
                  <Phone size={20} color="#0056a0" className="contact-icons" />
                  <strong>+91 7981559252</strong>
                </a>
              </li>
              <li>
                <a
                  href="mailto:hr@dideccanindia.com?subject=Inquiry%20from%20Website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <Mail size={20} color="#0056a0" className="contact-icons" />
                  <strong>hr@dideccanindia.com</strong>
                </a>
              </li>
              <li>
                <a href="#location" onClick={handleLocationClick} className="contact-link">
                  <MapPin size={25} color="#0056a0" className="contact-icons" />
                  <strong >
                    KKR Heights, Flat Nos. 401 & 402, D.No. 23-8-158, Air Bypass Rd,
                     New Balaji Colony, Tirupati, Andhra Pradesh 517502
                  </strong>
                </a>
              </li>
            </ul>
          </div>

          <div className="form-inline">
            <LoginForm alwaysOpen={true} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
