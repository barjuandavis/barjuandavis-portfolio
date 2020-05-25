import React from 'react'
import Navbar from './nav/navbar'

import styled from "styled-components"

import '../styles/index.scss'

const LayoutWrapper = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    font-family: "Jost", sans-serif;
    color: white;
    height: 100%;
    width: 100%;

    section {
        display: block;
        width: 100%;
        text-justify: auto;
        background: #222;
    }
`

export default (props) => (
<LayoutWrapper>
    <Navbar />     
            {props.children}        
</LayoutWrapper>
)  