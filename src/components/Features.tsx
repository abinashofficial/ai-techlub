import React, { useEffect } from "react";
import AOS from "aos";
import tab1 from "../assets/img/tabs-1.jpg"
import tab2 from "../assets/img/tabs-2.jpg"
import tab3 from "../assets/img/tabs-3.jpg"
import feautures1 from "../assets/img/features-1.jpg"
import feautures2 from "../assets/img/features-2.jpg"
// import feautures3 from "../assets/img/features-3.jpg"




const Features: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      {/* ======= Features Section ======= */}
      <section id="features" className="features section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Features</h2>
          <p>We deliver technology that transforms ideas into impact — helping businesses grow smarter and faster.</p>
        </div>

        <div className="container">
          <div className="row justify-content-between">
            {/* Tab Navigation */}
            <div className="col-lg-5 d-flex align-items-center">
              <ul className="nav nav-tabs" data-aos="fade-up" data-aos-delay="100">
                <li className="nav-item">
                  <a
                    className="nav-link active show"
                    data-bs-toggle="tab"
                    data-bs-target="#features-tab-1"
                    href="#features-tab-1"
                  >
                    <i className="bi bi-binoculars"></i>
                    <div>
                      <h4 className="d-none d-lg-block">Smart, Scalable & Reliable</h4>
                      <p>
                     We build digital solutions that are crafted for performance and scalability. Every project we deliver is designed to empower your business, enhance customer experience, and drive measurable growth.
                      </p>
                    </div>
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#features-tab-2"
                    href="#features-tab-2"
                  >
                    <i className="bi bi-box-seam"></i>
                    <div>
                      <h4 className="d-none d-lg-block">Innovative by Design</h4>
                      <p>
               We craft solutions that combine creativity and technology to deliver exceptional performance and reliability — helping your business thrive in a connected world.
                      </p>
                    </div>
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#features-tab-3"
                    href="#features-tab-3"
                  >
                    <i className="bi bi-brightness-high"></i>
                    <div>
                      <h4 className="d-none d-lg-block">Reliable Support & Insights</h4>
                      <p>
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum Debitis nulla est maxime voluptas dolor aut
                      </p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            {/* Tab Content */}
            <div className="col-lg-6">
              <div className="tab-content" data-aos="fade-up" data-aos-delay="200">
                <div className="tab-pane fade active show" id="features-tab-1">
                  <img src={tab1} alt="Tab 1" className="img-fluid" />
                </div>

                <div className="tab-pane fade" id="features-tab-2">
                  <img src={tab2} alt="Tab 2" className="img-fluid" />
                </div>

                <div className="tab-pane fade" id="features-tab-3">
                  <img src={tab3} alt="Tab 3" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  );
};

export default Features;
