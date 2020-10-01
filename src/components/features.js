import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import { VrIcon } from "./Icons"

const Features = () => {
  return (
    <Container fluid className="pink-bg pink-typo">
      <Row className="py-5">
        <FeaturesItem
          title="What I need?"
          content="lling through a landscape of consecutive projects kids can learn about different types of renewable energies, build their own energy circuit, to light up their custom"
        >
          <VrIcon />
        </FeaturesItem>
        <FeaturesItem
          title="What I need?"
          content="lling through a landscape of consecutive projects kids can learn about different types of renewable energies, build their own energy circuit, to light up their custom"
        >
          <VrIcon />
        </FeaturesItem>
        <FeaturesItem
          title="What I need?"
          content="lling through a landscape of consecutive projects kids can learn about different types of renewable energies, build their own energy circuit, to light up their custom"
        >
          <VrIcon />
        </FeaturesItem>
        <FeaturesItem
          title="What I need?"
          content="lling through a landscape of consecutive projects kids can learn about different types of renewable energies, build their own energy circuit, to light up their custom"
        >
          <VrIcon />
        </FeaturesItem>
        <FeaturesItem
          title="What I need?"
          content="lling through a landscape of consecutive projects kids can learn about different types of renewable energies, build their own energy circuit, to light up their custom"
        >
          <VrIcon />
        </FeaturesItem>
        <FeaturesItem
          title="What I need?"
          content="lling through a landscape of consecutive projects kids can learn about different types of renewable energies, build their own energy circuit, to light up their custom"
        >
          <VrIcon />
        </FeaturesItem>
      </Row>
    </Container>
  )
}

export default Features

export const FeaturesItem = props => {
  return (
    <Col xs={6} className="text-center mb-5">
      <Row>
        <Col xs={12}>
          <h2>{props.title}</h2>
          <br />
          {props.children}
        </Col>
        <Col xs={12} lg={{ span: 8, offset: 2 }} className="text-left mt-3">
          <p className=" mt-3">{props.content}</p>
        </Col>
      </Row>
    </Col>
  )
}
