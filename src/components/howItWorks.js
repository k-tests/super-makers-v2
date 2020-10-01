import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import { Player, ControlBar } from "video-react"
import myVid from "../assets/images/opening_14_2-1.mp4"
import vidPoster from "../assets/images/games.png"

const HowItWorks = () => {
  return (
    <Container fluid className="yellow-bg yellow-typo mt-5 section">
      <Row className="mb-4">
        <Col xs={12} md={4} className="text-left ">
          <h1 className="mb-4 ">How it works?</h1>
        </Col>

        <Col xs={12} md={8} className="">
          <div className="yellow-bg text-left">
            <Player
              playsInline
              poster={vidPoster}
              src={myVid}
              height={500}
              fluid={false}
              aspectRatio="16:9"
            >
              <ControlBar autoHide={true}></ControlBar>
            </Player>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default HowItWorks
