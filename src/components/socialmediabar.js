import React from 'react'
import styled from 'styled-components'
import LinkedInIcon from '../images/icons/linkedin.svg'
import MailIcon from '../images/icons/mail.svg'
import GithubIcon from '../images/icons/github.svg'
import DevIcon from '../images/icons/dev.svg'

export default function SocialMediaBar(props) {
    const Container = styled.div`
        display:flex;
        flex-direction: row;
        -ms-flex-direction: column;
        margin-bottom: -0.5rem;
        a {
            padding: 0 1rem 0 0;
            color: rgba(255, 255, 255, 0.7);
            text-decoration: none;
            transition: color 250ms ease-out;
            svg {
                width: 2rem;
                height: 2rem;
                fill: rgba(255, 255, 255, 0.7);
                transition: fill 250ms ease-out;
            }
            span {
                display: none;
            }
        }
        
        a:hover {
            color: white;
            svg {
                fill: white;
            }
        }
    `

    return (
        <Container 
            style={props.style}
            className={props.className}>
            <a href="https://github.com/barjuandavis" 
            rel="noopener noreferrer"target="_blank"><GithubIcon /><span> Github</span></a>
            <a href="https://linkedin.com/in/barjuandavis" 
            rel="noopener noreferrer"target="_blank"><LinkedInIcon /><span> LinkedIn</span></a>
            <a href="https://dev.to/barjuandavis"  
            rel="noopener noreferrer"target="_blank"><DevIcon /><span> Dev.to</span></a>
            <a href="mailto:barjuandavis@gmail.com"  
            rel="noopener noreferrer"target="_blank"><MailIcon /><span> barjuandavis@gmail.com</span></a>
        </Container>
    )


}