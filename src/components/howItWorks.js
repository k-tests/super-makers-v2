import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import myVid from "../assets/images/opening_17.mp4"
import howVideoFillerGif from "../assets/images/how-video-filler.gif"

// import vidPoster from "../assets/images/games.png"

const HowItWorks = () => {
  return (
    <Container fluid className="yellow-bg yellow-typo section">
      <Row className="mb-4">
        <Col xs={12} sm={12} md={12} lg={4} xl={3} className="text-left p-6">
          <h1 className="mb-4 ">How it works?</h1>
          <h3 className="pt-4">See how the journey looks like...</h3>
        </Col>

        <Col xs={12} sm={12} md={12} lg={8} xl={9} className="p-6">
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
    </Container>
  )
}

export default HowItWorks
