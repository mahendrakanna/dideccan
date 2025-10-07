import React from 'react';
import '../../styles/Navbar/ServicesDropdown.css';
import Webdevelopment from '../../assets/images/Webdevelopment.png';
import Devops from '../../assets/images/Devops.png';
import Softwaretesting from '../../assets/images/Softwaretesting.png';
import Aidatascience from '../../assets/images/Aidatascience.png';

function ServicesSection() {
  return (
    <section className="services-dropdown">
      <h3>Our Services</h3>
      <p>
       At DIDeccanIndia, we not only build our own innovative products but also offer a wide 
       range of technology services to help businesses grow, scale, and succeed in the digital 
       world. With a strong focus on innovation, quality, and customer-centric solutions,  we empower organizations to leverage 
       the latest technologies, optimize their operations, and achieve sustainable growth.
      </p>

      <ul className='services-container'>
        <li className="service-item">
          <img src={Devops} alt="DevOps" className="service-icon" />
          <div className="service-content">
            <strong className="sub-headings">DevOps (AWS)</strong>
            <p>
              We offer DevOps solutions with a strong focus on Amazon Web Services (AWS) to ensure fast, secure, 
              and scalable infrastructure. Our services include:<br />
              • Cloud architecture & deployment <br />
              • CI/CD pipeline setup <br />
              • Infrastructure automation <br />
              • Monitoring & optimization
            </p>
          </div>
        </li>

        <li className="service-item">
          
          <div className="service-content">
            <strong className="sub-headings">Web & Mobile Development</strong>
            <p>
              We develop high-performance web and mobile applications using modern technologies:<br />
              • React.js for web interfaces <br />
              • React Native for mobile apps <br />
              • Python for backend & APIs
            </p>
          </div>
          <img src={Webdevelopment} alt="Web & Mobile" className="service-imgright" />
        </li>

        <li className="service-item">
          <img src={Softwaretesting} alt="Software Testing" className="service-icon" />
          <div className="service-content">
            <strong className="sub-headings">Software Testing</strong>
            <p>
              Our QA team ensures your applications are bug-free, reliable, and user-ready:<br />
              • Manual & automated testing <br />
              • Performance & load testing <br />
              • Compatibility & security testing
            </p>
          </div>
        </li>

        <li className="service-item">
          
          <div className="service-content">
            <strong className="sub-headings">AI & Data Science</strong>
            <p>
              We help businesses unlock the power of data through:<br />
              • Machine learning <br />
              • Predictive analytics <br />
              • Natural language processing <br />
              • Data visualization
            </p>
          </div>
          <img src={Aidatascience} alt="AI & Data Science" className="service-imgright" />
        </li>
      </ul>
    </section>
  );
}

export default ServicesSection;




