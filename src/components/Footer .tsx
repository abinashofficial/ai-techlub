import React from "react";
import type {FormEvent } from "react";

import "bootstrap-icons/font/bootstrap-icons.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";





const Footer: React.FC = () => {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // prevent page reload
    toast.success("Your subscription request has been sent.");
    e.currentTarget.reset(); // optional: clear input
  };
  return (
    <div>
  

    <footer id="footer" className="footer position-relative light-background">
      <div className="container footer-top">
        <div className="row gy-4">
          {/* About Section */}
          <div className="col-lg-4 col-md-6 footer-about">
            <a href="#" className="logo d-flex align-items-center">
              <span className="sitename">Shindentech</span>
            </a>
            <div className="footer-contact pt-3">
              <p>W5VJ+953, 2nd St, Veeramani Nagar,</p>
              <p>  Kovilambakkam, Chennai, Tamil Nadu 600129</p>
              <p className="mt-3">
                <strong>Phone:</strong> <span>+91 9940463927</span>
              </p>
              <p>
                <strong>Email:</strong> <span>shindentechnologies@gmail.com</span>
              </p>
            </div>
            <div className="social-links d-flex mt-4">
    <a href="https://www.threads.com/@shindentech" target="_blank" rel="noopener noreferrer"><i className="bi bi-threads"></i></a>

    <a href="https://wa.me/+919940463927" target="_blank" rel="noopener noreferrer"><i className="bi bi-whatsapp"></i></a>
              {/* <a href="#"><i className="bi bi-twitter-x"></i></a>
              <a href="#"><i className="bi bi-facebook"></i></a> */}
              <a href="https://www.instagram.com/shindentech" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></a>
              <a href="https://www.linkedin.com/company/shindentech" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
  <a href="mailto:shindentechnologies@gmail.com" target="_blank" rel="noopener noreferrer">
    <i className="bi bi-envelope-fill"></i>
  </a>
            </div>
          </div>

          {/* Useful Links */}
          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="https://shindentech.vercel.app/terms-of-service">Terms of service</a></li>
              <li><a href="https://shindentech.vercel.app/privacy-policy">Privacy policy</a></li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><a href="#">Digital Marketing</a></li>
              <li><a href="#">Web Development</a></li>
              <li><a href="#">Enterprise Resource Platform</a></li>
              <li><a href="#">Cloud Application</a></li>
                            <li><a href="#">Technical Support</a></li>


            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-lg-4 col-md-12 footer-newsletter">
            <h4>Our Newsletter</h4>
            <p>Subscribe to our newsletter and receive the latest news about our products and services!</p>
            <form onSubmit={handleSubmit}>
              <div className="newsletter-form">
                <input type="email" name="email" placeholder="Your Email" required />
                <input type="submit" value="Subscribe" />
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container copyright text-center mt-4">
        <p>
          © <span>Copyright</span> <strong className="px-1 sitename">Shindentech</strong>
          <span>All Rights Reserved</span>
        </p>
      </div>
    </footer>
      {/* <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a> */}
{/* <ToastContainer/> */}

        </div>

  );
};

export default Footer;
