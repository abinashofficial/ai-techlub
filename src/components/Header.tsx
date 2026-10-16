import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
// import {  FaEarlybirds, FaHome, FaBlog, FaServicestack, FaSignOutAlt, FaUser } from 'react-icons/fa';


const Header: React.FC = () => {
          const navigate = useNavigate();
            const location = useLocation();



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
          <li><a onClick={()=> navigate("/")} style={{
                              cursor:"pointer",
                            }}     className={location.pathname === "/" ? "active" : ""}
>Home</a></li>
          <li><a onClick={()=> navigate("/about")} style={{
                              cursor:"pointer",
                            }}     className={location.pathname === "/about" ? "active" : ""}
>About</a></li>
          <li><a onClick={()=> navigate("/features")} style={{
                              cursor:"pointer",
                            }}     className={location.pathname === "/features" ? "active" : ""}
                            >Features</a></li>
          <li><a onClick={()=> navigate("/services")} style={{
                              cursor:"pointer",
                            }}     className={location.pathname === "/services" ? "active" : ""}
>Services</a></li>
          <li><a onClick={()=> navigate("/pricing")} style={{
                              cursor:"pointer",
                            }}     className={location.pathname === "/pricing" ? "active" : ""}
>Pricing</a></li>

         

                    <li className="dropdown"><a onClick={()=> navigate("/products")}
                          className={
      ["/products", "/consumerhub", "/businesshub"].includes(
        location.pathname
      )
        ? "active"
        : ""
    }
    style={{
                              cursor:"pointer",
                            }} 
                      >Products <i className="bi bi-chevron-down toggle-dropdown"></i></a>
            <ul>

              {/* <li><a href="https://erp-client-pink.vercel.app/webdesigns" target="_blank" rel="noopener noreferrer" >Cloud Web Application 
                          <img src="https://res.cloudinary.com/dababspdo/image/upload/v1768015429/Cloud-Data-Transfer--Streamline-Ultimate_upgbrg.svg" alt="logo" />

              </a></li> */}
              <li><a onClick={()=> navigate("/consumerhub")} style={{
                              cursor:"pointer",
                            }}  
>
Consumer Hub
                                    <img src="https://res.cloudinary.com/dababspdo/image/upload/v1768014616/Team-Meeting--Streamline-Ultimate_ml34p1.svg" alt="logo" />

</a></li>
                            <li><a onClick={()=> navigate("/businesshub")} style={{
                              cursor:"pointer",
                            }}
                            
                            >Business Hub
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


          <li><a onClick={()=> navigate("/contact")} style={{
                              cursor:"pointer",
                            }}
                             className={location.pathname === "/contact" ? "active" : ""}
                            >Contact</a></li>
        
           <li className="dropdown"><a  onClick={()=> navigate("/career")} style={{
                              cursor:"pointer",
                            }}
                            className={
      ["/career", "/fulltime", "/internship"].includes(
        location.pathname
      )
        ? "active"
        : ""
    }
                            >Career <i className="bi bi-chevron-down toggle-dropdown"></i></a>
            <ul>


              <li><a onClick={()=> navigate("/internship")} style={{
                              cursor:"pointer",
                            }}
                            >
Internship
                                    <img src="https://res.cloudinary.com/dababspdo/image/upload/v1771563380/Award-Ribbon-Star-1--Streamline-Ultimate_oe03co.svg" alt="logo" />

</a></li>
                            <li><a onClick={()=> navigate("/fulltime")} style={{
                              cursor:"pointer",
                            }}
                            >Full-Time
                                                                <img src="https://res.cloudinary.com/dababspdo/image/upload/v1771563465/Office-Employee--Streamline-Ultimate_vxpnig.svg" alt="logo" />

                            </a></li>



            </ul>
          </li>

        </ul>
        <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>

      <a className="btn-getstarted" onClick={()=> navigate("/about")} style={{
                              cursor:"pointer",
                            }}>Get Started</a>

    </div>


  </header>
  );
};

export default Header;
