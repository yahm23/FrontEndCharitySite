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

        await fetch("http://localhost:1337/blogs/")
        .then(response => response.json())
        .then(response => {
            setStory(response);            
        })

        .catch(err => setErrors(err));
    }
    
    useEffect(() => {
        fetchData();
        // console.log(fetchData());
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
        {/* <Container mobileClass={`${isMobile ? "mobile" : ""}`}></Container> */}
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
                   <p className={isMobile ?"blurb-mobile":"blurb"}>
                    Bacon ipsum dolor amet picanha ham hock tri-tip pork, t-bone drumstick chislic pork belly chuck hamburger ground round. Filet mignon alcatra biltong hamburger pig flank andouille turkey doner venison beef ribs. Landjaeger short ribs kevin shoulder turkey frankfurter tail spare ribs tri-tip alcatra burgdoggen pastrami. Flank drumstick t-bone swine. Leberkas pancetta sausage venison meatloaf capicola flank. Beef ribs t-bone chuck pork belly pastrami alcatra. Kevin boudin shoulder, ribeye fatback cupim frankfurter sirloin cow pork chop.
                    Alcatra pig chuck, pork loin ball tip leberkas rump chicken. Flank pig frankfurter pork sausage shank. T-bone burgdoggen shank brisket kevin. 
                    <br></br>
                    <br></br>
                    Cow pork belly pork chop porchetta, tenderloin buffalo turducken turkey meatball t-bone. T-bone pork belly corned beef buffalo. Picanha kevin pork chop bacon, brisket burgdoggen ham hamburger frankfurter shankle ground round ribeye biltong alcatra.            Chislic doner t-bone leberkas, buffalo rump kielbasa turducken bresaola porchetta sausage swine pork loin. Landjaeger short loin strip steak prosciutto short ribs cupim ground round boudin t-bone pork chop tri-tip kielbasa venison beef. Shoulder chislic chicken, pig salami shank rump. Pork loin spare ribs fatback, kevin biltong meatloaf salami shank turkey jowl andouille flank brisket chuck. Tongue short ribs alcatra ball tip. Burgdoggen buffalo kevin strip steak cow, swine filet mignon tail porchetta spare ribs. Alcatra bresaola ham pancetta turducken, burgdoggen turkey.
                    Short loin chislic buffalo, je our generator a try… it’s tasty!
                </p>
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
