import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import myVid from "../assets/images/opening_14_2-1.mp4"

import vidPoster from "../assets/images/games-2.png"
import { WindIcon, LineIconsIcon } from "./_icons"

const IntroVideo = props => {
  return (
    <Container fluid className="yellow-bg yellow-typo mt-5 section ">
      <Row className="mb-4">
        <Col xs={12} sm={12} md={12} lg={4} xl={3} className="text-left px-6">
          <h3>Welcome to:</h3>

          <h1 className="mb-4">Super Makers!</h1>
          <WindIcon class="my-4" maxWidth="90%" />
          <h3 className="pt-4">
            A series of projects and games dedicated to renewable energies.
            <br />
            <br />
            {/* <Link to="/" className="orange">
              Coming soon!
            </Link> */}
          </h3>
        </Col>

        <Col xs={12} sm={12} md={12} lg={8} xl={9} className="px-6">
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
        <Col xs={12} className="my-5 px-6">
          <LineIconsIcon width="100%" />
        </Col>
      </Row>
    </Container>
  )
}

export default IntroVideo
