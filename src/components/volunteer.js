import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import {
  NosePressGif,
  PushNoseIcon,
  VolunteersGif,
  VolunteerGif,
  VolunteerBtnGif,
  VolunteersLedGif,
  GetInTouchIcon
} from "./_icons"
import volunteerVid from "../assets/images/volanteers-rl-2.mp4"


const Volunteer = () => {
  return (
    <Container fluid className="dark-blue-bg dark-blue-typo">
      <Row className="">
        <Col className="p-6">
          <h1 className="mb-5 ">Test it Out!</h1>
          <Row>
            <Col xs={12} md={6} className='mb-3'>
              <video
            autoplay="autoplay"
            muted
            loop="true"
            controlsList="nodownload"
            id="volunteer-video"
          >
            <source src={volunteerVid} type="video/mp4" />
          </video>
            </Col>

            <Col xs={12} md={6} className='d-flex justify-content-center align-items-center flex-column text-center'>

          <GetInTouchIcon width="200px"/>
            <h3 className="mt-5">Would you like to be an early tester?</h3>

            </Col>
          </Row>

        </Col>
      </Row>
    </Container>
  )
}

export default Volunteer
