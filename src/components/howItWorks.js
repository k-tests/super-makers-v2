import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import myVid from "../assets/images/opening_17.mp4"
import howVideoFillerGif from "../assets/images/how-video-filler.gif"

// import vidPoster from "../assets/images/games.png"

const HowItWorks = () => {
  return (
    <Row className="yellow-bg yellow-typo row-p6">
      <Col xs={12} sm={12} md={12} lg={4} xl={3} className="text-left mb-5">
        <h1 className="mb-5">How it works?</h1>
        <h3 className="">See how the journey looks like...</h3>
      </Col>

      <Col xs={12} sm={12} md={12} lg={8} xl={9} className="">
        <div className="yellow-bg text-left">
          <video
            controls
            controlsList="nodownload"
            width="100%"
            poster={howVideoFillerGif}
          >
            <source src={myVid} type="video/mp4" />
          </video>
        </div>
      </Col>
    </Row>
  )
}

export default HowItWorks
