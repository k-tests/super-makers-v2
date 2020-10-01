import React from "react"
import { Link } from "gatsby"
import {  Navbar } from "react-bootstrap"

const TopNavFiller = () => {
  return (
    <nav className="">
      <Navbar className="py-3 yellow-bg yellow" expand="lg">
        <Link to="#" className="yellow">
          <span className="yellow">About</span>
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end yellow">
          <Link to="#" className="mr-3 yellow">
            <span className="yellow">About</span>
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  )
}

export default TopNavFiller
