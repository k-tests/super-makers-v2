import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import {
  NosePressGif,
  PushNoseIcon,
  VolunteersGif,
  VolunteerGif,
} from "./_icons"

const Volunteer = () => {
  return (
    <Container fluid className="dark-blue-bg dark-blue-typo p-4">
      <Row className="">
        <Col xs={6} className="p-6">
          <VolunteerGif width="250px" />
          <h3>Test it Out!</h3>
        </Col>
        <Col xs={6} className="p-6">
          <Row>
            <Col xs={6} md={6}>
              <VolunteersGif width="300px" />
              <NosePressGif width="300px" />
            </Col>
            <Col xs={6} md={6}>
              Would you like to be an early tester? Get in touch!
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Volunteer
