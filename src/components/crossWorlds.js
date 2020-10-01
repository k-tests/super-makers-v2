import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import {
  CrossIcon,
  PhoneMillIcon,
} from "./icons"

const CrossWorlds = props => {
  return (
    <Container fluid className="yellow-bg yellow-typo">
      <Row className="">
        <Col xs={12} md={6} className="yellow-bg yellow-typo p-5 text-center ">
          <h1 className="text-left">
            We Cross between virtual and physical worlds
          </h1>

          <CrossIcon width="70%" class="py-5" />

          <h3 className="mt-3 text-left">
            We are using VR and computer vision to kids into Making.
          </h3>
        </Col>
        <Col
          xs={12}
          md={6}
          className="dark-blue-bg dark-blue-typo p-5 cross-backround"
        >
          <PhoneMillIcon width="30%" class="mx-auto  d-block" />
          {/* <div dangerouslySetInnerHTML={props.theHtml} className="text-left" /> */}
        </Col>
      </Row>
    </Container>
  )
}

export default CrossWorlds
