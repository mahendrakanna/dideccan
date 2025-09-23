// import React from "react";
// import "../../styles/Navbar/AboutPanel.css";

// function AboutPage() {
//   return (
//     <section className="about-page">
//       <h1>About DIDeccanIndia</h1>
//       <p>
//         DIDeccanIndia is one of the fastest-growing product-based technology
//         companies based in Andhra Pradesh, India. Our mission is to drive
//         innovation, promote local employment, and encourage the use of
//         Indian-made products across the country.
//       </p>
//       <p>
//         We believe in building solutions that not only serve our community
//         but also contribute to the growth of a self-reliant India.
//       </p>
//       <p>
//         Our focus is on creating impactful digital products that solve
//         real-world problems and empower individuals, students, and
//         businesses alike.
//       </p>
//     </section>
//   );
// }

// export default AboutPage;


import React from "react";
import "../../styles/Navbar/AboutPanel.css";

function AboutPanel() {
  return (
    <div className="about-container">
      <div className="section">
        <h2 className="heading">About DIDeccanIndia</h2>
        <p>
          DIDeccanIndia is a rapidly growing product-based technology company
          headquartered in Andhra Pradesh, India. Founded with the vision to
          drive technological innovation while promoting local talent, we are
          committed to building products that create tangible value for our
          users and the broader community.
        </p>
        <p>
          Our mission goes beyond business growth—we aim to foster a culture of
          innovation, encourage entrepreneurship, and contribute to a
          self-reliant India by promoting homegrown technologies. By focusing on
          Indian-made products and services, we support local industries and
          create opportunities for skilled professionals across the country.
        </p>
      </div>

      <div className="section">
        <h2 className="heading">Our Values</h2>
        <ul className="list">
          <li>
            <strong>Innovation:</strong> We constantly explore new ideas and
            technologies to solve pressing problems in unique ways.
          </li>
          <li>
            <strong>Community Focus:</strong> Every product and service we
            develop is designed to benefit individuals, students, and
            businesses, empowering them to achieve their goals efficiently.
          </li>
          <li>
            <strong>Quality & Reliability:</strong> We prioritize delivering
            high-quality digital solutions that our customers can trust.
          </li>
          <li>
            <strong>Sustainability:</strong> We believe in sustainable
            practices and aim to create products that have a positive impact on
            society and the environment.
          </li>
        </ul>
      </div>

      <div className="section">
        <h2 className="heading">What We Do</h2>
        <ul className="list">
          <li>
            <strong>Educational Technology:</strong> Tools and platforms that
            enhance learning experiences for students and educators.
          </li>
          <li>
            <strong>Business Solutions:</strong> Scalable digital solutions
            that streamline operations and drive growth for businesses of all
            sizes.
          </li>
          <li>
            <strong>AI & Data Science:</strong> Leveraging artificial
            intelligence and data analytics to provide smarter, data-driven
            insights.
          </li>
          <li>
            <strong>Software Development:</strong> Creating custom applications
            and software products tailored to the unique needs of our clients.
          </li>
        </ul>
      </div>

      <div className="section">
        <h2 className="heading">Our Vision</h2>
        <p>
          We envision a future where Indian technology products are recognized
          globally for their innovation, reliability, and positive societal
          impact. Through our work, we aim to inspire a generation of tech
          entrepreneurs, students, and professionals to believe in the power of
          Indian innovation.
        </p>
      </div>

      <div className="section">
        <h2 className="heading">Join Us on Our Journey</h2>
        <p>
          Whether you are a student, a professional, or a business looking for
          innovative solutions, DIDeccanIndia is committed to helping you
          achieve more with technology. Together, we can build a more
          self-reliant and digitally empowered India.
        </p>
      </div>
    </div>
  );
}

export default AboutPanel;

