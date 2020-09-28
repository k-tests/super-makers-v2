import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import crossIcon from "../images/cross.svg"

const CrossWorlds = () => {
  return (
    <Container fluid className="green-bg">
      <Row className="text-center">
        <Col xs={12} lg={6} className="yellow-bg yellow-typo p-5">
          <h2>Cross between virtual and physical worlds</h2>
          <img src={crossIcon} />
        </Col>
        <Col xs={12} lg={6} className="dark-blue-bg dark-blue-typo p-5">
          <p>We are using VR and computer vision to kids into Making.</p>
        </Col>
      </Row>
    </Container>
  )
}

export default CrossWorlds
