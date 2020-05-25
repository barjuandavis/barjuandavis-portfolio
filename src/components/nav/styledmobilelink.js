import React from 'react'
import styled from 'styled-components'
import PersonIcon from '../../images/icons/person.svg'
import BookIcon from '../../images/icons/book.svg'
import ChatIcon from '../../images/icons/chat.svg'
import scrollTo from 'gatsby-plugin-smoothscroll'

export default function StyledMobileLink(props) {
    const Container = styled.button`
        display: grid;
        border: none;
        justify-content: center;
        align-content: center;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 0.7fr 0.3fr;
        background: none;
        flex-grow: 3;
        svg {
            grid-row: 1 / 1;
            grid-column: 2 / 2;
            width: 2rem;
            height: 2rem;
            fill: white;
            justify-self: center;
        }
    `

    const Name = styled.h1`
        grid-row: 2 / 2;
        grid-column: 1 / span 3;
        color: white;
        font-size: 1rem;
        font-weight: 400;
    `

    let Icon = undefined;
    switch(props.iconType) {
        case "person":
            Icon = PersonIcon
            break
        case "book":
            Icon = BookIcon
            break
        default:
            Icon = ChatIcon
            break
    }

    return (
        <Container onClick={() => scrollTo(props.to)} className="link">
           <Icon />
           <Name>{props.children}</Name>
        </Container>
    )

}



