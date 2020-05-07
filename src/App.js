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
      // Passing down props for different classes based on platform, 
      // space  will be left at bottom of screen for typing on mobile

      <div className ={`container${isMobile ? "-mobile" : ""}`}>
        <Container mobileClass={`${isMobile ? "mobile" : ""}`}></Container>
      </div>
    )
  }


  return (
    // Rendering the component above 
    <div className="App">
      <BrowserRouter>
        <DesktopOrMobile>
        </DesktopOrMobile>
      </BrowserRouter>
    </div>
  );
}

export default App;
