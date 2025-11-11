import React, {useState, useEffect} from "react";
// import {  FaEarlybirds, FaHome, FaBlog, FaServicestack, FaSignOutAlt, FaUser } from 'react-icons/fa';


const Header: React.FC = () => {
        const [terms, setTerms] = useState<Boolean>(true);
                  useEffect(() => {
            // Set a timer to hide the message after 15 seconds
            const timer = setTimeout(() => setTerms(false), 5000);
        
            // Cleanup the timer when the component unmounts
            return () => clearTimeout(timer);
          }, []);

  return (
  <header id="header" className="header d-flex align-items-center fixed-top">
    
    <div className="container-fluid container-xl position-relative d-flex align-items-center">

      <a href="#" className="logo d-flex align-items-center me-auto">
        {/* <FaEarlybirds/> */}
        <h1 style={{
          color:"#388da8",
        }}>AI-</h1>
        <h1 className="sitename">techlub</h1>
      </a>

      <nav id="navmenu" className="navmenu">
        <ul>
          <li><a href="#hero" className="active">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li className="dropdown"><a href="#"><span className="toggle-dropdown">Products</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
            <ul>

              <li><a href="https://erp-client-pink.vercel.app/webdesigns">Cloud Web Application</a></li>
              <li><a href="#">Smart Booking</a></li>
                            {/* <li><a href="#">courses</a></li> */}
                                          <li className="dropdown"><a href="#"><span className="toggle-dropdown">ERP</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                  <li>
                    <a href="https://payroll-ruby-xi.vercel.app/">Payroll Management</a></li>
                  <li><a href="#">Visitors Management</a></li>
                  <li><a href="https://erp-management-mu.vercel.app/">Packaging Management</a></li>
                </ul>
              </li>

            </ul>
          </li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>

      <a className="btn-getstarted" href="#about">Get Started</a>

    </div>
<div className="popdown-message">

    {terms && (
    <div>


<p >
<button onClick={() => setTerms(false)} style={{
  marginRight:"10px",
  color:"black",
  background:"white",
  fontSize:"20px"
}}>×</button>
By continuing, you agree to AI-techlub's{" "}
  <a href="https://ai-techlub.vercel.app/terms-of-service" target="_blank" rel="noopener noreferrer">
    Terms of Use
  </a>{" "}
  and{" "}
  <a href="https://ai-techlub.vercel.app/privacy-policy" target="_blank" rel="noopener noreferrer">
    Privacy Policy
  </a>.
 
</p>
</div>    )}
    </div>

  </header>
  );
};

export default Header;
