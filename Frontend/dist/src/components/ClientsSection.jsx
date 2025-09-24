import React from "react";
import "../styles/ClientsSection.css";
import { User, Users, BarChart2, Video, Smartphone,BookOpen,FileText, Play,} from "react-feather";


import studentbook from "../assets/images/studentbook.png";
import Edupravahaa from '../assets/images/Edupravahaa.png';


const clientsData = [
  {
    name: "Student Book",
    logo: studentbook,
    description: `Student Book is a modern learning platform designed especially for students from Classes 6 to 10. 
    It provides structured lessons, interactive quizzes,
     and practice tests to make learning simple, engaging, and effective – anytime, anywhere.`,
    features: [
      { icon: <BookOpen />, text: "Curriculum-Aligned Lessons – Well-structured content tailored for Classes 6 to 10, covering core subjects." },
      { icon: <FileText />, text: " Quizzes & Practice Tests – Reinforce learning with chapter-wise quizzes and periodic tests that help students assess their understanding and improve gradually.." },
      { icon: <BarChart2 />, text: "Progress Tracking – Smart dashboards allow students to view their scores, identify weak areas, and track their academic growth." },
      { icon: < Play />, text: " Engaging & Self-Paced Learning  – Students can learn at their own speed with easy navigation through lessons, exercises, and assessments." },
      { icon: <Smartphone />, text: "Multi-Device Access – Fully responsive for web and mobile." },
    ],
  },
  {
    name: "Edupravahaa",
    logo: Edupravahaa,
    description: `Edupravahaa is an innovative education initiative focused on making learning more accessible, 
                  engaging, and effective for students across different levels. Their vision is to empower students and 
                  educators with a modern, digital-first learning experience that goes beyond traditional classroom boundaries.`,
    features: [
      { icon: <User />, text: "Student-Centric Learning – Easy access to lessons, tests, assignments, and progress tracking." },
      { icon: <Users />, text: "Teacher Tools – Course creation, test management, and performance insights." },
      { icon: <BarChart2 />, text: "Smart Dashboards – Visual reports on learning trends, time spent, and results." },
      { icon: <Video />, text: "Live Classes – Real-time online classroom integration." },
      { icon: <Smartphone />, text: "Multi-Device Access – Fully responsive for web and mobile." },
    ],
  }
  
];

const ClientsSection = () => {
  return (
    <div className="clients-section" id="clients">
      <div className="clients-header">
        <h2>Our Clients & Projects</h2>
      </div>

      <div className="clients-cards-container">
        {clientsData.map((client, index) => (
          <div className="client-card" key={index}>
            <div className="client-header">
              <img src={client.logo} alt={`${client.name} logo`} className="client-logo" />
              <h3 className="client-name">{client.name}</h3>
            </div>

            <p className="client-description">{client.description}</p>

            <div className="key-features">
              <h4>Key Features Delivered</h4>
              {client.features.map((feature, idx) => (
                <div className="feature" key={idx}>
                  <span className="client-icons">{feature.icon}</span>
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientsSection;
