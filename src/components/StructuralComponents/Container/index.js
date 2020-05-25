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
import MobileNavBar from "../MobileNavBar";
import EmptyPage from "../../Pages/EmptyPage";
import PageNotFound from '../../Pages/PageNotFound';

const Container=(props)=>{
var [pages,setPages] = useState('');

async function fetchData() {

  await fetch("https://blog-back-end-green.herokuapp.com/pages")
  .then(response => response.json())
  .then(response => {
      setPages(response);
      console.log(pages);
                  
  })
  .catch(err => setErrors(err));
}

  useEffect(() => {
    fetchData();
    return () => {
        console.log('unmounting...') 
    }
  },[]);

  const Pages = () => (
    pages.map(page=>
      
      <Route key={page.id} path={"/"+page.url}
      render={(props) => <EmptyPage {...props} id={`${page.id}`} />}
      />
    )

  )

  if(pages){
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

            <Pages></Pages>
            <Route exact path='*' render={()=><PageNotFound></PageNotFound>}/>
            {/* <Route component ={PageNotFound}/> */}
          </Switch>
     </div>
    
    </div>)
  }
  else
  {return null}
    
}

const BlogMain = () => (
  <Switch>
    <Route exact path='/blogs' component={Blogs}/>
    <Route path='/blogs/:id' component={SingleBlog}/>
  </Switch>
)







export default Container;