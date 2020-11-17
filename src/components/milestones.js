import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Line from "./milestonesLine"
import { SpringIcon, SummerIcon, WinterIcon } from "./_icons"

const Milestones = () => {
  return (
    <Row className="pink-bg pink-typo row-p6">
      <Col xs={12} className="">
        <h1>
          Milestones <span className="h3">(2021)</span>
        </h1>
        {/* Title Line */}
        <Row className="my-5">
          <Col xs={0} lg={3}></Col>
          <Col xs={4} lg={3}>
            <WinterIcon width="40px" class="mb-3" />
            <h5>Early 2021</h5>
          </Col>
          <Col xs={4} lg={3}>
            <SpringIcon width="40px" class="mb-3" />

            <h5>April 2021</h5>
          </Col>
          <Col xs={4} lg={3}>
            <SummerIcon width="40px" class="mb-3" />

            <h5>Summer 2021</h5>
          </Col>
        </Row>

        {/* Alpha Line */}

        <Row className="mb-5">
          <Col xs={12} lg={3} className="mb-4">
            <h3>
              <span className="bold">Alpha release:</span>{" "}
            </h3>
            <h5>
              We will improve and refine the games and workshops with a small
              test group of volunteers.
            </h5>
          </Col>

          <Col>
            <Line offset={"15px"} width={"20%"} color="#ffdc20" />
          </Col>
        </Row>
        {/* Beta Line */}

        <Row className="mb-5">
          <Col xs={12} lg={3} className="mb-4">
            <h3>
              {" "}
              <span className="bold">Beta release:</span>
            </h3>
            <h5>
              We will work together with our educational partners to test Super
              Makers with a wider audience.{" "}
            </h5>
          </Col>
          <Col>
            <Line offset={"20%"} width={"50%"} color="#182a74" />
          </Col>
        </Row>
        {/* Public Line */}

        <Row className="mb-5">
          <Col xs={12} lg={3} className="mb-4">
            <h3>
              {" "}
              <span className="bold">Public release:</span>
            </h3>
            <h5>Super Makers goes live and gets rolled out to the public. </h5>
          </Col>
          <Col>
            <Line offset={"50%"} width={"95%"} color="#04BF8A" />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Milestones
{
  /* <div className='d-flex flex-nowrap align-items-center'> */
}
