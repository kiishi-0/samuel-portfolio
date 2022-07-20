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
    font-size: clamp(40px, 8vw, 70px);
`
const MoreInfoText = styled.p`
    font-size: 20px;
    color: #818DA6;
    max-width: 540px;
    @media(max-width: 414px){
        width: 100%;
    }
`
export default function LandingSection() {
  return (
    <LandingSectionDiv className='heee'>
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
            An innovative multi-discipline and Solution oriented 
            IT professional seeking a position in any network 
            engineering firm where my dedication ,ability to meet 
            goals to troubleshooting skills can be fully 
            utilized for the better growth and profit of company
            </MoreInfoText>
        </BigTextDiv>
    </LandingSectionDiv>
  )
}
