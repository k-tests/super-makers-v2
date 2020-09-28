import React from 'react'
import { Link } from 'gatsby'

// import logo from '../img/logo.svg'
// import facebook from '../img/social/facebook.svg'
// import instagram from '../img/social/instagram.svg'
// import twitter from '../img/social/twitter.svg'
// import vimeo from '../img/social/vimeo.svg'
import { Container, Row, Col } from 'react-bootstrap'


const Footer = () => {

    return (
      <footer className=" ">
      <Container fluid className='dark-blue-bg links-style-one'>

<Row>

  <Col>
  <Link to='/about'>
  sdfsdfsdf
  </Link>
        © {new Date().getFullYear()}, Super Makers
      
  </Col>
</Row>


      </Container>
      </footer>
    )

}

export default Footer
