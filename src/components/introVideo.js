import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import { Player, ControlBar } from "video-react"
import myVid from "../images/opening_14_2-1.mp4"
import vidPoster from "../images/games.png"

const IntroVideo = props => {
  return (
    <Container fluid className="yellow-bg yellow-typo p-4">
      <Row className="text-center">
        <Col xs={12} className="">
          Welcome too super makers and
          {/* {props.head} */}
        </Col>
        <Col xs={{ offset: 1, span: 10 }} className="green-bg p-2 text-center ">
          {/* {props.video} */}
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
        <Col xs={12}> </Col>
        <Col xs={12} className="">
          Button stuff
          {/* {props.bottomText} */}
          {/* <div dangerouslySetInnerHTML={props.theHtml} className={"h3"} />  */}
        </Col>
      </Row>
    </Container>
  )
}

export default IntroVideo
