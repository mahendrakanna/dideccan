import React, { useState, useEffect, useRef } from "react";
import "../../styles/Navbar/AboutPanel.css";

 function AboutPanel() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        setOpen(false); 
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
    document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <li className="about-wrapper" ref={panelRef}>
      <span onClick={() => setOpen((prev) => !prev)}>About</span>
      <div className={`about-content ${open ? "show" : ""}`}>
        <h2>About DIDeccanIndia</h2>
        <p>
          DIDeccanIndia is one of the fastest-growing product-based technology
          companies based in Andhra Pradesh, India. Our mission is to drive
          innovation, promote local employment, and encourage the use of
          Indian-made products across the country.
        </p>
        <p>
          We believe in building solutions that not only serve our community
          but also contribute to the growth of a self-reliant India.
        </p>
        <p>
          Our focus is on creating impactful digital products that solve
          real-world problems and empower individuals, students, and
          businesses alike.
        </p>
      </div>
    </li>
  );
}
export default AboutPanel