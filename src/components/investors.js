import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import windmealRl from "../assets/images/windmeals-rl.jpg"

import windmealNetworkVid from "../assets/images/windmeals-diagram.mp4"

// import { WindmealIcon, WindmealDiagram } from "./_icons"

const Investors = () => {
  return (
    <Row className="green-bg green-typo row-p6">
      <Col xs={12} className="mb-5">
        <h1>Industry Partnership</h1>
      </Col>

      <Col sm={12} lg={6} className="">
        <img src={windmealRl} width="100%" />
      </Col>
      <Col sm={12} lg={6} className="text-center mb-5">
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

      <Col xs={12} className="">
        <h3>
          We are looking for industry leaders in sustainable energy who are
          excited about nurturing and supporting local communities, children and
          schools across the country. With your help we can get the message out
          and make this project a reality. We are keen to build genuine
          relationships between industry partners and the future generation. If
          you are as excited about giving children the opportunity to learn
          hands-on renewable energy as us please get in touch.
        </h3>
      </Col>
    </Row>
  )
}

export default Investors
