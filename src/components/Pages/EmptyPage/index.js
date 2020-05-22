import React, { useState, useEffect, setErrors } from 'react'
import BottomBanner from '../../StructuralComponents/BottomBanner'
import { useMediaQuery } from 'react-responsive';
import Wave from '../../StructuralComponents/Wave';
import {Helmet} from "react-helmet";


const EmptyPage = (props)=> {
    var [posts,setPosts] = useState();

    async function fetchData() {
  
      await fetch(`https://blog-back-end-green.herokuapp.com/pages/${props.match.params.url}`)
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

    return (
        <div> 
            <Helmet>
                <title>Green Foundation - FILL </title>
                
            </Helmet>
            <div className="aboutcontainer">        
                <div className="overlay"></div>
                
                <div className={isMobile ?"Posts-mobile":"contactHeading"} >
                    <h1 className=""> FILL </h1>
                    <Wave></Wave>
                </div>


                    <div className="whiteBackground">
                        <div className="descriptionContainer">

                            <div className="individualArticle">

                                <p>
                                    SOMETHING
                                </p>

                            </div>
            
                        </div>
                        
                        </div>
                    </div>
            

            <BottomBanner></BottomBanner>

        </div>
    )
    
}

export default EmptyPage