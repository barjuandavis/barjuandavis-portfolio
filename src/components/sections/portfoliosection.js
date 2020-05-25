import React from 'react'
import styled from 'styled-components'
import StyledImage from '../styledimage'
import Button from '../button'


const Container = styled.div`
    display: grid;
    grid-template-columns: 0.5fr 4fr 0.5fr;
    grid-template-rows: 0.5fr 0.5fr auto 0.5fr;
    background: rgb(34,34,34);
    background: -moz-linear-gradient(156deg, rgba(34,34,34,1) 0%, rgba(0,1,65,1) 100%);
    background: -webkit-linear-gradient(156deg, rgba(34,34,34,1) 0%, rgba(0,1,65,1) 100%);
    background: linear-gradient(156deg, rgba(34,34,34,1) 0%, rgba(0,1,65,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#222222",endColorstr="#000141",GradientType=1);
    padding-top: 5em; 
    width: 100%;
`
const Title = styled.h1`
    font-size: 2.5rem;
    text-align: center;
    justify-self: center;
    grid-row-start: 2;
    grid-column-start: 2;
    font-weight: 300;
    margin-top: 0;
    margin-bottom: 3rem;
    margin-left: 0;
    margin-right: 0;
    span {
        font-weight: 600;
    }
`
const SubContainer = styled.div`
    align-self: center;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    grid-column-start:2;
    grid-row-start: 3;
`
const WorkContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr auto auto 1fr;
    grid-template-rows: 1fr auto auto auto 1fr;
    gap: 1rem;
    justify-content: start;
    align-content: start;
    .imgcontainer {
        grid-column: 2 / 2;
        grid-row: 2 / span 3;
        justify-self: center;
        width: 20vh;
        height: 23vh;
    }
    .button {
        grid-column: 3 / 3;
        grid-row: 4 / 4; 
        justify-self: start;
    }
`

const WorkTitle = styled.h1`
    grid-column: 3 / 3;
    grid-row: 2 / 2;
    font-weight: 600;
    font-size: 2rem;
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 0;
    margin-right: 0;
`

const WorkDescription = styled.p`
    grid-column: 3 / 3;
    grid-row: 3 / 3;
    font-weight: 400;
    font-size: 1.2rem;
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 0;
    margin-right: 0; 
`

const preDelay = 250;
const duration = 250;

export default () => (
    <Container>
        <Title data-sal="slide-up"
            data-sal-delay={preDelay.toString()}
            data-sal-easing="ease-in"
            data-sal-duration={duration.toString()}>Here are some of <span>my works.</span></Title>
        <SubContainer>
        <WorkContainer>
            <StyledImage imageName="placeholder" />
            <WorkTitle>Work Title 1</WorkTitle>
            <WorkDescription>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Saepe illo fuga veniam ipsa quaerat voluptatibus aspernatur, 
                unde qui eveniet, soluta facilis cumque praesentium animi, 
                voluptate velit consectetur sed officia fugit.
            </WorkDescription>
            <Button className="button" iconType="github">See on Github </Button>
        </WorkContainer>
        <WorkContainer>
            <StyledImage imageName="placeholder" />
            <WorkTitle>Work Title 2</WorkTitle>
            <WorkDescription>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Saepe illo fuga veniam ipsa quaerat voluptatibus aspernatur, 
                unde qui eveniet, soluta facilis cumque praesentium animi, 
                voluptate velit consectetur sed officia fugit.
            </WorkDescription>
            <Button className="button" iconType="github">See on Github </Button>
        </WorkContainer>
        <WorkContainer>
            <StyledImage imageName="placeholder" />
            <WorkTitle>Work Title 3</WorkTitle>
            <WorkDescription>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Saepe illo fuga veniam ipsa quaerat voluptatibus aspernatur, 
                unde qui eveniet, soluta facilis cumque praesentium animi, 
                voluptate velit consectetur sed officia fugit.
            </WorkDescription>
            <Button className="button" iconType="github">See on Github </Button>
        </WorkContainer>
        </SubContainer>
    </Container>
)
