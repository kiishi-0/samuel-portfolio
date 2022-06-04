import React from 'react'
import styled from 'styled-components'


const WorkContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 400px;
    text-align: right;
    background: red;
    justify-self: end;
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
    width: 100%;
    color: #ccd6f6;
    transition: color linear .25s;
    :hover{
        color: #59D9B5; 
    }
`

export default function WorkInfoDiv(props) {
  return (
    <WorkContent>
        <Featured>Featured Project</Featured>
        <WorkName href="https://hqcinemas.com/">{props.workName}</WorkName>
    </WorkContent>
    
  )
}
