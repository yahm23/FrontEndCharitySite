import React from 'react'
import BottomBanner from '../../StructuralComponents/BottomBanner'
import { useMediaQuery } from 'react-responsive';
import Wave from '../../StructuralComponents/Wave';
import {Helmet} from "react-helmet";
import Form from './form';


const Donation =()=> {
    let isMobile = useMediaQuery({ maxWidth: 970 })

    return (
        <div>
            <Helmet>
                <title>Green Foundation - Donate</title>
            </Helmet>

            <div  className={isMobile? "donationContainer-mobile":"donationContainer"}>

                 
                <div className={isMobile? "Posts-mobile":"contactHeading"}>
                    <h1>Donate</h1>
                    <Wave></Wave>
                </div>
                <div className="whiteBackground">
                    <div className="descriptionContainer">
                        <Form>

                        </Form>
                    </div>
                </div>
                
            </div>
            <BottomBanner></BottomBanner>
        </div>
    )
}


export default Donation
