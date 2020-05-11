import React, { Component, useState, useEffect, setErrors} from 'react'
import {Link} from "react-router-dom";
// import NavBar from '../NavBar'
import BottomBanner from "../../StructuralComponents/BottomBanner";
import { useMediaQuery } from 'react-responsive';




export class Home extends Component { 

    render() {
        return (
            <div>
                <HomeComp>
                </HomeComp>
            </div> 
        )
    }
    
}

const Story = ()=>{
    var [data,setStory] = useState();

    async function fetchData() {

        await fetch("https://blog-back-end-green.herokuapp.com/blogs")
        .then(response => response.json())
        .then(response => {
            setStory(response);            
        })

        .catch(err => setErrors(err));
    }
    
    useEffect(() => {
        fetchData();
        return () => {
            console.log('unmounting...') 
        }
    },[]);

    //Get first 3 entries of the stories available
    if (data ){
        const sampleStories = data.slice(0,3);

        return(
            
                <div className="stories">
                    {console.log('sampleStories'+sampleStories)}

                    {sampleStories.map(post => (
                
                    <Link key={post.id} to = {`/blogs/`+post.id}>
                        <div className = "story">
                            <h2 className="exampleStory">{post.title}</h2>
                            
                            <div className="readStory">
                                <h3 className="padding" >Read the full story</h3>
                                <svg height="32" fill="white"className="chevron-right" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z"/></svg>
                            </div>

                        </div>
                    </Link>


                    ))
                    }

                </div>
    
        )
    } else {
        return null
    }


}

const HomeComp = () => {
    let isMobile = useMediaQuery({ maxWidth: 767 })
    return (
    

      <div >
        <div >
                <div className={isMobile ?"main-container-mobile":"main-container"} >
                    

                    <div className={isMobile ? "homeText-mobile":"homeText"}>
                        <h1 className={isMobile ?"local-mobile":"local"}>Your local Community built on a Green Foundation</h1> 
                        <h2 className="localSmall">We are here to help you and your community.</h2>
                        <div className="buttons">
                            <Link to='/donation'><button id="bigger"className="donateButton2"> Make a donation</button></Link>
                            <Link to='/about'><button id="bigger"className={isMobile ?"LearnButton-mobile":"LearnButton"}> Learn More</button></Link>
                        </div>  
                        

                    </div>

                    <div className = "homepageDescription"></div>
                    <div className= "wave-container">
                        <svg  className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 130 1420 95">
                        <path fill="white" fillOpacity="1" d="M0,160L120,165.3C240,171,480,181,720,176C960,171,1200,149,1320,138.7L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
                        </svg>
                    </div>
                </div>
            

            <div className="whiteBackground">
            <div className={isMobile ?"descriptionContainer-mobile":"descriptionContainer"}>
                <h2 className={isMobile ?"black-mobile":"black"}>We are here for the people who make a difference in the community</h2> 
                    <div className= "boxes">
                        <div><h1 className={isMobile ?"numbers-mobile":"numbers"}>10,000</h1><h3 className="itemName">Item name</h3></div>
                        <div><h1 className={isMobile ?"numbers-mobile":"numbers"}>10,000</h1><h3 className="itemName">Item name</h3></div>
                        <div><h1 className={isMobile ?"numbers-mobile":"numbers"}>10,000</h1><h3 className="itemName">Item name</h3></div>
                    </div>
                
                {/* <p className={`blurb${this.props.route.something ? "-mobile" : ""}`}> */}
                   <div className={isMobile ?"blurb-mobile":"blurb"}>
                    
                    <p className="mini-title">
                        The Green Foundation was founded in July 2020 to help Green make a difference in our local community, and throughout the country. Green provides all of our Members with renewable energy to reduce their carbon footprint, however we wanted to do more to help those in need.
                        Green donates £1 to The Green Foundation each time a new Member switches.
                    </p>

                    <br></br>
                    <p className="mini-title">Making a change in a local community, and throughout the country</p>
                    The Green Foundation understands that combating climate change requires individuals to make a change to their habits to become more sustainable. We support communities and individuals by providing education on the benefits of sustainability, conservation and renewable energy. To help those in need, we provide energy hardship grants to cover energy bills for those experiencing financial hardship or difficulties. We also provide grants towards sustainable development and regeneration projects.
                    Green strongly believes in empowering our Members to make a change in the community. To have the greatest impact, we allow our Members to vote upon sustainable development and regeneration projects that have been approved by the board of trustees. This allows Members to help select projects that they believe will have the greatest impact upon the environment or local communities.

                    <br></br>
                    <br></br>
                    <p className="mini-title">We work together with Green, with our Members at the heart</p>
                    
                    The board of trustees for The Green Foundation is responsible for the day-to-day running of the charity, and for managing the strategic direction to allow us to do the most good possible.
                    Our Members help us decide what projects should be funded. We believe that this allows The Green Foundation to be truly independent as a charity, by decentralising the decision making process across all Members, it will result in a fair decision making process.

                </div>
                </div>

                <div className="storyContainer">
                        <Story></Story>
                    <Link to='/blogs'><button className={isMobile ?"viewMore-mobile":"viewMore"}>View more success stories</button></Link>
                </div>
                <div className="blankSpace"></div>
                <hr className="solid"></hr>

                <BottomBanner></BottomBanner>

              
            </div>
        </div>

      </div>
    )
}



export default Home
