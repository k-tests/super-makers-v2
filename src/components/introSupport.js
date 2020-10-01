import React from "react"
import { Container, Row, Col } from "react-bootstrap"

// import SmSliderButton from "./SmSliderButton"
import {
  ShareBtn,
  TwitterIcon,
  LightningIcon,
} from "./icons"

const IntroSupport = () => {
  return (
    <Container fluid className="pink-bg pink-typo py-5 support">
      <Row>
        <Col xs={12} md={6}>
          <div className="d-flex flex-nowrap justify-content-start align-items-center">
            {/* <div> */}
            <TwitterIcon width="30px " class="mr-5" />
            <h3 className="mr-5 text-nowrap">Share the news!!</h3>
            <ShareBtn width="180px" />
          </div>
        </Col>
        <Col xs={12} md={6} className="">
          <div className="d-flex flex-nowrap justify-content-end">
            <LightningIcon width="20px" class="mr-5 " />
            <h3 className="mr-5 text-nowrap">Become an Industry Partner!</h3>
            <ShareBtn width="180px" />

            {/* <Link to="/">
              <FacebookIcon width="20px" class="mr-5" />
            </Link>
            <Link to="/">
              <InstaIcon width="30px" class="mr-5" />
            </Link>
            <Link to="/">
              <TwitterIcon width="30px" />
            </Link> */}
          </div>
        </Col>
        {/* <Col xs={12} md={4}>
          <div className="d-flex flex-nowrap justify-content-end align-items-center">
            <h4 className="mr-5">Join!</h4>
            <ShareBtn width="180px" />
          </div>
        </Col> */}
      </Row>
    </Container>
  )
}

export default IntroSupport


  /* <Row className="text-center">
        <Col xs={12} className="">
          <h2>Become a renewable energy industry partner!</h2>
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
      </Row> */

