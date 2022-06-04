import React from 'react'
import styled from 'styled-components';
import SectionTitle from '../SectionTitle/SectionTitle';
import WorkInfoDiv from '../WorkInfoDiv/WorkInfoDiv';


const PreviousSection = styled.section`
    // display: flex;
    // flex-direction: column;
    width: 100%;
    // align-items: center;
    // justify-content: center;
    height: 70vh;
    background: green;
    display: grid;
`
const WorkInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const WorkLink = styled.a`
    tect-decoration: none;
`


export default function PreviousWorksSection() {
  return (
    <PreviousSection>
        <SectionTitle title="Some Thing I've Built" pos="3"/>
        <WorkInfo>
            <WorkInfoDiv workName="HQ CINEMAS"></WorkInfoDiv>
        </WorkInfo>
    </PreviousSection>
  )
}
