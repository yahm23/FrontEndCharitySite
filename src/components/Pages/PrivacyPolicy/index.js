import React from 'react'
import BottomBanner from '../../StructuralComponents/BottomBanner'
import { useMediaQuery } from 'react-responsive';
import Wave from '../../StructuralComponents/Wave';

const  PrivacyPolicy =()=> {
    
    let isMobile = useMediaQuery({ maxWidth: 767 })

    return (
        <div>
            <div  className={isMobile? "donationContainer-mobile":"donationContainer"}>
                <div>      
                    <div className={isMobile? "Posts-mobile":"contactHeading"}>
                        <h1>Our PrivacyPolicy</h1>
                        <Wave></Wave>
                    </div>
                </div>
            </div>
            <BottomBanner></BottomBanner>
        </div>
    )
    
}

export default PrivacyPolicy
