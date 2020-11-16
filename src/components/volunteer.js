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
    <Row className="dark-blue-bg dark-blue-typo row-p6">
      <Col className="volunteer-row-p6">
        <h1 className="mb-5">Test it Out!</h1>
        <Row>
          <Col xs={12} lg={8} xl={6} className="mb-3">
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
            lg={4}
            xl={6}
            className="d-flex justify-content-center align-items-center flex-column text-center volunteer mt-sizes-5"
          >
            <GetInTouchIcon width="200px" />
            <h3 className="mt-5">Become an early tester!</h3>
          </Col>
          <Col xs={12} lg={8} xl={6}>
            <div className="mt-5 d-flex justify-content-between mt-sizes-6">
              <AppleIcon maxWidth="30px" class="mr-5" />
              <GoogleIcon maxWidth="30px" class="mr-5" />
              <ExplorerIcon maxWidth="30px" class="mr-5" />
              <WindowsIcon maxWidth="30px" class="mr-5" />
              <FirefoxIcon maxWidth="30px" class="mr-5" />
              <ChromeIcon maxWidth="30px" class="mr-5" />
              <SafariIcon maxWidth="30px" class="" />
            </div>
          </Col>
        </Row>
        {/* <Row>
          <Col className="mt-3 d-flex justify-content-between">
            <AppleIcon width="30px" class="mr-5" />
            <GoogleIcon width="30px" class="mr-5" />
            <ExplorerIcon width="30px" class="mr-5" />
            <WindowsIcon width="30px" class="mr-5" />
            <FirefoxIcon width="30px" class="mr-5" />
            <ChromeIcon width="30px" class="mr-5" />
            <SafariIcon width="30px" class="" />
          </Col>
        </Row> */}
      </Col>
    </Row>
  )
}

export default Volunteer
