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
            Our workshops set children at the heart of the process. We regularly
            run workshops at primary schools, where we teach kids the
       
            pandemic, we couldn't continue with our physical workshops and had
            to take some time to think of new ways of running workshops online.
            We hope that Super Makers will bring together the best of both
            worlds:
          </h3>
        </Col>
      </Row>
    </Container>
  )
}

export default Education
