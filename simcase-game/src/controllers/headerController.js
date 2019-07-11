/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Dialog } from "@reach/dialog";
import Component from "@reach/component-component";
import "@reach/dialog/styles.css";

function headerController() {
  const headerStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 60,
    backgroundColor: "#004785"
  };

  const titleLogo = {
    display: "block",
    width: 60,
    height: 60
  };

  const menuButton = {
    border: "none",
    color: "#FFFFFF",
    backgroundColor: "#004785",
    fontSize: "2em"
  };

  const menuList = {
    padding: "20px 0",
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
    margin: "60px auto 0",
    padding: 0,
    width: "100vw",
    height: "calc(100vh - 60px)"
  };

  return (
    <header css={headerStyle}>
      <a href="/" css={titleLogo}>
        <img
          src="assets/img/wharton_logo.png"
          alt="Wharton Logo"
          css={{ height: 60 }}
        />
        <h1 css={{ display: "none" }}>Line Balancing</h1>
      </a>
      <Component initialState={{ showDialog: false }}>
        {({ state, setState }) => (
          <div>
            <button
              onClick={() => setState({ showDialog: true })}
              css={menuButton}
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
    </header>
  );
}

export default headerController;
