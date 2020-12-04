import React from "react"
import { Container, Row, Col } from "react-bootstrap"

// import SmSliderButton from "./SmSliderButton"
import { ShareBtn, TwitterIcon, LightningIcon, ShareBtnYes } from "./_icons"
import SmSliderButton from "./SmSliderButton"
import { navigate } from "gatsby"
import { TwitterShareButton } from "react-share"

const IntroSupport = () => {
  return (
    <Row className="pink-bg pink-typo support row-p6">
      <Col xs={12} md={5} lg={6} className="">
        <Row>
          <Col xs={12} className="d-flex align-items-center mb-4">
            <TwitterIcon height="30px" class="mr-4" />
            <h3 className="mr-5 text-nowrap">Share the news!</h3>
          </Col>
          <Col xs={12} className="support-btn">
            <SmSliderButton
              onClick={() => {
                // console.log("GO!")
                window.open(
                  "http://twitter.com/share?text=text goes here&url=http://url goes here&hashtags=hashtag1,hashtag2,hashtag3"
                )
                // navigate(
                //   "http://twitter.com/share?text=text goes here&url=http://url goes here&hashtags=hashtag1,hashtag2,hashtag3"
                // )
              }}
            >
              Go!
            </SmSliderButton>
            <TwitterShareButton
              // ref={shareBtn => (this.twitterBtn = shareBtn)}
              url={"https://super-makers-dev.netlify.app/"}
              title={
                "Super Makers - A series of projects and games dedicated to renewable energies"
              }
            >
              asdasd
            </TwitterShareButton>
          </Col>
        </Row>
      </Col>
      <Col xs={12} md={7} lg={6} className="">
        <Row>
          <Col xs={12} className="d-flex flex-nowrap align-items-center mb-4">
            <LightningIcon height="30px" class="mr-4" />
            <h3 className="mr-5 text-nowrap">Become an Industry Partner:</h3>
          </Col>
          <Col xs={12} className="">
            <SmSliderButton
              onClick={() => {
                // console.log("Yes!")
                navigate("/contact")
              }}
            >
              Yes!
            </SmSliderButton>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default IntroSupport
