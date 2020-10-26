import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { EarthGif } from "./_icons"

const BuildWorlds = props => {
  return (
    <Container fluid className="worlds">
      <Row className="">
        <Col xs={12} md={6} className="green-bg green-typo  text-center p-6">
          <h1 className="text-left">Build Sustainable Worlds!</h1>
          <EarthGif width="90%" class="py-5" />
        </Col>
        <Col xs={12} md={6} className="dark-blue-bg dark-blue-typo p-6">
          <div dangerouslySetInnerHTML={props.theHtml} className="text-left" />
        </Col>
      </Row>
    </Container>
  )
}

export default BuildWorlds
