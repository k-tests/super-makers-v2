import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import {
  VrAnimGif,
  CrossIcon,
  PhoneMillIcon,
  PhoneRpmGif,
  IPhoneCoverIcon,
} from "./_icons"
import backroundVid from "../assets/images/vr-real.mp4"

const CrossWorlds = props => {
  return (
    <Row className="worlds">
      {/* LEFT SIDE */}
      <Col xs={12} lg={6} className="yellow-bg yellow-typo text-center">
        <Row className="row-p6">
          <Col>
            <h1 className="text-left">
              Cross between virtual and physical worlds
            </h1>
            <VrAnimGif width="90%" class="py-5" />
            <h3 className="mt-3 text-left">
              Super Makers uses augmented reality and computer vision to get
              kids into making. For instance, kids are able to check the
              efficiency of a wind turbine with an RPM counter by holding their
              cardboard creations up to the camera.
            </h3>
          </Col>
        </Row>
      </Col>
      {/* RIGHT SIDE */}
      <Col
        xs={12}
        lg={6}
        className="dark-blue-bg dark-blue-typo position-relative video-back"
      >
        <video
          autoplay="autoplay"
          muted
          loop="true"
          controlsList="nodownload"
          id="backround-video"
        >
          <source src={backroundVid} type="video/mp4" />
        </video>
        <PhoneRpmGif height="60%" class="mx-auto  d-block" />
        <IPhoneCoverIcon height="60%" class="mx-auto  d-block" />
      </Col>
    </Row>

    // <Container fluid className="yellow-bg yellow-typo worlds">
    //   <Row className="">
    //     <Col xs={12} md={6} className="yellow-bg yellow-typo text-center p-6">
    //       <h1 className="text-left">
    //         Cross between virtual and physical worlds
    //       </h1>
    //       <VrAnimGif width="90%" class="py-5" />
    //       <h3 className="mt-3 text-left">
    //         Super Makers uses augmented reality and computer vision to get kids
    //         into making. For instance, kids are able to check the efficiency of
    //         a wind turbine with an RPM counter by holding their cardboard
    //         creations up to the camera.
    //       </h3>
    //     </Col>
    //     <Col
    //       xs={12}
    //       md={6}
    //       className="position-relative p-6"
    //       // className="dark-blue-bg dark-blue-typo p-6 cross-backround"
    //     >
    //       <video
    //         autoplay="autoplay"
    //         muted
    //         loop="true"
    //         controlsList="nodownload"
    //         id="backround-video"
    //       >
    //         <source src={backroundVid} type="video/mp4" />
    //       </video>

    //       <PhoneRpmGif height="60%" class="mx-auto  d-block" />
    //       <IPhoneCoverIcon height="60%" class="mx-auto  d-block" />
    //     </Col>
    //   </Row>
    // </Container>
  )
}

export default CrossWorlds
