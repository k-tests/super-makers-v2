import React from "react"
import { Container, Row, Col } from "react-bootstrap"

const Features = props => {
  return (
    <Container fluid className="pink-bg pink-typo py-3 worlds">
      <Row className="">
        {props.features.map(features => (
          <FeaturesItem title={features.frontmatter.title}>
            <div dangerouslySetInnerHTML={{ __html: features.html }} />
          </FeaturesItem>
        ))}
      </Row>
    </Container>
  )
}

export default Features

export const FeaturesItem = props => {
  return (
    <Col
      xs={12}
      sm={6}
      md={6}
      lg={6}
      xl={4}
      className="text-center mb-2 features p-6"
    >
      <Row>
        {/* <Col xs={12}>
          <h2>{props.title}</h2>
          <br />
        </Col> */}
        <Col xs={12} className="text-left mt-3">
          {props.children}
        </Col>
      </Row>
    </Col>
  )
}
