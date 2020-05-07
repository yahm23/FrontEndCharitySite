import React, { Component } from 'react'
import {BrowserRouter as Switch,Route ,Link} from "react-router-dom";
// import Blogs from '../Blogs';
import Strapi from "strapi-sdk-javascript/build/main";
import marked from 'marked';


const baseURL='http://localhost:1337/blogs/';

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
                    <h1 className="Posts">{this.state.blog.title}</h1>
                    <h4>Written by {this.state.blog.authors? this.state.blog.authors[0].Name:'Green'}</h4>
                    {/* {console.log(this.state.authors[0])} */}
                    

                    {/* {this.state.authors.map(post => (
            
                
                        <div>                 
                            <div className="title">
                                {post.Name} 
                            </div>
                        </div >
                
                    ))} */}


                    <div className="individualArticle" dangerouslySetInnerHTML={{ __html: marked(this.state.test)}}></div>
                    {/* {marked(this.state.test)} */}

                    <p>{this.state.blog.published}</p>
                    <Link to={'/blogs'}><button className="donateButton2">Go back to all blogs</button></Link>
                </div>
            </div>
        )
    }
}

export default SingleBlog
