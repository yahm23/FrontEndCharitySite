import React, { useState, useEffect, setErrors } from 'react'
import {Link} from "react-router-dom";
import marked from 'marked';
import { useMediaQuery } from 'react-responsive';
import BottomBanner from "../../StructuralComponents/BottomBanner"
import Wave from '../../StructuralComponents/Wave';
import {Helmet} from "react-helmet";



// const baseURL='https://blog-back-end-green.herokuapp.com/blogs/';

const SingleBlog = (props)=>{

    let isMobile = useMediaQuery({ maxWidth: 767 })

    var [blog,setBlog]= useState();

    
    useEffect(() => {

        async function fetchData() {
    
            await fetch(`https://blog-back-end-green.herokuapp.com/blogs/${props.match.params.id}`)
            .then(response => response.json())
            .then(response => {
                setBlog(response);            
            })
            .catch(err => setErrors(err));
        }

        fetchData();
        return () => {
            console.log('unmounting...') 
        }

    },[props.match.params.id]);


    if(blog){
        // var avatarUrl='https://blog-back-end-green.herokuapp.com/uploads/default-avatar_e55c67cd0b.jpeg'
        // if(blog.author.avatar){
        // avatarUrl=`https://blog-back-end-green.herokuapp.com${blog.author.avatar.url}`}
    
        return(
            <div className="blogBanner">
                <Helmet>
                    <title>{blog.title}</title>
                </Helmet>
                <div className="blogcontainer">
                <div className="overlay"></div>
                    <div className={isMobile ?"Posts-mobile":"contactHeading"} >
                        <h1 className="noBottomPadding">{blog.title}</h1>
                        <h4 className="writtenBy">Written by {blog.author? blog.author.name:'Green'} </h4>
                        {/* <img alt="avatar" className="avatar" src={avatarUrl}></img> */}
                        
                        <Wave></Wave>
                    </div>
                    <div className="whiteBackground">
                        <div className="descriptionContainer">
                            <div className="individualArticle">
                                <div  dangerouslySetInnerHTML={{ __html: marked(blog.content)}}></div>
                                <p>{blog.date}</p>
                                <Link to={'/blogs'}><button className="donateButton2">Go back to all blogs</button></Link>
                            </div>
                        </div>
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
