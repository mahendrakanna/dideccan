import React from "react";
import "../styles/ClientsSection.css";
import { User, Users, BarChart2, Video, Smartphone } from "react-feather";

const ClientsSection = () => {
  return (
    <div className="clients-section" id="clients">
      <div className="clients-header">
        <h2>Our Clients & Projects</h2>
      </div>

      <div className="client-card">
        <h3 className="client-name">Edupravahaa</h3>
        <p className="client-description">

           Edupravahaa is an innovative education initiative focused on making learning more accessible, 
           engaging, and effective for students across different levels. Their vision is to empower students and 
           educators with a modern, digital-first learning experience that goes beyond traditional classroom boundaries.

        </p>

       
        <div className="key-features">
           <h4 >Key Features Delivered</h4>
          <div className="feature">
            <User className="client-icons" />
            <span>Student-Centric Learning – Easy access to lessons, tests, assignments, and progress tracking.</span>
          </div>
          <div className="feature">
            <Users className="client-icons" />
            <span>Teacher Tools – Course creation, test management, and performance insights.</span>
          </div>
          <div className="feature">
            <BarChart2 className="client-icons"/>
            <span>Smart Dashboards – Visual reports on learning trends, time spent, and results.</span>
          </div>
          <div className="feature">
            <Video className="client-icons" />
            <span>Live Classes – Real-time online classroom integration.</span>
          </div>
          <div className="feature">
            <Smartphone className="client-icons" />
            <span>Multi-Device Access – Fully responsive for web and mobile.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsSection;
