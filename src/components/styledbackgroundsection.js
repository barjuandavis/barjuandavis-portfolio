import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'

const BackgroundSection = (props, {className}) => (
  <StaticQuery
    query={ graphql`
    query {
      indexImage: file(relativePath: { eq: "fotoDiri.jpg"}) {
        childImageSharp{
          fluid(maxWidth: 1800){
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
`}
    render={data => {
      // Set ImageData.
      const imageData = data.indexImage.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className="background"
          fluid={imageData}
        >
          {props.children}
        </BackgroundImage> 
      )
    }}
  />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  min-width: 0;
  background-size: cover;
  background-position-y: 0;
`

export default StyledBackgroundSection

