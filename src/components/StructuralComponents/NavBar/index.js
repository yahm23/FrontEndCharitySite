import React, { Component } from 'react';
import {BrowserRouter as  Route, Link, Switch} from "react-router-dom";

import About from "../../Pages/About";
import { Blogs } from "../../Pages/Blogs";
import Support from "../../Pages/Contact";
import Home from "../../Pages/Home";
import Donation from "../../Pages/Donation";
import LightLogo from "../../Media/Logos/SVG/logo-the-light.svg"
import Article from '../../Pages/Article';

export class NavBar extends Component {
    render() {
        return (
            <div>
          
            <nav>
                <ul className="navbar">
                <div className="navbarleft">
                <Link to='/'> 
                    <img className="logo" height="45px" src={LightLogo} alt="Logo">
                    </img>
                </Link>    
                </div>

                <div className= "navbarright">
                <h3 id="space"><Link to='/'>Home</Link> </h3>
                <h3 id="space"><Link to='/about'>About us</Link></h3>
                <h3 id="space"><Link to='/support'> Support Us</Link></h3>
                <button className="donateButton"><Link to='/donation'> Make a donation</Link></button>
                </div>
        
                </ul>
            </nav>
            <Switch>
                <Route path='/' exact component ={Home}/>
                <Route path='/about' component ={About}/>
                <Route path='/support' component ={Support}/>
                <Route path='/donation' component ={Donation}/>
                <Route path='/blogs' component ={Blogs}/>
                <Route path='/blogs/:id' exact component ={Article}/>
                <Route render={()=><h1> 404: Page not found</h1>}/>
            </Switch>
      
      </div>
        
        )
    }
}

export default NavBar
