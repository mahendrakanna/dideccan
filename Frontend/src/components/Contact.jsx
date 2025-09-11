import React from "react";
import "../styles/Contact.css";
import { Phone, Mail, MapPin } from "react-feather";
import LoginForm from "./Navbar/LoginForm";

function Contact() {
  return (
    <>
    <h1 className="title-1">Contact Us</h1>
    
    <div className="contact-container">
      

      <div className="contact-wrapper">
        <div className="content">
          <h2>Why you should contact us!</h2>
          <p> At DIDeccan India, we believe every child deserves a bright future
            and it starts with quality education.</p>
          <ul className="info-list">
            <li>
              <Phone size={20} color="#0056a0" className="contact-icons" />
              <strong>+91 7981559252</strong>
            </li>
            <li>
              <Mail size={20} color="#0056a0" className="contact-icons" />
              <strong>hr@dideccanindiatech.com</strong>
            </li>
            <li>
              <MapPin size={25} color="#0056a0" className="contact-icons" />
              <strong>
               KKR Heights, D.No. 23-8-158, Flat Nos. 401 & 402, <br></br>Air Bypass Road,
                      Tirupati, Andhra Pradesh, India – 517501
              </strong>
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
