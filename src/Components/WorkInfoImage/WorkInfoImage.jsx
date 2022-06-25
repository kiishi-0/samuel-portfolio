import React from 'react';
import styled from 'styled-components';


// const WorkImageContainer = styled.div`
//     grid-column: 1/8;
// `
// const ImageDiv = styled.div`
//     width: 100%;
//     :before
// `
const WorkImageContainer = styled.picture`
  grid-column: 1/8;
  position: relative;
  grid-row: 1/2;
  // width: 300px;
  position: relative;
  background: #59D9B5;
  height: 100%;
  border-radius: 5px;
  z-index: 1;
  @media(max-width: 768px){
    grid-column: 1/-1;
  }
`
const ImageDiv = styled.img`
    position: relative;
    opacity: .45;
    z-index: 5;
    width: 100%;    
    object-fit: cover;
    height: 100%;
    border-radius: 5px;
    transition: opacity .25s ease;
    filter: grayscale(80%);
    :hover{
        opacity: 1;
    }
    
`
export default function WorkInfoImage(props) {
  return (
    <WorkImageContainer>
        <ImageDiv src={props.image}/>
    </WorkImageContainer>
  )
}
