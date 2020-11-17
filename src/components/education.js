import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import windmealRl from "../assets/images/education-rl.jpg"
import windmealNetwork from "../assets/images/windmeals-diagram.jpg"
import windmealNetworkVid from "../assets/images/windmeals-diagram.mp4"
import educationPng from "../assets/images/education-screen.svg"

import { ShareIcon, FacebookIcon, TwitterIcon, GooglePlay } from "./_icons"

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
          <br />
          <br />
          <span class="bold">Our experience with Education:</span>
          <br />
          <br />
        </h3>
        <Row>
          <Col xs={4}>
            <h3>
              {" "}
              <span class="bold">Microsoft Research:</span>
            </h3>
            <h5>
              dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to
              make a type
            </h5>
            <br />
            <GooglePlay width="140px" class="mr-5" />
            <span class="mr-5">More...</span>
          </Col>
          <Col xs={4}>
            <h3>
              {" "}
              <span class="bold">Tech Will save Us:</span>
            </h3>
            <h5>
              dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to
              make a type
            </h5>
            <br />
            <GooglePlay width="140px" class="mr-5" />
            <span class="mr-5">More...</span>
          </Col>
          <Col xs={4}>
            <h3>
              {" "}
              <span class="bold">FixED:</span>
            </h3>
            <h5>
              dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to
              make a type
            </h5>
            <br />
            <GooglePlay width="140px" class="mr-5" />
            <span class="mr-5">More...</span>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Education
