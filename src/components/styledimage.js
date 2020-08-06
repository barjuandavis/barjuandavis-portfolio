import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import GatsbyImage from 'gatsby-image'

const Container = styled.div`
  display: grid;
  margin: 0;
  padding: 0;
  width: 100%;
  height: auto;

  .img {
    border-radius: 2rem;
  }
`

export default function Image(props) {
  const data = useStaticQuery(graphql`
    query {
      ikan: file(relativePath: { eq: "bg.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      wesync: file(relativePath: { eq: "wesync.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      placeholder: file(relativePath: { eq: "placeholder.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      header: file(relativePath: { eq: "header.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      portfolio: file(relativePath: { eq: "portfolio.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      honk: file(relativePath: { eq: "honk.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  let fluid
  switch (props.imageName) {
      case "wesync": 
        fluid = data.wesync.childImageSharp.fluid
      break
      case "ikan": 
        fluid = data.ikan.childImageSharp.fluid
      break
      case "portfolio":
        fluid = data.portfolio.childImageSharp.fluid
      break
      case "header":
        fluid = data.header.childImageSharp.fluid
      break
      case "honk":
        fluid = data.honk.childImageSharp.fluid
      break
      default:
        fluid = data.placeholder.childImageSharp.fluid
      break
  }


  return (
    <Container className={"imgcontainer "+props.className}
      data-sal={props.dataSal}
      data-sal-delay={props.dataSalDelay}
      data-sal-easing={props.dataSalEasing}
      data-sal-duration={props.dataSalDuration}>
      <GatsbyImage className="img"
        fluid={fluid}
      />
  </Container>
  )
}