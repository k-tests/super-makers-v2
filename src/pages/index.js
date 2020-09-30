import React from "react"
import { Link, graphql } from "gatsby"
import IntroSupport from "../components/IntroSupport"
import BuildWorlds from "../components/BuildWorlds"
import CrossWorlds from "../components/CrossWorlds"
import Features from "../components/Features"
import HowItWorks from "../components/HowItWorks"
import Volunteer from "../components/Volunteer"
import Seriously from "../components/Seriously"
import Milestones from "../components/Milestones"
import Endorsement from "../components/Endorsement"
import IntroVideo from "../components/IntroVideo"
import TopNavFiller from "../components/TopNavFiller"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.siteMetaData.siteMetadata?.title || `Title`
  const buildWorld = data.buildWorld.nodes
  const crossWorld = data.crossWorld.nodes

  // const buildWorlds = posts.contains("Build World")

  return (
    <Layout>
      <section>
        {/* <Layout location={location} title={siteTitle}> */}
        <SEO title="All posts" />
        <TopNavFiller />
        <IntroVideo
        // head={posts[1].frontmatter.title}
        // video={posts[2].frontmatter.date}
        // bottomText={posts[1].frontmatter.description}
        // theHtml={{ __html: posts[1].html }}
        />
        <IntroSupport />
        <BuildWorlds theHtml={{ __html: buildWorld[0].html }} />
        <CrossWorlds theHtml={{ __html: crossWorld[0].html }} />
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
    siteMetaData: site {
      siteMetadata {
        title
      }
    }
    buildWorld: allMarkdownRemark(
      filter: { frontmatter: { title: { eq: "Build Worlds" } } } # sort: { fields: [frontmatter___date], order: DESC }
    ) {
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
    crossWorld: allMarkdownRemark(
      filter: { frontmatter: { title: { eq: "Cross Worlds" } } } # sort: { fields: [frontmatter___date], order: DESC }
    ) {
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

// buildWorld: allMarkdownRemark(
//   filter: { frontmatter: { title: { eq: "Build Worlds" } } } # sort: { fields: [frontmatter___date], order: DESC }
// ) {
//   nodes {
//     excerpt
//     html
//     fields {
//       slug
//     }
//     frontmatter {
//       date(formatString: "MMMM DD, YYYY")
//       title
//       description
//     }
//   }
// }
