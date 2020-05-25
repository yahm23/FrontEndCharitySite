import React, { useState, useEffect, setErrors } from 'react'
import BottomBanner from '../../StructuralComponents/BottomBanner'
import { useMediaQuery } from 'react-responsive';
import marked from 'marked';
 

import Wave from '../../StructuralComponents/Wave';
import {Helmet} from "react-helmet";


const EmptyPage = (props)=> {
    
    let isMobile = useMediaQuery({ maxWidth: 767 })

    var [page,setPage] = useState('');

    async function fetchData() {
      await fetch(`https://blog-back-end-green.herokuapp.com/pages/${props.id}`)

      .then(response => response.json())
      .then(response => {
          setPage(response); 
          console.log(props);    
      })
      
  
      .catch(err => setErrors(err));
    }
  
    useEffect(() => {
      fetchData();
      return () => {
          console.log('unmounting...') 
      }
    },[props.id]);

    
    if(page){
       
        return (
            <div> 
                <Helmet>
        <title> Green Foundation - {page.title}</title>
                    
                </Helmet>
                <div className="aboutcontainer">        
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
    }
    else{
        return null
    }
    
}

export default EmptyPage