import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Img from "gatsby-image"

const Endorsement = props => {
  return (
    <Row className="green-bg green-typo row-p6">
      <Col xs={12} className="mb-5">
        <h1>Don’t take our word for it... </h1>
      </Col>

      {props.endorsement.map(endorsement => (
        <EndorsementItem
          key={endorsement.frontmatter.role}
          // title={endorsement.frontmatter.title}
          // role={endorsement.frontmatter.role}
          // featuredProfileImage={endorsement.frontmatter.featuredProfileImage}
        >
          <div dangerouslySetInnerHTML={{ __html: endorsement.html }} />
        </EndorsementItem>
      ))}
    </Row>
  )
}

export default Endorsement

export const EndorsementItem = props => {
  return (
    <Col xs={12} xl={6} className="text-left mb-5">
      {props.children}
    </Col>
  )
}
