import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import { HelloIcon, BuildWorldsRightImg } from "./Icons"

const BuildWorlds = props => {
  return (
    <Container fluid className="">
      <Row className="">
        <Col xs={12} md={6} className="green-bg green-typo p-5 text-center">
          <h2>Build Sustainable Worlds!</h2>
          <div className="d-flex justify-content-center align-items-center h-100">
            <HelloIcon width="80%" class="mb-5 mt-3" />
          </div>
        </Col>
        <Col xs={12} md={6} className="dark-blue-bg dark-blue-typo p-5">
          <div dangerouslySetInnerHTML={props.theHtml} className="text-left" />
          <div className="d-flex justify-content-center align-items-center py-5">
            <BuildWorldsRightImg width="80%" class="" />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default BuildWorlds
