import React from 'react'
import styled from 'styled-components'
import scrollTo from 'gatsby-plugin-smoothscroll'

export const StyledWrapper = styled.button`
    height: 100%;
    align-content: center;
   
    border: 0;
    color: #ffffff;
    background: none;
    font-size: 1.2rem;
    padding: 0 1rem;
    margin: 0;
    transition: color 200ms ease-in;

    &:hover {
        color: #000;
        cursor: pointer;
    }

    &:after {
        width: 2rem;
        border: 1px blue;
    }
`


export default (props) => (
    <StyledWrapper onClick={() => scrollTo(props.to)} className="link">
        {props.children}
    </StyledWrapper>
)

// <AnchorLink to={props.to} className="link">{props.name}</AnchorLink>