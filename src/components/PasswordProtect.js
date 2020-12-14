/**
 * Write-only the password as cookie
 */
import React from "react"
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { EyesIcon } from "./_icons"

const styles = {
  parent: {
    position: "fixed",
    width: "100vw",
    height: "2000vh",
    zIndex: 999999,
    overflow: "hidden",
  },
  wrapper: {
    height: "100vh",
    background: "#ffafa6",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
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


class PasswordProtect extends React.Component {
  targetElement = null;
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      password: "",
      isShowing: true,
      isButtonHovered: false,
    };
  }

  componentDidMount() {
    this.targetElement = document.querySelector('#password-wrapper');
    disableBodyScroll(this.targetElement);
  }

  onSubmit(event) {
    event.preventDefault();
    if (this.state.password === "hellosupermakers2020") {
      this.setState({isShowing: false});
      enableBodyScroll(this.targetElement);
    }
  }

  render() {
    if (this.state.isShowing) {
      return (
        <div style={styles.parent} id="password-wrapper">
          <div style={styles.wrapper}>
            <h1 style={{ color: "#182a74" }}>Protected</h1>
            <EyesIcon height="70px" class="mt-4 mb-5" />

            <h4 className="mb-4" style={{ color: "#182a74" }}>
              Enter Password:
            </h4>

            <form onSubmit={this.onSubmit} style={{ width: "320px" }}>
              <input
                name="password"
                type="password"
                value={this.state.password}
                onChange={event => this.setState({password: event.target.value})}
                style={styles.input}
              />

              <button
                type="submit"
                style={{
                  ...styles.button,
                  ...(this.state.isButtonHovered ? styles.buttonHover : null),
                }}
                onMouseEnter={() => this.setState({isButtonHovered: true})}
                onMouseLeave={() => this.setState({isButtonHovered: false})}
              >
                Enter
              </button>
            </form>
          </div>
        </div>
      );
    } else return null;
  }
}

export default PasswordProtect
