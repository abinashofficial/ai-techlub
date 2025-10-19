import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";


const Services: React.FC = () => {
  return (
    <section id="services" className="services section light-background">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </p>
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
                  Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.
                </p>
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
                  Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.
                </p>
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
                  Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.
                </p>
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
                  Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.
                </p>
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
                  Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.
                </p>
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
                  Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.
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
