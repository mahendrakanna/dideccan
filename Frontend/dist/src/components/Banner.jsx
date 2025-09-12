import React, { useState, useEffect } from "react";
import "../styles/Banner.css";
import bannerimage1 from '../assets/images/bannerimage1.png';
import bannerimage2 from '../assets/images/bannerimage2.png';
import bannerimage3 from '../assets/images/bannerimage3.png';
import { useNavigate } from "react-router-dom";

const slides = [
  {
    title: "Experience the power of Digital Learning",
    description:
      "Access high-quality educational videos designed for students like you. Watch, learn, and review at your own pace, on any device. Learning has never been more flexible.",
    button: "Learn more",
    image: bannerimage1,
    
  },
  {
    title: "Explore Endless Opportunities",
    description:
      "Discover new skills, expand your knowledge, and unlock your true potential with our platform.",
    button: "Get Started",
    image: bannerimage2,
  },
  {
    title: "Learn Anytime, Anywhere",
    description:
      "Flexible learning designed to fit your lifestyle. Join now and take control of your future.",
    button: "Join Now",
    image: bannerimage3,
  },
];

function Banner() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div style={{ backgroundColor: "#003366" }}>
        <div className="banner-slider" >
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`banner-slide ${index === current ? "active" : ""}`}
              style={{ backgroundColor: slide.bgColor }}
            >
              <div className="banner-content">
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>
                <button onClick={() => navigate("/contact")}>{slide.button}</button>
              </div>
              <div className="banner-image">
                <img src={slide.image} alt={slide.title}  />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="Container">
        <p><span className="highlight">DIDeccanIndia</span> empowers students to master<span className="highlight"> technology, </span>  
          transform their learning journey, and gain <span className="highlight"> experiences </span> that prepare them for a   <span className="highlight"> dynamic future </span>.</p>
      </div>
    </>
  );
}

export default Banner;
