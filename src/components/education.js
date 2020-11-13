import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import windmealRl from "../assets/images/education-rl.jpg"
import windmealNetwork from "../assets/images/windmeals-diagram.jpg"
import windmealNetworkVid from "../assets/images/windmeals-diagram.mp4"
import educationPng from "../assets/images/education-screen.png"

import { WindmealIcon, WindmealDiagram } from "./_icons"

const Education = () => {
  return (
    <Container fluid className="yellow-bg yellow-typo">
      <Row className="py-5">
        <Col xs={12} className="px-6 mb-5">
          <h1>Education Partnership</h1>
        </Col>
        <Row className="px-6">
          <Col xs={6} className="">
            <img src={windmealRl} width="100%" />
          </Col>
          <Col xs={6} className="text-center">
            {/* <WindmealDiagram width="100%" /> */}
            <img src={educationPng} width="100%" />

            {/* <img src={windmealRl} width="100%" /> */}
          </Col>
        </Row>
      </Row>
      <Row className="py-5">
        <Col xs={12} className="px-6">
          <h3>
            We are looking for schools, libraries and education programmes
            across the country to join Super Makers. We are looking for partners
            with a strong interest in sustainability and are excited about using
            art and design as a tool to get the message across. You will be
            helping us test the Super Makers experience and providing valuable
            feedback in exchange for exciting workshops and learning resources.
          </h3>
        </Col>
      </Row>
    </Container>
  )
}

export default Education
