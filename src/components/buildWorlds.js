import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { EarthGif } from "./_icons"

const BuildWorlds = props => {
  return (
    <Row className="worlds">
      {/* LEFT SIDE */}
      <Col xs={12} lg={6} className="green-bg green-typo text-center">
        <Row className="row-p6">
          <Col>
            <h1 className="text-left">Build Sustainable Worlds!</h1>
            <EarthGif width="90%" class="py-5" />
          </Col>
        </Row>
      </Col>
      {/* RIGHT SIDE */}
      <Col xs={12} lg={6} className="dark-blue-bg dark-blue-typo">
        <Row className="row-p6">
          <Col>
            <div
              dangerouslySetInnerHTML={props.theHtml}
              className="text-left"
            />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default BuildWorlds
