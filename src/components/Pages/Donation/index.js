import React, { Component } from 'react'
import BottomBanner from '../../StructuralComponents/BottomBanner'
import { useMediaQuery } from 'react-responsive';
import Wave from '../../StructuralComponents/Wave';


const Donation =()=> {
    let isMobile = useMediaQuery({ maxWidth: 767 })

    return (
        <div>
            <div className={isMobile? "donationContainer-mobile":"donationContainer"}>
                <div className="Posts">
                    <h1>Donate</h1>
                    <Wave></Wave>
                </div>
            </div>
            <BottomBanner></BottomBanner>
        </div>
    )
}


export default Donation
