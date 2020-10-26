import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { VrAnimGif, CrossIcon, PhoneMillIcon, PhoneRpmGif } from "./_icons"

const CrossWorlds = props => {
  return (
    <Container fluid className="yellow-bg yellow-typo worlds">
      <Row className="">
        <Col xs={12} md={6} className="yellow-bg yellow-typo text-center p-6">
          <h1 className="text-left">
            Cross between virtual and physical worlds
          </h1>
          <VrAnimGif width="90%" class="py-5" />
          {/* <h3 className="mt-3 text-left">
            We are using VR and computer vision to kids into Making.
          </h3> */}
          <h3 className="mt-3 text-left">
            Super Makers uses augmented reality and computer vision to get kids
            into Making. For instance, kids are able to check the efficiency of
            a wind turbine with an RPM counter by holding their cardboard
            creations up to the camera.
          </h3>
        </Col>

        <Col
          xs={12}
          md={6}
          className="dark-blue-bg dark-blue-typo p-6 cross-backround"
        >
          <PhoneRpmGif height="60%" class="mx-auto  d-block" />

          {/* <PhoneRpmGif width="30%" class="mx-auto  d-block" /> */}
          {/* <h3 dangerouslySetInnerHTML={props.theHtml} className="text-left" /> */}
        </Col>
      </Row>
    </Container>
  )
}

export default CrossWorlds
