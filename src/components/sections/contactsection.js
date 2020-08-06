import React from 'react'
import styled from 'styled-components'
import Form from './form'
import SocialMediaBar from '../socialmediabar'


const Container = styled.div`
    background: rgb(0,0,0);
    background: -moz-linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,17,23,1) 100%);
    background: -webkit-linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,17,23,1) 100%);
    background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,17,23,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#001117",GradientType=1);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: stretch;
    width: 100%;
    height: auto;
    padding-top: 5rem;
    padding-bottom: 20vh;

    @media (max-width: 600px) {
        text-align: center;
        flex-direction: column;
    }
`

const LeftColumnContainer = styled.div`
    display: grid;
    width: 50%;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 1fr repeat(3, auto) 1fr;
    .social {
        grid-row: 4/ 4;
        grid-column: 2 / span 4;
        @media (max-width: 600px) {
            justify-self: center;
            grid-column: 1 / span 5;
        } 
    }
    @media (max-width: 600px) {
        width: 100%;
    }
`

const Title = styled.div`
    font-size: 3.2rem;
    font-weight: 200;
    grid-row: 2 / 2;
    grid-column: 2 / span 4;
    @media (max-width: 600px) {
        justify-self: center;
        grid-column: 1 / span 5;
    } 
`
export default () => (
    <Container>
        <LeftColumnContainer>
            <Title>Got things to say?</Title>
            <Title style={{
                fontWeight: 400,
                gridRowStart: 3,
                gridRowEnd: 3
            }}>Reach me out!</Title>
            <SocialMediaBar className="social"/>
        </LeftColumnContainer>
        <Form />
    </Container>
)
