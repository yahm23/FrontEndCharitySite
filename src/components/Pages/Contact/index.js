import React from 'react'
import Wave from '../../StructuralComponents/Wave'
import BottomBanner from '../../StructuralComponents/BottomBanner'
import { useMediaQuery } from 'react-responsive';
// import SimpleMap from '../../StructuralComponents/Map';
import GoogleMaps from '../../StructuralComponents/Map';
import Form from './form';
// import GoogleMapReact from 'google-map-react';


const Contact=()=>{

    return (
        <div>
            <div className="contactContainer" >

                <div className="contactHeading" >
                    <h1>Contact</h1>
                    <Wave></Wave>
                </div>

                <div className="contactContent">
                
                    <Form ></Form>
                    <ContactInfo></ContactInfo>
                </div>
            </div>
            
            <BottomBanner></BottomBanner>
        </div>
    )
}




const ContactInfo=()=>{
    return(
        <div className="">
            <div className="contactDetails card">
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

            <GoogleMaps></GoogleMaps>
        </div>
    )
}


export default Contact
