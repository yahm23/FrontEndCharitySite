import React from 'react'
import BottomBanner from '../../StructuralComponents/BottomBanner'
import { useMediaQuery } from 'react-responsive';
import Wave from '../../StructuralComponents/Wave';
import {Helmet} from "react-helmet";

const  PrivacyPolicy =()=> {
    
    let isMobile = useMediaQuery({ maxWidth: 767 })

    return (
        <div>
            <Helmet>
                <title>Green Foundation - Privacy Policy</title>
            </Helmet>
            <div  className={isMobile? "donationContainer-mobile":"donationContainer"}>
                <div>      
                    <div className="overlay"></div>
                    <div className={isMobile? "Posts-mobile":"contactHeading"}>
                        
                        <h1 className={isMobile? "headingSizes-mobile":"headingSizes"}>Our Privacy Policy</h1>
                        <Wave></Wave>
                    </div>
                </div>
            </div>
            <BottomBanner></BottomBanner>
        </div>
    )
    
}

export default PrivacyPolicy
