import React, { Component } from 'react'
import Wave from '../../StructuralComponents/Wave'
import BottomBanner from '../../StructuralComponents/BottomBanner'
import { useMediaQuery } from 'react-responsive';
// import SimpleMap from '../../StructuralComponents/Map';
import GoogleMaps from '../../StructuralComponents/Map';
// import GoogleMapReact from 'google-map-react';



const Contact=()=>{
    let isMobile = useMediaQuery({ maxWidth: 767 })

    return (
        <div>
            <div className={isMobile? "contactContainer-mobile":"contactContainer"} >

                <div className="contactHeading" >
                    <h1>Contact</h1>
                    <Wave></Wave>
                </div>

                <div className="contactContent">
                    <ContactContainer></ContactContainer>
                    <ContactInfo></ContactInfo>
                </div>
            
            </div>
            
            <BottomBanner></BottomBanner>
        </div>
    )
}

const ContactContainer=()=>{

    return (
        <div>
            
            <form action="/my-handling-form-page" method="post">
                <>
                
                        <label for="name">Name</label>
                        <br></br>
                        <input type="text" id="name" name="user_name"></input>
                    
                
                </>
                        <br></br>
                        <label for="mail">E-mail</label>
                        <br></br>
                        <input type="email" id="mail" name="user_email"></input>
                    
                   
                
                        <br></br>
                        <label for="number">Phone Number(Optional)</label>
                        <br></br>
                        <input type="number" id="number" name="user_enumber"></input>
                    
                  
                
                        <br></br>
                        <label for="msg">Message</label>
                        <br></br>
                        <textarea id="msg" name="user_message"></textarea>
                    
                    <ul class="button">
                        <button type="submit">Submit</button>
                    </ul>

            </form>

        </div>
        
    )
}
const ContactInfo=()=>{
    return(
        <div>
            <div className="contactDetails">
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
