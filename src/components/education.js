import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import windmealRl from "../assets/images/education-rl.jpg"
import windmealNetwork from "../assets/images/windmeals-diagram.jpg"
import windmealNetworkVid from "../assets/images/windmeals-diagram.mp4"
import educationPng from "../assets/images/education-screen.svg"

import { WindmealIcon, WindmealDiagram } from "./_icons"

const Education = () => {
  return (
    <Row className="yellow-bg yellow-typo row-p6">
      <Col xs={12} className="mb-5">
        <h1>Education Partnership</h1>
      </Col>
      <Col sm={12} lg={6} className="">
        <img src={windmealRl} width="100%" />
      </Col>
      <Col sm={12} lg={6} className="mb-5">
        <img src={educationPng} width="100%" />
      </Col>

      <Col xs={12} className="">
        <h3>
          We are looking for schools, libraries and education programmes across
          the country to join Super Makers. We are looking for partners with a
          strong interest in sustainability and are excited about using art and
          design as a tool to get the message across. You will be helping us
          test the Super Makers experience and providing valuable feedback in
          exchange for exciting workshops and learning resources.
        </h3>
      </Col>
    </Row>
  )
}

export default Education
