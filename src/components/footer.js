import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

const Footer = () => {
  return (
    <footer className=" ">
      <Container fluid className="dark-blue-bg links-style-one">
        <Row>
          <Col>
            <Link to="/about">sdfsdfsdf</Link>© {new Date().getFullYear()},
            Super Makers
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
