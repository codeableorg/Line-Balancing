/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { createPortal } from "react-dom";
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";
import { navigate } from "@reach/router";
import MyModal from "../views/Modal";

const headerStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "calc(100vw-40px)",
  height: 60,
  backgroundColor: "#004785",
  color: "#FFFFFF",
  padding: 0
};

const titleLogo = {
  display: "block",
  height: 60
};

const titleDivs = {
  width: "33%"
};

const menuButton = {
  border: "none",
  color: "#FFFFFF",
  backgroundColor: "#004785",
  fontSize: "2em"
};

const menuList = {
  cursor: "pointer",
  padding: "20px 0",
  margin: 0,
  textAlign: "center",
  listStyle: "none"
};

const buttonList = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontSize: "2em"
};

const buttonOptions = {
  textDecoration: "none",
  lineHeight: "2em",
  backgroundColor: "blue",
  color: "#000000",
  margin: 15,
  width: 120,
  height: 50
};

const dialogStyles = {
  padding: 0,
  margin: 0,
  width: "100vw",
  height: "100vh",
  background: "rgba(0,0,255,0.7)"
};

function NavigationButton({ children, onClick }) {
  return (
    <button css={buttonOptions} onClick={onClick}>
      {children}
    </button>
  );
}

const $portal = document.getElementById("portal");

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
    closeDialog();
  }

  return (
    <header css={headerStyle}>
      <div css={titleDivs}>
        <h2
          css={{
            fontSize: "1.1em"
          }}
        >
          &nbsp;
        </h2>
      </div>
      <div css={{ ...titleDivs }}>
        <a href="/" css={titleLogo}>
          <img
            src="assets/img/wharton_logo.png"
            alt="Wharton Logo"
            css={{ height: 60, display: "block", margin: "0 auto" }}
          />
          <h1 css={{ display: "none" }}>Line Balancing</h1>
        </a>
      </div>
      <div css={{ ...titleDivs, textAlign: "right" }}>
        <button onClick={seeDialog} css={menuButton}>
          &#9776;
        </button>
        <Dialog isOpen={showDialog} onDismiss={seeDialog} css={dialogStyles}>
          <ul css={menuList}>
            <li css={buttonList}>
              <button css={buttonOptions} onClick={closeDialog}>
                Close
              </button>
              <NavigationButton
                onClick={() => {
                  setModal("ranking");
                }}
              >
                Leaderboard
              </NavigationButton>
              <NavigationButton
                onClick={() => {
                  setModal("role");
                }}
              >
                Role
              </NavigationButton>
              <NavigationButton
                onClick={() => {
                  setShowDialog(false);
                  setModal("walk");
                }}
              >
                Walkthrough
              </NavigationButton>
              <button
                css={buttonOptions}
                onClick={() => {
                  navigate("/about");
                }}
              >
                About
              </button>
            </li>
          </ul>
          {modal === "ranking" &&
            createPortal(
              <MyModal
                component={isComponentOpen}
                onClose={closeComponent}
                openModal={openComponent}
                componentId={3}
              />,
              $portal
            )}
          {modal === "role" &&
            createPortal(
              <MyModal
                component={isComponentOpen}
                onClose={closeComponent}
                openModal={openComponent}
                componentId={1}
              />,
              $portal
            )}
          {modal === "walk" &&
            createPortal(
              <MyModal
                component={isComponentOpen}
                onClose={closeComponent}
                openModal={openComponent}
                componentId={2}
              />,
              $portal
            )}
          {/* 
          {modal === "NewRole" &&
            createPortal(
              <MyModal
                component={isComponentOpen}
                onClose={closeComponent}
                openModal={openComponent}
                componentId={1}
              />,
              $portal
            )}
          {modal === "NewWalk" &&
            createPortal(
              <MyModal
                component={isComponentOpen}
                onClose={closeComponent}
                openModal={openComponent}
                componentId={2}
              />,
              $portal
            )}
            */}
        </Dialog>
      </div>
    </header>
  );
}

export default Header;
