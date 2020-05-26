import React from "react"
import StyledMobileLink from "./styledmobilelink"
import StyledAnchorLink from "./styledanchorlink"
import StyledImage from "../styledimage"
import { Link } from 'gatsby' 
import './navbar.scss'
export default (props) => (
    <div className="navbar">
        <Link className="logo" to="/"><StyledImage imageName="header" /></Link>
        <nav className="mobile">
            <StyledMobileLink to="#about" iconType="person"></StyledMobileLink>
            <StyledMobileLink to="#portfolio" iconType="book"></StyledMobileLink>
            <StyledMobileLink to="#contact"></StyledMobileLink>
        </nav>
        <nav className="desktop">   
            <StyledAnchorLink to="#about">About Me</StyledAnchorLink>
            <StyledAnchorLink to="#portfolio">Portfolio</StyledAnchorLink>
            <StyledAnchorLink to="#contact">Contact Me</StyledAnchorLink> 
        </nav>
    </div>
)