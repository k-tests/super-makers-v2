import React from "react"
import { Container, Row, Col, Accordion } from "react-bootstrap"
import { AccordionIcon } from "./_icons"

import { ContextAwareToggle } from "./accordion"

import screen1 from "../assets/images/screen-1.png"
import screen2 from "../assets/images/screen-2.png"
import screen3 from "../assets/images/screen-3.png"
import screen4 from "../assets/images/screen-4.png"
import screen5 from "../assets/images/screen-5.png"
import screen6 from "../assets/images/screen-6.png"

const screenArr = [
  {
    screen: screen1,
    title: "Step by Step",
    caption: "Instructions explain all you need to know for each activity.",
  },
  {
    screen: screen2,
    title: "Prototyping Lab",
    caption:
      "An interactive lab where you connect wires and build your electronic circuits.",
  },
  {
    screen: screen3,
    title: "Sketch Board",
    caption:
      "Here you can draw your creations and animate them to make them move.",
  },
  {
    screen: screen4,
    title: "Game Menu",
    caption:
      "An exciting range of hands-on projects allows you to understand the full picture.",
  },
  {
    screen: screen5,
    title: "AR Workshop",
    caption:
      "Hands-on making session where you can use AR to bring your creations alive.",
  },
  {
    screen: screen6,
    title: "Room for Error",
    caption:
      "We allow room for mistakes, which lets you understand problems and try again.",
  },
]

const AppScreens = () => {
  return (
    // <Container fluid className="">
    <Row className="dark-blue-bg dark-blue-typo row-p6">
      <Col className="">
        <h3>Examples:</h3>
        <br />
        <br />
        <Row className="">
          {screenArr.map(screen => (
            <Col key={screen.title} xs={12} md={6} lg={4} className="mb-5">
              <ScreenShot screenNum={screen.screen} />
              {/* <h3 className="mt-5">{screen.title}</h3> */}

              {/* More Info (Accordion) */}
              <Accordion defaultActiveKey="1">
                <ContextAwareToggle eventKey="0">
                  <h3 className="mr-3">{screen.title}</h3>
                  <AccordionIcon width="25px" class="" />
                </ContextAwareToggle>
                <Accordion.Collapse eventKey="0">
                  <h6 className="mt-3">{screen.caption}</h6>
                </Accordion.Collapse>
              </Accordion>
              {/* END (Accordion) */}

              {/* <h6 className="mt-3">{screen.caption}</h6> */}
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
    // </Container>
  )
}

export default AppScreens

const ScreenShot = props => {
  return <img src={props.screenNum} width="100%" className="" />
}
