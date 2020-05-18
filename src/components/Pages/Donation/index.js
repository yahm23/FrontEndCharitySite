import React from 'react'
import BottomBanner from '../../StructuralComponents/BottomBanner'
import { useMediaQuery } from 'react-responsive';
import Wave from '../../StructuralComponents/Wave';
import {Helmet} from "react-helmet";


const Donation =()=> {
    let isMobile = useMediaQuery({ maxWidth: 767 })

    return (
        <div>
            <Helmet>
                <title>Donate</title>
             </Helmet>
            <div  className={isMobile? "donationContainer-mobile":"donationContainer"}>

                <div >      
                    <div className={isMobile? "Posts-mobile":"contactHeading"}>
                        <h1>Donate</h1>
                        <Wave></Wave>
                    </div>

                </div>

            



            </div>
            <BottomBanner></BottomBanner>
        </div>
    )
}


export default Donation
