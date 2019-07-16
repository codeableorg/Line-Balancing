/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { createPortal } from "react-dom";
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";
import { Link } from "@reach/router";
import Role from "../views/Role";
import Leaderboard from "../views/Leaderboard";
import Walkthrough from "../views/Walkthrough";
import { navigate } from "@reach/router";

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
  color: "#030303",
  backgroundColor: "blue",
  margin: 15,
  width: 120,
  height: 50
};

const dialogStyles = {
  padding: 0,
  margin: 0,
  width: "100vw",
  height: "100vh",
  borderRadius: 10,
  backgroundColor: "rgba(0, 0, 255, 0.7)"
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
  }

  return (
    <header css={headerStyle}>
      <h2
        css={{
          width: "33%",
          fontSize: "1.1em"
        }}
      />
      <a href="/" css={titleLogo}>
        <img
          src="/assets/img/wharton_logo.png"
          alt="Wharton Logo"
          css={{ height: 60 }}
        />
        <h1 css={{ display: "none" }}>Line Balancing</h1>
      </a>
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
              <NavigationButton onClick={() => setModal("ranking")}>
                Leaderboard
              </NavigationButton>
              <NavigationButton onClick={() => setModal("role")}>
                Role
              </NavigationButton>
              <NavigationButton onClick={() => setModal("walk")}>
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
        </Dialog>
      </div>
    </header>
  );
}

export default Header;
