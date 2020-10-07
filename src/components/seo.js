import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        image
      }
    }
  }
`
function SEO({ description, lang, meta, keywords, title }) {
  return (
    <StaticQuery
      htmlAttributes={{ lang }}
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description
        const auth = data.site.siteMetadata.author
        const favicon = data.site.siteMetadata.image
        const Returnee = (
          <Helmet
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              {
                name: `viewport`,
                content: `height=device-height, 
                  width=device-width, initial-scale=1.0, 
                  minimum-scale=1.0, maximum-scale=1.0, 
                  user-scalable=no, target-densitydpi=device-dpi`
              },
              {
                name: `description`,
                content: metaDescription
              },
              {
                property: `og:title`,
                content: title
              },
              {
                property: `og:description`,
                content: metaDescription
              },
              {
                property: `og:type`,
                content: `website`
              },
              {
                property: `og:author`,
                content: auth
              }
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `)
                    }
                  : []
              )
              .concat(meta)}
            link={[{ rel: 'icon', type: 'image/ico', href: `${favicon}` }]}
          />
        )
        return Returnee
      }}
    />
  )
}
SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: []
}
SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired
}

export default SEO
