import React from "react"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, image, path, isPost }) => (
  <StaticQuery
    query={query}
    render={({ site: { siteMetadata } }) => {
      const seo = {
        title: title || siteMetadata.title,
        titleTemplate: siteMetadata.titleTemplate || "",
        description: description || siteMetadata.tagline,
        url: `${siteMetadata.siteUrl}${path || ""}`,
        image: `${siteMetadata.siteUrl}${image}` || ""
      }
      return (
        <Helmet
          htmlAttributes={{ lang: "en-US" }}
          title={seo.title}
          titleTemplate={seo.titleTemplate}
        >
          <meta name="description" content={seo.description} />
          <meta name="image" content={seo.image} />
          {seo.url && <meta property="og:url" content={seo.url} />}
          {(isPost ? true : null) && (
            <meta property="og:type" content="article" />
          )}
          {seo.title && <meta property="og:title" content={seo.title} />}
          {seo.description && (
            <meta property="og:description" content={seo.description} />
          )}
          {seo.image && <meta property="og:image" content={seo.image} />}
          {(seo.imageWidth ? true : null) && (
            <meta property="og:image:width" content={seo.imageWidth} />
          )}
          {(seo.imageHeight ? true : null) && (
            <meta property="og:image:height" content={seo.imageHeight} />
          )}
          <meta name="twitter:card" content="summary_large_image" />
          {seo.title && <meta name="twitter:title" content={seo.title} />}
          {seo.description && (
            <meta name="twitter:description" content={seo.description} />
          )}
          {seo.image && <meta name="twitter:image" content={seo.image} />}
        </Helmet>
      )
    }}
  />
)

export default SEO

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  pagePath: null,
  isPost: false,
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        titleTemplate
        siteUrl
        tagline
      }
    }
  }
`
