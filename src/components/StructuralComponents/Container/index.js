import React , { Component }  from "react";
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
import MobileNavBar from "../MobileNavBar";

 const Container=(props)=>{
  
    return(
    <div>
      <div className ={props.mobileClass==="mobile" ? "container-mobile" : "container"}>
          {props.mobileClass==="mobile" ? <MobileNavBar></MobileNavBar>: <NavBar></NavBar>}
        <nav className="app-container">
        </nav>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/about' component ={About}/>
            <Route path='/contact' component ={Contact}/>
            
            <Route path='/donation' component ={Donation}/>
            <Route path='/support' component ={Support}/>
            <Route path='/blogs' component ={BlogMain}/>
            <Route path='/privacy-policy' component ={PrivacyPolicy}/>
            <Route render={()=><h1> 404: Page not found</h1>}/>
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