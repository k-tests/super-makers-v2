import React from "react"
import { Link } from "gatsby"
import { Navbar } from "react-bootstrap"

const TopNav = () => {
  return (
    <nav className="">
      <Navbar
        className="py-3 dark-blue-bg dark-blue-typo fixed-top"
        expand="lg"
      >
        <Link to="/trailer">Super Makers</Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Link to="/trailer" className="mr-5">
            About
          </Link>
          <Link to="/trailer">Get in Touch</Link>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  )
}

export default TopNav
