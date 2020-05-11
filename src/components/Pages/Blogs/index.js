import React, { Component } from 'react';
import Strapi from "strapi-sdk-javascript/build/main";
import marked from 'marked';
import Article from '../Article';

import {BrowserRouter as Switch,Route ,  Link } from "react-router-dom";



const strapi = new Strapi('https://blog-back-end-green.herokuapp.com/');


export class Blogs extends Component {



  constructor(props) {
    super(props);
    this.state = {
     posts: [],
     post:'',
   }
 }

async componentDidMount() {
 try {
   const posts = await strapi.getEntries('blogs')
   this.setState({ posts });
 } 

 catch(err) {
  alert(err);
 }
}



render() {

  return (


    <div>

        <div className="blogBanner">
          <div className="blogcontainer">  

          <div className="Posts" >
            <h1>Posts</h1>
            <div className= "wave-container">
                <svg  className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 130 1420 95">
                <path fill="white" fillOpacity="1" d="M0,160L120,165.3C240,171,480,181,720,176C960,171,1200,149,1320,138.7L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
                </svg>
            </div>
          </div>
          <div className="">
            
          </div>
          
          <div className="blogs">
          {this.state.posts.map(post => (
            
            <Link key={post.id} to = {`/blogs/`+post.id}>
            <div className="story">
              {/* <div key={post.title} className="list"> */}

              <h2 className="exampleStory">{post.title}</h2>

                {/* <div className="contentPreview"><p></p></div> */}
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
        </div> 
    </div>
  )
 }
}

export default Blogs