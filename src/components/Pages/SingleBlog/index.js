import React, { Component } from 'react'
import {BrowserRouter as Switch,Route ,Link} from "react-router-dom";
// import Blogs from '../Blogs';
import Strapi from "strapi-sdk-javascript/build/main";
import marked from 'marked';


const baseURL='https://blog-back-end-green.herokuapp.com/blogs/';

class SingleBlog extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
          blog: 'blurb',
          test:'',
          authors:''

        }
      }
    
    componentDidMount() {
    this.getBlog()
    .then(response => response.json())
    .then(data => this.setState({ blog: data, test: data.content, authors: data.authors}));
    
    }

    getBlog() {
        return fetch(`${baseURL}${this.props.match.params.id}`)
    }



    render(){
        return(
            <div className="blogBanner">
                <div className="blogcontainer">
                    <div className="Posts">
                    <h1>{this.state.blog.title}</h1>

                    <div className= "wave-container">
                        <svg  className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 130 1420 95">
                        <path fill="white" fillOpacity="1" d="M0,160L120,165.3C240,171,480,181,720,176C960,171,1200,149,1320,138.7L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
                        </svg>
                    </div>
                    </div>
                    <h4>Written by {this.state.blog.authors? this.state.blog.authors[0].Name:'Green'}</h4>
                   


                    <div className="individualArticle" dangerouslySetInnerHTML={{ __html: marked(this.state.test)}}></div>
     

                    <p>{this.state.blog.published}</p>
                    <Link to={'/blogs'}><button className="donateButton2">Go back to all blogs</button></Link>
                </div>
            </div>
        )
    }
}

export default SingleBlog
