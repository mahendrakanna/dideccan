import React from "react";
import '../styles/FAQ.css';
function FAQ() {
  const faqs = [
    {
      question: "What services does DIDeccanIndia provide?",
      answer: "We offer web and mobile development, DevOps, software testing, AI & data science solutions, and digital transformation services."
    },
    {
      question: "How can I request a service or consultation?",
      answer: "You can fill out the contact form on our website or email us directly at hr@dideccanindia.com."
    },
    {
      question: "Do you provide custom solutions?",
      answer: "Yes, we tailor our services to meet the specific needs of businesses across industries."
    },
    {
      question: "Is my data safe with DIDeccanIndia?",
      answer: "Absolutely. We follow strict data security practices as outlined in our Privacy Policy."
    },
    {
      question: "What courses are currently available in the 6-month coaching program?",
      answer: "We currently offer Manual & Automation Testing, DevOps, React.js & React Native, Python with Django."
    },
    {
      question: "Do you work with international clients?",
      answer: "Yes, we provide services to clients across India and worldwide."
    },
    {
      question: "How can I enroll in the coaching program?",
      answer: "You can enroll directly by filling out the registration form through our website or using the Apply Now button in the Courses."
    }
    
  ];

  return (
    <div className="faq-container" >
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item" >
          <h4 >{faq.question}</h4>
          <p>{faq.answer}</p>
        </div>
      ))}
    </div>
  );
}

export default FAQ;
