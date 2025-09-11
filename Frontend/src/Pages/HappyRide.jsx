import React from "react";
import "../styles/Product.css"; 
import Happyrideimage from "../assets/images/Happyrideimage1.png";

function HappyRide() {
  return (
    <div>
      <h2 className="heading">Our Products</h2>
      <div className="product-page"> 
        <div className="product-card"> 
          <div className="product-image">
            <img src={Happyrideimage} alt="Happy Ride"  />
          </div>
          <div className="product-content">
            <h1>Happy Ride</h1>
            <p>
              Happy Ride is a reliable and user-friendly ride booking platform.
              It connects passengers with trusted drivers, offering safe,
              affordable, and comfortable travel experiences anytime, anywhere.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HappyRide;
