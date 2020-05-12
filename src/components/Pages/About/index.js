import React, { Component } from 'react'
import BottomBanner from '../../StructuralComponents/BottomBanner'
import { useMediaQuery } from 'react-responsive';


const About = ()=> {
    let isMobile = useMediaQuery({ maxWidth: 767 })

    return (
        <div className="blogBanner">
            <div className="blogcontainer">

                <div className={isMobile ?"Posts-mobile":"Posts"} >
                    <h1 className="noBottomPadding"> About The Green Foundation</h1>
                    <div className= "wave-container">
                            <svg  className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 130 1420 95">
                            <path fill="white" fillOpacity="1" d="M0,160L120,165.3C240,171,480,181,720,176C960,171,1200,149,1320,138.7L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
                            </svg>
                    </div>
                    
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
            <BottomBanner></BottomBanner>

        </div>
    )
    
}

export default About
