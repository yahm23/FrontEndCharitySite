import React , { Component }  from "react";
import {DropdownButton, Dropdown} from 'react-bootstrap'
import {   Route, Link, Switch, NavLink} from "react-router-dom";
import { withRouter } from 'react-router-dom';

// import './App.css';
import About from "../../Pages/About";
import Blogs from "../../Pages/Blogs";
import Support from "../../Pages/Contact";
import Home from "../../Pages/Home";
import Donation from "../../Pages/Donation";
import LightLogo from "../../../Media/Logos/SVG/logo-the-light.svg"
import SmallLogo from "../../../Media/Logos/PNG/LighterLogo.png"
import Article from "../../Pages/Article";
import SingleBlog from "../../Pages/SingleBlog";
// import BottomBanner from "../BottomBanner";

class Container extends Component {
    render() {
      return(
    <div>
      <div className ={this.props.mobileClass==="mobile" ? "container-mobile" : "container"}>
            {this.props.mobileClass==="mobile" ? <MobileNavBar></MobileNavBar>: <NavBar></NavBar>}
        <nav className="app-container">
        </nav>
          <Switch>

            <Route path='/' exact component={Home}/>
            <Route path='/about' component ={About}/>
            <Route path='/support' component ={Support}/>
            <Route path='/donation' component ={Donation}/>
            <Route path='/blogs' component ={BlogMain}/>
            <Route path='/articles' exact component ={Article}/>
            <Route render={()=><h1> 404: Page not found</h1>}/>
          </Switch>
        
      
    </div>
    
    </div>)
    }
}

const BlogMain = () => (
  <Switch>
    <Route exact path='/blogs' component={Blogs}/>
    <Route path='/blogs/:id' component={SingleBlog}/>
  </Switch>
)


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
          <h3 id="space"><NavLink to='/support'> Support Us</NavLink></h3>
          <button className="donateButton"><Link to='/donation'> Make a donation</Link></button>
        </div>
      </div>
    </nav>
  );
}

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
                <button className="donateButton-mobile"> <Link to='/donation'> Make a donation</Link></button>
              </Dropdown.Item>

            </div>

        </DropdownButton>
      </div>

    </div>


  );
}


export default Container;