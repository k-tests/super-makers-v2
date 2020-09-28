import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import { Player, ControlBar } from "video-react"
import myVid from "../images/opening_14_2-1.mp4"
import vidPoster from "../images/games.png"

const HowItWorks = () => {
  return (
    <Container fluid className="green-bg green-typo p-4">
      <Row className="text-center">
        <Col xs={12} className="">
          <h2>How Does it work? </h2>
        </Col>
        <Col xs={{ offset: 1, span: 10 }} className="yellow-bg p-2 ">
          <Player
            playsInline
            poster={vidPoster}
            src={myVid}
            // height={auto}
            fluid={false}
            aspectRatio="16:9"
          >
            <ControlBar autoHide={true}></ControlBar>
          </Player>
        </Col>
      </Row>
    </Container>
  )
}

export default HowItWorks
