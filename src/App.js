import React from 'react';
import './App.css';
import Container from './components/StructuralComponents/Container'; 
import { useMediaQuery } from 'react-responsive';
import { BrowserRouter } from 'react-router-dom';
import {Helmet} from "react-helmet";



function App() {
  
  //Checking platform the page is loaded on; phone/smaller screen or a Desktop
  const DesktopOrMobile = () => {
    let isMobile = useMediaQuery({ maxWidth: 970 })
    return (
 
      <div className ={`containero${isMobile ? "-mobile" : ""}`}>
        <Container mobileClass={`${isMobile ? "mobile" : ""}`}></Container>
      </div>
    )
  }


  // Rendering the component above 
  return (
    <div className="App">
      <Helmet>
          <meta charSet="utf-8" />
          <title>Green</title>
          {/* <img  id="favicon" rel="icon" href="./Media/Logos/PNG/LighterLogo.png" /> */}
      </Helmet>

      <BrowserRouter>
        <DesktopOrMobile>
        </DesktopOrMobile>
      </BrowserRouter>
    </div>
  );
}

export default App;
