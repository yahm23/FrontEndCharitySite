import React, { useState, useEffect, setErrors } from 'react'
import BottomBanner from '../../StructuralComponents/BottomBanner'
import { useMediaQuery } from 'react-responsive';
import marked from 'marked';
 

import Wave from '../../StructuralComponents/Wave';
import {Helmet} from "react-helmet";


const EmptyPage = (props)=> {
    var [pages,setPages] = useState('');
    var [page,setPage] = useState('');
    
    useEffect(() => {
      fetchData();
      return () => {
          console.log('unmounting...') 
      }
    },[props.id]);
    
    let isMobile = useMediaQuery({ maxWidth: 767 })


    async function fetchData() {
      await fetch(`https://blog-back-end-green.herokuapp.com/pages/`)

      .then(response => response.json())
      .then(response => { setPage(response.filter(singlePage =>{
              return singlePage.url===props.match.params.url }
          )) 
      })
      
  
      .catch(err => setErrors(err));
    }
  

    
    if(page){
       
        return (
            <div> 
                <Helmet>
                <title> Green Foundation - { }</title>
                    
                </Helmet>
                <div className="aboutcontainer">        
                    <div className="overlay"></div>
                    
                    <div className={isMobile ?"Posts-mobile":"contactHeading"} >
                        <h1 className=""> This the title {page[0].title } </h1>
                        <Wave></Wave>
                    </div>


                        <div className="whiteBackground">
                            <div className="descriptionContainer">

                                <div className="individualArticle">
                                    
                                <div  dangerouslySetInnerHTML={{ __html: marked(page[0].content)}}></div>
                                    

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