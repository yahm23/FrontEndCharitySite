import React from 'react'
import BottomBanner from '../../../StructuralComponents/BottomBanner'
import { useMediaQuery } from 'react-responsive';
import Wave from '../../../StructuralComponents/Wave';
import {Helmet} from "react-helmet";
import MultiStepForm from './FormComps/multiStepForm';


const SustainableDevelopment =()=> {
    let isMobile = useMediaQuery({ maxWidth: 767 })

    return (
        <div>
            <Helmet>
                <title>Green Foundation - Sustainable Development</title>
            </Helmet>
            <div  className={isMobile? "donationContainer-mobile":"donationContainer"}>

                <div className="overlay"></div>
        
                <div className={isMobile? "Posts-mobile":"contactHeading"}>
                    <h1>Sustainable Development</h1>
                    <Wave></Wave>
                </div>

                <div className="whiteBackground">
                    <MultiStepForm></MultiStepForm>
                </div>

                

            </div>
            <BottomBanner></BottomBanner>
        </div>
    )
}


export default SustainableDevelopment
