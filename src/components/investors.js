import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import windmealRl from "../assets/images/windmeals-rl.jpg"

import windmealNetworkVid from "../assets/images/windmeals-diagram.mp4"

import {
  ExperienceRbc,
  ExperienceBbc,
  ExperienceOlimpus,
  ExperienceQueen,
} from "./_icons"

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
          <span class="bold">Partners we worked with in the past:</span>
          <br /> <br />
        </h3>
        <Row>
          <Col xs={12} className="d-flex justify-content-between">
            <ExperienceBbc class="mr-5 logo-w-3" />
            <ExperienceOlimpus class="mr-5 logo-w-3" />
            <ExperienceRbc class="mr-5 logo-w-2" />
            <ExperienceQueen class="logo-w-3" />
          </Col>
        </Row>

        {/* <Row>
          <Col xs={4}>
            <h3>
              {" "}
              <span class="bold">BBC micro:bit</span>
            </h3>
            <h5 className="mb-5">
              BBC's learning tool for digital skills and creativity. Million
              micro:bits were given to UK school children as part of the Make It
              Digital project.
            </h5>
            <br />
            <ExperienceBbc height="80px" class="mr-5" />
          </Col>
          <Col xs={4}>
            <h3>
              {" "}
              <span class="bold">Olympus - DIY Camera for Air Lens</span>
            </h3>
            <h5 className="mb-5">
              limited edition of DIY interactive paper cameras for the OLYMPUS
              AIR lens. Using conductive ink, cardboard templates and an app
              kids can invent their own way of taking picture.
            </h5>
            <br />
            <ExperienceOlimpus width="160px" class="mr-5" />
          </Col>
          <Col xs={4}>
            <h3>
              {" "}
              <span class="bold">Royal Bank of Canada</span>
            </h3>
            <h5 className="mb-5">
              UX/UI for orginazational chnage (*under NDA)
            </h5>
            <br />
            <ExperienceRbc height="80px" class="mr-5" />
          </Col>
        </Row> */}
      </Col>
    </Row>
  )
}

export default Investors
