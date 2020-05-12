import React, { Component } from 'react'
import LightLogo from "../../../Media/Logos/JPG/logo-the.jpg"
import {BrowserRouter as  Route, Link, Switch} from "react-router-dom";
import About from "../../Pages/About";
import Blogs from "../../Pages/Blogs";
import Contact from "../../Pages/Contact";
import Home from "../../Pages/Home";
import Donation from "../../Pages/Donation";

const BottomBanner= ()=> {
   
        return (
            <div className="bottomBanner">
                <div className="blankSpace"></div>
                <hr className="solid"></hr>

                    <div className="logoBanner">
                        <img className="bottomLogo" alt="logo"  height="45px" src={LightLogo}></img>
                        <div className="update">

                            <p className="keepUpdated" >Keep updated with our progress.</p>
                            <div className="email">
                                <input height="100px" id="email" placeholder="Email address"></input>
                                
                                <svg  height="32" fill="#B2B3B6"id="chevron-email" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z"/></svg>   
                                
                            </div>
                        </div>
                    </div>

                    <div id="links">
                        <p><Link  to='/'>Home</Link></p> 
                        <p><Link  to='/about'>About</Link></p>
                        <p><Link  to='/'>Support Us</Link></p>
                        <p><Link to='/blogs'>Success Stories</Link></p>
                        <p><Link to='/contact'>Contact Us</Link></p>
                        <p><Link to='/privacypolicy'>Privacy Policy</Link></p>
                        
                    
                        <Switch>
                            <Route path='/' exact component ={Home}/>
                            <Route path='/about' component ={About}/>
                            <Route path='/' component ={Home}/>
                            <Route path='/contact' component ={Contact}/>
                            <Route path='/donation' component ={Donation}/>
                            <Route path='/blogs' component ={Blogs}/>
                   
                        </Switch>


                    </div>

                    <p className="">Address Line 1, Address Line 2, POSTCODE, 0191 300 6161 - info@thegreenfoundation </p>
                    <p className="copyright">© 2020 Green Foundation - Registered Charity No. 123456</p>
                </div>

        )
    
}

export default BottomBanner
