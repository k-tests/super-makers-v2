import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col, Button } from "react-bootstrap"
import { Player, ControlBar } from "video-react"
import myVid from "../assets/images/opening_14_2-1.mp4"
import vidPoster from "../assets/images/games.png"
import {
  HomeIcon,
  PushNoseIcon,
  ComingSoonSchoolIcon,
  ComingSoonHomeIcon,
  ComingSoonCarIcon,
} from "./Icons"

const IntroVideo = props => {
  return (
    <Container fluid className="yellow-bg yellow-typo p-4">
      <Row className="">
        <Col xs={12} className="mb-4 text-center">
          <h1 className="">Welcome to Super Makers!</h1>
          {/* {props.head} */}
        </Col>
        <Col xs={{ offset: 1, span: 10 }} className="green-bg p-2 text-center ">
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
        <Col xs={{ offset: 1, span: 10 }} className="mt-4">
          <Row className="mt-3">
            <h4 className="">
              Coming soon to your home, school, yard, favourite park, to
              wherever you prefer.
            </h4>
          </Row>
          <Row className="mt-4">
            <div className="w-100 d-flex flex-nowrap justify-content-between align-items-center">
              <ComingSoonSchoolIcon width="45px" />
              <ComingSoonCarIcon width="50px" />
              <ComingSoonHomeIcon width="50px" />
              <ComingSoonSchoolIcon width="45px" />
              <ComingSoonCarIcon width="50px" />
              <ComingSoonHomeIcon width="50px" />
            </div>
          </Row>
        </Col>
        {/* <Col xs={12} className="mt-4">
          <div className="d-flex flex-nowrap justify-content-between align-items-center">
            <h3 className="mb-4">Coming soon to your home, school, library</h3>
            <PushNoseIcon width="100px" />
          </div>
        </Col> */}
      </Row>
    </Container>
  )
}

export default IntroVideo
/* {props.bottomText} */
/* <div dangerouslySetInnerHTML={props.theHtml} className={"h3"} />  */
/* <HomeIcon width="30px" /> */
