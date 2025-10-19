import React, { useEffect } from "react";
import AOS from "aos";
import GLightbox from "glightbox";
import testimg1 from "../assets/img/hero-bg-light.webp" 
import testimg2 from "../assets/img/hero-services-img.webp"


const Hero: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    GLightbox({ selector: ".glightbox" });
  }, []);

  return (
    <section id="hero" className="hero section">
      <div className="hero-bg">
        <img src={testimg1} alt="Background" />
      </div>

      <div className="container text-center">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h1 data-aos="fade-up">
            Welcome to <span>AI-techlub</span>
          </h1>
          <p data-aos="fade-up" data-aos-delay="100">
            Quickly start your project now and set the stage for success
          </p>

          <div className="d-flex" data-aos="fade-up" data-aos-delay="200">
            <a href="#about" className="btn-get-started">Get Started</a>
            <a
              href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
              className="glightbox btn-watch-video d-flex align-items-center"
            >
              <i className="bi bi-play-circle"></i>
              <span>Watch Video</span>
            </a>
          </div>

          {/* <img
            src={testimg}
            className="img-fluid hero-img"
            alt="Hero"
            data-aos="zoom-out"
            data-aos-delay="300"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
