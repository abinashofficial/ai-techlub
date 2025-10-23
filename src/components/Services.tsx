import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";


const Services: React.FC = () => {
  return (
    <section id="services" className="services section light-background">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p>
We offer a comprehensive range of solutions designed to help your business thrive in the digital age. Each service is tailored to deliver measurable results, streamline operations, and enhance customer experiences.        </p>
      </div>
      {/* End Section Title */}

      <div className="container">
        <div className="row g-5">

          {/* Service Item 1 */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div className="service-item item-cyan position-relative">
              <i className="bi bi-activity icon"></i>
              <div>
                <h3>Web Development</h3>
                <p>
We create responsive, modern, and scalable websites that reflect your brand and drive engagement. Our solutions are tailored to meet your business goals while providing seamless user experiences.                </p>
                <a href="#" className="read-more stretched-link">
                  Learn More <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Service Item 2 */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <div className="service-item item-orange position-relative">
              <i className="bi bi-broadcast icon"></i>
              <div>
                <h3>Cloud Application</h3>
                <p>
Leverage the power of the cloud with our secure and scalable applications. Our solutions ensure seamless performance, accessibility, and flexibility, helping your business operate efficiently from anywhere.                </p>
                <a href="#" className="read-more stretched-link">
                  Learn More <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Service Item 3 */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
            <div className="service-item item-teal position-relative">
              <i className="bi bi-easel icon"></i>
              <div>
                <h3>Digital Marketing</h3>
                <p>
Drive engagement and growth with our data-driven marketing strategies. From SEO and social media campaigns to content marketing, we help your brand reach the right audience and achieve measurable results.                </p>
                <a href="#" className="read-more stretched-link">
                  Learn More <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Service Item 4 */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
            <div className="service-item item-red position-relative">
              <i className="bi bi-bounding-box-circles icon"></i>
              <div>
                <h3>Enterprise Resource Platform</h3>
                <p>
Streamline your business operations with our custom ERP solutions. From finance to inventory and HR management, our platforms optimize workflows, improve efficiency, and support data-driven decision-making.                </p>
                <a href="#" className="read-more stretched-link">
                  Learn More <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Service Item 5 */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="500">
            <div className="service-item item-indigo position-relative">
              <i className="bi bi-calendar4-week icon"></i>
              <div>
                <h3>Booking Platform</h3>
                <p>
Simplify scheduling and reservations with our intuitive booking platform. Designed for efficiency and user-friendliness, it helps your business manage appointments seamlessly while enhancing customer experience.                </p>
                <a href="#" className="read-more stretched-link">
                  Learn More <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Service Item 6 */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="600">
            <div className="service-item item-pink position-relative">
              <i className="bi bi-chat-square-text icon"></i>
              <div>
                <h3>Technical Support</h3>
                <p>
Ensure uninterrupted operations with our reliable 24/7 technical support. Our expert team quickly resolves issues, optimizes performance, and keeps your business running smoothly.                </p>
                <a href="#" className="read-more stretched-link">
                  Learn More <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
