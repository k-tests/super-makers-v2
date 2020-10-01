import React from "react"
import { Container, Row, Col } from "react-bootstrap"

const Features = props => {
  return (
    <Container fluid className="pink-bg pink-typo">
      <Row className="py-5">

      {props.features.map(features => 

        <FeaturesItem
          title={features.frontmatter.title}
        >
          <div dangerouslySetInnerHTML={{ __html: features.html }} />
        </FeaturesItem>
       ) }

      </Row>
    </Container>
  )
}

export default Features

export const FeaturesItem = props => {
  return (
    <Col xs={4} className="text-center mb-5">
      <Row>
        <Col xs={12}>
          <h2>{props.title}</h2>
          <br />
          {/* {props.children} */}
        </Col>
        {/* <Col xs={12} lg={{ span: 8, offset: 2 }} className="text-left mt-3"> */}
        <Col xs={12}  className="text-left mt-3">
          {props.children}
        </Col>
      </Row>
    </Col>
  )
}
