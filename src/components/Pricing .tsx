import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="pricing section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Pricing</h2>
        <p>
We offer flexible pricing plans designed to fit businesses of all sizes. Whether you’re a startup, growing company, or enterprise, our packages provide value-driven solutions with transparent costs and no hidden fees.        </p>
      </div>
      {/* End Section Title */}

      <div className="container">
        <div className="row gy-4">

          {/* Pricing Item 1 - Free Plan */}
          <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="100">
            <div className="pricing-item">
              <h3>Free Plan</h3>
              <p className="description">
Perfect for individuals or small teams looking to try our services.              </p>
              <h4>
                <sup>$</sup>0<span> / month</span>
              </h4>
              <a href="#" className="cta-btn">Start a free trial</a>
              <p className="text-center small">No credit card required</p>
              <ul>
                <li><i className="bi bi-check"></i> <span>Access to basic tools and features</span></li>
                <li><i className="bi bi-check"></i> <span>Limited projects or usage</span></li>
                <li><i className="bi bi-check"></i> <span>Essential analytics and reporting</span></li>
                <li className="na"><i className="bi bi-x"></i> <span>Community support</span></li>
                <li className="na"><i className="bi bi-x"></i> <span>Cloud storage up to 5GB</span></li>
                <li className="na"><i className="bi bi-x"></i> <span>Basic integrations</span></li>
                <li className="na"><i className="bi bi-x"></i> <span>Regular updates and improvements</span></li>
              </ul>
            </div>
          </div>

          {/* Pricing Item 2 - Business Plan */}
          <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="200">
            <div className="pricing-item featured">
              <p className="popular">Popular</p>
              <h3>Business Plan</h3>
              <p className="description">
Ideal for small to medium businesses looking to scale their operations efficiently.              </p>
              <h4>
                <sup>$</sup>29<span> / month</span>
              </h4>
              <a href="#" className="cta-btn">Start a free trial</a>
              <p className="text-center small">No credit card required</p>
              <ul>
                <li><i className="bi bi-check"></i> <span>Full access to core tools and features</span></li>
                <li><i className="bi bi-check"></i> <span>Manage multiple projects or teams</span></li>
                <li><i className="bi bi-check"></i> <span>Advanced analytics and reporting</span></li>
                <li><i className="bi bi-check"></i> <span>Priority email supports</span></li>
                <li><i className="bi bi-check"></i> <span>Cloud storage up to 50GB</span></li>
                <li><i className="bi bi-check"></i> <span>Integrations with popular apps and platforms</span></li>
                <li className="na"><i className="bi bi-x"></i> <span>IRegular updates and performance enhancements</span></li>
              </ul>
            </div>
          </div>

          {/* Pricing Item 3 - Developer Plan */}
          <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="300">
            <div className="pricing-item">
              <h3>Developer Plan</h3>
              <p className="description">
Perfect for developers and growing teams who need advanced features and flexibility.              </p>
              <h4>
                <sup>$</sup>49<span> / month</span>
              </h4>
              <a href="#" className="cta-btn">Start a free trial</a>
              <p className="text-center small">No credit card required</p>
              <ul>
                <li><i className="bi bi-check"></i> <span>Full access to all tools and features</span></li>
                <li><i className="bi bi-check"></i> <span>Unlimited projects and team members</span></li>
                <li><i className="bi bi-check"></i> <span>Advanced analytics and custom reporting</span></li>
                <li><i className="bi bi-check"></i> <span>Priority support via email and chat</span></li>
                <li><i className="bi bi-check"></i> <span>Cloud storage up to 100GB</span></li>
                <li><i className="bi bi-check"></i> <span>API access and developer integrations</span></li>
                <li><i className="bi bi-check"></i> <span>Regular updates with new features and improvements</span></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;
