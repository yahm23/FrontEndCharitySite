import React, { useState, useEffect, setErrors} from 'react'
import { Route, Switch} from "react-router-dom";


import About from "../../Pages/About";
import Blogs from "../../Pages/Blogs";
import Contact from "../../Pages/Contact";
import Home from "../../Pages/Home";
import Donation from "../../Pages/Donation";
import SingleBlog from "../../Pages/SingleBlog";
import Support from "../../Pages/Support";
import NavBar from "../NavBar";
import PrivacyPolicy from "../../Pages/PrivacyPolicy";
import EmptyPage from "../../Pages/EmptyPage";
import Funding from "../../Pages/Funding";
import PageNotFound from '../../Pages/PageNotFound';
import FuelHardship from '../../Pages/Funding/FuelHardship/fuelHardship';
import SustainableDevelopment from '../../Pages/Funding/SustainableDevelopment/sustainableDevelopment';
import DropDownNavBar from '../DropDownNavBar';

const Container=(props)=>{


  
    return(
    <div>
      <div className ={props.mobileClass==="mobile" ? "container-mobile" : "containero"}>
          {props.mobileClass==="mobile" ? <DropDownNavBar></DropDownNavBar>: <NavBar></NavBar>}
          {/* {props.mobileClass==="mobile" ? <MobileNavBar></MobileNavBar>: <NavBar></NavBar>} */}
        <nav className="app-container">
        </nav>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/about' component ={About}/>
            <Route path='/contact' component ={Contact}/>
            
            <Route path='/donation' component ={Donation}/>
            <Route path='/support' component ={Support}/>
            <Route path='/blogs' component ={BlogMain}/>

            <Route path='/funding/sustainable-development-fund' component ={SustainableDevelopment}/>
            <Route path='/funding/fuel-hardship-fund' component ={FuelHardship}/>
            <Route path='/funding' component ={Funding}/>
            
            
            <Route path='/privacy-policy' component ={PrivacyPolicy}/>

            {/* <Pages></Pages> */}
            <Route exact path='/page-not-found' render={()=><PageNotFound></PageNotFound>}/>
            <Route path='/:url' component ={EmptyPage}/>
            
          </Switch>
     </div>
    
    </div>)
  
    
}

const BlogMain = () => (
  <Switch>
    <Route exact path='/blogs' component={Blogs}/>
    <Route path='/blogs/:id' component={SingleBlog}/>
  </Switch>
)







export default Container;