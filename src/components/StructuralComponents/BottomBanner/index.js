import React from 'react'
import LightLogo from "../../../Media/Logos/JPG/logo-the.jpg"
import {BrowserRouter as  Route, Link, Switch} from "react-router-dom";
import About from "../../Pages/About";
import Blogs from "../../Pages/Blogs";
import Contact from "../../Pages/Contact";
import Home from "../../Pages/Home";
import Donation from "../../Pages/Donation";
import Support from '../../Pages/Support';
import MailingList from '../MailingList';
import PrivacyPolicy from '../../Pages/PrivacyPolicy';

const BottomBanner= ()=> {
   
        return (
            <div className="bottomBanner">
                <div className="blankSpace"></div>
                <hr className="solid"></hr>

                    <div className="logoBanner">
                        <img className="bottomLogo" alt="logo"  height="45px" src={LightLogo}></img>
                        <MailingList></MailingList>
                    </div>

                    <div id="links">
                        <p><Link  to='/'>Home</Link></p> 
                        <p><Link  to='/about'>About</Link></p>
                        <p><Link  to='/support'>Support Us</Link></p>
                        <p><Link to='/blogs'>Success Stories</Link></p>
                        <p><Link to='/contact'>Contact Us</Link></p>
                        <p><Link to='/privacy-policy'>Privacy Policy</Link></p>
                        
                    
                        <Switch>
                            <Route path='/' exact component ={Home}/>
                            <Route path='/about' component ={About}/>
                            <Route path='/support' component ={Support}/>
                            <Route path='/contact' component ={Contact}/>
                            <Route path='/donation' component ={Donation}/>
                            <Route path='/blogs' component ={Blogs}/>
                            <Route path='/privacy-policy' component ={PrivacyPolicy}/>
                        </Switch>


                    </div>

                    <p className="">Address Line 1, Address Line 2, POSTCODE, 0191 300 6161 - info@thegreenfoundation </p>
                    <p className="copyright">© 2020 Green Foundation - Registered Charity No. 123456</p>
                </div>

        )
    
}

export default BottomBanner
