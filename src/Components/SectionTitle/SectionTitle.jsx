import React from 'react'
import styled from 'styled-components'




export default function SectionTitle(props) {
    const SectionTitleDiv = styled.div`
        width: 100%;
        text-align: left;
    `
    const Title = styled.h2`
        font-family: 'Inter', sans-serif;
        color: #CEDAF2;
        position: relative;
        :before{
            content: '0${props.pos}.  ';
            font-family: 'Fira Code', monospace;
            font-size: 24px;
            font-weight: 500;
            color: #59D9B5;
        }
        :after{
            content: '';
            position: absolute;
            top: 50%;
            height: 1px;
            width: 250px;
            background: #002e69;
            margin-left: 25px;
        }
    `
  return (
    <SectionTitleDiv>
        <Title>{props.title}</Title>
    </SectionTitleDiv>
  )
}
