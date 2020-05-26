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
    grid-template-rows: 0.8fr [title] auto [subtitle] auto [buttons] auto 1fr;
    grid-row-gap: 1em;
    grid-template-columns: 0.5fr 4fr 0.5fr;
    justify-items: start;
`

const Title = styled.h1`
    margin-top: 0;
    margin-bottom: 0;
    font-size: 4.2rem;
    font-weight: 600;
    color: white;
    grid-area: title;
    grid-column: 2;
`

const Subtitle = styled.h3`
    margin-top: 0;
    margin-bottom: 0;
    font-size: 2.8rem;
    font-weight: 400;
    color: white;
    grid-area: subtitle;
    grid-column: 2;
`

const StyledButtonWrapper = styled.div`
    grid-area: buttons;
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

export default (props) => (
    <Container>
        <Title 
            data-sal="slide-up"
            data-sal-delay={preDelay.toString()}
            data-sal-easing="ease-in"
            data-sal-duration={duration.toString()}>
            Barjuan Davis P.
        </Title>
        <Subtitle
            data-sal="slide-up"
            data-sal-delay={(preDelay + duration).toString()}
            data-sal-easing="ease-in"
            data-sal-duration={duration.toString()}>
            Full Stack Developer.
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
