import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
// import "./faq.css"; // Optional for animation

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "What are the benefits of using your cloud application solutions?",
    answer:
      "Our cloud applications offer high scalability, security, and accessibility—allowing your business to operate efficiently from anywhere.",
  },
  {
    question: "Can you redesign or update an existing website?",
    answer:
      "Yes, we can revamp your existing website to modern standards while improving its performance, UI/UX, and SEO ranking.",
  },
  {
    question: "What modules can be included in a custom ERP system?",
    answer:
      "Modules include finance, HR, inventory, supply chain, and project management—customized to your business needs.",
  },
  {
    question: "What industries can use your booking platform?",
    answer:
      "Our booking platform suits industries like healthcare, beauty, fitness, hospitality, and professional services.",
  },
  {
    question: "What digital marketing services do you offer?",
    answer:
      "We offer SEO, social media marketing, content marketing, and paid ad campaigns to increase your visibility and engagement.",
  },
  {
    question: "What kind of technical support do you provide?",
    answer:
      "We offer 24/7 monitoring, troubleshooting, and performance optimization to ensure smooth operations.",
  },
];

const Faq: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(-1); // all collapsed by default

  const toggleFaq = (index: number) => {
    setActiveIndex((prev) => (prev === index ? -1 : index)); // toggle open/close
  };

  return (
    <section id="faq" className="faq section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Frequently Asked Questions</h2>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10" data-aos="fade-up" data-aos-delay="100">
            <div className="faq-container">
              {faqData.map((item, index) => {
                const isActive = activeIndex === index;
                return (
                  <div
                    key={index}
                    className={`faq-item ${isActive ? "faq-active" : ""}`}
                    onClick={() => toggleFaq(index)}
                    style={{ cursor: "pointer" }}
                  >
                    <h3>{item.question}</h3>

                    {/* Show answer */}
                    <div
                      className="faq-content"
                      style={{
                        maxHeight: isActive ? "500px" : "0",
                        overflow: "hidden",
                        transition: "max-height 0.4s ease",
                      }}
                    >
                      {isActive && <p>{item.answer}</p>}
                    </div>

                    <i
                      className={`faq-toggle bi ${
                        isActive ? "bi-chevron-down" : "bi-chevron-right"
                      }`}
                    ></i>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
