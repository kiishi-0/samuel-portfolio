import { display } from '@mui/system'
import React from 'react'
import styled from 'styled-components'



const NavContainer = styled.nav`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 20px 20px;
    // background: green;
    &.sticky{
        width: 100%;
        background: #0a192f4d;
        -webkit-backdrop-filter: blur(10px);
        backdrop-filter: blur(10px);
        z-index: 200;
        position: fixed;
        @media(max-width:904px){
            width: 100%;
            background: #0a192f4d;
            -webkit-backdrop-filter: blur(10px);
            backdrop-filter: blur(10px);
            z-index: 200;
        }
    }
    
`
const NavElements = styled.ol`
    width: 100%;
    // background: red;
    font-family: 'Fira Code', monospace;
    display: flex;
    align-items: center;
    justify-content: flex-end; 
    
    
    li{
        list-style: none;
        color:#59D9B5 ;
        font-size: 14px;
        font-family: 'Fira Code', monospace;
        margin: 0 25px;
        counter-increment: item 1;
        :before {
            content: "0" counter(item) ".";
            margin-bottom: 5px;
            text-align: center;
        }
        @media(max-width: 768px){
            position: relative;
            margin: 0px auto 20px;
            :before{
                display: block;
            }
        }
        a{
            text-decoration: none;
            color: #818DA6;
            :hover{
                color: #59D9B5;
            }
        }
    }
    @media(max-width: 768px){
        flex-direction: column;
        justify-content: center;
        width: 100%;
    }

`

const ResumeButton = styled.button`
    padding: 12px 16px;
    background: 0;
    color: #59D9B5;
    border: 1px solid #59D9B5;
    border-radius: 5px;
    margin: 0 25px;
    cursor: pointer;
    transition: background ease .25s;
    &:hover{
        background: #61dafb34;
    }
`
const NavColumn = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    @media(max-width: 768px;){
        width: 100%;
    }
`
const Logo = styled.p`
    color: #64ffda;
    font-family: 'Poppins', Roboto, sans-serif;
`
const BurgerBtn = styled.button`
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: relative;
    cursor: pointer;
    border: none;
`
const BurgerContainer = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    top: 0;
    right: 0;
    z-index: 1000;
`
const BurgerBar = styled.div`
    width: 30px; 
    height: 2px;
    background: #64ffda;
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    :after{
        position: absolute;
        content: '';
        width: 25px;
        height: 2px;
        bottom:10px;
        right: 0; 
        background: #64ffda;
    }
    :before{
        position: absolute;
        content: '';
        width: 20px;
        height: 2px;
        top: 10px;
        right: 0; 
        background: #64ffda;
    }
    @media(max-width: 768px){
        display: block;
    }
`
const NavLinks = styled.a`

`
const NavLinksContainer = styled.aside`

    width: 100%;
    transition: right .25s linear;
    z-index: 100;
    // :before{
    //     position: absolute;
    //     width: 100%;
    //     content: '';
    //     top: 0;
    //     left: -100%;
    //     background: #0a192f4d;
    //     height: 100vh;
    //     -webkit-backdrop-filter: blur(10px);
    //     backdrop-filter: blur(10px)
    // }
    @media(max-width: 768px){
        display: flex;
        align-items: center;
        justify-content: center;
        width: min(75vw, 400px);
        position: fixed;
        right: -150%;
        top: 0;
        height: 100vh;
        background: #112240;

    }
    
    
`

// const BlurBack = styled.div`
//     position: absolute;
//     width: 100%;
//     height: 100vh;
//     display: none;
//     top: 0;
//     left: 0;
//     -webkit-backdrop-filter: 10px; 
//     backdrop-filter: 10px;
//     background: #0a192f4d;
//     z-index: 70; 
// `

export default function Nav() {
    const shiftNav = () =>{
        let elements = document.getElementById("elements");
        let bblur = document.getElementById("bblur");
        if(elements.style.right === "-150%"){
            elements.style.right = '0';
            bblur.style.display = 'block'
        }else{
            elements.style.right = '-150%';
            bblur.style.display = 'none'
        }
    }
    window.addEventListener('scroll', function (){
        var header = document.querySelector('nav');
        header.classList.toggle('sticky', this.window.scrollY > 0)
    })
  return (
    <NavContainer>
        <NavColumn>
            <Logo>Samuel Owolabi</Logo>
            <BurgerContainer id="btn" onClick={shiftNav}>
                <BurgerBtn>
                    <BurgerBar></BurgerBar>
                </BurgerBtn>
            </BurgerContainer>
        </NavColumn>
        <NavLinksContainer id="elements">
            <NavElements start="01" >
                <li><NavLinks onClick={shiftNav} href='#about'>About</NavLinks></li>
                <li><NavLinks onClick={shiftNav} href='#experience'>Experience</NavLinks></li>
                <li><NavLinks onClick={shiftNav} href='#work'>Work</NavLinks></li>
                <li><NavLinks onClick={shiftNav} href='#contacts'>Contact</NavLinks></li>
                <NavLinks class="resume-button" href="/resume.pdf" target="_blank" rel="noopener noreferrer"><ResumeButton>Resume</ResumeButton></NavLinks>
            </NavElements>
        </NavLinksContainer>
        
    </NavContainer>
    
  )
}
