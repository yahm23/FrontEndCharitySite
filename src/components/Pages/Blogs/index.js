import React, { useState, useEffect, setErrors} from 'react'
// import Strapi from "strapi-sdk-javascript/build/main";
// import marked from 'marked';
// import Article from '../Article';

import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import BottomBanner from '../../StructuralComponents/BottomBanner';
import Wave from '../../StructuralComponents/Wave';
import {Helmet} from "react-helmet";



// const strapi = new Strapi('https://blog-back-end-green.herokuapp.com/');


const Blogs=()=> {
  var [posts,setPosts] = useState();

  async function fetchData() {

    await fetch("https://blog-back-end-green.herokuapp.com/blogs")
    .then(response => response.json())
    .then(response => {
        setPosts(response);            
    })

    .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
    return () => {
        console.log('unmounting...') 
    }
  },[]);


  let isMobile = useMediaQuery({ maxWidth: 767 })
  if(posts){
    return (
        <div>
          <Helmet>
            <title>Stories</title>
          </Helmet>
          <div  className={isMobile? "donationContainer-mobile":"donationContainer"}>  

            <div className={isMobile ?"Posts-mobile":"contactHeading"}>
              <h1>Posts</h1>
              <Wave></Wave>
            </div>
            <div className="">
              
            </div>
            
            <div className={isMobile? "blogs-mobile":"blogs"}>
            {posts.map(post => (
              
              <Link key={post.id} to = {`/blogs/`+post.id}>
                <div className="story">
                  

                  <h2 className="exampleStory">{post.title}</h2>
                    
                  <div className="readStory">
                    <h3 className="padding" >Read the full story</h3>
                    <svg height="32" fill="white"className="chevron-right" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z"/></svg>
                  </div>

                </div >

              {/* </div> */}
              </Link>
            
            
            ))}
            </div>
          
          </div>
          <BottomBanner></BottomBanner>
        </div>
    )
    } else {
      
      return (
      <Helmet>
        <title>Stories</title>
      </Helmet>)
    }

 
}

export default Blogs