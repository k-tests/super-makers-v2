import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import {
  EyesIcon,
  MissionIcon,
  LightningIcon,
  ShareBtn,
  SupportBtn,
} from "./_icons"

const Seriously = () => {
  return (
    <Container fluid className="pink-bg pink-typo ">
      <Row className="py-5">
        <Col xs={12} md={6} className="px-6">
          <h1>Our Vision </h1>
          <EyesIcon height="70px" class="mt-5 mb-5" />
          <h3 className="mt-5 ">
            <span className=" bold h1">
              Get kids excited about the sustainable future of tomorrow.
              <br />
              <br />
              Set children at the heart of the process. <br />
              <br />
              Empower kids to make their own inventions.
            </span>
            <br /> <br />
            Our workshops set children at the heart of the process. We regularly
            run workshops at primary schools, where we teach kids the
            fundamentals of scientific principles through a series of physical
            activities. We use design methods in our workshops that we think are
            relevant to all fields and participant ages. Due to the recent
            pandemic, we couldn't continue with our physical workshops and had
            to take some time to think of new ways of running workshops online.
            We hope that Super Makers will bring together the best of both
            worlds: getting kids to learn online by making their own real world
            inventions today, and getting them excited about the sustainable
            future of tomorrow.
          </h3>
        </Col>
        <Col xs={12} md={6} className="px-6">
          <h1>Our Mission </h1>
          <MissionIcon height="70px" class="mt-5 mb-5" />
          <h3 className="mt-5 ">
            <span className=" bold h1 ">
              Inspire the next generation to build a sustainable future. <br />
              <br />
              Enable kids to explore renewable energies in their own context.{" "}
              <br />
              <br />
              Use art and design as a tool for creating exciting science
              workshops.
            </span>
            <br /> <br />
            Receiving funding to support our development activity will enable us
            to directly influence home learning and continue to use art and
            design as a tool for creating exciting workshops. We will use the
            funding to develop the first set of Super Makers workshops that can
            be delivered online. The first set of workshops will enable kids to
            explore renewable energies in their own context, be it at home or at
            school, inspiring the next generation to build a sustainable future.
          </h3>
        </Col>
      </Row>
      <Row className="py-5">
        <Col xs={12} className="px-6">
          <h3 className="mr-5 text-nowrap">Become an Industry Partner:</h3>
          <SupportBtn width="180px" class="mt-5" />
        </Col>
      </Row>
    </Container>
  )
}

export default Seriously
