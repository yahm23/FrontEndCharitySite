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
                {/* <div id="map-container-google-2" class="z-depth-1-half map-container" style="height: 500px">
                    <iframe src="https://maps.google.com/maps?q=chicago&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"
                        style="border:0" allowfullscreen></iframe>
                    </div> */}

                    <GoogleMaps></GoogleMaps>
                </div>
            
            </div>
            
            <BottomBanner></BottomBanner>
        </div>
    )
}




export default Contact
