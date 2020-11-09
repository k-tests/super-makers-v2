import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { EyesIcon, FundingDiagram } from "./_icons"

const Seriously = () => {
  return (
    <Container fluid className="pink-bg pink-typo ">
      <Row className="py-5">

        <Col  className="px-6">
          
          <h1>Our Vision </h1>
          <EyesIcon width="150px" class="mt-5" />

<Row className="mt-5">
<Col >
<h3 >
            {" "}
            Our workshops set children at the heart of the process. We regularly
            run workshops at primary schools, where we teach kids the
            fundamentals of scientific principles through a series of physical
            activities. We use design methods in our workshops that we think are
            relevant to all fields and participant ages. Due to the recent
            pandemic, we couldn't continue with our physical workshops and had
            to take some time to think of new ways of running workshops online.
            We hope that Super Makers will bring together the best of both
            worlds:
      <br/>   <br/>
          <span className="h1">
              Getting kids to learn online by making their own real world
              inventions today.{" "}
            </span>
            <br /> <br />
            and <br /> <br />
            </h3>
</Col>
<Col>
<h3>
         
          
            <span className="h1">
              Getting kids excited about the sustainable future of tomorrow.
            </span>{" "}
            <br /> <br />
            Receiving funding to support our development activity will enable us
            to directly influence home learning and continue to use art and
            design as a tool for creating exciting workshops. We will use the
            funding to develop the first set of Super Makers workshops that can
            be delivered online. The first set of workshops will enable kids to
            explore renewable energies in their own context, be it at home or at
            school, inspiring the next generation to build a
          </h3>
</Col>
</Row>

       

        
        </Col>
      </Row>
    </Container>
  )
}

export default Seriously
