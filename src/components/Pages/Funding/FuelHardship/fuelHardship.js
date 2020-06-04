import React from 'react'
import BottomBanner from '../../../StructuralComponents/BottomBanner'
import { useMediaQuery } from 'react-responsive';
import Wave from '../../../StructuralComponents/Wave';
import {Helmet} from "react-helmet";
import MultiStepForm from './FormComps/multiStepForm';


const FuelHardship =()=> {
    let isMobile = useMediaQuery({ maxWidth: 194 })

    return (
        <div>
            <Helmet>
                <title>Green Foundation - Fuel Hardship</title>
            </Helmet>
            <div  className={isMobile? "donationContainer-mobile":"donationContainer"}>

                <div className="overlay"></div>
        
                <div className={isMobile? "Posts-mobile":"contactHeading"}>
                    <h1>Fuel Hardship Fund</h1>
                    <Wave></Wave>
                </div>

                <div className="whiteBackground">

                <div className="contactContent">
                        <MultiStepForm></MultiStepForm>
                     </div>
                </div>

            </div>
            <BottomBanner></BottomBanner>
        </div>
    )
}


export default FuelHardship
