import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";


const Services: React.FC = () => {
  return (
    <section id="services" className="services section light-background">
      {/* Section Title */}
      <div className="container section-title">
        <h2>Services</h2>
        <p>
We offer a comprehensive range of solutions designed to help your business thrive in the digital age. Each service is tailored to deliver measurable results, streamline operations, and enhance customer experiences.        </p>
      </div>
      {/* End Section Title */}

      <div className="container">
        <div className="row g-5">

                                        {/* Service Item 1 */}
          <div className="col-lg-6">
            <div className="service-item item-red position-relative">
              <i className="bi bi-robot icon"></i>
              <div>
                <h3>AI Automation</h3>
                <p>
Automate repetitive tasks with intelligent AI solutions that improve efficiency, reduce costs, and accelerate business growth.
                </p>
                <a href="#" className="read-more stretched-link">
                  Learn More <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

                    {/* Service Item 2 */}
          <div className="col-lg-6">
            <div className="service-item item-indigo position-relative">
              <i className="bi bi-bounding-box-circles icon"></i>
              <div>
                <h3>SaaS</h3>
                <p>
Deliver powerful SaaS solutions that simplify operations, automate workflows, and scale effortlessly with your business.
                </p>
                <a href="#" className="read-more stretched-link">
                  Learn More <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Service Item 3 */}
          <div className="col-lg-6">
            <div className="service-item item-cyan position-relative">
              <i className="bi bi-person-workspace icon"></i>
              <div>
                <h3>Custom Software</h3>
                <p>
Build tailored software solutions designed around your unique business needs. Our scalable applications streamline processes, improve productivity, and drive growth.
                </p>
                <a href="#" className="read-more stretched-link">
                  Learn More <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Service Item 4 */}
          <div className="col-lg-6">
            <div className="service-item item-teal position-relative">
              <i className="bi bi-cloud-arrow-up-fill icon"></i>
              <div>
                <h3>Cloud Solutions</h3>
                <p>
Leverage secure, scalable cloud applications for seamless performance, flexibility, and access from anywhere.        </p>
                <a href="#" className="read-more stretched-link">
                  Learn More <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>



          {/* Service Item 5 */}
          <div className="col-lg-6">
            <div className="service-item item-orange position-relative">
              <i className="bi bi-easel icon"></i>
              <div>
                <h3>Digital Marketing</h3>
                <p>
Grow your online presence with strategic digital marketing that attracts customers, builds your brand, and drives measurable results.
              </p>
                <a href="#" className="read-more stretched-link">
                  Learn More <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>





          {/* Service Item 6 */}
          <div className="col-lg-6">
            <div className="service-item item-indigo position-relative">
              <i className="bi bi-chat-square-text icon"></i>
              <div>
                <h3>Technical Support</h3>
                <p>
Get reliable technical support to resolve issues quickly, maintain performance, and keep your systems running smoothly.
               </p>
                <a href="#" className="read-more stretched-link">
                  Learn More <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

                    {/* Service Item 7 */}
          <div className="col-lg-6">
            <div className="service-item item-teal position-relative">
              <i className="bi bi-phone icon"></i>
              <div>
                <h3>Mobile App Development</h3>
                <p>
Build powerful mobile applications for Android and iOS with seamless performance, intuitive experiences, and scalable solutions.
                </p>
                <a href="#" className="read-more stretched-link">
                  Learn More <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>



                    {/* Service Item 8 */}
          <div className="col-lg-6">
            <div className="service-item item-indigo position-relative">

    <div style={{
      // display:"flex",
      marginRight:"20px"
          }}>
           <img 
                    style={{
                width:"80px",
              }}
                    src="https://res.cloudinary.com/dababspdo/image/upload/v1765337719/Analytics-Pie-2--Streamline-Ultimate_hptcej.svg" alt="logo" />
    </div>
         




              {/* <i className="bi bi-chat-square-text icon"></i> */}
              <div>
                <h3>UI/UX Design & Web Development</h3>
                <p>
Create engaging UI/UX designs and responsive websites that deliver seamless experiences, strong performance, and lasting impact.
               </p>
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
