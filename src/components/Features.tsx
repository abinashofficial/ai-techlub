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
          <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
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
                      <h4 className="d-none d-lg-block">Modi sit est dela pireda nest</h4>
                      <p>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
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
                      <h4 className="d-none d-lg-block">Unde praesenti mara setra le</h4>
                      <p>
                        Recusandae atque nihil. Delectus vitae non similique magnam molestiae
                        sapiente similique tenetur aut voluptates sed voluptas ipsum voluptas
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
                      <h4 className="d-none d-lg-block">Pariatur explica nitro dela</h4>
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

      {/* ======= Features Details Section ======= */}
      <section id="features-details" className="features-details section">
        <div className="container">
          {/* Feature Item 1 */}
          <div className="row gy-4 justify-content-between features-item">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <img src={feautures1} className="img-fluid" alt="Feature 1" />
            </div>

            <div
              className="col-lg-5 d-flex align-items-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="content">
                <h3>Corporis temporibus maiores provident</h3>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident.
                </p>
                <a href="#" className="btn more-btn">
                  Learn More
                </a>
              </div>
            </div>
          </div>

          {/* Feature Item 2 */}
          <div className="row gy-4 justify-content-between features-item">
            <div
              className="col-lg-5 d-flex align-items-center order-2 order-lg-1"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="content">
                <h3>Neque ipsum omnis sapiente quod quia dicta</h3>
                <p>
                  Quidem qui dolore incidunt aut. In assumenda harum id iusto lorena plasico mares
                </p>
                <ul>
                  <li>
                    <i className="bi bi-easel flex-shrink-0"></i> Et corporis ea eveniet ducimus.
                  </li>
                  <li>
                    <i className="bi bi-patch-check flex-shrink-0"></i> Exercitationem dolorem
                    sapiente.
                  </li>
                  <li>
                    <i className="bi bi-brightness-high flex-shrink-0"></i> Veniam quia modi magnam.
                  </li>
                </ul>
                <a href="#" className="btn more-btn">
                  Learn More
                </a>
              </div>
            </div>

            <div
              className="col-lg-6 order-1 order-lg-2"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img src={feautures2} className="img-fluid" alt="Feature 2" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
