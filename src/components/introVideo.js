import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col, Button } from "react-bootstrap"
import { Player, ControlBar } from "video-react"
import myVid from "../assets/images/opening_14_2-1.mp4"
import vidPoster from "../assets/images/games-2.png"
import {
  HomeIcon,
  PushNoseIcon,
  ComingSoonSchoolIcon,
  ComingSoonHomeIcon,
  ComingSoonCarIcon,
  WindIcon,
  LineIconsIcon,
} from "./icons"

const IntroVideo = props => {
  return (
    <Container fluid className="yellow-bg yellow-typo mt-5 section">
      <Row className="mb-4">
        <Col xs={12} md={4} className="text-left ">
          <h1 className="mb-4 ">Welcome to Super Makers!</h1>
          <WindIcon class="my-4" maxWidth="90%" />

          <h3 className="py-4">
            A series of projects and games dedicated to renewable energies.
            <br />
            <Link to="/">Coming soon!</Link>
          </h3>
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
      <Row>
        <Col xs={12} className="py-4">
          <LineIconsIcon width="100%" />
          {/* <div className="w-100 d-flex flex-nowrap justify-content-between align-items-center">
            <ComingSoonSchoolIcon width="45px" />
            <ComingSoonCarIcon width="50px" />
            <ComingSoonHomeIcon width="50px" />
            <ComingSoonSchoolIcon width="45px" />
            <ComingSoonCarIcon width="50px" />
            <ComingSoonHomeIcon width="50px" />
          </div> */}
        </Col>
      </Row>
    </Container>
  )
}

export default IntroVideo
/* {props.bottomText} */
/* <div dangerouslySetInnerHTML={props.theHtml} className={"h3"} />  */
/* <HomeIcon width="30px" /> */
