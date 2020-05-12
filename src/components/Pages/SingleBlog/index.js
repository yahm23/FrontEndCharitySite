import React, { Component, useState, useEffect, setErrors } from 'react'
import {BrowserRouter as Switch,Route ,Link} from "react-router-dom";
// import Blogs from '../Blogs';
// import Strapi from "strapi-sdk-javascript/build/main";
import marked from 'marked';
import { useMediaQuery } from 'react-responsive';
import BottomBanner from "../../StructuralComponents/BottomBanner"
import Wave from '../../StructuralComponents/Wave';



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
        var avatarUrl='https://blog-back-end-green.herokuapp.com/uploads/default-avatar_e55c67cd0b.jpeg'
        if(blog.author.avatar){
        avatarUrl=`https://blog-back-end-green.herokuapp.com${blog.author.avatar.url}`}
    
        return(
            <div className="blogBanner">
                <div className="blogcontainer">

                    <div className={isMobile ?"Posts-mobile":"Posts"} >
                        <h1 className="noBottomPadding">{blog.title}</h1>
                        <h4 className="writtenBy">Written by {blog.author? blog.author.name:'Green'} </h4>
                        <img  className="avatar" src={avatarUrl}></img>

                        <Wave></Wave>
                    </div>

                    <div className="individualArticle">
                        <div  dangerouslySetInnerHTML={{ __html: marked(blog.content)}}></div>
                        <p>{blog.date}</p>
                        <Link to={'/blogs'}><button className="donateButton2">Go back to all blogs</button></Link>
                    </div>

                </div>
                <BottomBanner></BottomBanner>
            </div>
        )
        
    } else {
        return null
    }

}


export default SingleBlog
