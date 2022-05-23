import React from 'react'
import styled from 'styled-components'


const FooterDiv = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const ContentDiv = styled.div`
  width: 100%;
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
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
      margin: 0 auto;
      height: 99px;
      content: '';
      background: #002e69;
      position: absolute;
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
        <ContentDiv>
            
        </ContentDiv>
        <ContentDiv className='email-div'>
            <a className="email" href="mailto:samuel@gmail.com" target="_blank" rel='noreferrer'>samuel@gmail.com</a>
        </ContentDiv>
        <ContentDiv>
            <a className="built" href="#footer" target="_blank">Built by Iteoluwakiishi Oyewole</a>
        </ContentDiv>
    </FooterDiv>
  )
}
