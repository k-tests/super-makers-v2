import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import { HelloIcon, BuildWorldsLefttImg, CrossIcon } from "./Icons"

const CrossWorlds = props => {
  return (
    <Container fluid className="yellow-bg yellow-typo">
      <Row className="">
        <Col xs={12} md={6} className="yellow-bg yellow-typo p-5 text-center ">
          <h2>Cross between virtual and physical worlds</h2>
          <div className="d-flex justify-content-center align-items-center my-3">
            <CrossIcon width="80%" class="my-5" />
          </div>
          <p className="mt-3">
            We are using VR and computer vision to kids into Making.
          </p>
        </Col>
        <Col
          xs={12}
          md={6}
          className="dark-blue-bg dark-blue-typo p-5 cross-backround"
        >
          {/* <div dangerouslySetInnerHTML={props.theHtml} className="text-left" /> */}
        </Col>
      </Row>
    </Container>
  )
}

export default CrossWorlds
