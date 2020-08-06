import React from 'react'
import styled from 'styled-components'
import Button from "../button"
const Container = styled.div`
    background: rgb(34,34,34);
    background: -moz-linear-gradient(156deg, rgba(34,34,34,1) 0%, rgba(0,1,65,1) 100%);
    background: -webkit-linear-gradient(156deg, rgba(34,34,34,1) 0%, rgba(0,1,65,1) 100%);
    background: linear-gradient(156deg, rgba(34,34,34,1) 0%, rgba(0,1,65,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#222222",endColorstr="#000141",GradientType=1); 
    margin: 0;
    padding-top: 5em;
    height: 100vh;
    display: grid;
    grid-template-rows: 0.8fr auto auto 0.1fr auto 1fr;
    grid-row-gap: 1em;
    grid-template-columns: 0.5fr 4fr 0.5fr;
    justify-items: start;
`

const Title = styled.h1`
    margin-top: 0;
    margin-bottom: 0;
    font-size: 4rem;
    font-weight: 300;
    color: white;
    grid-row: 3;
    grid-column: 2;
    span {
        font-weight: 600;
    }

`

const Subtitle = styled.h3`
    margin-top: 0;
    margin-bottom: 0;
    font-size: 2rem;
    font-weight: 200;
    color: white;
    grid-row: 2;
    grid-column: 2;
`

const StyledButtonWrapper = styled.div`
    grid-row: 5;
    display: flex;
    justify-content: space-between;
    grid-column: 2;
    .portfolio {
        background: rgba(255,255,255, 0.7);
        color: rgba(0, 0, 0, 0.9);
        &:hover {
            background: rgba(255,255,255, 1);
            color: rgba(0, 0, 0, 1);
        }
    }
    .about {
        margin-left: 1rem;
    }
`

const duration = 250;
const preDelay = 300;

export default () => (
    <Container>
        <Title 
            data-sal="slide-up"
            data-sal-delay={(preDelay + duration).toString()}
            data-sal-easing="ease-in"
            data-sal-duration={duration.toString()}>
            Create your own <span>impactful websites and apps</span> with me.
        </Title>
        <Subtitle
            data-sal="slide-up"
            data-sal-delay={(preDelay).toString()}
            data-sal-easing="ease-in"
            data-sal-duration={duration.toString()}>
            Hello! I'm Davis, a Full Stack Developer.
        </Subtitle>
        <StyledButtonWrapper
            data-sal="fade"
            data-sal-delay={(preDelay + duration*2).toString()}
            data-sal-easing="ease-in"
            data-sal-duration={duration.toString()}>
            <Button className="portfolio" to="#portfolio">See My Works</Button>
            <Button className="about" to="#about">About Me</Button>
        </StyledButtonWrapper>
    </Container>
)
