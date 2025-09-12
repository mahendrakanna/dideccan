import React from "react";
import "../styles/Courses.css";
import LoginForm from './Navbar/LoginForm'
import {
  Award,
  BookOpen,
  TrendingUp,
  CheckCircle,
  DollarSign,
  Clock,
  Briefcase,
  Check
} from "react-feather";

const Services = () => {
  return (
    <div className="courses-section">
      <h1 className="courses-title">Courses</h1>

      <div className="courses-box">
        {/* Intro */}
        <div className="intro-text">
          <h2>
            Launch Your Tech Career with Our 6-Months Coaching Program!{" "}
            {/* <Briefcase className="icon" /> */}
          </h2>
          <p>
            We're excited to announce a comprehensive coaching opportunity designed
            to shape the next generation of tech professionals! Whether you're a fresher
            or someone looking to switch domains, this is your chance to get trained,
            work on real-time projects, and potentially land a permanent position with us!
          </p>
        </div>

       
        <div className="program-grid">
          
          <div className="program-card">
            <h3><Award className=" heading-icon" /> Program Highlights</h3>
            <ul>
              <li><DollarSign className="program-icon" /> Coaching Fee: ₹50,000</li>
              <li><Clock className="program-icon" /> Duration: 6 months (includes internship)</li>
              <li><Briefcase className="program-icon1" /> Job Opportunity: Permanent role based on performance or internship certificate</li>
            </ul>
          </div>

          
          <div className="program-card">
            <h3><BookOpen className="heading-icon" /> Available Courses</h3>
            <ul>
              <li><Check className="program-icon" /> Manual & Automation Testing</li>
              <li><Check className="program-icon" /> DevOps</li>
              <li><Check className="program-icon" /> React.js & React Native</li>
              <li><Check className="program-icon" /> Python with Django</li>
            </ul>

            <h3><TrendingUp className="heading-icon" /> Coming Soon</h3>
            <ul>
              <li><Check className="program-icon" /> Data Science</li>
              <li><Check className="program-icon" /> AI & Machine Learning</li>
            </ul>
          </div>

          <div className="program-card">
            <h3><CheckCircle className="heading-icon" /> Why Choose Us?</h3>
            <ul>
              <li><Check className="program-icon" /> Real-world project experience</li>
              <li><Check className="program-icon" /> Mentorship from professionals</li>
              <li><Check className="program-icon" /> Career guidance & placement support</li>
            </ul>
          </div>
        </div>

   
        <div className="program-cta">
         <LoginForm/>
        </div>
      </div>
    </div>
  );
};

export default Services;
