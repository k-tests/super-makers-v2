import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import windmealRl from "../assets/images/windmeals-rl.jpg"

import windmealNetworkVid from "../assets/images/windmeals-diagram.mp4"

import { ShareIcon, FacebookIcon, TwitterIcon, GooglePlay } from "./_icons"

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
          <br />
          <br />
          <span class="bold">Our experience with Education:</span>
          <br /> <br />
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

export default Investors
