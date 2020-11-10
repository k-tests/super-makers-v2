import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import screen1 from "../assets/images/screen-1.png"
import screen2 from "../assets/images/screen-2.png"
import screen3 from "../assets/images/screen-3.png"
import screen4 from "../assets/images/screen-4.png"
import screen5 from "../assets/images/screen-5.png"
import screen6 from "../assets/images/screen-6.png"

const screenArr = [
  { screen: screen1, title: "Guide", caption: "opening screen for the...." },
  { screen: screen2, title: "Protoyping Board", caption: "opening screen for the...." },
  { screen: screen3, title: "Sketch and Test", caption: "opening screen for the...." },
  { screen: screen4, title: "Game levels", caption: "bopening screen for the...." },
  { screen: screen5, title: "AR making sesion", caption: "baopening screen for the...." },
  { screen: screen6, title: "Mistakes", caption: "opening screen for the...." },
]

const AppScreens = () => {
  return (
    <Container fluid className="dark-blue-bg dark-blue-typo">
      <Row className="">
        <Col className="p-6">
          <h3>Examples:</h3><br/><br/>
          <Row className="">
            {screenArr.map(screen => (
              <Col key={screen.title} xs={12} sm={6} md={4} className=" mb-5">
                <ScreenShot screenNum={screen.screen} />
                <h3 className="mt-3">{screen.title}</h3>
                <h6 className="mt-0">{screen.caption}</h6>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default AppScreens

const ScreenShot = props => {
  return <img src={props.screenNum} width="100%" className="" />
}
