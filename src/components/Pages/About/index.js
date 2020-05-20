import React from 'react'
import BottomBanner from '../../StructuralComponents/BottomBanner'
import { useMediaQuery } from 'react-responsive';
import Wave from '../../StructuralComponents/Wave';
import {Helmet} from "react-helmet";



const About = ()=> {
    let isMobile = useMediaQuery({ maxWidth: 767 })

    return (
        <div> 
            <Helmet>
                <title>Green Foundation - About Us</title>
                {/* <img  id="favicon" rel="icon" href="./Media/Logos/PNG/LighterLogo.png" /> */}
            </Helmet>
            <div className="aboutcontainer">        
                <div className="overlay"></div>
                
                <div className={isMobile ?"Posts-mobile":"contactHeading"} >
                    <h1 className=""> About The Green Foundation</h1>
                    <Wave></Wave>
                </div>


                    <div className="whiteBackground">
                        <div className="descriptionContainer">

                            <div className="individualArticle">

                                <p>
                                    The Green Foundation is based in Newcastle Upon Tyne, and is the charity arm of Green - a tech focused energy supplier which provides renewable energy to its Members. The Green Foundation is a grant making charity which aims to educate about sustainability and renewable energy, to tackle fuel poverty through hardship grants, and to promote sustainable developments in the community.
                                    The Green Foundation is overseen by the board of trustees who work together to achieve the charitable mission of the Foundation. The Green Foundation is funded by Green which provides a donation of £1 for each Member which joins the supplier, and of which 100% is used to further the goals of The Green Foundation.
                                    The Green Foundation supports individuals in the heart of our local communities, and throughout the United Kingdom. We offer three different types of support, including:
                                </p>

                                <p>
                                    ● Educational Events - The Green Foundation will attend schools, colleges, community centres, and events to provide workshops, lectures, seminars, or conferences to teach about sustainability and renewable energy.
                                </p>

                                <p>
                                    ● Fuel Poverty Grants - The Green Foundation offers grants of up to £150 for individuals, organisations, and communities to nominate families and individuals in extreme financial hardship to receive money towards energy debt.
                                </p>

                                <p>
                                    ● Regeneration Projects - We accept applications from individuals, organisations, and communities to provide funding and grants towards regeneration projects and renewable energy projects. These will be submitted to Members of Green to vote to determine who receives funding.
                                </p>
                            </div>
            
            </div>
                        
                        </div>
                    </div>
            

            <BottomBanner></BottomBanner>

        </div>
    )
    
}

export default About
