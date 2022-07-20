import React, {useState} from 'react'
import styled from 'styled-components'
import SectionTitle from '../SectionTitle/SectionTitle'
import { Jobs } from '../../Info/JobInfo'



const WorkedSectionDiv = styled.section`
    display: flex;
    width: 100%;
    // margin: 0 auto;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
    margin-bottom: 100px;
    padding-top: 100px;
`
const WorkedInnerDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 75%;
    @media(max-width: 854px){
        width: 100%;
    }
    
`
const PlacesDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    text-align: left;
    width: 230px;
    // background: red;
    border-left: 1px solid #002e69;
    // margin: 25px 0;
    position: relative;
    
    @media(max-width: 805px){
        width: max-content;
        flex-direction: row;
        border-left: none;
        width: 100%;
        border-bottom: 1px solid #002e69;
        margin-bottom: 50px;
        overflow-x: scroll;
    }

`
const PlaceBtn = styled.button`
    width: 100%;
    min-height: 35px;
    flex: 1;
    border: 0;
    text-align: left;
    background: none;
    color: #818DA6;
    font-family: 'Inter', sans-serif;
    padding: 10px 25px 25px ;
    // background: green;
    // border: 1px solid black;
    cursor: pointer;
    transition: color .25s cubic-bezier(0.645,0.045,0.355,1),
                background .25s cubic-bezier(0.645,0.045,0.355,1);
    :hover{
        background: #61dafb34;
        color: #59D9B5;
    }

`
const JobsDiv = styled.div`
    width: 100%;
    display: flex;
    // flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 30px 0;
    postion: relative;
    @media(max-width: 805px){
        flex-direction: column;
    }
`
const JobInfoDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0 30px;
`
const JobIntro = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`
const JobDesc = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    transition: all linear .25s;
    justify-content: flex-start;
`
const JD = styled.ul`
    color: #818DA6;
    font-size: 16px;
    text-align: left;
    list-style: none;
    height: 300px;
    li{
        transition: all .25s linear;
        margin: 10px 0;
        position: relative;
        padding-left: 30px;
    }
    li::before {
        content: "▹";
        position: absolute;
        left: 0;
        color: #59D9B5;
        margin-right: 10px;

    }
`
const Job = styled.h4`
    color: #CEDAF2;
    font-weight: 600;
    font-size: 22px;
    transition: all .25s linear;
`
const JobDate = styled.p`
    color: #818DA6;
    padding: 0 0 15px;
    font-size: 16px;
`
const JobLocation = styled.span`
    color: #59D9B5;
    transition: all .25s linear;
`
const JobLocationLink = styled.a`
    color: #59D9B5;
    text-decoration: none;
    position: relative;
    // overflow-x: hidden;
    // width: 100%;
    transition: all .25s linear;
    :after{
        position: absolute;
        content: '';
        top: 99%;left: 0%;
        height: 1px;
        width: 0%;
        background: #59D9B5;
        transition: width .25s ease;
    }
    :hover:after{
        width: 100%;
    }
`
export default function WorkedSection() {

    const [jobInfo, setJobInfo] = useState(Jobs[0])
    // const [active/]
    const newJobInfo = (e) =>{
        let ans = e.target.value
        console.log(ans)
        let newJob = Jobs.filter((job)=> job.cname === ans)
        console.log(newJob)
        setJobInfo(newJob[0])
    }
  return (
    <WorkedSectionDiv id='experience'>
        <WorkedInnerDiv>
            <SectionTitle title="Where I've Worked" pos="2"></SectionTitle>
            <JobsDiv>
                <PlacesDiv>
                    {Jobs.map(job => <PlaceBtn onClick={newJobInfo} value={job.cname}>{job.cname}</PlaceBtn>)}
                </PlacesDiv>
                <JobInfoDiv>
                    <JobIntro>
                        <Job>{jobInfo.title} <JobLocation>@<JobLocationLink href='#' target="_blank">{jobInfo.cname}</JobLocationLink></JobLocation></Job>
                        <JobDate>{jobInfo.date}</JobDate>
                    </JobIntro>
                    <JobDesc>
                        <JD>
                            {jobInfo.specs.map(spec => <li key={spec.indexOf(spec)}>{spec}</li>)}
                        </JD>
                    </JobDesc>
                </JobInfoDiv>
            </JobsDiv>
            
        </WorkedInnerDiv>
        
    </WorkedSectionDiv>
  )
}
