import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Img from "gatsby-image"

const Endorsement = props => {
  return (
    <Container fluid className="green-bg green-typo ">
      <Row className="">
        <Col xs={12} className="p-6">
          <h1>What experts say? </h1>
        </Col>
      </Row>
      <Row>
        {props.endorsement.map(endorsement => (
          <EndorsementItem key={endorsement.frontmatter.role}
            // title={endorsement.frontmatter.title}
            // role={endorsement.frontmatter.role}
            // featuredProfileImage={endorsement.frontmatter.featuredProfileImage}
          >
            <div dangerouslySetInnerHTML={{ __html: endorsement.html }} />

          </EndorsementItem>
        ))}
      </Row>
    </Container>
  )
}

export default Endorsement

export const EndorsementItem = props => {
  return (
    <Col xs={12} sm={6} md={6} lg={6} xl={6} className="px-6">
      <Row>
        {/* <Col xs={12} className="text-left">
          <h3 className="">
            Name:
            <span className="bold">{props.title}</span>
            <br />
            Role:
            <span className="bold">{props.role}</span>
          </h3>
        </Col> */}
        <Col xs={12} className="text-left">
          {props.children}
        </Col>
      </Row>
    </Col>
  )
}
