import React from 'react'
import styled from 'styled-components'
import GithubIcon from '../images/icons/github.svg'
import DownloadIcon from '../images/icons/download.svg'
import scrollTo from 'gatsby-plugin-smoothscroll'


const InnerButton = styled.button`
    border-width: 1px;
    border-radius: 10px;
    border-color: #ffffff;

    background: none; 
    color: #ffffff;

    font-weight: 500;
    font-size: 1.3rem;

    padding: 8px;

    transition-property: background, color;
    transition-duration: 150ms;
    transition-timing-function: ease-in;

    svg {
        height: 1em;
        width: 1em;
        path {
            stroke: #ffffff;
            transition: stroke 150ms ease-in;
        }
    }

    &:hover {
        background: #ffffff;
        color: #808080;
        path {
            stroke: #808080;
        }
        cursor: pointer;
    }

    &:focus, &:active {
        border-width: 1px;
    }
`


export default function Button(props) {
    let Icon = undefined;
    switch (props.iconType) {
        case "github": Icon = GithubIcon; break
        case "download": Icon = DownloadIcon; break
        default: Icon = () => null; break
    }  

    return (<InnerButton
        onClick={props.onClick !== undefined ? props.onClick : () => scrollTo(props.to)}
        className={props.className}
        style={props.style} 
        type={props.type}
        aria-label={props.ariaLabel}
        value={props.value}>
            {props.children}{(props.iconType !== undefined) && <Icon />}
        </InnerButton>)
}
