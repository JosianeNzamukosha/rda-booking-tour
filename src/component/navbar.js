import React from "react";
import logo from "../Assets/images/logo.jpg";
import "../component/Nav.css";


const Nav=()=>{
    return (
      <div className="nav">
          <img src={logo} alt="Rwanda Booking Tour"  className="logo-img"/> 
          <div className="navigation-links">
              <ul className="nav-links">
                  <li><a href="/home" className="nav-link">Home</a></li>
                  <li><a href="/about" className="nav-link">About-us</a></li>
                  <li><a href="/contact" className="nav-link">Contact-us</a></li>
                  <li><a href="" className="nav-link">Gallery</a></li>
                  <li><a href="" className="nav-link link-green">Sign-In</a></li>
                  <li><a href="/tours"className="nav-link btn">Tours</a></li>
                  
              </ul>
          </div> 
      </div>
    )
}
export default Nav;