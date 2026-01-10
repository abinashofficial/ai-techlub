import React, { useEffect, useState } from "react";
import AOS from "aos";
import GLightbox from "glightbox";
import testimg1 from "../assets/img/hero-bg-light.webp" 


const Hero: React.FC = () => {
          const [terms, setTerms] = useState<Boolean>(true);
  
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    GLightbox({ selector: ".glightbox" });
                  // Set a timer to hide the message after 15 seconds
              const timer = setTimeout(() => setTerms(false), 5000);
          
              // Cleanup the timer when the component unmounts
              return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="hero section">
      <div className="hero-bg">
        <img src={testimg1} alt="Background" />
      </div>

      <div className="container text-center">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h1 data-aos="fade-up">
            Welcome to <span>震電Tech</span>
          </h1>
          <p data-aos="fade-up" data-aos-delay="100">
            Quickly start your project now and set the stage for success
          </p>

          <div className="d-flex" data-aos="fade-up" data-aos-delay="200">
            <a href="#about" className="btn-get-started">Get Started</a>
            <a
              href="https://youtu.be/ouNNpUF6pls"
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
      <div className="popdown-message">

    {terms && (
    <div>


<p style={{
  fontStyle:"italic",
  fontSize:"14px"
}}>
<button onClick={() => setTerms(false)} style={{
  // marginRight:"10px",
  color:"black",
  background:"white",
  fontSize:"20px"
}}>×</button>
By continuing, you agree to ShindenTech's{" "}
  <a href="/terms-of-service" target="_blank" rel="noopener noreferrer">
    Terms of Use
  </a>{" "}
  and{" "}
  <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
    Privacy Policy
  </a>.
 
</p>
</div>    )}
    </div>
    </section>
  );
};

export default Hero;
