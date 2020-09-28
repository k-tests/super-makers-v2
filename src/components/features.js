import React from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'


const Features = () => {

    return (
      <Container fluid className='pink-bg pink-typo'>

<Row className=''>
<Col xs={6} className=''>
<h2>Item 1:</h2>
<p>Details here.....</p>
  </Col>
  <Col xs={6} className=''>
<h2>Item 2:</h2>
<p>Details here.....</p>
  </Col>
  <Col xs={6} className=''>
<h2>Item 3:</h2>
<p>Details here.....</p>
  </Col>
  <Col xs={6} className=''>
<h2>Item 4:</h2>
<p>Details here.....</p>
  </Col>
  <Col xs={6} className=''>
<h2>Item 5:</h2>
<p>Details here.....</p>
  </Col>
  <Col xs={6} className=''>
<h2>Item 6:</h2>
<p>Details here.....</p>
  </Col>
</Row>
      </Container>
    )

}

export default Features
