
import React, { useState, useEffect } from "react";
import "../styles/BackToTop.css";
import { Triangle } from "react-feather";

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400 ) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button className="back-to-top" onClick={scrollToTop}>
        Back To Top <Triangle size={16} color="white" />
      </button>
    )
  );
}

export default BackToTop;
