import React from 'react'
import styled from 'styled-components'


const WorkContent = styled.div`
    grid-column: 7 / -1;
    grid-row: 1/2;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 10;
    justify-content: center;
    text-align: right;
`
// const WorkImageDiv = styled.div`
//     width: 350px;
//     height: 270px;
// `

const Featured = styled.h3`
    color: #59D9B5;
    font-weight: 200;
    font-family: 'Fira Code', monospace;
    font-size: 14px;
    width: 100%;
    margin: 10px 0;
`
const WorkName = styled.a`
    font-family: 'Inter', sans-serif;
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 20px;
    text-decoration: none;
    // width: 100%;
    color: #ccd6f6;
    transition: color linear .25s;
    :hover{
        color: #59D9B5; 
    }
`
const WorkNameH3 = styled.h3`
    width: 100%;
`
const WorkInfoTextDiv = styled.div`
    display: flex;
    width: 100%;
    text-align: right;
    padding: 20px;
    background: #112240;
    margin: 20px 0;
    border-radius: 4px;
    transition: linear .25s;
    :hover{
        box-shadow: 0 20px 30px -15px rgba(2,12,27,0.7);
    }
`
const WorkInfoText = styled.p`
    color: #ccd6f6;
    font-size: 18px;
    font-family: 'Inter', sans-serif;
`
const ToolsDiv = styled.ul`
    display: flex;
    text-align: right;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
`
const ToolItems = styled.li`
    color: #a8b2d1;
    font-family: 'Fira Code', monospace;
    list-style: none;
    font-size: 13px;
    margin: 0 0 0 10px;
`

const LinksDiv = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    padding: 15px 0;
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
export default function WorkInfoDiv(props) {
  return (
    <WorkContent>
        <Featured>Featured Project</Featured>
        <WorkNameH3>
            <WorkName href="https://hqcinemas.com/">{props.workName}</WorkName>
        </WorkNameH3>
        <WorkInfoTextDiv>
            <WorkInfoText>
                A minimal, dark blue theme for VS Code, 
                Sublime Text, Atom, iTerm, and more. Available 
                on Visual Studio Marketplace, Package Control, 
                Atom Package Manager, and npm.
            </WorkInfoText>
        </WorkInfoTextDiv>
        <ToolsDiv>
            <ToolItems>VS Code</ToolItems>
            <ToolItems>Sublime Text</ToolItems>
            <ToolItems>Atom</ToolItems>
            <ToolItems>Hyper</ToolItems>
        </ToolsDiv>
        <LinksDiv>
            <LinkTo href='https://github.com/miame3019' rel='noopener' target="_blank">
                <ImageDiv>
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </ImageDiv>
            </LinkTo>
            <LinkTo href="https://hqcinemas.com/" rel='noopener' target="_blank">
                <ImageDiv>
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </ImageDiv>
            </LinkTo>
        </LinksDiv>
    </WorkContent>
    
  )
}
