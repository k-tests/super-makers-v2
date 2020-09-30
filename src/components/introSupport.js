import React from "react"
import { Link, navigate } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import SmSliderButton from "./SmSliderButton"

const IntroSupport = () => {
  return (
    <Container fluid className="pink-bg pink-typo p-4">
      <Row className="text-center">
        <Col xs={12} className="">
          <h1>Become a renewable energy industry partner!</h1>
        </Col>
        <Col xs={12} className="">
          <Row className="my-3">
            <Col xs={6} md={6} className="text-left">
              <h4>Support Super Makers now so anyone can use it!</h4>
            </Col>
            <Col xs={6} md={6} className="">
              <div className="d-flex justify-content-end">
                <SmSliderButton
                  className=""
                  clickable
                  small
                  onSwiped={() => {
                    this.props.onClick(() => navigate("/edit"))
                  }}
                  // disabled={this.props.state === "locked" ? true : false}
                >
                  Go!
                </SmSliderButton>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default IntroSupport

// class IntroSupport extends React.Component {
//   renderItem() {
//     return (
//       <div>
//         {(this.props.state === "locked" || this.props.state === "unlocked") && (
//           <SmSliderButton
//             clickable
//             small
//             onSwiped={() => {
//               this.props.onClick(this.props.dest)
//             }}
//             disabled={this.props.state === "locked" ? true : false}
//           >
//             Go!
//           </SmSliderButton>
//         )}
//       </div>
//     )
//   }

//   render() {
//     return this.renderItem()
//   }
// }

// export default IntroSupport
