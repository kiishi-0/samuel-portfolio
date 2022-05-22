import React from 'react';
import styled from 'styled-components';


const LandingSectionDiv = styled.div`
    display: flex;
    width: 100%;
    min-height: 100vh;
    align-items: center;
    justify-content: flex-start;
    // background: yellow;

`
const BigTextDiv = styled.div`
    flex-direction: column;
    display: flex-start;
    text-align: left;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    // background: red;
    h1{
        // font-size: 60px;
        font-weight: ;
    }

`
const HelloText = styled.p`
    color: #59D9B5;
    font-size: 18px;
    font-family: 'Space Mono', monospace;

`
const Namer = styled.h1`
    font-size: clamp(40px, 8vw, 80px);
    color: #CEDAF2;
`
const JobInfoText = styled.h2`
    color: #818DA6;
    font-size: clamp(35px, 8vw, 70px);
`
const MoreInfoText = styled.p`
    font-size: 20px;
    color: #818DA6;
    width: 65%;
`
export default function LandingSection() {
  return (
    <LandingSectionDiv>
        <BigTextDiv>
            <HelloText>
                Hi, my name is
            </HelloText>
            <Namer>
                Samuel Owolabi
            </Namer>
            <JobInfoText>
                I build things for the web.
            </JobInfoText>
            <MoreInfoText>
                I’m a software engineer specializing in building (and occasionally 
                designing) exceptional digital experiences. Currently, I’m 
                focused on building accessible, human-centered products at 
            </MoreInfoText>
        </BigTextDiv>
    </LandingSectionDiv>
  )
}
