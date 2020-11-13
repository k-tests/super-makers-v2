import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import {
  NosePressGif,
  PushNoseIcon,
  VolunteersGif,
  VolunteerBtnGif,
  VolunteersLedGif,
  GetInTouchIcon,
  AppleIcon,
  GoogleIcon,
  ExplorerIcon,
  WindowsIcon,
  ChromeIcon,
  SafariIcon,
  FirefoxIcon,
} from "./_icons"
import volunteerVid from "../assets/images/volanteers-rl-2.mp4"

const Volunteer = () => {
  return (
    <Container fluid className="dark-blue-bg dark-blue-typo">
      <Row className="">
        <Col className="p-6">
          <h1 className="mb-5 ">Test it Out!</h1>
          <Row>
            <Col xs={12} md={6} className="mb-3">
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

            <Col
              xs={12}
              md={6}
              className="d-flex justify-content-center align-items-center flex-column text-center"
            >
              <GetInTouchIcon width="200px" />
              <h3 className="mt-5">Would you like to be an early tester?</h3>
            </Col>
          </Row>
          <Row>
            <Col className="mt-3">
              <AppleIcon width="30px" class="mr-5" />
              <GoogleIcon width="30px" class="mr-5" />
              <ExplorerIcon width="30px" class="mr-5" />
              <WindowsIcon width="30px" class="mr-5" />
              <FirefoxIcon width="30px" class="mr-5" />
              <ChromeIcon width="30px" class="mr-5" />
              <SafariIcon width="30px" class="mr-5" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Volunteer
