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
`
const NavElements = styled.ol`
    width: 100%;
    // background: red;
    font-family: 'Fira Code', monospace;
    display: flex;
    align-items: center;
    justify-content: flex-end; 
    li{
        color:#59D9B5 ;
        font-size: 14px;
        font-family: 'Fira Code', monospace;
        margin: 0 25px;
        a{
            text-decoration: none;
            color: #818DA6;
            :hover{
                color: #59D9B5;
            }
        }
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
const NavLinks = styled.a`

`

export default function Nav() {
  return (
    <NavContainer>
        <NavElements start="01">
            <li><NavLinks href='#about'>About</NavLinks></li>
            <li><NavLinks href='#experience'>Experience</NavLinks></li>
            <li><NavLinks href='#work'>Work</NavLinks></li>
            <li><NavLinks href='#contacts'>Contact</NavLinks></li>
            <NavLinks class="resume-button" href="/resume.pdf" target="_blank" rel="noopener noreferrer"><ResumeButton>Resume</ResumeButton></NavLinks>
        </NavElements>
    </NavContainer>
  )
}
