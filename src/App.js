import React from 'react';
import './App.css';
import Container from './components/StructuralComponents/Container'; 
import { useMediaQuery } from 'react-responsive';
import { BrowserRouter } from 'react-router-dom';

function App() {
  
  //Checking platform the page is loaded on; phone/smaller screen or a Desktop
  const DesktopOrMobile = () => {
    let isMobile = useMediaQuery({ maxWidth: 767 })
    return (
 
      <div className ={`container${isMobile ? "-mobile" : ""}`}>
        <Container mobileClass={`${isMobile ? "mobile" : ""}`}></Container>
      </div>
    )
  }


  // Rendering the component above 
  return (
    <div className="App">
      <BrowserRouter>
        <DesktopOrMobile>
        </DesktopOrMobile>
      </BrowserRouter>
    </div>
  );
}

export default App;
