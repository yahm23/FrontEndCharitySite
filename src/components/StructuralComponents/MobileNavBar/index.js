import React  from "react";
import {DropdownButton, Dropdown} from 'react-bootstrap'
import {Link} from "react-router-dom";
// import { withRouter } from 'react-router-dom';
import SmallLogo from "../../../Media/Logos/PNG/LighterLogo.png"



const MobileNavBar = () => {
    return (
  
      <div className="navbar-mobile">
  
        <div className="navbarleft">
          <Link to='/'> 
            <img className="logo" height="70px" src={SmallLogo} alt="Logo">
            </img>
          </Link>    
        </div>
        
        <div className= "navbarright-mobile">
        <DropdownButton  title={
            <div>
              <div className="Bar"></div>
              <div className="Bar"></div>
              <div className="Bar"></div>
            </div>
          } 
          id="icon">
            <div className="menu-mobile">
                <Dropdown.Item>
                  <h3 id="space-mobile"><Link to='/'>Home</Link></h3>
                </Dropdown.Item>
  
                <Dropdown.Item>
                  <h3 id="space-mobile"><Link to='/about'>About us</Link></h3>
                </Dropdown.Item>
  
                <Dropdown.Item>
                  <h3 id="space-mobile"><Link to='/support'> Support Us</Link></h3>
                </Dropdown.Item>
  
                <Dropdown.Item>
                  <h3 id="space-mobile"><Link to='/contact'> Contact</Link></h3>
                </Dropdown.Item>
  
                <Dropdown.Item>
                  <button className="donateButton-mobile"> <Link to='/donation'> Make a donation</Link></button>
                </Dropdown.Item>
  
              </div>
  
          </DropdownButton>
        </div>
  
      </div>
  
  
    );
  }
  
export default MobileNavBar