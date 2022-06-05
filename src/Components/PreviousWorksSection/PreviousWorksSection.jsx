import React from 'react'
import styled from 'styled-components';
import SectionTitle from '../SectionTitle/SectionTitle';
import WorkInfoDiv from '../WorkInfoDiv/WorkInfoDiv';
import WorkInfoImage from '../WorkInfoImage/WorkInfoImage';
import work from '../../images/work.png'


const PreviousSection = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
    height: 100vh;
    
    
`


const WorkContentDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 10px;
    padding: 70px 0;
    // background: green;
`

export default function PreviousWorksSection() {
  return (
    <PreviousSection id="work">
        <SectionTitle title="Some Thing I've Built" pos="3"/>
        <WorkContentDiv>
                <WorkInfoImage image={work}></WorkInfoImage>
                <WorkInfoDiv workName="HQ CINEMAS"></WorkInfoDiv>
        </WorkContentDiv>
        
    </PreviousSection>
  )
}
