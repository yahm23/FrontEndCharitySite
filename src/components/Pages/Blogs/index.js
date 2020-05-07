import React, { Component } from 'react';
import Strapi from "strapi-sdk-javascript/build/main";
import marked from 'marked';
import Article from '../Article';

import {BrowserRouter as Switch,Route ,  Link } from "react-router-dom";



const strapi = new Strapi('http://localhost:1337');


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
          <h1 className="Posts">Posts</h1>
          <div className="">
            
          </div>
          
          <div className="blogs">
          {this.state.posts.map(post => (
            
            <Link key={post.id} to = {`/blogs/`+post.id}>
            <div className="story">

    
              

              <div key={post.title} className="list">

                <div id="blogpage" className="exampleStory">
                    {(post.title)} 
                </div>
                <div className="contentPreview" dangerouslySetInnerHTML={{ __html: marked(post.content).substring(0,100)+'...' }}><p>hello</p></div>

              </div >

            </div>
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