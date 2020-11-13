import React from "react"
import { Container, Row, Col } from "react-bootstrap"

// import SmSliderButton from "./SmSliderButton"
import { ShareBtn, TwitterIcon, LightningIcon, ShareBtnYes } from "./_icons"

const IntroSupport = () => {
  return (
    <Container fluid className="pink-bg pink-typo py-5  support">
      <Row className="">
        <Col xs={12} md={5} lg={6} className="px-6">
          <Row>
            <Col xs={12} className="d-flex align-items-center mb-4">
              <TwitterIcon height="30px" class="mr-4" />
              <h3 className="mr-5 text-nowrap">Share the news!</h3>
            </Col>
            <Col xs={12} className="support-btn">
              <ShareBtn width="180px" />
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={7} lg={6} className="px-6">
          <Row>
            <Col xs={12} className="d-flex flex-nowrap align-items-center mb-4">
              <LightningIcon height="30px" class="mr-4" />
              <h3 className="mr-5 text-nowrap">Become an Industry Partner:</h3>
            </Col>
            <Col xs={12} className="">
              <ShareBtnYes width="180px" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default IntroSupport
