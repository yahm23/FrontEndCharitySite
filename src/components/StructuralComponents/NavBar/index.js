import React from "react";

import { Link, NavLink } from 'react-router-dom';
import LightLogo from "../../../Media/Logos/SVG/logo-the-light.svg"



const NavBar = () => {
  return (
    <nav className="app-container">
      <div className="navbar">

        <div className="navbarleft">
          <Link to='/'> 
            <img className="logo" height="50px" src={LightLogo} alt="Logo">
            </img>
          </Link>    
        </div>

        <div id="space" className= "navbarright">
          <Link className="navTitles" to='/'>Home</Link> 
          <Link className="navTitles" to='/about'>About us</Link>
          <Link className="navTitles" to='/blogs'>Stories</Link>
          <NavLink className="navTitles" to='/funding'> Apply to Funding</NavLink>
          <Link className="navTitles" to='/contact'>Contact</Link>
          <Link className="navTitles" to='/donation'><button className="donateButton"> Make a donation</button></Link>
          
          
        </div>
      </div>
    </nav>
  );
}

export default NavBar