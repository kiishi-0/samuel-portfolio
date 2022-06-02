import React from 'react'
import styled from 'styled-components'


const FooterDiv = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const EmailDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  -webkit-box-align: center;
  .email-div{
    width: 40px;
  }
  a.icons{

  }
  a.email{
    -webkit-writing-mode: vertical-rl;
    writing-mode: vertical-lr;
    font-size: 14px;
    position: fixed;
    z-index: 200;
    right: 10%;
    bottom: 5%;
    width: 20px;
    :after{ 
      // position: relative;
      width: 1px;
      margin: 15px auto;
      height: 200px;
      content: '';
      // left: 40%/;
      display: block;
      bottom: 0;
      background: #002e69;
      // position: absolute;
    }
  }
  a.email, a.built{
    font-family: 'Fira Code', monospace;
    text-decoration: none;
    color: #818DA6;
    // width: 100%;
    font-size: 14px;
  }
  ol{
    display: flex;
    flex-direction: column;
    li{
      list-decoration: none;
    }
  }

`


export default function Footer() {
  return (
    <FooterDiv>
        {/* <ContentDiv>
            
        </ContentDiv> */}
        <EmailDiv className='email-div'>
            <a className="email" href="mailto:samuel@gmail.com" target="_blank" rel='noreferrer'>samuel@gmail.com</a>
        </EmailDiv>
        {/* <ContentDiv>
            <a className="built" href="https://kiishi-0.github.io/Portfolio/index.html" target="_blank"  rel='noreferrer'>Built by Iteoluwakiishi Oyewole</a>
        
        </ContentDiv> */}
    </FooterDiv>
  )
}
