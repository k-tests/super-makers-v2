import React from "react"
import Footer from "../components/footer"
import { Container, Row, Col } from "react-bootstrap"

import TopNavFiller from "../components/_topNavFiller"
import Layout from "../components/layout"
import { AboutIcon } from "../components/_icons"

const About = () => {
  return (
    <Layout>
      <TopNavFiller />
      <Row className="yellow-bg yellow-typo row-p6">
        <Col xs={12} md={12} xl={12} className="text-left mb-5">
          <AboutIcon heigh="100px" class="mb-5" />
          <Row>
            <Col xs={12} className="mb-5">
              <h1>About </h1>{" "}
            </Col>
            <Col xs={12} className="mb-5">
              <h3>
                Super Makers is the brainchild of Cindy Strobach and Mike Vanis
                from Unit Lab and Koby Barhad.{" "}
              </h3>{" "}
            </Col>
            <Col xs={12} xl={4} className="mb-5">
              <h3>
                <span className="bold">Cindy Strobach</span> <br /> <br />
                Cindy is a product designer and one part of Unit Lab. Alongside
                her studio practice she teaches students about making and
                materials at Goldsmiths University of London. She is passionate
                about scientific experiments and likes to bring those into
                people’s everyday lives through products and installations.
                Cindy is leading the physical making side of Super Makers.
              </h3>
            </Col>
            <Col xs={12} xl={4} className="mb-5">
              <h3>
                <span className="bold">Mike Vanis</span> <br /> <br />
                Mike is an electronic engineer and the other half of Unit Lab.
                He is also the Co Founder of V-A-S-T, part of the Interaction
                Research Studio and has worked at Tech Will Save Us in the past.
                Projects he worked on include the design of the BBC micro:bit,
                DIY cameras for watching birds and Gamer, a DIY Gameboy. Mike
                uses technology as a tool for bringing exciting projects alive,
                always setting people at the heart of the process. Mike is
                heading the tech side of Super Makers.
              </h3>
            </Col>
            <Col xs={12} xl={4} className="mb-5">
              {" "}
              <h3>
                <span className="bold">Koby Barhad</span> <br /> <br />
                Koby Barhad is a speculative and UX designer, co-founder of
                Radical Norms, foresight research lab in Toronto, Canada. Koby's
                background in is visual communication and he worked in the past
                with cultural institutions such as the Victoria and Albert
                Museum, UK and Vitra Museum, Germany. Koby is working between
                disciplines and spending most of his time exploring alternative
                technological futures for brands and organizations such as Royal
                Bank of Canada, Colgate Palmolive and more. Koby Barhad is
                leading the visual communication of Super Makers.
              </h3>
            </Col>
          </Row>
        </Col>
      </Row>
      <Footer />
    </Layout>
  )
}

export default About
