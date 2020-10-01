import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import { PushNoseIcon } from "./icons"

const Volunteer = () => {
  return (
    <Container fluid className="dark-blue-bg dark-blue-typo p-4">
      <Row className="">
        <Col xs={6} className="">
          <PushNoseIcon /> volunteer NOW!!!!
        </Col>
        <Col xs={6} className="">
          <Row>
            <Col xs={6} md={6}>
              Button
            </Col>
            <Col xs={6} md={6}>
              Details
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Volunteer
