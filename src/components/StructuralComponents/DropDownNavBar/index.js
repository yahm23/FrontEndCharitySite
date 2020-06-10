import React, { Component } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import {Link} from "react-router-dom";
import SmallLogo from "../../../Media/Logos/PNG/LighterLogo.png"

const DropDownNavBar=()=>{
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
                        <Dropdown drop="left down">
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    <div className="Bar"></div>
                                    <div className="Bar"></div>
                                    <div className="Bar"></div>                
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="/">Home</Dropdown.Item>
                                <Dropdown.Item href="/about">About Us</Dropdown.Item>
                                <Dropdown.Item href="/blogs">Success Stories</Dropdown.Item>
                                <Dropdown.Item href="/funding">Apply to Funding</Dropdown.Item>
                                <Dropdown.Item href="/contact">Contact</Dropdown.Item>
                                <Dropdown.Item href="/donation"><button className="donateButton-mobile"> Make a donation</button></Dropdown.Item>
                                
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                
                    {/* {toggle? <DropDown></DropDown>:null } */}
                
            </div>
        </div>

    )
}


export default DropDownNavBar
