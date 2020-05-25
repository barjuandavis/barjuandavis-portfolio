import React from 'react'
import styled from 'styled-components'


const ItemWrapper = styled.div`
    display: flex;
    flex-flow: column;
    height: min-content;
    grid-area: item;
`

const Title = styled.h1`
    color: #CCCe5e;
    font-family: 'Jost', sans-serif;
    font-size: calc(1vw + 3em);
    padding: 0;
    margin: 0;
`

const ContentText = styled.p`
    color: #ffffff;
    font-family: 'Lora';
    font-weight: normal;
    font-size: calc(0.8vw + 0.8em);
    padding: 0;
    margin: 0;
    white-space: pre-wrap;
`

export default (props) => (
<ItemWrapper>
    <Title>{props.title}</Title>
    <ContentText>{props.content}</ContentText>
</ItemWrapper>
)