import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { EarthGif } from "./_icons"

const BuildWorlds = props => {
  return (
    <Container fluid className="">
      <Row className="">
        <Col xs={12} md={6} className="green-bg green-typo p-5 text-center">
          <h1 className="text-left">Build Sustainable Worlds!</h1>
          {/* <HelloIcon width="70%" class="py-5" /> */}
          <EarthGif width="90%" class="py-5" />
        </Col>
        <Col xs={12} md={6} className="dark-blue-bg dark-blue-typo p-5">
          <h3 dangerouslySetInnerHTML={props.theHtml} className="text-left" />
          {/* <div className="d-flex justify-content-center align-items-center py-5">
            <SwipeGif width="80%" class="" />
          </div> */}
        </Col>
      </Row>
    </Container>
  )
}

export default BuildWorlds
