import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { NosePressGif, PushNoseIcon, VolunteersGif, VolunteerGif } from "./_icons"

const Volunteer = () => {
  return (
    <Container fluid className="dark-blue-bg dark-blue-typo p-4">
      <Row className="">
        <Col xs={6} className="">
        <VolunteerGif width='250px' />
           <h3>Test it Out!</h3>
        </Col>
        <Col xs={6} className="">
          <Row>
            <Col xs={6} md={6}>
              <VolunteersGif width='300px'/>
            <NosePressGif width='300px' />
            </Col>
            <Col xs={6} md={6}>
            Volunteer and hekp us test the app
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Volunteer
