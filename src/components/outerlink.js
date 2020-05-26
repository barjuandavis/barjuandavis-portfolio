import React from 'react'
import styled from 'styled-components'
import DevIcon from '../images/icons/dev.svg'
import GithubIcon from '../images/icons/github.svg'
import DownloadIcon from '../images/icons/download.svg'

export default function OuterLink(props){
    let Icon
    switch (props.type) {
        case "dev": Icon = DevIcon; break
        case "github": Icon = GithubIcon; break
        case "download": Icon = DownloadIcon; break
        default: Icon = () => null; break
    }
    
    const Container = styled.a`
        font-size: 1.2rem;
        font-weight: 300;
        text-decoration: underline;
        color: white;
        opacity: 0.7;
        transition: opacity 250ms ease-out;
        svg {
            padding-top: 0.1rem;
            fill: white;
            opacity: 0.7;
            width: 1.2rem;
            height: 1.2rem;
            transition: opacity 250ms ease-out;
        }
        &:hover {
            opacity: 1;
            svg {
                opacity: 1;
            }
        }
    `

    return (
        <Container 
            href={props.href}
            rel="noopener noreferrer" 
            target="_blank">
                {props.children} <Icon />
        </Container>
    )
    
}
