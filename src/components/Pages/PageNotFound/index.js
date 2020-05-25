import React from 'react'
import BottomBanner from '../../StructuralComponents/BottomBanner'
import { useMediaQuery } from 'react-responsive';
import Wave from '../../StructuralComponents/Wave';
import {Helmet} from "react-helmet";



const PageNotFound = ()=> {
    let isMobile = useMediaQuery({ maxWidth: 767 })

    return (
        <div> 
            <Helmet>
                <title>Green Foundation - Page not found</title>
            </Helmet>
            <div className="aboutcontainer">        
                <div className="overlay"></div>
                
                <div className={isMobile ?"Posts-mobile":"contactHeading"} >
                    <h1 className=""> 404 Page Not Found</h1>
                    <Wave></Wave>
                </div>


                    <div className="whiteBackground">
                        <div className="descriptionContainer">

                            
            
                        </div>
                        
                    </div>
            </div>
            

            <BottomBanner></BottomBanner>

        </div>
    )
    
}

export default PageNotFound
