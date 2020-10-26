import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Line from "./milestonesLine"
import { SpringIcon, SummerIcon, WinterIcon } from "./_icons"

const Milestones = () => {
  return (
    <Container fluid className="yellow-bg yellow-typo">
      <Row className="">
        <Col xs={12} className="p-6">
          <h1>
            Milestones <span className="h3">(2021)</span>
          </h1>

          <Row>
            <Col xs={3}></Col>
            <Col xs={3}>
              <WinterIcon width="40px" class="mb-3" />
              <h6>Early 2021</h6>
            </Col>
            <Col xs={3}>
              <SpringIcon width="40px" class="mb-3" />

              <h6>April 2021</h6>
            </Col>
            <Col xs={3}>
              <SummerIcon width="40px" class="mb-3" />

              <h6>Summer 2021</h6>
            </Col>
          </Row>
          <Row className="py-5">
            <Col xs={3}>
              <h3>Alpha release:</h3>
              <h6>About the Alpha release </h6>
            </Col>
            <Col>
              <Line offset={"15px"} width={"20%"} color="#FF6D00" />
            </Col>
          </Row>
          <Row>
            <Col xs={3}>
              <h3>Beta release:</h3>
              <h6>About the Beta release </h6>
            </Col>
            <Col>
              <Line offset={"20%"} width={"50%"} color="#182a74" />
            </Col>
          </Row>
          <Row className="py-5">
            <Col xs={3}>
              <h3>Public release:</h3>
              <h6>About the Public release </h6>
            </Col>
            <Col>
              <Line offset={"50%"} width={"95%"} color="#04BF8A" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Milestones
{
  /* <div className='d-flex flex-nowrap align-items-center'> */
}
