import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import helloIcon from "../images/hello.svg"

const BuildWorlds = () => {
  return (
    <Container fluid className="green-bg green-typo">
      <Row className="text-center">
        <Col xs={12} lg={6} className="green-bg green-typo p-5">
          <h2>Build Sustainable Worlds!</h2>
          <img src={helloIcon} />
        </Col>
        <Col xs={12} lg={6} className="dark-blue-bg dark-blue-typo p-5">
          <p>
            Super Makers is a series of workshops and games for building
            sustainable worlds. The first series is dedicated to renewable
            energies: Wind, Sun and Water
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default BuildWorlds
