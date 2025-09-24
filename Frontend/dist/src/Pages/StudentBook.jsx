import React from "react";
import "../styles/Product.css";
import studentbook from "../assets/images/studentbook.png";


function StudentBook() {
  return (
    <div>
      <h2 className="product-heading">Our Products</h2>
      <div className="product-page"> 
        <div className="product-card"> 
          <div className="product-image">
            <img src={studentbook} alt="Student Book" />
          </div>
          <div className="product-content">
            <h1>Student Book</h1>
            <p>
              A web and mobile-based learning application designed to transform
              the educational experience. Student Book offers an interactive,
              accessible, and future-ready platform for students across
              different academic levels.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentBook;
