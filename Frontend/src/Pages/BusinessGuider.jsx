import React from "react";
import "../styles/Product.css"; 
import bannerimage3 from "../assets/images/bannerimage3.png"; // use your own image

function BusinessGuider() {
  return (
    <div>
      <h2 className="heading">Our Products</h2>
      <div className="product-page"> 
        <div className="product-card"> 
          <div className="product-image">
            <img src={bannerimage3} alt="Business Guider" />
          </div>
          <div className="product-content">
            <h1>Business Guider</h1>
            <p>
              An idea-sharing platform for aspiring entrepreneurs. 
              Business Guider presents innovative, trending, and 
              in-demand business ideas, helping individuals take 
              their first step toward building a successful venture.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessGuider;
