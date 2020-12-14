/**
 * Write-only the password as cookie
 */
import React, { useState } from "react"
import { setSessionPassword } from "../utils/utils"
// import { Container, Row, Col } from "react-bootstrap"
import { EyesIcon } from "../../../components/_icons"

const styles = {
  wrapper: {
    height: "100vh",
    background: "#ffafa6",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "100%",
    height: "48px",
    borderRadius: "4px",
    borderWidth: "0px",
    border: "none",
    fontSize: "1.75rem",
    color: "#182a74",
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
  button: {
    width: "100%",
    height: "48px",
    background: "#ffdc20",

    color: "#182a74",
    marginTop: "16px",
    textTransform: "uppercase",
    fontWeight: "400",
    letterSpacing: "0.05rem",
    // fontFamily: "sans-serif",
    fontFamily: "apercu",

    borderWidth: "0px",
    border: "none",
    borderRadius: "4px",
  },
  buttonHover: {
    background: "#04bf8a",
    color: "#fff",
  },
  link: {
    color: "#fff",
    fontFamily: "sans-serif",
  },
  linkHover: {
    color: "dodgerblue",
  },
}

const PasswordProtect = () => {
  const [password, setPassword] = useState("")
  const [isButtonHovered, buttonHover] = useState(false)
  const [isThemeHovered, themeHover] = useState(false)
  const [isSiteHovered, siteHover] = useState(false)

  const onSubmit = event => {
    event.preventDefault()
    setSessionPassword(password)
    window.location.reload() // eslint-disable-line
  }

  return (
    <div style={styles.wrapper}>
      <h1 style={{ color: "#182a74" }}>Protected</h1>
      <EyesIcon height="70px" class="mt-4 mb-5" />

      <h4 className="mb-4" style={{ color: "#182a74" }}>
        Enter Password:
      </h4>

      <form onSubmit={onSubmit} style={{ width: "320px" }}>
        <input
          name="password"
          type="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
          style={styles.input}
        />

        <button
          type="submit"
          style={{
            ...styles.button,
            ...(isButtonHovered ? styles.buttonHover : null),
          }}
          onMouseEnter={() => buttonHover(true)}
          onMouseLeave={() => buttonHover(false)}
        >
          Enter
        </button>
      </form>
    </div>
  )
}

export default PasswordProtect
