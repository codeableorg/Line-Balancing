/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { createPortal } from "react-dom";
import { Dialog } from "@reach/dialog";
import Component from "@reach/component-component";
import "@reach/dialog/styles.css";
import Role from "../views/Role";
import Leaderboard from "../views/Leaderboard";
import Walkthrough from "../views/Walkthrough";

<<<<<<< HEAD
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
  textAlign: "center",
  padding: "20px 0",
  margin: 0,
  cursor: "pointer",
  listStyle: "none"
};

const buttonList = {
  fontSize: "2em",
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};

const buttonOptions = {
  textDecoration: "none",
  lineHeight: "2em",
  color: "#030303",
  margin: 15,
  width: 100,
  height: 40
};

const dialogStyles = {
  margin: "50 auto",
  padding: 0,
  width: "50vw",
  height: "70vh",
  borderRadius: 10,
  background: "84b1ff"
};

const $portal = document.getElementById("portal");

// function Header({ viewTitle = "welcome" }) {
function Header() {
  const [showDialog, setShowDialog] = React.useState(false);
  const [modal, setModal] = React.useState(null);
  const [isComponentOpen, setIsComponentOpen] = React.useState(false);

  function seeDialog() {
    setShowDialog(true);
  }

  function closeDialog() {
    setShowDialog(false);
  }

  function openComponent() {
    setIsComponentOpen(true);
  }

  function closeComponent() {
    setIsComponentOpen(false);
    setModal(null);
  }

  // const $portal = React.useMemo(() => document.getElementById("portal"), []);

  return (
    <header css={headerStyle}>
      <h2
        css={{
          width: "33%",
          fontSize: "1.1em"
        }}
      >
        {/* {viewTitle} */}
      </h2>
      <a href="/" css={titleLogo}>
        <img
          src="assets/img/wharton_logo.png"
          alt="Wharton Logo"
          css={{ height: 60 }}
        />
        <h1 css={{ display: "none" }}>Line Balancing</h1>
      </a>
      <Component isOpen={showDialog}>
        <div>
          <button onClick={seeDialog} css={menuButton}>
            &#9776;
          </button>

          <Dialog isOpen={showDialog} onDismiss={seeDialog} css={dialogStyles}>
            <ul css={menuList}>
              <li css={buttonList}>
                <button css={buttonOptions} onClick={closeDialog}>
                  Close
                </button>
                <button
                  css={buttonOptions}
                  onClick={() => {
                    setModal("ranking");
                  }}
                >
                  Leaderboard
                </button>
                <button
                  css={buttonOptions}
                  onClick={() => {
                    setModal("home");
                  }}
                >
                  Home
                </button>
                <button
                  css={buttonOptions}
                  onClick={() => {
                    setModal("role");
                  }}
                >
                  Role
                </button>
                <button
                  css={buttonOptions}
                  onClick={() => {
                    setModal("walk");
                  }}
                >
                  Walkthrough
                </button>
              </li>
            </ul>
            {modal === "ranking" &&
              createPortal(
                <Leaderboard
                  component={isComponentOpen}
                  onClose={closeComponent}
                  openModal={openComponent}
                />,
                $portal
              )}
            {modal === "role" &&
              createPortal(
                <Role
                  component={isComponentOpen}
                  onClose={closeComponent}
                  openModal={openComponent}
                />,
                $portal
              )}
            {modal === "walk" &&
              createPortal(
                <Walkthrough
                  component={isComponentOpen}
                  onClose={closeComponent}
                  openModal={openComponent}
                />,
                $portal
              )}
            {modal === "ranking" && <Leaderboard />}
            {modal === "home" && <Welcome />}
            {modal === "role" && <Role />}
            {modal === "walk" && <Walkthrough />}
          </Dialog>
        </div>
      </Component>
=======
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
    fontSize: "2.8em",
    paddingBottom: "7px"
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
>>>>>>> Completed styles for HEADER and Static Content
    </header>
  );
}

export default Header;
