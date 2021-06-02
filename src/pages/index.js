import React from "react"
import { graphql } from "gatsby"

import IntroSupport from "../components/introSupport"
import BuildWorlds from "../components/buildWorlds"
import CrossWorlds from "../components/crossWorlds"
import Features from "../components/features"
import HowItWorks from "../components/howItWorks"
import Volunteer from "../components/volunteer"
import Milestones from "../components/milestones"
import Endorsement from "../components/endorsement"
import IntroVideo from "../components/introVideo"
import AppScreens from "../components/appScreens"
import Investors from "../components/investors"
import Education from "../components/education"
import Vision from "../components/vision"
import Mission from "../components/mission"
import Footer from "../components/footer"
import PasswordProtect from "../components/PasswordProtect"

import TopNavFiller from "../components/_topNavFiller"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.siteMetaData.siteMetadata?.title || `Title`
  const buildWorld = data.buildWorld.nodes
  const crossWorld = data.crossWorld.nodes
  const features = data.features.nodes
  const endorsement = data.endorsement.nodes

  return (
    <React.Fragment>
      {/* <PasswordProtect /> */}
      <Layout>
        <section>
          <SEO title={`Home | ${siteTitle}`} />
          <TopNavFiller />
          <IntroVideo />
          <IntroSupport />
          <BuildWorlds theHtml={{ __html: buildWorld[0].html }} />
          <CrossWorlds theHtml={{ __html: crossWorld[0].html }} />
          <Features features={features} />
          <HowItWorks />
          <AppScreens />
          <Volunteer />
          <Vision />
          <Mission />
          <Investors />
          <Education />
          <Milestones />
          {/* <Endorsement endorsement={endorsement} /> */}
          <Footer />
        </section>
      </Layout>
    </React.Fragment>
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

    endorsement: allMarkdownRemark(
      filter: { frontmatter: { description: { regex: "/endorsement/i" } } }
      sort: { fields: [frontmatter___date], order: DESC }
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
          role
        }
      }
    }

    features: allMarkdownRemark(
      filter: { frontmatter: { description: { regex: "/feature/i" } } }
      sort: { fields: [frontmatter___date], order: DESC }
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
