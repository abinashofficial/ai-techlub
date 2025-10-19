import React from "react";
// import {  FaEarlybirds, FaHome, FaBlog, FaServicestack, FaSignOutAlt, FaUser } from 'react-icons/fa';


const Header: React.FC = () => {
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
          <li className="dropdown"><a href="#"><span>Products</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
            <ul>

              <li><a href="#">Cloud Web Application</a></li>
              <li><a href="#">Smart Booking</a></li>
                            <li><a href="#">courses</a></li>
                                          <li className="dropdown"><a href="#"><span>ERP</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                  <li><a href="#">Attendance Tracking</a></li>
                  <li><a href="#">Check In / Check Out</a></li>
                  <li><a href="#">Payroll</a></li>
                  <li><a href="#">Visitors Management</a></li>
                  <li><a href="#">Packaging Management</a></li>
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
  </header>
  );
};

export default Header;
