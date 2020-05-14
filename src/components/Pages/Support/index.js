import React from 'react'
import BottomBanner from '../../StructuralComponents/BottomBanner'
import { useMediaQuery } from 'react-responsive';
import Wave from '../../StructuralComponents/Wave';


const Support =()=> {
    let isMobile = useMediaQuery({ maxWidth: 767 })

    return (
        <div>
            <div  className={isMobile? "donationContainer-mobile":"donationContainer"}>

                <div >
                    
                    <div className={isMobile? "Posts-mobile":"contactHeading"}>
                        <h1>Support Us</h1>
                        <Wave></Wave>
                    </div>

                </div>

            </div>
            <BottomBanner></BottomBanner>
        </div>
    )
}


export default Support
