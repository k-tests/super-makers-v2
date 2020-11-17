import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap"
import { InstaWhiteIcon } from "./_icons"

const Footer = () => {
  return (
    <footer className=" ">
      <Navbar
        className="py-3 dark-blue-bg dark-blue-typo fixed-bottom"
        expand="lg"
      >
        <Nav className="mr-auto">
          <div>© {new Date().getFullYear()}, Super Makers</div>
        </Nav>
        <Nav>
          <InstaWhiteIcon width="20px" class="ml-5" />
        </Nav>
        {/* <div className="d-flex justify-content-between">
       
        </div> */}
      </Navbar>
    </footer>
  )
}

export default Footer
