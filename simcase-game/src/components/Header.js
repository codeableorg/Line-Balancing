/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Dialog } from "@reach/dialog";
import Component from "@reach/component-component";
import "@reach/dialog/styles.css";

function Header({ viewTitle = "welcome" }) {
  const normalSize = {
    width: "33%"
  };
  const headerStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // width: "100vw",
    height: 60,
    backgroundColor: "#004785",
    color: "#FFFFFF"
  };

  const titleText = {
    fontSize: "1.1em",
    fontWeight: "bold",
    marginLeft: 10
  };

  const titleLogo = {
    display: "block",
    margin: "0 auto",
    height: 60
  };

  const titleButton = {
    border: "none",
    color: "#FFFFFF",
    backgroundColor: "#004785",
    fontSize: "2.3em",
    paddingBottom: "5px"
  };

  const menuList = {
    padding: "10px 0",
    margin: 0,
    listStyle: "none",
    "&>li": {
      textAlign: "center",
      fontSize: "2em"
    },
    "& a": {
      textDecoration: "none",
      lineHeight: "2em",
      color: "#030303"
    }
  };

  const dialogStyles = {
    margin: "0 auto",
    padding: 0,
    width: "100vw",
    height: "100vh"
  };

  return (
    <header css={headerStyle}>
      <div css={normalSize}>
        <h2 css={titleText}>{viewTitle}</h2>
      </div>

      <div css={normalSize}>
        <a href="/">
          <img
            src="assets/img/wharton_logo.png"
            alt="Wharton Logo"
            css={titleLogo}
          />
          <h1 css={{ display: "none" }}>Line Balancing</h1>
        </a>
      </div>

      <div css={{ ...normalSize, textAlign: "right" }}>
        <Component initialState={{ showDialog: false }}>
          {({ state, setState }) => (
            <div>
              <button
                onClick={() => setState({ showDialog: true })}
                css={titleButton}
              >
                &#9776;
              </button>

              <Dialog
                isOpen={state.showDialog}
                onDismiss={() => setState({ showDialog: true })}
                css={dialogStyles}
              >
                <ul css={menuList}>
                  <li>
                    <a onClick={() => setState({ showDialog: false })}>Close</a>
                  </li>
                  <li>
                    <a href="/welcome">Welcome</a>
                  </li>
                  <li>
                    <a href="/role">Role</a>
                  </li>
                  <li>
                    <a href="/walkthrough">Walkthrough</a>
                  </li>
                  <li>
                    <a href="/playground">Playground</a>
                  </li>
                  <li>
                    <a href="/leaderboard">Leaderboard</a>
                  </li>
                </ul>
              </Dialog>
            </div>
          )}
        </Component>
      </div>
    </header>
  );
}

export default Header;
