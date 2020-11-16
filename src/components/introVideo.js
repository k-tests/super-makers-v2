import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import myVid from "../assets/images/opening_17.mp4"
import vidPoster from "../assets/images/opening-video-poster.gif"
import { WindIcon, LineIconsIcon } from "./_icons"

const IntroVideo = props => {
  return (
    <Row className="yellow-bg yellow-typo row-p6">
      <Col className="">
        <Row className="mb-4 ">
          <Col xs={12} sm={12} md={12} lg={4} xl={3} className="text-left">
            <h3>Welcome to:</h3>

            <h1 className="mb-4">Super Makers!</h1>
            <WindIcon class="my-4" maxWidth="90%" />
            <h3 className="pt-4">
              A series of projects and games dedicated to renewable energies.
              <br />
              <br />
            </h3>
          </Col>

          <Col xs={12} sm={12} md={12} lg={8} xl={9} className="">
            <div className="yellow-bg text-left">
              <video
                controls
                controlsList="nodownload"
                width="100%"
                poster={vidPoster}
              >
                <source src={myVid} type="video/mp4" />
              </video>
            </div>
          </Col>
        </Row>
        <Row className="">
          <Col xs={12} className="mt-5 ">
            <h6 className="mb-4"> Works anywhere:</h6>
            <LineIconsIcon width="100%" />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default IntroVideo
