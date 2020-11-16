import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import {
  EyesIcon,
  MissionIcon,
  Vision1Icon,
  Vision2Icon,
  Vision3Icon,
  Mission1Icon,
  Mission2Icon,
  Mission3Icon,
  GetInTouchInvestorsIcon,
} from "./_icons"

const Mission = () => {
  return (
    <Row className="pink-bg pink-typo row-p6">
      <Col xs={12} className="volunteer-row-p6">
        <Row className="">
          <Col xs={12} className="mt-5">
            <h1>Our Mission </h1>
            <MissionIcon height="90px" class="mt-5 mb-5" />
          </Col>
        </Row>

        <Row className="mt-5">
          <Col xs={12} className="mb-5">
            <h1 className="">
              Inspire the next generation to build a sustainable future.
            </h1>
          </Col>

          <Col xs={12} md={6}>
            <Mission2Icon height="40px" class="my-5" />
            <h2 className="">
              {" "}
              Enable kids to explore renewable energies in their own context.
            </h2>
          </Col>
          <Col xs={12} md={6}>
            <Mission3Icon height="40px" class="my-5" />
            <h2 className="">
              {" "}
              Use art and design as a tool for creating exciting science
              workshops.
            </h2>
          </Col>
        </Row>
        <Row className="mt-5  mb-5">
          <Col xs={12} xl={10} className="">
            <h3>
              {" "}
              Our workshops set children at the heart of the process. We
              regularly run workshops at primary schools, where we teach kids
              the fundamentals of scientific principles through a series of
              physical activities. We use design methods in our workshops that
              we think are relevant to all fields and participant ages. Due to
              the recent pandemic, we couldn't continue with our physical
              workshops and had to take some time to think of new ways of
              running workshops online. We hope that Super Makers will bring
              together the best of both worlds: getting kids to learn online by
              making their own real world inventions today, and getting them
              excited about the sustainable future of tomorrow.
            </h3>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col xs={12} className="">
            <h4 className="">Become our partner:</h4>
            <GetInTouchInvestorsIcon width="250px" class="mt-3" />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Mission
