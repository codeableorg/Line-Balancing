/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Dialog } from "@reach/dialog";
import Component from "@reach/component-component";
import "@reach/dialog/styles.css";

function Header({ viewTitle = "welcome" }) {
  const headerStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "calc(100vw-40px)",
    height: 60,
    backgroundColor: "#004785",
    color: "#FFFFFF",
    padding: "0 20px"
  };

  const titleLogo = {
    display: "block",
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
    margin: "0 auto",
    padding: 0,
    width: "100vw",
    height: "100vh"
  };

  return (
    <header css={headerStyle}>
      <h2
        css={{
          width: "33%",
          fontSize: "1.1em"
        }}
      >
        {viewTitle}
      </h2>
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

export default Header;
