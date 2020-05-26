import React from 'react'
import Wave from '../../StructuralComponents/Wave'
import BottomBanner from '../../StructuralComponents/BottomBanner'
import { useMediaQuery } from 'react-responsive';
// import SimpleMap from '../../StructuralComponents/Map';
import GoogleMaps from '../../StructuralComponents/Map';
import Form from './form';
// import GoogleMapReact from 'google-map-react';
import {Helmet} from "react-helmet";

const Contact=()=>{
    let isMobile=useMediaQuery({ maxWidth: 970 });
    
    return (
        <div>
            <Helmet>
                <title> Green Foundation - Contact Us</title>
            </Helmet>
            
            <div className="contactContainer" >
                <div className="overlay"></div>
                <div className="contactHeading" >
                    <h1>Contact</h1>
                    <Wave></Wave>
                </div>
                
                <div className="whiteBackground">
                    <div className="contactContent">
                        <Form isMobile={isMobile}></Form>
                        <ContactInfo></ContactInfo>
                    </div>
                </div>

            </div>
            
            <BottomBanner></BottomBanner>
        </div>
    )
}




const ContactInfo=()=>{
    let isMobile=useMediaQuery({ maxWidth: 767 });
    return(
        <div className={isMobile? "contactPanel-mobile":"contactPanel"}>
            <GoogleMaps></GoogleMaps>
            <div className={isMobile? "contactDetails-mobile card":"contactDetails card"}>
                
                <div className="address">
                    <h4>Address</h4>
                    <p>Address Line 1,</p>
                    <p>Address Line 2, </p>
                    <p>POSTCODE</p>
                </div>
                
                <div className="PhoneEmail">
                    <h4> Call or Email</h4>
                    <p>0191 300 6161</p>
                    <p>info@thegreenfoundation</p>
                </div>
            </div>

        </div>
    )
}


export default Contact
