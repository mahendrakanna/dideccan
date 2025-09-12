import React from "react";
import "../styles/FeatureSection.css";
import { BookOpen, Grid, Monitor, Tablet, Star, PenTool } from "react-feather";

const features = [
  {
    icon: <BookOpen size={32} />,
    title: "Early Literacy Fun",
    description:
      "Master phonics, letters, and sight words through playful activities and delightful stories. Each session is designed to spark curiosity and build confidence, turning reading into an adventure."
  },
  {
    icon: <Grid size={32} />,
    title: "Math Adventures",
    description:
      "Discover the magic of numbers, counting, and basic shapes with exciting challenges and games.With colorful visuals and fun tasks, kids build a strong foundation in math while enjoying every step of the journey."
  },
  {
    icon: <Tablet size={32} />,
    title: "Problem Solving Puzzles",
    description:
      "Develop critical thinking skills by solving age-appropriate puzzles and brain teasers.Each activity is carefully designed to make learning feel like play, encouraging problem-solving and critical thinking."
  },
  {
    icon: <Monitor size={32} />,
    title: "Safe & Positive Screen Time",
    description:
      "Enjoy educational content in a secure, ad-free space designed to be beneficial and fun.With a focus on balance and well-being, this space encourages healthy digital habits, giving parents peace of mind and children a joyful, positive experience."
  },
  {
    icon: <Star size={32} />,
    title: "Trackable Progress",
    description:
      "Parents can easily see learning milestones and celebrate their child's achievements.This transparent approach keeps parents involved and motivated while encouraging children with a sense of accomplishment."
  },
  {
    icon: <PenTool size={32} />,
    title: "Creativity Unleashed",
    description:
      "Encourage imagination with drawing tools, music makers, and open-ended creative activities.Every creation becomes a chance to explore, invent, and build confidence in their creativity."
  }
];

const FeatureSection = () => {
  return (
    <div className="features-section" id="about">
      <h2 className="section-title">Building Blocks for a Bright Future!</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
