import React from 'react'
import BottomBanner from '../../StructuralComponents/BottomBanner'
import { useMediaQuery } from 'react-responsive';
import Wave from '../../StructuralComponents/Wave';
import {Helmet} from "react-helmet";


const Funding =()=> {
    let isMobile = useMediaQuery({ maxWidth: 767 })

    return (
        <div>
            <Helmet>
                <title>Green Foundation - Funding</title>
            </Helmet>
            <div  className={isMobile? "donationContainer-mobile":"donationContainer"}>

                <div className="overlay"></div>
        
                <div className={isMobile? "Posts-mobile":"contactHeading"}>
                    <h1>Funding</h1>
                    <Wave></Wave>
                </div>

                <div className="whiteBackground">

                    <div className="fundingForms">

                        <div className="readStory" id="funding">
                            <h3 className="padding" >Sustainable Development Fund</h3>
                            <svg height="32" fill="white"className="chevron-right" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z"/></svg>
                        </div>
                            <br></br>
                        <div className="readStory" id="funding">
                            <h3 className="padding" >Fuel Hardship Fund</h3>
                            <svg height="32" fill="white"className="chevron-right" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z"/></svg>
                        </div>

                    </div>
                </div>

                

            </div>
            <BottomBanner></BottomBanner>
        </div>
    )
}


export default Funding
