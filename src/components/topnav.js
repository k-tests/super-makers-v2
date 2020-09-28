import React from "react"
import { Link } from "gatsby"
import { Container, Col, Row, Navbar, Nav } from "react-bootstrap"

const TopNav = () => {
  return (
    <nav className="">
      <Navbar className="dark-blue-bg dark-blue-typo fixed-top" expand="lg">
        <Link to="/">Super Makers</Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Link to="/" className="mr-3">
            About
          </Link>
          <Link to="/about">Get in Touch</Link>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  )
}

export default TopNav
