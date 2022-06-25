import './App.css';
import { useState, useEffect } from 'react';
import LandingSection from './Components/LandingSection/LandingSection';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import styled from 'styled-components';
import Nav from './Components/Nav/Nav';
import AboutSection from './Components/AboutSection/AboutSection';
import WorkedSection from './Components/WorkedSection/WorkedSection';
import Footer from './Components/Footer/Footer';
import PreviousWorksSection from './Components/PreviousWorksSection/PreviousWorksSection';


const ComponentsWrapper = styled.div`
  width: 100%;
  padding: 0 10%;
  @media(max-width: 414px){
    padding: 0 7%;
  }

`

function App() {


  const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true)
      setTimeout(() => {setLoading(false)}, 1000)
    },[]);

  return (
    <div className="App">
      
      <ComponentsWrapper>
        {loading ? (
          <div className="sweet-loading">
            <ClimbingBoxLoader color={'#59D9B5'} loading={loading} size={30} />
          </div>
          )
          : 
          (
          <div className="App-Container">
            <Nav></Nav>
            <LandingSection ></LandingSection>
            <AboutSection ></AboutSection>
            <WorkedSection></WorkedSection>
            <PreviousWorksSection></PreviousWorksSection>
            <Footer></Footer>
          </div>
          )
        }
      </ComponentsWrapper>
      
      
    </div>
  );
}

export default App;
