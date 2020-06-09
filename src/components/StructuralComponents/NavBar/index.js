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
          <h3><Link className="navTitles" to='/'>Home</Link> </h3>
          <h3><Link className="navTitles" to='/about'>About us</Link></h3>
          <h3><Link className="navTitles" to='/blogs'>Stories</Link></h3>
          <h3><NavLink className="navTitles" to='/funding'> Apply to Funding</NavLink></h3>
          <h3><Link className="navTitles" to='/contact'>Contact</Link></h3>
          <Link className="navTitles" to='/donation'><button className="donateButton"> Make a donation</button></Link>
          
          
        </div>
      </div>
    </nav>
  );
}

export default NavBar