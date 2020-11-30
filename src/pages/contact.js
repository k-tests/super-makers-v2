import React from "react"
import Footer from "../components/footer"
import { Container, Row, Col } from "react-bootstrap"

import { ContactIcon } from "../components/_icons"

import TopNavFiller from "../components/_topNavFiller"
import Layout from "../components/layout"

const Contact = () => {
  return (
    <Layout>
      <TopNavFiller />
      <Row className="orange-bg orange-typo vh-100 row-p6">
        <Col xs={12} md={12} xl={12} className="text-left mb-5">
          <ContactIcon heigh="100px" class="mb-5" />

          <Row>
            <Col xs={12} className="mb-5">
              <h1>Contact us </h1>{" "}
            </Col>
            <Col xs={12} className="mb-5">
              <h3>Super at supermakers.org </h3>{" "}
            </Col>
          </Row>
        </Col>
      </Row>
      <Footer />
    </Layout>
  )
}

export default Contact
