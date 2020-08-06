import React from 'react'
import styled from 'styled-components'
import StyledImg from '../styledimage'
import SocialMediaBar from '../socialmediabar'
import Button from '../button'
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
import GoLangIcon from '../../images/icons/golang.svg'
import GraphqlIcon from '../../images/icons/graphql.svg'



const Container = styled.div`
    display: grid;
    background: rgb(0,24,132);
    background: -moz-linear-gradient(330deg, rgba(0,24,132,1) 0%, rgba(119,46,116,1) 100%);
    background: -webkit-linear-gradient(330deg, rgba(0,24,132,1) 0%, rgba(119,46,116,1) 100%);
    background: linear-gradient(330deg, rgba(0,24,132,1) 0%, rgba(119,46,116,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#001884",endColorstr="#772e74",GradientType=1); 
    grid-template-columns: 0.5fr 2fr 2fr 0.5fr;
    grid-template-rows: 1fr auto auto auto auto 0.2fr auto auto auto 1fr;
    gap: 0.5rem 2rem;
    justify-items: start;
    margin-top: 0;
    padding-top: 5em;
    margin-bottom: 0;
    padding-bottom:2rem;
    margin-left: 0;
    margin-right: 0;
    .imgcontainer {
        grid-row: 2 / span 4;
        grid-column-start: 2;
        justify-self: center;
    }
    .socialMediaBar {
        grid-column: 3 / 3;
        grid-row: 4 / 4;
    }
    .link {
        grid-column: 3 / 3;
        grid-row: 5 / 5;
        padding: 0 1rem;
    }
`

const Title = styled.h1`
    font-size: 2.5rem;
    font-weight: normal;
    grid-row-start: 2;
    grid-column-start: 3;
    align-self: end;
    line-height: 3rem;
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 0;
    margin-right: 0;
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
const Subtitle= styled.h1`
    font-size: 2.5rem;
    text-align: center;
    justify-self: center;
    font-weight: 300;
    grid-row: 7 / 7;
    grid-column: 2 / span 2;
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 0;
    margin-right: 0;
    span {
        font-weight: 600;
    }

`
const Subcontents = styled.p`
    font-weight: 300;
    text-align: center;
    justify-self: center;
    grid-row: 8 / 8;
    grid-column: 2 / span 2;
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 0;
    margin-right: 0;
`
const SkillContainer = styled.div`
        grid-row-start: 9;
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
                path {
                    fill: #cccccc;
                    transition: fill 250ms ease-out;
                }
            }
        }
        a:hover {
            svg {
                path {
                    fill: white;
                }
            }
        }

        @media (max-width: 600px) {
            padding: 0 4rem;
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
            data-sal-duration={duration.toString()}>Hello! Call me Davis.</Title>
        <Contents data-sal="slide-up"
            data-sal-delay={(preDelay + duration).toString()}
            data-sal-easing="ease-in"
            data-sal-duration={duration.toString()}>I'm a creative thinker and executor. I make dreams come true by developing purposeful applications. 
            <br />Also a creative artist who makes music and graphic designs.
        </Contents>
        <SocialMediaBar 
            className="socialMediaBar"></SocialMediaBar>
        <Button className="link" onClick={() => {window.open("https://drive.google.com/file/d/1sk0ieBbcZA8KYrbpNU0I_vc9nN__pTOY/view?usp=sharing", "_blank")}}
        ariaLabel="Download My Resume"
        iconType="download"
        >Download My Resume </Button>
        <Subtitle data-sal="slide-up"
            data-sal-delay={(preDelay + duration*2).toString()}
            data-sal-easing="ease-in"
            data-sal-duration={duration.toString()}>Here is <span>my skillset.</span></Subtitle>
        <Subcontents data-sal="slide-up"
            data-sal-delay={(preDelay + duration*2).toString()}
            data-sal-easing="ease-in"
            data-sal-duration={duration.toString()}>(p.s: it is not limited to these!)</Subcontents>
        <SkillContainer className="skillContainer">
                <a aria-label="HTML5" href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" 
                rel="noopener noreferrer"target="_blank"><Html5Icon /></a>
                <a aria-label="CSS" href="https://developer.mozilla.org/en-US/docs/Web/CSS" 
                rel="noopener noreferrer" target="_blank"><CssIcon /></a>
                <a aria-label="Javascript" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" 
                rel="noopener noreferrer"target="_blank"><JsIcon /></a>
                <a aria-label="React" href="https://reactjs.org/" 
                rel="noopener noreferrer"target="_blank"><ReactIcon /></a>
                <a aria-label="Gatsby" href="https://gatsbyjs.org/" 
                rel="noopener noreferrer" target="_blank"><GatsbyIcon /></a>
                <a aria-label="Sass" href="https://sass-lang.com/" 
                rel="noopener noreferrer" target="_blank"><SassIcon /></a>
                <a aria-label="Nodejs" href="https://nodejs.org/" 
                rel="noopener noreferrer" target="_blank"> <NodeIcon /></a>
                <a aria-label="Typescript" href="https://typescriptlang.org/" 
                rel="noopener noreferrer" target="_blank"><TypescriptIcon /></a>
                <a aria-label="Java" href="https://www.java.com/" 
                rel="noopener noreferrer"target="_blank"><JavaIcon /></a>
                <a aria-label="Golang" href="https://golang.org/" 
                rel="noopener noreferrer"target="_blank"><GoLangIcon /></a>
                <a aria-label="GraphQL" href="https://graphql.org/" 
                rel="noopener noreferrer"target="_blank"><GraphqlIcon /></a>
                <a aria-label="Kotlin" href="https://www.kotlinlang.org/" 
                rel="noopener noreferrer"target="_blank"><KotlinIcon /></a>
                <a aria-label="Invision Studio" href="https://www.invisionapp.com/studio"
                rel="noopener noreferrer" target="_blank"><InvisionStudioIcon /></a>
                <a aria-label="Figma" href="https://www.figma.com/"
                rel="noopener noreferrer" target="_blank"><FigmaIcon /></a>
                <a aria-label="Adobe XD" href="https://www.adobe.com/sea/products/xd.html" 
                rel="noopener noreferrer" target="_blank"><XdIcon /></a>
            </SkillContainer>
    </Container>
)