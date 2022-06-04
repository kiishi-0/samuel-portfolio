import React from 'react'
import styled from 'styled-components';
import github from '../../images/github.svg';

const FooterContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 22vh;
  margin: 25px auto;
  align-items: center;
  justify-content: center;
`
const ElementsDiv = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const LinkTo = styled.a`
  text-decoration: none;
  color: #818DA6;
  transition: color .25s linear;
  font-family: 'Fira Code', monospace;
  font-size: 14px;
  :hover{
    color: #59D9B5;
  }
`
const Dev = styled(LinkTo)`
  font-size: 10px;
`
const ImageDiv = styled.div`
  width: 25px;
  height: 25px;
  // display: flex;
  // align-items: center;
  // justify-content: center;
  margin: 0 10px;
  :hover svg{
    stroke: #59D9B5;
    transition: all .25s linear;
  }
`
export default function Footer() {
  return (
    <FooterContainer>
      <ElementsDiv>
        {/* <ImageDiv>
          <LogoImage src={github} alt="gitHub" />
        </ImageDiv> */}
        <LinkTo href='https://github.com/miame3019' rel='noopener' target="_blank">
          <ImageDiv>
            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#818DA6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </ImageDiv>
        </LinkTo>
        
        <LinkTo href='https://www.linkedin.com/in/owolabi-samuel-64498a204' rel='noopener' target="_blank">
          <ImageDiv>
          <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke='#818DA6'  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><title>LinkedIn</title><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </ImageDiv>
        </LinkTo>
        
        <LinkTo href="https://www.instagram.com/zaddy_sbs/" rel='noopener' target="_blank">
          <ImageDiv>
          <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#818DA6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><title>Instagram</title><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </ImageDiv>
        </LinkTo>
        
          
      </ElementsDiv>
      <ElementsDiv>
        <LinkTo href="mailto:miame2019@gmail.com"rel='noopener' target="_blank">samuelowolabi@gmail.com</LinkTo>
      </ElementsDiv>
      <ElementsDiv>
        <Dev href="https://kiishi-0.github.io/Portfolio/"rel='noopener' target="_blank" className='dev'>Developed by Iteoluwakiishi Oyewole</Dev>
      </ElementsDiv>

    </FooterContainer>
  )
}
