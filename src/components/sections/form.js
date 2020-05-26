import React from 'react'
import styled from 'styled-components'
import Button from '../button'

export default function Form(props) {
    const Container = styled.div`
       display: block;
       width: 50%;
       height: 100%;
       margin: 0;
       padding: 0;
       flex-basis: 50%;
       @media (max-width: 600px) {
            width: 100%;
       } 
        form {   
            display: grid;
            width: 100%;
            height: 100%;
            grid-template-columns: 0.2fr repeat(3, 1fr) 1fr;
            grid-template-rows: 1fr repeat(4, 0.5fr) repeat(2, 1fr) 0.5fr;
            gap: 1rem;
            justify-items: stretch;
            input, textarea{
                border-width: 1px;
                border-radius: 0.8rem;
                font-size: 1.2rem;
                color: black;
                padding: 0 1rem;

                &::placeholder, 
                &::-moz-placeholder,
                &::-webkit-input-placeholder,
                &::-ms-input-placeholder {
                    color: grey;
                }
            }
            
            textarea {
                resize: vertical;
            }
            @media (max-width: 600px) {
                grid-template-columns: 1fr repeat(3, 1fr) 1fr;
            }    
            #name {grid-row: 3 / 3;}
            #email {grid-row: 4 / 4;}
            #subject {grid-row: 5 / 5;}
            #message {grid-row: 6 / span 2;}
            #name, #email, #subject, #message {
                grid-column: 2 / span 3;}
            .submit {
                flex-grow: 2;
                margin: 0 0.5rem 0 0;
                border-color: rgba(49, 184, 0, 0.7);
                background: rgba(49, 184, 0, 0.7);
                color: #ffffff;
                transition-property: background, color, border-color;
                transition-timing-function: ease-out;
                &:hover {
                    background: #ffffff;
                    color: rgba(49, 184, 0, 1);
                    border-color: #ffffff;
                }    
            }
            .clear {
                flex-grow: 1;
            }
        
        }

    `

    const ButtonContainer = styled.div`
        display: flex;
        justify-content: space-evenly;
        grid-row: 8 / 8;
        grid-column: 2 / span 3;
    `
    const Title = styled.h1`
        margin: 0;
        font-size: 3.2rem;
        font-weight: 500;
        grid-column: 2 / span 3;
        grid-row: 2 / 2;
        justify-self: center;
    `

    return (
        <Container>
        <form 
            name="Contact Form - barjuandavis"
            className="container"
            method="POST"
            netlify-honeypot="bot-field"
            data-netlify="true">
                <input type="hidden" name="bot-field"  value="Contact Form - barjuandavis"/>
                <Title>Contact<span style={{fontWeight: 300}}> me.</span></Title>
                <input 
                    type="text" 
                    id="name" 
                    placeholder="Your name."
                    name="name"
                    />
                <input type="email" name="email" id="email"  placeholder="Your email."/>
                <input type="text" name="subject" id="subject"  placeholder="Your subject, please?"/>
                <textarea name="message" id="message" rows="5"  placeholder="And your message here."/>
            <ButtonContainer>
                <Button type="submit" className="submit">Send</Button>
                <Button type="reset" value="Clear" className="clear">Clear</Button>
            </ButtonContainer>
        </form>
        </Container>
    )
}