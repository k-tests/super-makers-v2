import React from "react"
import TopNav from "./topnav"
import Footer from "./footer"
import "./custom.scss"

import { Link } from "gatsby"
import { Container, Col, Row, Navbar, Nav } from "react-bootstrap"
import { withPrefix } from "gatsby"

const Layout = ({ children }) => {
  return (
    <div>
      <TopNav />
      {/* <header className="">{header}</header>  */}

      <div>{children}</div>
      <Footer />
    </div>
  )
}
export default Layout

// const Layout = ({ location, title, children }) => {
//   const rootPath = `${__PATH_PREFIX__}/`
//   const isRootPath = location.pathname === rootPath
//   let header

//   if (isRootPath) {
//     header = (
//       <h1 className="main-heading">
//         <Link to="/">{title}</Link>
//       </h1>
//     )
//   } else {
//     header = (
//       <Link className="header-link-home" to="/">
//         {title}
//       </Link>
//     )
//   }

//   return (
//     // <div className="" data-is-root-path={isRootPath}>
// <>
//       <TopNav/>
//  <header className="">{header}</header>

//       <main>{children}</main>
//       <Footer/>

//     </>
//   )
// }

// export default Layout
