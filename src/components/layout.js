import React from "react"
import TopNav from "./topnav"
import Footer from "./footer"
import "./custom.scss"

const Layout = ({ children }) => {
  return (
    <div>
      <TopNav />

      <div>{children}</div>
      <Footer />
    </div>
  )
}
export default Layout
