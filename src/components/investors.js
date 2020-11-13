import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import windmealRl from "../assets/images/windmeals-rl.jpg"

import windmealNetworkVid from "../assets/images/windmeals-diagram.mp4"

// import { WindmealIcon, WindmealDiagram } from "./_icons"

const Investors = () => {
  return (
    <Container fluid className="green-bg green-typo">
      <Row className="py-5">
        <Col xs={12} className="px-6 mb-5">
          <h1>Industry Partnership</h1>
        </Col>
        <Row className="px-6">
          <Col xs={6} className="">
            <img src={windmealRl} width="100%" />
          </Col>
          <Col xs={6} className="text-center">
            <video
              autoplay="autoplay"
              muted
              loop="true"
              controlsList="nodownload"
              id="volunteer-video"
            >
              <source src={windmealNetworkVid} type="video/mp4" />
            </video>
          </Col>
        </Row>
      </Row>
      <Row className="py-5">
        <Col xs={12} className="px-6">
          <h3>
            We are looking for industry leaders in sustainable energy who are
            excited about nurturing and supporting local communities, children
            and schools across the country. With your help we can get the
            message out and make this project a reality. We are keen to build
            genuine relationships between industry partners and the future
            generation. If you are as excited about giving children the
            opportunity to learn hands-on renewable energy as us please get in
            touch.
          </h3>
        </Col>
      </Row>
    </Container>
  )
}

export default Investors
