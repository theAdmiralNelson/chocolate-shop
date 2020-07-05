import React, { useEffect } from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import Footer from "../components/footer"
import Menu from "../components/Menu"
import SEO from "../components/seo"
import PostCard from "../components/postCard"
import { handleStyles } from "../lib/accessibility"
import { Logo } from "../components/Icons"

// import "../utils/global.scss"
import "../utils/normalize.css"

//TODO: switch to staticQuery, get rid of comments, remove unnecessary components, export as draft template
const BlogIndex = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  let postCounter = 0

  useEffect(() => handleStyles(), [])

  return (
    <div>
      <SEO
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <div className="bg-img">
        <div
          style={{
            display: "flex",
            flexDirection: "coulmn",
            justifyContent: "center",
          }}
        >
          <Menu />
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "200px",
            justifyContent: "center",
          }}
        >
          <Logo />
        </div>
        {/* <header className="page-head">
          <h2 className="page-head-title">BATTLE CRY</h2>
        </header> */}
      </div>
      <div className="post-feed">
        {posts.map(({ node }) => {
          postCounter++
          return (
            <PostCard
              key={node.fields.slug}
              count={postCounter}
              node={node}
              postClass={`post`}
            />
          )
        })}
      </div>
      <Footer />
    </div>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1360) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <BlogIndex location={props.location} props data={data} {...props} />
    )}
  />
)
