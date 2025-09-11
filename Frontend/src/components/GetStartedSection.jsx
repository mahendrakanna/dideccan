import React from "react";
import { useNavigate } from "react-router-dom"; 
import "../styles/GetStartedSection.css";
import Educationimage1 from "../assets/images/Educationimage1.png";

const GetStartedSection = () => {
  const navigate = useNavigate(); 

  const handleContactClick = () => {
    navigate("/contact"); 
  };

  return (
    <div className="get-started-container">
      <div className="get-started-card">
        <div className="get-started-image">
          <img src={Educationimage1} alt="Learning Illustration" />
        </div>
        <div className="get-started-content">
          <h2>Ready to get started?</h2>
          <p>
            Give your child the tools to succeed with fun, engaging, and
            effective video-based learning. Our expert-designed lessons make
            complex concepts easy to understand and enjoyable to learn.
            Whether you're starting a new subject or building stronger
            foundations, our platform is here to support every step of the
            educational journey. Start today and see the difference
            personalized, high-quality learning can make.
          </p>
          <button className="get-started-btn" onClick={handleContactClick}>
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStartedSection;
