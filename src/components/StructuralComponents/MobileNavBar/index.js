import React, {useState} from 'react'
import {Link} from "react-router-dom";
import SmallLogo from "../../../Media/Logos/PNG/LighterLogo.png"

const MobileNavbar=()=>{
    var [toggle,setToggle] = useState(false);
    
    const switchToggle=()=>{
        setToggle(!toggle)
    }
     
    return (
        <div>
            <div className="navbar-mobile">
        
                <div className="navbarleft">
                <Link to='/'> 
                    <img className="logo" height="70px" src={SmallLogo} alt="Logo">
                    </img>
                </Link>    
                </div>

                <div className= "navbarright-mobile">
                    <button id="burger" onClick={switchToggle}>
                        <div className="Bar"></div>
                        <div className="Bar"></div>
                        <div className="Bar"></div>
                    </button>
                
                </div>
            
                {toggle? <DropDown></DropDown>:null }
            
            </div>

      </div>
    )
    
}

const DropDown = ()=>{
    return(
        <div className="dropdown">
            <div className="menu-mobile">
            
                <p id="space-mobile"><Link to='/'>Home</Link></p>
            
                <p id="space-mobile"><Link to='/about'>About us</Link></p>
            
                <p id="space-mobile"><Link to='/support'> Support Us</Link></p>
            
                <p id="space-mobile"><Link to='/contact'>Contact</Link></p>
            
                <button className="donateButton-mobile"><Link to='/donation'>Make a donation</Link></button>
            
            </div>
        </div>
    )

}

export default MobileNavbar
