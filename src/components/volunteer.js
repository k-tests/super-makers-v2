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
        <Col xs={4} className="p-6">
          <h1>Test it Out!</h1>
          <NosePressGif width="300px" />
        </Col>
        <Col xs={4} className="p-6">
          <h3>Would you like to be an early tester?</h3>
          <br />
          <VolunteerGif width="250px" />
        </Col>
        <Col xs={4} className="p-6">
          <h3>Get in touch!</h3>
          <br />
          <VolunteersGif width="300px" />
        </Col>
      </Row>
    </Container>
  )
}

export default Volunteer
