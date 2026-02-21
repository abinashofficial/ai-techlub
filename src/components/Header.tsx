import React from "react";
// import {  FaEarlybirds, FaHome, FaBlog, FaServicestack, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";


const Header: React.FC = () => {
          const navigate = useNavigate();


  return (
  <header id="header" className="header d-flex align-items-center fixed-top">
    
    <div className="container-fluid container-xl position-relative d-flex align-items-center">

      <a href="#" className="logo d-flex align-items-center me-auto">
        {/* <FaEarlybirds/> */}
        <div 
        
        >
                <img
                style={{
                  borderRadius:"100px",
        }}
        src="./logo.png"
        alt=""
      />
        </div>

        <div>
          <img src="https://res.cloudinary.com/dababspdo/image/upload/v1765700399/shinden3_uwmgje.png" alt="" className="shindentech-img"/>
        </div>

        {/* <h1 style={{
          color:"#388da8",
        }}>AI-</h1> */}
        <h1 className="sitename"></h1>
      </a>

      <nav id="navmenu" className="navmenu">
        <ul>
          <li><a href="/#hero" className="active">Home</a></li>
          <li><a href="/#about">About</a></li>
          <li><a href="/#features">Features</a></li>
          <li><a href="/#services">Services</a></li>
          <li><a href="/#pricing">Pricing</a></li>

         

                    <li className="dropdown"><a href="/#products">Products <i className="bi bi-chevron-down toggle-dropdown"></i></a>
            <ul>

              {/* <li><a href="https://erp-client-pink.vercel.app/webdesigns" target="_blank" rel="noopener noreferrer" >Cloud Web Application 
                          <img src="https://res.cloudinary.com/dababspdo/image/upload/v1768015429/Cloud-Data-Transfer--Streamline-Ultimate_upgbrg.svg" alt="logo" />

              </a></li> */}
              <li><a onClick={()=> navigate("/consumerhub")} style={{
                              cursor:"pointer",
                            }}>
Consumer Hub
                                    <img src="https://res.cloudinary.com/dababspdo/image/upload/v1768014616/Team-Meeting--Streamline-Ultimate_ml34p1.svg" alt="logo" />

</a></li>
                            <li><a onClick={()=> navigate("/businesshub")} style={{
                              cursor:"pointer",
                            }}>Business Hub
                                                                <img src="https://res.cloudinary.com/dababspdo/image/upload/v1768015924/Business-Deal-Handshake-1--Streamline-Ultimate_rhvezl.svg" alt="logo" />

                            </a></li>

                            {/* <li><a href="#">courses</a></li> */}
                                          {/* <li className="dropdown"><a href="#"><span className="toggle-dropdown">ERP</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                  <li>
                    <a href="https://payroll-ruby-xi.vercel.app/" target="_blank" rel="noopener noreferrer">Payroll Management</a></li>
                  <li><a href="#">AI Business ChatBot</a></li>
                  <li><a href="https://erp-management-mu.vercel.app/" target="_blank" rel="noopener noreferrer">Inventory Management</a></li>
                </ul>
              </li> */}

            </ul>
          </li>


          <li><a href="/#contact">Contact</a></li>
        
           <li className="dropdown"><a href="/career">Career <i className="bi bi-chevron-down toggle-dropdown"></i></a>
            <ul>


              <li><a onClick={()=> navigate("/internship")} style={{
                              cursor:"pointer",
                            }}>
Internship
                                    <img src="https://res.cloudinary.com/dababspdo/image/upload/v1771563380/Award-Ribbon-Star-1--Streamline-Ultimate_oe03co.svg" alt="logo" />

</a></li>
                            <li><a onClick={()=> navigate("/fulltime")} style={{
                              cursor:"pointer",
                            }}>Full-Time
                                                                <img src="https://res.cloudinary.com/dababspdo/image/upload/v1771563465/Office-Employee--Streamline-Ultimate_vxpnig.svg" alt="logo" />

                            </a></li>



            </ul>
          </li>

        </ul>
        <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>

      <a className="btn-getstarted" href="/#about">Get Started</a>

    </div>


  </header>
  );
};

export default Header;
