module.exports = {
  siteMetadata: {
    title: `Barjuan Davis P.`,
    description: `I'm a creative thinker and executor. I make dreams come true by developing purposeful applications. Highly capable using`,
    author: `barjuandavis`,
    image: `/favicon.ico`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      }, 
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Jost:200, 300, 400, 600, 700, 800"]
        }
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sass',
    'gatsby-plugin-smoothscroll',
    {
      resolve: `gatsby-plugin-anchor-links`,
      options: {
        offset: -50
      }
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
          threshold: 0.8, // Percentage of an element's area that needs to be visible to launch animation
          once: true, // Defines if animation needs to be launched once
          disable: false, // Flag for disabling animations
          
          // Advanced Options
          selector: '[data-sal]', // Selector of the elements to be animated
          animateClassName: 'sal-animate', // Class name which triggers animation
          disabledClassName: 'sal-disabled', // Class name which defines the disabled state
          rootMargin: '0% 10%', // Corresponds to root's bounding box margin
          enterEventName: 'sal:in', // Enter event name
          exitEventName: 'sal:out', // Exit event name
      }
    }
    ,{
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include:  /icons/
        }
      }
    }
  ]
}