import React from 'react'
import styled from 'styled-components'
import StyledImg from '../styledimage'
import SocialMediaBar from '../socialmediabar'
import OuterLink from '../outerlink'
//icons
import ReactIcon from '../../images/icons/react.inline.svg'
import CssIcon from '../../images/icons/css3.svg'
import FigmaIcon from '../../images/icons/figma.svg'
import GatsbyIcon from '../../images/icons/gatsby.svg'
import Html5Icon from '../../images/icons/html5.svg'
import InvisionStudioIcon from '../../images/icons/invision_studio.svg'
import JavaIcon from '../../images/icons/java.svg'
import JsIcon from '../../images/icons/js.svg'
import KotlinIcon from '../../images/icons/kotlin.svg'
import NodeIcon from '../../images/icons/node.svg'
import SassIcon from '../../images/icons/sass.svg'
import TypescriptIcon from '../../images/icons/typescript.svg'
import XdIcon from '../../images/icons/xd.svg'


const Container = styled.div`
    display: grid;
    background: rgb(0,24,132);
    background: -moz-linear-gradient(330deg, rgba(0,24,132,1) 0%, rgba(119,46,116,1) 100%);
    background: -webkit-linear-gradient(330deg, rgba(0,24,132,1) 0%, rgba(119,46,116,1) 100%);
    background: linear-gradient(330deg, rgba(0,24,132,1) 0%, rgba(119,46,116,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#001884",endColorstr="#772e74",GradientType=1); 
    grid-template-columns: 0.5fr 2fr 2fr 0.5fr;
    grid-template-rows: 1fr auto auto 0.2fr auto auto auto 1fr;
    gap: 0.5rem 2rem;
    justify-items: start;
    margin-top: 0;
    padding-top: 5em;
    margin-bottom: 0;
    padding-bottom:2rem;
    margin-left: 0;
    margin-right: 0;
    .imgcontainer {
        grid-row: 2 / span 2;
        grid-column-start: 2;
        justify-self: center;
    }
`

const Title = styled.h1`
    font-size: 2.5rem;
    font-weight: 600;
    grid-row-start: 2;
    grid-column-start: 3;
    align-self: end;
    line-height: 3rem;
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 0;
    margin-right: 0;
`
const Subtitle= styled.h1`
    font-size: 2.5rem;
    text-align: center;
    justify-self: center;
    font-weight: 300;
    grid-row-start: 5;
    grid-column: 2 / span 2;
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 0;
    margin-right: 0;

`
const TitleMod = styled.span`
    font-weight: normal;
`
const Contents = styled.p`
    font-size: 1.2rem;
    font-weight: normal;
    grid-row-start: 3;
    grid-column-start: 3;
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 0;
    margin-right: 0;
    a {
        svg {
            fill: none;
            stroke: white;
        }
    }
`
const Subcontents = styled.p`
    font-weight: 300;
    text-align: center;
    justify-self: center;
    grid-row-start: 6;
    grid-column: 2 / span 2;
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 0;
    margin-right: 0;
`

const SkillContainer = styled.div`
    margin-top: 2rem;
    grid-row-start: 7;
    grid-column: 2 / span 2;
    padding: 0 6rem;
    display: flex;
    flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    justify-content: space-around;
    justify-self: center;
    
    a {
        width: 5rem;
        height: 5rem;
        margin: 0.5rem;
        svg {
        width: 5rem;
        height: 5rem;
        margin: 0.5rem;
            path:not(#kotlin) {
                fill: white;
            }
            path {
                fill-opacity: 0.6;
                transition: fill-opacity 250ms ease-out;
            }
        }
    }

    a:hover {
        svg {
            path {
                fill-opacity: 1;
            }
        }
    }
   
`

const duration = 250;
const preDelay = 300;

export default () => (
    <Container>
        <StyledImg imageName="ikan" dataSal="slide-up"
            dataSalDelay={preDelay.toString()}
            dataSalEasing="ease-in"
            dataSalDuration={duration.toString()} />
        <Title data-sal="slide-up"
            data-sal-delay={preDelay.toString()}
            data-sal-easing="ease-in"
            data-sal-duration={duration.toString()}>Hello! <TitleMod>Call me</TitleMod> Davis.</Title>
        <Contents data-sal="slide-up"
            data-sal-delay={(preDelay + duration).toString()}
            data-sal-easing="ease-in"
            data-sal-duration={duration.toString()}>I'm a creative thinker and executor. I make dreams come true by developing purposeful applications. 
            <br />Also a creative artist who makes music and graphic designs.
            <br /><SocialMediaBar className="socialMediaBar" />
            <OuterLink href="" type="download">Download My Resume</OuterLink>
        </Contents>
        <Subtitle data-sal="slide-up"
            data-sal-delay={(preDelay + duration*2).toString()}
            data-sal-easing="ease-in"
            data-sal-duration={duration.toString()}>Here is <TitleMod>my skillset.</TitleMod></Subtitle>
        <Subcontents data-sal="slide-up"
            data-sal-delay={(preDelay + duration*2).toString()}
            data-sal-easing="ease-in"
            data-sal-duration={duration.toString()}>(p.s: it is not limited to these!)</Subcontents>
        <SkillContainer data-sal="fade"
            data-sal-delay={(preDelay + duration*2).toString()}
            data-sal-easing="ease-in"
            data-sal-duration={duration.toString()}>
            <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" 
            rel="noopener noreferrer"target="_blank"><Html5Icon /></a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" 
            rel="noopener noreferrer" target="_blank"><CssIcon /></a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" 
            rel="noopener noreferrer"target="_blank"><JsIcon /></a>
            <a href="https://reactjs.org/" 
            rel="noopener noreferrer"target="_blank"><ReactIcon /></a>
            <a href="https://gatsbyjs.org/" 
            rel="noopener noreferrer" target="_blank"><GatsbyIcon /></a>
            <a href="https://sass-lang.com/" 
            rel="noopener noreferrer" target="_blank"><SassIcon /></a>
            <a href="https://nodejs.org/" 
            rel="noopener noreferrer" target="_blank"> <NodeIcon /></a>
            <a href="https://typescriptlang.org/" 
            rel="noopener noreferrer" target="_blank"><TypescriptIcon /></a>
            <a href="https://www.java.com/" 
            rel="noopener noreferrer"target="_blank"><JavaIcon /></a>
            <a href="https://www.kotlinlang.org/" 
            rel="noopener noreferrer"target="_blank"><KotlinIcon /></a>
            <a href="https://www.invisionapp.com/studio"
            rel="noopener noreferrer" target="_blank"><InvisionStudioIcon /></a>
            <a href="https://www.figma.com/"
            rel="noopener noreferrer" target="_blank"><FigmaIcon /></a>
            <a href="https://www.adobe.com/sea/products/xd.html" 
            rel="noopener noreferrer" target="_blank"><XdIcon /></a>
            </SkillContainer>
    </Container>
)