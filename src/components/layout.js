import React from "react"
import TopNav from "./topnav"
// import Footer from "./footer"
import { Container, Row } from "react-bootstrap"
import "./custom.scss"

const Layout = ({ children }) => {
  return (
    <div>
      <TopNav />
      <Container fluid>{children}</Container>

      {/* <div>{children}</div> */}
      {/* <Footer /> */}
    </div>
  )
}
export default Layout
