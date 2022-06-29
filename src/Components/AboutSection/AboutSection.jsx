import React from 'react'
import styled from 'styled-components'
import samuel from '../../images/samuel.jpeg'
import SectionTitle from '../SectionTitle/SectionTitle'


const AboutSectionDiv = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 150px 0 100px;

`
const AboutContent = styled.div`
    width: 100%;
    // height: 100vh;
    padding: 40px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    div{
        flex: 1;
    }
    @media(max-width: 805px){
        flex-direction: column;
    }
`
// const AboutTitleDiv = styled.div`
//     width: 100%;
//     text-align: left;
// `
// const AboutTitle = styled.h2`
//     font-family: 'Inter', sans-serif;
//     color: #CEDAF2;
//     position: relative;
//     :before{
//         content: '01.  ';
//         font-family: 'Fira Code', monospace;
//         font-size: 28px;
//         color: #59D9B5;
//     }
//     :after{
//         content: '';
//         position: absolute;
//         top: 50%;
//         height: 1px;
//         width: 250px;
//         background: #002e69;
//         margin-left: 25px;
//     }
// `
const TextDiv = styled.div`
    text-align: left;
    width: 100%;
    font-size: 18px;
    line-height: 30px;
    color: #818DA6;
    font-family: 'Inter', sans-serif;
    display: flex;
`
const ImageDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    @media(max-width: 805px){
        margin-top: 50px;

    }
`
const ImageContainer = styled.picture`
    width: 300px;
    position: relative;
    background: #59D9B5;
    // height: 250px;
    border-radius: 5px;
    z-index: 10;
    :before{
        position: absolute;
        left: 5%; right: 0; bottom: 0; top: 5%;
        content: '';
        border: 2px solid #61dafb;
        width: 100%;
        height: 100%;
        z-index: 0;
        border-radius: 5px;
        transition: all .25s linear;
    }
    :hover:before{
        left: 2.5%; right: 0; bottom: 0; top: 2.5%;
    }
    @media(max-width: 375px){
        width: 250px;
    }
`
const SamuelImage = styled.img`
    position: relative;
    opacity: .45;
    z-index: 5;
    width: 100%;    
    object-fit: cover;
    height: 100%;
    border-radius: 5px;
    transition: opacity .25s ease;
    :hover{
        opacity: 1;
    }
    
`
export default function AboutSection() {
  return (
    <AboutSectionDiv id="about"> 
        <SectionTitle title="About Me" pos="1"></SectionTitle>
        <AboutContent>
            <TextDiv>
                Hello! My name is Brittany and I enjoy creating things 
                that live on the internet. My interest in web development 
                started back in 2012 when I decided to try editing custom 
                Tumblr themes — turns out hacking together a custom reblog 
                button taught me a lot about HTML & CSS!
                Fast-forward to today, and I’ve had the privilege of working 
                at an advertising agency, a start-up, a huge corporation, and 
                a student-led design studio. My main focus these days is building 
                accessible, inclusive products and digital experiences at Upstatement 
                for a variety of clients.
                I also recently launched a course that covers everything you 
                need to build a web app with the Spotify API using Node & React.
                Here are a few technologies I’ve been working with recently:
            </TextDiv>
            <ImageDiv>
                <ImageContainer>
                    <SamuelImage src={samuel} alt="Samuel" title='Samuel Owolabi'/>
                </ImageContainer>
                
            </ImageDiv>
        </AboutContent>
        
    </AboutSectionDiv>
  )
}
