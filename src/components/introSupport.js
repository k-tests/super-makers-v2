import React from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'


const IntroSupport = () => {

    return (
      <Container fluid className='pink-bg pink-typo p-4'>

<Row className='text-center'>
  <Col xs={12} className=''>
  Bercome industry partner
  </Col>
  <Col xs={12} className=''>
      <Row>
          <Col xs={6} md={6}>
          Support button
          </Col>
          <Col xs={6} md={6}>
          Social Buttons
          </Col>
      </Row>
  </Col>
  
</Row>
      </Container>
    )

}

export default IntroSupport
