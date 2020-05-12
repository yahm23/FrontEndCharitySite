import React, { Component } from 'react'
import Wave from '../../StructuralComponents/Wave'
import BottomBanner from '../../StructuralComponents/BottomBanner'
import { useMediaQuery } from 'react-responsive';


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
                </div>
            
            </div>
            
            <BottomBanner></BottomBanner>
        </div>
    )
}


export default Contact
