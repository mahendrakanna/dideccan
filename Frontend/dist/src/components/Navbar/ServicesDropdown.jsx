import React, { useState, useEffect, useRef } from 'react';
import { RefreshCcw, Monitor, Smartphone, CheckCircle, Cpu } from 'react-feather';
import '../../styles/Navbar/ServicesDropdown.css';

 function ServicesDropdown() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggle = () => {
    setOpen(prev => !prev);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <li className="clickable services-dropdown-container" ref={dropdownRef}>
      <span onClick={handleToggle}>Services</span>
      <div className={`services-dropdown ${open ? 'show' : ''}`}>
        <h3>Our Services</h3>
        <p>
          At DIDeccanIndia, we not only build our own innovative products
          but also offer a range of technology services to help businesses grow,
          scale, and succeed in the digital world.
        </p>

        <ul>
          <li>
            <strong><RefreshCcw size={15} color="orange"  /> DevOps (AWS)</strong>
            <p>
              We offer DevOps solutions with a strong focus on Amazon Web Services (AWS) to ensure fast, secure, 
              and scalable infrastructure. Our services include:<br />
              • Cloud architecture & deployment <br />
              • CI/CD pipeline setup <br />
              • Infrastructure automation <br />
              • Monitoring & optimization
            </p>
          </li>

          <li>
            <strong><Monitor size={15} color="blue"  /> <Smartphone size={15} color="blue" /> Web & Mobile Development</strong>
            <p>
              We develop high-performance web and mobile applications using modern technologies:<br />
              • React.js for web interfaces <br />
              • React Native for mobile apps <br />
              • Python for backend & APIs
            </p>
          </li>

          <li>
            <strong><CheckCircle size={15} color="green"  /> Software Testing</strong>
            <p>
              Our QA team ensures your applications are bug-free, reliable, and user-ready:<br />
              • Manual & automated testing <br />
              • Performance & load testing <br />
              • Compatibility & security testing
            </p>
          </li>

          <li>
            <strong><Cpu size={15} color="purple"  /> AI & Data Science</strong>
            <p>
              We help businesses unlock the power of data through:<br />
              • Machine learning <br />
              • Predictive analytics <br />
              • Natural language processing <br />
              • Data visualization
            </p>
          </li>
        </ul>
      </div>
    </li>
  );
}
export default  ServicesDropdown


