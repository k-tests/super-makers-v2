import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Line from "./milestonesLine"

const Milestones = () => {
  return (
    <Container fluid className="yellow-bg yellow-typo">
      <Row className="">
        <Col xs={6} className="p-6">
          <h1>Milestones:</h1>
          <Row>
            <Col xs={3}></Col>
            <Col xs={3}>
              <h3>Early 2021</h3>
            </Col>
            <Col xs={3}>
              <h3>April 2021</h3>
            </Col>
            <Col xs={3}>
              <h3>Summer 2021</h3>
            </Col>
          </Row>
          <Row className="py-5">
            <Col xs={3}>
              <h3>Alpha release</h3>
            </Col>
            <Col>
              <Line offset={"5%"} width={"20%"} />
            </Col>
          </Row>
          <Row>
            <Col xs={3}>
              <h3>Beta release</h3>
            </Col>
            <Col>
              <Line offset={"20%"} width={"50%"} />
            </Col>
          </Row>
          <Row className="py-5">
            <Col xs={3}>
              <h3>Public release</h3>
            </Col>
            <Col>
              <Line offset={"50%"} width={"95%"} />
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
