import React, { useState, useEffect, setErrors, useRef } from 'react'
import BottomBanner from '../../StructuralComponents/BottomBanner'
import { useMediaQuery } from 'react-responsive';
import  { Redirect, useHistory } from 'react-router-dom'
import marked from 'marked';


import Wave from '../../StructuralComponents/Wave';
import {Helmet} from "react-helmet";


const EmptyPage = (props)=> {

    let isMobile = useMediaQuery({ maxWidth: 767 })

    const history = useHistory(); 

    var [page,setPage] = useState();
    var [pages,setPages] = useState();
    
    useEffect(() => {
        // ref.current = true;
        async function fetchData() {
          return await fetch(`https://blog-back-end-green.herokuapp.com/pages`)
            .then((response) => response.json())
            .then((response) => {
              setPages(response);
            })
            .catch((err) => setErrors(err));
        }
        fetchData();
        return () => {
          console.log('unmounting...');
          
        };
      }, [props.match.params.url]);
      
    useEffect(() => {
        
      const url = props.match.params.url;
      if (!pages || !url) return;
      // Using Array#find here because I assume based on the name, you want one page rather than an array
      const page = pages.find((singlepage) => { return singlepage.url === url})
      if (!page) {
        // This will change the route if a page isn't found.
        history.push('/page-not-found');
      }
      setPage(page);

    }, [pages, props.match.params.url]);

   
    if(page){
        return (
            <div> 
                <Helmet>
                <title> Green Foundation - {page.title}</title>
                    
                </Helmet>
                <div className={isMobile ?"aboutcontainer-mobile":"aboutcontainer"}>        
                    <div className="overlay"></div>
                    
                    <div className={isMobile ?"Posts-mobile":"contactHeading"} >
                        <h1 className=""> {page.title} </h1>
                        <Wave></Wave>
                    </div>


                        <div className="whiteBackground">
                            <div className="descriptionContainer">

                                <div className="individualArticle">
                                    
                                <div  dangerouslySetInnerHTML={{ __html: marked(page.content)}}></div>
                                    

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

export default EmptyPage