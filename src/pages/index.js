import React from "react"
import { Link, graphql } from "gatsby"
import IntroSupport from "../components/introSupport"
import BuildWorlds from "../components/buildWorlds"
import CrossWorlds from "../components/crossWorlds"
import Features from "../components/features"
import HowItWorks from "../components/howItWorks"
import Volunteer from "../components/volunteer"
import Seriously from "../components/seriously"
import Milestones from "../components/milestones"

import IntroVideo from "../components/introVideo"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Endorsement from "../components/endorsement"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <section>
        {/* <Layout location={location} title={siteTitle}> */}
        <SEO title="All posts" />
        <IntroVideo
        // head={posts[1].frontmatter.title}
        // video={posts[2].frontmatter.date}
        // bottomText={posts[1].frontmatter.description}
        // theHtml={{ __html: posts[1].html }}
        />

        <IntroSupport />
        <BuildWorlds />
        <CrossWorlds />
        <Features />
        <HowItWorks />
        <Volunteer />
        <Seriously />
        <Milestones />
        <Endorsement />
      </section>
    </Layout>

    // if (posts.length === 0) {
    //   return (
    //     <Layout location={location} title={siteTitle}>
    //       <SEO title="All posts" />
    //       <Bio />
    //       <p>
    //         No blog posts found. Add markdown posts to "content/blog" (or the
    //         directory you specified for the "gatsby-source-filesystem" plugin in
    //         gatsby-config.js).
    //       </p>
    //     </Layout>
    //   )
    // }

    // return (
    //   <Layout location={location} title={siteTitle}>
    //     <SEO title="All posts" />
    //     <Bio />
    //     {posts.map(post => {
    //       const title = post.frontmatter.title || post.fields.slug
    //       return (
    //         <article
    //           key={post.fields.slug}
    //           className="post-list-item"
    //           itemScope
    //           itemType="http://schema.org/Article"
    //         >
    //           <header>
    //             <h2>
    //               <Link to={post.fields.slug} itemProp="url">
    //                 <span itemProp="headline">{title}</span>
    //               </Link>
    //             </h2>
    //             <small>{post.frontmatter.date}</small>
    //           </header>
    //           <section>
    //             <p
    //               dangerouslySetInnerHTML={{
    //                 __html: post.frontmatter.description || post.excerpt,
    //               }}
    //               itemProp="description"
    //             />
    //           </section>
    //         </article>
    //       )
    //     })}
    //   </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        html
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
