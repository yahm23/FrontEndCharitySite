import React, { Component, useState, useEffect, setErrors } from 'react'
import {BrowserRouter as Switch,Route ,Link} from "react-router-dom";
// import Blogs from '../Blogs';
// import Strapi from "strapi-sdk-javascript/build/main";
import marked from 'marked';
import { useMediaQuery } from 'react-responsive';



// const baseURL='https://blog-back-end-green.herokuapp.com/blogs/';

const SingleBlog = (props)=>{

    let isMobile = useMediaQuery({ maxWidth: 767 })

    var [blog,setBlog]= useState();

    async function fetchData() {

        await fetch(`https://blog-back-end-green.herokuapp.com/blogs/${props.match.params.id}`)
        .then(response => response.json())
        .then(response => {
            setBlog(response);            
        })
        .catch(err => setErrors(err));
    }

    useEffect(() => {
        fetchData();
        return () => {
            console.log('unmounting...') 
        }
    },[]);


    if(blog){
    
        return(
            <div className="blogBanner">
                <div className="blogcontainer">

                    <div className={isMobile ?"Posts-mobile":"Posts"} >
                        <h1>{blog.title}</h1>
                        <h4>Written by {blog.author? blog.author.name:'Green'}</h4>

                        <div className= "wave-container">
                            <svg  className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 130 1420 95">
                            <path fill="white" fillOpacity="1" d="M0,160L120,165.3C240,171,480,181,720,176C960,171,1200,149,1320,138.7L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
                            </svg>
                        </div>
                    </div>

                    <div className="individualArticle">
                        <div  dangerouslySetInnerHTML={{ __html: marked(blog.content)}}></div>
                        <p>{blog.date}</p>
                        <Link to={'/blogs'}><button className="donateButton2">Go back to all blogs</button></Link>
                    </div>

                </div>
            </div>
        )
        
    } else {
        return null
    }

}


export default SingleBlog
