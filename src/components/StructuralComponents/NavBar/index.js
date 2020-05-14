import React , { Component }  from "react";
import {DropdownButton, Dropdown} from 'react-bootstrap'
import {   Route, Link, Switch, NavLink} from "react-router-dom";
import { withRouter } from 'react-router-dom';
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

        <div className= "navbarright">
          <h3 id="space"><Link to='/'>Home</Link> </h3>
          <h3 id="space"><Link to='/about'>About us</Link></h3>
          <h3 id="space"><Link to='/blogs'>Stories</Link></h3>
          <h3 id="space"><NavLink to='/support'> Support Us</NavLink></h3>
          <h3 id="space"><Link to='/contact'>Contact</Link></h3>
          <button className="donateButton"><Link to='/donation'> Make a donation</Link></button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar